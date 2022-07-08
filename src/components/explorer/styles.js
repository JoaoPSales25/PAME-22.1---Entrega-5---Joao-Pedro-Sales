import styled from "styled-components";

export const ExplorerContainer = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  max-width: 80%;
  height: 100%;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 80px;
  border-radius: 20px;
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  border: 1px solid rgba(25, 25, 25, 0.1);
  font-size: 17px;
  padding: 0 15px;
  outline: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: ${props => props.theme.colors.buttons}
  
`;
