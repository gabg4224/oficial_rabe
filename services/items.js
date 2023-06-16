export async function getItems() {
  const res = await fetch(`${process.env.BASE_URL}/api/products`);
  const info = await res.json();

  return info;
}
