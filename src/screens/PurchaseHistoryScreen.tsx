import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import PurchaseHistoryItem from '../components/PurchaseHistoryItem';
import { purchaseHistory, products } from '../data/mockData';

export default function PurchaseHistoryScreen() {
  const purchasesWithProducts = purchaseHistory.map(purchase => ({
    ...purchase,
    product: products.find(p => p.id === purchase.productId)!
  }));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recent Purchases</Text>
      
      {purchasesWithProducts.map((purchase) => (
        <PurchaseHistoryItem
          key={purchase.id}
          product={purchase.product}
          quantity={purchase.quantity}
          date={purchase.date}
          totalPrice={purchase.totalPrice}
        />
      ))}
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});