import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";
import bgImage from './bg-article.jpg';
import merawat from './assets/rawat.jpg';
import hemat from './assets/bensin.jpg';
import velg from './assets/velg.jpg';
import servis from './assets/servis.jpg';


const Card = ({ title, description, image }) => {
    return (
        <div className="relative flex flex-col w-full max-w-xs mx-auto rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-xl" />
            <div className="p-4">
                <h5 className="text-sm font-semibold text-gray-900">{title}</h5>
                <p className="text-sm text-gray-700 mt-2">{description}</p>
            </div>
            <div className="p-4 pt-0">
                <button className="w-full text-sm px-2 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
                    Baca Selengkapnya
                </button>
            </div>
        </div>
    );
};

const TipsArticlesSection = () => {
    const articles = [
        { id: 1, title: '5 Tips Merawat Mesin Motor', description: '', image: merawat},
        { id: 2, title: 'Cara Menghemat ', description: '', image: hemat },
        { id: 3, title: 'Modifikasi Velg', description: '', image: velg },
        { id: 4, title: 'Pentingnya Servis Kendaraan', description: '', image: servis },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Section className="py-20 px-8 bg-gray-100">
            <div className="max-w-6xl mx-auto text-left mb-10">
                <h2 className="text-3xl font-bold text-white">Tips dan Artikel</h2>
            </div>
            <Slider {...settings} className="px-4 py-5">
                {articles.map((article) => (
                    <div key={article.id} className="px-2">
                        <Card title={article.title} description={article.description} image={article.image} />
                    </div>
                ))}
            </Slider>
        </Section>
    );
};


const Section = styled.section`
    background: url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
`;


export default TipsArticlesSection;
