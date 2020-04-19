import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';

import { sCamera } from "./styles"

interface IProps {
	setCameraVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

const CameraControl: React.FC<IProps> = ({ setCameraVisible }) => {
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [zoom, setZoom] = useState<number>(0)
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
				zoom={zoom}
				ratio={'4:3'}
				style={{ flex: 1 }}
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
						<Text style={sCamera.flipText}> Flip </Text>
					</TouchableOpacity>

					<View style={sCamera.zoomWrapper}>
						<TouchableOpacity
							style={sCamera.zoomIn}
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
							style={sCamera.zoomOut}
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
	manipular zoom
salvar foto na galeria E no app
*/