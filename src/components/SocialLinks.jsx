// components/SocialLinks.jsx
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import SocialIcon from "./SocialIcon";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <SocialIcon
        href="https://github.com/Dashzevge"
        Icon={FaGithub}
        label="GitHub"
        className="text-blue-500 hover:text-blue-700"
      />
      <SocialIcon
        href="https://www.instagram.com/dashzevgebumchin/"
        Icon={FaInstagram}
        label="Instagram"
        className="text-pink-500 hover:text-pink-700"
      />
      <SocialIcon
        href="https://www.linkedin.com/in/dash-bumchin"
        Icon={FaLinkedin}
        label="LinkedIn"
        className="text-[#0A66C2] hover:text-blue-900"
      />
    </div>
  );
};

export default SocialLinks;
