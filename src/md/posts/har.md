---
title: 'Height Above River Models'
date: '2023-07-6'
description: 'This posts introduces the concept of a height above river model and how to create one.'
---

# Height Above River Models

Dan Coe is a cartographer based in Washington State, and he has created some amazing [visualizations of floodplains and river deltas](https://dancoecarto.com/4k-rivers).  On his website, Dan has some [tutorials](https://dancoecarto.com/creating-rems-in-qgis-the-idw-method) on how to make these images, and for this blog post, I am going to create one of my own and discuss how it goes.

## Background

The river images are based what’s called a relative elevation model (REM) or height-above-river (HAR) model. These are similar to the more familiar digital elevation model (DEM) but have an important difference. While DEMS use sea level as the zero-elevation baseline, HAR models use the river elevation itself as the zero baseline. Of course, rivers do not have a constant elevation: they are higher upstream and lower elevation. In converting the DEM to the HAR, we have to mathematically remove the downward trend in the river elevation. This is the most technically challenging part of the process. The idea is to create a raster that represents the river height elevation for each pixel in the study area. We then substact the river height value from the dem to get the height above river raster. 

This raises a question about how exactly to create a river height raster for pixels that are not on the river. The idea is to interpolate the values. On his website, Dan discusses two ways of doing this: an inverse distance weighted (IDW) method and a cross-section method. I will focus on the IDW method here. 

## Materials

When visualizing floodplains, it’s helpful to have highest resolution elevation data as possible. He recommends lidar-derived 1m dem data, which you can download from the USGS. For this project, I used a 1-m DEM that covers most of Congaree National Park in South Carolina. The area includes a section of the Congaree River as well as its surrounding flood plain forest.

## Methods

I will briefly summarize the steps that Dan uses for creating a HAR model from a DEM:

1.	Choose an area of interest. If you later choose are larger extent, then the steps may have to be re-done.
2.	Create river centerline in area of interest. Dan does this by manually creating a line feature. I follow this technique.
3.	Measure the approximate width of the river.
4.	Create point features on the river centerline feature every x meters, where x is the width of the river.
5.	Drill down and get the elevation value of each of the point features.
6.	Create raster representing interpolated river elevation values.  I use the IDW method. Dan makes pixel size ten times the size of DEM to make it faster. The resulting is then resampled back down to the pixel size of the DEM (1-m).
7.	Subtract the resampled, river height raster from DEM to get the HAR.

## Results

DEM (elevation range from 25m to 32m):
![DEM (elevation range from 25m to 32m):](/images/dem.png)

HAR (elevation range from -2m to 5m):
![HAR (elevation range from -2m to 5m):](/images/har.png)

Note: high-resolution DEM data was unavailable for a portion of the southern part of the study area.

## Discussion

The steps were carried out in QGIS, and I didn’t have any trouble following Dan’s tutorial. Overall, I would say that visualizing the floodplain using a HAR model is clearly superior to visualizing it with just a DEM. In the DEM image above, the left side of the floodplain is at a higher elevation and therefore darker than the right side. In converting from the DEM to the HAR, you mathematically remove this noise in the data so you can just see the height above the river. In the HAR image above, the color gradient is uniform from right to left and clearly is a better visual. So creating the HAR clearly adds value when visualizing this floodplain.

Here are a few other notes:
- A lot of the value comes from just using high-resolution elevation data. If you zoom in to the data, it’s amazing how much detail you can see. At zoomed in scales, it matters less whether you are using a DEM or an HAR.
- At least in my case, converting the DEM to the HAR didn’t seem to reveal any new features in the image. The main difference is that it made the color scheme uniform from left to right. This underscores the fact that this is a visualization tool. Moreover, how much improvement in visualizing seems to depend on a lot of factors, including the range in elevation over the course of the area of interest as well, the chosen min and max values in the color gradient, and the chosen color ramp.
- Dan recommends that you measure the approximate width of the river and use this value for sampling points along the centerline. In my case, the width was 100m in some areas but wider or narrower in others. So it wasn’t clear what value to use exactly. In fact, it seems better to choose a sampling width based on the pixel size of the interpolated raster (10m). In my case, I ended up using a 50m distance, but I would err on the side of going smaller. The interpolation may go a bit slower but otherwise there are no real downsides.
- You have to be careful that you don’t select a section of river with a bridge over it. The DEM is going to give you the elevation of the bridge and not the elevation of the river underneath it. This will create some issues when creating the HAR.
- It can be tedious to trace the river centerlines every time you want to create an HAR. Folks at OpenTopogaphy have created a [Python package]((https://opentopography.org/blog/new-package-automates-river-relative-elevation-model-rem-generation)) for creating HAR models automatically . It does this by using river centerlines from OpenStreetMaps. I don’t know how reliable this is, but I like the idea of doing it automatically. 
