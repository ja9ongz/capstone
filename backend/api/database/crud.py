from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, ForeignKey, CheckConstraint, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from datetime import datetime

from database import Base, session
from logging import logging

class CRUD:
    @staticmethod
    def create(obj):
        session.add(obj)
        session.commit()
        logging.info(f"Created: {obj.__class__.__name__} with ID {obj.__dict__.get('task_id', 'N/A')}")

    @staticmethod
    def read(model, obj_id):
        obj = session.query(model).filter_by(task_id=obj_id).first()
        if obj:
            logging.info(f"Read: {model.__name__} with ID {obj_id}")
        else:
            logging.warning(f"Read failed: {model.__name__} with ID {obj_id} not found")
        return obj

    @staticmethod
    def read_all(model):
        objs = session.query(model).all()
        logging.info(f"Read all records from {model.__name__}, Total: {len(objs)}")
        return objs

    @staticmethod
    def update(obj):
        session.commit()
        logging.info(f"Updated: {obj.__class__.__name__} with ID {obj.__dict__.get('task_id', 'N/A')}")

    @staticmethod
    def delete(obj):
        session.delete(obj)
        session.commit()
        logging.info(f"Deleted: {obj.__class__.__name__} with ID {obj.__dict__.get('task_id', 'N/A')}")
