import { View, Text, StyleSheet, Dimensions, TouchableOpacity, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';
import { SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

interface Props {
  action: () => void;
}

const Height = Dimensions.get('window').height;

export default function WithoutGroup({ action }: Props) {
  const [loaded] = useFonts({
    NerkoOne: require('../assets/fonts/NerkoOne-Regular.ttf'),
  });

  const colorScheme = useColorScheme(); // Obtém o esquema de cores (light ou dark)
  
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const themeStyles = {
    text: {
      color: colorScheme === 'dark' ? DarkTheme.colors.text : DefaultTheme.colors.text,
    },
    button: {
      borderColor: colorScheme === 'dark' ? Colors.light.background : Colors.dark.background,
    },
    textButton: {
      color: colorScheme === 'dark' ? Colors.light.background : Colors.dark.background,
    },
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, themeStyles.text]}>
        Oops, parece que você ainda não participa de nenhum grupo. Vamos mudar isso?
      </Text>
      <TouchableOpacity 
        style={[styles.button, themeStyles.button]}
        onPress={action}>
        <Text style={[styles.textButton, themeStyles.textButton]}>
          Crie agora!
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Height / 4,
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'NerkoOne',
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    borderRadius: 16,
    borderWidth: 1,
    height: '25%',
    justifyContent: 'center',
    marginTop: '3%',
    width: '45%',
  },
  textButton: {
    fontSize: 18,
    fontFamily: 'NerkoOne',
    textAlign: 'center',
  },
});
