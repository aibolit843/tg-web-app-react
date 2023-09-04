import React from 'react';
import Button from '../Button/Button';
import './ProductItem.css';

const ProductItem = ({ text, product, className, onAdd }) => {
    const onAddHendler = () => {
        onAdd(product);
    };
    return (
        <div className={'product ' + className}>
            <div className="img" />
            <div className="title">{product.title}</div>
            <div className="description">{product.description}</div>
            <div className="price">
                <span>
                    Стоимость: <b>{product.price}</b>
                </span>
            </div>
            <Button text={text} className={'add-btn'} onClick={onAddHendler} />
        </div>
    );
};

export default ProductItem;
