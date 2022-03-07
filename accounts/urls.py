from django.urls import include, path
from .views import RegisterCreate, RegisterList,RegisterDelete, RegisterUpdate,RegisterDetail


urlpatterns = [
    path('create/', RegisterCreate.as_view(), name='create-register'),
    path('list/', RegisterList.as_view()),
    path('delete/<int:pk>/', RegisterDelete.as_view(), name='delete-customer'),
    path('update/<int:pk>/', RegisterUpdate.as_view(), name='update-customer'),
    path('customer/<int:pk>/', RegisterDetail.as_view(), name='retrieve-customer'),
]