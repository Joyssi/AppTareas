    import React, { useState } from 'react';
    import { View, TextInput, Button, StyleSheet } from 'react-native';

    export default function TareaInput({ agregarTarea }) {
    const [texto, setTexto] = useState('');

    const manejarCambioTexto = (text) => {
        setTexto(text);
    };

    const manejarAgregarTarea = () => {
        // Verifica que el texto no esté vacío
        if (texto.trim()) {
        agregarTarea(texto);
        setTexto('');  // Limpiar el campo después de agregar
        }
    };

    return (
        <View style={styles.contenedor}>
        <TextInput
            style={styles.input}
            placeholder="Nueva tarea"
            value={texto}
            onChangeText={manejarCambioTexto}
        />
        <Button title="Agregar" onPress={manejarAgregarTarea} />
        </View>
    );
    }

    const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#1630BE',
        marginRight: 10,
        padding: 8,
    },
});
