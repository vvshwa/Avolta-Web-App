import React, {useState, useEffect} from "react";
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik, Field, useFormikContext, ErrorMessage } from "formik";

// icons
import {Octicons,Ionicons, AntDesign, Fontisto} from '@expo/vector-icons';

import * as Yup from 'yup';

import auth from '@react-native-firebase/auth';

import FirebaseLogin from './../FirebaseLogin';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    secondLine,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    Colors,
    StyledInputLabel,
    StyledTextInput,
    StyledButton,
    StyledLoginButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkConstant
} from './../components/styles';
import { View } from "react-native";
// Colors
const{brand, darkLight, primary, white} = Colors;
// keyboard avoiding view
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import { deleteDoc, doc, getDoc, setDoc, onSnapshot, collection } from 'firebase/firestore';
import { db } from './../Core/Config'
import { async } from "@firebase/util";


const Login = ({navigation}) => {

// so this sets a variable called hidePassword in the first value
// the second value is the function to update the state (so kind of like the funciton to update the app when the user does something)
// in most cases useState would be followed by a ("") like useState("insert string or sumn here")
// whatever is in these brackets are essentially the original value we're assigning the first value
// so in our case, useState is assigning the boolean value true to the variable hidePassword
    const [hidePassword, setHidePassword] = useState(true);
    const [errorMessage, setErrorMessage] = useState('false');
    const[user, setUser] = useState([]);
    return(
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                {/* Status bar style="dark" makes the app fill the black status bar at the top*/}
                <StatusBar style="auto"/>
                <PageTitle>Mosquito V1.0</PageTitle>
                <PageTitle>Car Anti-Theft System</PageTitle>
                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('./../assets/img/AVolta.png')}/>
                    <SubTitle>ACCOUNT LOGIN</SubTitle>
                    
                    {/* This Formik section is whats allowing us to enter and login/password info */}
                    <Formik
                        initialValues={{email: '', password: ''}}
                        // validationSchema={validate}
                        onSubmit={ (values) => {
                            // FirebaseLogin(values) just allows for email auth so ask if we need that
                            // FirebaseLogin(values)
                            // LOGIN AUTHENTICATION KINDA
                                                        // OG TOCOME BACK TO FO REAL
                            getDoc(doc(db, "Logins", values.email)).then(docSnap => {
                                if (docSnap.exists()) {
                                    if(docSnap.data().password == values.password) {
                                        // moves to the welcome page after login is completed succesfully
                                        // MAYBE CREATE A VARIABLE TO STORE docSnap.data() and then import it in the welcome page to get fullName?
                                        console.log(values);
                                        // setUser(docSnap.data().fullName);
                                        // navigates to Welcome page and passes the variable 'name' that holds the users fullName 
                                        navigation.navigate('Welcome', {
                                            name: docSnap.data().fullName,
                                            em: docSnap.data().email
                                          })
                                    }
                                    else{
                                        console.log("Login Failed");
                                        alert("Password Incorrect");
                                        setErrorMessage("Example pass message!")
                                    }

                                } else {
                                    console.log("Login Failed");
                                    alert("No User Found");
                                    setErrorMessage("Example login message!")

                                }
                              })
                            // END LOGIN AUTHENTICATION KINDA
                        }}
                    >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                        <MyTextInput 
                            // label puts a little label on top of the email input bar
                            label="Email Address"
                            // icon adds a little mail envelope icon
                            icon="mail"
                            // icon="login"
                            // placeholder puts an example email on the background of the email input bar
                            placeholder="example@gmail.com"
                            // placeholderTextColor changes the text color of whatever text is used in placeholder
                            placeholderTextColor={darkLight}
                            
                            onChangeText= {handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        
                        <MyTextInput
                            // label puts a little label on top of the email input bar
                            label="Password"
                            // icon adds a little mail envelope icon
                            icon="lock"
                            // placeholder puts an example email on the background of the email input bar
                            placeholder="* * * * * * * *"
                            // placeholderTextColor changes the text color of whatever text is used in placeholder
                            placeholderTextColor={darkLight}
                            
                            onChangeText= {handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            // secureTextEntry makes it so when we type something in the password section
                            // after each character is typed the one before will turn into a black circle
                            secureTextEntry={hidePassword}
                            isPassword = {true}
                            hidePassword = {hidePassword}
                            setHidePassword = {setHidePassword}
                        />
                        <MsgBox> </MsgBox>
                        <StyledLoginButton onPress={handleSubmit}>
                            <ButtonText>Login</ButtonText>
                        </StyledLoginButton>
                        <Line />
                        {/* The next StyledButton object here is optional depending on if they want google sign-in feature */}
                        <StyledButton google={true} onPress={handleSubmit}>
                            <Fontisto name="google" color={primary} size = {25} />
                            <ButtonText google ={true}>Sign in with Google</ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText>Don't have an account? </ExtraText>
                            <TextLink onPress={() => navigation.navigate("Signup")}>
                                <TextLinkConstant>Sign Up!</TextLinkConstant>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>
                    )}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
    <View>
        <LeftIcon>
            <Octicons name={icon} size={30} color="black"/>
            {/* <AntDesign name={icon} size={24} color="black" /> */}
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props}/>
        {isPassword && (
            // everything in the righticon part just sets up the little eye icon and makes it change when clicked through the onPress function
            // also toggles hiding and reveealing the password through the onPress function
            <RightIcon onPress= {() => setHidePassword(!hidePassword)}>
                <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
            </RightIcon>
        )}
    </View>
    );
};

export default Login;