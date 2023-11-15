//----- imports ----------------------------------------------------------------

import NavLink from './nav-link.js';
import styles from '../stylesheets/nav-menu.module.css';


//----- export code block ------------------------------------------------------

export default function NavMenu(props){
  return (
    <ul className={styles.nav}>
      <NavLink linkToPath='/' text='Home' navSection={props.navSection} sectionName='home'/>
      <NavLink linkToPath='/projects' text='Projects' navSection={props.navSection} sectionName='projects'/>
      <NavLink linkToPath='/blog' text='Blog' navSection={props.navSection} sectionName='blog'/>
      <NavLink linkToPath='/pubs' text='Publications' navSection={props.navSection} sectionName='publications'/>
      <NavLink linkToPath='/contact' text='Contact' navSection={props.navSection} sectionName='contact'/>
    </ul>
  );
};
