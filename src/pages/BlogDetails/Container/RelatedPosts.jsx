/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { images, stables } from "../../../constants";
import { FaPenFancy } from 'react-icons/fa';
const RelatedPosts = ({blogs = [], tagsData, className}) => {
  console.log(blogs)
  return (
    <div
      className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 mt-8 lg:mt-0 lg:max-w-xs ${className}`}
    >
      <div className="flex justify-start items-center gap-1 text-sky-600 mb-5 mt-8">
        <h1 className="font-semibold font-merriweather text-[#333333]">Latest Blogs __ </h1>
        <FaPenFancy />
      </div>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
       
          {blogs.map((item) => (
          <div
            key={item._id}
            className="flex space-x-3 flex-nowrap items-center"
          >
            <img
              className="aspect-square object-cover rounded-lg w-1/5"
              src={
                item?.photo
                  ? stables.UPLOAD_FOLDER_BASE_URL + item?.photo
                  : images.sampleBlogImage
              }
              alt={item.title}
            />
            <div className="text-sm font-roboto text-dark-hard font-medium">
              <h3 className="text-sm font-roboto text-dark-hard font-medium md:text-base lg:text-lg">
                <Link to={`/blog/${item.slug}`}>{item.title}</Link>
              </h3>
              <span className="text-xs opacity-60">
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-roboto font-medium text-dark-hard mt-8 md:text-xl">
        Tags
      </h2>
     
       {tagsData?.length === 0 ? (
        <p className="text-slate-500 text-xs mt-2">
          There is not tags for this post
        </p>
      ) : (
        <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
          {tagsData?.map((item, index) => (
            <Link
              key={index}
              to="/"
              className="inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white md:text-sm"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
     
        <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
        
            <Link
            
              to="/"
              className="inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white md:text-sm"
            >
            catoroty Name
            </Link>
        
        </div>

    </div>
  );
};

export default RelatedPosts;