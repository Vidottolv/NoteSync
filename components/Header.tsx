import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';

export type HeaderProps = {
    name: string;
    action: () => void
};

const Height = Dimensions.get('window').height;

export function Header({
    name,
    action,
}: HeaderProps) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                    {name}
                </Text>
            <TouchableOpacity 
                style={styles.returnButton}
                onPress={() => action}>
                <Ionicons 
                    name='arrow-undo-outline' 
                    color={"#FFF"} 
                    size={(Height / 26)}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 32,
        color:'#FFF',
        marginLeft: (Height / 80)
    },
    header: {
        marginTop: (Height / 40),
        borderBottomColor:'#fff',
        borderWidth:1,
        height: (Height / 15),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor: Colors.dark.background
    },
    returnButton: {
        marginRight: (Height / 80)
    }
});
