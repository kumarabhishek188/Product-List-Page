// components/ProductCard.js
import React, { useState } from 'react';

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', display: 'block' }}
        />
        {product.outOfStock && (
          <span style={{
            position: 'absolute',
            top: 0,
            left: 0,
            background: 'rgba(255,255,255,0.8)',
            padding: '.25rem .5rem',
            fontSize: '.8rem'
          }}>
            OUT OF STOCK
          </span>
        )}
        {product.isNew && (
          <span style={{
            position: 'absolute',
            top: 0,
            right: 0,
            background: 'rgba(0,0,0,0.8)',
            color: '#fff',
            padding: '.25rem .5rem',
            fontSize: '.8rem'
          }}>
            NEW PRODUCT
          </span>
        )}
      </div>

      {/* Product name */}
      <h4 style={{ margin: '.5rem 0' }}>{product.name}</h4>

      {/* Pricing prompt + wishlist button */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        fontSize: '.9rem',
        color: '#666'
      }}>
        <span>Sign in or Create an account to see pricing</span>
        <button
          onClick={() => setLiked(!liked)}
          aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.2rem',
            lineHeight: 1
          }}
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
}
