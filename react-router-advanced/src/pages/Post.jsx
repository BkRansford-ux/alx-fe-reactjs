// src/pages/Post.jsx
import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post #{id}</h2>
      <p>This is the content for post with ID: {id}</p>
    </div>
  );
}
