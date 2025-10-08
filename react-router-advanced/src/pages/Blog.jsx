// src/pages/Blog.jsx
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "React Router Deep Dive" },
  { id: 2, title: "Understanding Nested Routes" },
  { id: 3, title: "Protecting Routes in React" },
];

export default function Blog() {
  return (
    <div>
      <h1>Blog Page</h1>
      <ul className="mt-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
