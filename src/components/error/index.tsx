import './style.css'


type IProps = {
  error: Error | unknown
}
const ErrorMessage = ({ error }: IProps) => {

  const message = error instanceof Error ? error.message : 'Something went wrong!'

  return (
    <div className={'error-container'}>
      { message }
    </div>
  )
}

export default ErrorMessage