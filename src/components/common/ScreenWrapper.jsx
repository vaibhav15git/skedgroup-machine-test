
const ScreenWrapper = ({ children }) => {
  const wrapperStyle = {
    width: '90%',
    margin: '0 auto', // Centers the element horizontally
    padding: '20px',  // Optional: Adds padding inside the wrapper
    boxSizing: 'border-box', // Ensures padding doesn't affect width calculation
    maxWidth: '1600px', // Optional: Limits the maximum width of the wrapper
  };

  return (
    <div style={wrapperStyle}>
      {children}
    </div>
  );
};

export default ScreenWrapper;
