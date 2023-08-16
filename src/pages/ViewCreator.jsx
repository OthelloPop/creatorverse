import { Outlet, Link } from "react-router-dom";
import React from 'react';
import Card from '../components/Card'
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {supabase} from '../client'

const ViewCreator = ({data}) => {
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

    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />

            View Creator Page
            <h1>View Creator Page</h1>
            <p>Haven't you heard? Graphic design in my passion yo! Anyways, this site might not be the prettiest, but it's here! Here's info about the Creator: </p>

            <h3>{creator}</h3>
            <h4>{url}</h4>
            <h5>{description}</h5>
            <div>
            <Link to="/">Return</Link>
            
            </div>
        </div>


        
    );
};

export default ViewCreator;