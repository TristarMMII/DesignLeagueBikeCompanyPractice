import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const reviews = [
    {
        id: 1,
        rating: 5,
        text: "ReCycle e-bikes have exceeded my expectations. Not only have I saved money on gas, but my fitness and well-being have also improved. Plus, I'm doing my part to reduce my carbon footprint. I highly recommend ReCycle e-bikes to anyone looking to make a positive change in their transportation habits."
    },
    {
        id: 2,
        rating: 4,
        text: "Amazing experience with ReCycle! The bike quality is outstanding and the customer service is top-notch. I've been using it for my daily commute and it's been a game-changer for my lifestyle."
    },
    {
        id: 3,
        rating: 3,
        text: "Great product overall. The battery life is impressive and the ride is smooth. Would definitely recommend to anyone considering making the switch to electric bikes."
    }
];

export default function ReviewsSection() {
    const [currentReview, setCurrentReview] = useState(0);

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <span
                key={index}
                className={`text-3xl ${index < rating ? "text-black" : "text-gray-300"}`}
            >
                ★
            </span>
        ));
    };

    return (
        <div className="relative bg-white py-16 px-10 flex items-center justify-center flex-col overflow-hidden">
            {/* main content */}
            <div className="relative flex justify-between items-start w-full pl-10">
                {/* Reviews Title */}
                <div className="flex-shrink-0">
                    <h2 className="text-5xl leading-[4rem] text-black font-semibold">
                        Reviews
                    </h2>
                </div>

                {/* Review Content */}
                <div className="flex-1 mx-32 max-w-6xl pl-[20%] min-h-[500px]">
                    {/* Star Rating */}
                    <div className="flex gap-2 mb-8">
                        {renderStars(reviews[currentReview].rating)}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-600 text-3xl leading-relaxed flex items-start mb-6">
                        {reviews[currentReview].text}
                    </p>

                    {/* Navigation Arrows */}
                    <div className="flex gap-6 ">
                        <button
                            onClick={prevReview}
                            aria-label="Previous review"
                            className="p-3"
                        >
                            <FontAwesomeIcon size="2x" icon={faArrowLeft} />
                        </button>

                        <button
                            onClick={nextReview}
                            aria-label="Next review"
                            className="p-3"
                        >
                            <FontAwesomeIcon size="2x" icon={faArrowRight} />
                        </button>
                    </div>
                </div>

                {/* Right side spacer to balance layout */}
                <div className="flex-shrink-0 w-40"></div>
            </div>
        </div>
    );
}