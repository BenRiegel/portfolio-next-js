import Logo from './logo.js';
import NavMenu from './nav-menu.js';
import styles from '../stylesheets/header.module.css';

export default function Header(props){
  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <Logo/>
        <NavMenu navSection={props.navSection}/>
      </div>
    </header>
  );
}
