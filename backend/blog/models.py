
from django.db import models
from django.utils.text import slugify


class BlogPost(models.Model):

    heading = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)

    category = models.CharField(max_length=100)
    description = models.TextField()
    content = models.TextField()

    image = models.ImageField(upload_to='blog_images/')

    author = models.CharField(max_length=100, default='Admin')

    # SEO Fields
    meta_title = models.CharField(max_length=60, blank=True)
    meta_description = models.CharField(max_length=160, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.heading)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.heading


class ContactMessage(models.Model):

    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.subject}"
