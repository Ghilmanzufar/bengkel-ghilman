import React from "react";
import styled from "styled-components";

const Card = ({ title, link, image }) => {
    return (
        <StyledWrapper>
            <a href={link} className="card">
                <div className="image" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <span className="title">{title}</span>
            </a>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .card {
        position: relative;
        width: 11.875em;
        height: 16.5em;
        box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 120ms;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #EEEEEE;
        color: white;
        padding: 0.5em;
        padding-bottom: 3.4em;
        text-align: center;
        text-decoration: none;
        border-radius: 8px;
    }

    .card:hover {
        transform: scale(1.05);
        background: #00ADB5;
    }

    .card .title {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.9em;
        position: absolute;
        bottom: 1.5em;
        font-weight: bold;
        color: black;
    }

    .image {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        display: grid;
        place-items: center;
        border-radius: 8px;
    }
`;

export default Card;
