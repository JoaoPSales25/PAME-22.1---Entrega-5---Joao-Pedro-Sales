import React from "react";
import TabOptions from "../tabOptions";
import { HeaderRight, HeaderContainer } from "./styles";

const Header = ({ activeTab, setActiveTab, setActiveScreen, activeScreen}) => {
  return (
    <HeaderContainer>
      
      <HeaderRight>
        <TabOptions setActiveTab={setActiveTab} activeTab={activeTab} setActiveScreen = {setActiveScreen} activeScreen= {activeScreen} />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
