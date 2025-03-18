import React from "react";
import styled from "styled-components";

const Input = () => {
    return (
        <StyledWrapper>
        <input type="text" name="text" placeholder="Search Spareparts" className="input" />
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .input[type="text"] {
        display: block;
        color: rgb(34, 34, 34);
        background: linear-gradient(142.99deg, rgba(217, 217, 217, 0.63) 15.53%, rgba(243, 243, 243, 0.63) 88.19%);
        box-shadow: 0px 12px 24px -1px rgba(0, 0, 0, 0.18);
        border: none;
        border-radius: 50px;
        padding: 14px 15px;
        outline: none;
        text-align: center;
        width: 100%;
        max-width: 400px;
        transition: 0.5s;
    }

    .input[type="text"]:hover {
        max-width: 320px;
    }

    .input[type="text"]:focus {
        max-width: 350px;
    }

    @media (max-width: 768px) {
        .input[type="text"] {
            max-width: 280px;
            padding: 12px 10px;
        }

        .input[type="text"]:hover, .input[type="text"]:focus {
            max-width: 300px;
        }
    }

    @media (max-width: 480px) {
        .input[type="text"] {
            max-width: 220px;
            font-size: 14px;
        }
    }
`;

export default Input;
