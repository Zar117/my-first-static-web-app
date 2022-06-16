import React, {createContext} from 'react';
import colors from './Components/ColorOrganizer/color-data.json'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const ColorContext = createContext();

ReactDOM.render(
    <ColorContext.Provider value={{colors}}>
        <App />
    </ColorContext.Provider>
, document.getElementById('root')
);
