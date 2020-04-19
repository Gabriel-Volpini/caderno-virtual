import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, AsyncStorage, Image, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FontAwesome5 } from "@expo/vector-icons"

import _ from 'lodash';

import Empty from './Empty';
import bookIcon from '../../images/book.png';

import { sListaMaterias } from "./styles";
import ModalEditar from './modal/ModalEditar';

const ListaMaterias: React.FC = ({ navigation }) => {

	const [materiasCadastradas, setMateriasCadastradas] = useState([]);
	const [materiaToEdit, setMateriaToEdit] = useState<any>(null)

	const onComponentMount = () => {

		const getAsyncStorage = async () => {
			const keys = await AsyncStorage.getAllKeys();
			const result = await AsyncStorage.multiGet(keys)
			setMateriasCadastradas(result.map(e => JSON.parse(e[1])).sort((a,b) => a.nome - b.nome))
		}
		getAsyncStorage()
	}
	useEffect(onComponentMount, [])
	
	return (
		<ScrollView>
			{
				materiasCadastradas.length
					? (
						materiasCadastradas.map((materia, index) => (
							<ListItem
								containerStyle={sListaMaterias.listContainer}
								key={index}
								leftIcon={<Image style={sListaMaterias.bookIcon} source={bookIcon} />}
								rightAvatar={
									<TouchableOpacity style={sListaMaterias.addButton} onPress={() => alert('1')}>
										<FontAwesome5 name="pencil-alt" size={18} color="#FFF" />
									</TouchableOpacity>
								}
								title={
									<TouchableOpacity
										onPress={() => navigation.navigate("Galeria", { materia: materia.nome })}
										style={sListaMaterias.listTitleWrapper}
									>
										<Text style={sListaMaterias.listTitle}>{materia.nome}</Text>
										<Text style={sListaMaterias.listTitleSubtitle}>{_.join(materia.horarios.map(e => e.dia), ", ")}</Text>
									</TouchableOpacity>
								}
								bottomDivider
							/>
						))
					)
					: < View style={sListaMaterias.container} >
						<Empty />
					</View>
			}
			{/* <ModalEditar item={materiaToEdit} seteItem={setMateriaToEdit}/> */}
		</ScrollView>
	);
}
export default ListaMaterias;