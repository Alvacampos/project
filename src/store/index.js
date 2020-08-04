import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: [],
    cars: [
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
        img:
          'https://i.gaw.to/content/photos/33/61/336190_2018_Honda_Civic.jpg',
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
        img:
          'https://i.gaw.to/content/photos/33/61/336190_2018_Honda_Civic.jpg',
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
    ],
    helpData:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vel sequi molestiae, amet enim soluta magni facere debitis ex ducimus, esse cupiditate quis beatae alias hic. Autem possimus repellat tempora.',
    aboutData: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores eligendi ratione, quo, nam quis magni incidunt tenetur hic ipsum blanditiis deleniti expedita, suscipit vitae libero saepe eum labore dolor.'
  },
  mutations: {
    favorites(state, data) {
      state.favorites.push(data);
    },
  },
  actions: {},
  modules: {},
});
