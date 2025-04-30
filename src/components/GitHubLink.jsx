import { FaGithub } from "react-icons/fa";

const GitHubLink = () => {
  return (
    <div>
      <a
        href="https://github.com/Dashzevge"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="text-blue-500 w-5 h-5 hover:text-blue-700 transition-colors duration-300" />
      </a>
    </div>
  );
};

export default GitHubLink;