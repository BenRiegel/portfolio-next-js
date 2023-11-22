---
title: 'Range Maps, Part 1: Overview'
date: '2023-09-05'
description: 'The first part in a series on species range maps. I provide an overview of this type of map and contrast it with other types of species maps.'
---

# Range Maps, Part 1: Overview

I'm a birder. I like going out early in the morning and looking for birds. Field guides are an indespensible part of learning how to identify birds. Most field guides include range maps, which show where a particular species of bird can be found. I have spent many happy hours looking at species range maps in my copy of [The Sibley Guide to Birds](https://www.amazon.com/Sibley-Guide-Birds-2nd/dp/030795790X/ref=asc_df_030795790X/?tag=hyprod-20&linkCode=df0&hvadid=312168166316&hvpos=&hvnetw=g&hvrand=8819399206373186866&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9002773&hvtargid=pla-434079760006&psc=1&mcid=05db4fe7f24e379da18354176133ac6d&gclid=Cj0KCQiAmNeqBhD4ARIsADsYfTdu11zhSYqPnclVdNcBv5kFAVgjT5MxA8IjeZ8Sod5KhKNXoHthtG8aAn_REALw_wcB).

Bird range maps is one case in which my interests overlap. Since I'm a GIS nerd who is interested in geospatial data and cartography, I pay attention, perhaps more so than other birders, to the maps themselves. I'm interested in how the range maps are produced. Where does the raw data come from? What methods are used to create the map from the raw data? How did the author make decisions about appropriate scale and levels of detail? Field guide maps often pack a lot of info into the maps. For migratory species, they often indicate the times of year when the species can be found - the summer, breeding range is depicted in one color and the winter, non-breeding range in another. Is this the most effective ways to visualize this information? Are there better ways?

In this series of posts, I want to explore these questions in more detail. In this post, my goal is to introduce the type of map that I call a "range map". In doing so, I will contrast range maps with four other types of maps that are similar but which differ in important ways.

## Range Maps vs. Other Types of Species Maps

I want to start off by identifying the types of maps that I'm referring to as "range maps." Here is an example:

![White-throated Sparrow Range](/images/white_throated_sparrow_range.jpeg)

This is a range map for the White-throated Sparrow from the [All About Birds website](https://www.allaboutbirds.org/guide/White-throated_Sparrow/maps-range). It is a typical range map in that it gives the birder a general sense of where the bird lives. In this case, we can see that the White-throated Sparrow is generally found in most of the continental United States, with the exception of a large part of the West, as well as much of Canada. In this map, the colors have particular meanings: orange indicates the summer range; light blue indicates the winter range; purple indicates the year-round range; and yellow indicates where the bird may be found but only during migration. These types of range maps are good for answer somewhat basic questions like, "Is this bird found in the state where I live? If so, what time of year is it found here?"

There are other types of maps that show where a particular species can be found. I will discuss four different types here.

### Range Expansion / Contraction Maps

The first is a map of how the range of species has expanded or contracted over time. The [following](https://thecottonwoodpost.files.wordpress.com/2022/03/noca-expansion-map.jpg) is a map of how the range of the Northern Cardinal has expanded since 1900.

![Northern Cardinal range expansion](https://thecottonwoodpost.files.wordpress.com/2022/03/noca-expansion-map.jpg)

Range expansion / contraction maps are often used in the context of climate change predictions. [Scientists](https://www.audubon.org/climate/survivalbydegrees) can use modeling techniques to estimate how the ranges of particular species are likely to change under different climate change scenarios. Range expansion / contraction maps differ from traditional field guide range maps in that the former show changes in range over a relatively long period of time, decades or longer. Field guide range maps, by contrast, show changes in the range of a particular species over the course of a year, due to changes in the seasons.

### Observation Maps

The second type of map is what I will call an "observation map." These include specific locations where a person has identified the species in the field. The following is one example. It is from the [ebird website](ebird.org) and depicts some specific locations in Maine where people have observed the White-throated Sparrow.

![White-throated Sparrow Observations](/images/white_throated_sparrow_obs.png)

The websites [ebird](ebird.org) and [inaturalist](inaturalist.org) are both good sources for observation maps for particular species The defining feature of these types of maps is that they depict individual observations and, ideally, each observation is attached to a specific point location. Range maps, by contrast, mainly depict large polygons which represent where the species can be found. Observation maps are most effective at large scales (i.e. zoomed in). They are useful when you want to know, "Is it likely that I'll see this species at this particular beach in Florida next week?" You can look up the observation maps for that species, find the location you will be visiting, and see if anyone else has observed that bird there recently.

### Habit Maps

Another type of map is a habit suitability map. These maps show suitable habitat for a species - i.e. places that it could live, regardless of whether it actually is there or not. These maps are often the basis for range expansion and contraction maps. Scientists first predictors of suitable habitat for a particular species. These may be various biotic and abiotic factors. Maps of current suitable habitat are created. Scientists then consider various future scenarios in which the important biotic and abiotic factors have changed, and corresponding new maps are produced. The changes in suitable habitat under the given scenario can then be determined. The following is a link to a habitat model for the Common Loon, which was created by the USDA Forest Service: [https://www.fs.usda.gov/nrs/atlas/bird/0070](https://www.fs.usda.gov/nrs/atlas/bird/0070).

Habitat maps are similar to range maps, but have some important differences. Range maps are usually broader, including areas that are not technically habitat. For instance, the range map for the White-throated Sparrow (above) indicates that its range includes all of the state of New York, though its habitat does not include large bodies of water or urban areas such as New York City. Habitat maps usually are made at a smaller scale and such non-habitat areas of the range are excluded. Also, habitat maps usually depict raster data while range maps usually depict vector data.

### Migration Maps

The final type of map that I will consider is a migration map. These maps show the movement of particular individuals over time. They are based on data from individuals that have been fitted with some sort of electronic tracker. The locations of the individual are recorded as it migrates and then mapped. Unlike range maps, migration maps focus on the movements of individuals rather than a whole species. The data they are based on is very fine-scaled. These types of maps are well suited for animations or story maps. The following are some links to migration maps:

- [https://warrenrdavison.wixsite.com/maps/post/animating-movement-with-arcgis-pro](https://warrenrdavison.wixsite.com/maps/post/animating-movement-with-arcgis-pro)
- [https://adventuresinmapping.com/2023/08/29/how-to-make-this-animated-map-of-blue-whale-migration/](https://adventuresinmapping.com/2023/08/29/how-to-make-this-animated-map-of-blue-whale-migration/)
- [https://storymaps.arcgis.com/stories/a370f84f6fe4464da3782c12504042f8](https://storymaps.arcgis.com/stories/a370f84f6fe4464da3782c12504042f8)

Note: there is a type of map that is sometimes called a "migration map" which depicts the movements of a particular species over the course of a year. I consider these to be a type of range map because they are based on changes in abundance, not individual tracker data. I will discuss this type of map later.

## Conclusion

In this post, I have described what I am calling "range maps" and have distinguished them from other types of maps. In part 2 of this series, I will examine in more detail exactly what information is depicted on range maps and discuss effective ways for visualizing this information.