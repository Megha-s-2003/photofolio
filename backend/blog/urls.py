from django.urls import path
from .views import (
    BlogListAPIView,
    BlogDetailAPIView,
    ContactMessageCreateAPIView,
)

urlpatterns = [
    path('posts/', BlogListAPIView.as_view(), name='blog-list'),
    path('posts/<slug:slug>/', BlogDetailAPIView.as_view(), name='blog-detail'),

    path('contact/', ContactMessageCreateAPIView.as_view(), name='contact'),
]