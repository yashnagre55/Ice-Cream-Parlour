import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ prod }) => {
    return (
        <div className="card pp-card">
            <Link to={`/details/${prod.id}`} className='pp-card-img-link'>
                <img src={prod.image} className="card-img-top custom_img" alt={prod.name} />
            </Link>
            <div className="card-body pp-card-body">
                <h5 className="card-title pp-card-title">{prod.name}</h5>
                <p className="card-text pp-card-ingredient">{prod.ingredient}</p>
                <p className="pp-price">&#x20B9; {prod.price}</p>
                <div className="pp-card-actions">
                    <a href="#" className="btn btn-primary me-2">Add to cart</a>
                    <button className='btn btn-warning'>BUY NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Card