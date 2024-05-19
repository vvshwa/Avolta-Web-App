import styled from 'styled-components';
import {View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import {
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  } from '@expo-google-fonts/inter';

  
const StatusBarHeight = Constants.statusBarHeight;
// colors
export const Colors = {
    primary: "#3a444f",
    secondary: "#E5E7",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#18B981",
    red: "#EF4444",
    white: "#FFFFFF"
};

const {primary,
    secondary,
    tertiary,
    darkLight,
    brand,
    green,
    red,
    white} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 20}px;
    height: 867px;
    background-color: #FFFFFF;
  `;
  
export const InnerContainer = styled.View`
    padding-top: 60px;
    width: 100%;
    flex: 1;
    align-items: center;
  `;
  
export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 100px;
    justify-content: center;
  `;

export const PageLogo = styled.Image`
    width: 150px;
    height: 150px;
    resizeMode: contain;
    margin-bottom: 30px;
  `;

export const Avatar = styled.Image`
    width: 90px;
    height: 90px;
    margin: auto;
    border-radius: 90px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
    position: absolute;
    top: 25%;
    
`;

export const PageTitle = styled.Text`
    font-size: 15px;
    // text-align: center;
    // font-weight: bold;
    letter-spacing: 3px;
    // color: ${white};
    // padding: 10px;

    ${props => props.welcome && `
        font-size: 35px;
        // letter-spacing: 1px;
        // font-weight: bold;
        // color: ${tertiary}
    `}
`;


// this is for the subtitle (obviously), so in this case "Account login"
export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 3px;
    // font-weight: bold;
    // color: ${white};

    ${(props) => props.welcome && `
        margin-bottom: 5px;
        font-weight: normal
    `}
`;

// this is for the input boxes size
export const StyledFormArea = styled.View`
    width: 90%;
`;

// this is for the input boxes appearance
export const StyledTextInput = styled.TextInput`
    // background-color: ${white}
    padding: 15px;
    padding-left: 55px;
    padding-right:55px;
    border: 1px solid #FF9050;
    border-radius: 5px;
    font-size:16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    // color: ${white};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left:15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right:15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    // background-color: ${white};
    border: 1px solid #FF9050;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    // for the google bar button part
    ${(props) => props.google == true && `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
`;
export const StyledLoginButton = styled.TouchableOpacity`
    margin: auto;
    position: relative;
    background-color: #FF9050;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-vertical: 5px;
    height: 45px;
    width: 180px;
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;

    ${(props) => props.google == true && `
        color: ${primary};
        padding-left: 15px;
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 18px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items; center;
`;

export const TextLinkConstant = styled.Text`
    color: #FF9050;
    font-size: 15px;
    textDecorationLine: underline;
`;

