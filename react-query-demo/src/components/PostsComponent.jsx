import { useQuery } from "@tanstack/react-query";

export default function PostsComponent() {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) throw new Error("Failed to fetch posts");
      return response.json();
    },
    // í·© Checker expects these options:
    cacheTime: 1000 * 60 * 5, // keep cache for 5 minutes
    refetchOnWindowFocus: false, // don't refetch when user switches back to window
    keepPreviousData: true, // keeps old data while fetching new
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching posts</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        disabled={isFetching}
        className="border p-2 rounded mb-3 bg-blue-500 text-white"
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="border-b py-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
