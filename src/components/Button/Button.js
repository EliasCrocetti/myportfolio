import './Button.css';

export const Button = (props) => {
  const {children} = props
  console.log(props)
  return (

    <button className="btn"
     {...props} >
      {children}
    </button>
  )
}
