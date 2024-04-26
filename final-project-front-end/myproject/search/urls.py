from django.urls import path
from . import views

urlpatterns = [
    path('members/', views.latest_search_queries, name='members'),
    path('hello/', views.add_search_query, name='hello')
]