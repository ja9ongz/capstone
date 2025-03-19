from api.model.account import Account
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.decorators import login_required
from api.utils.tokens import create_refresh_token

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({'error': 'Username and password are required'}, status=status.HTTP_400_BAD_REQUEST)

    user = Account.objects.authenticate_user(username, password)

    if user is not None:
        refresh = create_refresh_token(user)
        user_info = {
            'user_email': user.email,
            'user_id': user.uid,
            'profile_picture': user.profile_picture,
            'first_name' : user.first_name
        }

        parent_info = None
        if user.parent_id:
            parent_info = {
                'parent_email': user.parent_email,
                'parent_id': user.parent_id.uid
            }

        return Response({
            'message': 'success',
            'token': str(refresh.access_token),
            'userInfo': user_info,
            'refresh': str(refresh),
            'parentInfo': parent_info,
            'accountType' :  'parent' if parent_info is None else 'child'
        }, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET'])
def get_profile(request, user_uid): 
    print(user_uid)
    user_info = { }
    profile = Account.objects.filter(uid=user_uid).first() 
    print (f"{profile}")
    if profile:
        user_info = {
            'user_id': profile.uid,
            'user_name': f'{profile.first_name} {profile.last_name}',
            'email': profile.email,
            'profile_picture': profile.profile_picture,  
        }
    else:
        return Response({'message': 'No children found for this user.'}, status=status.HTTP_404_NOT_FOUND)

    return Response({
        'message': 'success',
        'profile_info': user_info
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_children_info(request, user_uid): 
    children_info = []
    children = Account.objects.filter(parent_id=user_uid) 

    if children.exists():
        children_info = [
            {
                'child_id': child.uid,
                'child_name': f'{child.first_name} {child.last_name}',
                'email': child.email,
                'profile_picture': child.profile_picture,  
            } 
            for child in children
        ]
    else:
        return Response({'message': 'No children found for this user.'}, status=status.HTTP_404_NOT_FOUND)


    return Response({
        'message': 'success',
        'childrenInfo': children_info
    }, status=status.HTTP_200_OK)

@api_view(['DELETE'])
def delete_child_profile(request, user_uid): 
    try:
        children = Account.objects.filter(pk=user_uid) 
    except children.DoesNotExist:
        return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
    children.delete()
    return Response({'message': 'success'}, status=status.HTTP_200_OK)