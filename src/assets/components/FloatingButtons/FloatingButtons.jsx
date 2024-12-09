import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

function FloatingButtons() {
return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center gap-2">
    <Link
        to="BARRA"
        smooth={true}
        duration={500} 
        className="bg-white p-3 rounded-full shadow-lg  hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
    >
        <FaArrowUp size={30} />
    </Link>
    </div>
);
}

export default FloatingButtons;