import React, { useState } from 'react'
import { Button,Modal,Form,FloatingLabel } from 'react-bootstrap'
import { uploadNewVideoAPI } from '../services/allAPI';

function Add({setuploadVideoResponse}) {
  const [uploadVideo,setUploadVideo] = useState({
    id:"",caption:"",url:"",link:""
  })
  const [show, setShow] = useState(false);
  console.log(uploadVideo);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getYoutubeEmbededLink = (e) =>{
    const {value} = e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }


  const handleUpload = async () =>{
   const {id,caption,url,link} = uploadVideo
   if (!id || !caption || !url || !link){
    alert("Uploading form is incomplete.Please fill the form completely!!")
   }else{
    //store uploadvideo in json server
    const result = await uploadNewVideoAPI(uploadVideo)
    console.log(result);
    if(result.status>=200 && result.status<300){
      //success
      handleClose()
      //reset uploadVideo
      setUploadVideo({
        id:"",caption:"",url:"",link:""
      })
      //share result.data to view component
      setuploadVideoResponse(result.data)
    }else{
      alert(result.message)
    }
   }
  }


  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className="btn"><i style={{color:'white'}} class="fa-solid fa-photo-film"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Uploading Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p> Please fill the following details!!!</p>
          <FloatingLabel
        controlId="floatingInputId"
        label="Uploading video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading video Id" onChange={e=>setUploadVideo({...uploadVideo,id:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel 
        controlId="floatingInputCaption" 
        label="Uploading video Caption"
        className="mb-3"
        >
          

        <Form.Control type="text" placeholder="Uploading video image Caption" onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel 
        controlId="floatingInputImg" 
        label="Uploading video Image URL"
        className="mb-3"
        >

        <Form.Control type="text" placeholder="Uploading image url " onChange={e=>setUploadVideo({...uploadVideo,url:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel 
        controlId="floatingInputLink" 
        label="Uploading video Youtube Link"
        className="mb-3"
        >

        <Form.Control type="text" placeholder="Uploading video link"   onChange={getYoutubeEmbededLink}/>
        </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-info' onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
//<iframe width="914" height="514" src="https://www.youtube.com/embed/0VRuesp4UYk" 
//title="Leo - I&#39;m Scared Video | Thalapathy Vijay | Anirudh Ravichander" frameborder="0" 
//allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
//picture-in-picture; web-share" allowfullscreen></iframe>
//https://www.youtube.com/watch?v=G9bat9nqX0Q