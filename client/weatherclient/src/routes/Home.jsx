import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'


// const getUserLocation = (setLocationAllowed, setPosition) => {
//     const successCallback = (position) => {
//         setLocationAllowed(true);
//         setPosition(position)
//         console.log(position);
//       };
//       const errorCallback = (error) => {
//         setLocationAllowed(false);
//       };
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// }

const Home = () => {
    return (
        <div className='bg-slate-800 h-screen w-screen p-2'>

        <Nav/>
        <h1>Hello</h1>

        </div>
    )
//     const [locationAllowed, setLocationAllowed] = useState(null);
//     const [position, setPosition] = useState(null);
//     useEffect(() => {
//         getUserLocation(setLocationAllowed, setPosition);
//       }, []);
//   return (
//     <div>
//       {locationAllowed ? <h1>Allowed</h1> : <h1>Denied</h1>}
//     </div>
//   )
}

export default Home
