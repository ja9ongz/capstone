from rest_framework import serializers
from api.model.wallet import Wallet
from api.model.savingsacc import SavingsAccount, DebtAccount
from api.model.transactions import Transaction, TransactionType
from api.model.creditscore import CreditScore
from api.model.status import Status
from api.model.tasks import Task
from api.model.simulation import Simulation
from django.utils import timezone
from api.model.account import Account
from api.model.settings import SettingsAccount
from api.model.rewards import Rewards

class SettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SettingsAccount
        fields = '__all__'

class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields = '__all__'

class SavingsAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavingsAccount
        fields = '__all__'

class DebtAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = DebtAccount
        fields = '__all__'

class TransactionTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransactionType
        fields = '__all__'

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'

class CreditScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreditScore
        fields = '__all__'

class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = '__all__'

class RewardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rewards
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = [
            'task_id', 'title', 'description', 'created_at', 'updated_at', 'completed_at',
            'reward_amount', 'difficulty', 'tags', 'uid', 'status_id'
        ]

    title = serializers.CharField(required=True)
    description = serializers.CharField(required=True)
    reward_amount = serializers.DecimalField(max_digits=10, decimal_places=2, required=True)
    difficulty = serializers.CharField(max_length=50, required=True)
    tags = serializers.CharField(max_length=50, required=True)
    uid = serializers.PrimaryKeyRelatedField(queryset=Account.objects.all(), required=True)
    status_id = serializers.PrimaryKeyRelatedField(queryset=Status.objects.all(), required=False)
    created_at = serializers.DateTimeField(required=True)
    updated_at = serializers.DateTimeField(required=True)

    def create(self, validated_data):
        validated_data['created_at'] = validated_data.get('created_at', timezone.now())
        validated_data['updated_at'] = validated_data.get('updated_at', timezone.now())
        return super().create(validated_data)
    
    def validate(self,data):
        return data

class SimulationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Simulation
        fields = '__all__'
