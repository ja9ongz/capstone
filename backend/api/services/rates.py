from background_task import background
from api.model.account import Account
from api.model.settings import SettingsAccount
from api.model.savingsacc import SavingsAccount, DebtAccount

@background(schedule=5)  
def update_accounts():
    print("Background task `update_accounts` started!")

    settings = SettingsAccount.objects.first()
    if not settings:
        print("No settings found. Exiting task.")
        return  

    penalty_rate = settings.penalty_rates  
    interest_rate = settings.interest_rates

    accounts = Account.objects.all()
    for account in accounts:
        savings_accounts = SavingsAccount.objects.filter(uid=account)
        for savings in savings_accounts:
            savings.amount *= interest_rate  
            savings.save()

        debt_accounts = DebtAccount.objects.filter(uid=account)
        for debt in debt_accounts:
            debt.rental *= penalty_rate  
            debt.utilities *= penalty_rate  
            debt.interest_rates *= penalty_rate  
            debt.penalty_rates *= penalty_rate  
            debt.total = debt.rental + debt.utilities
            debt.save()

    print("Background task `update_accounts` completed!")

def schedule_update_task():
    settings = SettingsAccount.objects.first()
    if settings:
        seconds = settings.seconds  
        print(f"Scheduling update_accounts task with a delay of {seconds} seconds.")
        update_accounts(schedule=seconds)  
        print(f'Successfully scheduled task to run in {seconds} seconds')
    else:
        print('Settings not found')
