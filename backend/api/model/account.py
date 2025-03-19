from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from datetime import date

class AccountManager(BaseUserManager):
    def create_user(self, username, email, password, **extra_fields):
        if not email:
            raise ValueError("Users must have an email address")
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def authenticate_user(self, username, password):
        try:
            user = self.model.objects.get(username=username)  
            if user.check_password(password): 
                return user
            else:
                return None 
        except self.model.DoesNotExist:
            return None 

class Account(AbstractBaseUser):
    uid = models.AutoField(primary_key=True)
    username = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    profile_picture = models.TextField(null=True, blank=True) 
    date_of_birth = models.DateField(default=date.today)
    
    parent_email = models.EmailField(null=True, blank=True)  
    parent_id = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)

    objects = AccountManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name']

    def __str__(self):
        return self.username
