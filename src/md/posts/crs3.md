---
title: 'Coordinate Systems, Part 3: Datums'
date: '2023-08-15'
description: 'In the third part in the series on coordinate systems, I discuss in more detail what datums are and the models of the Earth that they incorporate.'

---

# Coordinate Systems, Part 3: Datums

In the [first part](crs1) of this series, I discussed the components of a geographic coordinate system. Geographic coordinate systems include a datum, which itself incorporates a mathematical model of the earth. I mentioned that the mathematical model includes the specification of an ellipsoid's semi-major and semi-minor axis values. In this post, I will discuss other two other components of the mathematical model as well as what it means for a datum to be physically realized.

## Datums as Mathematical Models

A datum's model of the world has three mathematical components:

1. A specification of a reference ellipsoid (discussed in part 1)
2. A specification of the ellipsoid's origin (how the center of the ellipsoid corresponds to the center of the Earth).
3. A specification of the orientation of the ellipsoid (the extent to which the top of the ellipsoid corresponds to the Earth's north pole).

The second and third components can be thought of as ["reference frame"](https://www.icsm.gov.au/education/fundamentals-mapping/datums/datums-explained-more-detail) for the ellipsoid. It's important to note that all three components are required to have a fleshed out mathematical model of the Earth. Two mathematical models could have the same ellipsoid, but if they differ in their reference frames, the result is that locations will have different lat/lon values.

To specify the reference ellipsoid, you need two constants: the semi-major and semi-minor axes. These are usually spelled out explicitly (or at least the semi-major axis value and the inverse flattening value, as discussed in part 1). To specify the origin and orientation, you need six additional constants [insert link]. I am not clear exactly what these consist in exactly. In practice, the origin and orientation parameters are not spelled out explicitly. Instead, they derive indirectly from other mathematical parameters. 

To see this, we can use the case of the NAD27 datum. The [North American Datum of 1927](https://en.wikipedia.org/wiki/North_American_Datum) was the first datum intended for use in North America. It derives from a network of surveys done in the United States and later in Canada and Mexico. These surveys have a common reference point: a survey station at Meades Ranch in the state of Kansas. The NAD27 datum explicitly declares Meades Ranch to be at 39°13′26.686″ north latitude, 98°32′30.506″ west longitude. As mentioned in part 1, NAD27 incorporates the Clarke Ellipsoid of 1866. Using the semi-major and semi-minor axis values, it is possible to estimate how far and in what direction the center of the Earth is from Meades Ranch. Thus, the location of Meades Ranch and the ellipsoid values together fix the model's origin. NAD27 also explicitly declares that the azimuth (angle) from Meades Ranch to nearby Waldo Station is 255°28′14.52″ from the north. This has the effect of fixing the orientation of the ellipsoid in the model.

In general, the reference frame of a datum may be fixed by [specifying the following](https://geodesy.noaa.gov/PUBS_LIB/Geodesy4Layman/TR80003B.HTM#ZZ7):
- the lat/lon of the initial point
- the azimuth of a line to another survey station
- the height of the ellipsoid above the geoid at the initial point (assumed to be zero at Meades Ranch)

## Types of Datums

Conceptually, in developing a datum, there are two things you can alter: the ellipsoid or the origin/orientation. Historically, as countries began developing datums, they chose parameters so that the reference ellipsoid best fit the geoid in their particular areas. These are called *local* datums. For instance, NAD27 is a local datum and it incorporates the Clark 1866 ellipsoid, which was thought to fit North America well. The center is considered to be the true center of the Earth. Because local datums are specified to fit one particular area, they are not suitable for use outside that area.

When reading about datums, local datums are often contrasted with another class of datums, which are often called "earth-centered" datums. As the name suggests, explicitly aim to center the ellipsoids on the Earth's true center of mass. NAD83 and WGS84 are two examples. These two datums are not identical because they have slightly different ellipsoid parameters and their reference frames are different. NAD83 is still considered a local datum because it is still intended to best fit North America and is not considered applicable outside it. By contrast, WGS84 is considered a global datum. Its ellipsoid was chosen to fit the whole world reasonably well, even if it doesn't fit any particular area really well.

Thus, the categories of "local datum" and "earth-centered datum" are not completely opposite. It's possible to have a local, non-earth-centered datum (NAD27), a local, earth-centered datum (NAD83), and a global, earth-centered datum (WGS84). It doesn't seem possible, however, to have a global but not earth-centered datum.

## Datum Realization

A datum is more than a mathematical model of the Earth. By itself, a mathematical model can't do much work for us. It can't tell us the lat/lon address of your house or any other particular location. To be able to do this, a datum must have a physical component. This includes a series of locations on the Earth's surface where survey data is collected. 

As mentioned above, in the NAD27 datum, the reference frame is established by specifying a fixed point at a particular survey station - Meades Ranch in Kansas. Other locations are mapped relative to the fixed point using a surveying techniques. It's beyond the scope of this post to discuss these techniques in detail (perhaps in another post!). The main point is that by mapping locations in relation to the fixed point and if we have stipulated the lat/lon of the fixed point, then we can estimate the lat/lons of these other locations. Over time, as more and more data points are collected, we can then estimate the location of any place we want to. In other words, we can actually use the datum. This can be thought of as the *realization* of the data. [retrieve link]

### NAD27

The precise location of Meades Ranch was chosen because it's located near the geographic center of the country. The idea was that by choosing a location in the center of the country, surveying errors would be spread across the whole country. If by contrast, the fixed point was on one coast, locations on that coast would have relatively small errors, but locations on the opposite coast would have large errors. In the surveys that gathered data for the NAD27 datum, locations were often marked using physical chunks of metal called [benchmarks](https://www.e-education.psu.edu/geog862/node/1797).

### NAD83

NAD83 is the second generation of the North American datum. The mathematical model underlying NAD83 is different from that of NAD27. It is based on the GRS1980 ellipsoid, which was thought to fit the whole world reasonably well. Thus, NAD83 aims to be a geocentric (earth-centered) datum. Moreover, NAD83 includes additional data points, including those that derive from satellites. Compared to NAD27, NAD83 is considered to be more accurate. Converting from NAD27 to NAD83 involves shifting points varying amounts. A map of the relative magnitude of the shifts can be found [here](https://en.wikipedia.org/wiki/North_American_Datum#/media/File:Datum_Shift_Between_NAD27_and_NAD83.png)

### WGS84

The WGS84 datum is a global datum. It was established by the US military in part due to the need to have accurate geospatial data for areas outside North America. It is also the datum used by GPS. WGS84 aims to be earth-centered and to incorporate a mathematical model that fits the world reasonably well as a whole. To do this, they are based on satellite-acquired data for points on the entire planet. I'm not entirely sure how the origin and orientation of the reference ellipses are established. It might be similar to that of NAD27. I'm not sure.

## Datum Updates and New Datums

Scientists are continuing to update datums. This is possible because satellites have helped scientists gather more and higher quality data. This has helped us learn more about the geoid and to select better mathematical models to fit the geoid. Both NAD83 and WGS84 have been updated several times since they were first created. Initially, NAD83 and WGS84 were nearly identical. Now, however, they are considered to diverge by more than 2 meters in some locations [retrieve link].

Currently, the National Geodetic Survey is in the process of creating and implementing new [datums](https://geodesy.noaa.gov/datums/newdatums/index.shtml). These are based on information acquired from satellite data as well as a refined geoid model based on gravity data.

## Summary

Datums include the specification of not only the ellipsoid axes but also specification of the origin and orientation of the ellipsoid. Historically, datums were chosen to fit a local area but the need has grown for global datums. As technology has advanced, scientists have been able to acquire the data that make these global datums possible. In addition to their mathematical specification, datums also have an important physical component. To be useful, data has to be collected from actual locations on the Earth's surface. Traditionally, this has been done using on-the-ground survey methods. Today, data gathered from satellites is also used. As data and collection methods have impoved, scientists are constantly trying to improve datums.

Thus far, I have only discussed horizontal datums - i.e. datums for identifying the lat/lon addresses of locations on the Earth's surface. In the next post, I will discuss vertical datums, which control how heights are measured.
