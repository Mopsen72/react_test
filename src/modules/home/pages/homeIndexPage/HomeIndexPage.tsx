import * as React from "react";
import {Typography} from "antd";

const {Title} = Typography;

const HomeIndexPage: React.FC = () => {
    return (
        <>
            <div className={"container"}>
                <Title level={2}>Добро пожаловать</Title>
            </div>
        </>
    )
}
export default HomeIndexPage