import React from 'react';
import './styles.scss';

const SupportChild = ({}) => {
	return (
		<div className="SupportChild">
			<body>
    <header>
        <h1>People Fashion Support</h1>
    </header>

    <div class="container">
        <h2>Contact Information</h2>
        <p>If you need assistance or have any questions, please feel free to contact us. Our support team is here to help.</p>

        <h2>Frequently Asked Questions</h2>
        <ul>
            <li><strong>How can I track my order?</strong> - You can track your order by logging into your account and visiting the order tracking page.</li>
            <li><strong>What is your return policy?</strong> - Our return policy is outlined in detail on our <a href="returns.html">Returns & Refunds</a> page.</li>
            <li><strong>How can I change my account password?</strong> - You can change your password in the account settings section of your profile.</li>
        </ul>

        <h2>Get in Touch</h2>
        <p>If you can't find the information you need or have a specific inquiry, please don't hesitate to get in touch with us:</p>

        <div class="contact">
            <p><strong>Email:</strong> support@peoplefashion.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        </div>
    </div>
</body>	
		</div>
	);
};

export default SupportChild;
