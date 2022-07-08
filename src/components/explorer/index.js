import React from "react";
import { useState } from "react";
import ExplorerCard from "../explorerCard";
import { ExplorerContainer, SearchBar } from "./styles";

const Explorer = ({ productsList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <ExplorerContainer>
      <SearchBar
        placeholder="Busque algum produto"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></SearchBar>
      {productsList
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.nome.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((product) => {
          return <ExplorerCard key={product.id} product={product} />;
        })}
    </ExplorerContainer>
  );
};

export default Explorer;
