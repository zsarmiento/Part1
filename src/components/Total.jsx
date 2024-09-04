export const Total = (props) => {
const uno = props.totalExercises[0].exercises;
const dos = props.totalExercises[1].exercises;
const tres = props.totalExercises[2].exercises;
//const total = props.totalExercises.reduce((acc,current)=>{
  //  return acc+current
//},0);
  return (
        <div>
            <p>Number of exercises {uno+dos+tres}</p>
        </div>
    )
}