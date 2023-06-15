
export function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export const  routes = [
  {
    label: "Shop",
    route: "/shop",
    icon: "BuildingStorefrontIcon",
  },
  {
    label: "By product",
    route: "/",
    icon: "BuildingStorefrontIcon",
    subMenu: true,
    subMenuItems: [
      { label: "cargos", route: "/shop/cargos", icon: "BuildingStorefrontIcon" },
      { label: "arriba", route: "/", icon: "BuildingStorefrontIcon" },
    ],
  },
  {
    label: "Costumer Service",
    route: "/costumerService",
    icon: "BuildingStorefrontIcon",
    subMenu: true,
    subMenuOpen: false,
    subMenuItems: [
      { label: "about", route: "/", icon: "BuildingStorefrontIcon" },
      { label: "charts", route: "/", icon: "BuildingStorefrontIcon" },
      { label: "contact", route: "/", icon: "BuildingStorefrontIcon" },
    ],
  },
];