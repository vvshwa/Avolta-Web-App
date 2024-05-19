import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import user from './Login';

import {
    Avatar,
    WelcomeImage,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    InnerContainer,
    WelcomeContainer,
    ButtonText,
    Line,
    TextLink,
    TextLinkConstant
} from './../components/styles';
import { Linking } from "react-native";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from './../Core/Config'
import Purchase from "./Purchase";
import uuid from 'react-native-uuid';
const Pay_Success = ({navigation, route}) => {
    const { name, plan, em, tx } = route.params;

return(
        <>
            {/* Status bar style="dark" makes the app fill the black status bar at the top*/}
            <StatusBar style="auto"/>
            <InnerContainer>
                <PageTitle>This page would be shown after the payment process is completed</PageTitle>
                <WelcomeImage resizeMode="cover" source={require('./../assets/img/cloudgooder.png')}/>
                <WelcomeContainer>
                    <SubTitle></SubTitle>
                    <SubTitle welcome={true}>Congratulations {name}! The {plan} plan 
                    is in force for your vehicle and has been added to your services. </SubTitle>
                    {/* Create a new title frame thing in the styles.css for this plan selected part and the parts above */}
                    <Line/>
                    <PageTitle>tx_Id: {tx} </PageTitle>

                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};




export default Pay_Success;