import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router';

export type ProductType = {
    _id: string
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
    createdAt: string
    updatedAt: string
    __v: number
}

export const BestSellers = () => {

        const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        axios.get("https://masterclass.kimitsu.it-incubator.io/api/products")
        .then((result) => setProducts(result.data));
    }, []);

    return (
        <div className="bestSellers">
            <h2>BestSellers</h2>
            <div className="cards">
                {
                    products.map((element) => {
                        return (
                            <div className="card" key={element.id}>
                                <img src={element.image} alt="img"/>
                                <h4>{element.title}</h4>
                                <p className="price">$ {element.price}</p>
                                <Link to={`/product/${element.id}`}>Show more</Link>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};