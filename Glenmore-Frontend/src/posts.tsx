// Posts.tsx

import React, { useEffect, useState } from "react";
import { fetchPosts } from "./api";

interface Post {
  id: number;
  title: string;
  content: string;
  excerpt: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    getPosts();
  }, []); // Run once on component mount

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
