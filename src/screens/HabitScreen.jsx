import { Text, View } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import { styleSheet } from '../constants/Styles';

export default function HabitScreen({openDrawer}) {
    
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <HeaderBar openDrawer={openDrawer} />
            <View style={styleSheet.main_container}>
                <Text>Habits!</Text>
            </View>
        </View>
    );
}