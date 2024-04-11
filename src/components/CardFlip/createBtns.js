import {useState, useEffect} from 'react'

import './index.css'

const CreateBtns = props => {
  const [before, setBefore] = useState(false)

  const {
    data,
    oneItem,
    updateOneItem,
    removeOneItem,
    correctItems,
    updateCorrectItems,
  } = props
  const {name, image} = data

  useEffect(() => {
    if (oneItem.includes(image) === false) {
      setBefore(false)
    }
    if (correctItems.includes(image)) {
      setBefore(true)
    }
  })

  const updataBefore = () => {
    setBefore(true)
    if (oneItem.length === 0) {
      updateOneItem(image)
    } else if (oneItem[0] === image) {
      removeOneItem()
      updateCorrectItems(image)
    } else {
      setTimeout(() => {
        setBefore(false)
      }, 2000)
      removeOneItem()
    }
  }

  return (
    <li className="li-createBtns-cf">
      <button
        onClick={updataBefore}
        className="btns-bg-before-after-cf"
        type="button"
      >
        {before ? (
          <img className="after-img-cf" src={image} alt={name} />
        ) : (
          <img
            className="before-img-cf"
            src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712760695/foot-print_1_gk5a5a.png"
            alt="foot"
          />
        )}
      </button>
    </li>
  )
}

export default CreateBtns
