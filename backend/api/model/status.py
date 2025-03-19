from django.db import models
from sqlalchemy import create_engine, Text, Column, Integer, String, Float, DateTime, ForeignKey, CheckConstraint, text
from datetime import datetime

class Status(models.Model):
    status_id = models.AutoField(primary_key=True)
    status = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.status