import HeaderBar from '../components/HeaderBar';
import { Text, View } from 'react-native';
import { styleSheet } from '../constants/Styles';

export default function ChartScreen({openDrawer}) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <HeaderBar openDrawer={openDrawer} />
            <View style={styleSheet.main_container}>
                <Text>My Stats!</Text>
            </View>
        </View>
    );
}