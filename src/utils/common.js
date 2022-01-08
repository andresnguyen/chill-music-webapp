export const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}

export const formatSongTime = (time) => {
  let minute
  let second
  if (time) {
    minute = Math.floor(time / 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    second = Math.floor(time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
  } else {
    minute = (0).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    second = (0).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
  }
  return `${minute}:${second}`
}


export const requiredLabel = (label) => {
  return (
    <span>
      {label} <span style={{ color: '#ff0000ad' }}>*</span>
    </span>
  )
}
