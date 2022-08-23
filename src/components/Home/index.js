import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'
// import TeamMatches from '../TeamMatches'

class Home extends Component {
  state = {
    teamsData: [],
  }

  componentDidMount() {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()

    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.image_url,
    }))
    this.setState({teamsData: updatedData})
  }

  render() {
    const {teamsData} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="ipl-title">IPL Dashboard</h1>
        </div>
        <div className="menu-section">
          <ul className="ipl-menu">
            <li>
              {teamsData.map(item => (
                <TeamCard teamData={item} key={item.id} />
              ))}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Home
