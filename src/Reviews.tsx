import {type ChangeEvent, useState} from 'react';
import avatarIcon from './assets/img/avatarIcon.svg';

type Review = {
    author: string
    title: string
    text: string
    date: string
    rating: number
}

export const Reviews = () => {

    const [reviews, setReviews] = useState<Review[]>([
        {
            author: "Jane Cooper",
            title: "Amazing Product",
            text: "Lorem Ipsum is simply dummy text",
            date: "01/01/2021",
            rating: 4,
        },
        {
            author: "Max Doodle",
            title: "Best choice",
            text: "Various versions have evolved over the years",
            date: "05/23/2021",
            rating: 5,
        },
    ]);

    const [currentReview, setCurrentReview] = useState("");

    const currentReviewHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.currentTarget.value;
        setCurrentReview(newValue);
    };

    const addReviewHandler = () => {
        const newReview = {
            author: "Yauheni Matach",
            title: "Amazing Product",
            text: currentReview,
            date: "07/27/2025",
            rating: 5,
        };
        setReviews([newReview, ...reviews]);
        setCurrentReview("");
    };

    return (
        <div>
            <div className="review">
                <h3>Reviews {reviews.length}</h3>
                <textarea value={currentReview} onChange={currentReviewHandler} placeholder="Provide your text..."></textarea>
                <button onClick={addReviewHandler}>Send review</button>
            </div>
            <div>
                {reviews.map((r) => {
                    return (
                        <div className="reviewField">
                            <div className="info">
                                <div className="user">
                                    <img src={avatarIcon} alt="" />
                                    <div className="infoBox">
                                        <p className="author">{r.author}</p>
                                        <p className="rating">{r.rating} Rating</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="date">{r.date}</p>
                                </div>
                            </div>

                            <div className="content">
                                <p className="title">{r.title}</p>
                                <p>{r.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
