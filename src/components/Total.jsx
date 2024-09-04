export const Total = (props) => {
const uno = props.totalExercises[0];
const dos = props.totalExercises[1];
const tres = props.totalExercises[2];
//const total = props.totalExercises.reduce((acc,current)=>{
  //  return acc+current
//},0);
  return (
        <div>
            <p>Number of exercises {uno+dos+tres}</p>
        </div>
    )
}