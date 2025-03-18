import React from "react";
import styled from "styled-components";
import Input from "./Input";
import bgImage from './bg-search.jpg';

const SearchSection = () => {
    return (
        <Section>
            <Content>
                <h1 className="font-Sriracha font-semibold text-5xl">Cari Sparepart yang Anda Butuhkan</h1>
                <Input />
            </Content>
        </Section>
    );
};

const Section = styled.section`
    height: 60vh;
    background: url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Content = styled.div`
    padding: 2rem;
    border-radius: 10px;

    h1 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }
`;

export default SearchSection;
