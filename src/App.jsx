import './App.css'
import Card from './components/Card'
import { useState } from 'react';
import { supabase } from './client';


import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';


function App() {
  
  const descr = ''

  const posts = [
      
  ]


  return (
    <div className ="App" >

      <Routes>
        <Route path="/" element={<ShowCreators data={posts}/>} />
        <Route path="/ViewCreator/:id" element ={<ViewCreator data={posts} />} />
        <Route path="/AddCreator" element ={<AddCreator />} />
        <Route path="/EditCreator/:id" element ={<EditCreator data={posts} />} />

      </Routes>

    </div>
  )
}

export default App
