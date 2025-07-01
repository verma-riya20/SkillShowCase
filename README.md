 📘 SkillShowcase Explore Page

An elegant and responsive frontend project built to showcase user skills through various posts like Projects, Certifications, Internships, Research Papers, and Coding Ranks. Designed for recruiters, learners, and developers to explore others' achievements in a clean UI format.

 🧩 Project Overview

The SkillShowcase Explore Page is a frontend-only web interface built using React and Tailwind CSS. It displays user-generated content (dummy/static data) in a visually appealing masonry layout. Sidebar options allow for filtering, sorting, and browsing through top skills and projects.

This project was built for UI/UX evaluation and showcases animation, responsiveness, clean component structuring, and creative styling — all without backend logic.

---

⚙️ Tech Stack

* React.js – Frontend library for building the UI
* Tailwind CSS– Utility-first CSS framework for rapid styling
* Lucide React – Icon library for lightweight SVG icons
* Static JSON Data– For dummy content simulation

---

🚀 Key Features

📌 Main Feed (Post Cards):

* Each post displays one of the following:

  * Project (Title + GitHub link)
  * Certification (Name + Certificate link)
  * Coding Rank (Platform + Profile link)
  * Research Paper (Title + Source link)
  * Internship (Role + Company name + Offer letter link)
* Includes:

  * Skill tags (e.g., #WebDev, #AI)
  * Like 👍, Comment 💬, Save 🔖 (non-functional)
  * Hover animation, shadow elevation, and border transitions

📂 Sidebar (Sectional Panel):

* User Dashboard (sample/dummy user info)
* Leaderboard – Top 5 users
* Top Projects – Display popular dummy projects
* Top Skills – Tag display (e.g., React, AI, NodeJS)
* Sort by: Recent, Most Liked, Saved, Commented
* Filter by Type: Project, Internship, Certification, etc.

🌐 Responsive Design

* Mobile-first layout
* Masonry-style cards with media query-based grid adaption
* Mobile navigation toggle

🔍 Dynamic Features

* Search bar to filter posts by tag or title
* Animated navigation and card transitions

---

📁 Folder Structure

```
SkillShowcase/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── PostCard.jsx
│   │
│   ├── data/
│   │   └── dummyData.json
│   │
│   ├── App.jsx
│   └── index.css
│
├── public/
└── README.md
```

---

📌 How to Run

```bash
npm install
npm start
```

Project runs at `http://localhost:3000`.

---

💡 Future Improvements

* Dark mode toggle 🌙
* Backend integration with Firebase or MongoDB
* Bookmark, like, comment functionality (real)
* Admin dashboard and user login system

---

 👤 Author

Built with ❤️ by Riya Verma as part of a frontend evaluation task.
