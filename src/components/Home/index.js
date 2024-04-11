import {Link} from 'react-router-dom'

import './index.css'

const Home = () => (
  <div className="home-container">
    <h1 className="head-home">Games</h1>
    <div className="cards-container-home">
      <Link to="/emoji-game" className="link-home">
        <div className="cards-home">
          <img
            className="image-emoji-home"
            src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712164641/HomeEmoji.png"
            alt="emoji game"
          />
        </div>
      </Link>

      <Link to="/memory-matrix" className="link-home">
        <div className="cards-home">
          <h1 className="head-memory-matrix-home">Memory Matrix</h1>
          <img
            className="image-memory-home"
            src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712166840/memory_yv0wxt.png"
            alt="memory matrix"
          />
        </div>
      </Link>

      <Link to="/rock-paper-scissor" className="link-home">
        <div className="cards-home">
          <h1 className="head-memory-matrix-home">ROCK PAPER SCISSOR</h1>
          <img
            className="image-rock-home"
            src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712167301/Group_7469_s1vsvk.png"
            alt="rock paper scissor"
          />
        </div>
      </Link>

      <Link to="/card-flip-memory-game" className="link-home">
        <div className="cards-home">
          <img
            className="image-animals-home"
            src="https://res.cloudinary.com/dx3xlrbl6/image/upload/v1712167471/animals_kkerfl.png"
            alt="card flip memory game"
          />
        </div>
      </Link>
    </div>
  </div>
)

export default Home
