/* eslint-disable react/prop-types */
import { images, stables } from '../../constants';
import { Link } from 'react-router-dom';
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const BlogCard = ({data}) => {
console.log(data.photo)
  return (
    
     <div
      className={`group rounded-md overflow-hidden shadow-md `}
    >
     <div className="relative">
          <Link to={`/blog/${data.slug}`}>
                    <img className="w-full object-cover object-center h-auto md:h-52 lg:h-[11rem] xl:h-[14rem]"
                        src={images.sampleBlogImage}
                        alt="Sunset in the mountains"/>
                    <div
                        className="group-hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                 </Link>
                {/* <a href="#!">
                    <div
                        className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Cooking
                    </div>
                </a> */}
            </div>
      <div className="p-4">
        <Link to={`/blog/${data.slug}`}>
          <h2 className="font-opensans font-semibold text-lg text-dark-soft md:text-xl lg:text-2xl">
            {data.title}
          </h2>
          <p className="text-dark-light mt-3 text-sm md:text-lg">
            {data.caption}
          </p>
        </Link>
        <div className="flex justify-between flex-nowrap items-end mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={
                data.user.avatar
                  ? stables.UPLOAD_FOLDER_BASE_URL + data.user.avatar
                  : "https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
              }
              alt="post profile"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h4 className="font-semibold italic text-dark-soft text-sm md:text-base">
                {data.user.name}
              </h4>
              <div className="flex items-center gap-x-2">
                <span
                  className={`${
                    data.user.verified ? "bg-[#36B37E]" : "bg-red-500"
                  } w-fit bg-opacity-20 p-1.5 rounded-full`}
                >
                  {data.user.verified ? (
                    <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                  ) : (
                    <AiOutlineClose className="w-1.5 h-1.5 text-red-500" />
                  )}
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  {data.user.verified ? "Verified" : "Unverified"} writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-semi text-[#333333] italic text-sm md:text-base">
            {new Date(data.createdAt).getDate()}{" "}
            {new Date(data.createdAt).toLocaleString("default", {
              month: "long",
            })}
          </span>
        </div>
      </div>
    </div>

  );
};

export default BlogCard;
