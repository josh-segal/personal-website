import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import supersub from 'remark-supersub';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export async function getBlogContent(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.md`);
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContent);
    
    // Convert markdown to HTML
    const processedContent = await remark()
      .use(supersub)
      .use(html)
      .process(content);
    
    return processedContent.toString();
  } catch (error) {
    console.error(`Error reading blog content for ${slug}:`, error);
    return '';
  }
}