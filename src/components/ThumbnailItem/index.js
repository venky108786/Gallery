// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {eachPhot} = props
  const {imageUrl, thumbnailAltText} = eachPhot
  return (
    <li>
      <img src={imageUrl} alt={thumbnailAltText} />
    </li>
  )
}
export default ThumbnailItem
