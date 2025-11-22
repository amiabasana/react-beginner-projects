// Random Color: #46a467

import { useEffect, useState } from "react"

export default function RandomColor() {
        const [typeOfColor, setTypeOfColor] = useState('hex');
        const [color, setColor] = useState('#000000');

        const randomColorUtility = (length) => {
            return Math.floor(Math.random() * length);
        }

        const handleCreateRandomHexColor = () => {
            // #f4569a
            const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
            let hexColor = "#";

            for(let i=0; i<6; i++){
                hexColor += hex[randomColorUtility(hex.length)]
            }
            setColor(hexColor);
        }

        const handleCreateRandomRgbColor = () => {
            const r = randomColorUtility(256);
            const g = randomColorUtility(256);
            const b = randomColorUtility(256);

            setColor(`rgb(${r},${g},${b})`);
        }

        useEffect(() => {
            if(typeOfColor === 'hex') handleCreateRandomHexColor();
                else handleCreateRandomRgbColor();
        }, [typeOfColor]);
  return (
    <div style={{
        width:'100vw',
        height: '100vh',
        background: color,
    }}>
      <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={typeOfColor === 'hex'? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>

      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color: '#ffffff',
        fontSize:'20px',
        marginTop:'50px',
        flexDirection:'column',
        gap:'15px'
      }}>
        <h2 style={{fontSize:'40px'}}>{typeOfColor === 'hex' ? "HEX Color" : "RGB Color"}</h2>
        <h4 style={{fontSize:'25px'}}>{color}</h4>
      </div>
    </div>
  );
}

