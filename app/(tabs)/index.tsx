import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import WithouGroup from '@/components/WoutGroup';
import { useRouter } from 'expo-router';


export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <WithouGroup action={() => router.push('/createGroups') }/>
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
