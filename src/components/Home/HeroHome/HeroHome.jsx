import React from 'react';
import styled from 'styled-components';
import Card from './CardHeroHome';
import SplitText from './SplitText';
import Aurora from './CodeAurora';
import bgImage from './assets/bg-herohome.jpg';
import promoImage from './assets/PromoHome.jpg';
import bookingImage from './assets/BookingServis.jpg';


const HeroSection = () => {
    return (
        <StyledHero className='pb-8'>
            <Aurora
                colorStops={["57A6A1", "#577B8D", "#344C64"]}
                blend={0.17}
                amplitude={1.0}
                speed={1.8}
            />
            <div className="mb-8 pb-2">
                <SplitText
                    className="text-5xl font-Sriracha text-center mb-6 py-4"
                    text="Selamat Datang di Bengkel Sparepart Ghilman"
                    delay={200}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                />
            </div>
            <div className="cards-container">
                <div className="card-left">
                    <Card 
                        title="Promo Servis" 
                        description="Temukan promo menguntungkan." 
                        route="/promo"
                        image={promoImage}
                    />
                </div>
                <div className="card-right">
                    <Card 
                        title="Booking Servis" 
                        description="Pesan servis motor dengan mudah." 
                        route="/booking" 
                        image={bookingImage}
                    />
                </div>
            </div>
        </StyledHero>
    );
};

const StyledHero = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    

    .cards-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 800px;
    }

    .card-left, .card-right {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 768px) {
        .cards-container {
            flex-direction: column;
        }
        .card-left, .card-right {
            margin-bottom: 20px;
        }
    }
`;

export default HeroSection;
