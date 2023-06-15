import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {

    category: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    color: [
      {
        colorTitle: {
          type: String,
        },
        colorCode: {
          type: String,
        },
        tallas: [
          {
            talla: {
              type: String,
            },
            stock:{
              type:Number
            }
          },
        ],
        imagenes: [
          {
            imagen: {
              type: String,
            },
          }
        ]
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = models.Product || model("Product", productSchema);

export default Product
