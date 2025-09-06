import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

type Participante = {
  nombre: string;
  pagado: boolean;
  debe: number;
  ganado: number;
};

const iniciales: Participante[] = [
  { nombre: 'Ángel', pagado: true, debe: 0, ganado: 50 },
  { nombre: 'Luis', pagado: false, debe: 20, ganado: 0 },
];

export default function ParticipantesScreen() {
  const [participantes, setParticipantes] = useState(iniciales);

  const actualizarCampo = (i: number, campo: keyof Participante, valor: any) => {
    const nuevos = [...participantes];
    nuevos[i][campo] = valor;
    setParticipantes(nuevos);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Participantes</Text>
      {participantes.map((p, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.nombre}>{p.nombre}</Text>
          <View style={styles.row}>
            <Text>Pagado:</Text>
            <Switch
              value={p.pagado}
              onValueChange={(v) => actualizarCampo(i, 'pagado', v)}
            />
          </View>
          <View style={styles.row}>
            <Text>Debe: $</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={p.debe.toString()}
              onChangeText={(v) => actualizarCampo(i, 'debe', parseInt(v) || 0)}
            />
          </View>
          <View style={styles.row}>
            <Text>Ganado: $</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={p.ganado.toString()}
              onChangeText={(v) => actualizarCampo(i, 'ganado', parseInt(v) || 0)}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  card: { marginBottom: 20, padding: 10, backgroundColor: '#f9f9f9', borderRadius: 8 },
  nombre: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 5, width: 80, marginLeft: 5 }
});