import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import user from './Login';
// import values from './Signup';

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
const Selected = ({navigation, route}) => {
    const { name, plan, em } = route.params;
    // Updates the user in firestore to contain a "type" field for their type of plan
    const myDoc = doc(db, "Logins", em);
    setDoc(myDoc, {Type: plan}, {merge:true});
    setDoc(myDoc, {tx_ID: uuid.v4()}, {merge:true});
  
    // const cityRef = doc(db, 'cities', 'BJ');
    // setDoc(cityRef, { capital: true }, { merge: true });
return(
        <>
            {/* Status bar style="dark" makes the app fill the black status bar at the top*/}
            <StatusBar style="auto"/>
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/img/cloudgooder.png')}/>
                <WelcomeContainer>
                    <SubTitle welcome={true}>{name}! We’re glad you’re going ahead with the {plan} plan. 
                    Please follow the payment link below to complete your purchase</SubTitle>
                    {/* Create a new title frame thing in the styles.css for this plan selected part and the parts above */}
                    <Line/>
                    <PageTitle welcome={true}>Plan Selected: {plan} </PageTitle>

                    <TextLink onPress={() => 
                        getDoc(doc(db, "Logins", em)).then(docSnap => {
                            if (docSnap.exists()) {
                                    navigation.navigate('Pay_Success', {
                                        name: name,
                                        plan: plan,
                                        em: em,
                                        tx: docSnap.data().tx_ID
                                      })
                            }
                    })}>
                        <TextLinkConstant>Continue to Payment</TextLinkConstant>
                    </TextLink>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};




export default Selected;