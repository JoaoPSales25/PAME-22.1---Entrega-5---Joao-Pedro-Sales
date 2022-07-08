import styled from "styled-components";

export const ToDoContainer = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  

`;

export const ToDoButtons =  styled.div`
    margin-top: 20px;
    margin-bottom: 50px;
    display: flex;
    width: 60%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

`;

export const ToDoAdd = styled.button`
  cursor: pointer;
  height: 40px;
  border: 1px solid rgba(60,60,60,0.2);
  padding: 0 10px;
  border-radius: 4px;
  font-weight: bold;
  background-color: ${props => props.theme.colors.buttons};
`;

export const ToDoComplete = styled.button`
  cursor: pointer;
  height: 40px;
  border: 1px solid rgba(60,60,60,0.2);
  padding: 0 10px;
  border-radius: 4px;
  font-weight: bold;
  background-color: ${props => props.theme.colors.buttons};
`;

export const ToDoInputProduct = styled.input`
  font-size: 18px;
  width: 300px;
  height: 40px;
  border: 1px solid rgba(60,60,60,0.2);
  padding: 0 10px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.buttons};
`;

export const ToDoInputQuantity = styled.input`
font-size: 18px;
  width: 300px;
  height: 40px;
  border: 1px solid rgba(60,60,60,0.2);
  padding: 0 10px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.buttons};
`;