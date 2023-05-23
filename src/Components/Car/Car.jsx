import React from 'react'
import { db } from '../../config/firebase'
import { collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'

const Car = ({name,color,seats,id}) => {

    const [upadateName,setUpdateName] = React.useState('')
    const carReff = collection(db,"cars")

    const handleUpdate = (e) => {
        setUpdateName(e.target.value)
        
    }

    const submitUpdate = async (id) => {
        try {
            const carDoc = doc(carReff,id)
            await updateDoc(carDoc,{Model:upadateName})
        } catch (err) {
            console.log(err.message);
            
        }
    }

    const deleteCar = async (id) => {
        try {
            const carDoc = doc(carReff,id)
            await deleteDoc (carDoc)
        } catch (err) {
            console.log(err.message);
            
        }
    }
  return (
    <div>
      <h1>{name}</h1>

      <input type="text" placeholder="Update car name" onChange={handleUpdate}/>

      <button onClick={() => submitUpdate}>Submit Update</button>

      <h2>{color}</h2>
      <h3>{seats}</h3>

      <button onClick={() => deleteCar}>Delete Car</button>
    </div>
  )
}

export default Car
