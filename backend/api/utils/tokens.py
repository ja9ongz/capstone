from rest_framework_simplejwt.tokens import RefreshToken

def create_refresh_token(user):
    refresh = RefreshToken()
    refresh['user_id'] = user.uid  
    print(f"refresh {refresh['user_id']}")
    return refresh
