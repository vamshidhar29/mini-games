import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {useState} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import {CgClose} from 'react-icons/cg'

import RenderListItems from './RenderListItems'

import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

const EmojiGame = props => {
  const [status, setStatus] = useState('rules')
  const [score, setScore] = useState(0)
  const [clickedList, setClickedList] = useState([])

  const shuffleList = emojisList.sort(() => Math.random() - 0.5)

  const updatePlaying = () => {
    setStatus('playing')
  }

  const playAgain = () => {
    setClickedList([])
    setScore(0)
    setStatus('playing')
  }

  const updateScore = id => {
    const getData = clickedList.includes(id)
    if (getData === false) {
      setClickedList(preVal => [...preVal, id])
      setScore(preVal => preVal + 1)
      if (score === 11) {
        setStatus('resultWon')
      }
    } else {
      setStatus('resultLose')
    }
  }

  const goToHome = () => {
    const {history} = props
    history.replace('/')
  }

  const renderRulesView = () => (
    <div className="emojiGame-bg">
      <button className="back-btn-eg" type="button" onClick={goToHome}>
        <BiArrowBack />
        <p>Back</p>
      </button>
      <div className="rules-card-eg">
        <img
          className="emoji-image-eg"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712164641/HomeEmoji.png"
          alt="emoji game"
        />
        <div className="rules-container-eg">
          <h1 className="head-rules-eg">Rules</h1>
          <ul>
            <li className="rules-li-eg">
              User should be able to see the list of Emojis
            </li>
            <li className="rules-li-eg">
              When the user clicks any one of the Emoji for the first time, then
              the count of the score should be incremented by 1 and the List of
              emoji cards should be shuffled.
            </li>
            <li className="rules-li-eg">
              This process should be repeated every time the user clicks on an
              emoji card
            </li>
            <li className="rules-li-eg">
              When the user clicks on all Emoji cards without clicking any of it
              twice, then the user will win the game
            </li>
            <li className="rules-li-eg">
              When the user clicks on the same Emoji for the second time, then
              the user will lose the game.
            </li>
            <li className="rules-li-eg">
              Once the game is over, the user will be redirected to the results
              page.
            </li>
          </ul>
          <button
            onClick={updatePlaying}
            className="playing-btn-rules-eg"
            type="button"
          >
            Start playing
          </button>
        </div>
      </div>
    </div>
  )

  const playingView = () => (
    <div className="playing-bg-eg">
      <div className="nav-playing-eg">
        <div className="nav-img-cont-playing-eg">
          <img
            className="nav-img-play-eg"
            src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712224064/wink_1_omiua9.png"
            alt="emoji logo"
          />
          <h1 className="nav-head-play-eg">Emoji Game</h1>
        </div>
        <p className="score-ele-eg">Score: {score}</p>
      </div>

      <div className="body-play-cont-eg">
        <div className="back-rules-cont-play-eg">
          <button
            className="back-btn-playing-eg"
            type="button"
            onClick={goToHome}
          >
            <BiArrowBack />
            <p>Back</p>
          </button>
          <Popup
            modal
            trigger={
              <button className="rules-btn-eg" type="button">
                Rules
              </button>
            }
          >
            {close => (
              <div className="rules-playing-container">
                <button
                  onClick={() => close()}
                  data-testid="close"
                  className="close-btn-playing-rules"
                  type="button"
                >
                  <CgClose />
                </button>

                <div className="rules-container-eg">
                  <h1 className="head-rules-eg">Rules</h1>
                  <ul>
                    <li className="rules-li-eg">
                      User should be able to see the list of Emojis
                    </li>
                    <li className="rules-li-eg">
                      When the user clicks any one of the Emoji for the first
                      time, then the count of the score should be incremented by
                      1 and the List of emoji cards should be shuffled.
                    </li>
                    <li className="rules-li-eg">
                      This process should be repeated every time the user clicks
                      on an emoji card
                    </li>
                    <li className="rules-li-eg">
                      When the user clicks on all Emoji cards without clicking
                      any of it twice, then the user will win the game
                    </li>
                    <li className="rules-li-eg">
                      When the user clicks on the same Emoji for the second
                      time, then the user will lose the game.
                    </li>
                    <li className="rules-li-eg">
                      Once the game is over, the user will be redirected to the
                      results page.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <ul className="ul-playing-eg">
          {shuffleList.map(each => (
            <RenderListItems
              data={each}
              key={each.id}
              updateScore={updateScore}
            />
          ))}
        </ul>
      </div>
    </div>
  )

  const winView = () => (
    <div className="playing-bg-eg">
      <div className="nav-playing-eg">
        <div className="nav-img-cont-playing-eg">
          <img
            className="nav-img-play-eg"
            src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712224064/wink_1_omiua9.png"
            alt="emoji logo"
          />
          <h1 className="nav-head-play-eg">Emoji Game</h1>
        </div>
      </div>

      <div className="won-body-eg">
        <div className="won-card-eg">
          <div className="won-card-text-container-eg">
            <h1 className="won-text-eg">You Won</h1>
            <p className="bestScore-text-eg">Best Score</p>
            <p className="score-card-won-loose-eg">{score}/12</p>
            <button
              onClick={playAgain}
              className="playAgain-btn-eg"
              type="button"
            >
              Play Again
            </button>
          </div>

          <img
            className="won-card-img-eg"
            src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712299055/Image_egnxn0.png"
            alt="won"
          />
        </div>
      </div>
    </div>
  )

  const loseView = () => (
    <div className="playing-bg-eg">
      <div className="nav-playing-eg">
        <div className="nav-img-cont-playing-eg">
          <img
            className="nav-img-play-eg"
            src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712224064/wink_1_omiua9.png"
            alt="emoji logo"
          />
          <h1 className="nav-head-play-eg">Emoji Game</h1>
        </div>
      </div>

      <div className="won-body-eg">
        <div className="won-card-eg">
          <div className="won-card-text-container-eg">
            <h1 className="won-text-eg">You Lose</h1>
            <p className="bestScore-text-eg">Best Score</p>
            <p className="score-card-won-loose-eg">{score}/12</p>
            <button
              onClick={playAgain}
              className="playAgain-btn-eg"
              type="button"
            >
              Play Again
            </button>
          </div>

          <img
            className="won-card-img-eg"
            src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712306657/Image_1_vteutc.png"
            alt="lose"
          />
        </div>
      </div>
    </div>
  )

  return (
    <div>
      {(() => {
        switch (status) {
          case 'rules':
            return renderRulesView()
          case 'playing':
            return playingView()
          case 'resultWon':
            return winView()
          case 'resultLose':
            return loseView()
          default:
            return null
        }
      })()}
    </div>
  )
}

export default withRouter(EmojiGame)
