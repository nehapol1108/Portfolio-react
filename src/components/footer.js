import React from 'react';

export default function Footer() {
  return (
    <div className="w-full md:flex justify-center bg-gray-800 p-5 text-center text-gray-400 space-x-2">
      <div className='text-blue-100'>Made with  <span className="font-thin" role="img" aria-label="emoji">
            ❤️
          </span>{" "} by Neha Pol</div>
      <div className='relative group'>
        <a
          href="https://github.com/nehapol1108/Portfolio-react.git"
          target={'_blank'}
          rel="noreferrer"
          className="text-blue-300"
        >
         
     ( Repo Link ) <span className="absolute -bottom-0 right-0 w-0 h-0.5 bg-blue-400 group-hover:w-full group-hover:transition-all"></span>

        </a>
      </div>
      
    </div>
  );
}
