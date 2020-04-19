import React, { useEffect, useState, createContext } from 'react';
import { StatusBar } from "react-native"
import Routes from './src/Routes'
import ModalCadastrar from './src/components/cadastrarMateria/ModalCadastrar'

//@ts-ignore
export const AppContext = createContext(null);

export interface IAppContext{
  modaCadastrarVisible: boolean,
  setModalCadastrarVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function App() {

  const [modaCadastrarVisible, setModalCadastrarVisible] = useState<boolean>(false);

  const contextValues = {
    modaCadastrarVisible,
    setModalCadastrarVisible
  }

  return (
    <AppContext.Provider value={contextValues}>
      <StatusBar barStyle={"light-content"} backgroundColor="#7D40E7"/>
      <ModalCadastrar/> 
      <Routes/> 
    </AppContext.Provider>
  );
}
