import MainLayout from "../components/MainLayout";
import Blogs from "./Container/Blogs";
import Hero from "./Container/Hero";

const HomePage = () => {
    return (
       <MainLayout>
        <div className="w-11/12 mx-auto ">
             <Hero />
            <div className="flex gap-6">
                <Blogs  /> 
                <div className="flex-[1.5] bg-gray-400 ">ok</div>
            </div>
        </div>
           
           
       </MainLayout>
    );
};

export default HomePage;