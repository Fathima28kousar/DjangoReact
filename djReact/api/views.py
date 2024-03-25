from django.shortcuts import render
from .models import *
from rest_framework import generics
from .serializers import BlogSerializer,CategorySerializer
import requests
from django.http import JsonResponse

# def fetch_and_save_meal_data():
#     # Fetch data from MealDB API
#     url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=g'
#     response = requests.get(url)
    
#     if response.status_code == 200:
#         data = response.json()
#         meals = data['meals']  # Get list of meals
        
#         for meal in meals:
#             # Extract meal attributes
#             meal_id = meal['idMeal']
#             title = meal['strMeal']
#             category_name = meal['strCategory']
#             area = meal['strArea']
#             instructions = meal['strInstructions']
#             description = meal.get('strCategoryDescription', '')  # Handle missing description
            
#             # Check if the category exists, create it if not
#             category, created = Category.objects.get_or_create(name=category_name)
            
#             # Create Blog instance and save to database
#             blog = Blog.objects.create(
#                 category=category,
#                 title=title,
#                 slug=title.lower().replace(' ', '-'),  # Generate slug from title
#                 excerpt="",  # You can customize this
#                 content=instructions,  # Using instructions as content
#                 contentTwo=description,  # You can customize this
#                 image="",  # You can customize this
#                 ingredients="",  # You can customize this
#                 postlabel="POPULAR",  # You can customize this
#             )
        
#         return True  # Indicate success
    
#     else:
#         return False  # Indicate failure
    
# def your_view_function(request):
#     # Call the fetch_and_save_meal_data function
#     success = fetch_and_save_meal_data()
    
#     if success:
#         return JsonResponse({'message': 'Data fetched and saved successfully'})
#     else:
#         return JsonResponse({'error': 'Failed to fetch and save data'})

class BlogListAPIView(generics.ListAPIView):
    queryset = Blog.objects.all()[:5]
    serializer_class = BlogSerializer

class BlogDetailAPIView(generics.RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug'

class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailAPIView(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'id'

class CategoryPostAPIView(generics.ListAPIView):
    serializer_class = BlogSerializer

    def get_queryset(self):
        category_id = self.kwargs.get('pk')
        return Blog.objects.filter(category=category_id)

class PopularPostsAPIView(generics.ListAPIView):
    serializer_class = BlogSerializer

    def get_queryset(self):
        return Blog.objects.filter(postlabel__iexact='POPULAR').order_by('-id')[:4]




# class RoomView(generics.ListAPIView):
#     queryset = Room.objects.all()
#     serializer_class = RoomSerializer