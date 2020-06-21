import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import api from "../../services/api";
export default function Incidents() {
  // cosntantes
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //funçao de navegação
  function navigationToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }

  //função integrando a API

  async function loadIncidents() {
    if (loading) {
      return;
    }
    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);
    const response = await api.get("incidents", { params: { page } });

    setIncidents([...incidents, ...response.data]); //usando spred, ao inves de sobrescrever e perder o anterior, sobrescreve tudo, recursivo
    setTotal(response.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }
  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Total de {total} casos</Text>
      </View>

      <Text style={styles.title}>Bem vindo</Text>
      <Text style={styles.title}>Escolha um dos casos abaixo</Text>
      <FlatList
        style={styles.incidentList}
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}> ONG:</Text>
            <Text style={styles.incidentValue}> {incident.name} </Text>
            <Text style={styles.incidentValue}>CASO: </Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>
            <Text style={styles.incidentValue}> VALOR:</Text>
            <Text style={styles.incidentValue}>{incident.value}</Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigationToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
