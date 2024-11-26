---
layout: default
---
# Welcome to My Portfolio!

Here's a collection of my projects and recent blog posts.

{% for post in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}
