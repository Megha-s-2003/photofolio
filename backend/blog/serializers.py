from rest_framework import serializers
from .models import BlogPost, ContactMessage


class BlogPostSerializer(serializers.ModelSerializer):

    image = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = [
            'id',
            'heading',
            'slug',
            'category',
            'description',
            'content',
            'image',
            'author',
            'meta_title',
            'meta_description',
            'created_at',
            'updated_at',
        ]

    def get_image(self, obj):
        request = self.context.get('request')

        if obj.image:
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url

        return None

class ContactMessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactMessage
        fields = [
            'id',
            'name',
            'email',
            'subject',
            'message',
            'created_at'
        ]
        read_only_fields = ['id', 'created_at']