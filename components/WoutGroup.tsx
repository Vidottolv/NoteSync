import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

interface Props{
    action: () => void;
}

const Height = Dimensions.get('window').height;

export default function WithouGroup({action}:Props) {
    const [loaded] = useFonts({
        NerkoOne: require('../assets/fonts/NerkoOne-Regular.ttf'),
    });
    
    useEffect(() => {
      if (loaded) {
        SplashScreen.hideAsync();
      }
    }, [loaded]);
    
    if (!loaded) {
        return null;
    }
    return (
   <View style={styles.container}>
        <Text style={styles.text}>Oops, parece que você ainda não participa de nenhum grupo. Vamos mudar isso?</Text>
        <TouchableOpacity 
            style={styles.button}
            onPress={action}>
            <Text style={styles.textButton}>Crie agora!</Text>
        </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: Height / 4,
        width:'80%',
        justifyContent:'center',
        alignSelf:'center',
    },
    text: {
        color: Colors.light.background,
        fontSize:24,
        fontFamily:'NerkoOne',
        textAlign:'center'
    },
    button: {
        alignSelf:'center',
        borderRadius:16,
        borderWidth:1,
        borderColor: Colors.light.background,
        height:'25%',
        justifyContent:'center',
        marginTop:'3%',
        width:'45%',
    },
    textButton: {
        color: Colors.light.background,
        fontSize:18,
        fontFamily:'NerkoOne',
        textAlign:'center'
    }
})