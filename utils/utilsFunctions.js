import { getItems } from "@/services/items";

export async function getPathsFromId() {
  const items = await getItems();
  const id = items.map((item) => {
    return { params: { id: `${getFriendlyTitle(item.title)}` } };
  });
  console.log(id);
  return id;
}

export async function getInfoProducts(id) {
  const items = await getItems();
  const info = items.find((item) => getFriendlyTitle(item.title) === id);
  console.log(info);
  return {
    info,
  };
}

export function getFriendlyTitle(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}

export async function getItemsByCategory(category) {
  const items = await getItems();
  const info = items.filter((item) => item.category === category);

  if (info.lenght < 1) {
    return false;
  }
  return info;
}
