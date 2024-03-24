from django.contrib import admin
from .models import *

class blogAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(Blog,blogAdmin)
admin.site.register(Category)
