import React, { useState } from "react"

import './StarRating.scss'

function StarRating() {
	const rating = 0
	const [hover, setHover] = useState(0)

	const setRating = (rate: number) => {

	}

	return (
		<div className="star-rating">
			{[...Array(5)].map((star, index) => {
				index += 1
				return (
					<button
						type="button"
						key={index}
						className={index <= (hover || rating) ? "on" : "off"}
						onClick={() => setRating(index)}
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(rating)}
					>
						<span className="star">&#9733;</span>
					</button>
				)
			})}
		</div>
	);
};

export default StarRating