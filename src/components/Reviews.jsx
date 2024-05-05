import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import './css/Reviews.css';

const Reviews = ({ id, reviews, onAddReview }) => {
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState({});

  const handleRating = (rate) => {
    setRating(rate);
    if (errors.rating) {
      setErrors((prevErrors) => ({ ...prevErrors, rating: undefined }));
    }
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    if (errors.userName) {
      setErrors((prevErrors) => ({ ...prevErrors, userName: undefined }));
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (errors.message) {
      setErrors((prevErrors) => ({ ...prevErrors, message: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!userName) {
      errors.userName = 'Username is required';
    }

    if (!rating) {
      errors.rating = 'Rating is required';
    }

    if (!message) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      onAddReview(id, { userName, message, rating });
      setUserName('');
      setMessage('');
      setRating(0);
    }
  };

  return (
    <div className="reviews-container">
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-content">
            <div className="review-img">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path>
              </svg>
            </div>
            <div className="review-item">
              <p className="rev-username">{review.userName}</p>
              <Rating
                size={20}
                iconsCount={review.rating}
                fillColor='#ffd700'
                emptyColor='#ffd700'
                className="rev-rating"
              />
              <p className="rev-message" style={{color: 'rgb(71, 71, 71)'}}>{review.message}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="add-review-form">
        <h1>Add your Review</h1>

        <label htmlFor="Rating" className="form-label">Rating : 
        <Rating
          onClick={handleRating}
          ratingValue={rating}
          size={20}
          fillColor='#ffd700'
          emptyColor='#e0e0e0'
        />
        {errors.rating && <div style={{ color: 'red' }}>{errors.rating}</div>}

        </label>

        <label htmlFor="message" className="form-label">Message </label>
        <textarea
          value={message}
          onChange={handleMessageChange}
          className="form-control"
        />
        {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}

        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          value={userName}
          onChange={handleUserNameChange}
          className="form-control"
        />
        {errors.userName && <div style={{ color: 'red' }}>{errors.userName}</div>}

        <button type="submit" className="submit-button">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Reviews;
