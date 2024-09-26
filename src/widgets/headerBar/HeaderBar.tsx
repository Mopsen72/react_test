import * as React from "react";
import css from "./style.module.scss"
import {Button, Menu, MenuProps} from "antd";
import {LogoutOutlined} from "@ant-design/icons";

type MenuItem = Required<MenuProps>['items'][number];
const HeaderBar: React.FC = () => {
    const menuItems: MenuItem[] = [
        {title: "Меню"}
    ]

    return (
        <>
            <div className={`${css.headerBar}`}>
                <div className={`container ${css.headerBar__flexbox}`}>
                    <Menu items={menuItems}/>
                    <Button icon={<LogoutOutlined/>} shape={"circle"}></Button>
                </div>
            </div>
        </>)
}

export default HeaderBar