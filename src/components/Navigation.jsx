import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { color_light } from '../constants/Color.jsx';
import { styleSheet } from '../constants/Styles.jsx';

import HomeScreen from '../screens/HomeScreen.jsx';
import HabitScreen from '../screens/HabitScreen.jsx';
import TaskScreen from '../screens/TaskScreen.jsx';
import NoteScreen from '../screens/NoteScreen.jsx';
import ChartScreen from '../screens/ChartScreen.jsx';

import IconCalendarDay from "../../assets/icons/calendar_date.svg";
import IconNoteWrite from "../../assets/icons/note_write.svg";
import IconTrophyStart from "../../assets/icons/trophy_start.svg";
import IconCheckListNote from "../../assets/icons/checklist_note.svg";
import IconChartUp from "../../assets/icons/chart_up.svg";

export default function BottomTabNavigation({openDrawer}){
    const Tab = createBottomTabNavigator();

    function CallHomeScreen(){
        return <HomeScreen openDrawer={openDrawer} />
    }

    function CallHabitScreen(){
        return <HabitScreen openDrawer={openDrawer} />
    }

    function CallTaskScreen(){
        return <TaskScreen openDrawer={openDrawer} />
    }

    function CallNoteScreen(){
        return <NoteScreen openDrawer={openDrawer} />
    }

    function CallChartScreen(){
        return <ChartScreen openDrawer={openDrawer} />
    }

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Today" component={CallHomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <IconCalendarDay size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Habits" component={CallHabitScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <IconTrophyStart size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Task" component={CallTaskScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <IconCheckListNote size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Notes" component={CallNoteScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <IconNoteWrite size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Charts" component={CallChartScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <IconChartUp size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const screenOptions = {
    tabBarShowLabel: true,
    headerShown: false,
    tabBarActiveTintColor: color_light.gray_999, 
    tabBarInactiveTintColor: color_light.gray_500,
    tabBarStyle: styleSheet.tabBarStyle,
    tabBarLabelStyle: styleSheet.tabBarLabelStyle,
}