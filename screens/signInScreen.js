// import React, { useState } from 'react'
// import { View, Text, StyleSheet, Dimensions, Platform, TextInput, Touchable, TouchableOpacity } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const SignInScreen = ({ navigation }) => {
//     const [data, setData] = useState({
//         email: '',
//         password: '',
//         check_textInputChange: false,
//         secureTextEntry: true
//     });

//     const textInputChange = (val) => {
//         if (val.lenth !== 0) {
//             setData({
//                 ...data,
//                 email: val,
//                 check_textInputChange: true
//             });
//         } else {
//             setData({
//                 ...data,
//                 email: false,
//                 check_textInputChange: false
//             });
//         }
//     };
//     const handlePasswordChange = (val) => {
//         setData({
//             ...data,
//             password: val
//         });
//     }

//     const updateSecurityTextEntry = () => {
//         setData({
//             ...data,
//             secureTextEntry: !data.secureTextEntry
//         })
//     }

//     return (
//         <>
//             <View style={styles.container}>
//                 <View style={styles.header}>
//                     <Text style={styles.text_header}>Welcome!</Text>
//                 </View>
//                 <View style={styles.footer}>
//                     {/* Email */}
//                     <Text style={styles.text_footer}>Email</Text>
//                     <View style={styles.action}>
//                         <Icon
//                             name='person'
//                             color="#05375a"
//                             size={20}
//                         />
//                         <TextInput
//                             placeholder='Your Email'
//                             style={styles.textInput}
//                             autoCapitalize='none'
//                             onChangeText={(val) => textInputChange(val)}
//                         />
//                         {data.check_textInputChange ?
//                             <Icon
//                                 name='check-circle'
//                                 color='green'
//                                 size={20}
//                             />
//                             : null}
//                     </View>
//                     {/* Password */}
//                     <Text style={{ ...styles.text_footer, marginTop: 20 }}>Password</Text>
//                     <View style={styles.action}>
//                         <Icon
//                             name='lock'
//                             color="#05375a"
//                             size={20}
//                         />
//                         <TextInput
//                             placeholder='Your Password'
//                             secureTextEntry={data.secureTextEntry ? true : false}
//                             style={styles.textInput}
//                             autoCapitalize='none'
//                             onChangeText={(val) => handlePasswordChange(val)}
//                         />
//                         <TouchableOpacity onPress={updateSecurityTextEntry}>
//                             {data.secureTextEntry ?
//                                 <Icon name='visibility-off' color='grey' size={20} />
//                                 :
//                                 <Icon name='visibility' color='grey' size={20} />
//                             }
//                         </TouchableOpacity>
//                     </View>

//                     <TouchableOpacity onPress={() => navigation.navigate("Home")}>
//                         <View style={{
//                             ...styles.button,
//                             backgroundColor: '#009387',
//                         }}
//                         >
//                             <Text style={styles.textSign}>Sign In</Text>
//                         </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
//                         <View style={{ ...styles.button, borderColor: '#009387', borderWidth: 1, marginTop: 15 }}>
//                             <Text style={{ ...styles.textSign, color: 'black' }}>Sign Up</Text>
//                         </View>
//                     </TouchableOpacity>
//                 </View>
//             </View >
//         </>
//     )
// }

// export default SignInScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#009387'
//     },
//     header: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         paddingHorizontal: 20,
//         paddingVertical: 50
//     },
//     footer: {
//         flex: 3,
//         backgroundColor: "#fff",
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         paddingVertical: 30,
//         paddingHorizontal: 20
//     },
//     text_header: {
//         color: "#fff",
//         fontSize: 30,
//         fontWeight: 'bold'
//     },
//     text_footer: {
//         color: "#05375a",
//         fontSize: 18
//     },
//     action: {
//         flexDirection: 'row',
//         marginTop: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f2f2f2',
//         paddingBottom: 5
//     },
//     textInput: {
//         flex: 1,
//         marginTop: Platform.OS === 'ios' ? 0 : -12,
//         paddingLeft: 10,
//         color: '#05375a'
//     },
//     button: {
//         alignItems: 'center',
//         marginTop: 40,
//         height: 46,
//         borderRadius: 12
//     },
//     signIn: {
//         width: '100%',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10
//     },
//     textSign: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: 'white',
//         marginTop: 9
//     }
// })

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Users from '../model/users';

const SignInScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {
        const foundUser = Users.filter(item => {
            return userName == item.username && password == item.password;
        });

        if (data.username.length == 0 || data.password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }

        if (foundUser.length == 0) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                { text: 'Okay' }
            ]);
            return;
        }
        navigation.navigate("Main")
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={{ ...styles.text_footer, color: 'black' }}>Username</Text>
                <View style={styles.action}>
                    <Icon
                        name="person"
                        color="black"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Username"
                        placeholderTextColor="#666666"
                        style={{
                            ...styles.textInput,
                            color: 'black'
                        }}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ?
                        <View>
                            <Icon
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </View>
                        : null}
                </View>
                {data.isValidUser ? null :
                    <View>
                        <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                    </View>
                }


                <Text style={{
                    ...styles.text_footer,
                    color: "black",
                    marginTop: 35
                }}>Password</Text>
                <View style={styles.action}>
                    <Icon
                        name="lock"
                        color="black"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        placeholderTextColor="#666666"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={{
                            ...styles.textInput,
                            color: 'black'
                        }}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Icon
                                name="visibility-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Icon
                                name="visibility"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? null :
                    <View>
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                    </View>
                }


                <TouchableOpacity>
                    <Text style={{ color: '#009387', marginTop: 15 }}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => { loginHandle(data.username, data.password) }}
                    >
                        <View
                            style={{
                                ...styles.signIn,
                                backgroundColor: '#009387',
                                borderRadius: 15
                            }}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign In</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});