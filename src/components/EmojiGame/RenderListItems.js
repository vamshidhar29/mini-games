import './index.css'

const RenderListItems = props => {
  const {data, updateScore} = props
  const {id, emojiName, emojiUrl} = data

  const increaseScore = () => {
    updateScore(id)
  }

  return (
    <button type="button" onClick={increaseScore} className="btn-li-playing-eg">
      <li>
        <img className="img-li-play-eg" src={emojiUrl} alt={emojiName} />
      </li>
    </button>
  )
}

export default RenderListItems
