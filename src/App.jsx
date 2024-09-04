
import { Header } from "./components/Header"
import { Contents } from "./components/Contents"
import { Total } from "./components/Total"
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
   name:  'Fundamentals of React',
   exercises: 10
  }
  
  const part2 = {
  name: 'Using props to pass data',
  exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Contents parts = {[part1.name,part2.name,part3.name]} totalExercises = {[part1.exercises,part2.exercises,part3.exercises]} />
      <Total totalExercises = {[part1.exercises,part2.exercises,part3.exercises]}/>
    </div>
  )
}

export default App