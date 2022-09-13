//----- imports ----------------------------------------------------------------

import Head from 'next/head';
import Layout from '/src/components/layout.js';
import styles from '../src/stylesheets/contact.module.css';


//----- export code block ------------------------------------------------------

export default function Contact(){

  //change img elements to next images
  return (
    <>
      <Head>
        <title>Ben Riegel - Contact Me</title>
      </Head>
      <Layout navSection='contact'>
        <div className={styles.contact}>
          <h1>
            Contact Me
          </h1>
          <p>If you would like to get in touch, I would love to hear from you. Connect with me via:</p>
          <div className={styles.links}>
            <div>
              <a href = "mailto: ben.riegel@gmail.com">
                <img src="./images/email.png" alt="Email"/>
                Email
              </a>
              <a href='https://www.linkedin.com/in/ben-riegel-1a00a835/'>
                <img src="./images/linkedin.png" alt="LinkedIn"/>
                LinkedIn
              </a>
            </div>
          </div>
          <p>If you would like to see more of my coding work, check out my pages at the following sites:</p>
          <div className={styles.links}>
            <div>
              <a href='https://github.com/BenRiegel'>
                <img src="./images/git-hub.png" alt="GitHub"/>
                GitHub
              </a>
              <a href='https://codepen.io/benriegel'>
                <img src="./images/code-pen.png" alt="CodePen"/>
                CopePen
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
