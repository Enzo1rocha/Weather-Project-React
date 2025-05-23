from django.contrib import admin
from wheater.models import BootLocation, FavoriteLocations

# Register your models here.

class BootLocationAdmin(admin.ModelAdmin):
    list_display = ('id', 'get_user','location_name','long','lat')
    search_fields = ('user_boot_location__username',)

    def get_user(self, obj):
        return getattr(obj, 'user_boot_location', None) or "-"
    get_user.short_description = 'Usuário'


class FavoriteLocationsAdmin(admin.ModelAdmin):
    list_display = ('id', 'get_user','location_name','long','lat')

    def get_user(self, obj):
        return getattr(obj, 'user_favorite_locations', None) or "-"
    get_user.short_description = 'Usuário'


admin.site.register(BootLocation, BootLocationAdmin)
admin.site.register(FavoriteLocations, FavoriteLocationsAdmin)