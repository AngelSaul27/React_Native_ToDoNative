import React from 'react';
import { useRoute } from '@react-navigation/native';
import { styleSheet } from "../constants/Styles";
import { Text, TouchableWithoutFeedback, View } from "react-native";

import Icon_Calendar from "../../assets/icons/calendar.svg";
import Icon_Information_Circle from "../../assets/icons/information_circle.svg";
import Icon_DotMenu from "../../assets/icons/dots_menu.svg"

import { Dialog } from '@rneui/themed';

const HeaderBar = ({openDrawer}) => {

    const [modalVisible, setModalVisible] = React.useState(false);

    const route = useRoute();
    const screenName = route.name;

    return (
        <View style={styleSheet.default_header}>
            <View style={styleSheet.default_header_boxes}>
                <TouchableWithoutFeedback onPress={() => {openDrawer()}}>
                    <View style={{paddingHorizontal: 5}}>
                        <Icon_DotMenu width={20} />
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={styleSheet.default_header__first_box_title}>
                        {screenName}
                    </Text>
                </View>
            </View>

            <View style={styleSheet.default_header_boxes}>
                <TouchableWithoutFeedback>
                    <View style={{paddingHorizontal: 5}}>
                        <Icon_Calendar width={22} height={22} />
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                    <View style={{paddingHorizontal: 7}}>
                        <Icon_Information_Circle width={18.5} />
                    </View>
                </TouchableWithoutFeedback>
            </View>

            <Dialog isVisible={modalVisible} onBackdropPress={() => {setModalVisible(false)}}>
                <Dialog.Title title="About ToDo Native"/>
                <Text>Dialog body text. Add relevant information here.</Text>
            </Dialog>
        </View>
    ); 
}

export default HeaderBar;