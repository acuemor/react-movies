import styled from "styled-components";

export const SearchBarContainerStyled = styled.div`
  position: relative;
  margin-bottom: 60px;
`;

export const SearchBarStyled = styled.input`
	padding: 0px 5px 0px 40px;
  width: calc(100% - 40px);
  height: 50px;
	border: 0;
	font-size: 16px;
`
export const SearchBarIconStyled = styled.svg`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 20px; 
  height: 20px;
  fill: white;
`;