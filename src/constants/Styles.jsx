import Constants from 'expo-constants';
import { StyleSheet } from "react-native";
import { color_light } from './Color';

export const styleSheet = StyleSheet.create({
    default_header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Constants.statusBarHeight + 10,
        marginHorizontal: 12
    },
    default_header_boxes: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    default_header__first_box_title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    main_container: {
        marginHorizontal: 18.5, 
        marginVertical: 10
    },
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 70,
        backgroundColor: color_light.gray_50,
        borderTopWidth: 0,
    },
    tabBarLabelStyle: {
        marginBottom: 10, 
        paddingBottom: 0
    }
})