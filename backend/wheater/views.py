from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth import get_user_model
from .serializers import FavoriteLocationsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from wheater.models import FavoriteLocations

# Create your views here.
