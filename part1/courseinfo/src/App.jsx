import { Content } from './components/Content'
import { Header } from './components/Header'
import { Total } from './components/Total'



export function App() {
  
   const course = {
    name: 'Half Stack application development',
    parts: [
      {
        nameCourse: 'Fundamentals of React',
        exercises: 10
      },
      {
        nameCourse: 'Using props to pass data',
        exercises: 7
      },
      {
        nameCourse: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <>
    <Header nameCourse={course.name}/>
    <Content courseInfo={course}/>
    <Total courseInfo={course}/>
    </>
  )
}


