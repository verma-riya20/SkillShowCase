import React from 'react';
import PostCard from './PostCard';

export default function Feed({ posts, sortBy, filterBy, searchQuery }) {
  let filteredPosts = [...posts];

  if (filterBy !== 'All') {
    filteredPosts = filteredPosts.filter(post => post.type === filterBy);
  }

  if (searchQuery) {
    filteredPosts = filteredPosts.filter(
      post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  if (sortBy === 'Most Liked') {
    filteredPosts.sort((a, b) => b.likes - a.likes);
  } else if (sortBy === 'Most Saved') {
    filteredPosts.sort((a, b) => b.saves - a.saves);
  } else if (sortBy === 'Most Commented') {
    filteredPosts.sort((a, b) => b.comments - a.comments);
  }

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {filteredPosts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}
