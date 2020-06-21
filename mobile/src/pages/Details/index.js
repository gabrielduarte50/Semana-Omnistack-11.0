import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

import styles from "./styles";
export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute(); //usar a informação da pagina atual
  const incident = route.params.incident;
  const message = `Olá ${incident.name}, no caso ${incident.title}, com o valor de ${incident.value}`;

  function navigateBack() {
    navigation.goBack();
  }
  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Heroi do caso:${incident.title} `,
      recipients: [incident.email],
      body: message,
    });
  }
  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-right" size={16} color="#e02041" />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}> ONG:</Text>
        <Text style={styles.incidentValue}> {incident.name} </Text>
        <Text style={styles.incidentValue}>CASO: </Text>
        <Text style={styles.incidentValue}> {incident.title}</Text>
        <Text style={styles.incidentValue}> VALOR:</Text>
        <Text style={styles.incidentValue}> {incident.value}</Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroDescription}> Entre em contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
