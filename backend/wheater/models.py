from django.db import models

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