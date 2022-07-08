import styled from "styled-components";



export const CardContainer = styled.div`
  padding: 20px;
  height: fit-content;
  
  width: 220px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;
  overflow-wrap: break-word;
  margin: 20px 20px;
  
  
`;

export const TextContainer = styled.div`
  overflow: hidden;
  overflow-wrap: break-word;
  max-height: 200px;
`;

export const Image = styled.img`
  margin-bottom: 5px;
  object-fit: cover;
  width: 100%;
`;

export const Nome = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`; 

export const Categoria = styled.div`
  margin-bottom: 5px;
`;

export const Marca = styled.div`
  margin-bottom: 5px;
`; 

export const Receita = styled.div`
  margin-bottom: 5px;
`;

export const Preco = styled.div`
  margin-bottom: 5px;
  color: ${props => props.theme.colors.price};
  font-weight: bold;
  font-size: 20px;
`;

export const Disponibilidade = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  color: ${props => props.cor};
`;

export const ButtonsContainer = styled.div`
  width: 90%;
  height: 50px;
  margin-bottom: 10px ;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddButton = styled.button`
  width: 30%;
  height: 50px;
  border-radius: 8px;
  background-color: transparent ;
  border: none;
  cursor: pointer;
  font-size: 30px;
  :hover {
    border: 1px solid rgba(0,0,0,0.3);
  }
`;

export const NumberInput = styled.div`
  width: 25%;
  height: 40px;
  border-radius: 8px;
  font-size: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubtractButton = styled.button`
  width: 30%;
  height: 50px;
  border-radius: 8px;
  background-color:transparent ;
  border: none;
  cursor: pointer;
  font-size: 30px;
  :hover {
    border: 1px solid rgba(0,0,0,0.3);
  }
  
`;

export const SumButton = styled.button`
  width: 90%;
  height: 40px;
  background-color:transparent ;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  :hover {
    border: 1px solid rgba(0,0,0,0.3);
  }
  font-size: 15px;
  font-weight: bold;
`;