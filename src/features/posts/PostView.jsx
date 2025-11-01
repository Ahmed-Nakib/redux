import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { isLoading, error, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-left from-gray-50 to-gray-100 py-12 px-4 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        📰 Latest Posts
      </h1>

      {isLoading && (
        <div className="flex justify-center items-center h-40">
          <p className="text-xl text-blue-600 animate-pulse">Loading...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-xl mb-4 shadow-sm">
          <h2 className="font-semibold">❌ Error:</h2>
          <p>{error.message || "Something went wrong."}</p>
        </div>
      )}

      {!isLoading && !error && posts?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl p-6 flex flex-col justify-between"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {post.body.length > 120
                  ? post.body.slice(0, 120) + "..."
                  : post.body}
              </p>

              <button className="mt-4 self-start text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
                Read More
              </button>
            </div>
          ))}
        </div>
      ) : (
        !isLoading &&
        !error && (
          <p className="text-gray-500 text-lg mt-10">No posts available 💤</p>
        )
      )}
    </div>
  );
};

export default PostView;
