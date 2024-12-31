import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

type Customer = {
  id: string;
  name: string;
  phone: string;
  address: string;
};

const API_URL = 'http://127.0.0.1:8000/api/customer/';

const CustomerScreen: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  // Fetch customers from the API
  const fetchCustomers = async () => {
    try {
      const response = await axios.get(API_URL);
      setCustomers(response.data);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch customers');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Add a new customer
  const handleAdd = async () => {
    try {
      const newCustomer = {
        name: 'launa',
        phone: '0000000000',
        address: 'pakong',
      };
      const response = await axios.post(API_URL, newCustomer);
      setCustomers([...customers, response.data]);
    } catch (error) {
      Alert.alert('Error', 'Failed to add customer');
      console.error(error);
    }
  };

  // Edit a customer
  const handleEdit = async (id: string) => {
    try {
      const updatedCustomer = {
        name: 'Updated Name',
        phone: '1111111111',
        address: 'Updated Address',
      };
      await axios.put(`${API_URL}${id}/`, updatedCustomer);
      setCustomers((prev) =>
        prev.map((customer) => (customer.id === id ? { ...customer, ...updatedCustomer } : customer))
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to edit customer');
      console.error(error);
    }
  };

  // Delete a customer
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API_URL}${id}/`);
      setCustomers((prev) => prev.filter((customer) => customer.id !== id));
    } catch (error) {
      Alert.alert('Error', 'Failed to delete customer');
      console.error(error);
    }
  };

  const renderItem = ({ item }: { item: Customer }) => (
    <View style={styles.card}>
      <Ionicons name="person-circle-outline" size={50} color="#4CAF50" style={styles.icon} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.phone}>
          <Ionicons name="call-outline" size={16} /> {item.phone}
        </Text>
        <Text style={styles.address}>
          <Ionicons name="home-outline" size={16} /> {item.address}
        </Text>
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={() => handleEdit(item.id)}>
          <MaterialIcons name="edit" size={24} color="#FFC107" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <MaterialIcons name="delete" size={24} color="#F44336" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Pelanggan</Text>
      <FlatList
        data={customers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Tambah</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 80,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  phone: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
