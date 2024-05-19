import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from "react";



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


const DropDown = ({
    navigation,
    data = [],
    value = {},
    onSelect = ()=>{}
}) => {
    // console.log("Selected Plan", !!value)
    const [showOption, setShowOption] = useState(false)
    const onSelectedItem = (val) => {
        setShowOption(false)
        onSelect(val)
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.dropDownStyle} 
            activeOpacity={0.8}
            onPress={()=>setShowOption(!showOption)}
            >
            <Text>{!!value? value?.name: 'Select One..'}</Text>
            <Image style={{
                transform: [{rotate: showOption? '180deg': '0deg'}]
            }}source={require('./../assets/img/arrow.png')}/>
        </TouchableOpacity>

        {showOption && (<View>
            {data.map((val,i)=> {
                return(
                    <StyledButton 
                        key={String(i)}
                        onPress = {() => onSelectedItem(val) }

                    >
                        {/* Create a new StyledButton in the styles.css file for the dropdown butons */}
                        <Text>{val.name}</Text>
                    </StyledButton>
                )
             })}
        </View>)}

    </View>
  );
};


const styles = StyleSheet.create({
    dropDownStyle:{
        backgroundColor: '#FF9050',
        padding: 8,
        borderRadius: 6,
        minHeight: 42,
        // justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    }
});

export default DropDown;
