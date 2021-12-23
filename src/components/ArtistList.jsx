import React from 'react'
import Artist from './Artist'

const fakeData = new Array(20).fill()

function ArtistList({ data = fakeData }) {
  return (
    <div class="row artist--container">{data.length > 0 && data.map((item) => <Artist data={item} />)}</div>
  )
}

ArtistList.propTypes = {}

export default ArtistList
