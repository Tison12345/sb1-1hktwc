import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ProductCardProps {
  name: string;
  sustainabilityScore: number;
  healthScore: number;
  price: number;
  onPress: () => void;
}

export default function ProductCard({ 
  name, 
  sustainabilityScore, 
  healthScore, 
  price, 
  onPress 
}: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
      <View style={styles.scores}>
        <View style={styles.scoreItem}>
          <MaterialCommunityIcons name="leaf" size={20} color="#22c55e" />
          <Text style={styles.scoreText}>{sustainabilityScore.toFixed(1)}</Text>
        </View>
        <View style={styles.scoreItem}>
          <MaterialCommunityIcons name="heart" size={20} color="#22c55e" />
          <Text style={styles.scoreText}>{healthScore.toFixed(1)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#262626',
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: '#22c55e',
    fontSize: 16,
  },
  scores: {
    flexDirection: 'row',
    marginTop: 8,
  },
  scoreItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  scoreText: {
    color: '#22c55e',
    marginLeft: 4,
  },
});