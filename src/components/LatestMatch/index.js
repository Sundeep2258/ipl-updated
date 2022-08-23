import {Component} from 'react'

class LatestMatch extends Component {
  state = {
    latestMatchesData: {},
  }

  componentDidMount() {
    this.latestMatch()
  }

  latestMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()
    console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const latestMatchData = {
      competingTeam: updatedData.competing_team,
      competingTeamLogo: updatedData.competing_team_logo,
      date: updatedData.date,
      firstInnings: updatedData.first_innings,
      id: updatedData.id,
      manOfTheMatch: updatedData.man_of_the_match,
      matchStatus: updatedData.match_status,
      result: updatedData.result,
      secondInnings: updatedData.second_innings,
      umpires: updatedData.umpires,
      venue: updatedData.venue,
    }
    this.setState({latestMatchesData: latestMatchData})
  }

  render() {
    const {latestMatchesData} = this.state

    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      matchStatus,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatchesData

    return (
      <div className="latest-match">
        <ul>
          <li>{competingTeam}</li>
          <li>{date}</li>
          <li>{competingTeamLogo}</li>
          <li>{venue}</li>
        </ul>
        <img
          src={competingTeamLogo}
          alt="competingTeamLogo"
          className="team-logo"
        />
        <ul>
          <li>{firstInnings}</li>
          <li>{manOfTheMatch}</li>
          <li>{matchStatus}</li>
          <li>{result}</li>
          <li>{secondInnings}</li>
          <li> {umpires}</li>
        </ul>
      </div>
    )
  }
}

export default LatestMatch
