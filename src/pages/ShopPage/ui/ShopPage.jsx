import React from 'react';
import {observer} from "mobx-react-lite";
import ShopModule from "../../../modules/ShopModule";

const ShopPage = observer(() => {
    return (
       <ShopModule/>
    );
});

export default ShopPage;
