import React, { Component, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import './Footer.css'
import axios from 'axios';
const TOKEN = "7261271568:AAEUPvDUYSG0tr16Y6IIXlHhaFSs69bbTRI";
const CHAT_ID = "-1002182155054";
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
export default function Footer() {
    const [nameValue, setNameValue] = useState('');
    const [surnameValue, setSurNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [commentValue, setCommentValue] = useState('');
    const [dispaly, setDispaly] = useState('none');
    const handleSubmit = (e) => {
        e.preventDefault();

        let message = `<b>Заявка с сайта</b>\n`;
        message += `<b>Имя</b> ${nameValue}\n`;
        message += `<b>Фамилия</b> ${surnameValue}\n`;
        message += `<b>email</b> ${emailValue}\n`;
        message += `<b>Комментарий</b> ${commentValue}`;
        axios.post(URL_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            setNameValue('');
            setSurNameValue('');
            setEmailValue('');
            setCommentValue('');
            setDispaly('block')
        })
        .catch((err) => {
            console.warn(err);
        })
        .finally(() => {
            console.log("end");
        });
    };

    return (
        <div>
            <div className='footer-container'>
                <div id='footer-info' className='footer-info'>
                    <h1 className='footer-title' style={{ color: "white", fontSize: "200%", marginBottom: "10%" }}>Контакты</h1>
                    <div className='footer-subtitle'>
                        <span style={{ color: "white", fontSize: "150%", width: "60%" }}>Адрес</span>
                        <span style={{ color: "white" }}>Москва, м. Алексеевская</span>
                    </div>
                    <div className='info-footer-wrapper'>
                        <span style={{ color: "white", fontSize: "150%" }}>Для связи</span>
                        <span style={{ color: "white", width: "60%" }}>+7 (967)-118-18-85 (tg, whatsapp)
                            dashoostyna@gmail.com</span>
                    </div>
                </div>
                <div className='form'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group style={{ display: "flex", flexDirection: "column" }}>
                            <Form.Label style={{ color: "white" }}>Имя</Form.Label>
                            <Form.Control
                                style={{ backgroundColor: "#212121", border: "1px solid white", color: "white" }}
                                type='text'
                                value={nameValue}
                                onChange={(e) => setNameValue(e.target.value)}
                            />
                            <br />
                            <Form.Label style={{ color: "white" }}>Фамилия</Form.Label>
                            <Form.Control
                                style={{ backgroundColor: "#212121", border: "1px solid white", color: "white" }}
                                type='text'
                                value={surnameValue}
                                onChange={(e) => setSurNameValue(e.target.value)}
                            />
                            <br />
                            <Form.Label style={{ color: "white" }}>Электронная почта</Form.Label>
                            <Form.Control
                                style={{ backgroundColor: "#212121", border: "1px solid white", color: "white" }}
                                type='email'
                                value={emailValue}
                                onChange={(e) => setEmailValue(e.target.value)}
                            />
                            <br />
                            <Form.Label style={{ color: "white" }}>Комментарий</Form.Label>
                            <Form.Control
                                style={{ backgroundColor: "#212121", border: "1px solid white", color: "white" }}
                                as='textarea'
                                value={commentValue}
                                onChange={(e) => setCommentValue(e.target.value)}
                            />
                            <Button type='submit' variant='dark' style={{ marginTop: "5%" }}>Отправить</Button>
                            <Alert className='alert' style={{display: `${dispaly}`, marginTop: "5%"}} variant='success'>Сообщение отправлено!</Alert>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
}
