import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="format-list-bulleted" size={24} color="white" />
          <Text style={styles.buttonText}>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('PurchaseHistory')}
        >
          <MaterialCommunityIcons name="history" size={24} color="white" />
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          sustainabilityScore={product.sustainabilityScore}
          healthScore={product.healthScore}
          price={product.price}
          onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#22c55e',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 8,
    fontWeight: 'bold',
  },
});