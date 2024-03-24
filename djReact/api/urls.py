from django.urls import path, include
from .views import *

urlpatterns = [
    path('blogs/', BlogListAPIView.as_view(), name='blog-list'),
    path('blogs/<slug:slug>/', BlogDetailAPIView.as_view(), name='blog-detail'),
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<pk>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<pk>/blogs/', CategoryPostAPIView.as_view(), name='category-blogs'),
    path('popular-posts/', PopularPostsAPIView.as_view(), name='popular-posts'),
    path('data/',your_view_function,name='your_view_function')
]

# urlpatterns = [
#     path('home',RoomView.as_view())
# ]
