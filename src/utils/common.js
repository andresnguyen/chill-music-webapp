import { transform, isEqual, isObject, isArray } from 'lodash'

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

export const findInArr = (array, value, keyReturn) => {
  if (array && array.length > 0) {
    let result = array.find((item) => item.id * 1 === value * 1)
    return result ? (keyReturn && result?.[keyReturn] ? result[keyReturn] : result) : undefined
  }
}

export function differentObject(object, base) {
  function changes(object, base) {
    return transform(object, function (result, value, key) {
      if (isArray(value)) {
        if (!isEqual(value, base[key])) {
          result[key] = value
        }
      } else {
        if (!value && !base[key]) {
        } else {
          if (!isEqual(value, base[key])) {
            result[key] =
              !(value instanceof Date) && isObject(value) && isObject(base[key]) ? changes(value, base[key]) : value
          }
        }
      }
    })
  }
  return changes(object, base)
}

export function unaccent(str) {
  str = str.toLowerCase()
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, '') // Â, Ê, Ă, Ơ, Ư
  return str
}
