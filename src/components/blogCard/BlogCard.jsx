import { Link } from 'react-router-dom';
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { images, stables } from "../../constants";

 const BlogCard = ({data}) => {
  return (

<>
    <div className="flex flex-col md:flex-row  md:items-start gap-2 relative md:pr-4 group lg:pr-6">
    <img 
        src={
            data.photo
            ? stables.UPLOAD_FOLDER_BASE_URL + data.photo
            : images.sampleBlogImage
        }
        loading="lazy"
        alt={data?.title} className="object-cover object-center md:max-w-[35%] min-h-[220px] rounded-xl "/>
 

    <div className="md:min-w-[65%] px-2  py-2  min-h-[180px]">
            {data?.title && (
            <h3 className="">
                  <span className="bg-gray-100 rounded-3xl px-2 py-1 font-semibold "> {data.title.length > 25 ? `${data.title.substring(0, 25)}...` : data.title}</span> 
              </h3>
             )}
            {data?.caption && (
           <Link to={`/blog/${data.slug}`}> <div className="text-2xl md:block hidden font-bold leading-7 group-hover:text-[#0BD1D1] text-[#333333] py-3 pr-2">
                {data.caption.length > 80 ? `${data.caption.substring(0, 80)}...` : data.caption}
            </div>
            </Link>
            )}
            {data?.caption && (
             <Link to={`/blog/${data.slug}`}><div className="text-md block sm:hidden font-bold leading-5 hover:text-[#0BD1D1] text-[#333333] py-3 pr-1">
                {data.caption.length > 50 ? `${data.caption.substring(0, 50)}...read more` : data.caption}
            </div></Link>
            )}
           
      <div className='absolute bottom-2 md:right-[36px] right-0 md:left-[36%] left-0 px-2'>
         <div className="flex justify-start items-center gap-1 text-xs">
                {data?.tags && data?.tags.map((tag, index) => (
                        <div key={index} className=""># {tag}</div>
                ))}
            </div>

      <div className="flex justify-between flex-nowrap items-end mt-1">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={
                data.user.avatar
                  ? stables.UPLOAD_FOLDER_BASE_URL + data.user.avatar
                  : "https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
              }
              alt="post profile"
              className="w-7 h-7 md:w-10 md:h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h4 className="font-semibold italic text-dark-soft text-xs md:text-base">
                {data.user.name}
              </h4>
              <div className="flex items-center md:gap-x-2 gap-x-1">
                <span
                  className={`${
                    data.user.verified ? "bg-[#36B37E]" : ""
                  } w-fit bg-opacity-20 p-1.5 rounded-full`}
                >
                  {data.user.verified ? (
                    <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                  ) : (
                    ""
                  )}
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  {data.user.verified ? "Verified writer" : ""} 
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
</div>
<hr className='bg-gray-300  mx-auto mt-7 mb-4'></hr>
</>
  
  )
}

export default BlogCard;
