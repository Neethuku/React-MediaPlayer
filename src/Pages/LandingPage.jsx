import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='container '>
      <div className="row align-items-center m-5">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Media Player App. will allow you to add and remove their uploaded
            videos , and also helps to arrange them in different categories by providing drag and drop
            functionalities.</p>
          <Link to={'/home'} className='btn btn-info fw-bolder mt-5'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid' src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
        </div>
      </div>
      <div className="features mb-5">
        <h3 className="text-center">Features</h3>
        <div className="cards mt-5 d-flex justify-content-between">

          <Card style={{ width: '22rem' }}>
            <Card.Img width={'300px'} height={'300px'} variant="top" src="https://clipart-library.com/images/pc7reEGKi.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                User can upload, view and reove the videos
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '22rem' }}>
            <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.gifer.com/CH7i.gif" />
            <Card.Body>
              <Card.Title>Categorize Videos </Card.Title>
              <Card.Text>
                User can categorize the videos according to their prefernce using drag and drop featires
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '22rem' }}>
            <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/18/a0/a3/18a0a33c874e26a55fe2456347567ae9.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                User are able to see the history of watched videos
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='row mt-5 border rounded align-items-center p-5'>
        <div className='col-lg-5'>
          <h3 className='text-warning mb-5'>Simple, Fast and Powerfull</h3>
          <p style={{ textAlign: 'justify' }}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quas,animi perspiciatis! Deleniti maxime .
          </p>
          <p style={{ textAlign: 'justify' }}><span className='fs-5'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit.Quas,
            animi perspiciatis! Deleniti maxime .</p>

          <p style={{ textAlign: 'justify' }}><span className='fs-5'>Watch History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit.Quas,animi
            perspiciatis! Deleniti maxime .
          </p>
        </div>

        <div className='col-lg-6'>
          <iframe width="688" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh 
      Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-
      picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}
export default LandingPage