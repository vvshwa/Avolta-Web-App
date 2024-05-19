// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

// React Navigation
import RootStack from './navigators/RootStack';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './Core/Config'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  return <RootStack />;
  
}


// export default function App() {
//   return (
//     <View style={styles.container}>
      
//       <View style={styles.tasksWrapper}>
//         <Image source={require('./Images/AVolta.png')} style={styles.AVLogo}></Image>

//         <View style={styles.Login}>
//         {/* this is where user and pass go */}
        
//         </View>

//       </View>

//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#3a444f',
//     alignItems: 'center',
//     paddingTop: 250,  
//   },
//   tasksWrapper: {
//     paddingTop: 30,
//     paddingHorizontal: 20,
//   },
//   AVLogo: {
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//   },
//   Login: {},
// });


// WORKING WITH FIREABSE EXAMEPLE
// const Create = () => {
//   // MARK: Creating New Doc in Firebase
//   // Before that enable Firebase in Firebase Console
//   const myDoc = doc(db, "MyCollection", "MyDocument")

//   // Your Document Goes Here
//   const docData = {
//     "name": "iJustine",
//     "bio": "YouTuber"
//   }

//   setDoc(myDoc, docData)
//     // Handling Promises
//     .then(() => {
//       // MARK: Success
//       alert("Document Created!")
//     })
//     .catch((error) => {
//       // MARK: Failure
//       alert(error.message)
//     })
// }
// return (
//   <View style={styles.container}>
//     <Button title='Create New Doc' onPress={Create}></Button>
//   </View>
// // return <RootStack />;

// )
// }
// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: '#fff',
//   alignItems: 'center',
//   justifyContent: 'center',
// },
// });
