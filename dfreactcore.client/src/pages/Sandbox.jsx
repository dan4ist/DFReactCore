import { Pizza } from '../components/Pizza';
import { NavMenu } from '../components/NavMenu';
import { WeatherForecast } from '../components/WeatherForecast';

function Sandbox() {
    return (
        <div>
            <NavMenu />
            <WeatherForecast />
            <br />
            <br />
            <Pizza />
        </div>
    );
}

export default Sandbox;