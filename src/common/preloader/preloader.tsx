import 'antd/dist/antd.css'
import React from "react";
import {LoadingOutlined} from '@ant-design/icons';
// let Preloader = () => {
//     return <div style = {{backgroundColor: 'transparent'}}>
//         <img src={preloader}/>
//     </div>
// }

let Preloader = () => {
    return <div>
        <LoadingOutlined />
    </div>
}
export default Preloader