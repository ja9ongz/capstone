from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, ForeignKey, CheckConstraint, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from datetime import datetime
from backend import settings

Base = declarative_base()

db_settings = settings.DATABASES['default']
DATABASE_NAME = db_settings['NAME']

def get_database_url(username, password, server):
    return f"mssql+pyodbc://{username}:{password}@{server}/{DATABASE_NAME}?driver=ODBC+Driver+17+for+SQL+Server"

def initialize_database(username, password, server):
    master_url = get_database_url(username, password, server)
    print(master_url)
    engine = create_engine(master_url)
    
    with engine.connect() as conn:
        conn.execute(text(f"IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = '{DATABASE_NAME}') CREATE DATABASE {DATABASE_NAME}"))
    
    database_url = get_database_url(username, password, server)
    engine = create_engine(database_url)
    Base.metadata.create_all(engine)
    return sessionmaker(bind=engine)()

session = initialize_database(db_settings['USER'], db_settings['PASSWORD'], db_settings['HOST'])