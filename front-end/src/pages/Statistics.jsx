import React from 'react';
import calendar from '../assets/calendar-icon.svg';
import teachers from '../assets/teachers-icon.svg';
import students from '../assets/students-icon.svg';

export default function Statistics() {
    return (
        <div className="statistics-page">
            <div className="bg-image"></div>
            <div className="statistics-container">
                <div className="column">
                    <div className="img-container">
                        <img src={calendar} alt="experience" />
                    </div>
                    <div className="text-container">
                        <h2>20</h2>
                        <p>years</p>
                        <p>of experience</p>
                    </div>
                </div>
                <div className="column">
                    <div className="img-container">
                        <img src={teachers} alt="teachers" />
                    </div>
                    <div className="text-container">
                        <h2>270</h2>
                        <p>professional</p>
                        <p>teachers</p>
                    </div>
                </div>
                <div className="column">
                    <div className="img-container">
                        <img src={students} alt="students" />
                    </div>
                    <div className="text-container">
                        <h2>2500</h2>
                        <p>students</p>
                        <p>every year</p>
                    </div>
                </div>
            </div>
        </div>
    )
}