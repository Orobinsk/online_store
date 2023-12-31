import React from 'react';
import {Button} from "react-bootstrap";

const ErrorPage = () => {

    const reloadPage=()=>{
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }
    return (
        <div className={'text-center p-5'}>
            <p>Возникла непредвиденная ошибка</p>
            <Button variant={"primary"} onClick={reloadPage}>Обновить страницу</Button>
        </div>
    );
};

export default ErrorPage;