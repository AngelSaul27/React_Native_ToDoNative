import HeaderBar from '../components/HeaderBar';
import { Text, View } from 'react-native';
import { styleSheet } from '../constants/Styles';

export default function NoteScreen({openDrawer}) {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <HeaderBar openDrawer={openDrawer} />
          <View style={styleSheet.main_container}>
              <Text>Notes!</Text>
          </View>
      </View>
    );
}