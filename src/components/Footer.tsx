const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">amiGos Kitchen</h3>
            <p className="text-gray-300">Savor the taste of our traditional cuisine with a modern twist. Visit us today!</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white hover:text-[#F39C12]"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-[#F39C12]"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-[#F39C12]"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Hours</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Monday - Friday: 11am - 11pm</li>
              <li>Saturday - Sunday: 10am - 12am</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Contact</h3>
            <ul className="text-gray-300 space-y-2">
              <li><i className="fas fa-map-marker-alt mr-2"></i> Aurangabad, Maharashtra</li>
              <li><i className="fas fa-phone mr-2"></i> +91 123 456 7890</li>
              <li><i className="fas fa-envelope mr-2"></i> info@amigoskitchen.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} amiGos Kitchen. All rights reserved.</p>
          <p className="mt-2 text-sm">GST Note: 5% GST applicable on menu prices</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
