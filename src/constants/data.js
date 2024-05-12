import images from './images';

const phoSpecial = [
  {
    titleEng: 'Combo Phở/ Special Phở',
    titleVn: 'Steak, brisket, fatty flank, tendon, beef ball',
    price: '$13.5',
  },
  {
    titleEng: 'Beef Ball Phở',
    titleVn: 'Phở bò viên',
    price: '$12.95',
  },
  {
    titleEng: 'Steak Phở',
    titleVn: 'Phở bò tái',
    price: '$12.95',
  },
  {
    titleEng: 'Steak, Flank & Tendon Phở',
    titleVn: 'Phở tái, nạm',
    price: '$12.95',
  },
  {
    titleEng: 'Vegetable & Tofu Phở',
    titleVn: 'Phở rau đậu hủ',
    price: '$12.95',
  },
  {
    titleEng: 'Seafood Phở',
    titleVn: 'Phở hải sản',
    price: '$12.95',
  },
];

const ricePlateSpecial = [
  {
    titleEng: 'Grilled Pork Chops Rice',
    titleVn: 'Cơm sườn nướng',
    price: '$12.95',
  },
  {
    titleEng: "Shaking Beef & Fried Rice",
    titleVn: 'Cơm chiên bò lúc lắc',
    price: '$17.95',
  },
  {
    titleEng: 'Grilled New York Steak Rice',
    titleVn: 'Cơm bò New York',
    price: '$18.95',
  },
  {
    titleEng: 'Sweet & Sour Chicken Rice',
    titleVn: 'Cơm gà xào chua ngọt',
    price: '$16.95',
  },
  {
    titleEng: 'General Tso Chicken Rice',
    titleVn: 'Cơm gà tướng quân',
    price: '$16.95',
  },
  {
    titleEng: 'Mongolian Beef Rice',
    titleVn: 'Cơm bò mông cổ',
    price: '$17.95',
  },
];

const imagesGallery = [
  {
    images: images.gallery1
  },
  {
    images: images.gallery2
  },{
    images: images.gallery3
  },{
    images: images.gallery4
  },{
    images: images.gallery5
  },{
    images: images.gallery6
  },
];

const imagesCategory = [
  {
    image: images.milkteaCategory,
    title: 'Milk Tea',
  },
  {
    image: images.charamCategory,
    title: 'Spring Rolls'
  },
  {
    image: images.phoCategory,
    title: 'Pho'
  },
  {
    image: images.riceCategory,
    title: 'Rice Plates'
  },
  {
    image: images.otherCategory,
    title: 'Other'
  },
];

const imagesCategoryMenu = [
  {
    imageUrl: images.appetizer,
    title: 'Appetizer'
  },
  {
    imageUrl: images.bevergate,
    title: 'Bevergate'
  },
  {
    imageUrl: images.friedrice,
    title: 'Fried Rice'
  },
  {
    imageUrl: images.friednoodle,
    title: 'Stir - Fried Noodles'
  },
  {
    imageUrl: images.familysize,
    title: 'Family Size'
  },
  {
    imageUrl: images.noodlesoup,
    title: 'Noodles Soup'
  },
  {
    imageUrl: images.phoCategory,
    title: 'Pho'
  },
  {
    imageUrl: images.ricevermicellibowl,
    title: 'Rice Vermicelli Bowl'
  },
  {
    imageUrl: images.riceplate,
    title: 'Rice Plate'
  },
  {
    imageUrl: images.springroll,
    title: 'Spring Rolls'
  },
];
export default { phoSpecial, ricePlateSpecial, imagesGallery, imagesCategory, imagesCategoryMenu };
