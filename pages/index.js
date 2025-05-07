// pages/index.js
import React from "react";
import Layout from "../components/Layout";
import FilterSidebar from "../components/FilterSidebar";
import ProductGrid from "../components/ProductGrid";
import styles from "../styles/PLP.module.css";

// Fetch a list of products—give each a real image under public/images/
async function fetchProducts() {
  const images = [
    "backpack.jpg",
    "toy.jpg",
    "tag.jpg",
    "hat.jpg",
    "backpack2.jpg",
    "toy2.jpg",
    "bag1.jpg",
    "bag2.jpg",
    "pouch1.jpg",
    "pouch2.jpg",
    "bag3.jpg",
    "bag4.jpg",
  ];

  return images.map((file, idx) => ({
    id: idx,
    name: `Product ${idx + 1}`,
    image: `/images/${file}`,
    outOfStock: idx % 4 === 1,
  }));
}

export async function getServerSideProps() {
  const products = (await fetchProducts()) || [];
  return { props: { products } };
}

export default function PLP({ products }) {
  return (
    <Layout>
      {/* 1) Discover header, centered */}
      <section className={styles.header}>
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </section>

      {/* 2) Items count + sort dropdown */}
      <div className={styles.controlsRow}>
        <div>
          3425 ITEMS &lt; <span className={styles.hideFilter}>Hide filter</span>
        </div>
        <select>
          <option>Recommended</option>
          <option>Newest</option>
          <option>Price: Low → High</option>
        </select>
      </div>

      {/* Two‐column layout: sidebar + product grid */}
      <div className={styles.layout}>
        <FilterSidebar />
        <ProductGrid products={products} />
      </div>
    </Layout>
  );
}
