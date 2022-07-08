import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: ${props => props.theme.colors.secondary};
    width: 100vw;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid gray;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 8px; 
    font-size: 25px;
    padding: 10px;

    `

export const HeaderRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 200px;
  display: flex;
  justify-content: center;
  padding-left: 3%;
  padding-right: 1%;
  
`;