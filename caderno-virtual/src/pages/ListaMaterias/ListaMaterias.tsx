import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, AsyncStorage, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FontAwesome5 } from "@expo/vector-icons"

import Empty from './Empty';
import calendarIcon from '../../images/calendar.png';

import { sListaMaterias } from "./styles";

const ListaMaterias: React.FC = ({ navigation }) => {

	const [materiasCadastradas, setMateriasCadastradas] = useState([]);

	const onComponentMount = () => {

		const getAsyncStorage = async () => {
			const keys = await AsyncStorage.getAllKeys();
			const result = await AsyncStorage.multiGet(keys)
			setMateriasCadastradas(result.map(e => JSON.parse(e[1])))
		}
		getAsyncStorage()
	}
	useEffect(onComponentMount, [])
	console.log(materiasCadastradas)
	return (
		materiasCadastradas.length
			? (<View/>
				// materiasCadastradas.map((materia, index) => (
				// 	<ListItem
				// 		containerStyle={sListaMaterias.listContainer}
				// 		key={index}
				// 		leftIcon={<Image style={sListaMaterias.calendarIcon} source={calendarIcon} />}
				// 		rightAvatar={
				// 			<TouchableOpacity style={sListaMaterias.addButton} onPress={() => alert('1')}>
				// 				<FontAwesome5 name="pencil-alt" size={18} color="#FFF" />
				// 			</TouchableOpacity>
				// 		}
				// 		title={
				// 			<TouchableOpacity
				// 				onPress={() => navigation.navigate("Galeria", { dia })}
				// 				style={sListaMaterias.listTitleWrapper}
				// 			>
				// 				<Text style={sListaMaterias.listTitle}>{materia.dia}</Text>
				// 				<Text style={sListaMaterias.listTitleSubtitle}>{dia}</Text>
				// 			</TouchableOpacity>
				// 		}
				// 		bottomDivider
				// 	/>
				// ))
			)
			: < View style={sListaMaterias.container} >
				<Empty />
			</View>
	);
}
export default ListaMaterias;