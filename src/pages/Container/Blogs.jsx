import { FaPenFancy } from 'react-icons/fa';
import BlogCard from '../../components/BlogCard';
import { getAllPosts } from '../../services/index/blogPosts';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

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
    <div className="flex-[5]">
      <div className="flex justify-start items-center gap-1 text-sky-600 mb-5 mt-8">
        <h1 className="font-semibold font-merriweather">Recent Posts __ </h1>
        <FaPenFancy />
      </div>
      <div>
         {!isLoading && !isError ? (
          posts?.map((post) => <BlogCard key={post.id} data={post} />)
        ) : (
          <h2>no </h2>
        )}
        
      </div>
    </div>
  );
};

export default Blogs;
