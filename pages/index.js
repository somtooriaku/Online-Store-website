import React from 'react';
import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';

const Home = ({ products, bannerData}) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className="products-heading">
        <h2> All Apple's most innovative iPhones</h2>
        <p>Worldclass Phones, with no competition</p>
      </div>
      
      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  // grabs all products from the sanity dashboard
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  // grab all items with type banner. Send 
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;