import React from "react";
import data_body from "./Data_body";

function data_table({users}){
    return (
        <div>
            <table>
                <data_body users={users} />
            </table>
        </div>
    );
}

export default Data_table;