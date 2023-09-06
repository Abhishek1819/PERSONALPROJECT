import { useState, useEffect } from 'react';
import './App.css';

const Time = () => {
    const [time, setTime] = useState({
        minutes: new Date().getMinutes(),
        hours: new Date().getHours(),
        seconds: new Date().getSeconds(),
        years: new Date(8),
        months: new Date(6)
    })

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            setTime({
                minutes: date.getMinutes(),
                hours: date.getHours(),
                seconds: date.getSeconds(),
                years: 8,
                months: 6,
            })
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    const convertToTwoDigit = (number) => {
        return number.toLocaleString('en-US', {
            minimumIntegerDigits: 2
        })
    }

    return (
        <div className='clock'>
            <span className='box box1'>{convertToTwoDigit(time.years)} <p style={{ fontSize: "15px", margin: "15% 0%", color: "#d13c5c" }}>YEARS</p></span>
            <span className='box box1'>{convertToTwoDigit(time.months)} <p style={{ fontSize: "15px", margin: "15% 0%", color: "#d13c5c" }}>MONTHS</p></span>
            <span className='box box1'>{convertToTwoDigit(time.hours)} <p style={{ fontSize: "15px", margin: "15% 0%", color: "#d13c5c" }}>HOURS</p></span>
            <span className='box box1'>{convertToTwoDigit(time.minutes)} <p style={{ fontSize: "15px", margin: "15% 0%", color: "#d13c5c" }}>MINUTES</p></span>
            <span className='box box1'>{convertToTwoDigit(time.seconds)} <p style={{ fontSize: "15px", margin: "15% 0%", color: "#d13c5c" }}>SECONDS</p></span>

        </div>
    );
}

export default Time