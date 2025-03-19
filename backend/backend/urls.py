"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api.views.signup import signup  
from api.views.login import login, get_children_info, delete_child_profile, get_profile

from api.views.common import (
    create_wallet, retrieve_wallet, update_wallet, delete_wallet,
    create_savings, retrieve_all_savings, retrieve_savings, update_savings, delete_savings,
    create_tx_type, retrieve_tx_type, update_tx_type, delete_tx_type,
    create_tx, retrieve_all_txs, retrieve_tx, update_tx, delete_tx,
    create_credit_score, retrieve_all_credit_scores, retrieve_credit_score, update_credit_score, delete_credit_score,
    create_status, retrieve_status, update_status, delete_status,
    create_task, retrieve_all_tasks, retrieve_task, update_task, delete_task,
    create_simulation, retrieve_simulation, update_simulation, delete_simulation,
    create_settings, retrieve_all_settings, retrieve_settings, update_settings, delete_settings,
    create_debt, retrieve_all_debt, retrieve_debt, update_debt, delete_debt,
    create_rewards, retrieve_all_rewards, retrieve_rewards, update_rewards, delete_rewards
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/signup/', signup, name='signup'),
    path('api/login/', login, name='login'),
    path('api/login/delete-child-profile/<int:user_uid>/', delete_child_profile),
    path('api/login/get-children-info/<int:user_uid>/', get_children_info),
    path('api/login/get-profile/<int:user_uid>/', get_profile),

    # Wallet
    path('api/wallet/', retrieve_wallet),
    path('api/wallet/create/', create_wallet),
    path('api/wallet/<int:pk>/', retrieve_wallet),
    path('api/wallet/<int:pk>/update/', update_wallet),
    path('api/wallet/<int:pk>/delete/', delete_wallet),

    # Savings Account
    path('api/savings/', retrieve_all_savings),
    path('api/savings/create/', create_savings),
    path('api/savings/<int:pk>/', retrieve_savings),
    path('api/savings/<int:pk>/update/', update_savings),
    path('api/savings/<int:pk>/delete/', delete_savings),

    # DEBT Account
    path('api/debt/', retrieve_all_debt, name="retrieve_all_debt"),
    path('api/debt/create/', create_debt),
    path('api/debt/<int:pk>/', retrieve_debt),
    path('api/debt/<int:pk>/update/', update_debt),
    path('api/debt/<int:pk>/delete/', delete_debt),

    # Transaction Type
    path('api/transaction-type/create/', create_tx_type),
    path('api/transaction-type/<int:pk>/', retrieve_tx_type),
    path('api/transaction-type/<int:pk>/update/', update_tx_type),
    path('api/transaction-type/<int:pk>/delete/', delete_tx_type),

    # Transaction
    path('api/transaction/', retrieve_all_txs),
    path('api/transaction/create/', create_tx),
    path('api/transaction/<int:pk>/', retrieve_tx),
    path('api/transaction/<int:pk>/update/', update_tx),
    path('api/transaction/<int:pk>/delete/', delete_tx),

    # Credit Score
    path('api/credit-score/', retrieve_all_credit_scores),
    path('api/credit-score/create/', create_credit_score),
    path('api/credit-score/<int:pk>/', retrieve_credit_score),
    path('api/credit-score/<int:pk>/update/', update_credit_score),
    path('api/credit-score/<int:pk>/delete/', delete_credit_score),

    # Status
    path('api/status/create/', create_status),
    path('api/status/<int:pk>/', retrieve_status),
    path('api/status/<int:pk>/update/', update_status),
    path('api/status/<int:pk>/delete/', delete_status),

    # rewards
    path('api/rewards/', retrieve_all_rewards, name="retrieve_all_rewards"),
    path('api/rewards/create/', create_rewards, name="create_rewards"),
    path('api/rewards/<int:pk>/', retrieve_rewards, name="retrieve_rewards"),
    path('api/rewards/<int:pk>/update/', update_rewards, name="update_rewards"),
    path('api/rewards/<int:pk>/delete/', delete_rewards, name="delete_rewards"),

    # Task
    path('api/task/', retrieve_all_tasks, name="retrieve_all_tasks"),
    path('api/task/create/', create_task, name="create_task"),
    path('api/task/<int:pk>/', retrieve_task, name="retrieve_task"),
    path('api/task/<int:pk>/update/', update_task, name="update_task"),
    path('api/task/<int:pk>/delete/', delete_task, name="delete_task"),

    # Simulation
    path('api/simulation/create/', create_simulation),
    path('api/simulation/<int:pk>/', retrieve_simulation),
    path('api/simulation/<int:pk>/update/', update_simulation),
    path('api/simulation/<int:pk>/delete/', delete_simulation),

    # Settings
    path('api/settings/', retrieve_all_settings),
    path('api/settings/update/', update_settings),
]
