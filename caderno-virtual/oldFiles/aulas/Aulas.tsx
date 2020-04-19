import React, { useState } from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import OverlayEditar from './OverlayEditar';
import { MaterialIcons } from "@expo/vector-icons"

import { sAulas } from './styles'
import calendarIcon from '../../images/calendar.png'

const fakeData = [
  {
    id:"seg",
    name: 'Segunda-Feira',
    subtitle: '10 materias cadastradas'
  },
  {
    id:"ter",
    name: 'Terca-Feira',
    subtitle: '10 materias cadastradas'
  },
  {
    id:"qua",
    name: 'Quarta-Feira',
    subtitle: '10 materias cadastradas'
  },
  {
    id:"qui",
    name: 'Quinta-Feira',
    subtitle: '10 materias cadastradas'
  },
  {
    id:"sex",
    name: 'Sexta-Feira',
    subtitle: '10 materias cadastradas'
  },
  {
    id:"sab",
    name: 'Sabado',
    subtitle: '10 materias cadastradas'
  },
  {
    id:"dom",
    name: 'Domingo',
    subtitle: '10 materias cadastradas'
  },
]

const Materias: React.FC = () => {

  const [diaSelecionado, setDiaSelecionado] = useState<{id: string, name:string, subtitle:string} | null>(null);
  return (
    <>
        {
        fakeData.map((dia, index) => (
          <ListItem
            style={sAulas.listItem}
            containerStyle={sAulas.listContainer}
            key={index}
            leftIcon={<Image style={sAulas.calendarIcon} source={calendarIcon} />}
            rightAvatar={
              <TouchableOpacity style={sAulas.addButton} onPress={() => alert()}>
                <MaterialIcons name="add" size={25} color="#FFF" />
              </TouchableOpacity>
            }
            title={
              <TouchableOpacity  
                onPress={() => setDiaSelecionado(dia)}
                style={sAulas.listTitleWrapper}
              >
                <Text style={sAulas.listTitle}>{dia.name}</Text>
                <Text style={sAulas.listTitleSubtitle}>{dia.subtitle}</Text>
              </TouchableOpacity>
            }
            bottomDivider
          />
        ))}
      <OverlayEditar
          diaSelecionado={diaSelecionado}
          setDiaSelecionado={setDiaSelecionado}
        />
    </>
  );
}
export default Materias;


<ListItem
  style={sListaMaterias.listItem}
  containerStyle={sListaMaterias.listContainer}
  key={index}
  leftIcon={<Image style={sListaMaterias.calendarIcon} source={calendarIcon} />}
  rightAvatar={
    <TouchableOpacity style={sListaMaterias.addButton} onPress={() => alert('1')}>
      {/* <MaterialIcons name="add" size={25} color="#FFF" /> */}
    </TouchableOpacity>
  }
  title={
    <TouchableOpacity
      style={sListaMaterias.listTitleWrapper}
    >
      <Text style={sListaMaterias.listTitle}>{dia}</Text>
      <Text style={sListaMaterias.listTitleSubtitle}>{dia}</Text>
    </TouchableOpacity>
  }
  bottomDivider
/>