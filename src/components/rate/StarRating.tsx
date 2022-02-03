import React, { useState } from "react"
import PropTypes from 'prop-types'

import './StarRating.scss'

interface StarRatingProp {
	onRate: Function
}

function StarRating(prop: StarRatingProp) {
	const rating = 0
	const [hover, setHover] = useState(0)

	const setRating = (rate: number) => {
		prop.onRate(rate)
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
	)
}

StarRating.propTypes = {
	onRate: PropTypes.func.isRequired,
}

export default StarRating