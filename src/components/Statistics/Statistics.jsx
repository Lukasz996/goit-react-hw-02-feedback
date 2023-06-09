import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ options, total, positivePercentage }) => {
  const statList = options.map(item => (
    <p key={item[0]} className={css.statisticsItem}>
      {`${item[0]}: ${item[1]}`}
    </p>
  ));

  return (
    <>
      {statList}
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};