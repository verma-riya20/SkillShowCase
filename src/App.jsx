import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import data from './data/dummyData.json';

export default function App() {
  const [sortBy, setSortBy] = useState('Recent');
  const [filterBy, setFilterBy] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50">
      <Navbar setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 md:p-6">
        <Sidebar setSortBy={setSortBy} setFilterBy={setFilterBy} />
        <div className="lg:col-span-2">
          <Feed sortBy={sortBy} filterBy={filterBy} posts={data.posts} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}