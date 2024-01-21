/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { images, stables } from "../../constants";
import { FaPenFancy } from 'react-icons/fa';
const PopularPost = ({blogs = [], className}) => {
  console.log(blogs)
  return (
    <div
      className={`w-full border-[0.5px] border-gray-200 rounded-xl p-4 mt-8 lg:mt-0 lg:max-w-xs ${className} mb-4`}
    >
      <div className="flex justify-start items-center gap-1 text-sky-600 mb-5 mt-8">
        <h1 className="font-semibold font-merriweather text-[#333333]">Popular Blogs __ </h1>
        <FaPenFancy />
      </div>
      <div className="grid gap-y-5 mt-5 mb-4 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
       
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
                <Link to={`/blog/${item.slug}`}>{item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}</Link>
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
     
     

    </div>
  );
};

export default PopularPost;