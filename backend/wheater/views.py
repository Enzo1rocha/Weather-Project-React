from django.shortcuts import render
import requests
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
# Create your views here.

class WeatherLocationView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        city = request.query_params.get('city')
        if not city:
            return Response({'error': 'Cidade não fornecida'}, status=400)
        
        tomorrow_url = f'https://api.tomorrow.io/v4/weather/forecast'
        
        nomination_url = f'https://nominatim.openstreetmap.org/search'
        headers_nomination_url = {
            'User-Agent': 'MeuAppClima/1.0 (email@exemplo.com)'
        }
        params_nomination_url = {
            'q': city,
            'format': 'json'
        }

        
        location_response = requests.get(nomination_url, headers=headers_nomination_url, params=params_nomination_url)

        if location_response.status_code == 200:
            try:

                location_data = location_response.json()

                params_tomorrow_url = {
                    'location': f'{location_data[0]['lat']},{location_data[0]['lon']}',
                    'apikey': 'HvcYXEmeMPd6FPJWEGxhZAcbzGMCgcuo',
                    'timesteps': '1d',
                }

                tomorrow_response = requests.get(tomorrow_url, params=params_tomorrow_url)

                if tomorrow_response.status_code == 200:
                    tomorrow_data = tomorrow_response.json()

                #terminar de construir a api... 

                    return_JSON = {
                        'name': location_data[0]['name'],
                        'display_name': location_data[0]['display_name'],
                        'days': tomorrow_data['timelines']['daily']
                    }
                    return Response({'message': return_JSON})
                else:
                    return Response({'error': 'Erro ao decodificar json tomorrow data'}, status=tomorrow_response.status_code)
                
            except ValueError:
                return Response({'error': 'Erro ao decodificar json',}, status=500)
        else:
            return Response({'error': f'erro na requisição {location_response.status_code}'}, status=location_response.status_code)
        #amanha 28/05 verificar o motivo do erro na linha 32