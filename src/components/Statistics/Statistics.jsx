import { PropTypes } from 'prop-types';
import  { List, Item } from './Statistics.styled';

export  default function Statistics({ good = 0, neutral = 0, bad = 0, total = 0, positivePercentage = 0 }) {
    return (
        <List>
           <Item>Good: {good}</Item>
           <Item>Neutral: {neutral}</Item>
           <Item>Bad:  {bad}</Item>
           <Item>Total: {total}</Item>
           <Item>Positive feedback: {positivePercentage}%</Item>
        </List>
    );
}


Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number, 
    total: PropTypes.number, 
    positivePercentage: PropTypes.number,
};