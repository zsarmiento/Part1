import { Parts } from "./Parts";

export const Contents = (props) =>{

    const parte1 =props.parts[0];
    const parte2 =props.parts[1];
    const parte3 =props.parts[2];
    const uno = props.totalExercises[0];
    const dos = props.totalExercises[1];
    const tres = props.totalExercises[2];
    return(
        <div>
            <p>{parte1} {uno}</p>
            <p>{parte2} {dos}</p>
            <p>{parte3} {tres}</p>
            
        </div>
    )
}