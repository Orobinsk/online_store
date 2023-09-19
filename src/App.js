import AppRouter from "./components/AppRouter";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {Container, Spinner} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let userData=localStorage.getItem('token')
        if(userData){
                user.setUser(user)
                user.setIsAuth(true)
            }
        setLoading(false)
    }, [])

    if (loading) {
        return(
            <Container >
                <Spinner animation={"grow"}/>
            </Container>
        )
    }
    return (
            <AppRouter/>
    );
})

export default App;
