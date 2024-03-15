import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function About() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.content}>
                    <Image
                        source={require('../assets/logosSem.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Aplicativo de mobilidade particular, que se adequa à sua rotina, no seu tempo e exigências.
                        </Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Image
                        source={require('../assets/kidsSem.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <View style={[styles.textContainer, styles.textContainerRight]}>
                        <Text style={styles.text}>
                            Transporte particular personalizado para crianças, adolescentes e jovens.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', // Cor de fundo branca
        paddingHorizontal: 20, // Adicionando padding horizontal para espaçamento nas bordas
    },
    row: {
        flexDirection: 'row', // Alinhamento dos itens em linha
        marginBottom: 30, // Espaçamento inferior entre cada par de imagem e texto
        alignItems: 'center', // Centralizando os itens verticalmente
        backgroundColor: '#D3D3D3',
        borderRadius: 3,
    },
    content: {
        flex: 1, // Ocupar o espaço disponível na linha
    },
    textContainer: {
        marginLeft: 20, // Espaçamento à esquerda para separar a imagem do texto
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#34A5DE', // Cor do título
        marginBottom: 10, // Espaçamento inferior para separar o título das imagens
    },
    image: {
        width: '100%', // Tamanho da imagem
        height: 200, // Tamanho da imagem
    },
    text: {
        fontSize: 16,
        marginLeft: 4,
        marginRight: 4,
    },
});

