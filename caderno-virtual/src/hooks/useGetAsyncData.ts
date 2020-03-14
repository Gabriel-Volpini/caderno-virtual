import { AsyncStorage } from 'react-native';

const useGetAsyncData = async (key: string): Promise<string | null> => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return (value);
        }
    } catch (error) {
        alert("ocorreu um erro ao tentar obter os arquivos");
        return null;
    }
};

export default useGetAsyncData;