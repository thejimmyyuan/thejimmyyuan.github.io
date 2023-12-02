---
title: Blog & Thoughts
name: Jimmy Yuan
subtitle: Mundane Thoughts
layout: "blog.njk"
---

<span class = "blog-text">{{ title }}</span>      
<p class = "current-text">{{ subtitle }}</p>

<br />
<p class = "blog-title">Posts:</p>
<ol class="list-decimal menu-list">
{% for post in collections.posts %}
<li class = "blog-entry"><a href="{{ post.url }}">{{ post.data.entry-date }} -- {{ post.data.title }}</a></li>
{% endfor %}
</ol>

<hr />
<p class = "menu-back"><a href = "/">Go back ↩️</a></p>