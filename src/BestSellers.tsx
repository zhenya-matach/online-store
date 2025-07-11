export const BestSellers = () => {

    const products = [
        {
            _id: "664476983793ba7564c50ba2",
            id: 8,
            title: "Zip hoodie",
            price: 91.99,
            description: "Этот зип-худи, изготовленный из мягкого и уютного материала, предлагает идеальное сочетание стиля и комфорта для прохладной погоды. Его удобный крой с молнией спереди и капюшоном позволяет легко регулировать тепло, делая его идеальным выбором для повседневного ношения или для слоя одежды во время активных занятий на открытом воздухе.",
            category: "men's clothing",
            image: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/e12cebe8-7d13-4842-98ab-f71e0df6a2f4_8-zip-hoodie.png",
            rating: {
                rate: 4.7,
                count: 120
            },
            createdAt: "2024-05-15T08:47:20.180Z",
            updatedAt: "2024-05-15T12:20:34.117Z",
            __v: 0
        }
    ];

    return (
        <div className="card">
            <img src={products[0].image} alt="img"/>
            <h4>{products[0].title}</h4>
            <p className="price">{products[0].price}</p>
            <button>Show more</button>
        </div>
    );
};