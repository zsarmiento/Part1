import { Parts } from "./Parts";

export const Contents = (props) =>{
console.log(props);
    const parte1 =props.parts[0].name;
    const parte2 =props.parts[1].name;
    const parte3 =props.parts[2].name;
    const uno = props.parts[0].exercises;
    const dos = props.parts[1].exercises;
    const tres = props.parts[2].exercises;
    return(
        <div>
            <Parts parte={parte1} cant={uno}/>
            <Parts parte={parte2} cant={dos} />
            <Parts parte={parte3} cant={tres}/>            
        </div>
    )
}