import MainLayout from "../components/MainLayout";
import Blogs from "./Container/Blogs";
import Hero from "./Container/Hero";

const HomePage = () => {
    return (
       <MainLayout>
            <Hero />
            <div className="flex gap-12">
                <Blogs /> 
                <div className="flex-[1] bg-gray-400"></div>
            </div>
           
       </MainLayout>
    );
};

export default HomePage;