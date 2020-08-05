const cars = [
  {
    id: 1,
    name: 'Civic',
    brand: 'Honda',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    gearBox: '6 Speed',
    superCharge: false,
    description: 'A description',
    img: 'https://i.gaw.to/content/photos/33/61/336190_2018_Honda_Civic.jpg',
  },
  {
    id: 2,
    name: '208',
    brand: 'Peugeot',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    gearBox: '5 Speed',
    superCharge: false,
    description: 'A description',
    img:
      'https://www.autozeitung.de/assets/field/image/peugeot-208-gti-illustratio.jpg',
  },
  {
    id: 3,
    name: 'Bugatti',
    brand: 'Veyron',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    gearBox: '6 Speed',
    superCharge: true,
    description: 'A description',
    img:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/14bugatti-divo-99leadgallery-1535035005.jpg',
  },
  {
    id: 4,
    name: 'Civic',
    brand: 'Honda',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    gearBox: '6 Speed',
    superCharge: false,
    description: 'A description',
    img: 'https://i.gaw.to/content/photos/33/61/336190_2018_Honda_Civic.jpg',
  },
  {
    id: 5,
    name: '208',
    brand: 'Peugeot',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    gearBox: '5 Speed',
    superCharge: false,
    description: 'A description',
    img:
      'https://www.autozeitung.de/assets/field/image/peugeot-208-gti-illustratio.jpg',
  },
  {
    id: 6,
    name: 'Bugatti',
    brand: 'Veyron',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    gearBox: '6 Speed',
    superCharge: true,
    description: 'A description',
    img:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/14bugatti-divo-99leadgallery-1535035005.jpg',
  },
  {
    id: 7,
    name: 'Civic',
    brand: 'Honda',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    gearBox: '6 Speed',
    superCharge: false,
    description: 'A description',
    img: 'https://i.gaw.to/content/photos/33/61/336190_2018_Honda_Civic.jpg',
  },
  {
    id: 8,
    name: '208',
    brand: 'Peugeot',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    gearBox: '5 Speed',
    superCharge: false,
    description: 'A description',
    img:
      'https://www.autozeitung.de/assets/field/image/peugeot-208-gti-illustratio.jpg',
  },
  {
    id: 9,
    name: 'Bugatti',
    brand: 'Veyron',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    gearBox: '6 Speed',
    superCharge: true,
    description: 'A description',
    img:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/14bugatti-divo-99leadgallery-1535035005.jpg',
  },
  {
    id: 10,
    name: 'Civic',
    brand: 'Honda',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    gearBox: '6 Speed',
    superCharge: false,
    description: 'A description',
    img: 'https://i.gaw.to/content/photos/33/61/336190_2018_Honda_Civic.jpg',
  },
  {
    id: 11,
    name: '208',
    brand: 'Peugeot',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    gearBox: '5 Speed',
    superCharge: false,
    description: 'A description',
    img:
      'https://www.autozeitung.de/assets/field/image/peugeot-208-gti-illustratio.jpg',
  },
  {
    id: 12,
    name: 'Bugatti',
    brand: 'Veyron',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    gearBox: '6 Speed',
    superCharge: true,
    description: 'A description',
    img:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/14bugatti-divo-99leadgallery-1535035005.jpg',
  },
];

// Here you can simulate a server error
const test = true
const carsData = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (test) resolve(cars);
    else reject('Server error');
  }, 3000)
})
  
export default carsData;
