import productImg01 from "../images/featured_1.1.png";
import productImg02 from "../images/featured_1.2.png";
import productImg03 from "../images/featured_2.1.png";

import productImg04 from "../images/featured_2.2.png";
import productImg05 from "../images/featured_3.1.png";
import productImg06 from "../images/featured_3.2.png";
import productImg007 from "../images/featured_4.1.png";

import productImg07 from "../images/featured_4.2.png";
// import productImg08 from "../images/arm-chair-02.jpg";
// import productImg09 from "../images/arm-chair-03.jpg";
// import productImg10 from "../images/arm-chair-01.jpg";

// import productImg13 from "../images/phone-01.jpg";
// import productImg14 from "../images/phone-02.jpg";
// import productImg15 from "../images/phone-03.png";
// import productImg16 from "../images/phone-04.jpg";
// import productImg17 from "../images/phone-05.jpg";
// import productImg18 from "../images/phone-06.jpg";

// import productImg19 from "../images/watch-01.jpg";
// import productImg20 from "../images/watch-02.jpg";
// import productImg21 from "../images/watch-03.jpg";
// import productImg22 from "../images/watch-04.jpg";

// import productImg23 from "../images/wireless-01.png";

// import productImg25 from "../images/wireless-03.png";

const products = [
  {
    id: "1",
    title: "Floral Print Palazzo Set ",
    isNew:true,
    imgUrl: productImg01,
    imgUrl1: productImg02,
    category: "kurta",
    oldPrice:4000,
    price: 3490,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "2",
    title: "Printed Satin Flared Dress ",
    imgUrl: productImg03,
    imgUrl1: productImg04,
    category: "kurta",
    oldPrice:3780,
    price: 3000,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "3",
    title: "Blue Print Mandarin  collar Top",
    imgUrl: productImg05,
    imgUrl1: productImg06,
    category: "kurta",
    oldPrice:2500,
    price: 1999,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
//   {
//     id: "26",
//     productName: "Rivet Bigelow Modern ",
//     imgUrl: productImg02,
//     category: "kurta",
//     price: 253,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.8,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.8,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.7,
//   },
  {
    id: "4",
    title: "Printed Embroidered Dress",
    imgUrl: productImg07,
    imgUrl1:productImg007,
    category: "kurta",
    isNew:true,
    oldPrice:4500,
    price: 3999,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  // {
  //   id: "5",
  //   title: "Floral Printed Pure Georgette Bandhani Saree",
  //   imgUrl: productImg05,
  //   category: "saree",
  //   isNew:true,
  //   oldPrice:5000,
  //   price: 163,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.6,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.7,
  // },

  // {
  //   id: "6",
  //   title: "Floral Printed Pure Georgette Bandhani Saree",
  //   imgUrl: productImg06,
  //   category: "saree",
  //   oldPrice:5900,
  //   price: 163,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.6,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.7,
  // },
  // {
  //   id: "7",
  //   title: "Floral Printed Pure Georgette Bandhani Saree",
  //   imgUrl: productImg07,
  //   category: "saree",
  //   isNew:true,
  //   oldPrice:4500,
  //   price: 99,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.6,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.7,
  // },

  // {
  //   id: "8",
  //   title: "Floral Printed Pure Georgette Bandhani Saree",
  //   imgUrl: productImg007,
  //   category: "saree",
  //   oldPrice:3400,
  //   price: 173,
  //   shortDesc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //   reviews: [
  //     {
  //       rating: 4.6,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       rating: 4.9,
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     },
  //   ],
  //   avgRating: 4.7,
  // },

//   {
//     id: "08",
//     productName: "Baltsar Chair",
//     imgUrl: productImg08,
//     category: "chair",
//     price: 89,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.6,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.7,
//   },

//   {
//     id: "09",
//     productName: "Helmar Chair",
//     imgUrl: productImg09,
//     category: "chair",
//     price: 112,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.6,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.7,
//   },

//   {
//     id: "10",
//     productName: "Apple iPhone 12 Pro",
//     imgUrl: productImg13,
//     category: "mobile",
//     price: 799,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.8,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.8,
//   },
//   {
//     id: "25",
//     productName: "Sakarias Armchair",
//     imgUrl: productImg10,
//     category: "chair",
//     price: 99,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.6,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.7,
//   },
//   {
//     id: "11",
//     productName: "Apple iPhone 12 Max",
//     imgUrl: productImg14,
//     category: "mobile",
//     price: 799,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.8,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.8,
//   },

//   {
//     id: "12",
//     productName: "Realme 8",
//     imgUrl: productImg15,
//     category: "mobile",
//     price: 599,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.8,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.8,
//   },

//   {
//     id: "13",
//     productName: "One Plus Nord",
//     imgUrl: productImg16,
//     category: "mobile",
//     price: 799,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.8,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.8,
//   },

//   {
//     id: "14",
//     productName: "Apple iPhone 13 Pro",
//     imgUrl: productImg17,
//     category: "mobile",
//     price: 899,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.8,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.8,
//   },

//   {
//     id: "15",
//     productName: "Samsung Galaxy S22",
//     imgUrl: productImg18,
//     category: "mobile",
//     price: 699,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.8,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.8,
//   },

//   {
//     id: "16",
//     productName: "Rolex Watch",
//     imgUrl: productImg19,
//     category: "watch",
//     price: 299,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.8,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.8,
//   },

//   {
//     id: "17",
//     productName: "Timex Easy Reader Watch",
//     imgUrl: productImg20,
//     category: "watch",
//     price: 299,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.8,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.8,
//   },

//   {
//     id: "18",
//     productName: "Rolex Watch",
//     imgUrl: productImg21,
//     category: "watch",
//     price: 299,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.8,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.8,
//   },

//   {
//     id: "19",
//     productName: "Apple Watch",
//     imgUrl: productImg22,
//     category: "watch",
//     price: 399,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.8,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.8,
//   },

//   {
//     id: "20",
//     productName: "Beat Studio Wireless",
//     imgUrl: productImg23,
//     category: "wireless",
//     price: 199,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.8,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.8,
//   },

//   {
//     id: "22",
//     productName: "Beat EP Headphones",
//     imgUrl: productImg25,
//     category: "wireless",
//     price: 199,
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
//     reviews: [
//       {
//         rating: 4.8,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         rating: 4.9,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.8,
//   },
];

export default products;