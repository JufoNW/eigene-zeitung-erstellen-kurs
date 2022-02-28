from django.urls import path, re_path

from .views import *

app_name = 'PollZ'
urlpatterns = [
    path('', welcome_page, name='welcome'),
    path('english/', english_poll, name='frankpoll'),
    path('english/finished/', english_finished, name='frankpoll'),

    # Matches any html file
    re_path(r'^.*\.*', page_handler, name='page_handler')
]
