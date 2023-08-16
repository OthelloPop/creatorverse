import Card from '../components/Card'
import '../App.css'
import React, { useState, useEffect } from 'react';
import { supabase } from '../client';

import { Outlet, Link } from "react-router-dom";

const ShowCreators = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
        fetchPosts();

    }, [props]);

    const fetchPosts = async () => {
        const {data} = await supabase
        .from('creators')
        .select()
        .order('created_at', {ascending: true})

        setPosts(data)
    }


    return (

        <div>Show Creators Page

            <div className ="header">
                <h1>Creator-Verse</h1>
            </div>
            
            <Link to="/AddCreator">Add Creator</Link>


            <div className="wrapper">
                <div className="ShowCreators">
                    {
                    posts && posts.length > 0 ?
                    posts.map((post, index) => 
                        <Card id={post.id} name={post.name} description={post.description}/>
                    ) : <h2>{'No Creators Yet'}</h2>
                        
                    } 
                </div>

            </div>

        </div>


    );
};

export default ShowCreators;