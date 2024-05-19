import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from "formik";

// icons
import {Octicons,Ionicons, AntDesign, Fontisto} from '@expo/vector-icons';

import { deleteDoc, doc, getDoc, setDoc, onSnapshot, collection } from 'firebase/firestore';
import { db } from './../Core/Config'
import { async } from "@firebase/util";
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    Colors,
    StyledInputLabel,
    StyledTextInput,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkConstant
} from './../components/styles';
import { View, TouchableOpacity } from "react-native";

// Colors
const{brand, darkLight, primary} = Colors;

// DateTimePicker
import DateTimePicker from '@react-native-community/datetimepicker';

// keyboard avoiding view
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

const Signup = ({navigation}) => {
// so this sets a variable called hidePassword in the first value
// the second value is the function to update the state (so kind of like the funciton to update the app when the user does something)
// in most cases useState would be followed by a ("") like useState("insert string or sumn here")
// whatever is in these brackets are essentially the original value we're assigning the first value
// so in our case, useState is assigning the boolean value true to the variable hidePassword
    const [hidePassword, setHidePassword] = useState(true);
    const[show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(1, 0, 2022));

    // Actual Date of Birth to be sent
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true)
    }
    
    return(
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                {/* Status bar style="dark" makes the app fill the black status bar at the top*/}
                <StatusBar style="auto"/>
                <InnerContainer>
                    <PageTitle>Mosquito V1.0</PageTitle>
                    <PageTitle>Car Anti-Theft System</PageTitle>
                    <SubTitle>Account SignUp</SubTitle>
                    {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
                    {/* This Formik section is whats allowing us to enter and login/password info */}
                    {/* CHECK CS CHEAT SHEETS BOOKMARK FOLDER TO FIGURE OUT THE SPECIFICS AND LEARN IT BETTER */}
                    <Formik
                        initialValues={{fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: ''}}
                        onSubmit={ (values) => {
                            const myDoc = doc(db, "Logins", values.email)

                            setDoc(myDoc, values)
                            // Handling Promises
                            .then(() => {
                                // MARK: Success
                                console.log(values);
                                alert("User Signed Up!")
                                navigation.navigate("Welcome", {
                                    name: values.fullName,
                                    em: values.email,
                                  })
                            })
                            .catch((error) => {
                                // MARK: Failure
                                console.log("Sign Up failed");
                                alert(error.message)
                            })

                        }}
                    >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                        {/* 1st TextInput */}
                        <MyTextInput
                            // label puts a little label on top of the email input bar
                            label="Full Name"
                            // icon adds a little mail envelope icon
                            icon="person"
                            // icon="login"
                            // placeholder puts an example email on the background of the email input bar
                            placeholder="John Doe"
                            // placeholderTextColor changes the text color of whatever text is used in placeholder
                            placeholderTextColor={darkLight}
                            
                            onChangeText= {handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            value={values.fullName}
                        />
                        {/* 2nd TextInput */}
                        <MyTextInput
                            // label puts a little label on top of the email input bar
                            label="Email Address"
                            // icon adds a little mail envelope icon
                            icon="mail"
                            // icon="login"
                            // placeholder puts an example email on the background of the email input bar
                            placeholder="JohnDoe@gmail.com"
                            // placeholderTextColor changes the text color of whatever text is used in placeholder
                            placeholderTextColor={darkLight}
                            
                            onChangeText= {handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        {/* 3rd TextInput */}
                        <MyTextInput
                            // label puts a little label on top of the email input bar
                            label="Date of Birth"
                            // icon adds a little mail envelope icon
                            icon="calendar"
                            // icon="login"
                            // placeholder puts an example email on the background of the email input bar
                            placeholder="DD / MM / YYYY"
                            // placeholderTextColor changes the text color of whatever text is used in placeholder
                            placeholderTextColor={darkLight}
                            onChangeText= {handleChange('dateOfBirth')}
                            onBlur={handleBlur('dateOfBirth')}
                            value={dob ? dob.toDateString() : ''}
                            isDate={true}
                            editable = {false}
                            showDatePicker={showDatePicker}
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
                        {/* 2nd password */}
                        <MyTextInput
                            // label puts a little label on top of the email input bar
                            label="Confirm Password"
                            // icon adds a little mail envelope icon
                            icon="lock"
                            // placeholder puts an example email on the background of the email input bar
                            placeholder="* * * * * * * *"
                            // placeholderTextColor changes the text color of whatever text is used in placeholder
                            placeholderTextColor={darkLight}
                            
                            onChangeText= {handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            // secureTextEntry makes it so when we type something in the password section
                            // after each character is typed the one before will turn into a black circle
                            secureTextEntry={hidePassword}
                            isPassword = {true}
                            hidePassword = {hidePassword}
                            setHidePassword = {setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Sign Up</ButtonText>
                        </StyledButton>
                        <Line />
                        <ExtraView>
                            <ExtraText>Already have an account? </ExtraText>
                            <TextLink onPress={() => navigation.navigate('Login')}>
                                <TextLinkConstant>Login</TextLinkConstant>
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

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => { 
    return (
    <View>
        <LeftIcon>
            <Octicons name={icon} size={30} color={brand}/>
            {/* <AntDesign name={icon} size={24} color="black" /> */}
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        {!isDate && <StyledTextInput {...props}/>}
        {isDate && (
            <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput {...props}/>
            </TouchableOpacity>
        )}
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

export default Signup;