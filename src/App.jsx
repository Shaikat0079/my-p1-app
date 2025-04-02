import './App.css'

function App() {


  return (
    <>
      <h1>Vite And React</h1>
      <Person></Person>
      <Sports></Sports>
      <Student sName='Shaikat' dept='Software'></Student>
      <Developer dName='Alpha' tech="React"></Developer>
    </>
  )
}

function Student({sName,dept}){
  return (
    <div className='student'>
      <h2>Name: {sName}</h2>
      <h4>Dept: {dept}</h4>
    </div>
  )
}
function Person(){

  const personStyle = {
    color: 'red',
    fontSize: 50,
  }
  const age = 28;
  const pName = "Alpha";
  return(
    <div style={personStyle}>
      <p>I am a Person!</p>
      <p>My age is {age}</p>
      <p>My name is {pName}</p>
    </div>
  )
}

function Developer({dName,tech}){
  // console.log(props)
  return (
    <div style={{
      border:'2px solid green',
      borderRadius:'20px'
    }}>
      <h3>Developer: {dName}</h3>
      <p>Technology: {tech}</p>
    </div>
  )
}

function Sports(){
  return(
    <div>
      <h3>Cricket</h3>
      <p>Playing and Loosing!</p>
    </div>
  )
}
export default App
