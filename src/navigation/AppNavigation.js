import React from "react";
import { Icon } from "react-native-vector-icons/Icon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {AuthStack} from './AuthStack';
import { screenName } from "../utilities/config/screenName";

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
    