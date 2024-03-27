from django.db import models



class Category(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='image',null=True,blank=True)


    def __str__(self):
        return self.name

class Blog(models.Model):
    POST_CHOICES = [
        ('POPULAR','popular')
    ]
    category = models.ForeignKey(Category, on_delete = models.CASCADE, null =True)
    title = models.CharField(max_length = 255)
    slug = models.SlugField(max_length = 255)
    excerpt = models.CharField(max_length=255, default="")
    content = models.TextField(null = True,blank=True)
    contentTwo = models.TextField(null=True,blank=True)
    image = models.ImageField(upload_to='image',null=True,blank=True)
    ingredients = models.TextField(null=True,blank=True)
    postlabel = models.CharField(max_length =100, choices = POST_CHOICES,null=True,blank=True)

    def __str__(self):
        return self.title


# import string
# import random

# def generate_unique_code():
#     length = 6

#     while True:
#         code = "".join(random.choices(string.ascii_uppercase, k=length))
#         if Room.objects.filter(code = code).count() == 0:
#             break

#     return code

# class Room(models.Model):
#     code = models.CharField(max_length=8, default="",unique=True)
#     host = models.CharField(max_length = 50, unique=True)
#     guest_can_pause = models.BooleanField(null = False,default = False)
#     votes_to_skip = models.IntegerField(null=False,default =1)
#     created_at = models.DateTimeField(auto_now_add = True)