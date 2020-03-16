import React from 'react';
import { ScrollView, Text } from 'react-native';
import { ListItem, Overlay } from 'react-native-elements';

import { sOverlayVizualizar } from "./styles";

interface IProps {
  setDiaSelecionado: React.Dispatch<React.SetStateAction<{ id: string, name: string, subtitle: string } | null>>,
  diaSelecionado: { id: string, name: string, subtitle: string }
}

const OverlayEditar: React.FC<IProps> = ({ diaSelecionado, setDiaSelecionado }) => {

  return (
    <Overlay
      isVisible={diaSelecionado !== null}
      windowBackgroundColor="rgba(0, 0, 0, .5)"
      overlayBackgroundColor="white"
      width="80%"
      height="90%"
      overlayStyle={sOverlayVizualizar.overlay}
      onBackdropPress={() => setDiaSelecionado(null)}
    >
      {
        diaSelecionado && <>
          <Text style={sOverlayVizualizar.diaTitle}>{diaSelecionado.name}</Text>
          <ScrollView style={sOverlayVizualizar.scrollView}>

            <Text>Hello from Overlay!</Text>
            <Text>Hello from Overlay!</Text>
            <Text>Hello from Overlay!</Text>
            <Text>Hello from Overlay!</Text>
          </ScrollView>
        </>
      }
    </Overlay>
  )
}

export default OverlayEditar;