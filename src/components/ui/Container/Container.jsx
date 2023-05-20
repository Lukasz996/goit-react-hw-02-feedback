import PropTypes from 'prop-types';
import css from '../Container/Container.module.css';

export const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};