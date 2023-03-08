
export const Planet = (props) => {
    console.log(props);
    return(
        <h1>
            {props.isGasPlanet && props.name}
        </h1>
    )
}