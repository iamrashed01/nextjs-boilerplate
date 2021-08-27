import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <>
      {children}
    </>
  );
}

Layout.defaultProps = {};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};
