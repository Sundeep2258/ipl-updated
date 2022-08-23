import {Component} from 'react'
import {Link} from 'react-router-dom'
// import Loader from 'react-loader-spinner'

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

// import LatestMatch from '../LatestMatch'

// import MatchCard from '../MatchCard'

import './index.css'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {
    teamsData: {},
  }

  componentDidMount() {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()
    console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      //   latestMatchDetails: data.latest_match_details,
      //   recentMatches: data.recent_matches,
    }

    // console.log(updatedData.latestMatchData)

    this.setState({teamsData: updatedData})
  }

  render() {
    const {teamsData} = this.state
    const {teamBannerUrl} = teamsData

    return (
      <Link to="/team-matches">
        <div className="blog-list-container">
          <img src={teamBannerUrl} alt="teamBannerUrl" className="team-img" />
          <LatestMatch />
        </div>
      </Link>
    )
  }
}

export default TeamMatches
