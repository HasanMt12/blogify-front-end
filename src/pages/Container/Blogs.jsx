import { FaPenFancy } from 'react-icons/fa';
import BlogCard from '../../components/BlogCard';

const Blogs = () => {
  return (
    <div className="flex-[5]">
      <div className="flex justify-start items-center gap-1 text-sky-600 mb-5 mt-8">
        <h1 className="font-semibold font-merriweather">Recent Posts __ </h1>
        <FaPenFancy />
      </div>
      <div>
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
