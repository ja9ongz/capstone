#!/usr/bin/env python
import os
import sys
from sqlalchemy import text
from django.core.management import execute_from_command_line
from api.database.connect import session  

def main():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings') 
    try:
        from django.core.management import execute_from_command_line
    except ImportError:
        raise ImportError(
            "Could not import Django. Are you sure it's installed and available "
            "on your PYTHONPATH environment variable? Did you forget to activate a virtual environment?"
        )
    execute_from_command_line(sys.argv)

def test_db_connection():
    try:
        result = session.execute(text("SELECT 1")).fetchone()
        if result:
            print("Database connection successful!")
        else:
            print("Connected, but no response from DB.")
    except Exception as e:
        print(f"Database connection failed: {e}")
        sys.exit(1)


if __name__ == '__main__':
    main()
    test_db_connection()
