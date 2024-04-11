import {useState, useEffect} from 'react'

import {BiArrowBack} from 'react-icons/bi'
import {CgClose} from 'react-icons/cg'

import Popup from 'reactjs-popup'

import CreateBtns from './createBtns'

import './index.css'

const cardsData = [
  {
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

const CardFlip = props => {
  const [status, setStatus] = useState('rules')
  const [oneItem, setOneItem] = useState([])
  const [correctItems, setCorrectItems] = useState([])
  const [score, setScore] = useState(0)
  const [seconds, setSeconds] = useState(120)
  const [flips, setFlips] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(preVal => preVal - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const playAgain = () => {
    setStatus('playing')
    setOneItem([])
    setCorrectItems([])
    setScore([0])
    setSeconds(120)
    setFlips(0)
  }

  const displaScore = () => {
    if (score <= 9) {
      return `0${score}`
    }
    return `${score}`
  }

  const displayTime = () => {
    const minutes = Math.floor(seconds / 60)
    const secondsDisp = seconds % 60

    if (seconds === 0) {
      setStatus('fail')
    }

    if (secondsDisp < 10) {
      return `0${minutes}:0${secondsDisp}`
    }
    return `0${minutes}:${secondsDisp}`
  }

  const displayFlips = () => {
    if (flips < 10) {
      return `0${flips}`
    }
    return `${flips}`
  }

  const goToHome = () => {
    const {history} = props
    history.replace('/')
  }

  const updateStatue = () => {
    setStatus('playing')
  }

  const updateOneItem = item => {
    setOneItem([item])
  }

  const removeOneItem = () => {
    setOneItem([])
    setFlips(preVal => preVal + 1)
  }

  const updateCorrectItems = item => {
    setCorrectItems(preVal => [...preVal, item])
    setScore(preVal => preVal + 1)

    if (correctItems.length === 9) {
      setStatus('success')
    }
  }

  const rulesView = () => (
    <div className="cfGame-bg">
      <button className="back-btn-cf" type="button" onClick={goToHome}>
        <BiArrowBack />
        <p>Back</p>
      </button>

      <img
        className="img-rules-cf"
        src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712670703/Group_m8sszt.png"
        alt="Card Flip"
      />
      <h1 className="rulesHead-rules-cf">Rules</h1>
      <ul className="ul-rules-cf">
        <li className="li-rules-cf">
          When the game is started, the users should be able to see the list of
          Cards that are shuffled and turned face down.
        </li>
        <li className="li-rules-cf">
          Users should be able to compare only two cards at a time.
        </li>
        <li className="li-rules-cf">
          When a user starts the game, the user should be able to see the Timer
          running.
        </li>
        <li className="li-rules-cf">
          When the user is not able to find all the cards before the timer ends
          then the game should end and redirect to the Time Up Page.
        </li>
        <li className="li-rules-cf">The Timer starts from 2 Minutes.</li>
        <li className="li-rules-cf">
          If the user finds all the matching cards before the timer ends, then
          the user should be redirected to the results page.
        </li>
        <li className="li-rules-cf">
          If the two cards have the same image, they remain face up. If not,
          they should be flipped face down again after a short 2 seconds.
        </li>
      </ul>
      <button
        onClick={updateStatue}
        type="button"
        className="start-playing-btn-cf"
      >
        Start playing
      </button>
    </div>
  )

  const playingView = () => (
    <div className="bg-playing-cf">
      <div className="back-rules-cont-play-cf">
        <button
          className="back-btn-playing-cf"
          type="button"
          onClick={goToHome}
        >
          <BiArrowBack />
          <p>Back</p>
        </button>
        <Popup
          modal
          trigger={
            <button className="rules-btn-cf" type="button">
              Rules
            </button>
          }
        >
          {close => (
            <div className="rules-playing-container-cf">
              <button
                onClick={() => close()}
                data-testid="close"
                className="close-btn-playing-rules-cf"
                type="button"
              >
                <CgClose />
              </button>

              <h1 className="rulesHead-rules-cf">Rules</h1>
              <ul className="ul-rules-cf">
                <li className="li-rules-cf">
                  When the game is started, the users should be able to see the
                  list of Cards that are shuffled and turned face down.
                </li>
                <li className="li-rules-cf">
                  Users should be able to compare only two cards at a time.
                </li>
                <li className="li-rules-cf">
                  When a user starts the game, the user should be able to see
                  the Timer running.
                </li>
                <li className="li-rules-cf">
                  When the user is not able to find all the cards before the
                  timer ends then the game should end and redirect to the Time
                  Up Page.
                </li>
                <li className="li-rules-cf">
                  The Timer starts from 2 Minutes.
                </li>
                <li className="li-rules-cf">
                  If the user finds all the matching cards before the timer
                  ends, then the user should be redirected to the results page.
                </li>
                <li className="li-rules-cf">
                  If the two cards have the same image, they remain face up. If
                  not, they should be flipped face down again after a short 2
                  seconds.
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>

      <h1 className="head-playing-cf">Card-Flip Memory Game</h1>

      <diV className="flip-score-time-container-cf">
        <p>Card flip count - {displayFlips()}</p>
        <p>{displayTime()}</p>
        <p>Score - {displaScore()}</p>
      </diV>

      <ul className="card-playing-cf">
        {cardsData.map(each => (
          <CreateBtns
            data={each}
            key={each.name}
            oneItem={oneItem}
            updateOneItem={updateOneItem}
            removeOneItem={removeOneItem}
            correctItems={correctItems}
            updateCorrectItems={updateCorrectItems}
          />
        ))}
        {cardsData.map(each => (
          <CreateBtns
            data={each}
            key={each.name}
            oneItem={oneItem}
            updateOneItem={updateOneItem}
            removeOneItem={removeOneItem}
            correctItems={correctItems}
            updateCorrectItems={updateCorrectItems}
          />
        ))}
      </ul>
    </div>
  )

  const successView = () => (
    <div className="result-contsiner-cf">
      <img
        className="emoji-results-cf"
        src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570361/03_Optimistic_vztft7.png"
        alt="grinning face with big eyes"
      />
      <h1 className="congo-text-res-cf">Congratulations!</h1>
      <p className="flips-text-res-cf">No.of Flips - {flips}</p>
      <p>You matched all of the cards in record time</p>
      <button
        onClick={playAgain}
        className="playagain-btn-res-cf"
        type="button"
      >
        Play Again
      </button>
    </div>
  )

  const failView = () => (
    <div className="result-contsiner-cf">
      <img
        className="emoji-results-cf"
        src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712813673/05_Pokerface_pd4ihb.png"
        alt="neutral face"
      />
      <h1 className="congo-text-res-cf">Better luck next time!</h1>
      <p className="flips-text-res-cf">No.of Flips - {flips}</p>
      <p>You did not match all of the cards in record time</p>
      <button
        onClick={playAgain}
        className="playagain-btn-res-cf"
        type="button"
      >
        Play Again
      </button>
    </div>
  )

  return (
    <div>
      {(() => {
        switch (status) {
          case 'rules':
            return rulesView()
          case 'playing':
            return playingView()
          case 'success':
            return successView()
          case 'fail':
            return failView()
          default:
            return null
        }
      })()}
    </div>
  )
}

export default CardFlip
