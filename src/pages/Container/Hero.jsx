import { useQuery } from "@tanstack/react-query";
import { images, stables } from "../../constants";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";


import { getAllPosts } from "../../services/index/blogPosts";
import { Link } from "react-router-dom";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

const Hero = () => {
  const { data: BlogsData } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
  });
  // Assuming postsData is an array of posts
const limitedBlogs = BlogsData?.data.slice(0, 1);

  
    return (
      <div className=" relative overflow-hidden py-6">
      <div className="relative z-10">
        <div
            className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true">
                <defs>
                    <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                        patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                        <path d="M.5 200V.5H200" fill="none"></path>
                    </pattern>
                </defs>
                <svg x="50%" y="50%" className="overflow-visible fill-blue-500">
                    <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth="0"></path>
                </svg>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
                </rect>
            </svg>
        </div>
        
    </div>
      <div className="">
      <h1 className={`lg:text-4xl md:text-2xl sm:text-xl lg:text-center text-start font-merriweather`}>
        <b>Share thoughts and ideas. </b> <br></br>
        Join, be part of global conversation.
      </h1>
      <div className={`flex items-start gap-12 lg:mt-14 md:mt-10 mt-7`}>
        <div className="flex-1 h-[400px] relative lg:block hidden ">
      
       
  {limitedBlogs && limitedBlogs?.map((item) => (  
    
       
     <Card key={item._id} isFooterBlurred className="lg-w-11/12 md:w-11/12 w-full mx-auto h-[300px] col-span-12 sm:col-span-7 group ">
      <CardHeader className="absolute z-10 top-1 flex-col items-start ">
        <p className="text-tiny text-white/20 uppercase font-bold">
           {new Date(item.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}</p>
        <h4 className="text-white/90 font-medium bg-black/30 rounded-lg px-2 text-xl group-hover:text-[#0BD1D1]">{item.title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        className="z-0 w-full h-full object-cover "
        src={
          item?.photo
            ? stables.UPLOAD_FOLDER_BASE_URL + item?.photo
            : images.sampleBlogImage
        }
        alt={item.title}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 ">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            className="rounded-full w-10 h-11 bg-black"
            src={
              item.user.avatar
                ? stables.UPLOAD_FOLDER_BASE_URL + item.user.avatar
                : "https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
            }
            alt="post profile"
          />
          <div className="flex flex-col">
            <p className="text-tiny  text-white/80">{item.user.name}</p>
            <div className="flex justify-start items-center gap-1">
              <span
                  className={`${
                    item.user.verified ? "bg-[#36B37E]" : "bg-red-500"
                  } w-fit bg-opacity-20 p-[1px] rounded-full text-tiny text-white/80`}
                >
                  {item.user.verified ? (
                    <BsCheckLg className=" text-[#36B37E]" />
                  ) : (
                    <AiOutlineClose className=" text-red-500" />
                  )}
                </span>
                <span className="italic text-white/80 text-tiny">
                  {item.user.verified ? "Verified" : "Unverified"} writer
                </span>
            </div>
          </div>
        </div>
        <Link to={`/blog/${item.slug}`}><Button radius="full" size="sm" className="text-[#183333]">reed more</Button></Link> 
      </CardFooter>
    </Card> 
   
      ))}
        </div>

        <div className="flex flex-1 flex-col gap-2 ">
          <h1 className="lg:text-[2rem] md:text-[1.2rem] text-[0.8rem] ">Our platform, Collaborative Mindspace, welcomes all voices.</h1>
          <p className={`text-gray-500 font-[300] lg:text-[1.8rem] md:text-[0.8rem] text-[0.6rem] `}>
             Join a global self-expression community. Your perspective matters here. Share stories, thoughts, and connect with voices worldwide.
          </p>
           
        </div>
      </div>
      </div>
    </div>
    );
};

export default Hero;