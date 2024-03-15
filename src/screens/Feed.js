import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Feed() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Segurança</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    A segurança é a nossa prioridade na Flex.
                </Text>
            </View>
            <Image
                source={require('../assets/seg.png')}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#34A5DE', // Cor azul para o título em negrito
        marginBottom: 20, // Espaçamento inferior para separar o título da imagem
    },
    textContainer: {
        backgroundColor: '#34A5DE', // Cor azul para o contêiner de texto
        padding: 20, // Adicionando padding para espaçamento interno
        borderRadius: 10, // Borda arredondada
        marginBottom: 20, // Espaçamento inferior para separar o texto da imagem
    },
    text: {
        fontSize: 16,
        textAlign: 'center', // Alinhamento centralizado do texto
        color: 'white', // Cor amarela para o texto
        fontWeight: 'bold',
    },
    image: {
        width: 400, // Tamanho da imagem
        height: 400, // Tamanho da imagem
        marginBottom: 20, // Espaçamento inferior para separar a imagem do texto
    },
});
