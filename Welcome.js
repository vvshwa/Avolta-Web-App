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
} from './../components/styles';
import { Linking } from "react-native";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from './../Core/Config'
import Purchase from "./Purchase";
const Welcome = ({navigation, route}) => {
    const { name, em } = route.params;
// so this sets a variable called hidePassword in the first value
// the second value is the function to update the state (so kind of like the funciton to update the app when the user does something)
// in most cases useState would be followed by a ("") like useState("insert string or sumn here")
// whatever is in these brackets are essentially the original value we're assigning the first value
// so in our case, useState is assigning the boolean value true to the variable hidePassword
    // const[user, setUser] = useState([]);
    // getDoc(doc(db, "Logins", values.email))
    // .then((snapshot) => {
    //     if(snapshot.exists) {
    //         alert("ily")
    //         setUser(snapshot.data())
    //     }
    //     else {
    //         alert("No Doc Found")
    //     }
    //     })

return(
        <>
            {/* Status bar style="dark" makes the app fill the black status bar at the top*/}
            <StatusBar style="auto"/>
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/img/cloudgooder.png')}/>
                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome</PageTitle>
                    <SubTitle welcome={true}>{name}!</SubTitle>

                    <StyledFormArea>
                        {/* <Avatar resizeMode="cover" source={require('./../assets/img/AVolta.png')}/> */}
                    <Line />
                        <StyledButton onPress={() => {}}>
                            <ButtonText>My Services</ButtonText>
                        </StyledButton>
                        <StyledButton onPress={() => navigation.navigate("Purchase", {
                                    name: name,
                                    em: em,
                                  })}>
                            <ButtonText>Purchase a Service</ButtonText>
                        </StyledButton>
                        <StyledButton onPress={() => Linking.openURL('https://www.avoltacanada.com/')}>
                            <ButtonText>Visit Our Website</ButtonText>
                        </StyledButton>
                        <StyledButton onPress={() => {navigation.navigate('Login')}}>
                            <ButtonText>Sign Out</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};


export default Welcome;