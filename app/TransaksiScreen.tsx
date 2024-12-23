import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

const Transaksi: React.FC = () => {
  const [form, setForm] = useState({
    customer_id: '',
    metode_pembayaran_id: '',
    paket_id: '',
    paket_laundry: '',
    tanggal_masuk: '',
    tanggal_keluar: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    Alert.alert('Data Transaksi', JSON.stringify(form, null, 2));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Form Transaksi Laundry</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Customer ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Customer ID"
          value={form.customer_id}
          onChangeText={(value) => handleInputChange('customer_id', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Metode Pembayaran</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Metode Pembayaran ID"
          value={form.metode_pembayaran_id}
          onChangeText={(value) => handleInputChange('metode_pembayaran_id', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Paket ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Paket ID"
          value={form.paket_id}
          onChangeText={(value) => handleInputChange('paket_id', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Paket Laundry</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Nama Paket Laundry"
          value={form.paket_laundry}
          onChangeText={(value) => handleInputChange('paket_laundry', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Tanggal Masuk</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={form.tanggal_masuk}
          onChangeText={(value) => handleInputChange('tanggal_masuk', value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Tanggal Keluar</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={form.tanggal_keluar}
          onChangeText={(value) => handleInputChange('tanggal_keluar', value)}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Simpan Transaksi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Transaksi;
