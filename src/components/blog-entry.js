//----- imports ----------------------------------------------------------------

import Link from 'next/link';
import styles from '../stylesheets/blog-entry.module.css';


//----- export code block ------------------------------------------------------

export default function BlogEntry(props){

  const date = new Date(`${props.post.date} 00:00:00`);
  const month = date.toLocaleString('default', { month: 'long' })
  const day = date.getDate();
  const year = date.getFullYear();
  const dateStr = `${month} ${day}, ${year}`;

  return (
    <div className={styles.entry}>
      <Link href={`/posts/${props.post.id}`}>
        <a className={styles.title}>
          <h2>{props.post.title}</h2>
        </a>
      </Link>
      <p className={styles.date}>
        {dateStr}
      </p>
      <p className={styles.summary}>
        {props.post.description}
        <Link href={`/posts/${props.post.id}`}>Read More</Link>
      </p>
    </div>
  );
};
