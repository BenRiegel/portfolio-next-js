//----- import code block ------------------------------------------------------

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';


//----- module code block ------------------------------------------------------

const postsDirectory = path.join(process.cwd(), 'src/md/posts/');
const fileNames = fs.readdirSync(postsDirectory);
let posts = fileNames.map( fileName => {
  const id = fileName.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  return { id, ...matterResult.data };
});
posts.sort( (a, b) => {
  if (a.date < b.date){
    return 1;
  } else if (a.date > b.date) {
    return -1;
  } else {
    if (a.title < b.title){
      return 1;
    } else if (a.title > b.title){
      return -1;
    }
    return 0;
  }
});

const postIds = posts.map( post => {
  return {
    params: {id:post.id},
  };
});

//----- export code block ------------------------------------------------------

export { posts, postIds } ;

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const conversionResult = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(matterResult.content);
  return {
    id,
    ...matterResult.data,
    contentHtml: conversionResult.value,
  };
}

export async function getPageHtml(id) {
  const pageDirectory = path.join(process.cwd(), 'src/md/pages/');
  const fullPath = path.join(pageDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const conversionResult = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(fileContents);
  return conversionResult.value;
}
