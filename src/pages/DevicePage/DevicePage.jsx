import React, {memo} from 'react';
import {observer} from 'mobx-react-lite';
import {DeviceModule} from "../../modules/DeviceModule";

const DevicePage = observer(() => {
    return (
        <DeviceModule/>
    );
});

export default memo(DevicePage);
