import HeaderBar from '../components/HeaderBar';
import { Text, View } from 'react-native';
import { styleSheet } from '../constants/Styles';

export default function SettingScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff'}}>
            <HeaderBar />
            <View style={styleSheet.main_container}>
                <Text>Settings!</Text>
            </View>
        </View>
    );
}