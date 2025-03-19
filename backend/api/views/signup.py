from api.model.account import Account 
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import logging
import json

logger = logging.getLogger(__name__)

@api_view(['POST'])
def signup(request):
    try:
        print("Received data:", json.dumps(request.data))

        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')
        date_of_birth = request.data.get('date_of_birth')
        profile_picture = request.data.get('profile_picture')
        parent_email = request.data.get('parent_email')  

        print(f"Extracted fields: username={username}, email={email}, password={password}, parent_email={parent_email}")

        missing_fields = [field for field in ['username', 'email', 'password', 'first_name', 'last_name', 'date_of_birth'] if not request.data.get(field)]
        if missing_fields:
            return Response({'error': f'Missing required fields: {", ".join(missing_fields)}'}, status=status.HTTP_400_BAD_REQUEST)

        if Account.objects.filter(username=username).exists():
            return Response({'error': 'Username already taken'}, status=status.HTTP_400_BAD_REQUEST)
        if Account.objects.filter(email=email).exists():
            return Response({'error': 'Email already in use'}, status=status.HTTP_400_BAD_REQUEST)

        parent_account = None
        if parent_email:
            parent_account = Account.objects.filter(email=parent_email).first()
            if not parent_account:
                return Response({'error': 'Parent email not found'}, status=status.HTTP_400_BAD_REQUEST)

        user = Account.objects.create_user(
            username=username,
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            date_of_birth=date_of_birth,
            profile_picture=profile_picture,
            parent_email=parent_email,
            parent_id=parent_account
        )

        print(f"Created user: {user}")
        return Response({'message': 'success'}, status=status.HTTP_201_CREATED)

    except Exception as e:
        logger.error(f"Server error: {str(e)}")
        return JsonResponse({'error': f"Server error: {str(e)}"}, status=500)
