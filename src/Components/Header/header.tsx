import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextProviders/auth-context';
import WeatherHeader from '../WeatherHeader/weather-header';
import "./header-styles.css";

const Header = () => {
    
    const { user } = useContext(AuthContext);

    return (
        <div className="header">
            <section>
                <Link to="/HomeScreen"><h1 className="header-banner">Fake Company</h1></Link> 
            </section>
            <section>
                <h2 className="header-banner">{user?.displayName}</h2>
            </section>
            {/* <WeatherHeader />  */}
        </div>
    )
}


export default Header
