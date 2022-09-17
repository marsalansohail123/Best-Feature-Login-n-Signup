import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require('../assets/wlcm.jpg')}
                        style={styles.logo}
                    />
                </View>
                <View style={styles.footer}>
                    <Text style={styles.title}>Start Your Shopping Journey!</Text>
                    <Text style={styles.text}>With us 💕</Text>
                    <TouchableOpacity onPress={() => alert("Working :(")}>
                        <View style={styles.button}>
                            <View style={styles.signIn}>
                                <Text style={styles.textSign}>Start Shopping</Text>
                                <Icon
                                    name='navigate-next'
                                    color='#fff'
                                    size={20}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default HomeScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo,
        borderRadius: 5
    },
    title: {
        color: "#05375a",
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: "grey",
        fontSize: 20,
        marginTop: 5,
        marginLeft: 80
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor: "#01ab9d",
        marginTop: 10
    },
    textSign: {
        color: 'white',
        fontWeight: "bold"
    }
})
