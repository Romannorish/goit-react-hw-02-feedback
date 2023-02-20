import { PropTypes } from 'prop-types';
import  { BoxButton,  ButtonItem,  Button } from './feedbackOptions.styled';



export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <BoxButton>
            {options.map((option, index) => (
                <ButtonItem key={`option ${index}`}>
                   <Button name='good' onClick={() => onLeaveFeedback(option)}>{option}</Button>
                </ButtonItem>
            ))}
        </BoxButton>
    )
}



FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
} 