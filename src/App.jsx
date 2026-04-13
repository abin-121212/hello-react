import React from "react"
import Card from "./Cards" 
import Student from "./Student"
import UserGreetings from "./UserGreetings"
function App() {
	return (
		<>
		 <Student name="Abin" age={23} gender="Male"></Student>
		 <Student name="Appu" ae={24} gender="Female"></Student>
		 <UserGreetings value={false} name="Abin"></UserGreetings>
		</>
	)
}

export default App
