import React, {useState} from 'react';

export default function WeatherForm(props) {
    const [cityName, setCityName] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        props.onCitySelected(cityName);
    };

    const isSubmittable = () => cityName !== '';

    const handleChange = event => {
        const value = event.target.value;
        setCityName(value);
    };

    return (
        <div>
            <h5>Please enter the city you want to display the weather for:</h5>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input name="cityName" type="text" value={cityName} onChange={handleChange}/>
                </label>
                <br />
                <button disabled={!isSubmittable()} type="submit">Submit</button>
            </form>
        </div>
    );

}