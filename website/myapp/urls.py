from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='index'),
    path('printer_more', views.printer_more, name='printer_more'),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
