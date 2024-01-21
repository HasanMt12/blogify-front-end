import { useQuery } from "@tanstack/react-query";
import MainLayout from "../components/MainLayout";
import Blogs from "./Container/Blogs";
import Hero from "./Container/Hero";
import { getAllPosts } from "../services/index/blogPosts";
import RelatedPosts from "./BlogDetails/Container/RelatedPosts";
import PopularPost from "./HomePages/popularPost";

const HomePage = () => {
    const { data: BlogsData } = useQuery({
        queryFn: () => getAllPosts(),
        queryKey: ["posts"],
      });
      // Assuming postsData is an array of posts
    const limitedBlogs = BlogsData?.data.slice(0, 4);
    return (
       <MainLayout>
        <div className="w-11/12 mx-auto ">
             <Hero />
            <div className="container mx-auto max-w-6xl flex flex-col px-5 py-2 lg:flex-row lg:gap-x-5 lg:items-start">
                <Blogs  /> 
                <div className="max-h-screenpm">
              <PopularPost
                  blogs={limitedBlogs}
                  className="mt-8 lg:mt-0 lg:max-w-xs"
              ></PopularPost>
              </div>
            </div>
        </div>
           
           
       </MainLayout>
    );
};

export default HomePage;