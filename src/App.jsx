import { useEffect, useRef, useState } from 'react';
import './App.css';


function App() {
  
const OTPCount = 5;
const refArray = useRef([]);

const [inputArr, setInputArr] = useState(new Array(OTPCount).fill(""));

useEffect(() => {
  //?. optional chaining important concept in react 
  refArray.current[0]?.focus();
}, [])

const handleOnChange = (value, index) => {
  console.log(value, index);
  if(isNaN(value)) return;
  const newValue = value.trim();
  const newArray = [...inputArr];
  //newArray[index] = newValue;
  newArray[index] = newValue.slice(-1);
  
  setInputArr(newArray);
  newValue && refArray.current[index + 1]?.focus();
}
const handleOnKeyDown = (e, index) => {
 console.log(e);
 if(!e.target.value && e.key === "Backspace"){
  refArray.current[index - 1]?.focus();
 }
}

  return (
    <>
    <div className='bg-blue-950 h-screen w-screen flex flex-col items-center space-y-4'>
      <h1 className='text-white text-6xl'>Validate OTP</h1>
     
      <div className='flex space-x-2'>
        {inputArr.map((input, index) => (
           <input className='m-3 text-center text-white text-4xl mt-25 w-24 h-24 bg-blue-400' 
           type="text" placeholder='' key={index} value={inputArr[index]} onChange={(e) => handleOnChange(e.target.value, index)} 
           ref={(input) => {refArray.current[index] = input} } onKeyDown={(e) => handleOnKeyDown(e, index)} />
        // <InputBox key={index} input={inputArr[index]}/>
      ))}
      </div>
      
    </div>
    </>
  )
}

export default App


function InputBox({key, input}){
  return(
    <input className='m-3 text-center text-white text-4xl mt-25 w-24 h-24 bg-blue-400' type="text" placeholder='Enter' key={key} value={input} />
  )
}





{/* <Navbar logo={reactLogo}/>
    <Card image={viteLogo} heading="Telescope" content="Telescopes are really interesting."/>
    <Footer/> */}