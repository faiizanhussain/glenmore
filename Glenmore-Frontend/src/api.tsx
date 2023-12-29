// api.ts

import axios from "axios";

interface Post {
  // Define your Post interface based on your WordPress post structure
  id: number;
  title: string;
  content: string;
  excerpt: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get("wp-json/wp/v2/posts");

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};
