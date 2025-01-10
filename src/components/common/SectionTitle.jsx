import PropTypes from "prop-types";

const SectionTitle = ({ leftTitle, rightTitle, aos, aosDuration }) => {
  return (
    <h2
    className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl"
    data-aos={aos}
    data-aos-duration={aosDuration}
  >
    <span className="text-[#1b60a5] me-3">{leftTitle}</span>
    {rightTitle}
  </h2>
  
  );
};

SectionTitle.propTypes = {
  leftTitle: PropTypes.string.isRequired,
  rightTitle: PropTypes.string.isRequired,
  aos: PropTypes.string,
  aosDuration: PropTypes.string,
};

SectionTitle.defaultProps = {
  aos: "fade-right",
  aosDuration: "700",
};

export default SectionTitle;
