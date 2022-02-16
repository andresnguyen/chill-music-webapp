import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function useFavoriteSong(songId) {
  const [result, setResult] = useState(false)
  // const songIdList = useSelector((state) => state.user.favoriteSongIdList)

  // if (songIdList.some((item) => item.songId === songId)) return true
  // return false
  return [result, setResult]
}

export default useFavoriteSong
