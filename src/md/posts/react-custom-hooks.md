---
title: 'Custom hooks in React: useStore'
date: '2022-10-24'
description: "In this post, I discuss a use-case for custom hooks in React."
---

# Custom hooks in React

In React, hooks are features that allow developers to use state variables and access lifecycle events while only using functional components. Previously, developers had to use class components. There are several built-in hooks in React, including 'useState', 'useEffect', and 'useRef'. It's beyond the scope of this post to discuss these in detail. For now, all I can do is refer readers to the [documentation](https://reactjs.org/docs/hooks-reference.html).

In this post, I want to talk about custom hooks. Custom hooks are based around of one or more of the built-it React hooks. They allow developers to extract repetitive code from React components. Below I will discuss one use-case for custom hooks, and I will attempt to show how they can be very powerful tools.

## Use-case for custom hooks

In my [Tetris](tetris) project, I used store objects to manage state variables. A store object, at least as I implemented it in my project, is an object that keep track of a state variable and notifies listeners when there are changes in the value of that variable. In React, components can subscribe and update the UI accordingly when the value of the store variable changes. In order to do this, however, developers have to write a decent amount of boiler-plate code in each component. When the component mounts, the component has to subscribe to the store, and when it un-mounts, it must unsubscribe. Furthermore, a React state variable must be created in the component so that when the store value changes, it updates the component state variable, which in turn triggers a refresh. A custom hook can make it so that we don't need all this boilerplate code.

Below is a custom hook which I created in my Tetris app. It's called 'useStore.' The 'use' part is a convention that lets React know that it's a hook.

~~~js
function useStore(store){
  const [value, setValue] = useState(store.value);
  useEffect( ()=>{
    store.subscribe(setValue);
    return ()=>{
      store.unsubscribe(setValue);
    };
  }, []);
  return value;
}
~~~

The useStore hook takes a store object as an argument. It is the store we're going to use. The function creates a state variable 'value' using the built-in useState hook. The value here represents the value of the variable contained in the store. The initial value is the current value in the store. The useStore hook next uses the useEffect hook to set up the subscriptions. The array parameter is set to empty, which means that the code is executed only when the component mounts. It sets up the subscription and it returns another function, which is executed when the component un-mounts. In this case, it executes the unsubscribe code. When the store updates, the setValue function is executed, the component state variable is updated, and the component will refresh.

Instead of having to put the boilerplate code in every single component that uses a store object, we can just use this custom hook. It eliminates a lot of code. Moreover, if you want to change something, you only have to change it in one place, not in every single component.

In summary, I'm a big fan of hooks in React and creating custom hooks to streamline code.
