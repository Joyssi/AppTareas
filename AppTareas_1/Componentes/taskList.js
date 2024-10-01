import React from 'react';
import { FlatList } from 'react-native';
import TareaItem from './taskItem';

const TareaLista = ({ tareas, eliminarTarea, toggleCompletada }) => {
    return (
        <FlatList
        data={tareas}
        renderItem={({ item }) => (
            <TareaItem
            tarea={item}
            eliminarTarea={eliminarTarea}
            toggleCompletada={toggleCompletada}  // Pasar la función para alternar
            />
        )}
        keyExtractor={(item) => item.id}
        />
    );
    };

export default TareaLista;
