/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export default function AboutUs({ program }) {
    function programClick() {
        program.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className="about-us">
            <div className='about-us_img'>
                <img />
            </div>
            <div className='shape_about-us'>
                <div>
                    <h2>ABOUT US</h2>
                    <p>The Ida-Virumaa Vocational Education Center is an honorary vocational education institution in Estonia with 2,500 students, 3,000 vocational training participants and 270 employees.</p>
                    <div className="btn-container">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a onClick={programClick}>CHECK THE COURSE</a>
                    </div>
                </div>
            </div>
        </div>
    )
}