from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.model.wallet import Wallet
from api.model.savingsacc import SavingsAccount, DebtAccount
from api.model.transactions import Transaction, TransactionType
from api.model.creditscore import CreditScore
from api.model.status import Status
from api.model.tasks import Task
from api.model.simulation import Simulation
from api.model.settings import SettingsAccount
from api.model.rewards import Rewards
from api.serializers.serializer import RewardsSerializer, DebtAccountSerializer, SettingsSerializer, WalletSerializer, SavingsAccountSerializer, TransactionTypeSerializer, TransactionSerializer, CreditScoreSerializer, StatusSerializer, TaskSerializer, SimulationSerializer

def generic_crud(model, serializer_class):
    @api_view(['POST'])
    def create(request):
        print(f"request {request.data}")
        serializer = serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'success','data': serializer.data}, status=status.HTTP_201_CREATED)        
        print(serializer.errors) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @api_view(['GET'])
    def retrieve_all(request):
        instances = model.objects.all()
        serializer = serializer_class(instances, many=True)
        return Response({'message': 'success','data': serializer.data}, status=status.HTTP_201_CREATED)        
    
    @api_view(['GET'])
    def retrieve(request, pk=None):
        lookup_value = pk or request.query_params.get('uid')
        print(f"lookup {request.query_params.get('uid')}")

        if not lookup_value:
            return Response({'error': 'Either pk or uid must be provided'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            if pk:
                instance = model.objects.get(pk=lookup_value)
                serializer = serializer_class(instance)
                return Response({'message': 'success', 'data': serializer.data})
            else:
                instances = model.objects.filter(uid=lookup_value)
                if not instances:
                    return Response({'error': 'No items found with this uid'}, status=status.HTTP_404_NOT_FOUND)

                serializer = serializer_class(instances, many=True)
                return Response({'message': 'success', 'data': serializer.data})

        except model.DoesNotExist:
            return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
    

    @api_view(['PUT'])
    def update(request, pk=None):
        try:
            if pk:
                instance = model.objects.get(pk=pk) 
            else:
                instance = model.objects.first()  
            
            if not instance:
                return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)

        except model.DoesNotExist:
            return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = serializer_class(instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'success', 'data': serializer.data}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @api_view(['DELETE'])
    def delete(request, pk):
        try:
            instance = model.objects.get(pk=pk)
        except model.DoesNotExist:
            return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
        instance.delete()
        return Response({'message': 'success'}, status=status.HTTP_200_OK)

    return create, retrieve_all, retrieve, update, delete

create_wallet, retrieve_all_wallets, retrieve_wallet, update_wallet, delete_wallet = generic_crud(Wallet, WalletSerializer)
create_savings, retrieve_all_savings, retrieve_savings, update_savings, delete_savings = generic_crud(SavingsAccount, SavingsAccountSerializer)
create_tx_type, retrieve_all_tx_types, retrieve_tx_type, update_tx_type, delete_tx_type = generic_crud(TransactionType, TransactionTypeSerializer)
create_tx, retrieve_all_txs, retrieve_tx, update_tx, delete_tx = generic_crud(Transaction, TransactionSerializer)
create_credit_score, retrieve_all_credit_scores, retrieve_credit_score, update_credit_score, delete_credit_score = generic_crud(CreditScore, CreditScoreSerializer)
create_status, retrieve_all_statuses, retrieve_status, update_status, delete_status = generic_crud(Status, StatusSerializer)
create_task, retrieve_all_tasks, retrieve_task, update_task, delete_task = generic_crud(Task, TaskSerializer)
create_simulation, retrieve_all_simulations, retrieve_simulation, update_simulation, delete_simulation = generic_crud(Simulation, SimulationSerializer)
create_settings, retrieve_all_settings, retrieve_settings, update_settings, delete_settings = generic_crud(SettingsAccount, SettingsSerializer)
create_debt, retrieve_all_debt, retrieve_debt, update_debt, delete_debt = generic_crud(DebtAccount, DebtAccountSerializer)
create_rewards, retrieve_all_rewards, retrieve_rewards, update_rewards, delete_rewards = generic_crud(Rewards, RewardsSerializer)
