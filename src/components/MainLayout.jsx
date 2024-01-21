import Footer from "./Footer/Footer";
import Header from "./Header";


const MainLayout = ({children}) => {
    return (
        <div >
            <Header />
            <div className="lg:px-16 md:px-10 px-1">
                {children}
            </div>
             
            <Footer />
        </div>
    );
};

export default MainLayout;