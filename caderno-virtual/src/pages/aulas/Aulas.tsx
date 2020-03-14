import React, { useState } from 'react';
import { Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import OverlayAulas from './OverlayAulas';

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
        {fakeData.map((dia, index) => (
          <ListItem
            style={sAulas.aulaScreen}
            key={index}
            leftIcon={<Image style={sAulas.calendarIcon} source={calendarIcon} />}
            title={dia.name}
            subtitle={dia.subtitle}
            onPress={() => setDiaSelecionado(dia)}
            bottomDivider
          />
        ))}
        <OverlayAulas
          diaSelecionado={diaSelecionado}
          setDiaSelecionado={setDiaSelecionado}
        />
    </>
  );
}
export default Materias;