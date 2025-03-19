from django.contrib import admin
from api.model.status import Status
from api.model.settings import SettingsAccount
from api.model.transactions import TransactionType

class StatusAdmin(admin.ModelAdmin):
    list_display = ['status_id', 'status']  

class SettingsAdmin(admin.ModelAdmin):
    list_display = ['id', 'rental', 'utilities', 'interest_rates']

    
class TransactionTypeAdmin(admin.ModelAdmin):
    list_display = ['transaction_type_id', 'name']

# Register the Status model with its admin class
admin.site.register(Status, StatusAdmin)    
admin.site.register(SettingsAccount, SettingsAdmin)
admin.site.register(TransactionType, TransactionTypeAdmin)
