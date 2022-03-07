# from pyexpat import model
from django.shortcuts import render
from rest_framework.decorators import api_view
# Create your views here.
from .models import Register
from rest_framework import generics
from .serializers import RegisterSerializer

from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse


class RegisterCreate(generics.CreateAPIView):
    # API endpoint that allows creation of a new customer
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer
# @csrf_exempt

class RegisterList(generics.ListAPIView):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer

class RegisterDelete(generics.RetrieveDestroyAPIView):
    # API endpoint that allows a customer record to be deleted.
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer


class RegisterUpdate(generics.RetrieveUpdateAPIView):
    # API endpoint that allows a customer record to be updated.
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer

class RegisterDetail(generics.RetrieveAPIView):
    # API endpoint that returns a single customer by pk.
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer




    