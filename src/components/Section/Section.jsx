import { PropTypes } from 'prop-types';
import  { Title } from './Section.styled';

export default function Section({ title, children }) {
    return (
        <>
         <Title>{title}</Title>
         <div>{children}</div>
        </>
    )
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
}