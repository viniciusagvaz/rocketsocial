/* eslint-disable react/prop-types */

export function Post(props){
  return (
    <div>
    <strong>{props.author}:</strong>
    <p>{props.content}</p>
    </div>
  )
}


// Default Exports vs Named Exports