import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Products from './Products.jsx'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
        </Routes>
    )
}
