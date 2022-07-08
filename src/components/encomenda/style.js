import styled from "styled-components";

export const EncomendaContainer = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  flex-wrap: wrap;
  margin-bottom: 20px;
  margin-top: 20px;
  
  
`;

export const InputCheckBoxContainer = styled.div`
 display: flex;
 align-items: center;
 margin-right: 10px;
`;

export const InputCheckbox  = styled.input`
  width: 20px;
  height: 20px;
`;

export const EncomendaProduto = styled.div`
  cursor: pointer;
  margin-right: 30px;
`;
export const EncomendaQuantidade   = styled.div`
cursor: pointer;
  color: ${props => props.theme.colors.price}
`;