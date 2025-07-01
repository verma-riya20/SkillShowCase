import React from 'react';

export default function PostCard({ post }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-gray-400 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] flex flex-col justify-between min-h-[300px]">
      <div className="space-y-3">
        <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full uppercase tracking-wide font-medium">
          {post.type}
        </span>
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-xl font-bold text-gray-800 hover:underline break-words"
        >
          {post.title}
        </a>
        <div className="flex flex-wrap gap-2 text-xs mt-1">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full border"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-6 items-center mt-6 text-sm text-gray-500">
        <span className="hover:text-indigo-500 cursor-pointer transition-all">👍 {post.likes}</span>
        <span className="hover:text-indigo-500 cursor-pointer transition-all">💬 {post.comments}</span>
        <span className="hover:text-indigo-500 cursor-pointer transition-all">🔖 {post.saves}</span>
      </div>
    </div>
  );
}
