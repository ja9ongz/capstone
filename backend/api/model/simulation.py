from django.db import models
from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, ForeignKey, CheckConstraint, text
from datetime import datetime
from api.model.account import Account

class Simulation(models.Model):
    sim_id = models.AutoField(primary_key=True)
    uid = models.ForeignKey(Account, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    details = models.JSONField()  # Store simulation settings and results

    def __str__(self):
        return f"Simulation {self.sim_id} for {self.uid.username}"
    
