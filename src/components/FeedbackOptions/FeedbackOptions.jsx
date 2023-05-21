import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'


export const FeedbackOptions = ({options, leaveFeedback}) => {
    return options.map( item => (
        <button
        key={item[0]}
        className={css.btn}
        onClick={() => {leaveFeedback(item[0]);
        }}>
            {item[0]}
        </button>
    ));
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    leaveFeedback: PropTypes.func,
};