import './index.css'

const data = {
  register: 'REGISTERED',
  registerYet: 'YET_TO_REGISTER',
  closedRegister: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {onEventData} = props

  const OnDefault = () => (
    <div>
      <p> Click on an event, to view its registration details</p>
    </div>
  )

  const OnRegisterYet = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button>Register Here</button>
    </div>
  )

  const onRegistered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const OnClosedRegisterForm = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1> Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const onStatusDataResult = () => {
    switch (onEventData) {
      case data.registerYet:
        return OnRegisterYet()
      case data.register:
        return onRegistered()
      case data.closedRegister:
        return OnClosedRegisterForm()
      default:
        return OnDefault()
    }
  }

  return <div>{onStatusDataResult()}</div>
}

export default ActiveEventRegistrationDetails
