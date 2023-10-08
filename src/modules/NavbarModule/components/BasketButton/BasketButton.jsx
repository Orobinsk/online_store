import React, {useContext} from 'react';
import {BASKET_ROUTE} from "../../../../utils/const";
import {SlBasket} from "react-icons/sl";
import {Badge, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";

const BasketButton = observer(() => {
    const navigate = useNavigate()
    const {device} = useContext(Context)

    return (
        <Button
            variant={"outline-light"}
            onClick={() => navigate(BASKET_ROUTE)}
            className="mt-1 ms-lg-2 mt-lg-0"
        >
            <div className='d-flex align-items-center justify-content-center'>
                <SlBasket/><span className='ms-1'>Корзина</span>
                {device.basket.length > 0 &&
                    <Badge bg="warning">{device.basket.length}</Badge>
                }
            </div>
        </Button>
    );
});

export default BasketButton;