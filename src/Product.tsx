import {useEffect, useState} from 'react';
import axios from 'axios';
import type {ProductType} from './BestSellers.tsx';
import rating from './assets/img/rating.svg';
import cartWhite from './assets/img/cartWhite.svg';
import arrowBack from './assets/img/arrowBack.svg';
import {Link, useParams} from 'react-router';

export const Product = () => {

    const [product, setProduct] = useState<ProductType | null>(null);

    const { productId } = useParams();

    useEffect(() => {
        axios.get(`https://masterclass.kimitsu.it-incubator.io/api/products/${productId}`)
            .then((result) => setProduct(result.data));
    }, []);

    if (product === null) {
        return <h2>Продукт ещё грузится...</h2>
    }

    return (
        <div>
            <div className="arrowBack">
                <Link to={"/"}>
                    <img src={arrowBack} alt="arrowBack" />
                    Back to Best Seller
                </Link>
            </div>

            <div className="product">
                <img src={product.image} alt=""/>
                <div className="info">
                    <p className="title">{product.title}</p>
                    <p className="price">$ {product.price}</p>
                    <div className="rating">
                        <p>Rating: {product.rating.rate}</p>
                        <img src={rating} alt=""/>
                    </div>
                    <div className="category">
                        <span>Category:</span>
                        <p>{product.category}</p>
                    </div>
                    <p className="description">{product.description}</p>
                    <button>
                        <img src={cartWhite} alt=""/>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}