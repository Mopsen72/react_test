import css from "./style.module.scss"
import * as React from "react";
import {Button, Form, FormProps, Input, Typography} from "antd";
import {TAuthCredentials} from "./types";
import {auth} from "./api.ts";
import {useAppDispatch} from "../../../../app/hooks";
import {logedIn} from "../../app/store/profileSlice.ts";


const {Title} = Typography;

const AuthLoginPage: React.FC = () => {
    console.log("page");

    const dispatch = useAppDispatch();

    const submitForm: FormProps<TAuthCredentials>['onFinish'] = async (formValue: TAuthCredentials) => {
        try {
            const response = await auth(formValue);
            dispatch(logedIn, response);
        } catch (e) {
            console.error(e);
        }

    }


    return (
        <>
            <div className={`${css.card}`}>
                <Title level={2}>Авторизация</Title>
                <Form layout="vertical"
                      style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}
                      onFinish={submitForm}>
                    <Form.Item<TAuthCredentials>
                        label="Логин или email"
                        name="loginOrEmail"
                        style={{width: "100%"}}
                        rules={[{
                            required: true,
                            message: "Укажите логин или адрес электронной почты"
                        }]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item<TAuthCredentials>
                        label="Пароль"
                        name="password"
                        style={{width: "100%"}}
                        rules={[{
                            required: true,
                            message: "Укажите пароль"
                        }]}>
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">Войти</Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default AuthLoginPage