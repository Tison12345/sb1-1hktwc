import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { products } from '../data/mockData';

export default function ProductDetailScreen({ route }) {
  const { productId } = route.params;
  const product = products.find(p => p.id === productId);

  if (!product) return null;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      
      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.description}>{product.description}</Text>
      
      <View style={styles.scoreContainer}>
        <View style={styles.scoreItem}>
          <MaterialCommunityIcons name="leaf" size={24} color="#22c55e" />
          <Text style={styles.scoreLabel}>Sustainability</Text>
          <Text style={styles.scoreValue}>{product.sustainabilityScore.toFixed(1)}</Text>
        </View>
        <View style={styles.scoreItem}>
          <MaterialCommunityIcons name="heart" size={24} color="#22c55e" />
          <Text style={styles.scoreLabel}>Health</Text>
          <Text style={styles.scoreValue}>{product.healthScore.toFixed(1)}</Text>
        </View>
      </View>
      
      <Text style={styles.sectionTitle}>Environmental Impact</Text>
      <Text style={styles.description}>{product.environmentalImpact}</Text>
      
      <Text style={styles.sectionTitle}>Health Impact</Text>
      <Text style={styles.description}>{product.healthImpact}</Text>
      
      <Text style={styles.sectionTitle}>Ingredients</Text>
      {product.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredient}>• {ingredient}</Text>
      ))}
      
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name="cart" size={24} color="white" />
        <Text style={styles.buttonText}>Add to Cart - ${product.price.toFixed(2)}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#22c55e',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    color: '#a3a3a3',
    marginBottom: 16,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#262626',
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
  },
  scoreItem: {
    alignItems: 'center',
  },
  scoreLabel: {
    color: '#22c55e',
    marginTop: 4,
  },
  scoreValue: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  ingredient: {
    color: '#a3a3a3',
    marginLeft: 8,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#22c55e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
    marginBottom: 32,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});