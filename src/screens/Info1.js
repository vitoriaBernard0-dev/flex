import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Info1({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Nós crescemos, e você pode crescer com a gente!
            </Text>
            <Image
                source={require('../assets/local.png')}
                style={styles.image}
                resizeMode="contain"
            />

            <Pressable
                style={[styles.botao, { width: 250, height: 60 }]} // Ajustando o tamanho do botão
                onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>Voltar para Suporte</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        padding: 20,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        backgroundColor: '#34A5DE',
    },
    textoBotao: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    image: {
        width: 300, // Aumentando o tamanho da imagem
        height: 300, // Aumentando o tamanho da imagem
        marginBottom: 20, // Espaçamento inferior entre a imagem e o botão
    },
    texto: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});
