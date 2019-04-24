import styled from "styled-components";

const HiddenText = styled.span`
	position: absolute;
	height: 1px;
	width: 1px;
	overflow: hidden;
	clip: rect(1px, 1px, 1px, 1px);
`;

export default HiddenText;