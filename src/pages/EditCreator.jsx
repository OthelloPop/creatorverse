import React from 'react';
import Card from '../components/Card'
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {supabase} from '../client'
import { Outlet, Link } from "react-router-dom";

const EditCreator = ({data}) => {
    const {id} = useParams();
    const navigate = useNavigate()

    const [creator, setCreator] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single()

            if (error) {
                navigate('/', { replace: true })
            }
            if (data) {
                setCreator(data.name)
                setUrl(data.url)
                setDescription(data.description)
                console.log(data)
                console.log(creator)
                console.log(url)
                console.log(description)

            }
        }
        fetchCreator()
    }, [id, navigate])

    const deletePost = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('creators')
        .delete()
        .eq('id', id); 
    
        window.location = "/";
    }

    const updatePost = async (event) => {
        
        event.preventDefault(); 

        await supabase
            .from('creators')
            .update({name: creator, url: url, description: description})
            .eq('id', id);

            window.location = "/";   
    }


    return (
        <div>Edit Creator Page
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />

            <h1>Edit Creator Page</h1>
            <Link to="/">Return</Link>

            <label for="text">Name</label>

            

          <input type="text" id="creator" name="creator" placeholder="Text" defaultValue={creator} onChange={(e) => setCreator(e.target.value)}/>
          <small>Edit this Creator's name/username.</small>

          <label for="text">URL</label>
          <input type="text" id="url" name="url" placeholder="Text" defaultValue={url} onChange={(e) => setUrl(e.target.value)}/>
          <small>Edit this Creator's URL.</small>

          <label for="text">Description</label>
          <input type="text" id="description" name="description" placeholder="Text" defaultValue={description} onChange={(e) => setDescription(e.target.value)}/>
          <small>Provide a new description for this Creator.</small>

          <input type="submit" value="Delete" style={{backgroundColor: '#D0342C' }}onClick={deletePost} />
          <input type="submit" value="Submit" onClick={updatePost} />

        </div>

    );
};

export default EditCreator;