import './Button.css';

export const Button = (props) => {
  const {children} = props
  
  return (

    // onClick={handleSend} 
    <button className="btn"
     {...props} 
     >
      {children}
    </button>
  )
}
