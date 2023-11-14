---
title: 'Coordinate Systems, Part 2: The Geoid'
date: '2023-08-08'
description: 'In the second part in the series on coordinate systems, I discuss the geoid in more depth and what scientists have learned about it in recent decades.'

---

# Coordinate Systems, Part 2: The Geoid

In the [first part of this series](crs1), I first discussed the concept of the geoid. In my opinion, the best way to understand the geoid is to think of it as the target shape of the Eath that we're trying to capture with our mathematical model. Our understanding of the shape of the Earth has changed over time. We now know that the Earth is not flat or a perfect sphere. In the 17th century, scientists learned that the Earth is slightly flatter at the poles and bulgy around the equator. Thus, the Earth is best described as an ellipsoid or sphereoid.  

When selecting ellipsoid axis values, we're ignoring mountains and other topography. We're trying to best model the ellipsoidal shape of the Earth at "sea level". It's important to note that sea level doesn't just exist at the ocean. For each location on the Earth, even those on dry ground, there exists a "sea level" elevation that can be used to measure height above elevation for that location. 

## Sea Level Noise

As discussed in the first part of this series, "sea level" itself is not constant due to tides. At high tide, the elevation of the sea is higher; at low tide, the elevation of the sea is lower. This is due to the influence of the moon's and, to a lesser degree, the sun's gravitation pull. When selecting major- and minor-axis values for our ellipsoid, we first need to remove the statistical "noise" represented by the moon's and sun's gravity. We do this by averaging sea level values measured over a 19 year period. This gives us the *mean* sea level. 

When trying to determine the correct ellipsoid axis values, scientists have traditionally used mean sea level as their reference point. It should be noted, however, that this mean sea level only approximates our target shape (i.e. the geoid). This is due to the fact that there are other sources of statistical noise in the mean sea level statistics. Just as the influence of the moon's and sun's gravity had to be removed, there are [other factors](https://www.e-education.psu.edu/geog862/node/1820) that need to be removed as well. These include the influences of wind and other weather patterns, differences in temperature, differences in salinity, etc. Water volume expands when heated, so oceans near the equator would be expected to be higher than at the poles, other things being equal. Our target shape of the Earth (i.e. the geoid) represents the shape of the Earth when all these other factors are removed and only influence is that of the Earth's gravity. Scientists estimate that the geoid can deviate from mean sea level by [up to 2 meters](https://www.e-education.psu.edu/geog862/node/1820) or by [“several” meters](https://www.esri.com/news/arcuser/0703/geoid1of3.html). Removing the influence of these other factors is challenging. I just want to note here that while the geoid can be approximated by mean sea level, it is not exactly equal to it.

## The Earth's Gravity and Geoid Shape

We can understand the geoid to be the shape of the Earth defined by the elevation the oceans would have if the water in the oceans were only under the influence of the Earth's gravity (and not the moon's or sun's gravity or differences in temperature, salinity, or other factors).

For a while, scientists thought that the geoid was a perfect ellipsoid. The only challenge then was measuring the correct the semi-major and semi-minor axes of the ellipsoid. In recent decades, due in large part to advances in satellite technology, scientists have learned more about the shape and composition of the Earth. As a result, scientists have revised their understanding of the geoid. In the remainder of this post, I'll outline some of what they've learned and discuss what it means for geographic coordinate systems.

The mass of the Earth is not uniform. On the exterior, there are oceans in some areas and continents with mountains in others. The interior of the Earth is not uniform either. In some parts of the interior, the Earth is made of denser materials and in other parts, it is made of less dense materials. Moreover, the shape of the Earth is not a perfect sphere but rather is ellipsoidal. As a result, gravity on the Earth's surface is not completely uniform. This has two important consequences.

First, the center of the Earth is not exactly half way between the North Pole and the South Pole. The center of the Earth is defined as the center of *mass*. If the mass of the Earth is not uniformly distributed in the interior, then it's possible that the center is not half way between the North and South poles. [One source](https://downloads2.esri.com/support/documentation/ao_/710understanding_map_projections.pdf) says that the South Pole radius is less than the North Pole radius. However, it doesn’t say by how much, and so far I have not found another source that confirms this. 

Second, the fact that there are slight differences in gravity on the Earth's surface means that there are slight undulations in the height of the Earth's oceans. In other words, sea level varies over the Earth just due to gravity. The magnitude of these height differences seems to be approximately [100 m](https://oceanservice.noaa.gov/facts/earth-round.html) or more.

It's possible to visualize the undulations in sea level that are due to gravity. This can be done by comparing the heights of the geoid (approximated as mean sea level) above or below a reference ellipsoid (usually the GRS80 ellipsoid or the WGS84 ellipsoid). There are several good sources with interesting maps of the relative differences. I will just provide links to them:

- https://www.e-education.psu.edu/geog862/node/1820
- https://vector.geospatial.science/textbook/chapter-two/mathematically-measuring-earth
- https://www.esri.com/news/arcuser/0703/geoid1of3.html

## Upshot

Due to the factors mentioned above, scientists have learned that the geoid is not a perfect ellipsoid. It's lumpy and doesn't have a uniform shape that can easily be described by a mathematical model. Scientists still must use an ellipsoid model defined by semi-major and semi-minor axes; however, we can no longer hope to find a model that fits the geoid with no error. We must choose axis values that minimize the overall error in the model.

## Summary

There are complications when defining the geoid in reference to sea level. As discussed previously, sea level is not constant due to the influence of the moon and sun on tides. We can remove the influence of the sun and moon by averaging sea level over a long period of time; however, this is not sufficient to remove all the noise. To isolate the influence of the Earth's gravity, we would need to remove the influence of other factors, such as temperature. Moreover, because the Earth's mass is not distributed as a uniform sphere, the Earth's gravitational pull is not uniform across the surface of the planet. This means that South Pole may be closer to the Earth's center of mass than the North Pole, and it means that the Earth's oceans have a slight undulating shape. Due to the irregular the irregular shape of the geoid, ellipsoid models will not be perfect.

In the next [post](crs3), I will discuss datums in more detail and how they are related to models of the Earth.
