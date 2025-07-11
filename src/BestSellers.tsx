import axios from 'axios';
import {useEffect, useState} from 'react';

export const BestSellers = () => {

    interface ProductType {
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

    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        axios.get("https://masterclass.kimitsu.it-incubator.io/api/products")
        .then((result) => {
            setProducts(result.data);
        })
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
                                <button>Show more</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};