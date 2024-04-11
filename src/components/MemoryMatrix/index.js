import {useState} from 'react'

import {BiArrowBack} from 'react-icons/bi'
import {CgClose} from 'react-icons/cg'

import {Line} from 'rc-progress'

import Popup from 'reactjs-popup'

import ThreeButtons from './threeButtons'

import FourButtons from './fourButtons'

import './index.css'

const btnsList11 = [{id: 11}, {id: 12}, {id: 13}]
const btnslist21 = [{id: 21}, {id: 22}, {id: 23}]
const btnsList31 = [{id: 31}, {id: 32}, {id: 33}]

const btnsList14 = [{id: 11}, {id: 12}, {id: 13}, {id: 14}]
const btnslist24 = [{id: 21}, {id: 22}, {id: 23}, {id: 24}]
const btnsList34 = [{id: 31}, {id: 32}, {id: 33}, {id: 34}]
const btnsList44 = [{id: 41}, {id: 42}, {id: 43}, {id: 44}]

const MemoryMatrix = props => {
  const [status, setStatus] = useState('rules')
  const [highlight3] = useState([22, 23, 32])
  const [highlight4] = useState([23, 24, 32, 42])
  const [clickCount3, setClickCount3] = useState(0)

  const increaseCount = id => {
    const check = highlight3.filter(each => each === id)
    if (check.length !== 0) {
      setClickCount3(preVal => preVal + 1)
      if (clickCount3 === 2) {
        setStatus('playing2')
        setClickCount3(0)
      }
    } else {
      setStatus('result1')
    }
  }

  const increaseCount4 = id => {
    const check = highlight4.filter(each => each === id)
    if (check.length !== 0) {
      setClickCount3(preVal => preVal + 1)
      if (clickCount3 === 3) {
        setStatus('result2')
        setClickCount3(0)
      }
    } else {
      setStatus('result1')
    }
  }

  const playAgain = () => {
    setStatus('playing1')
  }

  const goToHome = () => {
    const {history} = props
    history.replace('/')
  }

  const updateStatue = () => {
    setStatus('playing1')
  }

  const rulesView = () => (
    <div className="mmGame-bg">
      <button className="back-btn-mm" type="button" onClick={goToHome}>
        <BiArrowBack />
        <p>Back</p>
      </button>

      <h1 className="head-rules-mm">Memory Matrix</h1>
      <img
        className="img-rules-mm"
        src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712550235/memory_1_ouwc6b.png"
        alt="Memory Matrix"
      />
      <h1 className="rulesHead-rules-mm">Rules</h1>
      <ul className="ul-rules-mm">
        <li className="li-rules-mm">
          In each level of the Game, Users should be able to see the Grid with
          (N X N) size starting from 3 and the grid will highlight N cells in
          Blue, the N highlighted cells will be picked randomly.
        </li>
        <li className="li-rules-mm">
          At N seconds, the user can click on any cell. Clicking on a cell that
          was highlighted before it will turn blue. Clicking on the other cells
          that were not highlighted before then will turn to red.
        </li>
        <li className="li-rules-mm">
          The highlighted cells will remain N seconds for the user to memorize
          the cells. At this point, the user should not be able to perform any
          action.
        </li>
        <li className="li-rules-mm">
          The user should be promoted to the next level if they guess all N
          cells correctly in one attempt.
        </li>
        <li className="li-rules-mm">
          After N seconds, the grid will clear the N highlighted cells.
        </li>
        <li className="li-rules-mm">
          The user should be taken to the results page if the user clicks on the
          wrong cell.
        </li>
        <li className="li-rules-mm">
          If the user completed all the levels, then the user should be taken to
          the results page.
        </li>
      </ul>
      <button
        onClick={updateStatue}
        type="button"
        className="start-playing-btn-mm"
      >
        Start playing
      </button>
    </div>
  )

  const playing1 = () => (
    <div className="bg-playing-mm">
      <div className="back-rules-cont-play-mm">
        <button
          className="back-btn-playing-mm"
          type="button"
          onClick={goToHome}
        >
          <BiArrowBack />
          <p>Back</p>
        </button>
        <Popup
          modal
          trigger={
            <button className="rules-btn-mm" type="button">
              Rules
            </button>
          }
        >
          {close => (
            <div className="rules-playing-container-mm">
              <button
                onClick={() => close()}
                data-testid="close"
                className="close-btn-playing-rules-mm"
                type="button"
              >
                <CgClose />
              </button>

              <h1 className="rulesHead-rules-mm">Rules</h1>
              <ul className="ul-rules-mm">
                <li className="li-rules-mm">
                  In each level of the Game, Users should be able to see the
                  Grid with (N X N) size starting from 3 and the grid will
                  highlight N cells in Blue, the N highlighted cells will be
                  picked randomly.
                </li>
                <li className="li-rules-mm">
                  At N seconds, the user can click on any cell. Clicking on a
                  cell that was highlighted before it will turn blue. Clicking
                  on the other cells that were not highlighted before then will
                  turn to red.
                </li>
                <li className="li-rules-mm">
                  The highlighted cells will remain N seconds for the user to
                  memorize the cells. At this point, the user should not be able
                  to perform any action.
                </li>
                <li className="li-rules-mm">
                  The user should be promoted to the next level if they guess
                  all N cells correctly in one attempt.
                </li>
                <li className="li-rules-mm">
                  After N seconds, the grid will clear the N highlighted cells.
                </li>
                <li className="li-rules-mm">
                  The user should be taken to the results page if the user
                  clicks on the wrong cell.
                </li>
                <li className="li-rules-mm">
                  If the user completed all the levels, then the user should be
                  taken to the results page.
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>

      <h1 className="head-rules-rps">Memory Matrix</h1>

      <p className="para-level-ele-mm">Level - 1</p>

      <div className="btns-container-mm ">
        <ul className="ul-row-container-mm ">
          {btnsList11.map(each => (
            <ThreeButtons
              data={each}
              increaseCount={increaseCount}
              highlight3={highlight3}
              key={each.id}
            />
          ))}
        </ul>

        <ul className="ul-row-container-mm ">
          {btnslist21.map(each => (
            <ThreeButtons
              data={each}
              increaseCount={increaseCount}
              highlight3={highlight3}
              key={each.id}
            />
          ))}
        </ul>

        <ul className="ul-row-container-mm ">
          {btnsList31.map(each => (
            <ThreeButtons
              data={each}
              increaseCount={increaseCount}
              highlight3={highlight3}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    </div>
  )

  const playing2 = () => (
    <div className="bg-playing-mm">
      <div className="back-rules-cont-play-mm">
        <button
          className="back-btn-playing-mm"
          type="button"
          onClick={goToHome}
        >
          <BiArrowBack />
          <p>Back</p>
        </button>
        <Popup
          modal
          trigger={
            <button className="rules-btn-mm" type="button">
              Rules
            </button>
          }
        >
          {close => (
            <div className="rules-playing-container-mm">
              <button
                onClick={() => close()}
                data-testid="close"
                className="close-btn-playing-rules-mm"
                type="button"
              >
                <CgClose />
              </button>

              <h1 className="rulesHead-rules-mm">Rules</h1>
              <ul className="ul-rules-mm">
                <li className="li-rules-mm">
                  In each level of the Game, Users should be able to see the
                  Grid with (N X N) size starting from 3 and the grid will
                  highlight N cells in Blue, the N highlighted cells will be
                  picked randomly.
                </li>
                <li className="li-rules-mm">
                  At N seconds, the user can click on any cell. Clicking on a
                  cell that was highlighted before it will turn blue. Clicking
                  on the other cells that were not highlighted before then will
                  turn to red.
                </li>
                <li className="li-rules-mm">
                  The highlighted cells will remain N seconds for the user to
                  memorize the cells. At this point, the user should not be able
                  to perform any action.
                </li>
                <li className="li-rules-mm">
                  The user should be promoted to the next level if they guess
                  all N cells correctly in one attempt.
                </li>
                <li className="li-rules-mm">
                  After N seconds, the grid will clear the N highlighted cells.
                </li>
                <li className="li-rules-mm">
                  The user should be taken to the results page if the user
                  clicks on the wrong cell.
                </li>
                <li className="li-rules-mm">
                  If the user completed all the levels, then the user should be
                  taken to the results page.
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>

      <h1 className="head-rules-rps">Memory Matrix</h1>

      <p className="para-level-ele-mm">Level - 2</p>

      <div className="btns-container-mm ">
        <ul className="ul-row-container-mm ">
          {btnsList14.map(each => (
            <FourButtons
              data={each}
              increaseCount4={increaseCount4}
              highlight4={highlight4}
              key={each.id}
            />
          ))}
        </ul>

        <ul className="ul-row-container-mm ">
          {btnslist24.map(each => (
            <FourButtons
              data={each}
              increaseCount4={increaseCount4}
              highlight4={highlight4}
              key={each.id}
            />
          ))}
        </ul>

        <ul className="ul-row-container-mm ">
          {btnsList34.map(each => (
            <FourButtons
              data={each}
              increaseCount4={increaseCount4}
              highlight4={highlight4}
              key={each.id}
            />
          ))}
        </ul>

        <ul className="ul-row-container-mm ">
          {btnsList44.map(each => (
            <FourButtons
              data={each}
              increaseCount4={increaseCount4}
              highlight4={highlight4}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    </div>
  )

  const resultView2 = () => (
    <div className="result-bg">
      <div className="emojis-cont-result-mm">
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570147/05_Pokerface_gbwxlu.jpg"
          alt="neutral face"
        />
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570146/07_Grimmace_xgwnjp.png"
          alt="grimacing face"
        />
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570363/01_Smile_pjk7kd.png"
          alt="slightly smiling face"
        />
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570361/03_Optimistic_vztft7.png"
          alt="grinning face with big eyes"
        />
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570360/04_Grin_zpo1al.png"
          alt="grinning face with smiling eyes"
        />
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570358/05_Laugh_iqrl5v.png"
          alt="beaming face with smiling eyes"
        />
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570356/02_Happy_ewhijk.png"
          alt="grinning face"
        />
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570356/02_Like_a_boss_whisgm.png"
          alt="smiling face with sunglasses"
        />
      </div>
      <Line className="line-mm" percent={100} strokeColor="#467AFF" />
      <div className="levels-container-result-mm">
        <p>Level 1</p>
        <p>Level 5</p>
        <p>Level 10</p>
        <p>Level 15</p>
      </div>
      <h1 className="congo-head-res-mm">Congratulations!</h1>
      <h1>You have reached level 15</h1>
      <button
        onClick={playAgain}
        className="playAgain-btn-res-mm"
        type="button"
      >
        Play Again
      </button>
    </div>
  )

  const resultView1 = () => (
    <div className="result-bg">
      <div className="emojis-cont-result-mm">
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570147/05_Pokerface_gbwxlu.jpg"
          alt="neutral face"
        />
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570146/07_Grimmace_xgwnjp.png"
          alt="grimacing face"
        />
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570363/01_Smile_pjk7kd.png"
          alt="slightly smiling face"
        />
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570361/03_Optimistic_vztft7.png"
          alt="grinning face with big eyes"
        />
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570360/04_Grin_zpo1al.png"
          alt="grinning face with smiling eyes"
        />
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570358/05_Laugh_iqrl5v.png"
          alt="beaming face with smiling eyes"
        />
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570356/02_Happy_ewhijk.png"
          alt="grinning face"
        />
        <img
          className="emojis-result-mm"
          src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712570356/02_Like_a_boss_whisgm.png"
          alt="smiling face with sunglasses"
        />
      </div>
      <Line className="line-mm" percent={20} strokeColor="#467AFF" />
      <div className="levels-container-result-mm">
        <p>Level 1</p>
        <p>Level 5</p>
        <p>Level 10</p>
        <p>Level 15</p>
      </div>
      <h1 className="congo-head-res-mm">Congratulations!</h1>
      <h1>You have reached level 2</h1>
      <button
        className="playAgain-btn-res-mm"
        onClick={playAgain}
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
          case 'playing1':
            return playing1()
          case 'playing2':
            return playing2()
          case 'result1':
            return resultView1()
          case 'result2':
            return resultView2()
          default:
            return null
        }
      })()}
    </div>
  )
}

export default MemoryMatrix
