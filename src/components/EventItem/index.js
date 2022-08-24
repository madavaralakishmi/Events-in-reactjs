import './index.css'

const EventItem = props => {
  const {lists, isChecked, isActive} = props
  const {imageUrl, name, location, id} = lists

  const classData = isActive ? 'imageColor' : ' '

  const onButton = () => {
    isChecked(id)
  }

  return (
    <div>
      <button type="button" onClick={onButton}>
        <img src={imageUrl} alt="event" className={classData} />
      </button>
      <div className="arr">
        <p>{name}</p>
        <p className="p">{location}</p>
      </div>
    </div>
  )
}

export default EventItem
