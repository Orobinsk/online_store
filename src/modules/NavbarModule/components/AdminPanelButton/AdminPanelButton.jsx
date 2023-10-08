import React, {memo, useContext} from 'react';
import {Button} from "react-bootstrap";
import {ADMIN_ROUTE} from "../../../../utils/const";
import {MdAdminPanelSettings} from "react-icons/md";
import {Context} from "../../../../index";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const AdminPanelButton = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    return (
        user.user && user.user.role === 'admin' &&
        <Button
            className="mt-1 ms-lg-2 mt-lg-0"
            variant={"outline-light"}
            onClick={() => navigate(ADMIN_ROUTE)}
        >
            <div className='d-flex align-items-center justify-content-center'>
                <MdAdminPanelSettings/><span className='ms-1'>Админ панель</span>
            </div>
        </Button>
    );
});

export default memo(AdminPanelButton);