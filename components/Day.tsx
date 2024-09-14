type Props = {
  day: string
  hour: string
}

const Day = ({ day, hour }: Props) => {
  return (
    <div className='flex items-center justify-between text-sm'>
      <p>{day}</p>
      <p>{hour}</p>
    </div>
  )
}

export default Day
