// Write your code here

import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {id, name, teamImageUrl} = teamData

    return (
      <Link to={`/team-matches/${id}`}>
        <li className="totalContainer">
          <img src={teamImageUrl} alt={`item${name}`} />
          <p>{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
