import Breadcrumbs from "../../components/Breadcrumbs";
import MainLayout from "../../components/MainLayout";
import SocialShareButtons from "../../components/SocialMediaButton";
import { images } from "../../constants";
import RelatedPosts from "./Container/RelatedPosts";

const breadCrumbsData = [
        { name: "Home", link: "/" },
        { name: "Blog", link: "/blog" },
        { name: "Article title", link: `/blog/1` },
      ];

const BlogDetailsPage = () => {
     
    return (
           <MainLayout>
   
            <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
                 <article className="flex-1">
            <Breadcrumbs data={breadCrumbsData} />
            <img
              className="rounded-xl w-full"
              src={images.HeroPhoto}
              alt="ok"
            />
            <div className="mt-4 flex gap-2">
              
                <h2 className="text-primary text-sm font-roboto inline-block md:text-base"
                >
                  blog title
                </h2>
            </div>
            <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
             test 
            </h1>
            <div className="w-full">
             error
            </div>
            {/* <CommentsContainer
              comments={data?.comments}
              className="mt-10"
              logginedUserId={userState?.userInfo?._id}
              postSlug={slug}
            /> */}
          </article>
          <div>
            <RelatedPosts
              header="Latest Article"
             
              className="mt-8 lg:mt-0 lg:max-w-xs"
            />
            <div className="mt-7">
              <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                Share on:
              </h2>
              <SocialShareButtons
                url={encodeURI(window.location.href)}
                title={encodeURIComponent("data?.title")}
              />
            </div>
          </div>
            </section>

         </MainLayout>
    );
};

export default BlogDetailsPage;