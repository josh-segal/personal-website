export interface BlogPost {
    id: number;
    title: string;
    image: string;
    date: string;
    readTime: string;
    category: string;
    slug: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Current and Future State of Software Engineer Hiring",
      image: "/software-engineer-hiring-cover.png",
      date: "June 23rd, 2025",
      readTime: "4 min read",
      category: "Culture, Startups",
      slug: "software-engineer-hiring"
    }
  ];

  export function getBlogPost(slug: string) {
    return blogPosts.find(post => post.slug === slug);
  }