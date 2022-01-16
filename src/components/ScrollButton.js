import React, { useState } from 'react';
import { Button } from './Styles';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollButton = () => {

	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 500) {
			setVisible(true)
		}
		else if (scrolled <= 300) {
			setVisible(false)
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
			/* you can also use 'auto' behaviour
				in place of 'smooth' */
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<Button>
			<FaArrowCircleUp onClick={scrollToTop}
				style={{ marginRight: -75, display: visible ? 'inline' : 'none' }} />
		</Button>
	);
}

export default ScrollButton;
