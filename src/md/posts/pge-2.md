---
title: 'PGE Project, Part 2'
date: '2019-09-23'
description: 'The second part of this series focuses on the implementation of the PGE Project website. I discuss the three major technical challenges and how I was able to overcome them.'
---

# PGE Project, Part 2

In this blog post, I'll discuss the implementation of the PGE website.

## Implementation

The PGE Project website is a single-page application. Its main feature is an interactive web map that displays icons representing the locations of sites written about in student projects. It also includes a select menu widget that allows users to filter the projects based on specific tags (e.g. coal, power plants).

The web map was initially created using the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/3/). The API lets developers create an interactive web map and load features into the map. It also exposes certain widgets can be incorporated into the map. These include a home button, buttons for zooming in and out, and a popup menu that displays information about a feature when it is clicked on the map.

My client and I decided that the default popup menu in the API was not flexible enough for what we wanted to do. In particular, my client felt strongly that all the summary information for a site should be displayed in the popup window. There should not be any scrolling in the popup window. This meant that the popup window would have to have a variable height. Unfortunately, the popup window tool provided in the API did not allow this. Therefore, I decided to create a custom popup window that had more flexibility. The custom popup menu was in addition to a custom select menu, which is not part of the web mapping API.

Eventually I decided that I would try to make everything custom, including the web map map itself. I wanted a smoother experience in using the map (including the use of animations) than that provided by the API. I also wanted to learn how to do it, even if development took longer than using the API. I also wanted to implement it using vanilla JavaScript. It might have been easier to use a framework, such as React, but I wanted to figure out how to do it myself. I quickly learned that there are many challenges associated with creating a custom web map.

## Challenges

These challenges can be divided into three broad categories: 1) rendering locations in the web map and updating those locations when the user pans or zooms the map, 2) getting all the parts of the application (i.e. the select menu, popup window, etc) to work together, and 3) incorporating the use of animations and other asyncronous events.

Rendering and updating objects in a web map is complicated. Learning how to do it requires a decent understanding of basic map concepts, such as coordinate systems, scale, and viewpoints. I have a background in mapping and GIS, however, and so I was able to learn these concepts without too much trouble. I have written [a series of three blog](understanding-web-maps-part-1) where I go into these issues in detail.

Getting all the parts of the application to work together is an architectural problem. Figuring this out required learning the differences between models, views, and controllers. In the end, I figured out a system that is scalable and maintainable. It involved dividing the web map into different components: the zoom buttons, the basemap layer, and the feature layer (which displays the project locations). Each of these components has its own model, view, and controllers. Each component encapsulates the behavior of that component and provides an api for manipulating it. The web map itself has a model, view, and controller which coordinate the behavior of each of the components. Finally, the application itself has a model, view, and controller which coordinate the behavior of the web map and the select menu, which is not itself part of the web map.

The third major challenge was managing asyncronous events. One major goal in this project was to make the actions of the web map appear smooth. For example, when a user clicks on a project location, the map automatically pans so that the project location is in the center of the map. The popup window is then opened, and a waiting animation appears. The information about the project is then loaded, including an image associated with the project site. When the image has loaded into the browser, the waiting animation stops, the height of the popup window expands to include all the information (no scrolling!) and then the content fades in. Thus, there's a lot of things that have to happen in a particular order. Moreover, when all this is happening, I did't want the user to be able to zoom in or pan the map or use the select menu. Thus, I had to keep track of when the web map or select menu were doing some asyncronous action and disable the other one. Unfortunately, discussing in detail how I met this challenge is beyond the scope of this blog post. Briefly, it involved creating a separate state for managing asyncronous view updates. And it also involved using the async/await syntax which makes the code a lot simpler. [Update: see the my [blog series](select-menu-part-1) on creating a custom, animating select menu which goes into more detail about the challenges of incorporating asyncronous events]

In the [next](pge-3) post in this series, I provide some reflections on what I learned while developing the PGE project website.
