import React from 'react'
import Card from './Card'

const Products = ({ products }) => {
    return (
        <>
            <h2 className="pp-section-title">Our Flavours</h2>
            <div className="container py-4">
                <div className="row g-4">
                    {
                        products.map((p) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={p.id}>

                                <Card prod={p} />

                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Products