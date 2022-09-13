//----- imports ----------------------------------------------------------------
import Head from 'next/head';
import Link from 'next/link';
import Layout from '/src/components/layout.js';
import styles from '../src/stylesheets/projects.module.css';


//----- local code block -------------------------------------------------------

function Minesweeper(){
  return (
    <div className={styles.project}>
      <h2> Minesweeper </h2>
      <div className={styles.info}>
        <ul>
          <li>
            See it <a href='https://minesweeper-riegel.netlify.app/'>live</a>
          </li>
          <li>
            Read about this project on my <a href='../posts/minesweeper'>blog</a>
          </li>
          <li>
            View source code on <a href='https://github.com/BenRiegel/minesweeper'>GitHub</a>
          </li>
        </ul>
        <img src="./images/minesweeper.png" alt="Minesweeper game"></img>
      </div>
    </div>
  );
}

function Portfolio(){
  return (
    <div className={styles.project}>
      <h2> My Professional Website </h2>
      <div className={styles.info}>
        <ul>
          <li>
            See it live (you're already seeing it!)
          </li>
          <li>
            Read about this project on my <Link href='../posts/portfolio-next'>blog</Link>
          </li>
          <li>
            View source code on <a href='https://github.com/BenRiegel/portfolio-next-js'>GitHub</a>
          </li>
        </ul>
        <img src="./images/portfolio.png" alt="My Professional Website"></img>
      </div>
    </div>
  );
}

function SelectMenu(){
  return (
    <div className={styles.project}>
      <h2> Animating Select Menu </h2>
      <div className={styles.info}>
        <ul>
          <li>
            See it live: <a href='https://select-menu-vanilla-js.netlify.app/'>Vanilla JS version</a> and <a href='https://select-menu-react-js.netlify.app/'>React version</a>
          </li>
          <li>
            Read about this project on my <Link href='../posts/select-menu-part-1'>blog</Link>
          </li>
          <li>
            View source code on GitHub: <a href='https://github.com/BenRiegel/select-menu-demo-vanilla-js'>Vanilla JS version</a> and <a href='https://github.com/BenRiegel/select-menu-demo-react'>React version</a>
          </li>
        </ul>
        <img src="./images/select-menu.png" alt="Animating Select Menu"></img>
      </div>
    </div>
  );
}

function PGE(){
  return (
    <div className={styles.project}>
      <h2> The People's Guide to Energy </h2>
      <div className={styles.info}>
        <ul>
          <li>
            See it <a href='https://pgeproject.netlify.app/'>live</a>
          </li>
          <li>
            Read about this project on my <Link href='../posts/pge-1'>blog</Link>
          </li>
          <li>
            View source code on <a href='https://github.com/BenRiegel/pge-v2'>GitHub</a>
          </li>
        </ul>
        <img src="./images/pge.png" alt="People's Guide to Energy"></img>
      </div>
    </div>
  );
}

//----- export code block ------------------------------------------------------

export default function Projects(){

  return (
    <>
      <Head>
        <title>Ben Riegel - My Projects</title>
      </Head>
      <Layout navSection='projects'>
        <div className={styles.projects}>
          <h1>
            Projects
          </h1>
          <div className={styles.projectsList}>
            <Minesweeper/>
            <Portfolio/>
            <SelectMenu/>
            <PGE/>
          </div>
        </div>
      </Layout>
    </>
  );
};
