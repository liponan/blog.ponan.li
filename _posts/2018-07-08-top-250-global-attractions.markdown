---
layout: post
title:  "Top 250 Global Attractions"
date:   2018-07-08 23:00:00 -0700
published: true
categories: [Ruby "data science"]
---


Author: Po-Nan Li

One day I came across [this quiz](https://www.listchallenges.com/top-250-famous-attractions-in-the-world/checklist/1) on facebook.
The webpage lists top 250 global attractions and you are challenged by how many of those attractions have you been to.
When I was taking the quiz, I got a mixed feeling: on one hand, I suspected the selection of these attractions is biased: a lot of them are in Europe? On the other hand I realized that there are so many places I didn't even hear of before and of course didn't know where are they.

Fortunately, these attractions are all famous enough so most of them have a Wikipedia page.
But it is apparently impractical to do the googling for all of them.

So here's what I did: I wrote a scraper to get the names of theses 250 attractions.
Then, I used the Google Geocoding API to find their locations and marked them on a Google Map.

Here's the visualization: [Top 250 Global Attractions](http://www.ponan.li/250-attractions/).
You can find the name of the place and a Wikipedia link if you click one the pins.
Do you think Europe has higher density of pins than any other regions on the globe?

The data and code are avaiable on [my GitHub repo](https://github.com/leeneil/250-attractions).
Fun fact: this was the very last time I coded in Ruby.
