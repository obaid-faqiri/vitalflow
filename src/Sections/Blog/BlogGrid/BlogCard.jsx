const BlogCard = ({ post }) => {
  return (
    <div className="group">
      {/* Image */}
      <div className="mb-6 overflow-hidden rounded-2xl">
        <img
          src={post.image}
          alt={post.title}
          className="object-cover w-full h-56 transition duration-500 rounded-2xl group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h3 className="mb-4 text-lg font-medium text-gray-900 transition group-hover:text-blue-600">
        {post.title}
      </h3>

      {/* Meta */}
      <div className="flex items-center gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-blue-600 rounded-sm"></span>
          {post.date}
        </div>

        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-gray-400 rounded-sm"></span>
          {post.readTime}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
