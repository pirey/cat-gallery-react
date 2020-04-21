import axios from 'axios'

const key = 'efd7cb5f-27b4-4e3b-8736-9e355005a283'

function getImages() {
  return axios({
    method: 'GET',
    url: 'https://api.thecatapi.com/v1/images/search?limit=6',
    headers: {
      'x-api-key': key
    }
  }).then(response => response.data)
}

function getImage(imageId) {
  return axios({
    method: 'GET',
    url: `https://api.thecatapi.com/v1/images/${imageId}`,
    headers: {
      'x-api-key': key
    }
  }).then(response => response.data)
}

function getFavourites() {
  return axios({
    method: 'GET',
    url: 'https://api.thecatapi.com/v1/favourites',
    headers: {
      'x-api-key': key
    }
  }).then(response => response.data)
}

function addFavourite(imageId) {
  return axios({
    method: 'POST',
    url: 'https://api.thecatapi.com/v1/favourites',
    headers: {
      'x-api-key': key
    },
    data: {
      image_id: imageId
    }
  }).then(response => response.data)
}

function removeFavourite(favouriteId) {
  return axios({
    method: 'DELETE',
    url: `https://api.thecatapi.com/v1/favourites/${favouriteId}`,
    headers: {
      'x-api-key': key
    },
    data: {
      favourite_id: favouriteId
    }
  }).then(response => response.data)
}

export default {
  getImages,
  getImage,
  getFavourites,
  addFavourite,
  removeFavourite
}
