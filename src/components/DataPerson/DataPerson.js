import './DataPerson.css';

export const DataPerson = (props) => {

  console.log(props, "props DataPerson")

  return (
  <div>
    <span> {props.text}</span>
  </div>
  )
}
