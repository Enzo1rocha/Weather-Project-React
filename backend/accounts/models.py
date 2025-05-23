from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class CustomUser(AbstractUser):
    favorite_locations = models.ForeignKey("wheater.FavoriteLocations", on_delete=models.CASCADE, related_name='user_favorite_locations', null=True, blank=True)
    boot_location = models.OneToOneField("wheater.BootLocation", on_delete=models.CASCADE, related_name='user_boot_location', null=True, blank=True)


