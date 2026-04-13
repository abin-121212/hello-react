
function Student(props)
{
    return(
    <>
     
        <br />
        <div>
        <h3>Name : {props.name}</h3>
        <h3>Age: {props.age}</h3>
        <h3>Gender: {props.gender}</h3>
        <br />
        </div>
        <hr />
    <br />
    </>
    );
}
export default Student