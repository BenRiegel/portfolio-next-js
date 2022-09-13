//----- imports ----------------------------------------------------------------

import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../src/components/layout.js';
import { postIds, getPostData } from '../../src/services/md.js';
import styles from '../../src/stylesheets/post.module.css';


//----- export code block ------------------------------------------------------

export default function BlogPost( {postData} ){
  return (
    <>
      <Head>
        <title>Ben Riegel - {postData.title}</title>
      </Head>
      <Layout navSection='blog'>
        <Link href='/blog'>
          <a className={styles.back}>← Back To Blog</a>
        </Link>
        <div className={styles.post}>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </Layout>
    </>
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
