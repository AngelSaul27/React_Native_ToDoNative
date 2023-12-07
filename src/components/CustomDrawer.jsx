import React from 'react';
import DrawerContent from './DrawerContent';
import { Animated, Dimensions, } from 'react-native';

const CustomDrawer = ({ isOpen, onClose }) => {
    const [visible, setVisible] = React.useState(isOpen);

    // Referencia para la animación de deslizamiento lateral
    const slideAnim = React.useRef(new Animated.Value(-Dimensions.get('window').width)).current;

    // Referencia para la animación de opacidad
    const opacityAnim = React.useRef(new Animated.Value(0)).current;

    // Efecto secundario para manejar la apertura y cierre del drawer
    React.useEffect(() => {
        // Abrir el drawer
        // Animación de opacidad para mostrar el drawer
        if (isOpen) {
            setVisible(true);
            Animated.timing(opacityAnim, {toValue: 1,duration: 250,useNativeDriver: false,}).start();
        } else {
            // Animación de opacidad para ocultar el drawer
            // Una vez completada la animación de opacidad, ocultar el drawer
            Animated.timing(opacityAnim, { toValue: 0, duration: 250, useNativeDriver: false,}).start(() => {
                setVisible(false);
            });
        }

        // Animación de deslizamiento lateral para abrir o cerrar el drawer
        Animated.timing(slideAnim, { toValue: isOpen ? 0 : -Dimensions.get('window').width,
            duration: 250, useNativeDriver: false,}).start();
    }, [isOpen, slideAnim, opacityAnim]);

    // Manejar el cierre del drawer al hacer clic en el overlay
    const handleOverlayPress = () => { onClose(); };

    // Si el drawer no está visible, no renderizar nada
    if (!visible) { return null; }

    return (
        <DrawerContent handleOverlayPress={handleOverlayPress} onClose={onClose} slideAnim={slideAnim} opacityAnim={opacityAnim}/>
    );
};

export default CustomDrawer;
