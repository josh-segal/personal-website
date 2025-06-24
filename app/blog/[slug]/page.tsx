import { notFound } from 'next/navigation';
import { getBlogPost } from '@/lib/blog-data';
import { getBlogContent } from '@/lib/markdown';
import { Navigation } from '@/components/navigation';
import { BackToTop } from '@/components/back-to-top';

interface BlogPageProps {
    params: { slug: string};
}

export default async function BlogPostPage({ params }: BlogPageProps) {
    const post = getBlogPost(params.slug);
    
    if (!post) return notFound();

    const content = await getBlogContent(post.slug);

    return (
    <>
    <Navigation />
    <BackToTop />

    <article className="max-w-3xl mx-auto py-16 px-4">
      <img src={post.image} alt={post.title} className="w-full rounded-lg mb-8" />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-500 mb-6">
        <time>{post.date}</time> • <span>{post.readTime}</span> • <span>{post.category}</span>
      </div>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
    </>
  );
}

