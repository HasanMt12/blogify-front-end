import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { images, stables } from "../../../../../constants";
import { deletePost, getAllPosts } from "../../../../../services/index/blogPosts.js";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Input } from "@nextui-org/react";

let isFirstRun = true;

const ManagePosts = () => {
  const queryClient = useQueryClient();
  const userState = useSelector((state) => state.user);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: postsData,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryFn: () => getAllPosts(searchKeyword, currentPage),
    queryKey: ["posts"],
  });

  const { mutate: mutateDeletePost, isLoading: isLoadingDeletePost } =
    useMutation({
      mutationFn: ({ slug, token }) => {
        return deletePost({
          slug,
          token,
        });
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(["posts"]);
        toast.success("Post is deleted");
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });

  useEffect(() => {
    if (isFirstRun) {
      isFirstRun = false;
      return;
    }
    refetch();
  }, [refetch, currentPage]);

  const searchKeywordHandler = (e) => {
    const { value } = e.target;
    setSearchKeyword(value);
  };

  const submitSearchKeywordHandler = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    refetch();
  };

  const deletePostHandler = ({ slug, token }) => {
    mutateDeletePost({ slug, token });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Mange Posts</h1>

      <div className="w-full px-4 mx-auto">
        <div className="py-8">
          <div className="flex flex-row justify-between items-center w-full mb-1 sm:mb-0">
            <h2 className="text-2xl sm:block hidden leading-tight">posts</h2>
            <div className="text-end">
              <form
                onSubmit={submitSearchKeywordHandler}
              >
                <div className="flex  justify-center items-center gap-2">
                    <Input
                    key="inside"
                    type="text"
                    label="title"
                    
                    labelPlacement="outside"
                    onChange={searchKeywordHandler}
                    value={searchKeyword}
                    description="search for title"
                    />
                     <Button  type="submit" color="primary" variant="flat">
                        Flat
                    </Button>  
                 
                </div>
               
              </form>
            </div>
          </div>
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
         <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Created at
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Tags
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading || isFetching ? (
                    <tr>
                      <td colSpan={5} className="text-center py-10 w-full">
                        Loading...
                      </td>
                    </tr>
                  ) : postsData?.data?.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center py-10 w-full">
                        No posts found
                      </td>
                    </tr>
                  ) : (
                    postsData?.data.map((post) => (
                      <tr key={post._id}>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <a href="/" className="relative block">
                                <img
                                  src={
                                    post?.photo
                                      ? stables.UPLOAD_FOLDER_BASE_URL +
                                        post?.photo
                                      : images.sampleBlogImage
                                  }
                                  alt={post.title}
                                  className="mx-auto object-cover rounded-lg w-10 aspect-square"
                                />
                              </a>
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {post.title}
                              </p>
                            </div>
                          </div>
                        </td>
                      
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {new Date(post.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex gap-x-2">
                            {post.tags.length > 0
                              ? post.tags.map((tag, index) => (
                                  <p key={tag._id}> 
                                    {tag}
                                    {post.tags.length - 1 !== index && ","}
                                  </p>
                                ))
                              : "No tags"}
                          </div>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
                          <button
                            disabled={isLoadingDeletePost}
                            type="button"
                            className="text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed"
                            onClick={() => {
                              deletePostHandler({
                                slug: post?.slug,
                                token: userState.userInfo.token,
                              });
                            }}
                          >
                            Delete
                          </button>
                          <Link
                            to={`/admin/posts/manage/edit/${post?.slug}`}
                            className="text-green-600 hover:text-green-900"
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>  
              {/* {!isLoading && (
                <Pagination
                  onPageChange={(page) => setCurrentPage(page)}
                  currentPage={currentPage}
                  totalPageCount={JSON.parse(
                    postsData?.headers?.["x-totalpagecount"]
                  )}
                />
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePosts;