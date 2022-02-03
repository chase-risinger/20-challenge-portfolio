import React, { useEffect } from 'react';
function Footer() {
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <footer>
            This is the footer
        </footer>
    );
}

export default Footer;