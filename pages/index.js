import Head from 'next/head';
import Layout from '../src/components/layout.js';
import { getPageHtml } from '../src/services/md.js';
import styles from '../src/stylesheets/index.module.css';


export default function Home( {pageHtml} ){
  return (
    <>
      <Head>
        <title>Ben Riegel - About Me</title>
      </Head>
      <Layout navSection='home'>
        <div className={styles.home}>
          <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const pageHtml = await getPageHtml('home');
  return {
    props: { pageHtml },
  };
}
