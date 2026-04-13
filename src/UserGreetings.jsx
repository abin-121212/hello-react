

function UserGreetings (props)
{
     if(props.value)
     {
        return <h2> Welcome {props.name}</h2>
     }
     else{
        return <h2> Please Login</h2>
     }
}

export default UserGreetings