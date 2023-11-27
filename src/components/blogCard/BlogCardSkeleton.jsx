
const BlogCardSkeleton = () => {
    return (
     <div
      className={`rounded-xl overflow-hidden animate-pulse`}
    >
      {/* image skeleton */}
      <div className="w-full aspect-video bg-slate-300" />
      <div className="p-5">
        {/* title skeleton */}
        <div className="w-56 h-2 mt-4 bg-slate-300 rounded-lg" />
        {/* caption skeleton */}
        <div className="w-24 h-2 mt-4 bg-slate-300 rounded-lg" />
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            {/* profile image skeleton */}
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-300" />
            <div className="flex flex-col">
              {/* user's name skeleton */}
              <div className="w-24 h-2 bg-slate-300 rounded-lg" />
              {/* verified status skeleton */}
              <div className="w-16 h-2 mt-2 bg-slate-300 rounded-lg" />
            </div>
          </div>
          {/* date skeleton */}
          <div className="w-10 h-2 mt-4 bg-slate-300 rounded-lg" />
        </div>
      </div>
    </div>
    );
};

export default BlogCardSkeleton;