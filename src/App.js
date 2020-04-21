import React, { useState, useEffect } from 'react'
import catApi from './cat-api'

function App() {
  // DATA
  const [images, setImages] = useState([])
  const [favourites, setFavourites] = useState([])

  // METHODS
  const addFavourite = image => {
    catApi.addFavourite(image.id).then(() => {
      catApi.getFavourites().then(setFavourites)
    })
  }

  const removeFavourite = favourite => {
    catApi.removeFavourite(favourite.id).then(() => {
      catApi.getFavourites().then(setFavourites)
    })
  }

  const refreshImages = () => {
    catApi.getImages().then(setImages)
  }

  // LIFECYCLE
  useEffect(() => {
    catApi.getFavourites().then(setFavourites)
    catApi.getImages().then(setImages)
  }, [])

  // UI
  return (
    <div className="container">
      <h2 className="my-3">Favorit Saya</h2>
      <div className="row">
        {favourites.map(favourite => (
          <div className="col-6 col-sm-4 mb-3">
            <button
              onClick={() => removeFavourite(favourite)}
              className="btn btn-block btn-danger"
            >
              Unlike
            </button>
            <img
              className="d-block img-fluid"
              style={{ maxHeight: 300 }}
              src={favourite.image.url}
              alt="a cat"
            />
          </div>
        ))}
      </div>

      <h2 className="my-3">
        Gallery Kucing{' '}
        <button onClick={refreshImages} className="btn btn-secondary">
          Refresh
        </button>
      </h2>
      <div className="row">
        {images.map(image => (
          <div className="col-6 col-sm-4 mb-3">
            <button
              onClick={() => addFavourite(image)}
              className="btn btn-block btn-primary"
            >
              Like
            </button>
            <img
              className="d-block img-fluid"
              style={{ maxHeight: 300 }}
              src={image.url}
              alt="a cat"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
