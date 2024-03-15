import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Blog({ navigation }) {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Info1')}>
                <Text style={styles.textoBotao}>Onde atuamos?</Text>
            </Pressable>
            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Info2')}>
                <Text style={styles.textoBotao}>Valores</Text>
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
        width: 250, // Aumento do tamanho dos botões
        height: 60, // Aumento do tamanho dos botões
        backgroundColor: '#34A5DE', // Cor azul
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        marginBottom: 20, // Espaçamento inferior entre os botões
    },
    textoBotao: {
        color: 'white', // Texto branco
        fontSize: 20,
        textAlign: 'center', // Alinhamento centralizado do texto
    },
});
