//----- imports ----------------------------------------------------------------

import Link from 'next/link';
import styles from '../stylesheets/nav-link.module.css';


//----- export code block ------------------------------------------------------

export default function NavLink(props){

  const isSelected = (props.sectionName === props.navSection);
  const selectedClass = isSelected ? styles.selected : '';
  const classNames = `${selectedClass} ${styles.navLink}`;

  return (
    <li className={classNames}>
      <Link href={props.linkToPath}>
        {props.text}
      </Link>
    </li>
  );

};
