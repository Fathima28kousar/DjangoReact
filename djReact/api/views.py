from django.shortcuts import render,redirect
from .models import *
from rest_framework import generics
from .serializers import BlogSerializer,CategorySerializer
import requests
from django.http import JsonResponse
import razorpay
from .models import Coffee
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages


class BlogListAPIView(generics.ListAPIView):
    queryset = Blog.objects.all()[:4]
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
        return Blog.objects.filter(postlabel__iexact='POPULAR').order_by('id')[:4]

def about(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        amount = request.POST.get('amount') 

        if not amount:
            messages.error(request, 'Please fill the field')
            return redirect('home')
        amount = int(amount) * 100

        # Check if the amount exceeds 30,000
        if amount > 3000000:
            messages.error(request, 'Amount cannot exceed 30,000 INR')
            return redirect('home')
        
        # Initializing Razorpay client
        client = razorpay.Client(auth=('rzp_test_wucadtaz2NQLqm', 'Un2BvQcbNWU4MpjvhlF28G9W'))
        
        # Creating the payment order
        payment = client.order.create({
            'amount': amount,
            'currency': 'INR',
            'payment_capture': '1'  # Automatically captures the payment
        })
        
        order_id = payment['id']
        order_status = payment['status']

        if order_status == 'created':
            coffee = Coffee(
                name=name,
                amount=amount,
                order_id=order_id,
            )
            coffee.save()
            payment['name'] = name

        # Rendering the template with payment details
        return render(request, 'about.html', {'payment': payment})

    return render(request, 'about.html')


@csrf_exempt
def success(request):
    if request.method == "POST":
        a = request.POST
        client = razorpay.Client(auth=('rzp_test_wucadtaz2NQLqm', 'Un2BvQcbNWU4MpjvhlF28G9W'))
        
        try:
            # Retrieving parameters from the request
            razorpay_order_id = a.get('razorpay_order_id')
            razorpay_payment_id = a.get('razorpay_payment_id')
            razorpay_signature = a.get('razorpay_signature')
            
            # Verifying payment signature
            params_dict = {
                'razorpay_order_id': razorpay_order_id,
                'razorpay_payment_id': razorpay_payment_id,
                'razorpay_signature': razorpay_signature
            }

            status = client.utility.verify_payment_signature(params_dict)
            
            # Updating payment status in the database
            coffee = Coffee.objects.filter(order_id=razorpay_order_id).first()
            if coffee:
                coffee.razorpay_payment_id = razorpay_payment_id
                coffee.paid = True
                coffee.save()
                
            return render(request, 'success.html', {'status': True})
        
        except Exception as e:
            print(str(e))  # error for debugging purposes
            return render(request, 'success.html', {'status': False})
        
    return render(request, 'success.html')

# class RoomView(generics.ListAPIView):
#     queryset = Room.objects.all()
#     serializer_class = RoomSerializer


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
