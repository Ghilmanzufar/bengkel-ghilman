import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, route, image }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route); // Arahkan ke halaman yang ditentukan
    };

    return (
        <StyledWrapper onClick={handleClick}>
            <div className="card">
                {image && <img src={image} alt={title} className="card__image" />}
                <div className="card__content">
                    <p className="card__title">{title}</p>
                    <p className="card__description">{description}</p>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    cursor: pointer; /* Tambahkan pointer saat hover */
    .card {
        position: relative;
        width: 350px;
        height: 250px;
        background-color: #f2f2f2;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        perspective: 1000px;
        box-shadow: 0 0 0 5px #ffffff80;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card__image {
        width: 100%;
        object-fit: cover; /* Supaya gambar tidak terdistorsi */
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .card svg {
        width: 48px;
        fill: #333;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
    }

    .card__content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        background-color: #f2f2f2;
        transform: rotateX(-90deg);
        transform-origin: bottom;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card:hover .card__content {
        transform: rotateX(0deg);
    }

    .card__title {
        margin: 0;
        font-size: 24px;
        color: #333;
        font-weight: 700;
    }

    .card:hover svg {
        scale: 0;
    }

    .card__description {
        margin: 10px 0 0;
        font-size: 14px;
        color: #777;
        line-height: 1.4;
    }
`;

export default Card;
