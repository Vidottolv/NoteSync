import { Image, StyleSheet, Platform, View, Text, useColorScheme } from 'react-native';
import WithoutGroup from '@/components/WoutGroup';
import { useRouter } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';


export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <WithoutGroup action={() => router.push('/createGroups') }/>
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container:{
    flex:1,
    justifyContent:'center'
  },
});
