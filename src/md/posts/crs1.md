---
title: 'Coordinate Systems, Part 1: Models of the Earth'
date: '2023-08-01'
description: 'This posts is the first part in a series about coordinate systems.'
---

# Coordinate Systems, Part 1: Models of the Earth

Early on a GIS analyst, I developed a basic working knowledge of coordinate systems. For example, I learned the differences between a geographic coordinate system and a projected coordinate system. I also developed a vague understanding of what a datum is and learned that converting between datums can be tricky. You have to specify a transformation, and this can introduce varying degrees of distortion into your data.

I also learned that, when analyzing data, if you don’t pay attention to coordinate systems, unexpected things can happen. For example, suppose you’re working with a dataset of US state polygons and want to calculate the area of, say, California. If the dataset is in a geographic coordinate system, the result is going to be in square decimal degrees, which will be confusing and not very useful. You first have to re-project the dataset into a projected coordinate system, and then perform the area calculation. 

My previous GIS work taught me enough about coordinate systems to stay out of trouble. But I never felt like I had a solid, in-depth understanding of coordinate systems. In these blog posts, I will attempt to map out [pun intended] these concepts a little better. There are many good sources on the internet, but it’s hard to find one that brings all the big-picture elements together in a way that’s easy to understand. That’s my goal for these blog posts. 

## Geographic Coordinate Systems

The best place to start is with geographic coordinate systems. In geographic coordinate systems, the Earth is modeled as a three-dimensional object (sphere or sphereoid) and locations on the Earth’s surface are referenced by longitude and latitude coordinates. 

A geographic coordinate system has [three components](https://downloads2.esri.com/support/documentation/ao_/710understanding_map_projections.pdf): 

1.	A datum: a model of the Earth
2.	A prime meridian: the 0 degree longitude starting point (usually Greenwich, England but other locations are possible)
3.	An angular unit of measure: either decimal degrees or degrees, minutes, seconds (DMS)

All three are required to have a geographic coordinate system, and if you change any of them, then you have a different geographic coordinate system.

I will assume that the reader has a basic understanding of longitude and latitude as well as the difference between decimal degrees and degrees, minutes, and seconds.

Let’s take a look at the specifications of three actual geographic coordinate systems: NAD27, NAD83 and WGS84. You will likely encounter all or some of these three when working with actual GIS data.

[NAD27](https://epsg.io/4267)
![NAD27 Specification](/images/NAD27.png)

[NAD83](https://epsg.io/4269)
![NAD83 Specification](/images/NAD83.png)

[WGS84](https://epsg.io/4326)
![WGS84 Specification](/images/WGS84.png)

In these specifications, we see each of the three components listed: a datum, a prime meridian, and an angular unit of measure (you can ignore the authority listing).  All three have the same prime meridian (Greenwich, England) as well as angular unit of measure. They differ in the datum that is used in the coordinate system. We’ll talk more about the specifics of these datums later on. First, however, let’s discuss models of the Earth in general. 

## Models of the Earth

For a geographical coordinate system to work, what we need is a mathematical model that will serve as the basis for a lat/lon system. We also want that model to represent the actual shape of the Earth perfectly (or at least really well). 

The shape of the Earth that we’re trying to model is called the *geoid*. There are different definitions of the geoid out there. I think it’s best to adopt a functional definition: the geoid is the shape of the Earth that we’re trying to model. It is the target we’re trying to capture. Our understanding of the geoid has changed over time, especially with satellite data, as I will discuss in later sections.

The simplest mathematical model to use for a geographic coordinate system is a sphere. If a sphere were also a perfect model of the Earth, things would be easy. Unfortunately, however, the Earth is not a perfect sphere. Rather, the Earth is somewhat flatter at the poles and somewhat bulgy at the equator. The diameter at the equator is approximately [43km greater](https://en.wikipedia.org/wiki/Equatorial_bulge) than the diameter between the poles. The equatorial bulge is throught to derive from the fact that the Earth is spinning around its axis. The physics of this is complicated, and it's beyond the scope of this post to discuss more than that. This means that the best approximate shape for the Earth is an ellipsoid (or spheroid) rather than a sphere. The idea that the Earth is ellipsoidal goes back to the [17th century](https://www.e-education.psu.edu/geog862/node/1796).

A spheroid is defined not by a radius but rather by a [semi-major axis and a semi-minor axis](https://vector.geospatial.science/textbook/chapter-two/mathematically-measuring-earth). The semi-minor axis specifies the distance between the center of the Earth and the poles, and the semi-major axis specifies the distance between the center of the Earth and the equator. Mathematically, it’s not as simple as a sphere, but it’s good enough.

Another complication has to do with the fact that Earth’s surface is not smooth but rather has mountains and valleys and other topographical features. Elevation on the Earth’s surface ranges from more than 1300 feet below sea level at the Dead Sea to more than 29,000 feet at Mount Everest. Thus, the distance between the center of the Earth and points on the Earth’s surface varies. How then do we choose values for the semi-major and semi-minor axes? 

The answer is that we choose axis values that best model the elevation of the earth at “sea level.” I put quotation marks here because the concept of sea level is more complicated than one might think. For one thing, the particular elevation of the sea is not constant due to tides. At high tide, “sea level” is higher; at low tide, “sea level” is lower. We can resolve this complication by saying that we should choose axis values that best model the elevation of the Earth at mean sea level. The [mean sea level](https://www.esri.com/news/arcuser/0703/geoid1of3.html) is an average of tidal values over 19 years (19 years chosen to average out gravitational influences of sun and moon on the tides). There are other complications in the concept of sea level that we’ll discuss later. But for now we can think of our modeling target (i.e. geoid) as the shape defined by a model of mean sea level over the entire Earth.

## Spheroid Specifications

In the geographic coordinate system specifications listed above, each coordinate system has a datum listing, which includes a specification for a spheroid. The spheroid specification includes a name and then two numbers. The first number is the semi-major axis value. The second is called the [flattening value](https://downloads2.esri.com/support/documentation/ao_/710understanding_map_projections.pdf), which represents the difference between the semi-major and semi-minor axis. The math is a little complicated but using the flattening value and the semi-major axis value, we can calculate the semi-minor axis value. I’m not sure why they don’t just list the semi-minor axis value.

For example, the NAD27 coordinate system is based on the NAD27 datum, which incorporates the Clarke 1866 ellipsoid. This ellipsoid has a semi-major axis value of 6,378,206.4m and a flattening value of 294.978698213898. If you do the math, you get a semi-minor axis value of 6,356,583.8m. The NAD83 datum incorporates the GRS 1980 ellipsoid, which has a major axis-value and flattening value that differ from the Clarke 1866 ellipsoid. The WGS84 datum incorporates the WGS84 ellipsoid. We should note that the WGS84 ellipsoid has the same semi-major axis value as the GRS 1980 ellipsoid and that the flattening value is very similar but not exactly the same. If you do the math, the semi-minor axis values differ by less than a millimeter. So the GRW 1980 ellipsoid and the WGS 84 ellipsoid are nearly identical.

## Summary

So this wraps it up for the first post on coordinate systems. We talked about how geographic coordinate systems have three components. The most significant one is a datum. The datum incorporates an ellipsoid model of the Earth, which includes specifications for a semi-major and semi-minor axis. The ellipsoid axes are chosen to best model the shape of the geoid, which approximates the mean sea level over the entire Earth.

In [part 2](crs2) of this series, I'll discuss in more detail what a datum is. In part three, I'll discuss what scientists have learned about the goid in recent decades from satellite data and what this means for coordinate systems.