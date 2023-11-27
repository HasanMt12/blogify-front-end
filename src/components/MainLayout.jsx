import Footer from "./Footer";
import Header from "./Header";


const MainLayout = ({children}) => {
    return (
        <div className="lg:px-20 md:px-10 px-2">
            <Header />
              {children}
            <Footer />
        </div>
    );
};

export default MainLayout;