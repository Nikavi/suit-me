import React from "react";
import "./FashionCompaniesPopup.css";

const FashionCompaniesPopup = ({ handleClose }) => {
  const fashionCompanies = [
    {
      name: "CDLP",
      description:
        "CDLP is a luxury Swedish brand specializing in men's underwear and loungewear. Their focus is on creating timeless designs with exceptional craftsmanship.",
      website: "https://cdlp.com/",
    },
    {
      name: "Acne Studios",
      description:
        "Acne Studios is a renowned Swedish fashion house known for its contemporary and avant-garde designs. They offer a wide range of clothing, accessories, and footwear for both men and women.",
      website: "https://www.acnestudios.com/se/en/home",
    },
    {
      name: "Filippa K",
      description:
        "Filippa K is a Swedish brand that emphasizes simplicity, sustainability, and timeless elegance. They offer a range of sophisticated clothing for men and women, including wardrobe staples and classic pieces.",
      website: "https://www.filippa-k.com/",
    },
    {
      name: "Rodebjer",
      description:
        "Rodebjer is a Swedish fashion brand with a focus on effortless and versatile designs. They offer clothing, accessories, and footwear for women, featuring artistic prints and relaxed silhouettes",
      website: "https://www.rodebjer.com/",
    },
    {
      name: "By Malina",
      description:
        "By Malina is a luxury Swedish brand known for its feminine and romantic designs. They specialize in dresses, but also offer a variety of clothing and accessories",
      website: "https://bymalina.com/",
    },
  ];

  const fashionCompanyList = fashionCompanies.map((company) => (
    <div key={company.name} className="company-card">
      <h3 className="company-name">{company.name}</h3>
      <p className="company-description">{company.description}</p>
      <a
        className="company-website"
        href={company.website}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Website
      </a>
    </div>
  ));

  return (
    <div className="fashion-companies-popup">
      <h2>Luxury Fashion Companies in Sweden</h2>
      <div>{fashionCompanyList}</div>
      <button className="fashion-close" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default FashionCompaniesPopup;
