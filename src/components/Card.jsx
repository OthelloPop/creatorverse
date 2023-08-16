import React from "react";
import { Link } from 'react-router-dom'

const Card = (props) => {
    console.log(props)

    return (
        <div className="card" style={{aspectRatio: 3/2}}>
            

            <h2 className="name">{props.name}</h2>
            <p className="description">{props.description}</p>

            <div className="btn-container" >

                <Link to={'ViewCreator/'+props.id} data={props} >
                    <button className="moreInfo">🔍</button>
                </Link>

                <Link to={'EditCreator/'+props.id} data={props} >
                    <button className = "edit">✏️</button>
                </Link>

            </div>

        </div>
    );
}

export default Card;