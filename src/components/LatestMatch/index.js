// Write your code here
import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch

    return (
      <div>
        <h1>Latest Match</h1>
        <div>
          <div>
            <p>{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img
            className="latest"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div>
          <div>
            <p>First Innings</p>
            <p>{firstInnings}</p>
          </div>

          <div>
            <p>second Innings</p>
            <p>{secondInnings}</p>
          </div>

          <div>
            <p>Man Of The Match</p>
            <p>{manOfTheMatch}</p>
          </div>

          <div>
            <p>Umpires</p>
            <p>{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
