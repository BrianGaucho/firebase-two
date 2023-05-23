// import React from 'react'

import React from "react"
import Car from "../../Components/Car/Car"
import { db } from "../../config/firebase"
import { addDoc, collection,doc,getDocs } from "firebase/firestore"

const Cars = () => {

    const  [cars,setCars] = React.useState([])

    const carReff = collection(db,'cars')

    const [name,setName] = React.useState("")
    const [color,setColor] = React.useState("")
    const [seats,setSeats] = React.useState(0)


    const getCars = async () => {
        try {
            const carData = await getDocs(carReff)

            const fineCarData = carData.docs.map((doc) =>(
                {
                    ...doc.data(),
                    id: doc.id
                }
            ))
            console.log(fineCarData);

            setCars(fineCarData)
            
        } catch (err) {
            console.log(err.message);
            
        }
    }
    React.useEffect(()=>{
        getCars()
    }, [])

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleColorChange = (e) => {
        setColor(e.target.value)
        
    }

    const handleSeatsChange = (e) => {
        setSeats (Number(e.target.value))  
    }

    const createCar = async () => {
        try{
            await addDoc(carReff,{
                Model:name,
                Color:color,
                Seats:seats
            })

            getCars()
        }catch (err){
        console.log(err.message);
    }
}

  return (
    <div>
        <div>
        <input type="text" placeholder="Enter car name" onChange={handleNameChange}/>
        <input type="text" placeholder="Enter car color" onChange={handleColorChange}/>
        <input type="number" placeholder="Enter car seats" onChange={handleSeatsChange}/>
        <button onClick={createCar}> Create Car</button>
        </div>
      {
      cars.map((car) =>(
        
        <Car key={car.id}name={car.model} seats={car.seats} color={car.color} id={car.id}/>
      ))
      }
    </div>
  )
}

export default Cars
