import {useState, useEffect} from 'react'

import './index.css'

const ThreeButtons = props => {
  const [applyClass, setApplyClass] = useState('single-btn-ele-mm')

  const {data, increaseCount, highlight3} = props
  const {id} = data

  let testId = ''

  useEffect(() => {
    if (highlight3.includes(id)) {
      testId = 'highlighted'
      setApplyClass('correct-btn-ele-mm')
    }

    const timeoutId = setTimeout(() => {
      setApplyClass('single-btn-ele-mm')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  const sendData = () => {
    const check = highlight3.filter(each => each === id)
    if (check.length !== 0) {
      setApplyClass('correct-btn-ele-mm')
    } else {
      setApplyClass('wrong-btn-ele-mm')
    }
    increaseCount(id)
  }

  return (
    <li>
      <button
        data-testid={testId}
        onClick={sendData}
        className={applyClass}
        type="button"
      >
        {}
      </button>
    </li>
  )
}

export default ThreeButtons
