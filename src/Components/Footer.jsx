

const Footer = () => {
    return (
       <div>
        <div className="newstaller mb-4 space-y-2 p-4 text-center shadow-lg ">
        <h1 className="text-[36px]">Subscribe to our Newsletter</h1>
        <h2 className="text-[24px]">Get the latest updates and news right in your inbox!</h2>
        <div className="text-[24px]">
            <input className="rounded-lg" type="text" />
            <button className="bg-yellow-400 px-4 rounded-lg ml-2">Subscribe</button>
        </div>
        </div>
        <div className="bg-black  z-10 relative">
            <div className="flex md:justify-center ">
                <img className="mt-12" src="../assets/logo-footer.png" alt="" />
            </div>
            <div className="flex align-middle  flex-col lg:flex-row justify-between max-w-[1100px] mx-auto ">
       
       <nav className="grid grid-cols-1">
         <h6 className="footer-title text-[#FFFFFF]">About Us</h6>
        <p className="text-gray-400">We are a passionate team dedicated to providing <br></br> the best services to our customers.</p>
       </nav>
       <nav className="grid grid-cols-1">
         <h6 className="footer-title text-[#FFFFFF]">Company</h6>
         <a className="link link-hover text-gray-400 ">About us</a>
         <a className="link link-hover text-gray-400 ">Contact</a>
         <a className="link link-hover text-gray-400 ">Jobs</a>
         <a className="link link-hover text-gray-400 ">Press kit</a>
       </nav>
      
       <form className="grid grid-cols-1">
         <h6 className="footer-title text-[#fff]">Subscribe</h6>
         <fieldset className="form-control w-80">
           <label className="label">
             <span className="label-text text-gray-500">Enter your email address</span>
           </label>
           <div className="join">
             <input
               type="text"
               placeholder="username@site.com"
               className="input input-bordered join-item" />
             <button className="btn btn-primary bg-yellow-400 px-4 rounded-lg ml-2">Subscribe</button>
           </div>
         </fieldset>
       </form>
     
             </div>
        </div>
       </div>
      
       
    );
};

export default Footer;