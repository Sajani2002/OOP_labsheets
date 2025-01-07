import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BakeryProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/wordpress/wp-json/wp/v2/bakery_product?_embed')
            .then(response => {
                console.log('Fetched data:', response.data); // Log fetched data
                if (Array.isArray(response.data)) {
                    setProducts(response.data);
                } else {
                    console.error('Expected an array of products but received:', response.data);
                }
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            {products.length === 0 ? (
                <p>Loading products...</p>
            ) : (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <h2>{product.title.rendered}</h2>
                            {product._embedded && product._embedded['wp:featuredmedia'] && (
                                <img
                                    src={product._embedded['wp:featuredmedia'][0].source_url}
                                    alt={product.title.rendered}
                                    style={{ maxWidth: '100%', height: 'auto' }} // Adjust image styling
                                />
                            )}
                            <p dangerouslySetInnerHTML={{ __html: product.excerpt.rendered }} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BakeryProducts;
