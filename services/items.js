


export async function getItems2() {
  
  const request = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  const response = await request;

  return response;
}

export async function getItems() {
  const request = await fetch("http://localhost:3000/api/productsApi").then(
    (res) => res.json()
  );

  const response = await request;

  return response;
}

export async function getItemsShowed(otherArray) {

  const request = await getItems();
  let result = [...otherArray]
  const filteredArray = request.filter((obj) => !result.includes(obj.id));
 






  

  return otherArray;
}
