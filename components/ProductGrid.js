// components/ProductGrid.js
import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/PLP.module.css';

// Destructure with a default value:
export default function ProductGrid({ products = [] }) {
  return (
    <div className={styles.productGrid}>
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
