import React, { Component } from 'react';
import './Header.css';
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
    const { user, onClose } = useTelegram();

    return (
        <div className={'header'}>
            <Button text="Закрыть" onClick={onClose} />
            <span className={'username'}>{user?.username}</span>
        </div>
    );
};

export default Header;
