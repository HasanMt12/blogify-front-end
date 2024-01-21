/* eslint-disable react-hooks/rules-of-hooks */
import  { useState } from "react";
import {  Link, useParams } from "react-router-dom";

import BreadCrumbs from "../../components/Breadcrumbs.jsx";

import MainLayout from "../../components/MainLayout.jsx";

import { images, stables } from "../../constants";
import { useQuery } from "@tanstack/react-query";
import {  getAllPosts, getSinglePost } from "../../services/index/blogPosts.js";
import BlogsErrorMessage from "../../components/ErrorMessage/BlogsErrorMessage";

import parseJsonToHtml from "../../utils/parsJsonToHtml.js";
import BlogDetailSkeleton from "./BlogSetailsKeleton";
import RelatedPosts from "./Container/RelatedPosts.jsx";
import CommentsContainer from "../../components/comments/CommentsContainer.jsx";
import { useSelector } from "react-redux";
import Editor from "../../components/TextEditor/Editor.jsx";

const blogDetailsPage = () => {
  const { slug } = useParams();
  const [breadCrumbsData, setbreadCrumbsData] = useState([]);
  const [body, setBody] = useState(null);
  const userState = useSelector((state) => state.user);

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    queryKey: ["blog", slug],
    onSuccess: (data) => {
      setbreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "Blog", link: "/blog" },
        { name: "blog title", link: `/blog/${data.slug}` },
      ]);
      setBody(parseJsonToHtml(data?.body));
    },
  });

 const { data: BlogsData } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
  });
  // Assuming postsData is an array of posts
const limitedBlogs = BlogsData?.data.slice(0, 4);
console.log(limitedBlogs)
console.log("tags", data?.tags )
  return (
    <MainLayout>
      {isLoading ? (
        <BlogDetailSkeleton />
      ) : isError ? (
        <BlogsErrorMessage message="Couldn't fetch the post detail" />
      ) : (
        <section className="container mx-auto max-w-6xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          
            {/* left section in large device and top section in small device*/}
    
          <article className="flex-1">
            <BreadCrumbs data={breadCrumbsData} />
            <img
              className="rounded-xl w-full object-cover object-center max-h-[460px] min-h-[300px]"
              src={
                data?.photo
                  ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo:
                   images.sampleBlogImage
              }
              alt={data?.title}
            />
             {data?.categories && data?.categories.map((category) => (
                <Link
                  to={`/blog?category=${category.name}`}
                  key={category._id}
                  className="text-primary text-sm font-roboto inline-block md:text-base"
                >
                  {category.name}
                </Link>
              ))}
            <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
              {data?.title}
            </h1>
               <div className="mt-4 flex gap-2">
            
            </div>
            <div className="w-full">
              {!isLoading && !isError && (
                <Editor content={data?.body} editable={false} />
              )}
            </div>
             <CommentsContainer
              comments={data?.comments}
              className="mt-10"
              logginedUserId={userState?.userInfo?._id}
              postSlug={slug}
            />
          </article>
          {/* right section in large device and bottom section in small device*/}
          <div>
              <RelatedPosts
                  blogs={limitedBlogs}
                  tagsData={data?.tags}
                  className="mt-8 lg:mt-0 lg:max-w-xs"
              ></RelatedPosts>
            <div className="mt-7">
              <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                Share on:
              </h2>
             
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default blogDetailsPage;