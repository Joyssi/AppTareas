    import React from 'react';
    import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
    import { AntDesign } from '@expo/vector-icons';

    export default function TareaItem({ tarea, eliminarTarea, toggleCompletada }) {
    return (
        <View style={styles.item}>
        {/* Hacer clic en el texto para marcar la tarea como completada */}
        <TouchableOpacity onPress={() => toggleCompletada(tarea.id)}>
            <Text style={[styles.texto, tarea.completada ? styles.completada : null]}>
            {tarea.texto}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => eliminarTarea(tarea.id)}>
            <AntDesign name="close" style={styles.iconoEliminar} />
        </TouchableOpacity>
        </View>
    );
    }

    const styles = StyleSheet.create({
    item: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    texto: {
        fontSize: 18,
        color: '#333',
    },
    completada: {
        textDecorationLine: 'line-through',  // Estilo para marcar como completada
        color: '#1630BE',
    },
    iconoEliminar: {
        fontSize: 24,
        color: 'red',
    },
});
