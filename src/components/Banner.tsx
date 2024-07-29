import React from 'react'

const Banner = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 gap-2 sm:gap-8">
       
      <div className="overflow-hidden rounded-lg">
        <img className="hover:scale-105 transition-transform" src="https://gisbarbados.gov.bb/wp-content/uploads/2021/07/Goods-for-donation.jpg" alt="banner"/>
        </div>
        <div className="overflow-hidden rounded-lg">
        <img className="hover:scale-105 transition-transform" src="https://gisbarbados.gov.bb/wp-content/uploads/2021/07/Goods-for-donation.jpg" alt="banner"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
