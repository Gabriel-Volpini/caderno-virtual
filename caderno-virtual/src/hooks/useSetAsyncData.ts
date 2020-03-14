
import { AsyncStorage } from 'react-native';

const useSetAsyncData = async (key: string, value: string): Promise<void> => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        alert("Ocorreu um erro ao tentar salvar");
    }
};  

export default useSetAsyncData;