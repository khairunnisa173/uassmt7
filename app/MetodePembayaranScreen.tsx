import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type Transaction = {
  id: number;
  namaPelanggan: string;
  pembayaran: 'tunai' | 'transfer';
  statusPembayaran: 'lunas' | 'belum_lunas';
};

const HomeScreen: React.FC = () => {
  const [namaPelanggan, setNamaPelanggan] = useState<string>('');
  const [pembayaran, setPembayaran] = useState<'tunai' | 'transfer'>('tunai');
  const [statusPembayaran, setStatusPembayaran] = useState<'lunas' | 'belum_lunas'>('belum_lunas');
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleSave = () => {
    if (namaPelanggan.trim() === '') {
      Alert.alert('Error', 'Nama pelanggan tidak boleh kosong!');
      return;
    }

    const newTransaction: Transaction = {
      id: transactions.length + 1,
      namaPelanggan,
      pembayaran,
      statusPembayaran,
    };

    setTransactions([...transactions, newTransaction]);
    Alert.alert('Sukses', 'Transaksi berhasil disimpan');
    setNamaPelanggan('');
  };

  const renderTransaction = ({ item }: { item: Transaction }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>Nama: {item.namaPelanggan}</Text>
      <Text style={styles.cardText}>Pembayaran: {item.pembayaran}</Text>
      <Text style={styles.cardText}>Status: {item.statusPembayaran}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aplikasi Laundry</Text>

      <TextInput
        placeholder="Nama Pelanggan"
        value={namaPelanggan}
        onChangeText={setNamaPelanggan}
        style={styles.input}
      />

      <Text style={styles.label}>Metode Pembayaran</Text>
      <Picker
        selectedValue={pembayaran}
        onValueChange={(value) => setPembayaran(value as 'tunai' | 'transfer')}
        style={styles.picker}
      >
        <Picker.Item label="Tunai" value="tunai" />
        <Picker.Item label="Transfer" value="transfer" />
      </Picker>

      <Text style={styles.label}>Status Pembayaran</Text>
      <Picker
        selectedValue={statusPembayaran}
        onValueChange={(value) => setStatusPembayaran(value as 'lunas' | 'belum_lunas')}
        style={styles.picker}
      >
        <Picker.Item label="Lunas" value="lunas" />
        <Picker.Item label="Belum Lunas" value="belum_lunas" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Simpan</Text>
      </TouchableOpacity>

      <Text style={styles.subHeader}>Daftar Transaksi</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTransaction}
        ListEmptyComponent={<Text style={styles.emptyText}>Belum ada transaksi</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 10, textAlign: 'center' },
  subHeader: { fontSize: 18, fontWeight: 'bold', color: '#333', marginTop: 20 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginBottom: 10, backgroundColor: '#fff' },
  label: { fontSize: 14, color: '#555', marginBottom: 5, fontWeight: 'bold' },
  picker: { backgroundColor: '#fff', marginBottom: 10 },
  button: { backgroundColor: '#4CAF50', paddingVertical: 10, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  card: { backgroundColor: '#fff', borderRadius: 8, padding: 10, marginVertical: 5, elevation: 3 },
  cardText: { fontSize: 14, color: '#333' },
  emptyText: { fontSize: 14, color: '#888', textAlign: 'center', marginTop: 20 },
});

export default HomeScreen;
