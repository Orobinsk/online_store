import React, {useContext, useState} from 'react';
import {Button} from "react-bootstrap";
import {CgProfile} from "react-icons/cg";
import {Context} from "../../../../index";
import AuthModal from "../AuthModal/AuthModal";

const ProfileButtons = () => {
    const [showAuthModal, setShowAuthModal] = useState(false)
    const {user} = useContext(Context)
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <>
            {user.isAuth ?
                <Button
                    variant={"outline-light"}
                    onClick={() => logOut()}
                    className="mt-1 ms-lg-2 mt-lg-0"
                >
                    <div className='d-flex align-items-center justify-content-center'>
                        <CgProfile/> <span className='ms-1'>Выйти</span>
                    </div>
                </Button>
                :
                <Button
                    className="mt-1 ms-lg-2 mt-lg-0"
                    variant={"outline-light"}
                    onClick={() => setShowAuthModal(true)}
                >
                    <div className='d-flex align-items-center justify-content-center'>
                        <CgProfile/> <span className='ms-1'>Войти</span>
                    </div>
                </Button>
            }
            <AuthModal show={showAuthModal} onHide={() => setShowAuthModal(false)}/>
        </>

    )
};

export default ProfileButtons;