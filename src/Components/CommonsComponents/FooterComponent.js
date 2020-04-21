import React from 'react';

function FooterComponent() {

    const date = new Date().getFullYear();
    return (
        <footer className="footer">
    		<p>Copyright Maxime Poulain &copy;{date}. All Rights Reserved.</p>
    	</footer>
    )
}

export default FooterComponent;