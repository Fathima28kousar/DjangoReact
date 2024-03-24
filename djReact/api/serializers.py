from rest_framework import serializers
from .models import *


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('__all__')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('__all__')


# class RoomSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Room
#         fields = ('__all__')        