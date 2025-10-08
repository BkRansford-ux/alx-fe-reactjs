import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dynamic Post Page</h2>
      <p>Displaying post with ID: <strong>{id}</strong></p>
    </div>
  );
};

export default Post;
