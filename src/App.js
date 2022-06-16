import React, {useState} from 'react';
import colorData from "./Components/ColorOrganizer/color-data.json";
import ColorList from './Components/ColorOrganizer/ColorList';
import AddColorForm from './Components/ColorOrganizer/AddColorForm';
import {v4} from "uuid"; 

const App = () => {
  const value = 'Cesar, Welcome to the Rest of Your Life';
  const [colors, setColors] = useState(colorData);

const removeColor = id => {
  const newColors = colors.filter(color => color.id !== id);
    setColors(newColors); 
}
const rateColor = (id, rating) => {
  const newColors = colors.map(color => 
    color.id === id ? {...color, rating} : color
    );
    setColors(newColors)
}
const newColor = (title, color) => {
  const newColors = [
    ...colors,
    {
      id: v4(),
      rating: 0,
      title,
      color
    }
  ];
  setColors(newColors);
}

  return ( 
   <div> <p> Hello {value}</p> 
   <AddColorForm onNewColor={newColor}/> 
   <ColorList 
   colors={colors} 
   onRateColor={rateColor}
   onRemoveColor={removeColor}
   />
  </div>
  )
}

export default App;
