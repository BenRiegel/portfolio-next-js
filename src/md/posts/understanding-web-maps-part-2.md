---
title: 'Understanding Web Maps, Part 2'
date: '2018-02-04'
description: 'In part two of this series, I discuss the concept of scale and why certain scale values can make the task of rendering basemaps easier.'
---

# Understanding Web Maps, Part 2

The [first post of this series](understanding-web-maps-part-1) focused on the Web Mercator coordinate system and the important role it plays in web maps. This post explains the concept of scale and why certain scale values are important in some web maps.

Scale refers to the mathematical relationship between sizes of objects as depicted on a map and the actual sizes of objects on the Earth's surface. Scale is usually expressed as a ratio, such as "1:10,000." This means that an object that is actually 10,000 inches in length (say a small lake) is depicted as being 1 inch long on the map. There is no single "correct" scale for a map to have. If a map has a smaller scale (say, 1:1,000), then an object that is 10,000 inches in length is depicted as 10 inches in length on the map. This allows for the object to be depicted with more detail on the map; however, there will also be less space on the map to depict other objects. Conversely, if a map has a larger scale (say, 1:100,000), the map can depict a much larger area but objects will be depicted as much smaller and will have less detail.

With paper maps, the scale is always fixed. If you want a map with a higher or lower scale, you have to get a new map. Part of what makes web maps interesting is that the scale is *not* fixed. The user can interactively zoom in and out to see more or less detail. When this happens, the user is essentially switching between maps with different scales. It is common in web mapping applications to have many predefined scale levels. Here is a JavaScript object with predefined scale levels 0 through 8. Each scale level is associated with a scale value and the size in pixels of a map of the whole Earth.

~~~js
const mapScaleLevels = {   
  "0" : {scaleValue:5.91657527591555E8, mapSizePx:256},   
  "1" : {scaleValue:2.95828763795777E8, mapSizePx:512},   
  "2" : {scaleValue:1.47914381897889E8, mapSizePx:1024},   
  "3" : {scaleValue:7.3957190948944E7,  mapSizePx:2048},   
  "4" : {scaleValue:3.6978595474472E7,  mapSizePx:4096},   
  "5" : {scaleValue:1.8489297737236E7,  mapSizePx:8192},   
  "6" : {scaleValue:9244648.868618,     mapSizePx:16384},   
  "7" : {scaleValue:4622324.434309,     mapSizePx:32768},   
  "8" : {scaleValue:2311162.217155,     mapSizePx:65536}
};
~~~

With paper maps, the scale value is usually some nice, round number, such as 1:10,000. With web maps, this is often not the case. Scale level two is associated with a scale value of exactly 1:1.47914381897889E8. Scale level six is associated with a scale value of exactly 1:9244648.868618. What's going on here? Why would we want maps with these seemingly arbitrary scale values? The answer is that these scale levels were chosen so they produce maps of specific sizes. To see this, let's look at scale level 2 in more detail. If a map has scale value of 1:1.47914381897889E8, this means that 1 meter on a web map corresponds to 1.47914381897889E8 meters on the globe. Recall from the first post that in the Web Mercator coordinate system, the diameter of the Earth is assumed to be exactly 40,075,014.1343236 meters. This means that a map of the whole Earth that has a scale of scale of 1:1.47914381897889E8 would be exactly 0.270933858 meters wide. For rendering web maps, we want to know the size of objects in *pixels*, not inches or meters or other units. Fortunately, we can convert linear distances to pixels relatively easily. Most web maps assume there are 96 pixels per inch. Thus, a map of the whole Earth that is 0.270933858 meters wide would be 1024 pixels wide on a screen. Scale level 3 has a scale value that produces a map size of 2048 pixels. Scale level 4 has a scale that produces a map size of 4096 pixels, etc.

Note that for each scale level, the map sizes are whole number values and each is divisible by 256. This makes it easier to work with basemaps on a web map. A basemap is an image of all or a portion of the Earth's surface that is depicted on a web map. It is usually the lowest layer on the map with other features, such as circles representing specific locations, rendered on top. With higher scale levels, maps depicting the whole Earth can be quite large. For instance, at scale level 8, a map of the whole Earth would be 65,536 pixels in height and 65,536 pixels in width. This image would likely be several gigabytes in size, far too large for a typical web user to be able to download. Fortunately, since a typical user's screen is much smaller than 65,536 pixels in size, there is no need to transfer the map of the whole Earth. Instead, basemap images are divided into smaller tiles, e.g. 256 pixels in width and height. In a web map application, only the tiles viewable in the map viewport are transmitted to the user. Having map sizes that are divisible by 256 make it possible to divide maps of the whole Earth into a whole number of tiles. For instance, in scale level 2, a map of the whole Earth is 1024 pixels with width and height, which corresponds to a 4x4 grid of basemaps tiles that are 256 pixels in size.

Thus, in web map application, certain scale values are important because they produce maps of the whole Earth with pixel sizes that are divisible by 256. This, in turn, makes it possible to divide basemaps into a relatively small number of tiles, which can then be rendered in the user's map viewport. In [the next post in this series](understanding-web-maps-part-3), I will discuss in more detail how a web map's viewport is associated with a certain viewpoint, which allow us to position objects on the web map.
