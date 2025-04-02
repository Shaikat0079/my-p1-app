import Actor from './Actor'
import './App.css'
import Singer from './Singer'
// import Todo from './Todo'


function App(){

  const actors = [
    'Bappa Raj','Omor Sunny', 'Salman Shah','Jasim','Anwar'
  ]

  const singers = [
    {id:1, sName: 'Dr.Mahfuz',age:68},
    {id:2, sName: 'Tahsan',age:68},
    {id:3, sName: 'Dr.Mahfuz',age:68},
    {id:4, sName: 'Dr.Mahfuz',age:68},

  ]
  return(
    <>
    {
      singers.map(singer=><Singer key={singer.id} singer={singer}></Singer>)
    }
      {actors.map((actor,index)=><Actor actor={actor} key={index}></Actor>)}
    </>
  )
}


export default App
