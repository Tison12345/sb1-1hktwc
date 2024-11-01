import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Product } from '../types/types';

interface PurchaseHistoryItemProps {
  product: Product;
  quantity: number;
  date: Date;
  totalPrice: number;
}

export default function PurchaseHistoryItem({ 
  product, 
  quantity, 
  date, 
  totalPrice 
}: PurchaseHistoryItemProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${totalPrice.toFixed(2)}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailText}>Qty: {quantity}</Text>
        <Text style={styles.detailText}>{date.toLocaleDateString()}</Text>
      </View>
    </View>
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
  details: {
    flexDirection: 'row',
    marginTop: 8,
  },
  detailText: {
    color: '#a3a3a3',
    marginRight: 16,
  },
});