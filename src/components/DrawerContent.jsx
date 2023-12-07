import { View, Text, TouchableWithoutFeedback, Animated, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { format } from "date-fns";

function DrawerContent({handleOverlayPress, slideAnim, opacityAnim})
{
    var date = new Date();
    var formattedDate = format(date, "MMMM do, yyyy");

    return (
        // TouchableWithoutFeedback para manejar clics fuera del drawer
        <TouchableWithoutFeedback onPress={handleOverlayPress}>
            <View style={styles.overlay}>
                {/* Drawer con animación de deslizamiento lateral y opacidad */}
                <Animated.View style={[styles.drawerContainer, { transform: [{ translateX: slideAnim }], opacity: opacityAnim }]}>
                    <View>
                        <Text style={styles.app_name}>ToDo Native</Text>
                        <Text style={styles.app_name_date}>{formattedDate}</Text>
                    </View>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: StatusBar.currentHeight || 0,
    },
    drawerContainer: {
        backgroundColor: 'white',
        position: 'absolute',
        height: '100%',
        width: '70%',
        padding: 16,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        left: 0,
        top: 0,
    },
    app_name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    app_name_date: {
        fontWeight: '300'
    }
});

export default DrawerContent;

/*
<TouchableOpacity>
                        <Text>{formattedDate}</Text>
                        <Text>{formattedDate}</Text>
                    </TouchableOpacity>
*/