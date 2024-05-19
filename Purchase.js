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
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from './../Core/Config'
import DropDown from "../components/DropDown";
import SelectList from 'react-native-dropdown-select-list'


let plans = [{id:1, name:"Basic"},{id: 2, name:"Platinum"}, {id:3, name:"Gold"}];

const Purchase = ({navigation, route}) => {
    const [selectedItem, setSelectedItem] = useState(null)
    const onSelect = (item) => {
        setSelectedItem(item)
    }
    const { name, em } = route.params;


return(
        <>
            {/* Status bar style="dark" makes the app fill the black status bar at the top*/}
            <StatusBar style="auto"/>
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/img/cloudgooder.png')}/>
                <WelcomeContainer>
                    <SubTitle welcome={true}>{name}!</SubTitle>
                    <SubTitle>Check out our services!</SubTitle>

                    <StyledFormArea>
                        {/* <Avatar resizeMode="cover" source={require('./../assets/img/AVolta.png')}/> */}
                    <Line />

                        <DropDown 
                        value={selectedItem}
                        data={plans}
                        onSelect = {onSelect}
                        />
                        
                    </StyledFormArea>
                    <StyledButton onPress={() => navigation.navigate("Selected", {
                                    name: name,
                                    plan: selectedItem.name,
                                    em: em
                                  })}>
                        {/* Make specific button in styles.css for this */}
                        <ButtonText>Confirm Order</ButtonText>
                    </StyledButton>
                    <TextLink>
                        <TextLinkConstant>Not sure what to pick?</TextLinkConstant>
                    </TextLink>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};


export default Purchase;