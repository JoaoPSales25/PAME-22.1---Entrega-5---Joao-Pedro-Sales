import styled from "styled-components";

export const OptionsContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 21px;
  font-weight: 600;
  flex-wrap: wrap;

  
`;

export const OptionsProdutos = styled.div`
  padding-right: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  :hover {
    color: ${(props) => props.theme.colors.textHover};
  }
`;

export const OptionsEncomendas = styled.div`
  padding-left: 20px;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.colors.textHover};
  }
`;

export const OptionsSair = styled.div`
  padding-left: 10px;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.colors.textHover};
  }
`;



export const Separador = styled.div`
  width: 1px;
  height: 20px;
  background-color: grey;
`;


export const OptionsCenter = styled.div`
   display: flex;
   width: 34%;
   align-items: center;
   justify-content: flex-start ;
   flex-wrap: wrap;


`;