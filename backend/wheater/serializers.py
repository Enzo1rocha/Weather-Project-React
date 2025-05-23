from rest_framework import serializers
from .models import FavoriteLocations, BootLocation
from django.contrib.auth import get_user_model
from dj_rest_auth.serializers import UserDetailsSerializer

class FavoriteLocationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteLocations
        fields = '__all__'


class BootLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BootLocation
        fields = '__all__'


class CustomUserDetailsSerializer(UserDetailsSerializer):
    favorite_locations = FavoriteLocationsSerializer(read_only=True)
    boot_location = BootLocationSerializer(read_only=True)

    class Meta:
        model = get_user_model().objects.all()
        fields = UserDetailsSerializer.Meta.fields + ('favorite_locations', 'boot_location')