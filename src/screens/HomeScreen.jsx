import { Text, View } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import { styleSheet } from '../constants/Styles';

export default function HomeScreen({openDrawer}) {
    
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <HeaderBar openDrawer={openDrawer} />
            <View style={styleSheet.main_container}>
                <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis sint tempore non molestias! Eligendi iste reiciendis, hic nam molestiae deserunt ea porro doloribus? Ipsum dolor earum explicabo. Unde, laudantium.!</Text>
            </View>
        </View>
    );
}