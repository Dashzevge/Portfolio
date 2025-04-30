const SocialIcon = ({ href, Icon, label, className }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon className={`w-5 h-5 transition-colors duration-300 ${className}`} />
      </a>
    );
  };
  
export default SocialIcon;
  