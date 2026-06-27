import React from 'react'
import './TodaysOffer.css'


const TodaysOffer = () => {
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <iframe
                className='youtubeVideo'
                src="https://www.youtube.com/embed/8Qbax_1szSs?si=Tyghu_KY16Xs54HZ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800" alt="Strawberry offer" className='img-fluid' />
        <img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400" alt="Mango offer" className='img-fluid customIMGOffer' />

      </div>
    </>

  )
}

export default TodaysOffer