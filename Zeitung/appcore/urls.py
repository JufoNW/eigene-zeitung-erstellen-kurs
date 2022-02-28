from django.urls import path, re_path
from appcore.core.essentials import page_handler

from .views import *

app_name = 'appcore'
urlpatterns = [
    path('', index, name='index'),

    # Nicht ändern und immer zuletzt stehen lassen, kümmert sich um Errors
    re_path(r'^.*\.*', page_handler, name='page_handler')
]
