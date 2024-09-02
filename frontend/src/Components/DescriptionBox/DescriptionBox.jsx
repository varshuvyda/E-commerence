import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Shopper is a leading online shopping destination offering a wide range of products from 
                top brands across various categories. Our mission is to provide customers with a seamless and enjoyable shopping experience by offering 
                high-quality products, competitive prices, and exceptional customer service. we are passionate about delivering an exceptional shopping experience. 
                Our team works tirelessly to curate the best products from around the world, ensuring that our customers have access to the latest trends and 
                top-quality items. Whether you're shopping for yourself or looking for the perfect gift, TrendyHub has something for everyone.
                "Your One-Stop Shop for All Things Trendy"</p>
                <p>Wide Range of Products:

          Fashion: Men's, Women's, and Kids' clothing, shoes, and accessories.
          Electronics: Smartphones, laptops, cameras, and accessories.
          Home & Kitchen: Furniture, decor, appliances, and kitchenware.
          Beauty & Health: Skincare, makeup, personal care products.
          Sports & Outdoors: Fitness equipment, outdoor gear, and activewear.</p>
        </div>
    </div>
  )
}
export default DescriptionBox