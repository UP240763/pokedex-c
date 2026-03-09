import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function PokemonDetailsScreen() {
  const params = useLocalSearchParams(); //param es lo que aparce en la barra del buscador
  //con useLocal... lo que se hace es sacar un parametro de nuestra informacion. En este caso fue del atributo "name"
  //en la parte del Text se le determina de que atributo sera el parametro a regresar
  return (
    <View>
      <Text>{params.name}</Text>
    </View>
  );
}
