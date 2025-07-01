import React from 'react';
import data from '../data/dummyData.json';

export default function Sidebar({ setSortBy, setFilterBy }) {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 shadow-lg space-y-6 sticky top-24 w-[360px] h-[calc(110vh-6rem)] overflow-hidden">
      <div>
        <h2 className="font-bold text-lg text-indigo-600 mb-2">👤 User Dashboard</h2>
        <p className="text-sm text-gray-600">Logged in as <strong>Riya</strong><br />Skill enthusiast & learner</p>
      </div>

      <div>
        <h2 className="font-bold text-lg text-indigo-600 mb-2">🏆 Leaderboard</h2>
        <ul className="ml-4 list-disc text-sm text-gray-800 space-y-1">
          {data.leaderboard.map((user, idx) => (
            <li key={idx}>{user}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-lg text-indigo-600 mb-2">🚀 Top Projects</h2>
        <ul className="ml-4 list-disc text-sm text-gray-800 space-y-1">
          {data.topProjects.map((proj, idx) => (
            <li key={idx}>{proj}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-lg text-indigo-600 mb-2">💡 Top Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {data.topSkills.map((skill, idx) => (
            <li key={idx} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-lg text-indigo-600 mb-2">🔍 Sort</h2>
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full p-2 border rounded bg-white text-sm"
        >
          <option>Recent</option>
          <option>Most Liked</option>
          <option>Most Saved</option>
          <option>Most Commented</option>
        </select>
      </div>

      <div>
        <h2 className="font-bold text-lg text-indigo-600 mb-2">📁 Filter by Type</h2>
        <select
          onChange={(e) => setFilterBy(e.target.value)}
          className="w-full p-2 border rounded bg-white text-sm"
        >
          <option>All</option>
          <option>Project</option>
          <option>Certification</option>
          <option>Coding Rank</option>
          <option>Research Paper</option>
          <option>Internship</option>
        </select>
      </div>
    </div>
  );
}
