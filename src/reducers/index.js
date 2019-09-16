import { combineReducers } from 'redux'

const songsReducer = () => {
  return  {
    title: 'Kasidah Cinta', duration: '4:05'
  }
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers ({
  song: songsReducer,
  selectedSong: selectedSongReducer
})
