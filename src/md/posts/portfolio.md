---
title: 'Developing My Professional Website'
date: '2022-03-12'
description: "In this post, I discuss how I created my professional website, the one that you're currently visiting!"
---

# My Professional Website

This post focuses on the website that you're currently reading this post on: my own portfolio website. This is the website that I created to let people know a little more about my professional self, to display the projects that I've completed, and to blog about various front-end development topics. I figured that if I wanted to get hired as a front-end developer, I at least needed to build my own website to show that I can build websites.

I want to mention at the outset that I'm not a designer. I have an amateur sense of what looks good and bad and what constitutes a good or bad user experience, but I'm not specifically trained in those areas. Nevertheless, I wanted to produce something on my own that at least doesn't look bad. Moreover, I also wanted to create a site that was responsive and mobile-friendly. I think that I accomplished those goals.

I created the website using React and create-react-app. This is a very easy and fast way to get started developing a website. I thought about using the blogging tool Gatsby, but I wanted to do more of the website building myself. Within the React framework, I used react-router-dom to handle routes. The blog posts were created as markdown files and converted to HTML using 'react-markdown.' Many blog posts include code snippets. I wanted the JavaScript code to be highlighted in different ways depending on the syntax type. This was done with the help of 'react-syntax-highlighter.'

This site only has a front-end component. The markdown files ware stored in a separate file directory rather than in a database. I created a json file that has attributes of each of the files, including the title, date it was created, and a brief description of the contents of the file. The json file is included as part of the bundled source code so it is automatically downloaded when the user visits the site. When the user visits the 'Blog' portion of the website, the contents of the json file are used to create a list of links to each of the blog posts.

For styling, I attempted to use a mobile-first, responsive approach. This first assumes that the website is being displayed on a small screen and then uses media queries to adjust the layout if the screen is larger. A blog website does not involve very complicated layouts, so this was not a very difficult task.

The main challenge in creating the site was figuring out what I thought looks good. I had to do a lot of research on the designs of other developers. There are a lot of sites out there that look cool but are too flashy and overstimulating. I like things clean, simple, and to the point.

In the future, I would like to expand the capabilities of the website in two ways. I would like to add tags for each of the blog posts and allow readers to filter the posts by tag. I would also like to make it possible for users to make comments on specific blog posts. This, of course, would require back end support. So my next task is learn some back end development!
