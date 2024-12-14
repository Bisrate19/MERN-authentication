import { useContext } from "react"
import { UserContext } from "../../context/UserContext";


export default function Dashboard() {

    const { user } = useContext(UserContext);


  return (
    <div>
        <h1>dashboard</h1>
        {!!user && (<h2>hi{user.name}!</h2>)}
        
        </div>
  )
}
