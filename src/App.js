import {Switch, Route} from 'react-router-dom'

import './App.css'

import Home from './components/Home'

import EmojiGame from './components/EmojiGame'

import MemoryMatrix from './components/MemoryMatrix'

import CardFlip from './components/CardFlip'

import RockPaperScissor from './components/RockPaperScissor'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/emoji-game" component={EmojiGame} />
    <Route exact path="/rock-paper-scissor" component={RockPaperScissor} />
    <Route exact path="/memory-matrix" component={MemoryMatrix} />
    <Route exact path="/card-flip-memory-game" component={CardFlip} />
  </Switch>
)

export default App
