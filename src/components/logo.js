//----- imports ----------------------------------------------------------------

import Link from 'next/link';
import Image from 'next/image';
import styles from '../stylesheets/logo.module.css';


//----- export code block ------------------------------------------------------

export default function Logo(){

  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <Image src="/images/me.png"
                 height={64}
                 width={64}
                 alt="My profile pic"/>
        </a>
      </Link>
      <div className={styles.nameContainer}>
        <Link href="/">Ben Riegel</Link>
        <div className={styles.title}>GIS Analyst</div>
      </div>
    </div>
  );
};
