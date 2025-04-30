import { FaInstagram } from "react-icons/fa";

const InstagramLink = () => {
  return (
    <div>
      <a
        href="https://www.instagram.com/dashzevgebumchin/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram  className="text-pink-500 w-5 h-5 hover:text-pink-700 transition-colors duration-300"/>
      </a>
    </div>
  );
};

export default InstagramLink;
