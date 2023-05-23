import React from 'react'
import { storage } from '../../config/firebase'
import { ref, uploadBytes } from 'firebase/storage'

const File = () => {

  const [files,setFiles] = React.useState(null)

  const handleFile = (e) => {
    setFiles(e.target.files[0])
  }

  const uploadFiles = async () =>{

    if(!files) return

    const fileStorageFolder = ref(storage, `assets/${files.name}`)
    try {
      await uploadBytes(fileStorageFolder,files)
    } catch (err) {
      console.log(err.message);
      
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFile} />
      <button onClick={uploadFiles}>Upload files</button>
    </div>
  )
}

export default File
