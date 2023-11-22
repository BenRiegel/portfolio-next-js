---
title: 'Range Maps, Part 2: Visualization'
date: '2023-09-12'
description: 'In the second part of the series on range maps, I outline the type of data that is typically depicted on range maps and discuss the most effective ways for visualizing it.'
---

# Range Maps, Part 2: Visualization

In the [first post of this series](/range-maps1), I outlined what I call "species range maps" and distinguished them from similar maps. In this post, I will outline the type of data that is typically depicted on range maps and I will discuss what I consider to be the most effective ways of visualizing it.

## Temporal Range Data

As discussed previously, bird range maps typically show where a species can be found in various times of the year. That it, it shows where the summer range is, where the winter range is, and where the year-round range is. They may also show where the bird can be found when it is migrating. These areas are typically depicted using various colors: e.g. orange for summer, light blue for winter, purple for year-round, and yellow for migration.

I also mentioned previously that what I'm calling range maps don't depict longer-term changes in a species' range (e.g. expansion and contraction). However, species range maps do often attempt to depict irruptive range changes. In irruptive years, a species may temporarily expand far beyond its typical range. One example is the [Snowy Owl](https://www.allaboutbirds.org/guide/Snowy_Owl/maps-range):

![Snowy Owl Range](/images/snowy_owl_range.jpeg)

In this map, the dotted blue line indicates the approximate extent of the Snowy Owl's winter range during irruptive years. These changes in range are periodic but not do not represent stable expansions in the species' range. That is, Snowy Owls may expand beyond their typical range during one winter but go back to their typical range the next year. For the Snowy Owl, irruptive years are thought to derive from cycles in lemming populations, the Snowy Owl's main food source.

## Abundance Data

Traditional range maps typically depict ranges as colored polygons. This implies, however, that there are sharp breaks in a species range: a species may be found anywhere within the polygon but nowhere outside it. Actual species ranges don't usually have sharp breaks. As one moves towards the edges of a species range, the population may thin out and it may be hard to pinpoint exactly where the range ends. To me, this is a downside of traditional range maps. The are usually no obvious clear breaks in a species' population. 

To overcome this problem, range maps may also try to depict some sort of relative abundance data. This can be done in different ways:

The [Sibley Guide to Birds](https://www.sibleyguides.com/wp-content/uploads/RangeMap_2021-09-01_web-1024x655.jpg) depicts a "rare" category in the range map:

![Sibley map key](https://www.sibleyguides.com/wp-content/uploads/RangeMap_2021-09-01_web-1024x655.jpg)

Other range maps may have abundance categories that overlap one or more of the temporal categories. For example, in the Black Scoter's range from [All About Birds](https://www.allaboutbirds.org/guide/assets/photo/31956581-1280px.jpg), there is a "scarce" category within the breeding range:

![All About Birds](https://www.allaboutbirds.org/guide/assets/photo/31956581-1280px.jpg)

Similary, Audubon range maps may have "common" / "uncommon" categories that overlap each of the four temporal categories. For example, the [Snow Goose](https://www.audubon.org/field-guide/bird/snow-goose) range map has eight different categories.

## Range Map Challenges

In my opinion, traditional range maps struggle to deal with the complexities of actual species ranges. There are at least two ways in which this is the case:

First, with migratory species, the four temporal categories are not really sufficient. Bird species may have a winter range, a summer range, and areas where it can be found on migration. In some cases, the summer and winter range overlap, and this is often depicted with its own color. However, the migratory range also overlaps with the winter and summer ranges. This is usually not depicted with its own color. Only the areas where it is found on migration but no other times of the year are given its own color. It is usually just implied that the summer and winter ranges are also part of the migration range. In the Sibley Guide, this is a simple note saying that "migration also passes through summer and winter ranges." Another defect has to do with the fact that some migratory species have a different migratory behavior before and after breeding. It may be found in one area during its pre-breeding migration and in another area during its post-breeding migration. Traditional range maps typically don't depict separate migration ranges.

Second, traditional range maps don't deal with abundance information in a satisfying way, in my opinion. Having a separate abundance category of "rare" is a little confusing when the other categories are temporal. Is there "rare" range during the summer, winter, migratory time periods? Or is it during any of them? Diving the temporal categories into "common" / "uncommon" categories is better; however, it's not clear that that adequately captures the phenomenon. Why only have two categories?

## Alternatives to Traditional Range Maps

One way to deal with the second challenge is to specifically map abundance. This type of map includes [abundance maps based on ebird data](https://science.ebird.org/en/status-and-trends/abundance-maps). Here is one example, an abundance map for Sprague's Pipit: 

![Sprague's Pipit abundance map](https://is-ebird-wordpress-prod-s3.s3.amazonaws.com/wp-content/uploads/sites/55/2020/12/STSpragues-pipit.png)

In this example, there are four colors: red, depicting relative abundance during the breeding season; blue, depicting relative abundance during winter season; green, depicting pre-breeding migration areas; and yellow, depicting post-breeding migration areas. Darker areas depict greater abundance; lighter areas depict less abundance. For this species, there is no overlap between summer and winter ranges. This map doesn't depict range per se. Instead, it depicts modeled relative abundance based on ebird data. As such, it depicts raster data instead of vector data. This may be why it's not technically considered a range map. Nevertheless, it's pretty easy to pick out visually where the range is. Along with the relative abundance data, I think it is more accurate and higher quality depiction of the range.

As far as static maps go, these abundance maps are a clear step up from traditional range maps. Another step up can be made but it requires a shift to interactive, online maps. As such, it can't really be incorporated into printed fields guides. Interactive web maps have been developed for the ebird abundance maps. Here is a screen shot from one for the [Snowy Owl](https://science.ebird.org/en/status-and-trends/species/snoowl1/abundance-map?season=breeding,nonbreeding,prebreeding_migration,postbreeding_migration):

![Snowy Owl Abundance](/images/snowy_owl_abundance.png)

With this interactive map, you can turn on and off the different seasonal layers. For instance, you can see the entire migratory ranges by turning off the summer and winter ranges. I also like how there is a seasonal timeline to give viewer the sense of when exactly migration might occur.

Another step up is to map the abundance data at a more fine-grained scale than by the seasons. There are maps that depict abundance [each month](http://uxblog.idvsolutions.com/2015/06/migration.html) and some that depict abundance by the week. Here is one such example for the [Barn Swallow](https://science.ebird.org/en/status-and-trends/abundance-animations):

![Barn Swallow](https://is-ebird-wordpress-prod-s3.s3.amazonaws.com/wp-content/uploads/sites/55/2021/11/barswa-abundance-map-weekly-2021-en-1024.gif)

The data in these maps is often depicted as animations; however, it would not be hard to create an interactive web map that gives users control of what time period is depicted in the map. 

## Challenges Abundance Maps

In abundance maps, the data that is mapped typically covers a year. As discussed above, traditional range maps have a way to depict what the range looks like in irruptive years. It's not clear that this is possible for abundance maps. The abundance map for Snowy Owl above does not have a way to visualize irruptive years.

Furthermore, in the abundance maps, the data that is mapped is *relative* abundance. A darker area on the abundance map only shows where there are a lot of a species, given how common that species is (which may be not very common). Knowing that an area has high relative abundance for both the American Robin (very common) and Sprague's Pipit (not very common) doesn't give you a real sense of how likely it is that a birder would encounter each species in the field (which is what they care about). It would be helpful for the reader/viewer to get a sense of how common a species is in absolute terms. This is a challenge when you make the move to abundance from traditional binary range maps.

## Summary

In summary, traditional range maps attempt to map range over various life-cycle seasons (breeding, non-breeding, migratory). The traditional maps are vector data, implying that the range data is binary (i.e. it is found within the discrete polygons and not found outside them). Species data is much more complex. We can improve on traditional range maps by mapping abundance instead of binary range. We can also depict seasonal migratory data by shifting to interactive maps, where users can view the data for each season individually or perhaps may view the data on a finer temporal scale (monthly or weekly). This last change marks a shift away from traditional printed field guide maps, but I think this move is warranted, in my opinion. 

In my next post, I will explore how range maps are produced.