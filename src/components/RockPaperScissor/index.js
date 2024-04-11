import {BiArrowBack} from 'react-icons/bi'
import {CgClose} from 'react-icons/cg'

import Popup from 'reactjs-popup'

import {useState} from 'react'

import './index.css'

const choicesList = [
  {
    id: 'rock',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'scissor',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'paper',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const RockPaperScissor = props => {
  const [status, setStatus] = useState('rules')
  const [clickItem, setClickItem] = useState('')
  const [randId, setRandId] = useState('')
  const [score, setScore] = useState(0)

  const getYourdata = choicesList.filter(each => each.id === clickItem)
  const getOppData = choicesList.filter(each => each.id === randId)

  const playAgain = () => {
    setStatus('playing')
  }

  const goToHome = () => {
    const {history} = props
    history.replace('/')
  }

  const updateStatue = () => {
    setStatus('playing')
  }

  const updateRock = () => {
    setClickItem('rock')
    const randIndex = Math.ceil(Math.random() * 3) - 1
    const getRandomData = choicesList[randIndex]
    setRandId(getRandomData.id)
    if (getRandomData.id === 'rock') {
      setStatus('draw')
    } else if (getRandomData.id === 'scissor') {
      setStatus('won')
      setScore(preVal => preVal + 1)
    } else {
      setStatus('lose')
      setScore(preVal => preVal - 1)
    }
  }

  const updateScissor = () => {
    setClickItem('scissor')
    const randIndex = Math.ceil(Math.random() * 3) - 1
    const getRandomData = choicesList[randIndex]
    setRandId(getRandomData.id)
    if (getRandomData.id === 'scissor') {
      setStatus('draw')
    } else if (getRandomData.id === 'paper') {
      setStatus('won')
      setScore(preVal => preVal + 1)
    } else {
      setStatus('lose')
      setScore(preVal => preVal - 1)
    }
  }

  const updatePaper = () => {
    setClickItem('paper')
    const randIndex = Math.ceil(Math.random() * 3) - 1
    const getRandomData = choicesList[randIndex]
    setRandId(getRandomData.id)
    if (getRandomData.id === 'paper') {
      setStatus('draw')
    } else if (getRandomData.id === 'rock') {
      setStatus('won')
      setScore(preVal => preVal + 1)
    } else {
      setStatus('lose')
      setScore(preVal => preVal - 1)
    }
  }

  const rulesView = () => (
    <div className="rpsGame-bg">
      <button className="back-btn-rps" type="button" onClick={goToHome}>
        <BiArrowBack />
        <p>Back</p>
      </button>

      <h1 className="head-rules-rps">Rock Paper Scissor</h1>
      <img
        className="img-rules-rps"
        src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712326075/Group_7469_1_gphqpr.png"
        alt="rock paper scissor"
      />
      <h1 className="rulesHead-rules-rps">Rules</h1>
      <ul className="ul-rules-rps">
        <li className="li-rules-rps">
          The game result should be based on user and user opponent choices
        </li>
        <li className="li-rules-rps">
          When the user choice is rock and his opponent choice is scissors then
          the result will be <span className="span-rules-rps">YOU WON</span>
        </li>
        <li className="li-rules-rps">
          When the user choice is rock and his opponent choice is rock then the
          result will be <span className="span-rules-rps">IT IS DRAW</span>
        </li>
        <li className="li-rules-rps">
          When the user choice is paper and his opponent choice is scissors then
          the result will be <span className="span-rules-rps">YOU LOSE</span>
        </li>
        <li className="li-rules-rps">
          When the user choice is paper and his opponent choice is rock then the
          result will be <span className="span-rules-rps">YOU WON</span>
        </li>
        <li className="li-rules-rps">
          When the user choice is scissors and his opponent choice is scissors
          then the result will be{' '}
          <span className="span-rules-rps">IT IS DRAW</span>
        </li>
        <li className="li-rules-rps">
          When the user choice is a scissor and his opponent choice is rock then
          the result will be <span className="span-rules-rps">YOU LOSE</span>
        </li>
        <li className="li-rules-rps">
          When the result is <span className="span-rules-rps">YOU WON</span>,
          then the count of the score should be incremented by 1
        </li>
        <li className="li-rules-rps">
          When the user choice is paper and his opponent choice is paper then
          the result will be <span className="span-rules-rps">IT IS DRAW</span>
        </li>
        <li className="li-rules-rps">
          When the result is <span className="span-rules-rps">IT IS DRAW</span>,
          then the count of the score should be the same
        </li>
        <li className="li-rules-rps">
          When the user choice is scissors and his opponent choice is paper then
          the result will be <span className="span-rules-rps">YOU WON</span>
        </li>
        <li className="li-rules-rps">
          When the result is <span className="span-rules-rps">YOU LOSE</span>,
          then the count of the score should be decremented by 1.
        </li>
      </ul>
      <button
        onClick={updateStatue}
        type="button"
        className="start-playing-btn"
      >
        Start playing
      </button>
    </div>
  )

  const playingView = () => (
    <div className="bg-playing-rps">
      <div className="back-rules-cont-play-rps">
        <button
          className="back-btn-playing-rps"
          type="button"
          onClick={goToHome}
        >
          <BiArrowBack />
          <p>Back</p>
        </button>
        <Popup
          modal
          trigger={
            <button className="rules-btn-rps" type="button">
              Rules
            </button>
          }
        >
          {close => (
            <div className="rules-playing-container-rps">
              <button
                onClick={() => close()}
                data-testid="close"
                className="close-btn-playing-rules-rps"
                type="button"
              >
                <CgClose />
              </button>

              <h1 className="rulesHead-rules-rps">Rules</h1>
              <ul className="ul-rules-rps">
                <li className="li-rules-rps">
                  The game result should be based on user and user opponent
                  choices
                </li>
                <li className="li-rules-rps">
                  When the user choice is rock and his opponent choice is
                  scissors then the result will be{' '}
                  <span className="span-rules-rps">YOU WON</span>
                </li>
                <li className="li-rules-rps">
                  When the user choice is rock and his opponent choice is rock
                  then the result will be{' '}
                  <span className="span-rules-rps">IT IS DRAW</span>
                </li>
                <li className="li-rules-rps">
                  When the user choice is paper and his opponent choice is
                  scissors then the result will be{' '}
                  <span className="span-rules-rps">YOU LOSE</span>
                </li>
                <li className="li-rules-rps">
                  When the user choice is paper and his opponent choice is rock
                  then the result will be{' '}
                  <span className="span-rules-rps">YOU WON</span>
                </li>
                <li className="li-rules-rps">
                  When the user choice is scissors and his opponent choice is
                  scissors then the result will be{' '}
                  <span className="span-rules-rps">IT IS DRAW</span>
                </li>
                <li className="li-rules-rps">
                  When the user choice is a scissor and his opponent choice is
                  rock then the result will be{' '}
                  <span className="span-rules-rps">YOU LOSE</span>
                </li>
                <li className="li-rules-rps">
                  When the result is{' '}
                  <span className="span-rules-rps">YOU WON</span>, then the
                  count of the score should be incremented by 1
                </li>
                <li className="li-rules-rps">
                  When the user choice is paper and his opponent choice is paper
                  then the result will be{' '}
                  <span className="span-rules-rps">IT IS DRAW</span>
                </li>
                <li className="li-rules-rps">
                  When the result is{' '}
                  <span className="span-rules-rps">IT IS DRAW</span>, then the
                  count of the score should be the same
                </li>
                <li className="li-rules-rps">
                  When the user choice is scissors and his opponent choice is
                  paper then the result will be{' '}
                  <span className="span-rules-rps">YOU WON</span>
                </li>
                <li className="li-rules-rps">
                  When the result is{' '}
                  <span className="span-rules-rps">YOU LOSE</span>, then the
                  count of the score should be decremented by 1.
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>

      <h1 className="head-rules-rps">ROCK PAPER SCISSOR</h1>
      <h1 className="head-rules-rps">Let's pick</h1>

      <div className="btns-container-playing-rps">
        <button
          data-testid="rockButton"
          onClick={updateRock}
          className="btns-rock-scissor-rps"
          type="button"
        >
          <img
            className="imgs-playing-rps"
            src={choicesList[0].imageUrl}
            alt={choicesList[0].id}
          />
        </button>
        <button
          data-testid="scissorButton"
          onClick={updateScissor}
          className="btns-rock-scissor-rps"
          type="button"
        >
          <img
            className="imgs-playing-rps"
            src={choicesList[1].imageUrl}
            alt={choicesList[1].id}
          />
        </button>
      </div>
      <button
        data-testid="paperButton"
        onClick={updatePaper}
        className="btns-paper-rps"
        type="button"
      >
        <img
          className="imgs-playing-rps"
          src={choicesList[2].imageUrl}
          alt={choicesList[2].id}
        />
      </button>
    </div>
  )

  const wonView = () => (
    <div className="won-lose-draw-bg-rps">
      <h1 className="head-rules-rps">ROCK PAPER SCISSOR</h1>

      <div className="box-container-w-l-d-rps">
        <p className="para-box-rps">
          ROCK <br /> PAPER <br />
          SCISSOR
        </p>
        <img
          className="imgs-box-rps"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712502497/Group_7618_tienlp.png"
          alt="won emoji"
        />
        <div className="score-container-rps">
          <p className="score-text-score-rps">Score</p>
          <p className="score-text-score-rps">{score}</p>
        </div>
      </div>

      <div className="display-result-container-rps">
        <div className="you-opp-container-rps">
          <p className="you-opp-text-rps">You</p>
          <img
            className="imgs-playing-rps"
            src={getYourdata[0].imageUrl}
            alt={getYourdata[0].id}
          />
        </div>
        <div className="result-container-rps">
          <img
            className="emojis-rps"
            src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712505330/Emoji_kfraek.png"
            alt="won emoji"
          />
          <p>YOU WON</p>
          <button
            onClick={playAgain}
            className="play-again-btn-rps"
            type="button"
          >
            Play Again
          </button>
        </div>
        <div className="you-opp-container-rps">
          <p className="you-opp-text-rps">Opponent</p>
          <img
            className="imgs-playing-rps"
            src={getOppData[0].imageUrl}
            alt={getOppData[0].id}
          />
        </div>
      </div>
    </div>
  )

  const drawView = () => (
    <div className="won-lose-draw-bg-rps">
      <h1 className="head-rules-rps">ROCK PAPER SCISSOR</h1>

      <div className="box-container-w-l-d-rps">
        <p className="para-box-rps">
          ROCK <br /> PAPER <br />
          SCISSOR
        </p>
        <img
          className="imgs-box-rps"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712502535/Group_7618_1_bxqiii.png"
          alt="draw emoji"
        />
        <div className="score-container-rps">
          <p className="score-text-score-rps">Score</p>
          <p classNamea="score-text-score-rps">{score}</p>
        </div>
      </div>

      <div className="display-result-container-rps">
        <div className="you-opp-container-rps">
          <p className="you-opp-text-rps">You</p>
          <img
            className="imgs-playing-rps"
            src={getYourdata[0].imageUrl}
            alt={getYourdata[0].id}
          />
        </div>
        <div className="result-container-rps">
          <img
            className="emojis-rps"
            src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712507293/Emoji_1_ryxiaa.png"
            alt="draw emoji"
          />
          <p>IT IS DRAW</p>
          <button
            onClick={playAgain}
            className="play-again-btn-rps"
            type="button"
          >
            Play Again
          </button>
        </div>
        <div className="you-opp-container-rps">
          <p className="you-opp-text-rps">Opponent</p>
          <img
            className="imgs-playing-rps"
            src={getOppData[0].imageUrl}
            alt={getOppData[0].id}
          />
        </div>
      </div>
    </div>
  )

  const loseView = () => (
    <div className="won-lose-draw-bg-rps">
      <h1 className="head-rules-rps">ROCK PAPER SCISSOR</h1>

      <div className="box-container-w-l-d-rps">
        <p className="para-box-rps">
          ROCK <br /> PAPER <br />
          SCISSOR
        </p>
        <img
          className="imgs-box-rps"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712502614/Group_7618_4_mn35qv.png"
          alt="lose emoji"
        />
        <div className="score-container-rps">
          <p className="score-text-score-rps">Score</p>
          <p className="score-text-score-rps">{score}</p>
        </div>
      </div>

      <div className="display-result-container-rps">
        <div className="you-opp-container-rps">
          <p className="you-opp-text-rps">You</p>
          <img
            className="imgs-playing-rps"
            src={getYourdata[0].imageUrl}
            alt={getYourdata[0].id}
          />
        </div>
        <div className="result-container-rps">
          <img
            className="emojis-rps"
            src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712507438/Emoji_2_oa6djp.png"
            alt="lose emoji"
          />
          <p>YOU LOSE</p>
          <button
            onClick={playAgain}
            className="play-again-btn-rps"
            type="button"
          >
            Play Again
          </button>
        </div>
        <div className="you-opp-container-rps">
          <p className="you-opp-text-rps">Opponent</p>
          <img
            className="imgs-playing-rps"
            src={getOppData[0].imageUrl}
            alt={getOppData[0].id}
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
            return rulesView()
          case 'playing':
            return playingView()
          case 'won':
            return wonView()
          case 'draw':
            return drawView()
          case 'lose':
            return loseView()
          default:
            return null
        }
      })()}
    </div>
  )
}

export default RockPaperScissor
