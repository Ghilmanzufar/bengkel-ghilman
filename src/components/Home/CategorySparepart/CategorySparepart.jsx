import React from "react";
import styled from "styled-components";
import Card from "./CardCategorySparepart";
import sukucadang from "./assets/SukuCadang.jpg";
import pengapian from "./assets/SistemPengapian.jpg";
import kelistrikan from "./assets/Kelistrikan.jpg";
import kakiKaki from "./assets/KakiKaki.jpg";
import bahanBakar from "./assets/BahanBakar.jpg";
import pendingin from "./assets/Pendingin.jpg";
import transmisi from "./assets/Transmisi.jpg";
import rem from "./assets/Rem.jpg";
import knalpot from "./assets/Knalpot.jpg";
import aksesoris from "./assets/Aksesoris.jpg";

const categories = [
    { name: "Suku Cadang", link: "/sparepart/suku-cadang", image: sukucadang },
    { name: "Sistem Pengapian", link: "/sparepart/pengapian",image: pengapian  },
    { name: "Sistem Kelistrikan", link: "/sparepart/kelistrikan", image: kelistrikan},
    { name: "Sistem Kaki - Kaki", link: "/sparepart/kaki-kaki", image: kakiKaki},
    { name: "Sistem Bahan Bakar", link: "/sparepart/bahan-bakar", image: bahanBakar},
    { name: "Sistem Pendingin", link: "/sparepart/pendingin", image: pendingin },
    { name: "Sistem Transmisi & CVT", link: "/sparepart/transmisi-cvt", image: transmisi},
    { name: "Sistem Rem", link: "/sparepart/rem", image: rem },
    { name: "Sistem Knalpot", link: "/sparepart/knalpot", image: knalpot},
    { name: "Aksesoris & Body Part", link: "/sparepart/aksesoris", image: aksesoris}
];

const SparepartCategory = () => {
    return (
        <Section>
            <h2 className="font-Sriracha text-4xl">Kategori Sparepart</h2>
            <CategoryGrid>
                {categories.map((category, index) => (
                    <Card key={index} title={category.name} link={category.link} image={category.image} />
                ))}
            </CategoryGrid>
        </Section>
    );
};

const Section = styled.section`
    text-align: center;
    padding: 100px;
    background: radial-gradient(circle at center, #3A4750 10%, #222831 80%);
    h2 {
        padding-bottom: 50px;
    }
`;

const CategoryGrid = styled.div`
     display: grid;
    grid-template-columns: repeat(4, 1fr); /* Default 4 kolom */
    gap: 0.8rem;
    justify-content: center;
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr); /* Tetap 4 kolom */
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr); /* 4 kolom tetap */
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr); /* HP kecil jadi 2 kolom */
    }
`;

export default SparepartCategory;