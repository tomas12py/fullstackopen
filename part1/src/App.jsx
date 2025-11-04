import { Content } from "../courseinfo/components/Content"
import { Header } from "../courseinfo/components/Header"
import { Total } from "../courseinfo/components/Total"


const App = () => {
  
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

  <div>

  <Header nameCourse={course.name}/>
  <Content courseInfo={course}/>
  <Total courseInfo={course} />

  </div>



)

}

export default App

