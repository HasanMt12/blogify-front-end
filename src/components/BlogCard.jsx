import { AiOutlineEye } from 'react-icons/ai';
import { images } from '../constants';
import { Link } from 'react-router-dom';

const BlogCard = ({data}) => {
  const {title, slug} = data;
  return (
    
    <div className={`flex items-start gap-8 mb-12 p-1 bg-transparent`}>
      <div className="flex-1 h-64 max-w-md relative hidden md:block">
        <img src={images.HeroPhoto} alt="" className="object-cover" />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="">
          <div>
            <span className="text-gray-500">
              21 December -{" "}
            </span>
            <span className="text-cyan-600 font-medium">{title}</span>
          </div>
          <div className="flex justify-start items-center gap-1">
            <AiOutlineEye />
            <div>
              <span className="text-gray-500">
                Views:
              </span>
              <span className="text-cyan-600 font-medium"> 1 </span>
            </div>
          </div>
        </div>

        <h1 className="text-[#0E7490] font-semibold lg:text-lg md:text-md text-sm">First Blog</h1>

        <div className="lg:text-md md:text-sm text-xs">Blog description</div>
          <Link to={`/blog/${slug}`}><h2  className="text-sky-600 border-b hover:border-cyan-600 w-fit">
          Continue Reading
        </h2></Link>
      </div>
    </div>

  );
};

export default BlogCard;
