import React from 'react';
import './App.css';
import MyImage from '../../public/pizza.jpg';
import ButtonComponent from './shared/Button';
import DashboardComponent from './DashboardComponent';
const TestComponent = lazy(() => import(/* webpackChunkName: 'TestComponentChunk' */ './TestComponent.jsx'));

const AppComponent = () => {
    console.log("API_URL++++++++++++", API_URL);
    const fetchUserDetails = () => {
        console.log("Test User");
    }
    return (
        <div className="container">
            <div>
                App Component
                <img src={MyImage} />
                <ButtonComponent />
                <DashboardComponent />
                <TestComponent />
            </div>
        </div>
    )
}

export default AppComponent;