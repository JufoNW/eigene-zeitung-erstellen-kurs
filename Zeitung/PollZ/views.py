"""
Views.py
Hier den gesamten Backend Code für die Seiten dieses Moduls hinzufügen
"""

from django.shortcuts import render


def index(request):
    """
    Index View page, hier Python code für Backend der Website Index Page schreiben.
    :param request:
    :return:
    """
    return render(request, "pages/index.html", context={})
