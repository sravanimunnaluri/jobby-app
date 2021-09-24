import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Jobs extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchValue: '',
    activeEmploymentId: '',
    activeSalaryRangeId: '',
  }

  componentDidMount = () => {
    this.getJobsDetails()
  }

  onChangeSearchInput = event => {
    this.setState({searchValue: event.target.value})
  }

  onEnterSearchInput = event => {
    if (event.key === 'enter') {
      this.setState({searchValue: event.target.value}, this.getJobsDetails)
    }
  }

  getJobsDetails = async () => {
    const {apiStatus} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      this.setState((apiStatus: apiStatusConstants.success))
    }
    const data = await response.json()
    console.log(data)
  }

  renderSearchInput = () => {
    const {searchValue} = this.input

    return (
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="search"
          onChange={this.onChangeSearchInput}
          onKeyDown={this.onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    console.log(this.props)
    const {router} = this.props

    console.log(router)

    return <div>header</div>
  }
}
export default Jobs
