const Notification = ({ notification }) => {
  if (notification === null) {
    return null
  }
  return (
    <div className='notif'>
      {notification}
    </div>
  )
}

export default Notification