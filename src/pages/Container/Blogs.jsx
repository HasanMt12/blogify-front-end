import { FaPenFancy } from 'react-icons/fa';
import BlogCard from '../../components/blogCard/BlogCard';
import { getAllPosts } from '../../services/index/blogPosts';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import BlogsErrorMessage from '../../components/ErrorMessage/BlogsErrorMessage';
import BlogCardSkeleton from '../../components/blogCard/BlogCardSkeleton';


const Blogs = () => {
  const {  data: posts, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  console.log(posts)
  return (
    <div className="flex-1">
      <div className="flex justify-start items-center gap-1 text-sky-600 mb-5 mt-8">
        <h1 className="font-semibold font-merriweather text-[#333333]">Recent Posts __ </h1>
        <FaPenFancy />
      </div>
      <div>
        {isLoading ? (
          [...Array(4)].map((item, index) => (
            <BlogCardSkeleton
              key={index}
            />
          ))
        ) : isError ? (
          <BlogsErrorMessage message="Couldn't fetch the posts data" />
        ) : (
          posts?.data.map((post) => (
            <BlogCard
              key={post._id} data={post} 
            />
          ))
        )}
        
      </div>
    </div>
  );
};

export default Blogs;
