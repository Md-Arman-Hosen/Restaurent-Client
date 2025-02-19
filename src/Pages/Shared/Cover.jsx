/* eslint-disable react/prop-types */

import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subtitle }) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the cover"
        strength={-200}
    >
        <div className="hero h-[700px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md  border p-5">
                    <h1 className="mb-5 text-7xl font-bold uppercase">{title}</h1>
                    <p className="mb-5 uppercase">{subtitle}</p>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;