import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const participantes = [
  { nombre: 'Ángel', aciertos: Array(10).fill(false), pagado: true, debe: 0, ganado: 50 },
  { nombre: 'Luis', aciertos: Array(10).fill(false), pagado: false, debe: 20, ganado: 0 },
];

export default function JornadasScreen() {
  const [data, setData] = useState(participantes);

  const toggleAcierto = (i: number, j: number) => {
    const nuevos = [...data];
    nuevos[i].aciertos[j] = !nuevos[i].aciertos[j];
    setData(nuevos);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Jornada 5</Text>
      {data.map((p, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.nombre}>{p.nombre}</Text>
          <View style={styles.row}>
            {p.aciertos.map((x, j) => (
              <TouchableOpacity key={j} onPress={() => toggleAcierto(i, j)} style={[styles.box, x && styles.checked]}>
                <Text>{x ? 'X' : ''}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.finanzas}>
            <Text>Pagado: {p.pagado ? '✅' : '❌'}</Text>
            <Text>Debe: ${p.debe}</Text>
            <Text>Ganado: ${p.ganado}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  card: { marginBottom: 20, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8 },
  nombre: { fontSize: 18, fontWeight: 'bold' },
  row: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 5 },
  box: { width: 30, height: 30, borderWidth: 1, borderColor: '#ccc', justifyContent: 'center', alignItems: 'center', margin: 2 },
  checked: { backgroundColor: '#cce5ff' },
  finanzas: { marginTop: 5 }
});