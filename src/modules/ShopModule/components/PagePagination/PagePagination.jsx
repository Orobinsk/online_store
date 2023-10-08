import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";
import {Pagination} from "react-bootstrap";
import fetchDevicesData from "../../api/fetchDevicesData";

const PagePagination = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    const selectPage=(page)=>{
        device.setPage(page)
        fetchDevicesData(device);
    }

    return (
        <Pagination className="mt-3">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={device.page === page}
                    onClick={() => selectPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default PagePagination;
