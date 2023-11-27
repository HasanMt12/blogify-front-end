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

  return (
    <div className="flex-[4]">
      <div className="flex justify-start items-center gap-1 text-sky-600 mb-5 mt-8">
        <h1 className="font-semibold font-merriweather">Recent Posts __ </h1>
        <FaPenFancy />
      </div>
      <div className='grid grid-cols-2 gap-4'>
        {isLoading ? (
          [...Array(4)].map((item, index) => (
            <BlogCardSkeleton
              key={index}
            />
          ))
        ) : isError ? (
          <BlogsErrorMessage message="Couldn't fetch the posts data" />
        ) : (
          posts?.map((post) => (
            <BlogCard
              key={post.id} data={post} 
            />
          ))
        )}
        
      </div>
    </div>
  );
};

export default Blogs;
