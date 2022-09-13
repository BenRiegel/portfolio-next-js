//----- imports ----------------------------------------------------------------

import Head from 'next/head';
import Layout from '/src/components/layout.js';
import BlogEntry from '../src/components/blog-entry.js';
import { posts } from '../src/services/md.js';
import styles from '../src/stylesheets/blog.module.css';


//----- export code block ------------------------------------------------------

export default function Blog(props){
  return (
    <>
      <Head>
        <title>Ben Riegel - Blog</title>
      </Head>
      <Layout navSection='blog'>
        <div className={styles.blog}>
          <h1>Posts</h1>
          <div className={styles.entries}>
            {
              props.posts.map( post => (
                <BlogEntry key={post.id} post={post} /> )
              )
            }
          </div>
        </div>
      </Layout>
    </>
  );
};


export async function getStaticProps(){
  return {
    props: { posts },
  };
}
