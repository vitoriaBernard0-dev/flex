import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Info2({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.textRow}>
                <Text style={styles.text}>
                    <Text style={styles.title}>Segurança em Primeiro Lugar:</Text> Comprometimento inabalável com a segurança dos passageiros e motoristas.{'\n'}
                    <Text style={styles.title}>Excelência no Atendimento:</Text> Oferecer um serviço de transporte personalizado e de alta qualidade.{'\n'}
                    <Text style={styles.title}>Inovação Contínua:</Text> Buscar constantemente novas soluções e tecnologias para melhorar a experiência do cliente.{'\n'}
                    <Text style={styles.title}>Respeito e Diversidade:</Text> Valorizar e respeitar a diversidade de clientes, motoristas e comunidades atendidas.{'\n'}
                    <Text style={styles.title}>Responsabilidade Social e Ambiental:</Text> Promover práticas sustentáveis e contribuir positivamente para as comunidades locais.{'\n'}
                    <Text style={styles.title}>Transparência e Integridade:</Text> Manter altos padrões éticos e de transparência em todas as operações.{'\n'}
                    <Text style={styles.title}>Facilidade e Conveniência:</Text> Oferecer um serviço de transporte acessível, conveniente e fácil de usar.{'\n'}
                    <Text style={styles.title}>Parceria e Colaboração:</Text> Construir relacionamentos de parceria sólidos e colaborativos com motoristas, clientes e parceiros comerciais.{'\n'}
                    <Text style={styles.title}>Adaptação e Flexibilidade:</Text> Adaptar-se às necessidades e demandas em constante mudança do mercado e dos clientes.{'\n'}
                    <Text style={styles.title}>Compromisso com a Comunidade:</Text> Contribuir ativamente para o desenvolvimento e bem-estar das comunidades em que operamos.
                </Text>
            </View>
            <Pressable style={[styles.botao, { backgroundColor: '#FCDB58' }]}
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
        paddingHorizontal: 20,
    },
    botao: {
        padding: 20,
        width: 250,
        height: 60,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    textoBotao: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    textRow: {
        backgroundColor: '#34A5DE', // Cor de fundo do row de texto
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    text: {
        color: 'white', // Cor do texto dentro do row
    },
    title: {
        fontWeight: 'bold',
    },
});
