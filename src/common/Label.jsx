import styled from 'styled-components';

const LabelStyle = styled.span`
font-weight: 500;
min-width: ${(props) => props.minWidth || '80px'};
/* min-width: 80px; */
`;

const Label = ({children,minWidth}) => <LabelStyle  mw={minWidth}>{children}</LabelStyle>

export default Label