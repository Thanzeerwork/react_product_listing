import React, { useState } from 'react';
import products from '../MockData/Productdata';
import ProductCard from '../Components/ProductCard';
import Header from '../Components/Header';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('Category');
    const [sorting, setSorting] = useState('Sort');

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === 'Category' || product.category.toLowerCase() === category.toLowerCase();
        return matchesSearch && matchesCategory;
    })
        .sort((a, b) => {
            if (sorting === 'LH') {
                return a.price - b.price;
            } else if (sorting === 'HL') {
                return b.price - a.price;
            } else if (sorting === 'Sort') {
                return 0;
            }
            
        });

    return (
        <>
            <Header
                category={category}
                setCategory={setCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                sorting={sorting}
                setSorting={setSorting}
            />
            <div className="grid grid-cols-3 gap-5 ml-20 mt-4 ">
                {
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} products={product} />
                    ))
                }
                {filteredProducts.length === 0 && (
                    <div className="col-span-3 text-center text-gray-500">No products found.</div>
                )}
            </div>
        </>
    );
};

export default Home;
