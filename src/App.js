import AppRouter from "./providers/Router/AppRouter";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {Container, Spinner} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {check} from "./http/userApi";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const tokenInLocalStorage= localStorage.getItem('token')
        if (tokenInLocalStorage){
            check().then(data=>{
                user.setUser(data)
                user.setIsAuth(true)
            })
        }
        setLoading(false)
    }, [])

    if (loading) {
        return(
            <Container className='d-flex align-items-center justify-content-center mt-5' >
                <Spinner animation={"grow"}/>
            </Container>
        )
    }
    return (
    <AppRouter/>
    );
})

export default App;
