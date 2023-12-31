import React from "react"; 
import {Link} from "react-router-dom";
import Recipe from "../Recipe";

// interface Recipe {
//     name: string;
//     image: string;
//     desc: string;
//     link: string;
// }

function RecipePreview(props: Recipe) { // name of component should always mirror name of file
    return (
    // <div className="flex container">
    //     <h2><Link to={props.link}>{props.name} </Link> </h2>
    //     <img src={props.image}/>
    //     <p>{props.desc}</p>
    // </div>
    <div className="card" style={{width: '18rem', margin: "25px 50px 75px"}}>
        <img className="card-img-top" src={props.image} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.desc}</p>
            <Link to={"/recipe/"+props.name}className="btn btn-primary">See details</Link>
        </div>
    </div>   

    );
}



export default RecipePreview;