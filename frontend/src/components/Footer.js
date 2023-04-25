import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import Logo from './assets/PodClub__2_- white.png';

function Footer(){
    return (
        <div className="main-footer" style={{ backgroundColor: "black" }}>
             <div className="container main-footer-container">
                <center>
                    <div className="logo-and-icons">
                        <img src={Logo} alt="logo" style={{width: "120px"}} />
                        <div className="icon-links">
                            <a href="https://www.facebook.com/"><FaFacebook size={30} color="#FFFFFF" style={{ width: "40px", marginRight: "10px", marginBottom: "10px" }}/></a>
                            <a href="https://www.instagram.com/"><FaInstagram size={30} color="#FFFFFF" style={{ width: "40px", marginRight: "10px", marginBottom: "10px" }}/></a>
                            <a href="https://www.linkedin.com/"><FaPinterest size={30} color="#FFFFFF" style={{ width: "40px", marginRight: "10px", marginBottom: "10px"}}/></a>
                            <a href="https://twitter.com/"><FaTwitter size={30} color="#FFFFFF" style={{ width: "40px", marginRight: "10px", marginBottom: "10px" }}/></a>
                        </div>
                    </div>
                </center>
             </div>
        </div>
    );
}



  

// function Footer() {
//   return (
//     <footer className="bg-gray-900">
//       <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
//         <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
//           <div className="px-5 py-2">
//             <a href="https://web.facebook.com/?_rdc=1&_rdr" className="text-gray-400 hover:text-gray-300" aria-label="Facebook">
//               <span className="sr-only"></span>
//               <FaFacebook className="h-6 w-6" />
//             </a>
//           </div>
//           <div className="px-5 py-2">
//             <a href="https://twitter.com/i/flow/login" className="text-gray-400 hover:text-gray-300" aria-label="Twitter">
//               <span className="sr-only"></span>
//               <FaTwitter className="h-6 w-6" />
//             </a>
//           </div>
//           <div className="px-5 py-2">
//             <a href="https://www.instagram.com/" className="text-gray-400 hover:text-gray-300" aria-label="Instagram">
//               <span className="sr-only"></span>
//               <FaInstagram className="h-6 w-6" />
//             </a>
//           </div>
//           <div className="px-5 py-2">
//             <a href="https://www.pinterest.com/" className="text-gray-400 hover:text-gray-300" aria-label="Pinterest">
//               <span className="sr-only"></span>
//               <FaPinterest className="h-6 w-6" />
//             </a>
//           </div>
//         </nav>
//       </div>
//     </footer>
//   );
// }


export default Footer;