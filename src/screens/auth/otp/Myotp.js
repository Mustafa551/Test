import React, {useRef} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
// import OTPTextInput from 'react-native-otp-textinput'
const Myotp = ({navigation}) => {
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);

  const image = {
    uri: 'https://images.unsplash.com/photo-1620377045865-81341542470d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bXVsdGljb2xvcnxlbnwwfHwwfHw%3D&w=1000&q=80',
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{
          height: Dimensions.get('screen').height,
          width: Dimensions.get('screen').width,
        }}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <View style={styles.mainview}>
            <View style={styles.textview}>
              <Text style={styles.heading}>Enter your phone</Text>
              <Text style={styles.text}>
                You will receive a 4 digit code for phone number verification.
              </Text>
            </View>

            <View style={styles.middleview}>
              {/* <View style={styles.border}></View> */}

              <View style={styles.middleview2}>
                <Text style={styles.middleview2txt}>+1</Text>
                <View style={styles.rightborder}></View>
                <TextInput style={styles.input} placeholder="Phone Number" />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '90%',
                  alignSelf: 'center',
                }}>
                <TextInput
                keyboardType='phone-pad'
                  maxLength={1}
                  style={{
                    width: 50,
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                    height: 50,
                    textAlign: 'center',
                    paddingBottom: -10,
                  }}
                />
                <TextInput
                keyboardType='phone-pad'
                  maxLength={1}
                  style={{
                    width: 50,
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                    height: 50,
                    textAlign: 'center',
                    paddingBottom: -10,
                  }}
                />
                <TextInput
                keyboardType='phone-pad'
                  maxLength={1}
                  style={{
                    width: 50,
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                    height: 50,
                    textAlign: 'center',
                    paddingBottom: -10,
                  }}
                />
                <TextInput
                keyboardType='phone-pad'
                  maxLength={1}
                  style={{
                    width: 50,
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                    height: 50,
                    textAlign: 'center',
                    paddingBottom: -10,
                  }}
                />
              </View>
            </View>
          </View>
                <View style={{alignItems: "center",marginTop: 80}}>
                    <Text onPress={() => navigation.navigate('Login')} style={{fontSize: 25,color: "white"}}>Login</Text>
                    <Text onPress={() => navigation.navigate('Signup')} style={{fontSize: 25,color: "white"}}>Signup</Text>
                </View>   
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainview: {
    width: '90%',
    alignSelf: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 40,
    fontWeight: '600',
  },
  textview: {
    marginTop: 100,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginTop: 15,
  },
  middleview: {
    height: 120,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 22,
    marginTop: 35,
  },
  middleview1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  countryselect: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countrytext: {
    fontSize: 19,
    fontWeight: '500',
    paddingLeft: 10,
  },
  border: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 12,
  },
  middleview2: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    width: '90%',
    fontSize: 17,
    paddingLeft: 10,
  },
  middleview2txt: {
    fontSize: 17,
    paddingLeft: 8,
  },
  rightborder: {
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingLeft: 10,
    height: 20,
  },
});

export default Myotp;

// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   ImageBackground,
//   Dimensions,
//   StyleSheet,
//   Text,
//   Image,
//   TextInput,
//   //   FlatList
// } from 'react-native';

// const Myotp = () => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <ImageBackground
//         style={{
//           height: Dimensions.get('screen').height,
//           width: Dimensions.get('screen').width,

//         }}
//         resizeMode="cover"
//         source={require('../../../assets/images/back2.png')}>
//         <View style={styles.mainview}>
//           <View style={styles.textview}>
//             <Text style={styles.heading}>Enter your phone</Text>
//             <Text style={styles.text}>
//               You will receive a 4 digit code for phone number verification.
//             </Text>
//           </View>

//           <View style={styles.middleview}>

//             <View style={styles.border}></View>

//             <View style={styles.middleview2}>
//               <Text style={styles.middleview2txt}>+1</Text>
//               <View style={styles.rightborder}></View>
//               <TextInput style={styles.input} placeholder="Phone Number" />
//             </View>
//           </View>
//         </View>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   mainview: {
//     width: '90%',
//     alignSelf: 'center',
//   },
//   heading: {
//     color: 'white',
//     fontSize: 40,
//     fontWeight: '600',
//   },
//   textview: {
//     marginTop: 100,
//   },
//   text: {
//     color: 'white',
//     fontSize: 18,
//     marginTop: 15,
//   },
//   middleview: {
//     height: 110,
//     backgroundColor: 'white',
//     width: '100%',
//     borderRadius: 22,
//     marginTop: 35,
//   },
//   middleview1: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '90%',
//     alignSelf: 'center',
//     marginTop: 10,
//   },
//   countryselect: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   countrytext: {
//     fontSize: 19,
//     fontWeight: '500',
//     paddingLeft: 10,
//   },
//   border: {
//     borderBottomColor: 'black',
//     borderBottomWidth: 1,
//     marginTop: 12,
//   },
//   middleview2: {
//     width: '90%',
//     alignSelf: 'center',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   input: {
//     width: '90%',
//     fontSize: 17,
//     paddingLeft: 10,
//   },
//   middleview2txt: {
//     fontSize: 17,
//     paddingLeft: 8,
//   },
//   rightborder: {
//     borderRightColor: 'black',
//     borderRightWidth: 1,
//     paddingLeft: 10,
//     height: 20,
//   },
// });

// export default Myotp;
