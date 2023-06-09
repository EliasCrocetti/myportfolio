import './Button.css';

export const Button = (props) => {
  const {children} = props
  console.log(props)

  
  const handleSend = (event) => {
    console.log(event.target.value)
  };

  return (

    // onClick={handleSend} 
    <button className="btn"
     {...props} 
     >
      {children}
    </button>
  )
}
