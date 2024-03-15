import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
              <Image
                    source={require('../assets/logosSem.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
           
            <View style={styles.content}>
              
                <Text style={styles.text}>
                    Fundada com a missão de proporcionar soluções de transporte personalizadas e eficientes, a Flex oferece uma ampla gama de serviços para atender às necessidades variadas de seus clientes.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'cover',
        marginRight: 10,
    },
    text: {
        fontSize: 17,
        alignContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: 2,
        marginRight: 2,
    },

})