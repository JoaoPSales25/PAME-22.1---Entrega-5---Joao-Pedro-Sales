import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  
`;

export const ImgCover = styled.img`
  height: 1200px;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

export const LoginBox = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  width: 50%;
  height: 80%;
  
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px;
  flex-direction: column;
  border: 1px solid transparent;
  box-shadow: rgba(149, 157, 165, 0.5) 1px 5px 25px; 
  font-weight: 500;

`;

export const UserText = styled.div`
  font-size: 25px;
  margin-bottom: 2%;
  color: ${props => props.theme.colors.text};

`;

export const UserInput = styled.input`
  width: 65%;
  height: 15%;
  margin-bottom: 5%;
  font-size: 20px;
  padding: 0 10px;
`;

export const PasswordText = styled.div`
  font-size: 25px;
  margin-bottom: 2%;
  color: ${props => props.theme.colors.text};
`;

export const PasswordInput = styled.input`
  width: 65%;
  height: 15%;
  margin-bottom: 5%;
  font-size: 20px;
  padding: 0 10px;

`;  

export const LoginButton = styled.button`
  width: 68%;
  height: 20%;
  padding: 0 10px;
  font-size: 25px;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 10px;
  cursor: pointer;  
`;  

