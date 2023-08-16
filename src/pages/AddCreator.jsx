import React from 'react';
import {useState} from 'react';
import {supabase} from '../client'
import { Outlet, Link } from "react-router-dom";

const AddCreator = () => {

    const [post, setPost] = useState({title: "", url: "", description: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;

        console.log("Name: ", name, " value: ", value);
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
       
    }

    const createPost = async (event) => {
        
        event.preventDefault(); 

        await supabase
            .from('creators')
            .insert({name: post.title, url: post.url, description: post.description})
            .select();

            window.location = "/";   
    }

    return (
        <div>

        
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />

            <h1>Add Creator Page</h1>
            <Link to="/">Return</Link>
            <p></p>
            <label for="text">Name</label>

          <input type="text" id="title" name="title" placeholder="Text" value={post.title} onChange={handleChange} />
          <small>Enter the Creator's name/username.</small>

          <label for="text">URL</label>
          <input type="text" id="url" name="url" placeholder="Text" value={post.url} onChange={handleChange} />
          <small>Enter the Creator's URL.</small>

          <label for="text">Description</label>
          <input type="text" id="description" name="description" placeholder="Text" value={post.description} onChange={handleChange} />
          <small>Provide a brief description of the Creator.</small>

        {/*
          <label for="file"
            >Upload Creator Image
            <input type="file" id="file" name="imageURL"  onChange={handleChange}/>
          </label>
        */}

          <input type="submit" value="Submit" onClick={createPost} />

        </div>
    );
};

export default AddCreator;