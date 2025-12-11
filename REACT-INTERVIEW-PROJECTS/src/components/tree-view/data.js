export const menus = [
  {
    id: 1,
    label: "Home",
    to: "/",
  },
  {
    id:2,
    label: "Profile",
    to: "/profile",
    children: [
      {
        id:3,
        label: "Details",
        to: "details",
        children: [
          {
            id:4,
            label: "Location",
            to: "location",
            children: [
              {
                id:5,
                label: "City",
                to: "city"
              }
            ]
          },
        ],
      },
    ],
  },
   {
    id:6,
    label: "Setting",
    to: "/setting",
    children: [
      {
        id:7,
        label: "Security",
        to: "security",
        children: [
          {
            id:8,
            label: "Authentication",
            to: "authentication",
            children: [
              {
                id:9,
                label: "Payload",
                to: "payload"
              }
            ]
          },
        ],
      },
    ],
  },
];

export default menus;
