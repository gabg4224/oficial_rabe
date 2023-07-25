import { useState } from "react";
import { useRouter } from "next/router";

export default function EditProduct({ info }) {
  const router = useRouter();
  const [product, setProduct] = useState({
    category: info.category,
    title: info.title,
    description: info.description,
    detalles: info.detalles || [],
    price: info.price,
    color: info.color,
    detalles: info.detalles,
  });

  console.log(info);

  const handleAddColor = () => {
    setProduct((prevProduct) => {
      const newColor = {
        colorTitle: "",
        tallas: [
          {
            talla: "XS",
            stock: 0,
          },
          {
            talla: "S",
            stock: 0,
          },
          {
            talla: "M",
            stock: 0,
          },
          {
            talla: "L",
            stock: 0,
          },
          {
            talla: "XL",
            stock: 0,
          },
          {
            talla: "2XL",
            stock: 0,
          },
        ],
        imagenes: [
          {
            imagen: "",
          },
          {
            imagen: "",
          },
          {
            imagen: "",
          },
          {
            imagen: "",
          },
          {
            imagen: "",
          },
          {
            imagen: "",
          },
          {
            imagen: "",
          },
          {
            imagen: "",
          },
          {
            imagen: "",
          },
          {
            imagen: "",
          },
        ],
      };

      return {
        ...prevProduct,
        color: [...prevProduct.color, newColor],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    try {
      await fetch(`/api/products/${info._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      router.push("/admin");
    } catch (error) {
      console.error("Error:", error);
      // Manejar cualquier error de red u otro error que pueda ocurrir
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));

    console.log(product);
  };

  const handleRemoveColor = (colorIndex) => {
    setProduct((prevProduct) => {
      const updatedColors = [...prevProduct.color];
      updatedColors.splice(colorIndex, 1);
      console.log(updatedColors);
      return {
        ...prevProduct,
        color: updatedColors,
      };
    });
  };
  const handleChangeColor = (e, colorIndex) => {
    const { name, value } = e.target;

    setProduct((prevProduct) => {
      const updatedColors = [...prevProduct.color];
      updatedColors[colorIndex] = {
        ...updatedColors[colorIndex],
        colorTitle: value,
      };

      return {
        ...prevProduct,
        color: updatedColors,
      };
    });
  };

  const handleChangeColorCode = (e, colorIndex) => {
    const { name, value } = e.target;

    setProduct((prevProduct) => {
      const updatedColors = [...prevProduct.color];
      updatedColors[colorIndex] = {
        ...updatedColors[colorIndex],
        colorCode: value,
      };

      return {
        ...prevProduct,
        color: updatedColors,
      };
    });
  };

  const handleChangeStock = (e, colorIndex, sizeIndex) => {
    const { value } = e.target;

    setProduct((prevProduct) => {
      const updatedColors = [...prevProduct.color];
      const updatedSizes = [...updatedColors[colorIndex].tallas];
      updatedSizes[sizeIndex] = {
        ...updatedSizes[sizeIndex],
        stock: parseInt(value),
      };
      updatedColors[colorIndex] = {
        ...updatedColors[colorIndex],
        tallas: updatedSizes,
      };

      return {
        ...prevProduct,
        color: updatedColors,
      };
    });
  };

  const handleChangeImage = (e, colorIndex, imageIndex) => {
    const { value } = e.target;

    setProduct((prevProduct) => {
      const updatedColors = [...prevProduct.color];
      const updatedImages = [...updatedColors[colorIndex].imagenes];
      updatedImages[imageIndex] = {
        ...updatedImages[imageIndex],
        imagen: value,
      };
      updatedColors[colorIndex] = {
        ...updatedColors[colorIndex],
        imagenes: updatedImages,
      };

      return {
        ...prevProduct,
        color: updatedColors,
      };
    });
  };

  const handleChangeDetalles = (e, index) => {
    const { name, value } = e.target;

    setProduct((prevProduct) => {
      const updatedDetalles = [...prevProduct.detalles];
      updatedDetalles[index] = {
        ...updatedDetalles[index],
        detalle: value,
      };

      return {
        ...prevProduct,
        detalles: updatedDetalles,
      };
    });
  };

  return (
    <>
      <div className="min-h-screen w-screen bg-gray-200 flex justify-center pt-6 ">
        <div className="w-1/3">
          <form onSubmit={handleSubmit} action="" method="post">
            <div className=" flex flex-col gap-3">
              <div>
                <label htmlFor="Categoria">Categoria</label>
                <input
                  type="text"
                  name="category"
                  placeholder="cargo o sueter"
                  className=" w-full h-10 flex p-2 "
                  onChange={handleChange}
                  value={product.category}
                />
              </div>
              <div>
                <label htmlFor="Titulo">Titulo</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Titulo..."
                  className=" w-full h-10 flex p-2 "
                  onChange={handleChange}
                  value={product.title}
                />
              </div>
              <div>
                <label htmlFor="Descricion">Descripcion</label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Descripcion..."
                  className="  w-full h-24 flex p-2 "
                  onChange={handleChange}
                  value={product.description}
                />
              </div>
              <div>

                <label htmlFor="Detalles">Detalles/Highlights</label>
                <input
                  className="border border-gray-400 w-full"
                  type="text"
                  name={`detalle`}
                  value={product.detalles[0].detalle  || ""}
                  onChange={(e) => handleChangeDetalles(e, 0)}
                />
                <input
                  className="border border-gray-400 w-full"
                  type="text"
                  name={`detalle`}
                  value={product.detalles[1].detalle || ""}
                  onChange={(e) => handleChangeDetalles(e, 1)}
                />
                <input
                  className="border border-gray-400 w-full"
                  type="text"
                  name={`detalle`}
                  value={product.detalles[2].detalle  || ""}
                  onChange={(e) => handleChangeDetalles(e, 2)}
                />
                <input
                  className="border border-gray-400 w-full"
                  type="text"
                  name={`detalle`}
                  value={product.detalles[3].detalle  || ""}
                  onChange={(e) => handleChangeDetalles(e, 3)}
                />
                <input
                  className="border border-gray-400 w-full"
                  type="text"
                  name={`detalle`}
                  value={product.detalles[4].detalle  || ""}
                  onChange={(e) => handleChangeDetalles(e, 4)}
                />
                <input
                  className="border border-gray-400 w-full"
                  type="text"
                  name={`detalle`}
                  value={product.detalles[5].detalle  || ""}
                  onChange={(e) => handleChangeDetalles(e, 5)}
                />
              </div>
              <div className="py-2">
                <label htmlFor="Precio">Precio</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Precio..."
                  className=" w-full h-10 flex p-2 "
                  min={1}
                  onChange={handleChange}
                  value={product.price}
                />
              </div>
            </div>

            {/* Colores */}
            {product.color.map((colorField, colorIndex) => (
              <div
                key={colorIndex}
                className="w-full bg-white rounded flex flex-col p-2 py-4 gap-3 "
              >
                <h3 className="text-center">Color {colorIndex + 1}</h3>
                <div>
                  <label htmlFor={`colors[${colorIndex}].name`}>Color:</label>
                  <input
                    type="text"
                    name={`color[${colorIndex}].colorTitle`}
                    placeholder="color"
                    className="pl-2"
                    onChange={(e) => handleChangeColor(e, colorIndex)}
                    value={product.color[colorIndex].colorTitle}
                  />
                  <input
                    type="text"
                    name={`color[${colorIndex}].colorCode`}
                    placeholder="(#)codigoHexadecimal"
                    className="pl-2"
                    onChange={(e) => handleChangeColorCode(e, colorIndex)}
                    value={product.color[colorIndex].colorCode}
                  />
                </div>
                <div className="flex flex-col justify-cente gap-3 items-center">
                  {/* Tallas y stock */}
                  {colorField.tallas.map((sizeField, sizeIndex) => (
                    <div
                      key={sizeIndex}
                      className="flex  w-3/5  items-center border border-gray-400 py-2 rounded-md gap-1 justify-between  px-3"
                    >
                      <div className="pl-6">{sizeField.talla}</div>

                      <input
                        type="number"
                        name={`color[${colorIndex}].tallas[${sizeIndex}].stock`}
                        min={0}
                        value={sizeField.stock}
                        onChange={(e) =>
                          handleChangeStock(e, colorIndex, sizeIndex)
                        }
                        className="w-10"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center"> </div>

                {/* Imágenes */}
                <div className="flex flex-col justify-center items-center border border-gray-400">
                  <label htmlFor={`colors[${colorIndex}].images`}>
                    Imágenes:
                  </label>
                  <input
                    className="border border-gray-400 w-full"
                    type="text"
                    name={`color[${colorIndex}].imagenes[0].imagen`}
                    value={colorField.imagenes[0].imagen}
                    onChange={(e) => handleChangeImage(e, colorIndex, 0)}
                  />
                  <input
                    className="border border-gray-400 w-full"
                    type="text"
                    name={`color[${colorIndex}].imagenes[1].imagen`}
                    value={colorField.imagenes[1].imagen}
                    onChange={(e) => handleChangeImage(e, colorIndex, 1)}
                  />
                  <input
                    className="border border-gray-400 w-full"
                    type="text"
                    name={`color[${colorIndex}].imagenes[2].imagen`}
                    value={colorField.imagenes[2].imagen}
                    onChange={(e) => handleChangeImage(e, colorIndex, 2)}
                  />
                  <input
                    className="border border-gray-400 w-full"
                    type="text"
                    name={`color[${colorIndex}].imagenes[3].imagen`}
                    value={colorField.imagenes[3].imagen}
                    onChange={(e) => handleChangeImage(e, colorIndex, 3)}
                  />
                  <input
                    className="border border-gray-400 w-full"
                    type="text"
                    name={`color[${colorIndex}].imagenes[4].imagen`}
                    value={colorField.imagenes[4].imagen}
                    onChange={(e) => handleChangeImage(e, colorIndex, 4)}
                  />
                  <input
                    className="border border-gray-400 w-full"
                    type="text"
                    name={`color[${colorIndex}].imagenes[5].imagen`}
                    value={colorField.imagenes[5].imagen}
                    onChange={(e) => handleChangeImage(e, colorIndex, 5)}
                  />
                  <input
                    className="border border-gray-400 w-full"
                    type="text"
                    name={`color[${colorIndex}].imagenes[6].imagen`}
                    value={colorField.imagenes[6].imagen}
                    onChange={(e) => handleChangeImage(e, colorIndex, 6)}
                  />
                  <input
                    className="border border-gray-400 w-full"
                    type="text"
                    name={`color[${colorIndex}].imagenes[7].imagen`}
                    value={colorField.imagenes[7].imagen}
                    onChange={(e) => handleChangeImage(e, colorIndex, 7)}
                  />
                  <input
                    className="border border-gray-400 w-full"
                    type="text"
                    name={`color[${colorIndex}].imagenes[8].imagen`}
                    value={colorField.imagenes[8].imagen}
                    onChange={(e) => handleChangeImage(e, colorIndex, 8)}
                  />
                  <input
                    className="border border-gray-400 w-full"
                    type="text"
                    name={`color[${colorIndex}].imagenes[9].imagen`}
                    value={colorField.imagenes[9].imagen}
                    onChange={(e) => handleChangeImage(e, colorIndex, 9)}
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="button"
                    className="bg-red-500 text-white font-bold py-1 px-2 rounded w-2/4"
                    onClick={() => handleRemoveColor(colorIndex)}
                  >
                    Eliminar color
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddColor}
            >
              Agregar color
            </button>

            <div className="w-full  pt-3 flex justify-center  mb-4">
              <input
                type="submit"
                value={"Guardar"}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer "
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { query } = context;

  const productID = query.id;

  const res = await fetch(`${process.env.BASE_URL}/api/products/${productID}`);
  const info = await res.json();
  return { props: { info } };
};
