import React from 'react';
import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <div className="loading">
            <div className="load">
                <ReactLoading type="spin" color="#023e8a" width={30} height={30} />
            </div>
            <h4>loading...</h4>
            
        </div>
    )
}
