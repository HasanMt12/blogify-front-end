import { Button, Input } from "@nextui-org/react";
import { FaArrowRight, FaSquareXTwitter  } from "react-icons/fa6";
import { FaGithub , FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
    return (

             <footer className="border-[1px] font-opensans shadow-sm rounded-xl lg:my-4 md:my-2 my-1 py-4 bg-gray-50">
    <div className="container">

      <div className="card footer">

        <div className="section footer-top border-b-[1px] border-gray-500 pb-6">

          <div className="footer-brand">

            {/* <a href="#" className="logo">
              <img src="./assets/images/logo.svg" width="119" height="37" loading="lazy" alt="Wren logo"/>
            </a> */}

            <p className="footer-text">
              Share Your thought and Ideas
            </p>

            <p className="footer-list-title">Address</p>

            <address className="footer-text address">
              Azimpur <br/>
              Dhaka
            </address>

          </div>

          <div className="footer-list">

            <p className="footer-list-title">Categories</p>

            <ul>

              <li>
                <a href="#" className="footer-link hover-2">Action</a>
              </li>

              <li>
                <a href="#" className="footer-link hover-2">Business</a>
              </li>

              <li>
                <a href="#" className="footer-link hover-2">Adventure</a>
              </li>

              <li>
                <a href="#" className="footer-link hover-2">Canada</a>
              </li>

              <li>
                <a href="#" className="footer-link hover-2">America</a>
              </li>

              <li>
                <a href="#" className="footer-link hover-2">Curiosity</a>
              </li>

              <li>
                <a href="#" className="footer-link hover-2">Animal</a>
              </li>


            </ul>

          </div>

          <div className="footer-list">

            <p className="footer-list-title">Newsletter</p>

            <p className="footer-text">
              Sign up to be first to receive the latest stories inspiring us, case studies, and industry news.
            </p>

            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
       
            <Input
              type="email"
              label="Email"
              labelPlacement="outside"
       
            />
         
        </div>
        
            <Button className="border-[#0BD1D1] mt-2" color="#0BD1D1" variant="bordered" endContent={<FaArrowRight />}>
               subscribe
              </Button>
          </div>

        </div>

        <div className="footer-bottom pt-5">

          <p className="copyright">
            &copy; Developed by <a href="#" className="copyright-link text-[#0BD1D1]">Hasan Mt</a>
          </p>

          <div className="flex justify-center items-center gap-6">
             
              <FaGithub className="cursor-pointer hover:text-[#0BD1D1]"/>
              <FaLinkedinIn className="cursor-pointer hover:text-[#0BD1D1]"/>
              <FaSquareXTwitter  className="cursor-pointer hover:text-[#0BD1D1]"/>
          </div>

        </div>

      </div>

    </div>
  </footer>
       
    );
};

export default Footer;