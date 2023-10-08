import React from 'react';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {BasketModule} from "../../modules/BasketModule";

const BasketPage = observer(() => {

    return (
        <Container>
            <h1>Корзина</h1>
            <BasketModule/>
        </Container>
    );
});

export default BasketPage;
