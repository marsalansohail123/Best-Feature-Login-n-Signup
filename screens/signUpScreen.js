import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Platform, TextInput, Touchable, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignUpScreen = ({ navigation }) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_userInputChange: false,
        check_emailInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const userInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_userInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_userInputChange: false
            });
        }
    }


    const emailInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_emailInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_emailInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    // const handleConfirmPasswordChange = (val) => {
    //     setData({
    //         ...data,
    //         confirm_password: val
    //     });
    // }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    // const updateConfirmSecureTextEntry = () => {
    //     setData({
    //         ...data,
    //         confirm_secureTextEntry: !data.confirm_secureTextEntry
    //     });
    // }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Register Now!</Text>
                </View>
                <View style={styles.footer}>
                    {/* User Name */}
                    <Text style={styles.text_footer}>User Name</Text>
                    <View style={styles.action}>
                        <Icon
                            name='person'
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder='Your Name'
                            style={styles.textInput}
                            autoCapitalize='none'
                            onChangeText={(val) => userInputChange(val)}
                        />
                        {data.check_userInputChange ?
                            <Icon
                                name='check-circle'
                                color='green'
                                size={20}
                            />
                            : null}
                    </View>
                    {/* Email */}
                    <Text style={{ ...styles.text_footer, marginTop: 20 }}>Email</Text>
                    <View style={styles.action}>
                        <Icon
                            name='alternate-email'
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder='Your Email'
                            style={styles.textInput}
                            autoCapitalize='none'
                            onChangeText={(val) => emailInputChange(val)}
                        />
                        {data.check_emailInputChange ?
                            <Icon
                                name='check-circle'
                                color='green'
                                size={20}
                            />
                            : null}
                    </View>
                    {/* Password */}
                    <Text style={{ ...styles.text_footer, marginTop: 20 }}>Password</Text>
                    <View style={styles.action}>
                        <Icon
                            name='lock'
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder='Password'
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize='none'
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ?
                                <Icon name='visibility-off' color='grey' size={20} />
                                :
                                <Icon name='visibility' color='grey' size={20} />
                            }
                        </TouchableOpacity>
                    </View>
                    {/* Confirm Password */}
                    <Text style={{ ...styles.text_footer, marginTop: 20 }}>Confirm Password</Text>
                    <View style={styles.action}>
                        <Icon
                            name='lock'
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder='Confirm Password'
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize='none'
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ?
                                <Icon name='visibility-off' color='grey' size={20} />
                                :
                                <Icon name='visibility' color='grey' size={20} />
                            }
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                        <View style={{
                            ...styles.button,
                            backgroundColor: '#009387',
                        }}
                        >
                            <Text style={styles.textSign}>Sign In</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        </>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 50
    },
    footer: {
        flex: 3,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    text_header: {
        color: "#fff",
        fontSize: 30,
        fontWeight: 'bold'
    },
    text_footer: {
        color: "#05375a",
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
        height: 46,
        borderRadius: 12
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 9
    }
})