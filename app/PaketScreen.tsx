import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { FC } from 'react';

type Package = {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: string; // Ubah tipe menjadi string untuk URL gambar
};

const packages: Package[] = [
  {
    id: '1',
    name: 'Paket Kilat',
    description: 'Proses cepat, selesai dalam 1 hari.',
    price: 'Rp 20.000/Kg',
    icon:'https://cdn3.iconfinder.com/data/icons/laundry-dry-cleaning/64/461_laundry-express-cleaning-dry-shirts-1024.png', // Ganti dengan URL gambar online
  },
  {
    id: '2',
    name: 'Paket Komplit',
    description: 'Cuci, setrika, dan lipat dengan rapi.',
    price: 'Rp 15.000/Kg',
    icon: 'https://img.freepik.com/premium-vector/laundry-service-concept_24877-15845.jpg?w=740', // Ganti dengan URL gambar online
  },
  {
    id: '3',
    name: 'Paket Premium',
    description: 'Layanan khusus dengan bahan pencuci premium.',
    price: 'Rp 30.000/Kg',
    icon: 'https://i.pinimg.com/736x/ef/15/94/ef159428f807d5e7acf69496bde61a37.jpg', // Ganti dengan URL gambar online
  },
];

const LaundryPackages: FC = () => {
  const renderPackage = ({ item }: { item: Package }) => (
    <TouchableOpacity style={styles.packageCard}>
      <Image source={{ uri: item.icon }} style={styles.packageIcon} /> {/* Ubah menjadi URI */}
      <View style={styles.packageInfo}>
        <Text style={styles.packageName}>{item.name}</Text>
        <Text style={styles.packageDescription}>{item.description}</Text>
        <Text style={styles.packagePrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paket Laundry</Text>
      <FlatList
        data={packages}
        renderItem={renderPackage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.packageList}
      />
    </View>
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
  packageList: {
    paddingBottom: 10,
  },
  packageCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
  },
  packageIcon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  packageInfo: {
    flex: 1,
  },
  packageName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  packageDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  packagePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
  },
});

export default LaundryPackages;
