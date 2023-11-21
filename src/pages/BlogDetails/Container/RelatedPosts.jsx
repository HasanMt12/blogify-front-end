import { Link } from "react-router-dom";
import { images } from "../../../constants";

const RelatedPosts = () => {
  return (
    <div
      className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 mt-8 lg:mt-0 lg:max-w-xs`}
    >
      <h2 className="font-roboto font-medium text-dark-hard md:text-xl">
       header
      </h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
       
          <div
            className="flex space-x-3 flex-nowrap items-center"
          >
            <img
              className="aspect-square object-cover rounded-lg w-1/5"
              src={images.HeroPhoto}
              alt=""
            />
            <div className="text-sm font-roboto text-dark-hard font-medium">
              <h3 className="text-sm font-roboto text-dark-hard font-medium md:text-base lg:text-lg">
                      realated post title
              </h3>
              <span className="text-xs opacity-60">
                 20 / 2
              </span>
            </div>
          </div>
      </div>
      <h2 className="font-roboto font-medium text-dark-hard mt-8 md:text-xl">
        Tags
      </h2>
     
        <p className="text-slate-500 text-xs mt-2">
          There is not tags for this post
        </p>
     
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