---
title: 'Understanding Web Maps, Part 1'
date: '2018-02-04'
description: 'Part one of a three-part series on how web maps work. This post focuses on the Web Mercator coordinate system and why it is a popular coordinate system in web map applications.'
---

# Understanding Web Maps, Part 1

Welcome to part one of my three part series on the basics of web maps. My goal in this series is to explain, at a fairly high level, how web maps work. In particular, I will attempt to shed light on how web maps are able to convert geographic locations (e.g. the lat/lon of a particular restaurant) into positions within a viewport (an HTML DOM element) and how they are able to update these positions when a user zooms or pans the web map. This series is not meant to be an exhaustive discussion of how web maps are implemented in JavaScript. My goal instead is to explain some fundamental concepts about web maps and hopefully provide a theoretical foundation that can then be used for creative purposes.

The first step in understanding web maps is to understand a basic feature of all maps, web or otherwise: a coordinate system. Coordinate systems specify how locations on the map correspond to locations on the Earth's surface. Coordinate systems can be divided into two types based on how they model locations on the Earth's surface. Projected coordinate systems model the Earth's surface as if it were a flat, two-dimensional plane. Geographic coordinate systems, by contrast, model positions on the Earth's surface as positions on a sphere or approximate sphere (which is a more accurate model of the Earth). The familiar GPS coordinate system (latitude and longitude) is an example of a geographic coordinate system.

Many web maps depict the surface of the Earth as if it were a flat, rectangular plane, and as such they incorporate a projected coordinate system. While there are many different types of projected coordinate systems out there, there is only one that is commonly used in web maps: the Web Mercator (henceforth, 'WM') coordinate system. According to [Wikipedia](https://en.wikipedia.org/wiki/Web_Mercator_projection), it was adopted by Google Maps in 2005, and since then, it been adopted by most other mapping systems, including Bing Maps, ESRI, and OpenStreetMap. WM's popularity is due in part to the fact that it is relatively easy to use.

As mentioned above, WM, like all projected coordinate systems, models positions on Earth's surface as if they were on a flat, two-dimensional plane. In the east-west direction, the extant ranges from exactly -20,037,507.0671618 meters to 20,037,507.0671618 meters. The total width, -40,075,014.1343236 meters, is approximately equal to the circumference of the Earth at the equator. In the WM system, the south-north extent is assumed to be the same as the east-west extent. In other words, it assumes that the Earth is a perfect sphere. In reality, this is not the case: the circumference of the Earth is slightly greater at the equator than at the poles. This is one simplifying assumption that WM makes.

If we want to render specific locations on a web map, we first need to determine their Web Mercator coordinates. Despite being a popular coordinate system for web maps, locations are rarely described in this coordinate system. They are more often described with a latitude and longitude. Fortunately for our purposes, it is possible to convert lat/lon coordinates to WM coordinates using mathematical formulas. The following is a JavaScript function that does just this.

~~~js
function latLonToWebMercatorXY(lat, lon){  
  return {
    x: lon * 20037508.34 / 180,
    y: Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI) * 20037508.34;
  }
}
~~~

For our purposes, we don't need to understand the details of these functions (I don't!). We should just appreciate that someone came up with them and that they are (relatively) simple. It is worth noting, however, that in the WM coordinate system, the prime meridian is represented as having an x value of 0, and the equator is represented as having a y value of 0. Locations in the western hemisphere (left side of the map) are assigned negative x values, while locations in the eastern hemisphere (right side of the map) are assigned positive x values. Moreover, locations in the northern hemisphere (top half of the map) are assigned positive y values, while locations in the southern hemisphere (bottom half of the map) are assigned negative y values. Thus, the top, left-hand corner of the map has the coordinates (-20,037,507.0671618, 20,037,507.0671618), and the bottom, right-hand corner of the map has the coordinates (20,037,507.0671618, -20,037,507.0671618). From a web developer's perspective, this system of assigning coordinates can be somewhat counter-intuitive. Thus, when developing web maps, the WM coordinate system is often transformed so that the top, left-hand corner has the value of (0,0) and the bottom, right-hand corner has the value of (40,075,014.1343236, 40,075,014.1343236).

Before moving on, it's important to point out the drawbacks of using the Web Mercator coordinate system in web maps. First, as mentioned above, WM incorporates a spherical model of the Earth, which is only an approximation. Moreover, the very process of projecting the surface of a three-dimensional sphere onto a two-dimensional surface distorts the objects represented. These issues need not concern us here, but we should note that the distortions increase at extreme latitudes. For this reason, according to Wikipedia, Google Maps does not depict locations beyond 85.051129° latitude north and south. Unless you want to map locations of polar bears or penguins, this shouldn't be much of a problem though.

In [next post](understanding-web-maps-part-2), I'll discuss the concept of scale and why certain scale values are important in some web maps.
