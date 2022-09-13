---
title: 'Select Menu in React, Updated'
date: '2022-09-01'
description: 'This post describes a recent update to the animating select menu that I previously created using React.'
---

# Select Menu in React, Updated

I like going back and updating old projects. With fresh eyes and more experience, I can usually make the code a lot better. Transforming code in this way can be really satisfying. A little while ago, I decided to revisit the animating select menu that I previously created in React and [wrote about](select-menu-part-1). In this previous React version, I implemented the animated features with the help of external state management structures - i.e. stores. At the time, I thought this was the best way to handle the asyncronous aspects of the select menu. In thinking about this problem more, I wanted to go back and see if it can be done without external stores and just the built in features of React. If this could be done, it would greatly reduce the amount of code.

## Problem with Previous Solution

Readers are invited to read the previous blog posts to get a sense of what the project is about. To recap briefly, the animating select menu is challenging in part because the view updates are asyncronous. In the previous version, this challenge was overcome by creating a custom store object that provides notifications when the state updates. This store object allows for the notifications to be asyncronous. While I feel that this solution addresses the fundamental problem, the code, in my opinion, is way too verbose in React. Components have to subscribe to changes from the store and update local state variables, which in some cases are direct copies of the variables contained in the store. In all, there's just way too much code. I wanted to see if there was a way to do it in React that is way more concise. As it turns out, there is.

## New Solution

The new solution involves creating a state variable that contains the basic properties that a select menu needs: a list of options, the value of the selected option, and whether the select menu is open or closed. To implement an animating select menu, there needs to be a further state variable that keeps track of whether the update is syncronous or asyncronous (i.e. animated) and whether the update is complete or not. When the user clicks on the select menu, this triggers an action which updates the state: the selected option is updated, if applicable, and the open state is toggled. The click of the select menu also triggers an update of the update state variable. If animations are enabled in the select menu, then the update object is set to indicate that the update will by asyncronous and that it has begun. Upon these state changes, the options begin their animated changes. When the animations are completed, the update object is set to indicate that the update has completed.

The second part of the solution involves using the "useEffect" hook. This hook makes it possible to perform side effects when a variable updates. In this case, we want to notify the parent component when various events occur - specifically, when animations start and stop and when new options are selected. In the latter case, there's one important caveat: we only want to notify of a new option selection when the view update has been completed. To implement this, I used the "useEffect" hook with the update object as a dependancy. In this way we can keep track of whether an update is starting or completing. If it's starting and the update is animated then we notify that an animation is starting. If it's ending and the update is animated, then we notify that an animation is ending. Furthermore, if the update has ended and selected option has changed, then we notify of this change at this point.

## Evaluation

Overall, I'm pretty pleased with the result. The code is much more concise and easier to read and understand. I think I finally figured out a good solution in React. It's not perfect, but this is the kind of solution that I think is best. For readers who are interested, the source code can be found on [my GitHub site](https://github.com/BenRiegel/select-menu-react-new).
