from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework import routers

urlpatterns = [
    
    path('admin/', admin.site.urls),
    path('api/', include('tasks.api.urls')),
    path('auth/', obtain_auth_token),
    
]
