from django.db import models

# Create your models here.

class BootLocation(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    location_name = models.CharField(max_length=100, blank=False, null=False)
    long = models.CharField(max_length=100, blank=False, null=False)
    lat = models.CharField(max_length=100, blank=False, null=False)

class FavoriteLocations(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    location_name = models.CharField(max_length=100, blank=False, null=False)
    long = models.CharField(max_length=255, blank=False, null=False)
    lat = models.CharField(max_length=255, blank=False, null=False)

    def __str__(self):
        return f"{self.user.username} - {self.location}"