import mongoose from "mongoose";

{
  "data": [
    {
      "productId": "0001111041600",
      "upc": "0001111041600",
      "brand": "Kroger",
      "categories": ["Dairy"],
      "description": "Kroger 2% Reduced Fat Milk",
      "items": [
        {
          "itemId": "0001111041600",
          "inventory": {
            "stockLevel": "HIGH"
          },
          "favorite": false,
          "fulfillment": {
            "curbside": true,
            "delivery": true
          },
          "price": {
            "regular": 1.49,
            "promo": 0
          },
          "size": "1/2 Gallon"
        }
      ],
      "temperature": {
        "indicator": "Refrigerated",
        "heatSensitive": false
      },
      "images": [
        {
          "perspective": "front",
          "featured": true,
          "sizes": [
            {
              "size": "xlarge",
              "url": "https://www.kroger.com/product/images/xlarge/front/0001111041600"
            },
            {
              "size": "small",
              "url": "https://www.kroger.com/product/images/small/front/0001111041600"
            },
            {
              "size": "large",
              "url": "https://www.kroger.com/product/images/large/front/0001111041600"
            },
            {
              "size": "medium",
              "url": "https://www.kroger.com/product/images/medium/front/0001111041600"
            },
            {
              "size": "thumbnail",
              "url": "https://www.kroger.com/product/images/thumbnail/front/0001111041600"
            }
          ]
        }
      ]
    }
  ]
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  brand: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  price: {
    type: Number,
    required: true
  },
  inStock: {
    type: Boolean,
    required: true
  },
  category: [String]
});

const Product = mongoose.model("Product", productSchema);

export default Product;
