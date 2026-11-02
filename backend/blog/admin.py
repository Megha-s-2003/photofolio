# Register your models here.
from django.contrib import admin
from .models import BlogPost, ContactMessage


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('heading', 'category', 'author', 'created_at')
    search_fields = ('heading', 'category', 'author')
    list_filter = ('category', 'created_at')
    prepopulated_fields = {'slug': ('heading',)}


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    search_fields = ('name', 'email', 'subject')
    list_filter = ('created_at',)
    readonly_fields = ('created_at',)