from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class BootLocation(models.Model):
    id = models.AutoField(primary_key=True)
    location_name = models.CharField(max_length=100, blank=False, null=False)
    long = models.CharField(max_length=100, blank=False, null=False)
    lat = models.CharField(max_length=100, blank=False, null=False)


class FavoriteLocations(models.Model):
    id = models.AutoField(primary_key=True)
    location_name = models.CharField(max_length=100, blank=False, null=False)
    long = models.CharField(max_length=255, blank=False, null=False)
    lat = models.CharField(max_length=255, blank=False, null=False)
    

class CustomUser(AbstractUser):
    favorite_locations = models.ForeignKey(FavoriteLocations, on_delete=models.CASCADE, related_name='user_favorite_locations', null=True, blank=True)
    boot_location = models.OneToOneField(BootLocation, on_delete=models.CASCADE, related_name='user_boot_location', null=True, blank=True)