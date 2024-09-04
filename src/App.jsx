
import { Header } from "./components/Header"
import { Contents } from "./components/Contents"
import { Total } from "./components/Total"
const App = () => {
  const course = {
    name:'Half Stack application development',
    partes : [
              {
              name:  'Fundamentals of React',
              exercises: 10
              },
              
              {
              name: 'Using props to pass data',
              exercises: 7
              },

              {
                name: 'State of a component',
                exercises: 14
              }
            ]
          }
  return (
    <div>
      <Header course={course.name} />
      <Contents parts = {course.partes}  />
      <Total totalExercises={course.partes}/>
    </div>
  )
}

export default App