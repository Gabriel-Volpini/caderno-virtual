import React, { useState, useEffect, useRef, useReducer } from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { Constants } from 'expo-constants'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

import { sCamera } from "./styles"
import { State } from 'react-native-gesture-handler'

interface IProps {
	setCameraVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

const CameraControl: React.FC<IProps> = ({ setCameraVisible }) => {
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
	const [zoom, setZoom] = useState<number>(0);
	const [cameraRef, setCameraRef] = useState(null);
	const _pickImage = async () => {
		try {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: true,
				quality: 1,
			});
			if (!result.cancelled) {
				this.setState({ image: result.uri });
			}

			console.log(result);
		} catch (E) {
			console.log(E);
		}}

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={sCamera.content}>
			<Camera
				ref={ref => setCameraRef(ref)}
				zoom={zoom}
				ratio={'16:9'}
				style={{ flex: 1 }}
				flashMode={flash}
				type={type}
			>
				<View
					style={sCamera.cameraScreen}>
					<TouchableOpacity
						style={sCamera.flipButton}
						onPress={() => {
							setType(
								type === Camera.Constants.Type.back
									? Camera.Constants.Type.front
									: Camera.Constants.Type.back
							);
						}}>
						<FontAwesome
							name='random'
							size={30}
							color='#FFF'

						/>
					</TouchableOpacity>
					<View style={sCamera.zoomWrapper}>
						<TouchableOpacity
							onPress={() => setZoom((currentZoom) => {
								if (currentZoom === 1)
									return 1
								else return currentZoom + 0.1
							})}>
							<FontAwesome
								name='search-plus'
								size={35}
								color='#FFF'
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => setZoom((currentZoom) => {
								if (currentZoom === 0)
									return 0
								else return currentZoom - 0.1
							})}>
							<FontAwesome
								name='search-minus'
								size={35}
								color='#FFF'
							/>
						</TouchableOpacity>
					</View>
					<View style={sCamera.cameraBottomWrapper}>
						<TouchableOpacity style={sCamera.flashButton} onPress={() => {
							setFlash(
								flash === Camera.Constants.FlashMode.on
									? Camera.Constants.FlashMode.off
									: Camera.Constants.FlashMode.on
							);
						}}>
							<FontAwesome
								name='bolt'
								size={30}
								color={flash === Camera.Constants.FlashMode.on
									? '#FFF'
									: '#333'}
							/>
						</TouchableOpacity>
						<TouchableOpacity activeOpacity={0.7} onPress={async () => {
							if (cameraRef) {
								let photo = await cameraRef.takePictureAsync();
								console.log('photo', photo);
							}
						}}>
							<View
								style={sCamera.cameraButton}
							>
								<FontAwesome name='camera' size={30} color="#333" />
							</View>
						</TouchableOpacity>
						<TouchableOpacity activeOpacity={0.7} style={sCamera.Gallery} onPress={_pickImage}>
							<FontAwesome name='image' size={30} color='#FFF'/>
						</TouchableOpacity>
					</View>
				</View>
			</Camera>
		</View>
	)
}

export default CameraControl;

/*
Desisticar a camera
conseguir tirar foto
cortar foto (! procura lib pronta)
salvar foto na galeria E no app
*/