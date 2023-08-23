


const Footer = () => {

      return (
        <footer className="bg-gray-800 py-6 text-white">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Wilbert Josh Alfornon. All rights reserved.
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white mx-2"
            >
              Terms of Service
            </a>
            <span className="text-gray-400"> | </span>
            <a
              href="#"
              className="text-gray-400 hover:text-white mx-2"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
  
      );
};

export default Footer;