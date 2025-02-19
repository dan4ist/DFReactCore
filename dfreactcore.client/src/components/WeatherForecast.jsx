import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

export function WeatherForecast() {
    const [forecasts, setForecasts] = useState();
    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading...See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        :
        <Box className='Box' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
            </table>
        </Box>;

    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        if (response.ok) {
            const data = await response.json();
            setForecasts(data);
        }
    }

    return(
        <Box className='Box' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 id="tableLabel">Weather forecast</h2>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
            <br />
        </Box>
    );

    
}

export default WeatherForecast;