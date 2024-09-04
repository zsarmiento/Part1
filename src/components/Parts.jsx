
export const Parts = (props) => {
    console.log('ejemplo');
    console.log(props.parte);
    return(
        <div>
            <p>{props.parte} {props.cant}</p>
        </div>
    )
}
