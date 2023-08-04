import React, { Suspense } from 'react'
import {Routes, Route } from 'react-router-dom';
import Layout from './shared/Layout';
import Home from '../pages/home/index'
import About from '../pages/about/index'

const route = () => {
  return (
    <Suspense fallback={<h1>loading</h1>}>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                </Route>
            </Routes>
        </Suspense>
  )
}

export default route