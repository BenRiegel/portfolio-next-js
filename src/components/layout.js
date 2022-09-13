import Head from 'next/head';
import Header from '../components/header.js';
import styles from '../stylesheets/layout.module.css';


export default function Layout(props){
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header navSection={props.navSection}/>
        <section className={styles.section}>
          { props.children }
        </section>
      </main>
    </>
  );
}
