---
title: 'Refactoring My Professional Website using Next.js'
date: '2022-09-13'
description: "In this post, I discuss how I recoded my professional website (the site you're currently visiting) use Next.js"
---

# Refactoring My Professional Website

Earlier in the year, I created [this website](portfolio) to let people know more about my professional work. This was done using React. I recently have gone back and revised some of code of this site using Next.js. In this post, I will discuss why and how I made the changes.

## Blog Post Loading

My website includes a blog section in which readers can view various posts that I have written (including this one). These posts are stored as markdown files in separate file directory. In the original version of my website, I used React router to create a generic blog post route, which is associated with a BlogPost component. After it's first mounted, this component fetches the markdown file for the appropriate blog post and loads it in the dom. To do this, I used [ReactMarkdown](https://github.com/remarkjs/react-markdown) and [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) (for making code snippets easier to read).

~~~js
export default function BlogPost(props){
  const [mdText, setMdText] = useState('');
  //gets post id from router
  const { postId } = useParams();
  //after component has mounted, the markdown post is retrieved               
  useEffect( () => {                            
    getPost(postId).then( text => {  
      //the state is updated with the text once the file had been retrieved  
      setMdText(text);
    });
  });
  return (
    <div className={styles.container}>
    //the markdown component converts the markdown to html
      <ReactMarkdown
        children={mdText}                      
      />
    </div>
  );
};
~~~

In the code above, the markdown post is fetched when the component mounts. When the markdown file is retrieved the state is updated with its contents. The component re-renders, and the markdown text is delivered to the ReactMarkdown component, which converts the markdown text to html and inserts it into the dom.

With this approach, the markdown text is converted to HTML on the client side. Every time a reader wants to view a blog post, the markdown file has to be retrieved from the server and converted to HTML while the reader is waiting. The obvious downside to this approach is that it's not very efficient. The markdown shouldn't have to be converted to HTML every time for each client. It would be much better to convert the markdown to HTML once on the server side and then serve blog pages with the already converted HTML. This is where Next.js helps out.

## Next.js

[Next.js](https://nextjs.org/) is a React framework that provides tools for optimizing production code. Because my website is static (i.e. the same content is served to each viewer), the blog posts can all be pre-rendered. The markdown conversion can be done on the server side once. This is exactly what I want.

Next.js also does some nifty optimizations. For instance, if I include a link (using the Next.js "Link" component) to a different section of my website, it will automatically pre-fetch the code for that section in the background. So if the user decides to click on the link, the code is already there and the page transition will happen very quickly. Cool!

## Converting to Next.js

In order for this to all work, I had to make some changes both to my code and the file structure of my application. Next.js is rather strict about these things. For example, I need a top level directory called "pages", which includes a component for each page of my application (e.g. the home page, the "contact me" page, the "projects" page, etc.). Within the pages directory, I also needed a "posts" folder, which includes a file called "[id].js." This is analogous to the generic blog post component that I created in the previous version. This file includes the following code:

~~~js
export default function BlogPost( {postData} ){
  return (
    <Layout navSection='blog'>
      <div className={styles.post}>
        //ok to use dangerouslySetInnerHTML because the only content the
        //reader sees is content that I've created
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  );
};
export function getStaticPaths(){
  return {
    paths: postIds,
    fallback: false,
  };
}
export async function getStaticProps( {params} ){
  const postData = await getPostData(params.id);
  return {
    props: { postData },
  };
}
~~~

To make the pre-rendering work, I had to create some extra functions that serve as instructors for Next.js. In the code above, I created and exported two functions: "getStaticPaths" and "getStaticProps." The former tells Next.js the names of all the blog post paths (for example, the path for this post is '/posts/portfolio-next'). The latter tells Next.js what props I want to send to the BlogPost component. In this case, it's data about the blog post, including the content html. I had to do some work to retrieve all the post paths and other data, but getting Next.js to work was fairly easy.

## Markdown Conversion

The hardest part of this whole process was figuring out how to do the markdown conversion and syntax highlighting on the server side. Because I was no longer using ReactMarkdown (which is a client-side tool), I needed to find some alternative tools. As it turns out, this is not that straightforward. I ended up using remark, which is tool for processing markdown files. It does not, however, convert markdown to HTML. To do this, I used "remarkRehype." Rehype is a tool for manipulating HTML trees. I also used "rehypeHighlight" to create separate classes for separate JavaScript syntax elements. These can then be styled using a pre-built themes, or I can just style the colors myself. I'm not totally happy with howe "rehypeHighlight" parsed the JavaScript syntax. For instance, it doesn't seem to parse JSX correctly. I kinda like the outcome of React Syntax Highlighter better. I don't know, however, if there's a way to make the tool work better or if I should use a different tool entirely. That may be the topic of a future blog post.

## Assessment

Overall, the conversion was a success. I got Next.js to do exactly what I was hoping to do. Page transitions are indeed faster, as I had hoped. The conversion to Next.js took some time to learn but was relatively painless. Overall, I believe it was worth it to make the changes to my website.
