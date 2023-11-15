//----- imports ----------------------------------------------------------------

import Head from 'next/head';
import Layout from '/src/components/layout.js';
import styles from '../src/stylesheets/pubs.module.css';


//----- local code block -------------------------------------------------------

function NOCA(){
  return (
    <div className={styles.pub}>
      <h2> North Cascades National Park Wilderness Character Baseline Assessment</h2>
      <h2>  </h2>
      <div className={styles.info}>
        <ul>
          <li>
            This is the report that I wrote when I worked as a Wilderness Fellow at North Cascades National Park. It outlines a series of indicators and measures for monitoring wilderness character in the Stephen Mather Wilderness.
          </li>
          <li>
            View <a href='./pubs/noca.pdf' target='_blank'>pdf</a>
          </li>
          <li>
            Riegel, Ben and Jack Oelfke (2020). The Stephen Mather Wilderness: Wilderness Character Baseline Assessment. Natural Resource Report NPS/NOCA/NRR-2020/2164
          </li>
        </ul>
        <img src="./images/NOCA.png" alt="North Cascades Wilderness Character Assessment"></img>
      </div>
    </div>
  );
};

function PuertoRico(){
  return (
    <div className={styles.pub}>
      <h2> Puerto Rico Biomass Map</h2>
      <h2>  </h2>
      <div className={styles.info}>
        <ul>
          <li>
            This is a paper that I contributed to when I worked at the US EPA. I served as the remote sensing analyst for the project. I used Forest Service inventory data and remote sensing data to map tree canopy height and above-ground biomass over the whole island. 
          </li>
          <li>
            View <a href='./pubs/pr.pdf' target='_blank'>pdf</a>
          </li>
          <li>
            John S. Iiames, Joseph B. Riegel, Kristin M. Foley, and Ross S. Lunetta (2017). The Development and Evaluation of a High-Resolution Above Ground Biomass Product for the Commonwealth of Puerto Rico (2000). Photogrammetric Engineering and Remote Sensing. Vol. 83, No. 4, April 2017, pp. 293-306.
          </li>
        </ul>
        <img src="./images/pr.png" alt="Puerto Rico Biomass Map"></img>
      </div>
    </div>
  );
};

function Timberlake(){
  return (
    <div className={styles.pub}>
      <h2> Timbelake Restoration Area Biomass Mapping</h2>
      <h2>  </h2>
      <div className={styles.info}>
        <ul>
          <li>
            This is a published version of my master's research at Duke University. The paper compares the ability of lidar and high-resolution optical imagery to map above-ground biomass at a wetland restoration area in eastern North Carolina.
          </li>
          <li>
            View <a href='./pubs/timberlake.pdf' target='_blank'>pdf</a>
          </li>
          <li>
            Riegel JB, Bernhardt E, Swenson J (2013). Estimating Above-Ground Carbon Biomass in a Newly Restored Coastal Plain Wetland Using Remote Sensing. PLoS ONE 8(6): e68251. doi:10.1371/journal.pone.0068251
          </li>
        </ul>
        <img src="./images/timberlake.png" alt="Timbelake "></img>
      </div>
    </div>
  );
};
//----- export code block ------------------------------------------------------

export default function Publications(){

  return (
    <>
      <Head>
        <title>Publications</title>
      </Head>
      <Layout navSection='publications'>
        <div className={styles.pubs}>
          <h1>
            Publications
          </h1>
          <div className={styles.pubsList}>
            <NOCA/>
            <PuertoRico/> 
            <Timberlake/>
          </div>
        </div>
      </Layout>
    </>
  );
};