import { combineReducers } from 'redux'

const songsReducer = () => {
  return  [
    { title: 'Kasidah Cinta', duration: '4:05' },
    { title: 'Bunga', duration: '4:14' },
    { title: 'If I See You Tomorrow', duration: '2:38' },
    { title: 'Down In Vieux Cannes', duration: '3:12' },
    { title: 'Janji Jiwa', duration: '4:07' },
  ]
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
