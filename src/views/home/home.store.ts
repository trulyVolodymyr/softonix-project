
export const useHomeStore = defineStore('HomeStore', () => {
  const object = ref([
    {
      id: 1,
      name: 'Moderno apartamento en playa de Pedregalejo',
      stars: 4.52,
      numberOfGuests: 4,
      bedrooms: 2,
      beds: 3,
      bathrooms: 3,
      propertyType: 'house',
      amenities: {
        essentials: [
          'Wifi',
          'Washer',
          'Air conditioning',
          'Dedicated workspace',
          'Hair dryer',
          'Kitchen',
          'Dryer',
          'Heating',
          'TV',
          'Iron'
        ],
        features: [
          'Pool',
          'Free parking on premises',
          'Crib',
          'BBQ grill',
          'Indoor fireplace',
          'Hot tub',
          'EV charger',
          'Gym',
          'Breakfast',
          'Smoking allowed'
        ],
        location: [
          'Beachfront'
        ],
        safety: [
          'Smoke alarm',
          'Carbon monoxide alarm'
        ]
      },
      address: 'Málaga, Andalucía, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 36.72216,
        lng: -4.37901
      },
      reviews: [
        {
          author: {
            firstName: 'Robertas',
            pictureUrl: 'https://a0.muscache.com/im/users/14879211/profile_pic/1398775792/original.jpg?aki_policy=profile_x_medium'
          },
          comments: 'Amazing location of the apartment! Scooters to rent, thd beach, wonderful local restaurants, grocery shops and everything else which possibly you would need are just few steps away.<br/><br/>Sergio was very pleasant and helpful giving some valuable tips to get around.',
          createdAt: '2019-08-26T12:42:36Z',
          rating: 5
        },
        {
          author: {
            firstName: 'Anna',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/0d28b2b3-176b-41e8-bec0-c092db9a2274.jpg?aki_policy=profile_x_medium'
          },
          comments: "Highly recommend. The place is exactly like advertised. Location is great. Literally a minute away from the beach. Buses are frequent and a taxi is only 7£ from the center. <br/>Food and bars down the street. It's a lovely area. <br/>The apartment has everything you need.",
          createdAt: '2018-09-16T14:19:39Z',
          rating: 5
        },
        {
          author: {
            firstName: 'Mouna',
            id: '97466187',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/c3a2f48d-8421-4b54-95c4-fa6045820181.jpg?aki_policy=profile_x_medium'
          },
          comments: 'Sergio was really nice and always answered our messages right away. The flat is well located ',
          createdAt: '2018-07-30T14:08:02Z',
          rating: 5
        }
      ],
      pricing: {
        rate: {
          amount: 105815,
          amountFormatted: '$105,815',
          currency: 'USD'
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Vistas azotea',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3e5715d0-c1a3-400d-a86f-6db0a4106ab2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3e5715d0-c1a3-400d-a86f-6db0a4106ab2.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/25be052e-d2e8-40f9-b651-a086728eda72.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/25be052e-d2e8-40f9-b651-a086728eda72.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0338d97f-4c30-484f-a5c9-81b38d196ad0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0338d97f-4c30-484f-a5c9-81b38d196ad0.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/945d7acb-0962-4e3e-a7ce-17c3dd02858d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/945d7acb-0962-4e3e-a7ce-17c3dd02858d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/58fad3ea-540c-48ed-8ad9-110ff5171347.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/58fad3ea-540c-48ed-8ad9-110ff5171347.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cf300039-333f-41dc-bc4f-2a48b9dcd68e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cf300039-333f-41dc-bc4f-2a48b9dcd68e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0172da1e-1059-49f0-b3ea-c8952a17e703.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0172da1e-1059-49f0-b3ea-c8952a17e703.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b5b851da-eceb-4b39-a82b-e94f21893583.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b5b851da-eceb-4b39-a82b-e94f21893583.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/945b34ed-4f26-4a97-b743-7ae9945b4352.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/945b34ed-4f26-4a97-b743-7ae9945b4352.jpg?aki_policy=small'
        },
        {
          caption: 'Entrada',
          pictureUrl: 'https://a0.muscache.com/im/pictures/358a5c4e-38f0-4471-8115-61daae86833a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/358a5c4e-38f0-4471-8115-61daae86833a.jpg?aki_policy=small'
        },
        {
          caption: 'Azotea',
          pictureUrl: 'https://a0.muscache.com/im/pictures/71aa5f7c-2e43-43fa-81e6-e4469e76eb59.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/71aa5f7c-2e43-43fa-81e6-e4469e76eb59.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4070b9cc-596b-413d-b868-858df8e9f4a6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4070b9cc-596b-413d-b868-858df8e9f4a6.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f2331aaa-f639-4b0f-9f9a-b02c2e8fe406.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f2331aaa-f639-4b0f-9f9a-b02c2e8fe406.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/029071a8-f790-4762-aea8-4af610e4e700.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/029071a8-f790-4762-aea8-4af610e4e700.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        firstName: 'Sergio',
        smartName: 'Sergio',
        about: '',
        memberSince: 'Joined in March 2016',
        badges: [
          '30 Reviews',
          'Identity verified'
        ],
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/570c4838-2f7b-47b6-9b71-2c890f081219.jpg?aki_policy=profile_large'
      }
    },
    {
      url: 'https://www.airbnb.com/rooms/24662775',
      name: 'Villa Azul mit Privatpool für bis zu 8 Pers.,WLAN',
      stars: 4.43,
      numberOfGuests: 8,
      address: 'Peñíscola, Comunidad Valenciana, Spain',
      roomType: 'Entire villa',
      location: {
        lat: 40.34983,
        lng: 0.39012
      },
      reviews: [
        {
          author: {
            firstName: 'Steven',
            hasProfilePic: true,
            id: '22903639',
            pictureUrl: 'https://a0.muscache.com/im/users/22903639/profile_pic/1434667051/original.jpg?aki_policy=profile_x_medium',
            smartName: 'Steven',
            thumbnailUrl: 'https://a0.muscache.com/im/users/22903639/profile_pic/1434667051/original.jpg?aki_policy=profile_small'
          },
          comments: 'We stayed at the property for four nights and the rooms, pool, and kitchen are great. However, the property needs a  bit of maintenance and air conditioning. If you do not have A/C, then you should have ceiling fans. I would stay in the summer with no fans.  The beds were not made up and all of the sheets were in a basket for the guests to decipher and place on the mattresses. Towels need to have been washed with softener as well. The couch was comfortable, but needs repair or be replaced. We had a great time at the house even with these inconveniences.  Dr. Steven Roth',
          createdAt: '2022-10-03T11:12:19Z',
          id: '729462775406581871',
          collectionTag: null,
          rating: 4,
          recipient: {
            firstName: 'Oliver',
            hasProfilePic: true,
            id: '162370769',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/691846c8-cae7-406e-9e9c-554fa5de2caa.jpg?aki_policy=profile_x_medium',
            smartName: 'Oliver',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/691846c8-cae7-406e-9e9c-554fa5de2caa.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'October 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Sophia',
            hasProfilePic: true,
            id: '193640445',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/e677963a-7742-4e3b-a19f-1b18fae1aff8.jpg?aki_policy=profile_x_medium',
            smartName: 'Sophia',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/e677963a-7742-4e3b-a19f-1b18fae1aff8.jpg?aki_policy=profile_small'
          },
          comments: 'Great stay with nice views and a pool. Oliver was very responsive and kind. Kitchen had minimal supplies if you plan to cook',
          createdAt: '2022-09-16T12:58:24Z',
          id: '717194980833348854',
          collectionTag: null,
          rating: 4,
          recipient: {
            firstName: 'Oliver',
            hasProfilePic: true,
            id: '162370769',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/691846c8-cae7-406e-9e9c-554fa5de2caa.jpg?aki_policy=profile_x_medium',
            smartName: 'Oliver',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/691846c8-cae7-406e-9e9c-554fa5de2caa.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'September 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Wiebren',
            hasProfilePic: true,
            id: '294928217',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/b631a227-acb6-4c48-bea5-7e40c57e47c1.jpg?aki_policy=profile_x_medium',
            smartName: 'Wiebren',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/b631a227-acb6-4c48-bea5-7e40c57e47c1.jpg?aki_policy=profile_small'
          },
          comments: 'We had a really great stay in Peniscola. The location is superb with a good parking space and a great accessibility of both the nature reserve and the old town. We liked this very much. The swimming pool is also a great add-on. Our children enjoyed the dive at the end of each day. Thanks for the great time.',
          createdAt: '2022-05-02T12:08:49Z',
          id: '617875748921352013',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Oliver',
            hasProfilePic: true,
            id: '162370769',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/691846c8-cae7-406e-9e9c-554fa5de2caa.jpg?aki_policy=profile_x_medium',
            smartName: 'Oliver',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/691846c8-cae7-406e-9e9c-554fa5de2caa.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'May 2022',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 105731,
          amountFormatted: '$105,731',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Privater Loungebereich',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fc66eeea-b117-4f17-a787-36d7e4e59522.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fc66eeea-b117-4f17-a787-36d7e4e59522.jpg?aki_policy=small'
        },
        {
          caption: 'Überdachte Terrasse',
          pictureUrl: 'https://a0.muscache.com/im/pictures/adafe275-6e60-440a-90a5-207f899611ea.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/adafe275-6e60-440a-90a5-207f899611ea.jpg?aki_policy=small'
        },
        {
          caption: 'Essen mit Blick auf den Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d3e82a89-a13c-45b2-9f59-218f32ea14e9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d3e82a89-a13c-45b2-9f59-218f32ea14e9.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/896cba25-2056-41d1-ad41-1cc5143ac701.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/896cba25-2056-41d1-ad41-1cc5143ac701.jpg?aki_policy=small'
        },
        {
          caption: 'Blick in die private Wohlfühloase',
          pictureUrl: 'https://a0.muscache.com/im/pictures/794712ca-f79f-4d52-a886-82d0299e44e2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/794712ca-f79f-4d52-a886-82d0299e44e2.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8d164113-c960-461e-ad27-21db64e14b77.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8d164113-c960-461e-ad27-21db64e14b77.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/89af8b9f-b8c9-4243-84d8-f2ce73a45c91.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/89af8b9f-b8c9-4243-84d8-f2ce73a45c91.jpg?aki_policy=small'
        },
        {
          caption: 'Time to relax',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0968b6e4-25cc-4872-9ea9-34a1d7060278.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0968b6e4-25cc-4872-9ea9-34a1d7060278.jpg?aki_policy=small'
        },
        {
          caption: 'Blick vom Balkon im 1.OG',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c8893c1c-400e-4639-af8a-0891c7acdae9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c8893c1c-400e-4639-af8a-0891c7acdae9.jpg?aki_policy=small'
        },
        {
          caption: 'Privatpool zur alleinigen Nutzung',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d4693277-1080-4201-9416-7d4c4cc8c179.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d4693277-1080-4201-9416-7d4c4cc8c179.jpg?aki_policy=small'
        },
        {
          caption: 'Blick von der Dachterrasse',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1485271a-1689-407b-a387-6c232959c5d0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1485271a-1689-407b-a387-6c232959c5d0.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b041568d-6cbb-412c-a56b-3fa15944c712.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b041568d-6cbb-412c-a56b-3fa15944c712.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f0e2956e-f0c3-4fd0-84a9-45cfe48014f4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f0e2956e-f0c3-4fd0-84a9-45cfe48014f4.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4b076780-bdad-4edc-b292-9f68f3d39d41.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4b076780-bdad-4edc-b292-9f68f3d39d41.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/904ece5f-b12a-42ee-b4ba-92b377651610.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/904ece5f-b12a-42ee-b4ba-92b377651610.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e953112e-d738-44e4-8fa6-2fd874a596f9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e953112e-d738-44e4-8fa6-2fd874a596f9.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2af59aa7-9a1e-442b-a7f9-ba4fcc2fabe6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2af59aa7-9a1e-442b-a7f9-ba4fcc2fabe6.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f9b29d8a-c589-434a-b026-7a2bd0389661.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f9b29d8a-c589-434a-b026-7a2bd0389661.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d6d460a9-c3f8-44ee-bd9c-fad94e79e6bf.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d6d460a9-c3f8-44ee-bd9c-fad94e79e6bf.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6aae2ad4-cf8d-4ffa-ad7d-b0448c2b4c40.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6aae2ad4-cf8d-4ffa-ad7d-b0448c2b4c40.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4fbfcb59-c4d5-4cd8-a685-51c0e969815b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4fbfcb59-c4d5-4cd8-a685-51c0e969815b.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/be6f321e-83ed-4144-9266-42e60453ab8a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/be6f321e-83ed-4144-9266-42e60453ab8a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2b50db35-adc8-4d45-868d-7cfd7e197fc2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2b50db35-adc8-4d45-868d-7cfd7e197fc2.jpg?aki_policy=small'
        },
        {
          caption: 'Esszimmer',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0d858fd7-04d4-42fc-a6dd-99e1f96217d6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0d858fd7-04d4-42fc-a6dd-99e1f96217d6.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3480eca6-084e-4bc8-aa5b-43b975e355ba.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3480eca6-084e-4bc8-aa5b-43b975e355ba.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/32f4c355-1796-417e-bfeb-d20a5e71bd8e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/32f4c355-1796-417e-bfeb-d20a5e71bd8e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/463312f8-918c-4c3c-a64a-18e11d0a9da3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/463312f8-918c-4c3c-a64a-18e11d0a9da3.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0858b1fd-ebcf-4a31-9bb9-fe1c71c27e61.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0858b1fd-ebcf-4a31-9bb9-fe1c71c27e61.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/40a9ec3b-5c52-49d7-9018-949d407d944c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/40a9ec3b-5c52-49d7-9018-949d407d944c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/985c1278-947c-4a6d-a458-f896c2121b2c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/985c1278-947c-4a6d-a458-f896c2121b2c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d624c45f-5299-4a2c-a922-c72417cb6269.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d624c45f-5299-4a2c-a922-c72417cb6269.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e136c94e-5ffc-442e-82a5-0c34e157a601.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e136c94e-5ffc-442e-82a5-0c34e157a601.jpg?aki_policy=small'
        },
        {
          caption: 'SZ mit Doppelbett',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1153e4a0-dbe2-4587-85ca-84300729302b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1153e4a0-dbe2-4587-85ca-84300729302b.jpg?aki_policy=small'
        },
        {
          caption: 'SZ mit 2 Einzelbetten',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b27644b3-82b5-4568-a7e6-7cdb725aa8fb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b27644b3-82b5-4568-a7e6-7cdb725aa8fb.jpg?aki_policy=small'
        },
        {
          caption: 'Duschbad 1',
          pictureUrl: 'https://a0.muscache.com/im/pictures/db12cdc5-af85-4397-9ad6-e0505040125c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/db12cdc5-af85-4397-9ad6-e0505040125c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/bbf0621e-b5f6-41c2-baec-aa32c5423a24.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/bbf0621e-b5f6-41c2-baec-aa32c5423a24.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0f450d19-91b0-47b6-8d14-1ae87c912474.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0f450d19-91b0-47b6-8d14-1ae87c912474.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d63192eb-32f1-4d8d-ab45-c691edce81ad.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d63192eb-32f1-4d8d-ab45-c691edce81ad.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a46514ed-10ef-4ec4-8e12-a4b37fff9205.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a46514ed-10ef-4ec4-8e12-a4b37fff9205.jpg?aki_policy=small'
        },
        {
          caption: 'Vorderansicht mit Stellplatz für 2 Autos',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a3c942ef-1bb0-4002-986a-1f1245f064d4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a3c942ef-1bb0-4002-986a-1f1245f064d4.jpg?aki_policy=small'
        },
        {
          caption: 'Eingangsbereich',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3ddbb146-7fc9-4a2e-9bd4-7886df2902bd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3ddbb146-7fc9-4a2e-9bd4-7886df2902bd.jpg?aki_policy=small'
        },
        {
          caption: 'Aussicht',
          pictureUrl: 'https://a0.muscache.com/im/pictures/90c8eaae-ead2-4aef-8a0d-972246c7b186.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/90c8eaae-ead2-4aef-8a0d-972246c7b186.jpg?aki_policy=small'
        },
        {
          caption: 'Aussicht aufs Meer',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3c41a478-38d0-4fd4-8589-4c45034849ea.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3c41a478-38d0-4fd4-8589-4c45034849ea.jpg?aki_policy=small'
        },
        {
          caption: 'Badebucht 300m vom Haus',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6c144eb6-7a61-41b6-9d8b-a862eb1fe924.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6c144eb6-7a61-41b6-9d8b-a862eb1fe924.jpg?aki_policy=small'
        },
        {
          caption: 'Badebucht 300m vom Haus',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e6572337-0e47-45a0-b5ba-87e1a1d783f7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e6572337-0e47-45a0-b5ba-87e1a1d783f7.jpg?aki_policy=small'
        },
        {
          caption: 'Südküste',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2c8b27ad-a489-4f3f-b760-a833ce496885.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2c8b27ad-a489-4f3f-b760-a833ce496885.jpg?aki_policy=small'
        },
        {
          caption: 'Felsenküste',
          pictureUrl: 'https://a0.muscache.com/im/pictures/03e21a70-bfb2-469a-8d17-99ca13bf63e3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/03e21a70-bfb2-469a-8d17-99ca13bf63e3.jpg?aki_policy=small'
        },
        {
          caption: 'Peñiscola am Abend',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0b31ecb8-dd14-47a1-b818-696162a466bd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0b31ecb8-dd14-47a1-b818-696162a466bd.jpg?aki_policy=small'
        },
        {
          caption: 'Blick von der Altstadt',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5a6158be-8dd4-40c0-ad1d-fbc18dc9b118.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5a6158be-8dd4-40c0-ad1d-fbc18dc9b118.jpg?aki_policy=small'
        },
        {
          caption: 'Burg und Leuchtturm',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fd5930d5-1a84-45c1-aa3d-597e35461d03.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fd5930d5-1a84-45c1-aa3d-597e35461d03.jpg?aki_policy=small'
        },
        {
          caption: 'Südstrand und Nordstrand.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fda12317-787c-4066-9d80-7f5ed37e9423.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fda12317-787c-4066-9d80-7f5ed37e9423.jpg?aki_policy=small'
        },
        {
          caption: 'Blick über den Fischerhafen Peñiscolas',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c208946b-cdb0-491f-a282-e0b61003c9d4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c208946b-cdb0-491f-a282-e0b61003c9d4.jpg?aki_policy=small'
        },
        {
          caption: 'Enkwinklige Gasse in der Altstadt',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6462cfbd-d037-45c1-99f3-a77a88ed14d3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6462cfbd-d037-45c1-99f3-a77a88ed14d3.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cafca4dd-7f1c-4570-8419-7be174905e22.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cafca4dd-7f1c-4570-8419-7be174905e22.jpg?aki_policy=small'
        },
        {
          caption: 'Nordstrand mit Blick auf die Altstadt',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b33ffcf2-3fa8-4783-9a89-699af875b320.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b33ffcf2-3fa8-4783-9a89-699af875b320.jpg?aki_policy=small'
        },
        {
          caption: '7km langer Nordstrand',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f23d04bb-a1d9-4eb2-b175-d953d6e28f5b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f23d04bb-a1d9-4eb2-b175-d953d6e28f5b.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/99e519b4-377c-4182-a012-066ba48da1a7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/99e519b4-377c-4182-a012-066ba48da1a7.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 162370769,
        firstName: 'Oliver',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Oliver',
        about: '',
        memberSince: 'Joined in December 2017',
        languages: [],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '48 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/162370769',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/691846c8-cae7-406e-9e9c-554fa5de2caa.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/691846c8-cae7-406e-9e9c-554fa5de2caa.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/33260773',
      name: 'Apartamento junto al campo de golf en El Toyo',
      stars: 4.9,
      numberOfGuests: 4,
      address: 'Almería, Andalucía, Spain',
      roomType: 'Entire condo',
      location: {
        lat: 36.83644,
        lng: -2.31096
      },
      reviews: [
        {
          author: {
            firstName: 'Francisco Javier',
            hasProfilePic: true,
            id: '483649359',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/51341ad2-2b82-4f56-83a5-10dd88c7c0ce.jpg?aki_policy=profile_x_medium',
            smartName: 'Francisco Javier',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/51341ad2-2b82-4f56-83a5-10dd88c7c0ce.jpg?aki_policy=profile_small'
          },
          comments: 'Muy bien situado y fantástica la anfitriona',
          createdAt: '2022-10-30T12:38:49Z',
          id: '749075256277973455',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Mari Carmen',
            hasProfilePic: true,
            id: '250456123',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/90fa0c94-07b5-428e-9c1f-9d54eac89d37.jpg?aki_policy=profile_x_medium',
            smartName: 'Mari Carmen',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/90fa0c94-07b5-428e-9c1f-9d54eac89d37.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'October 2022',
          localizedReview: {
            comments: 'Very nice location and fantastic host',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        },
        {
          author: {
            firstName: 'Jandro',
            hasProfilePic: true,
            id: '305013270',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/f1275a92-0ea6-4a51-8f33-bc4f529a2121.jpg?aki_policy=profile_x_medium',
            smartName: 'Jandro',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/f1275a92-0ea6-4a51-8f33-bc4f529a2121.jpg?aki_policy=profile_small'
          },
          comments: 'Todo perfecto. El alojamiento era exactamente como se describía en el anuncio y en las fotos, estaba muy limpio, muy cuidado y muy bien abastecido. Mari Carmen se comunicó perfectamente con nosotros todo el tiempo, nos recibió estupendamente y siempre que tuvimos una duda nos la resolvió rápidamente. Además el trato fue muy amable y agradable. <br/><br/>Los pequeños detalles que marcan la diferencia: Llegó al piso un rato antes que nosotros para que cuando llegásemos después de un viaje largo en un día muy caluroso tuviésemos agua de botella fresca en la nevera y el piso refrescado con el aire acondicionado puesto.<br/><br/>Sin duda recomendamos el alojamiento al 100%',
          createdAt: '2022-09-09T14:05:15Z',
          id: '712155199840489679',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Mari Carmen',
            hasProfilePic: true,
            id: '250456123',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/90fa0c94-07b5-428e-9c1f-9d54eac89d37.jpg?aki_policy=profile_x_medium',
            smartName: 'Mari Carmen',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/90fa0c94-07b5-428e-9c1f-9d54eac89d37.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'September 2022',
          localizedReview: {
            comments: 'Everything was perfect. The place was exactly as described in the listing and pictures, it was very clean, very well kept and very well stocked. Mari Carmen communicated perfectly with us the whole time, she welcomed us beautifully and whenever we had a question she solved it quickly. In addition, the treatment was very friendly and pleasant. <br/><br/>The little details that make a difference: She arrived at the apartment a while before us so when we arrived after a long trip on a very hot day we had fresh bottled water in the fridge and the floor refreshed with the air conditioning on.<br/><br/>We definitely recommend the place 100%',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        },
        {
          author: {
            firstName: 'Antonio',
            hasProfilePic: true,
            id: '350196783',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/26b02214-8428-446d-9258-2a79121abc1e.jpg?aki_policy=profile_x_medium',
            smartName: 'Antonio',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/26b02214-8428-446d-9258-2a79121abc1e.jpg?aki_policy=profile_small'
          },
          comments: 'He estado con mi mujer y mis hijos de 15 y 11 años.  El alojamiento es ideal para cuatro personas, dos baños (bañera y ducha), aire acondicionado en las dos habitaciones y el salón. Una enorme y maravillosa terraza (es más grande de lo que parece en las fotos, con unas vistas preciosas). Pista de Pádel,  piscina (para niños pequeños y otra para adultos en dos tramos), parking dentro de la propiedad...<br/>Mari Carmen ha sido muy buena anfitriona. Ha estado atenta a nuestras necesidades y nos ha dado mucha libertad.<br/>Un acierto para descubrir la zona de Cabo de Gata y sus maravillosas playas. Muy cerca de Almería y muy bien comunicada mediante autovía y transporte urbano de Almería.<br/>.',
          createdAt: '2022-08-08T13:47:19Z',
          id: '688953352650147446',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Mari Carmen',
            hasProfilePic: true,
            id: '250456123',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/90fa0c94-07b5-428e-9c1f-9d54eac89d37.jpg?aki_policy=profile_x_medium',
            smartName: 'Mari Carmen',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/90fa0c94-07b5-428e-9c1f-9d54eac89d37.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'August 2022',
          localizedReview: {
            comments: "I've been with my wife and children, ages 15 and 11.  The accommodation is ideal for four people, two bathrooms (bathtub and shower), air conditioning in the two bedrooms and the living room. A huge and wonderful terrace (it's bigger than it looks in the pictures, with a beautiful view). Paddle tennis court,  swimming pool (for small children and another for adults in two sections), parking inside the property...<br/>Mari Carmen has been a very good host. She was attentive to our needs and gave us a lot of freedom.<br/>A hit to discover the Cabo de Gata area and its wonderful beaches. Very close to Almeria and very well connected by highway and urban transport from Almería.<br/>",
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 74028,
          amountFormatted: '$74,028',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-33260773/original/cf14f94b-4d5c-4b77-af18-d1e177ec7aa7.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-33260773/original/cf14f94b-4d5c-4b77-af18-d1e177ec7aa7.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d77c8776-583a-424d-b1d2-773d4fca77ff.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d77c8776-583a-424d-b1d2-773d4fca77ff.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2f5b204a-6e5c-47fe-be94-bae7006cf2f3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2f5b204a-6e5c-47fe-be94-bae7006cf2f3.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d678dbc5-529d-41ba-a9d7-030cf315123a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d678dbc5-529d-41ba-a9d7-030cf315123a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fd31e262-eb2a-41dc-b8b0-c4dc544dd220.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fd31e262-eb2a-41dc-b8b0-c4dc544dd220.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/114a1a56-c2c8-454b-8e43-fb90cce24ec7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/114a1a56-c2c8-454b-8e43-fb90cce24ec7.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9d44fb2b-8584-4eed-9a17-ffe2cda38241.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9d44fb2b-8584-4eed-9a17-ffe2cda38241.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a5fe2a17-fb3b-47b3-90f1-69f2b7edb18c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a5fe2a17-fb3b-47b3-90f1-69f2b7edb18c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6528dd83-9e49-46b5-92d4-8394d29109af.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6528dd83-9e49-46b5-92d4-8394d29109af.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0160fd8c-91d5-4e2b-8861-83f4e5d3f1b2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0160fd8c-91d5-4e2b-8861-83f4e5d3f1b2.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/30a41b99-980b-49d4-9c22-b3f471eaf562.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/30a41b99-980b-49d4-9c22-b3f471eaf562.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/da9aa4ec-cb10-4671-b7c3-f3205d3a8459.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/da9aa4ec-cb10-4671-b7c3-f3205d3a8459.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/91866b84-eb02-4df7-878f-829c20392021.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/91866b84-eb02-4df7-878f-829c20392021.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4879ccb5-3b05-4c29-9676-831f008c7746.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4879ccb5-3b05-4c29-9676-831f008c7746.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3df29b65-d3ed-41bc-9bd3-6c5a5ab734c3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3df29b65-d3ed-41bc-9bd3-6c5a5ab734c3.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/373cb76c-c72a-40ae-9b17-d0d79a82c809.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/373cb76c-c72a-40ae-9b17-d0d79a82c809.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2b7a64c3-7541-4e55-8a6d-268984d9fea3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2b7a64c3-7541-4e55-8a6d-268984d9fea3.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-33260773/original/b0460015-053f-4fd9-a0e2-0689d1017873.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-33260773/original/b0460015-053f-4fd9-a0e2-0689d1017873.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-33260773/original/b84d0158-79c5-4d69-9331-93c4af18f1a3.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-33260773/original/b84d0158-79c5-4d69-9331-93c4af18f1a3.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-33260773/original/c244e38d-2824-4895-9073-7cde7c770160.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-33260773/original/c244e38d-2824-4895-9073-7cde7c770160.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-33260773/original/bac31224-c2a9-415f-82ca-b24b5afba234.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-33260773/original/bac31224-c2a9-415f-82ca-b24b5afba234.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-33260773/original/7c1de313-6b2d-4493-b80c-8b02c3f8e345.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-33260773/original/7c1de313-6b2d-4493-b80c-8b02c3f8e345.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-33260773/original/eabb080c-6834-4d79-a1b4-f77f16310c4f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-33260773/original/eabb080c-6834-4d79-a1b4-f77f16310c4f.jpeg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 250456123,
        firstName: 'Mari Carmen',
        isSuperHost: true,
        hasProfilePic: true,
        smartName: 'Mari Carmen',
        about: '',
        memberSince: 'Joined in March 2019',
        languages: [
          'English',
          'Français',
          'Español'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '73 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/250456123',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/90fa0c94-07b5-428e-9c1f-9d54eac89d37.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/90fa0c94-07b5-428e-9c1f-9d54eac89d37.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: true
    },
    {
      url: 'https://www.airbnb.com/rooms/49362050',
      name: 'Modern Mansion in St Josep de sa Talaia with Private Pool',
      stars: null,
      numberOfGuests: 4,
      address: 'Cala Comte, Balearic Islands, Spain',
      roomType: 'Entire home',
      location: {
        lat: 38.95266,
        lng: 1.22564
      },
      reviews: [],
      pricing: {
        rate: {
          amount: 17298,
          amountFormatted: '$17,298',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Holiday Home Swimming Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/304c2912-fccd-4148-b27e-d40466db508d.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/304c2912-fccd-4148-b27e-d40466db508d.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Swimming Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/c32281ae-a38b-4e8e-87fc-a9ad7cabd685.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/c32281ae-a38b-4e8e-87fc-a9ad7cabd685.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/393b4bfd-62f9-4af9-bd93-b54ea2bce0c5.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/393b4bfd-62f9-4af9-bd93-b54ea2bce0c5.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/46b6e4e1-4fd8-4cd5-a054-f9df3ebe8b67.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/46b6e4e1-4fd8-4cd5-a054-f9df3ebe8b67.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/688641ab-cf05-4e88-b75e-bf893d95e568.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/688641ab-cf05-4e88-b75e-bf893d95e568.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/3933b074-7380-45a1-92b6-4636b604aec8.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/3933b074-7380-45a1-92b6-4636b604aec8.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/6f5fbcd7-f072-41f0-904a-85096669e0c2.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/6f5fbcd7-f072-41f0-904a-85096669e0c2.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Swimming Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/b92ccce0-596a-41a0-a110-38a9ae4abe4e.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/b92ccce0-596a-41a0-a110-38a9ae4abe4e.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Swimming Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/7ad73a13-5449-45bf-b1fe-1058e93a29ec.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/7ad73a13-5449-45bf-b1fe-1058e93a29ec.jpeg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/283b8cd8-80cf-47de-a946-e7193e4c332c.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/283b8cd8-80cf-47de-a946-e7193e4c332c.jpeg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/7167a736-3fa1-4a92-8fba-2750dbde63e7.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/7167a736-3fa1-4a92-8fba-2750dbde63e7.jpeg?aki_policy=small'
        },
        {
          caption: 'Dining Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/69e97f92-5c2d-49d2-b8d5-3413fd040523.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/69e97f92-5c2d-49d2-b8d5-3413fd040523.jpeg?aki_policy=small'
        },
        {
          caption: 'Dining Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/65008216-600a-44f5-9044-0b413c715825.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/65008216-600a-44f5-9044-0b413c715825.jpeg?aki_policy=small'
        },
        {
          caption: 'Kitchen',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/625ee9fe-ce26-46b0-8122-be70e5acdbb2.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/625ee9fe-ce26-46b0-8122-be70e5acdbb2.jpeg?aki_policy=small'
        },
        {
          caption: 'Kitchen',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/3be3864f-3025-475f-86a3-daa48967fd6f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/3be3864f-3025-475f-86a3-daa48967fd6f.jpeg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/443377e7-fff5-4936-91d0-b45ce66aea4f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/443377e7-fff5-4936-91d0-b45ce66aea4f.jpeg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/6f8caaf3-9b0c-4797-b5cf-b42f56095650.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/6f8caaf3-9b0c-4797-b5cf-b42f56095650.jpeg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/6b46a6d7-8835-445d-ba64-348975d7d4e6.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/6b46a6d7-8835-445d-ba64-348975d7d4e6.jpeg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/eca978c4-3585-4ea2-a98e-474b41d68ac1.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/eca978c4-3585-4ea2-a98e-474b41d68ac1.jpeg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/5710072a-4a7a-498f-b81f-9f740eec5157.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/5710072a-4a7a-498f-b81f-9f740eec5157.jpeg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/4b837562-d570-499e-a25b-859884cd2407.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/4b837562-d570-499e-a25b-859884cd2407.jpeg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/7c737716-4954-4cd4-9fe5-30cde0ae800e.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/7c737716-4954-4cd4-9fe5-30cde0ae800e.jpeg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/ddc03199-ab7a-4e17-b880-f466acd2036b.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/ddc03199-ab7a-4e17-b880-f466acd2036b.jpeg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/f4e50e96-08b9-4c10-af93-a3c69ca5ecf8.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/f4e50e96-08b9-4c10-af93-a3c69ca5ecf8.jpeg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/04a04f31-3fb0-4ddf-978a-ce22350fe39e.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/04a04f31-3fb0-4ddf-978a-ce22350fe39e.jpeg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/217be88d-7ece-4510-95e6-b2739042e520.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/217be88d-7ece-4510-95e6-b2739042e520.jpeg?aki_policy=small'
        },
        {
          caption: 'Patio / Balcony',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/6aadcc03-016e-4a25-b6f8-d3fd34e33fc5.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/6aadcc03-016e-4a25-b6f8-d3fd34e33fc5.jpeg?aki_policy=small'
        },
        {
          caption: 'Patio / Balcony',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/1d16ab16-cfb1-45bb-90d0-49a804320169.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/1d16ab16-cfb1-45bb-90d0-49a804320169.jpeg?aki_policy=small'
        },
        {
          caption: 'Patio / Balcony',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/2d2504a8-35c1-4086-a6fe-efeb71a2ee2f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/2d2504a8-35c1-4086-a6fe-efeb71a2ee2f.jpeg?aki_policy=small'
        },
        {
          caption: 'Patio / Balcony',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/4a225a0d-bffd-4707-9942-a883ce21f002.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/4a225a0d-bffd-4707-9942-a883ce21f002.jpeg?aki_policy=small'
        },
        {
          caption: 'Patio / Balcony',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/9b28f957-1bdb-471d-a27b-32c57f472743.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/9b28f957-1bdb-471d-a27b-32c57f472743.jpeg?aki_policy=small'
        },
        {
          caption: 'Garden (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/db2fd6a4-86a8-445b-af12-e877424c4acf.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/db2fd6a4-86a8-445b-af12-e877424c4acf.jpeg?aki_policy=small'
        },
        {
          caption: 'Garden (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/9e40e430-64f3-454b-8594-613524f56e7f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/9e40e430-64f3-454b-8594-613524f56e7f.jpeg?aki_policy=small'
        },
        {
          caption: 'View from Holiday Home (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/b9355c05-1287-4dd2-b427-495df374d655.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/b9355c05-1287-4dd2-b427-495df374d655.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Facilities and Services',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/aa36992e-181c-4a53-aa2f-31db52d1a8cc.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/aa36992e-181c-4a53-aa2f-31db52d1a8cc.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Facilities and Services',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/3ed4443c-fdd0-4aab-911b-fdddc94e3231.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/3ed4443c-fdd0-4aab-911b-fdddc94e3231.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Facilities and Services',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/db5632c6-190d-4a34-b310-5d575e4e26bd.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/db5632c6-190d-4a34-b310-5d575e4e26bd.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Facilities and Services',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/fedbe00d-2e55-4be4-b081-a9ffd1e80cf8.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/fedbe00d-2e55-4be4-b081-a9ffd1e80cf8.jpeg?aki_policy=small'
        },
        {
          caption: 'Ambiance / Close-up',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/b62102b4-06d6-4618-97a1-969031bc80e6.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/b62102b4-06d6-4618-97a1-969031bc80e6.jpeg?aki_policy=small'
        },
        {
          caption: 'Ambiance / Close-up',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/b5a46489-a7af-469c-a488-ce7b9f848436.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49362050/original/b5a46489-a7af-469c-a488-ce7b9f848436.jpeg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 305882972,
        firstName: 'Belvilla',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Belvilla',
        about: 'Hi, I’m Fleur. I’m part of the Belvilla Customer service team. My colleagues and I are looking forward to assist you when booking our properties on Airbnb. You can count on our support before, during and after your holiday. Any questions? Just let us know!\n\nBelvilla is a leading European specialist in the rental of unique, self-catering holiday homes and apartments. We bring more than 35 years of experience in satisfying our guests (you!) and helping them find the perfect holiday. When you stay in a Belvilla home, you can be sure you will enjoy a unique holiday home in ideal surroundings. We’re looking forward to welcoming you in a Belvilla and love to hear from you!',
        memberSince: 'Joined in November 2019',
        languages: [
          'Nederlands',
          'English',
          'Français',
          'Deutsch'
        ],
        hasInclusionBadge: false,
        badges: [
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/305882972',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/013f2362-f502-4627-8934-a629b685e80c.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/013f2362-f502-4627-8934-a629b685e80c.jpg?aki_policy=profile_small'
      },
      additionalHosts: [
        {
          id: 270230553,
          firstName: 'Linda - BELVILLA',
          isSuperHost: false,
          hasProfilePic: true,
          smartName: 'Linda - BELVILLA',
          about: '',
          memberSince: 'Joined in June 2019',
          languages: [
            'Nederlands',
            'English',
            'Français',
            'Deutsch'
          ],
          hasInclusionBadge: false,
          badges: [],
          hostUrl: 'https://www.airbnb.com/users/show/270230553',
          pictureUrl: 'https://a0.muscache.com/im/pictures/user/9539f377-1097-4f0a-8890-b7ab47df98da.jpg?aki_policy=profile_large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9539f377-1097-4f0a-8890-b7ab47df98da.jpg?aki_policy=profile_small'
        }
      ],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/25989994',
      name: 'Your Home at Valencia, el Carmen',
      stars: 5,
      numberOfGuests: 2,
      address: 'València, Comunidad Valenciana, Spain',
      roomType: 'Entire loft',
      location: {
        lat: 39.47873,
        lng: -0.38055
      },
      reviews: [
        {
          author: {
            firstName: 'Hugo',
            hasProfilePic: true,
            id: '65391279',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/4ee8ce74-afa7-400b-9e40-2f106f19bac8.jpg?aki_policy=profile_x_medium',
            smartName: 'Hugo',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/4ee8ce74-afa7-400b-9e40-2f106f19bac8.jpg?aki_policy=profile_small'
          },
          comments: 'Really good 👍 place.<br/>Everything was great<br/>Location, communication, comfortable.bike rent,vegan restaurant and supermarket just 5 minutes walk<br/>Thank you 😊 guys<br/>We have really good times',
          createdAt: '2020-07-20T13:52:09Z',
          id: '640459593',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Vicente Y Raquel',
            hasProfilePic: true,
            id: '104520761',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/8aa09f44-bb8a-403b-b77f-858fceb17951.jpg?aki_policy=profile_x_medium',
            smartName: 'Vicente Y Raquel',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/8aa09f44-bb8a-403b-b77f-858fceb17951.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'July 2020',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Mathis',
            hasProfilePic: true,
            id: '150567691',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/6efe6f28-c6aa-47de-91d1-6d862ccd3ad0.jpg?aki_policy=profile_x_medium',
            smartName: 'Mathis',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/6efe6f28-c6aa-47de-91d1-6d862ccd3ad0.jpg?aki_policy=profile_small'
          },
          comments: 'One of the best experience in an Airbnb. Very well located in the old town and the flat contains all you need ! <br/>Many thanks for Vincente and Raquel, Vincente welcomed us very well and he explained us all what we need to know about the city (special touch for the present at the arrival, a bottle of wine)! It was great. <br/>I would recommend it to anyone who wants to visit Valencia.',
          createdAt: '2019-08-11T15:02:29Z',
          id: '507179869',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Vicente Y Raquel',
            hasProfilePic: true,
            id: '104520761',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/8aa09f44-bb8a-403b-b77f-858fceb17951.jpg?aki_policy=profile_x_medium',
            smartName: 'Vicente Y Raquel',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/8aa09f44-bb8a-403b-b77f-858fceb17951.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'August 2019',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Nick',
            hasProfilePic: true,
            id: '27188235',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/ff3833d7-d50b-4f82-a507-2185aaa00838.jpg?aki_policy=profile_x_medium',
            smartName: 'Nick',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/ff3833d7-d50b-4f82-a507-2185aaa00838.jpg?aki_policy=profile_small'
          },
          comments: 'Raquel’s place was in a superb location, some of the best food in Spain literally at your doorstep and an amazingly well appointed studio apartment.<br/><br/>Some lovely welcome touches, and host met us on the street to welcome us.<br/><br/> We absolutely loved our time in Valencia and this apartment made it perfect - recommend 5 stars to all!',
          createdAt: '2018-08-06T12:33:10Z',
          id: '302806900',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Vicente Y Raquel',
            hasProfilePic: true,
            id: '104520761',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/8aa09f44-bb8a-403b-b77f-858fceb17951.jpg?aki_policy=profile_x_medium',
            smartName: 'Vicente Y Raquel',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/8aa09f44-bb8a-403b-b77f-858fceb17951.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'August 2018',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 63362,
          amountFormatted: '$63,362',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3fee97fa-b3aa-410b-b7f4-bbf289293fa7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3fee97fa-b3aa-410b-b7f4-bbf289293fa7.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/dbcc6017-36dc-4c45-a3f7-63d25a2c7ac8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/dbcc6017-36dc-4c45-a3f7-63d25a2c7ac8.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ccd1234e-92c8-4d5e-a734-fb2400e74e53.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ccd1234e-92c8-4d5e-a734-fb2400e74e53.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/33c496fc-f00b-4785-9a5b-6a1b53381b99.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/33c496fc-f00b-4785-9a5b-6a1b53381b99.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/572ae55d-e5c8-48f1-baa6-9c182a966636.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/572ae55d-e5c8-48f1-baa6-9c182a966636.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/be977f6c-d4dc-42ee-b4af-0e1165670f70.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/be977f6c-d4dc-42ee-b4af-0e1165670f70.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3e6b8c6e-0c87-4111-98f4-05f5a1a10428.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3e6b8c6e-0c87-4111-98f4-05f5a1a10428.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d4113c43-56d1-4603-a147-118f619ec867.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d4113c43-56d1-4603-a147-118f619ec867.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d4f27f41-909e-4969-a233-21080602db16.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d4f27f41-909e-4969-a233-21080602db16.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/082953f7-6131-4056-b69f-3e6de79a9e88.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/082953f7-6131-4056-b69f-3e6de79a9e88.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/803c74ac-c7ca-43da-b36b-a6114db574e0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/803c74ac-c7ca-43da-b36b-a6114db574e0.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/95003bc6-3296-4d77-99fc-10a9e1cad5e6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/95003bc6-3296-4d77-99fc-10a9e1cad5e6.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e1a62121-6d77-40fd-a5ca-4f3b9cb5bb2a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e1a62121-6d77-40fd-a5ca-4f3b9cb5bb2a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ed3af548-28d8-4ccd-9908-b2d22430f9a8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ed3af548-28d8-4ccd-9908-b2d22430f9a8.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 104520761,
        firstName: 'Vicente Y Raquel',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Vicente Y Raquel',
        about: 'Soy una persona que me gusta viajar, conocer gente nueva.',
        memberSince: 'Joined in November 2016',
        languages: [],
        responseRate: '100%',
        responseTime: 'within a few hours',
        hasInclusionBadge: false,
        badges: [
          '147 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/104520761',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/8aa09f44-bb8a-403b-b77f-858fceb17951.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/8aa09f44-bb8a-403b-b77f-858fceb17951.jpg?aki_policy=profile_small'
      },
      additionalHosts: [
        {
          id: 197455868,
          firstName: 'Isabel',
          isSuperHost: false,
          hasProfilePic: true,
          smartName: 'Isabel',
          about: '',
          memberSince: 'Joined in June 2018',
          languages: [],
          hasInclusionBadge: false,
          badges: [],
          hostUrl: 'https://www.airbnb.com/users/show/197455868',
          pictureUrl: 'https://a0.muscache.com/im/pictures/user/7aa8a401-e09a-441a-aba2-396ffb7b3811.jpg?aki_policy=profile_large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/7aa8a401-e09a-441a-aba2-396ffb7b3811.jpg?aki_policy=profile_small'
        }
      ],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/14227923',
      name: 'Casa de campo/House-countryside/maison-campagne',
      stars: null,
      numberOfGuests: 8,
      address: 'Llampaies, Catalunya, Spain',
      roomType: 'Entire home',
      location: {
        lat: 42.12415,
        lng: 2.93301
      },
      reviews: [
        {
          author: {
            firstName: 'Susana',
            hasProfilePic: true,
            id: '84785888',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/45de9e8e-53d4-4a2f-9a98-82534638b851.jpg?aki_policy=profile_x_medium',
            smartName: 'Susana',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/45de9e8e-53d4-4a2f-9a98-82534638b851.jpg?aki_policy=profile_small'
          },
          comments: "La casa és molt maca. Estava molt més equipada del que esperàvem. Tots els que hem estat a la casa estem molt contents. \r<br/>Ha estat una experiència que de ben segur hi tornaríem a fer.\r<br/>Tan la rebuda, com la comunicació amb l'amfitriona i familiars ha estat molt àgil i adient. \r<br/>La casa molt ben situada, amb uns paratges increïbles. L'entorn encantador.\r<br/>",
          createdAt: '2016-08-05T09:49:05Z',
          id: '91434287',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Verònica',
            hasProfilePic: true,
            id: '65775395',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/5cd496e4-2638-4257-812a-54755d7dcade.jpg?aki_policy=profile_x_medium',
            smartName: 'Verònica',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/5cd496e4-2638-4257-812a-54755d7dcade.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'ca',
          localizedDate: 'August 2016',
          localizedReview: {
            comments: 'The house is very nice. Much more equipped than we expected. Everyone who has been in the house is very happy. \r<br/>It was an experience we would definitely do again.\r<br/>The welcome and communication with the host and family was very smooth and easy. \r<br/>The house is very well located, with incredible locations. The setting is lovely.\r<br/>',
            disclaimer: 'Translated from Catalan',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 26409,
          amountFormatted: '$26,409',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/99a6b03f-0a1e-41cb-a643-a1d740569842.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/99a6b03f-0a1e-41cb-a643-a1d740569842.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fa469d82-8bcc-4247-b2f6-3b826740bac6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fa469d82-8bcc-4247-b2f6-3b826740bac6.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e582a133-c99f-4d8d-80fc-56aa66bc2920.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e582a133-c99f-4d8d-80fc-56aa66bc2920.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/726efbe5-9ae6-47a7-a613-054df36e0f68.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/726efbe5-9ae6-47a7-a613-054df36e0f68.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/67c0a001-7036-4d20-9f77-d4332a7f518f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/67c0a001-7036-4d20-9f77-d4332a7f518f.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/54877415-4765-41a9-9345-1417917b6788.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/54877415-4765-41a9-9345-1417917b6788.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9117c44f-968d-4a47-93f7-15637df4eb2e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9117c44f-968d-4a47-93f7-15637df4eb2e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/bde75114-1f9d-4ae9-9b07-7e461440c73e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/bde75114-1f9d-4ae9-9b07-7e461440c73e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/80ef535f-9b1a-4da8-b8ab-165af1a8b8db.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/80ef535f-9b1a-4da8-b8ab-165af1a8b8db.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/54bae74c-39d2-44a0-aa50-62c6fcb1ad10.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/54bae74c-39d2-44a0-aa50-62c6fcb1ad10.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6d44f146-bcdb-4711-9304-e2f1da1e41af.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6d44f146-bcdb-4711-9304-e2f1da1e41af.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/99d10808-04f5-415b-b2d0-49fc921e986d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/99d10808-04f5-415b-b2d0-49fc921e986d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/95b56cf9-b154-44aa-bef5-4d9639c5034f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/95b56cf9-b154-44aa-bef5-4d9639c5034f.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/bda0d0ce-e4ac-4c42-a929-0bd5ae642fe4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/bda0d0ce-e4ac-4c42-a929-0bd5ae642fe4.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/298ae468-25f0-48db-8610-d81bfe05f4bf.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/298ae468-25f0-48db-8610-d81bfe05f4bf.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c55e7166-4a3a-4ca6-8fc1-9bb79c02e624.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c55e7166-4a3a-4ca6-8fc1-9bb79c02e624.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/84dba6e6-f385-486e-8ce5-2a63226526ea.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/84dba6e6-f385-486e-8ce5-2a63226526ea.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9983e0f3-817e-4ec7-b32e-f1cc9418145d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9983e0f3-817e-4ec7-b32e-f1cc9418145d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e9b7dbf0-7e0e-4146-b626-0d52560204ec.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e9b7dbf0-7e0e-4146-b626-0d52560204ec.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/61a89ff5-8e0e-437b-a568-d8d9d7566d95.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/61a89ff5-8e0e-437b-a568-d8d9d7566d95.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/723f77ed-a7e7-4565-840c-a5e2e0c144c8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/723f77ed-a7e7-4565-840c-a5e2e0c144c8.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0629e3fd-6aaa-4d44-8e2b-e2320c61e894.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0629e3fd-6aaa-4d44-8e2b-e2320c61e894.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/54413e44-26fb-46f9-9539-1ba35bf0fccc.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/54413e44-26fb-46f9-9539-1ba35bf0fccc.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7fa3210d-43bb-457e-8493-5c2e50b77374.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7fa3210d-43bb-457e-8493-5c2e50b77374.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5915d590-9f96-4637-95f1-a2d1c1c2a955.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5915d590-9f96-4637-95f1-a2d1c1c2a955.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ba1a26df-f30a-4792-870f-df52d48652b7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ba1a26df-f30a-4792-870f-df52d48652b7.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 65775395,
        firstName: 'Verònica',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Verònica',
        about: '',
        memberSince: 'Joined in April 2016',
        languages: [],
        hasInclusionBadge: false,
        badges: [
          '1 Review',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/65775395',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/5cd496e4-2638-4257-812a-54755d7dcade.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/5cd496e4-2638-4257-812a-54755d7dcade.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/13227061',
      name: 'Renovated 2 bedr - central Moraira - Sea view',
      stars: null,
      numberOfGuests: 4,
      address: 'Moraira, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 38.687,
        lng: 0.135
      },
      reviews: [],
      pricing: {
        rate: {
          amount: 21121,
          amountFormatted: '$21,121',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7505a263-ae3a-4d37-9d2b-53eef3cc6e5e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7505a263-ae3a-4d37-9d2b-53eef3cc6e5e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/872949ae-42e5-44ed-84e2-8841711a5111.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/872949ae-42e5-44ed-84e2-8841711a5111.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ff46d274-5d58-4ae7-8b18-f1353b93685c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ff46d274-5d58-4ae7-8b18-f1353b93685c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0b17ee1a-619a-4674-a70e-fde18be6b39e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0b17ee1a-619a-4674-a70e-fde18be6b39e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3337dd01-9cb1-4a5e-850b-8a3cbfb57ccb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3337dd01-9cb1-4a5e-850b-8a3cbfb57ccb.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/44b81fab-b0a6-4530-8f3c-7c7ed8a97962.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/44b81fab-b0a6-4530-8f3c-7c7ed8a97962.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/35bf4cb0-d8b4-4e5c-8c4f-0baa742590ec.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/35bf4cb0-d8b4-4e5c-8c4f-0baa742590ec.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 72988921,
        firstName: 'Iain',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Iain',
        about: "I guess you want to know who we are?\n\nThat's pretty simple really. HMR Holidays is owned and run by Iain and Leonie. Iain is English and Leo is French and we both live in beautiful Moraira.\n\nThe holiday rental business was started in 2006 by Irene & Howard (Iain's parents) , starting with only a few rentals and then growing steadily over the years. Iain joined the business in 2012 following his move from the UK to Spain to assist with the continued growth.\n\nIn 2016, following the retirement of Irene and Howard, Iain took over full control of the company and continues to run it to this day. HMR Holidays now operates as a web-based holiday rental company, with no physical office, but we're still on hand to meet and greet all our guests and personally see to any issues that they might have.\n\nDuring the summer we employ a team of wonderful cleaners and helpers to assist with the rentals. All of our staff are fully legal and work very hard to ensure you all have a wonderful holiday in Moraira.\n\nHopefully, you now have an idea of who we are and what we do. At some point during your stay, you'll get to meet us, so we look forward to seeing you soon!",
        memberSince: 'Joined in May 2016',
        languages: [
          'English',
          'Français',
          'Deutsch',
          'Español'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '36 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/72988921',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/a60d6418-6c31-493e-ae8c-c47ba1feff3d.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/a60d6418-6c31-493e-ae8c-c47ba1feff3d.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/30008466',
      name: 'CASA NUEVA CERCA DEL PARQUE DE CABARCENO',
      stars: 4.6,
      numberOfGuests: 6,
      address: 'Camargo, Cantabria, Spain',
      roomType: 'Entire home',
      location: {
        lat: 43.40558,
        lng: -3.86601
      },
      reviews: [
        {
          author: {
            firstName: 'Jorge',
            hasProfilePic: true,
            id: '77306967',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/bdd2ec14-a17a-4507-8021-038b2c451e56.jpg?aki_policy=profile_x_medium',
            smartName: 'Jorge',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/bdd2ec14-a17a-4507-8021-038b2c451e56.jpg?aki_policy=profile_small'
          },
          comments: 'Estupenda ubicación y buena comunicación con Mercedes',
          createdAt: '2022-11-13T12:52:54Z',
          id: '759229207518252964',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Mercedes',
            hasProfilePic: true,
            id: '136173738',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_x_medium',
            smartName: 'Mercedes',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'November 2022',
          localizedReview: {
            comments: 'Great location and good communication with Mercedes',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        },
        {
          author: {
            firstName: 'Cristóbal',
            hasProfilePic: true,
            id: '429148607',
            pictureUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3',
            smartName: 'Cristóbal',
            thumbnailUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3'
          },
          comments: 'Quiero agradecer la hospitalidad de Mercedes y mencionar que la casa está perfecta, igual que aparece en las imágenes.',
          createdAt: '2022-01-09T12:07:57Z',
          id: '535975657300135006',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Mercedes',
            hasProfilePic: true,
            id: '136173738',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_x_medium',
            smartName: 'Mercedes',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'January 2022',
          localizedReview: {
            comments: "I want to thank Mercedes' hospitality and mention that the house is perfect, just as it appears in the pictures.",
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        },
        {
          author: {
            firstName: 'Javier',
            hasProfilePic: true,
            id: '359493333',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/0f4e557c-1b4d-42d0-a069-27a3c06f41a9.jpg?aki_policy=profile_x_medium',
            smartName: 'Javier',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/0f4e557c-1b4d-42d0-a069-27a3c06f41a9.jpg?aki_policy=profile_small'
          },
          comments: 'El piso es un salón de banquetes reformado en piso con dos habitaciones  dobles y cocina abierta al comedor. Un baño dividido en ducha y inodoro. La reforma es muy reciente y los muebles de comedor y una habitación son nuevos y están impecables. La otra habitación tiene las camas un poco cortas para adultos y algún armario con olor a humedad. Particularmente encontramos el piso muy húmedo. El entorno es más ruidoso de lo que pudiera parecer por la proximidad de la carretera, un bar cercano que en ocasiones pone música por la noche y las conversaciones de los clientes del propio bar que se oyen al estar el piso junto a la terraza del bar. El acceso es a pie de calle ideal para carritos o problemas de movilidad. Los espacios son muy amplios en todo el piso. Las fotografías reflejan fielmente el contenido del piso.',
          createdAt: '2021-08-17T12:58:54Z',
          id: '430908818064865291',
          collectionTag: null,
          rating: 4,
          recipient: {
            firstName: 'Mercedes',
            hasProfilePic: true,
            id: '136173738',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_x_medium',
            smartName: 'Mercedes',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'August 2021',
          localizedReview: {
            comments: 'The apartment is a renovated banquet room on the floor with two double bedrooms and kitchen open to the dining room. A bathroom divided into a shower and toilet. The renovation is very recent and the dining room and one bedroom furniture are new and impeccable. The other room has the beds a little short for adults and a closet with a musty smell. In particular, we found the apartment very humid. The setting is noisier than it might look because of the proximity of the road, a nearby bar that sometimes plays music at night, and the conversations of customers from the bar itself that can be heard from being on the floor next to the bar terrace. Access is at the foot of the street, ideal for carts or mobility issues. The spaces are very spacious throughout the apartment. Photos fairly represent the content of the flat.',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 21208,
          amountFormatted: '$21,208',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/2956c3f7-7edd-45c1-837a-cc6ea8bae430.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/2956c3f7-7edd-45c1-837a-cc6ea8bae430.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a3d6363a-36f2-43bb-bf17-30734b90c4c8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a3d6363a-36f2-43bb-bf17-30734b90c4c8.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8bc93d97-bd3e-4ce1-b115-50a0aa84bf56.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8bc93d97-bd3e-4ce1-b115-50a0aa84bf56.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/df5ba229-1f4b-4562-bc97-f955ee87adc5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/df5ba229-1f4b-4562-bc97-f955ee87adc5.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5c1c8a9c-5409-4eba-9856-5575ec473a05.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5c1c8a9c-5409-4eba-9856-5575ec473a05.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a2bf898f-74ce-4349-8d0a-869fcbbcd4e7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a2bf898f-74ce-4349-8d0a-869fcbbcd4e7.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c585f4e5-3dc5-4bc6-b082-ae1b073a01a1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c585f4e5-3dc5-4bc6-b082-ae1b073a01a1.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c5fd1328-698f-4c2e-aee9-24e5623497da.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c5fd1328-698f-4c2e-aee9-24e5623497da.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2925fe31-6b4e-4076-946a-e991eece7bfb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2925fe31-6b4e-4076-946a-e991eece7bfb.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/abccbc69-9c64-4364-92bf-3017c4ce16ad.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/abccbc69-9c64-4364-92bf-3017c4ce16ad.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/caaa0737-99cf-410c-8cac-bb9c85902b7b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/caaa0737-99cf-410c-8cac-bb9c85902b7b.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/32f02d90-be0a-423f-b211-c82e2a579673.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/32f02d90-be0a-423f-b211-c82e2a579673.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c061ac18-0e16-4e5f-a191-c0f3aa2fb2d4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c061ac18-0e16-4e5f-a191-c0f3aa2fb2d4.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6bd96235-3c7f-41f0-9217-e8b0f6d00c09.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6bd96235-3c7f-41f0-9217-e8b0f6d00c09.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8c72559e-ba55-4141-bbcd-c2d0ae53d7d4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8c72559e-ba55-4141-bbcd-c2d0ae53d7d4.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/012d376a-7fa9-432f-90e9-32fa73e31144.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/012d376a-7fa9-432f-90e9-32fa73e31144.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8178f34a-7a50-4766-909f-ab1202cfb580.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8178f34a-7a50-4766-909f-ab1202cfb580.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/96d77b09-a54b-4587-a7cd-6cf65142e9b4.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/96d77b09-a54b-4587-a7cd-6cf65142e9b4.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/ab712986-87d1-42a2-9668-86a0f30127cf.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/ab712986-87d1-42a2-9668-86a0f30127cf.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/93a6d4cd-61d6-4624-b9ec-505b464e8ff5.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/93a6d4cd-61d6-4624-b9ec-505b464e8ff5.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/6c9fa24e-20f0-42ad-837f-40ba7e2d5bd9.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/6c9fa24e-20f0-42ad-837f-40ba7e2d5bd9.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/0bfce8f5-371e-4828-ba99-ae86f2b6cba5.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/0bfce8f5-371e-4828-ba99-ae86f2b6cba5.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/7968fef6-bf11-4642-835f-2de518cb011e.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/7968fef6-bf11-4642-835f-2de518cb011e.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/98c63922-ac11-41f4-a636-0f253596f14f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-30008466/original/98c63922-ac11-41f4-a636-0f253596f14f.jpeg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 136173738,
        firstName: 'Mercedes',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Mercedes',
        about: 'SOY MERCEDES,   ALQUILO MI CASA PARA VACACIONES TODO EL AÑO.ESTOY ENCANTADA DE RECIBIROS.BIENVENIDOS TODOS.\r\nPUEDES CONTACTAR CONMIGO  CUANDO DESEES.\r\nSALUDOS VIAJEROS !!',
        memberSince: 'Joined in June 2017',
        languages: [],
        responseRate: '100%',
        responseTime: 'within a few hours',
        hasInclusionBadge: false,
        badges: [
          '30 Reviews',
          '1 Reference'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/136173738',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/39144310',
      name: 'Shiny Lud Super Family Apartment',
      stars: 4.85,
      numberOfGuests: 5,
      address: 'Málaga, Andalucía, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 36.72599,
        lng: -4.41832
      },
      reviews: [
        {
          author: {
            firstName: 'Amulya',
            hasProfilePic: true,
            id: '340063758',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/f047d2c1-980e-43c0-a7a0-72c688dbe5c6.jpg?aki_policy=profile_x_medium',
            smartName: 'Amulya',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/f047d2c1-980e-43c0-a7a0-72c688dbe5c6.jpg?aki_policy=profile_small'
          },
          comments: 'The location is great, close to everything you want to see in Malaga! Giulia was super helpful and communicated with us throughout the entire experience. Highly recommend!!',
          createdAt: '2022-06-07T14:09:37Z',
          id: '644028478010695165',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Karim',
            hasProfilePic: true,
            id: '244482777',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/6eb03225-6bbd-4967-badf-ba1fa513afda.jpg?aki_policy=profile_x_medium',
            smartName: 'Karim',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/6eb03225-6bbd-4967-badf-ba1fa513afda.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'June 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Martina',
            hasProfilePic: true,
            id: '174008748',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/e98af370-e504-4312-b0a9-7c3292cd936e.jpg?aki_policy=profile_x_medium',
            smartName: 'Martina',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/e98af370-e504-4312-b0a9-7c3292cd936e.jpg?aki_policy=profile_small'
          },
          comments: "Very comfortable flat, lot of space even for our doublestroller, comfy beds, big closet, baby chair and bed and climatization/heating. Hallway betwen kitchen/living room and bed rooms was very useful when kids were sleeping and they didn't hear any noises (talking, tv etc.) from the kitchen.. clean sheets and towel every week, comunication with you and your friendly approach was  those little things which made our long stay so nice :) The flat is not a brand new, you can see it on the wallpaint or spot some stains on the tables but over all it was such a nice and warm place to stay... oh and there were no cucarachas :)",
          createdAt: '2022-03-06T13:35:18Z',
          id: '576607063832356746',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Karim',
            hasProfilePic: true,
            id: '244482777',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/6eb03225-6bbd-4967-badf-ba1fa513afda.jpg?aki_policy=profile_x_medium',
            smartName: 'Karim',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/6eb03225-6bbd-4967-badf-ba1fa513afda.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'March 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Malgorzata',
            hasProfilePic: true,
            id: '281892619',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/9fc8250f-00a9-4420-91ee-afd01fb4c866.jpg?aki_policy=profile_x_medium',
            smartName: 'Malgorzata',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9fc8250f-00a9-4420-91ee-afd01fb4c866.jpg?aki_policy=profile_small'
          },
          comments: "I had an amazing stay at Karim's place. The location is amazing, everything is very very close, the flat is basically in the center! There are quite a few stores few steps away and plenty of restaurants. A swift 10 min walk will bring you to the bottom part of the castle, I walked to the top part of the castle as my lunch-break exercise, that's how close it was. <br/><br/>I was taken care of by Giulia and she was lovely, she answered all of my requests and questions and tried to be as helpful as possible. I had my sheets exchanged few times during my stay which was amazing. <br/><br/>The big dining table was a good working spot and the couch and bed are very comfortable.",
          createdAt: '2022-01-22T13:04:59Z',
          id: '545426446837358846',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Karim',
            hasProfilePic: true,
            id: '244482777',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/6eb03225-6bbd-4967-badf-ba1fa513afda.jpg?aki_policy=profile_x_medium',
            smartName: 'Karim',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/6eb03225-6bbd-4967-badf-ba1fa513afda.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'January 2022',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 19722,
          amountFormatted: '$19,722',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/15a47eca-db56-4ba4-b272-bf0e642b6e32.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/15a47eca-db56-4ba4-b272-bf0e642b6e32.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/49568461-949e-4307-9a92-3cc62144a6de.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/49568461-949e-4307-9a92-3cc62144a6de.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c2e44727-dd4c-4e1f-a8de-b31a65ca56de.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c2e44727-dd4c-4e1f-a8de-b31a65ca56de.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/93788ee3-2934-4c93-90f0-4bec2924230c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/93788ee3-2934-4c93-90f0-4bec2924230c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/da1759f2-f228-4bd7-addd-497f2c8908ab.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/da1759f2-f228-4bd7-addd-497f2c8908ab.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cb25919e-8ce9-46f7-9459-829b4c0f55a2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cb25919e-8ce9-46f7-9459-829b4c0f55a2.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/723c7ccc-55be-4d1b-a87e-6dcf339efa86.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/723c7ccc-55be-4d1b-a87e-6dcf339efa86.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d3e54506-83b8-449c-8617-05f2a7a767d5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d3e54506-83b8-449c-8617-05f2a7a767d5.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f8449a54-fa36-451e-9d78-24f5c0d07676.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f8449a54-fa36-451e-9d78-24f5c0d07676.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cc050e7b-4b96-4371-a523-60f392028c94.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cc050e7b-4b96-4371-a523-60f392028c94.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/004dc2c4-b404-41d9-ad1d-79277a22ed48.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/004dc2c4-b404-41d9-ad1d-79277a22ed48.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d52680de-80e5-4f53-ba4c-b4b4e0c62a70.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d52680de-80e5-4f53-ba4c-b4b4e0c62a70.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/15f92042-1293-494e-94ac-e6bc85d2f310.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/15f92042-1293-494e-94ac-e6bc85d2f310.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ac1aebcf-0772-4f57-b803-e7c8dffba5ed.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ac1aebcf-0772-4f57-b803-e7c8dffba5ed.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9341d353-3929-4bd3-913f-d14d94af2ae4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9341d353-3929-4bd3-913f-d14d94af2ae4.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9735cb5a-50cc-44d3-8170-22d922dfba03.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9735cb5a-50cc-44d3-8170-22d922dfba03.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c0645e9b-a2b9-4ca5-acb8-e4e43fdf5757.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c0645e9b-a2b9-4ca5-acb8-e4e43fdf5757.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0d46b61c-a742-46ef-89bd-2a946418422f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0d46b61c-a742-46ef-89bd-2a946418422f.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1125ce4c-92fa-484a-959d-fbf0d4501f14.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1125ce4c-92fa-484a-959d-fbf0d4501f14.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7d599e2a-559c-4152-90b5-f23434e371cd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7d599e2a-559c-4152-90b5-f23434e371cd.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4b790e27-d107-495e-9a2b-eae116cc47ab.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4b790e27-d107-495e-9a2b-eae116cc47ab.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a4bb7005-f10b-419d-8556-cdbb876e94bb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a4bb7005-f10b-419d-8556-cdbb876e94bb.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/af59107d-85b0-472f-b15e-beabeee109f5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/af59107d-85b0-472f-b15e-beabeee109f5.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fa163eda-96fa-4c8e-9170-842b592b409d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fa163eda-96fa-4c8e-9170-842b592b409d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/baf4960b-bb1e-4761-94db-9ead84a32158.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/baf4960b-bb1e-4761-94db-9ead84a32158.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/01b9416b-12f0-462a-ac8a-5e1783c7a1b6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/01b9416b-12f0-462a-ac8a-5e1783c7a1b6.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 244482777,
        firstName: 'Karim',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Karim',
        about: 'We believe that traveling is the best way to get to know new cultures and environments, new people from whom to learn, while living unforgettable experiences. We are very proud to offer hosts and guests the possibility of mutually benefiting from these experiences, assuming the work involved, so that their only concern is to enjoy their time.',
        memberSince: 'Joined in February 2019',
        languages: [
          'English',
          'Français',
          'Español'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '65 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/244482777',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/6eb03225-6bbd-4967-badf-ba1fa513afda.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/6eb03225-6bbd-4967-badf-ba1fa513afda.jpg?aki_policy=profile_small'
      },
      additionalHosts: [
        {
          id: 28417777,
          firstName: 'Ludovic',
          isSuperHost: false,
          hasProfilePic: true,
          smartName: 'Ludovic',
          about: '',
          memberSince: 'Joined in February 2015',
          languages: [
            'English',
            'Français',
            'Italiano'
          ],
          hasInclusionBadge: false,
          badges: [],
          hostUrl: 'https://www.airbnb.com/users/show/28417777',
          pictureUrl: 'https://a0.muscache.com/im/pictures/user/953e7189-dec3-4902-add0-670caad58dcd.jpg?aki_policy=profile_large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/953e7189-dec3-4902-add0-670caad58dcd.jpg?aki_policy=profile_small'
        }
      ],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/29230064',
      name: 'Cristina´s Palace 5G WIFI - PETS ALOW',
      stars: 4.83,
      numberOfGuests: 3,
      address: 'Sevilla, Andalucía, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 37.402,
        lng: -5.992
      },
      reviews: [
        {
          author: {
            firstName: 'Barbara',
            hasProfilePic: true,
            id: '16795803',
            pictureUrl: 'https://a0.muscache.com/im/users/16795803/profile_pic/1402813163/original.jpg?aki_policy=profile_x_medium',
            smartName: 'Barbara',
            thumbnailUrl: 'https://a0.muscache.com/im/users/16795803/profile_pic/1402813163/original.jpg?aki_policy=profile_small'
          },
          comments: 'wonderful. cristina will do everything for you the place is so lovely and the quiet street is do close to the most wonderful square and restaurants magic',
          createdAt: '2022-11-27T15:32:37Z',
          id: '769456453037372879',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Cristina',
            hasProfilePic: true,
            id: '220206759',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/9cc56b71-11ba-4ae3-9fdc-b3fb504ed175.jpg?aki_policy=profile_x_medium',
            smartName: 'Cristina',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9cc56b71-11ba-4ae3-9fdc-b3fb504ed175.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'November 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Chelsea',
            hasProfilePic: true,
            id: '126111850',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/cf16f97c-6d97-4f71-959a-a863aaca2bc5.jpg?aki_policy=profile_x_medium',
            smartName: 'Chelsea',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/cf16f97c-6d97-4f71-959a-a863aaca2bc5.jpg?aki_policy=profile_small'
          },
          comments: "A lovely month stay here - it had everything I needed. A good location for bars and restaurants while still being on a quiet street. Many big tourist places were within 20-30 minutes of walking. And. Cristina is a great host - prompt and good communication! I'd recommend staying here.",
          createdAt: '2022-10-30T15:27:09Z',
          id: '749159984222930896',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Cristina',
            hasProfilePic: true,
            id: '220206759',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/9cc56b71-11ba-4ae3-9fdc-b3fb504ed175.jpg?aki_policy=profile_x_medium',
            smartName: 'Cristina',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9cc56b71-11ba-4ae3-9fdc-b3fb504ed175.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'October 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Gerald',
            hasProfilePic: true,
            id: '134891616',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/12abcbad-bfb3-437f-9074-1aa7c5477f38.jpg?aki_policy=profile_x_medium',
            smartName: 'Gerald',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/12abcbad-bfb3-437f-9074-1aa7c5477f38.jpg?aki_policy=profile_small'
          },
          comments: 'As advertized, nice neighborhood, nice location, great city, excellent value. Highly recommended.',
          createdAt: '2022-09-14T14:10:03Z',
          id: '715781494234309318',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Cristina',
            hasProfilePic: true,
            id: '220206759',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/9cc56b71-11ba-4ae3-9fdc-b3fb504ed175.jpg?aki_policy=profile_x_medium',
            smartName: 'Cristina',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9cc56b71-11ba-4ae3-9fdc-b3fb504ed175.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'September 2022',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 23184,
          amountFormatted: '$23,184',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Acogedoras Fiestas Navideñas.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/bd4bf0ac-f8a8-4767-86f1-181cc52e80cf.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/bd4bf0ac-f8a8-4767-86f1-181cc52e80cf.jpeg?aki_policy=small'
        },
        {
          caption: 'Sofá convertible en cama de matrimonio. Super cómodo !!!',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6408f6ec-23c0-4112-81d6-14954890660c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6408f6ec-23c0-4112-81d6-14954890660c.jpg?aki_policy=small'
        },
        {
          caption: 'A partir de hoy 27 de Mayo 2022 disponemos de SmartTV con Netflix gratuito para el huésped. No te pierdas nada!!!',
          pictureUrl: 'https://a0.muscache.com/im/pictures/30641da1-43ac-400b-9776-6796383dc0c4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/30641da1-43ac-400b-9776-6796383dc0c4.jpg?aki_policy=small'
        },
        {
          caption: 'Would you like a coffee?.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/283b946b-c3d2-4fcc-a023-0ec9b1fb4daf.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/283b946b-c3d2-4fcc-a023-0ec9b1fb4daf.jpg?aki_policy=small'
        },
        {
          caption: 'Sala de estar.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3bd8bc4f-b629-4a5f-9590-5a7f953aab00.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3bd8bc4f-b629-4a5f-9590-5a7f953aab00.jpg?aki_policy=small'
        },
        {
          caption: 'Cama relax.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/79dffbcf-4652-4539-8b7e-4998baa4fe65.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/79dffbcf-4652-4539-8b7e-4998baa4fe65.jpg?aki_policy=small'
        },
        {
          caption: 'Cuarto Individual',
          pictureUrl: 'https://a0.muscache.com/im/pictures/73bac8d7-593c-4a53-b977-8822a5e873fb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/73bac8d7-593c-4a53-b977-8822a5e873fb.jpg?aki_policy=small'
        },
        {
          caption: 'Aseo amplio y practico.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6458059f-d660-459b-8226-5ddc38f94442.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6458059f-d660-459b-8226-5ddc38f94442.jpg?aki_policy=small'
        },
        {
          caption: "Home Wellcome to Cristina's Palace.\nCon todas las medidas sanitarias recomendadas Covid19.",
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/48341e60-0fca-44a3-aea9-13f032fd8a94.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/48341e60-0fca-44a3-aea9-13f032fd8a94.jpeg?aki_policy=small'
        },
        {
          caption: 'Detalles de salón.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/70181acc-9ff8-470e-84ff-d8480d702ee8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/70181acc-9ff8-470e-84ff-d8480d702ee8.jpg?aki_policy=small'
        },
        {
          caption: 'Cama de matrimonio',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f1df370b-d5b7-4a73-b259-017ec5652bf5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f1df370b-d5b7-4a73-b259-017ec5652bf5.jpg?aki_policy=small'
        },
        {
          caption: 'Detalles',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3338ce74-689e-40f7-a3fb-70e568e38c9d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3338ce74-689e-40f7-a3fb-70e568e38c9d.jpg?aki_policy=small'
        },
        {
          caption: 'Salón comedor. Luminoso y sofá cama Ikea.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/80463844-ac42-40bc-84ab-c4001dd458ed.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/80463844-ac42-40bc-84ab-c4001dd458ed.jpg?aki_policy=small'
        },
        {
          caption: 'WIFI GRATIS!!!!!!',
          pictureUrl: 'https://a0.muscache.com/im/pictures/82dae86f-a93d-4142-8800-325578fbb21d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/82dae86f-a93d-4142-8800-325578fbb21d.jpg?aki_policy=small'
        },
        {
          caption: 'Salón principal. What time arrive?.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8e58b994-c6cb-459e-a07c-5697896a2b35.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8e58b994-c6cb-459e-a07c-5697896a2b35.jpg?aki_policy=small'
        },
        {
          caption: 'Comedor',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ceb8e42b-5b48-4175-8196-14de649939b7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ceb8e42b-5b48-4175-8196-14de649939b7.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio matrimonio. King side.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4695c907-46c3-4de6-8da2-544448527e8d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4695c907-46c3-4de6-8da2-544448527e8d.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio individual. Que cuqui!',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b6836acb-46c4-4571-8dfe-50f17a192d9f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b6836acb-46c4-4571-8dfe-50f17a192d9f.jpg?aki_policy=small'
        },
        {
          caption: 'Nueva cajonera con armario en flor. Dormitorio principal.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/218c8c74-903f-4924-88df-aebbd2df2f44.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/218c8c74-903f-4924-88df-aebbd2df2f44.jpg?aki_policy=small'
        },
        {
          caption: 'Salón principal.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0594b400-441d-4c7b-ac90-a6fdda55f80b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0594b400-441d-4c7b-ac90-a6fdda55f80b.jpg?aki_policy=small'
        },
        {
          caption: 'Detalles cocina con encanto.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e7eccdfd-cf81-4eda-b40e-b920fa50d095.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e7eccdfd-cf81-4eda-b40e-b920fa50d095.jpg?aki_policy=small'
        },
        {
          caption: 'Cocina. Encontraras todo lo necesario para tu estancia.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ad1555b6-bb14-4e6a-8e90-902b78c7683b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ad1555b6-bb14-4e6a-8e90-902b78c7683b.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b934b415-1cb8-4ee8-8e91-63b9545fb348.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b934b415-1cb8-4ee8-8e91-63b9545fb348.jpg?aki_policy=small'
        },
        {
          caption: 'Pasillo separación dormitorios.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/29a6c26c-8ce4-450b-aa92-185c91e291d6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/29a6c26c-8ce4-450b-aa92-185c91e291d6.jpg?aki_policy=small'
        },
        {
          caption: 'Salón, cocina y salida .',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b173327a-87fe-4b75-a58e-b300424be8f3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b173327a-87fe-4b75-a58e-b300424be8f3.jpg?aki_policy=small'
        },
        {
          caption: 'Toallas, gel y champú.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c06478f1-ec0e-4a9c-b6d2-f9af022ec76c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c06478f1-ec0e-4a9c-b6d2-f9af022ec76c.jpg?aki_policy=small'
        },
        {
          caption: 'Intimidad. Separación de ambientes.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fd42592a-a50f-42eb-8dee-88effdb8c63d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fd42592a-a50f-42eb-8dee-88effdb8c63d.jpg?aki_policy=small'
        },
        {
          caption: 'Entrada a dormitorios.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/76d5e434-0da2-4efa-9845-534273803333.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/76d5e434-0da2-4efa-9845-534273803333.jpg?aki_policy=small'
        },
        {
          caption: 'Sofá cama. Listo para soñar.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/41c74dac-14c2-44dd-abd0-6a19cb17adcd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/41c74dac-14c2-44dd-abd0-6a19cb17adcd.jpg?aki_policy=small'
        },
        {
          caption: 'Desayunamos?.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8030d998-1fe3-46e9-bfce-6ea90b57722d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8030d998-1fe3-46e9-bfce-6ea90b57722d.jpg?aki_policy=small'
        },
        {
          caption: 'DORMITORIO PRINCIPAL LUMINOSO Y CONFORTABLE.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/e0421723-60bd-4e47-8502-58a192edbc5a.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/e0421723-60bd-4e47-8502-58a192edbc5a.jpeg?aki_policy=small'
        },
        {
          caption: 'Pasillo de entada.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9cdac735-b69c-4d1d-93d4-ac31433aec4b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9cdac735-b69c-4d1d-93d4-ac31433aec4b.jpg?aki_policy=small'
        },
        {
          caption: 'Pasillo que comunica los cuartos y el cuarto de baño.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/705207a0-9878-4cad-a087-d96be3b81691.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/705207a0-9878-4cad-a087-d96be3b81691.jpg?aki_policy=small'
        },
        {
          caption: 'Puerta del portal.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/caf4b97a-14ab-472b-b5af-20e8a881ae4c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/caf4b97a-14ab-472b-b5af-20e8a881ae4c.jpg?aki_policy=small'
        },
        {
          caption: 'Calle Faustino Alvarez, paralela a Calle Feria y  a la Alameda de Hércules.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0af52577-71d7-4170-89c6-16735fc776b1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0af52577-71d7-4170-89c6-16735fc776b1.jpg?aki_policy=small'
        },
        {
          caption: 'Todo es posible.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4d7ddc80-c126-4964-b52c-31cc35214dee.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4d7ddc80-c126-4964-b52c-31cc35214dee.jpg?aki_policy=small'
        },
        {
          caption: 'BIENVENIDAS MASCOTAS!!! \nOS PRESENTO A LA MÍA SE LLAMA SAM.....',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3a8402df-e0b1-4724-a38c-edd8c7b61511.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3a8402df-e0b1-4724-a38c-edd8c7b61511.jpg?aki_policy=small'
        },
        {
          caption: 'My kichen',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7a41b1cc-0ba6-4283-a9b1-f22872b9c5a0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7a41b1cc-0ba6-4283-a9b1-f22872b9c5a0.jpg?aki_policy=small'
        },
        {
          caption: 'Detalles con encanto!!!!!!',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2d967df9-5a33-4a98-a30d-ec6c21cc9065.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2d967df9-5a33-4a98-a30d-ec6c21cc9065.jpg?aki_policy=small'
        },
        {
          caption: 'DORMITORIO DE USO INDIVIDUAL.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d3be4f20-6496-454b-b09a-44190ea00cdf.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d3be4f20-6496-454b-b09a-44190ea00cdf.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio Individual.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4efa8ecf-68db-45ba-96aa-097e5699fe60.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4efa8ecf-68db-45ba-96aa-097e5699fe60.jpg?aki_policy=small'
        },
        {
          caption: 'Detalles .',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d01f188f-664e-4c93-a2d0-9755d9931b51.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d01f188f-664e-4c93-a2d0-9755d9931b51.jpg?aki_policy=small'
        },
        {
          caption: 'Espejo.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/102dd406-f2fc-430d-bb6b-b07f2872d8c2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/102dd406-f2fc-430d-bb6b-b07f2872d8c2.jpg?aki_policy=small'
        },
        {
          caption: 'AMPLITUD Y SERENIDAD.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/0f39c0a4-a3b4-4c74-9764-1aac4222997f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/0f39c0a4-a3b4-4c74-9764-1aac4222997f.jpeg?aki_policy=small'
        },
        {
          caption: 'NUEVO ARMARIO.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/4f805a98-218c-4ac2-96d0-5a1861b2d509.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/4f805a98-218c-4ac2-96d0-5a1861b2d509.jpeg?aki_policy=small'
        },
        {
          caption: 'Big Bed...',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/118d2578-d7e9-4d2b-8049-ced8320efea3.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/118d2578-d7e9-4d2b-8049-ced8320efea3.jpeg?aki_policy=small'
        },
        {
          caption: 'Protocolo anti Covid19',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/501e3753-657b-466b-a0a5-ef61dfb94fbf.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/501e3753-657b-466b-a0a5-ef61dfb94fbf.jpeg?aki_policy=small'
        },
        {
          caption: 'Oasis.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/b6becdee-e7a2-48b5-b782-d3e84044ef93.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/b6becdee-e7a2-48b5-b782-d3e84044ef93.jpeg?aki_policy=small'
        },
        {
          caption: 'Google Maps. Find us!',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5b10835e-9729-44fe-999c-01cfa7f77cba.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5b10835e-9729-44fe-999c-01cfa7f77cba.jpg?aki_policy=small'
        },
        {
          caption: 'Decoración Navidad.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/c7cd9207-36ef-48c9-b82d-904bcd9d1c74.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/c7cd9207-36ef-48c9-b82d-904bcd9d1c74.jpeg?aki_policy=small'
        },
        {
          caption: 'Felices Fiestas, como en casa...',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/2aaa43c1-3c8e-4739-b2d6-06d20722ba6f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/2aaa43c1-3c8e-4739-b2d6-06d20722ba6f.jpeg?aki_policy=small'
        },
        {
          caption: 'Fin de Año en Sevilla.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/2e2b2269-cdb3-4ac0-b175-f5c8cd1e3b8b.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/2e2b2269-cdb3-4ac0-b175-f5c8cd1e3b8b.jpeg?aki_policy=small'
        },
        {
          caption: 'Livingroom Christmas.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/34458794-027a-4101-b92b-c1c1c2a19ffc.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/34458794-027a-4101-b92b-c1c1c2a19ffc.jpeg?aki_policy=small'
        },
        {
          caption: 'And a happy new year!!!',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/6b39d117-ca0c-4cbc-b01d-091981b4d699.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-29230064/original/6b39d117-ca0c-4cbc-b01d-091981b4d699.jpeg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 220206759,
        firstName: 'Cristina',
        isSuperHost: true,
        hasProfilePic: true,
        smartName: 'Cristina',
        about: "Hola futuros huéspedes! Mi nombre es Cristina y tras superar la pandemia mundial de la que ya vamos remontando me complace decirles que vuelvo a abrir las puertas de Cristina's Palace, llena de energía y entusiasmada de conoceros. ",
        memberSince: 'Joined in October 2018',
        languages: [
          'Español'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '82 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/220206759',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/9cc56b71-11ba-4ae3-9fdc-b3fb504ed175.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9cc56b71-11ba-4ae3-9fdc-b3fb504ed175.jpg?aki_policy=profile_small'
      },
      additionalHosts: [
        {
          id: 114021081,
          firstName: 'Cristina',
          isSuperHost: false,
          hasProfilePic: true,
          smartName: 'Cristina',
          about: '',
          memberSince: 'Joined in January 2017',
          languages: [
            'English'
          ],
          hasInclusionBadge: false,
          badges: [],
          hostUrl: 'https://www.airbnb.com/users/show/114021081',
          pictureUrl: 'https://a0.muscache.com/im/pictures/user/2baa1c3c-a29c-40a7-942e-ad5dd9ccdf1b.jpg?aki_policy=profile_large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/2baa1c3c-a29c-40a7-942e-ad5dd9ccdf1b.jpg?aki_policy=profile_small'
        }
      ],
      isHostedBySuperhost: true
    },
    {
      url: 'https://www.airbnb.com/rooms/30691089',
      name: 'Casa cabárceno',
      stars: 4.69,
      numberOfGuests: 4,
      address: 'Cantabria, Spain',
      roomType: 'Entire condo',
      location: {
        lat: 43.38744,
        lng: -3.78675
      },
      reviews: [
        {
          author: {
            firstName: 'Raquel',
            hasProfilePic: true,
            id: '402347287',
            pictureUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3',
            smartName: 'Raquel',
            thumbnailUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3'
          },
          comments: 'Trato personal de 10, y la casa estaba perfecta',
          createdAt: '2022-09-15T13:31:29Z',
          id: '716486857261957735',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Eriz',
            hasProfilePic: true,
            id: '229533019',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/6c002a84-c3f4-4281-a22d-11454a810dca.jpg?aki_policy=profile_x_medium',
            smartName: 'Eriz',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/6c002a84-c3f4-4281-a22d-11454a810dca.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'September 2022',
          localizedReview: {
            comments: '10-star personal treatment, and the house was perfect',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        },
        {
          author: {
            firstName: 'Bea',
            hasProfilePic: true,
            id: '20426247',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/30eaa4ab-772d-4443-a676-4a1b612afafc.jpg?aki_policy=profile_x_medium',
            smartName: 'Bea',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/30eaa4ab-772d-4443-a676-4a1b612afafc.jpg?aki_policy=profile_small'
          },
          comments: 'Entorno maravilloso, muy tranquilo, en pleno campo y alejado de todo, pero a la vez muy fácil de acceder en coche a los puntos de interés turistico: parque de cabárceno, santander, suances, etc. Los dueños muy atentos y amables. Una pena no habernos podido quedar más dias.',
          createdAt: '2022-09-10T14:17:41Z',
          id: '712886232788425923',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Eriz',
            hasProfilePic: true,
            id: '229533019',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/6c002a84-c3f4-4281-a22d-11454a810dca.jpg?aki_policy=profile_x_medium',
            smartName: 'Eriz',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/6c002a84-c3f4-4281-a22d-11454a810dca.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'September 2022',
          localizedReview: {
            comments: "Wonderful setting, very quiet, in the countryside and away from everything, but at the same time very easy to access by car to the tourist attractions: Cabárceno park, santander, suances, etc. The owners are very attentive and friendly. Too bad we couldn't stay longer.",
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        },
        {
          author: {
            firstName: 'Daniel',
            hasProfilePic: true,
            id: '134080466',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/7d7552d3-4232-4e04-acfd-098116e11f04.jpg?aki_policy=profile_x_medium',
            smartName: 'Daniel',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/7d7552d3-4232-4e04-acfd-098116e11f04.jpg?aki_policy=profile_small'
          },
          comments: 'Una casa muy acogedora y situada en una ubicación muy buena para visitar Cantabria. <br/>Eriz y MaJosé dos personas super amables y empáticas, que nos ayudaron  durante toda la estancia. <br/>Totalmente recomendable.',
          createdAt: '2022-08-31T11:24:09Z',
          id: '705551130564010077',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Eriz',
            hasProfilePic: true,
            id: '229533019',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/6c002a84-c3f4-4281-a22d-11454a810dca.jpg?aki_policy=profile_x_medium',
            smartName: 'Eriz',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/6c002a84-c3f4-4281-a22d-11454a810dca.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'August 2022',
          localizedReview: {
            comments: 'A very cozy house and located in a very good location to visit Cantabria. <br/>Eriz and MaJosé are two super friendly and empathetic people, who helped us throughout the stay. <br/>Totally recommended.',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 15159,
          amountFormatted: '$15,159',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/facfebc9-79d0-4f60-b31f-84e5030fd487.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/facfebc9-79d0-4f60-b31f-84e5030fd487.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e9978d42-087b-4e98-b41f-6874942261d5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e9978d42-087b-4e98-b41f-6874942261d5.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/854899b2-31ec-484d-8d34-69f86a51d28b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/854899b2-31ec-484d-8d34-69f86a51d28b.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8f535f94-3daf-48a0-a0c2-7d127121191c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8f535f94-3daf-48a0-a0c2-7d127121191c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/bba9c33c-8d86-427c-a9cf-8230c887e3c5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/bba9c33c-8d86-427c-a9cf-8230c887e3c5.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4831ecbb-f701-4514-9e7d-1d6ff5fbc9e0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4831ecbb-f701-4514-9e7d-1d6ff5fbc9e0.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ff9a092e-7a6c-4239-9e2f-4e7b6ad2391c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ff9a092e-7a6c-4239-9e2f-4e7b6ad2391c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/83c0b26a-84c3-4b99-a716-836f039bad4d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/83c0b26a-84c3-4b99-a716-836f039bad4d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3f5c1db6-b704-4fdb-88ec-84810f6f4ff5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3f5c1db6-b704-4fdb-88ec-84810f6f4ff5.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1e061855-4af7-4ac8-b18f-8b14135b149e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1e061855-4af7-4ac8-b18f-8b14135b149e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ff747bd4-79bb-4b17-a882-2b3aa1a789ff.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ff747bd4-79bb-4b17-a882-2b3aa1a789ff.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/162c1c9b-af1e-4c98-bdc0-cb8a80ff7a35.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/162c1c9b-af1e-4c98-bdc0-cb8a80ff7a35.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/59c1a9db-a643-479e-9a1e-56593ab9c7a4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/59c1a9db-a643-479e-9a1e-56593ab9c7a4.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7aa75a9c-82b0-4f7d-9efd-8387306fd9a6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7aa75a9c-82b0-4f7d-9efd-8387306fd9a6.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/84376804-d10f-442b-bb06-4345e3bc0a2d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/84376804-d10f-442b-bb06-4345e3bc0a2d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0c4dad43-b35e-4805-a11a-82685b3eb2d8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0c4dad43-b35e-4805-a11a-82685b3eb2d8.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4d215e66-4d9b-4dd6-8320-9a037f983704.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4d215e66-4d9b-4dd6-8320-9a037f983704.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a8e2e9ba-8559-4186-bf5d-d25967921888.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a8e2e9ba-8559-4186-bf5d-d25967921888.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d556f96b-4d3b-4404-b009-c5f1232d8b75.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d556f96b-4d3b-4404-b009-c5f1232d8b75.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/dadfb207-190b-46ab-875b-6d9382d7fa37.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/dadfb207-190b-46ab-875b-6d9382d7fa37.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ec225a04-6a3d-46b7-8325-ac8b03f6b5eb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ec225a04-6a3d-46b7-8325-ac8b03f6b5eb.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/986e347a-ccab-4391-a35f-025ea6bfba86.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/986e347a-ccab-4391-a35f-025ea6bfba86.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3ec5b82e-ec36-4b0b-bd7e-c146a992075a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3ec5b82e-ec36-4b0b-bd7e-c146a992075a.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 229533019,
        firstName: 'Eriz',
        isSuperHost: true,
        hasProfilePic: true,
        smartName: 'Eriz',
        about: 'Somos una pareja joven que ha adquirido una vivienda y queremos acoger a nuestros huespedes de la mejor manera posible ya que la situación geográfica es ideal para que puedan conocer nuestra tierra que tanto nos gusta.',
        memberSince: 'Joined in December 2018',
        languages: [],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '16 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/229533019',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/6c002a84-c3f4-4281-a22d-11454a810dca.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/6c002a84-c3f4-4281-a22d-11454a810dca.jpg?aki_policy=profile_small'
      },
      additionalHosts: [
        {
          id: 150815733,
          firstName: 'Ma José',
          isSuperHost: false,
          hasProfilePic: true,
          smartName: 'Ma José',
          about: '',
          memberSince: 'Joined in September 2017',
          languages: [],
          hasInclusionBadge: false,
          badges: [],
          hostUrl: 'https://www.airbnb.com/users/show/150815733',
          pictureUrl: 'https://a0.muscache.com/im/pictures/user/572fb898-b869-40a2-9878-462431ad979a.jpg?aki_policy=profile_large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/572fb898-b869-40a2-9878-462431ad979a.jpg?aki_policy=profile_small'
        }
      ],
      isHostedBySuperhost: true
    },
    {
      url: 'https://www.airbnb.com/rooms/46524913',
      name: 'House Casa de planta baja con piscina',
      stars: null,
      numberOfGuests: 7,
      address: "Castelló d'Empúries, Catalunya, Spain",
      roomType: 'Entire home',
      location: {
        lat: 42.24817,
        lng: 3.12405
      },
      reviews: [],
      pricing: {
        rate: {
          amount: 21121,
          amountFormatted: '$21,121',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Casa de planta baja con piscina - 1',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e3ad6f96-d219-4950-a2cf-e05a31b2ef75.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e3ad6f96-d219-4950-a2cf-e05a31b2ef75.jpg?aki_policy=small'
        },
        {
          caption: 'Casa de planta baja con piscina - 2',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7b65d20b-eb87-45c6-8bfc-9cc040b2b14c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7b65d20b-eb87-45c6-8bfc-9cc040b2b14c.jpg?aki_policy=small'
        },
        {
          caption: 'Casa de planta baja con piscina - 3',
          pictureUrl: 'https://a0.muscache.com/im/pictures/be638514-31ca-4a6c-a51d-5086cba2cfff.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/be638514-31ca-4a6c-a51d-5086cba2cfff.jpg?aki_policy=small'
        },
        {
          caption: 'Casa de planta baja con piscina - 4',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ce827ffe-bddf-4702-9c93-2766e056613f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ce827ffe-bddf-4702-9c93-2766e056613f.jpg?aki_policy=small'
        },
        {
          caption: 'Casa de planta baja con piscina - 5',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5fce382d-7bf2-4b83-88ce-cf7a89243515.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5fce382d-7bf2-4b83-88ce-cf7a89243515.jpg?aki_policy=small'
        },
        {
          caption: 'Casa de planta baja con piscina - 6',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c9b67c8f-b659-4dae-a3f4-6af0ad3f1024.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c9b67c8f-b659-4dae-a3f4-6af0ad3f1024.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 115507722,
        firstName: 'Home Select',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Home Select',
        about: '¿Está buscando una casa/un piso para alquilar en Empuriabrava o Roses?\nHome Select International tiene differentes apartamentos, casas o villas para alquiler. Contactarnos y envio los mejores posibilidades para ti!!',
        memberSince: 'Joined in February 2017',
        languages: [
          'Nederlands',
          'English',
          'Français',
          'Deutsch',
          'Español'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '116 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/115507722',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/3c1158d3-e33a-4f8a-bf75-6773ce12f07f.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/3c1158d3-e33a-4f8a-bf75-6773ce12f07f.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/18928673',
      name: 'Villa Shangrila',
      stars: null,
      numberOfGuests: 9,
      address: 'Calonge, Catalunya, Spain',
      roomType: 'Entire villa',
      location: {
        lat: 41.85659,
        lng: 3.04899
      },
      reviews: [],
      pricing: {
        rate: {
          amount: 21121,
          amountFormatted: '$21,121',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/6200e8ba-e21f-48d1-95af-aedc42e9b6ec.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/6200e8ba-e21f-48d1-95af-aedc42e9b6ec.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/eca4702f-be2f-4ddd-ac4a-0bb949758080.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/eca4702f-be2f-4ddd-ac4a-0bb949758080.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/0ef4661d-3746-40ee-b4a6-218994e6cb00.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/0ef4661d-3746-40ee-b4a6-218994e6cb00.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/f4fdd2b5-4d91-4a02-9457-a2c9dd3ebff3.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/f4fdd2b5-4d91-4a02-9457-a2c9dd3ebff3.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/2a47623e-da29-43f7-92e4-516a0397057b.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/2a47623e-da29-43f7-92e4-516a0397057b.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/60c9c485-5dcd-4637-bede-723654ac9952.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/60c9c485-5dcd-4637-bede-723654ac9952.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/ada0c116-3061-458f-8831-9dae9958042a.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/ada0c116-3061-458f-8831-9dae9958042a.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/fcfac7be-ea43-478f-a790-7dfb0d0f2dd1.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/fcfac7be-ea43-478f-a790-7dfb0d0f2dd1.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/525b6c66-0db2-4da7-9294-337b7d7d83ed.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/525b6c66-0db2-4da7-9294-337b7d7d83ed.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/9e5ebab4-f032-4a0c-8a49-9908ea5a407c.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/9e5ebab4-f032-4a0c-8a49-9908ea5a407c.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/4bccf51c-311f-4d0e-b067-e971c8b6cff7.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/4bccf51c-311f-4d0e-b067-e971c8b6cff7.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/1f715aff-f0ba-4e5b-bced-546405883730.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/1f715aff-f0ba-4e5b-bced-546405883730.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/6c3c1475-b3fb-420b-972b-fe1f5669319d.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/6c3c1475-b3fb-420b-972b-fe1f5669319d.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/be2e75b7-77df-499b-8405-a7b6505596ee.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/be2e75b7-77df-499b-8405-a7b6505596ee.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/ef095bf8-cb01-417b-a0ab-992c85783c9c.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/ef095bf8-cb01-417b-a0ab-992c85783c9c.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/6f5bc9ab-a7f1-4eef-a025-b2836674b1ee.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/6f5bc9ab-a7f1-4eef-a025-b2836674b1ee.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/d3dad84e-03d2-4224-9dc2-720481275fbf.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/d3dad84e-03d2-4224-9dc2-720481275fbf.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/d39ca042-d4fe-4876-aadc-1dc4f5781f9a.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/d39ca042-d4fe-4876-aadc-1dc4f5781f9a.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/3cb089fc-91ca-4ad2-b839-9aa4a3dac98b.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/3cb089fc-91ca-4ad2-b839-9aa4a3dac98b.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/a5b2f2de-6570-46fd-b2ed-316d7668e1c9.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/a5b2f2de-6570-46fd-b2ed-316d7668e1c9.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/544c14fe-a2f0-4507-95e7-8bf7b7eba25b.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/544c14fe-a2f0-4507-95e7-8bf7b7eba25b.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/35f1d79b-e4c6-4967-945a-3be97e49a98c.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/35f1d79b-e4c6-4967-945a-3be97e49a98c.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/ab61d0af-b0a0-4143-a914-0bd833d1398e.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/ab61d0af-b0a0-4143-a914-0bd833d1398e.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/4c07548d-309b-43ca-934a-8fa8c3e8117d.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/4c07548d-309b-43ca-934a-8fa8c3e8117d.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/87296922-55df-4a88-80f0-cfeb076b2eda.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/87296922-55df-4a88-80f0-cfeb076b2eda.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/2df09b64-a0c0-4e50-8281-bec961bbb48c.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18928673/original/2df09b64-a0c0-4e50-8281-bec961bbb48c.jpeg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 129837136,
        firstName: 'Quality Estates',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Quality Estates',
        about: '',
        memberSince: 'Joined in May 2017',
        languages: [],
        responseRate: '64%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '77 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/129837136',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/4d818115-5375-49c4-83e9-b1f1db7ec064.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/4d818115-5375-49c4-83e9-b1f1db7ec064.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/39709319',
      name: "Edificio C'an Patilla 1º B",
      stars: null,
      numberOfGuests: 4,
      address: 'Cala Agulla, Illes Balears, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 39.71678,
        lng: 3.45718
      },
      reviews: [],
      pricing: {
        rate: {
          amount: 15841,
          amountFormatted: '$15,841',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4d30a375-8d75-47b3-aa9b-67961f22d6af.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4d30a375-8d75-47b3-aa9b-67961f22d6af.jpg?aki_policy=small'
        },
        {
          caption: 'Fachada Principal',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0ac6dcf0-3364-463c-ad42-e16ae43b79e3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0ac6dcf0-3364-463c-ad42-e16ae43b79e3.jpg?aki_policy=small'
        },
        {
          caption: 'Entrada Edificio',
          pictureUrl: 'https://a0.muscache.com/im/pictures/aa5b586d-5973-4896-b6ad-534dff66caa4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/aa5b586d-5973-4896-b6ad-534dff66caa4.jpg?aki_policy=small'
        },
        {
          caption: 'Sala de estar',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0d0a5317-8689-4823-b25e-fcc426e1d340.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0d0a5317-8689-4823-b25e-fcc426e1d340.jpg?aki_policy=small'
        },
        {
          caption: 'Sala de estar',
          pictureUrl: 'https://a0.muscache.com/im/pictures/dbbd6c82-07bc-4e33-bccc-e5df8b265fb3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/dbbd6c82-07bc-4e33-bccc-e5df8b265fb3.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/994ec20f-825f-48b3-af2d-6826d71924fc.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/994ec20f-825f-48b3-af2d-6826d71924fc.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio',
          pictureUrl: 'https://a0.muscache.com/im/pictures/609988d3-ab9d-41b3-8d67-3e0f78d60990.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/609988d3-ab9d-41b3-8d67-3e0f78d60990.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f1805d36-aa26-4dcd-acfd-4494fa23fd5e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f1805d36-aa26-4dcd-acfd-4494fa23fd5e.jpg?aki_policy=small'
        },
        {
          caption: 'Cocina',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4ecea562-0f3a-4f78-b5df-1f2c9f0624f2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4ecea562-0f3a-4f78-b5df-1f2c9f0624f2.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8afb7342-5441-4551-820e-83b391d80659.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8afb7342-5441-4551-820e-83b391d80659.jpg?aki_policy=small'
        },
        {
          caption: 'Playa de Cala Agulla',
          pictureUrl: 'https://a0.muscache.com/im/pictures/08fc048e-8591-4f7d-8ef6-a5638fd10847.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/08fc048e-8591-4f7d-8ef6-a5638fd10847.jpg?aki_policy=small'
        },
        {
          caption: 'Playa de Cala Gat',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7b58e6ae-ce0e-4ac7-99f8-92373b01eca3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7b58e6ae-ce0e-4ac7-99f8-92373b01eca3.jpg?aki_policy=small'
        },
        {
          caption: 'Amanacer en el Faro',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c0e3aed0-e6e6-45c3-983d-2a13151c4999.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c0e3aed0-e6e6-45c3-983d-2a13151c4999.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/91e59a61-8458-4bed-801e-e4c0ef05934e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/91e59a61-8458-4bed-801e-e4c0ef05934e.jpg?aki_policy=small'
        },
        {
          caption: 'Playa Cala Gat',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5ec50b17-e034-412d-bd9f-29d4c7a03797.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5ec50b17-e034-412d-bd9f-29d4c7a03797.jpg?aki_policy=small'
        },
        {
          caption: 'Cala Ratjada',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d82a74aa-96c1-47ec-bb0c-4fec6b0c6c45.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d82a74aa-96c1-47ec-bb0c-4fec6b0c6c45.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/91aa1e53-9307-493a-ba0f-3825a6188404.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/91aa1e53-9307-493a-ba0f-3825a6188404.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 53123809,
        firstName: 'Joan',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Joan',
        about: '',
        memberSince: 'Joined in January 2016',
        languages: [],
        hasInclusionBadge: false,
        badges: [
          '1 Review',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/53123809',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/0bc49265-9708-46a1-b8f2-000790b64ad2.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/0bc49265-9708-46a1-b8f2-000790b64ad2.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/22761601',
      name: 'Tasteful Mansion in Campos Majorca on Balearic Islands',
      stars: null,
      numberOfGuests: 8,
      address: 'Campos, Spain',
      roomType: 'Entire home',
      location: {
        lat: 39.364,
        lng: 2.99
      },
      reviews: [
        {
          author: {
            firstName: 'Keely',
            hasProfilePic: true,
            id: '16736390',
            pictureUrl: 'https://a0.muscache.com/im/users/16736390/profile_pic/1404112153/original.jpg?aki_policy=profile_x_medium',
            smartName: 'Keely',
            thumbnailUrl: 'https://a0.muscache.com/im/users/16736390/profile_pic/1404112153/original.jpg?aki_policy=profile_small'
          },
          comments: 'Lovely venue',
          createdAt: '2018-10-07T13:58:03Z',
          id: '333471083',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Laura - BELVILLA',
            hasProfilePic: true,
            id: '122175936',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/fc8aad91-ff16-47ac-b29d-620ccfffcc86.jpg?aki_policy=profile_x_medium',
            smartName: 'Laura - BELVILLA',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/fc8aad91-ff16-47ac-b29d-620ccfffcc86.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'October 2018',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 16854,
          amountFormatted: '$16,854',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Holiday Home Exterior [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/151660fd-831a-4e64-af54-383349d4817f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/151660fd-831a-4e64-af54-383349d4817f.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Swimming Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/8fe9a315-cf81-4012-a870-d3f53e58b7bd.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/8fe9a315-cf81-4012-a870-d3f53e58b7bd.jpeg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/2fc3df0d-9648-422d-8f8c-5ff2d5ca66ba.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/2fc3df0d-9648-422d-8f8c-5ff2d5ca66ba.jpeg?aki_policy=small'
        },
        {
          caption: 'Kitchen',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/8780a213-a7de-4288-9242-34472ea3a2bd.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/8780a213-a7de-4288-9242-34472ea3a2bd.jpeg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/e1c432bc-fcfe-4da9-b2ea-dea0e0a012f8.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/e1c432bc-fcfe-4da9-b2ea-dea0e0a012f8.jpeg?aki_policy=small'
        },
        {
          caption: 'Garden [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/efcaefae-bf90-470e-8369-ddf7757fc02c.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/efcaefae-bf90-470e-8369-ddf7757fc02c.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/e6e53b3c-4581-43cb-bcd0-062973e86083.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/e6e53b3c-4581-43cb-bcd0-062973e86083.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/bb2462ad-6be8-4a3c-9a64-b7104c0fa646.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/bb2462ad-6be8-4a3c-9a64-b7104c0fa646.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/62f2b4a6-90e0-45db-99d5-1adb917f41e4.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/62f2b4a6-90e0-45db-99d5-1adb917f41e4.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/e0cef27f-e128-466d-a028-349473de574f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/e0cef27f-e128-466d-a028-349473de574f.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/dfbf8d5d-4970-406b-89a7-9406fc2f9dd1.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/dfbf8d5d-4970-406b-89a7-9406fc2f9dd1.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Swimming Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/ce7a574d-7513-4516-8049-43fe4230c24b.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/ce7a574d-7513-4516-8049-43fe4230c24b.jpeg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Swimming Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/9ea03a66-d483-4f34-9686-7da3eb8d59c0.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/9ea03a66-d483-4f34-9686-7da3eb8d59c0.jpeg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/f4eed41c-0a25-4c81-abf1-1b7e4c14d428.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/f4eed41c-0a25-4c81-abf1-1b7e4c14d428.jpeg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/4ce1f2e2-1a11-419d-8831-576df69f09a8.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/4ce1f2e2-1a11-419d-8831-576df69f09a8.jpeg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/2fc24384-f06c-4fde-80d2-a3b66040fb10.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/2fc24384-f06c-4fde-80d2-a3b66040fb10.jpeg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/a3336ae1-5eea-4712-9570-17c936f33469.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/a3336ae1-5eea-4712-9570-17c936f33469.jpeg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/2a66dbcb-76b2-4c29-8fb7-656e25cb6fc2.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/2a66dbcb-76b2-4c29-8fb7-656e25cb6fc2.jpeg?aki_policy=small'
        },
        {
          caption: 'Dining Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/c99e46d0-2dc5-4d1a-b29e-e9291275cce8.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/c99e46d0-2dc5-4d1a-b29e-e9291275cce8.jpeg?aki_policy=small'
        },
        {
          caption: 'Dining Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/dea20912-b25d-4b31-9108-1533cc299a1e.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/dea20912-b25d-4b31-9108-1533cc299a1e.jpeg?aki_policy=small'
        },
        {
          caption: 'Dining Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/53504679-0497-4dfb-90f9-34b797f4764a.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/53504679-0497-4dfb-90f9-34b797f4764a.jpeg?aki_policy=small'
        },
        {
          caption: 'Kitchen',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/d824c32a-29d6-4e8b-9adb-f49268f07bca.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/d824c32a-29d6-4e8b-9adb-f49268f07bca.jpeg?aki_policy=small'
        },
        {
          caption: 'Kitchen',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/ec31f7d6-e556-4dac-b965-e28076590582.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/ec31f7d6-e556-4dac-b965-e28076590582.jpeg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/c412d585-f10f-4484-966b-9c308d20ee90.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/c412d585-f10f-4484-966b-9c308d20ee90.jpeg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/4860145c-a789-4f49-86c7-4b1c32e4bf12.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/4860145c-a789-4f49-86c7-4b1c32e4bf12.jpeg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/763f953b-3772-440c-a0c1-dfbb44d48bb1.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/763f953b-3772-440c-a0c1-dfbb44d48bb1.jpeg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/2fcb331e-5f2c-4efe-a698-dea5421a28fe.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/2fcb331e-5f2c-4efe-a698-dea5421a28fe.jpeg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/3c8aafe3-2ca2-4edb-b45f-8a930ff3d2e1.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/3c8aafe3-2ca2-4edb-b45f-8a930ff3d2e1.jpeg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/66b0174a-0118-4745-b04d-1df6f8495ebb.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/66b0174a-0118-4745-b04d-1df6f8495ebb.jpeg?aki_policy=small'
        },
        {
          caption: 'Garden [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/e8a966ff-969d-4878-af26-5581d9be57a9.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/e8a966ff-969d-4878-af26-5581d9be57a9.jpeg?aki_policy=small'
        },
        {
          caption: 'Garden [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/ea984d91-61c1-4305-82b5-7f22190aa7a1.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/ea984d91-61c1-4305-82b5-7f22190aa7a1.jpeg?aki_policy=small'
        },
        {
          caption: 'View from Holiday Home [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/b1897dd3-ca19-454c-9217-dfab29244f61.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/b1897dd3-ca19-454c-9217-dfab29244f61.jpeg?aki_policy=small'
        },
        {
          caption: 'Immediate Surroundings [summer] (<1 km)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/9b89284b-c9cc-4c0b-8193-5a8a6cd0bb8e.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/9b89284b-c9cc-4c0b-8193-5a8a6cd0bb8e.jpeg?aki_policy=small'
        },
        {
          caption: 'Immediate Surroundings [summer] (<1 km)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/25e61d85-76be-41a0-9dac-7e8022a61a2f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/25e61d85-76be-41a0-9dac-7e8022a61a2f.jpeg?aki_policy=small'
        },
        {
          caption: 'Immediate Surroundings [summer] (<1 km)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/9644450c-a420-4a10-98ad-58083cb70907.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/9644450c-a420-4a10-98ad-58083cb70907.jpeg?aki_policy=small'
        },
        {
          caption: 'Immediate Surroundings [summer] (<1 km)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/14139673-b4f4-4a32-8bc4-484c45ef5687.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/14139673-b4f4-4a32-8bc4-484c45ef5687.jpeg?aki_policy=small'
        },
        {
          caption: 'Immediate Surroundings [summer] (<1 km)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/9aa1f929-c499-4cfb-9d4f-44f2fd324f02.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/9aa1f929-c499-4cfb-9d4f-44f2fd324f02.jpeg?aki_policy=small'
        },
        {
          caption: 'Surroundings [summer] (1-5 km)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/d710100e-6d7e-439d-b5dc-ba2e7aa06305.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/d710100e-6d7e-439d-b5dc-ba2e7aa06305.jpeg?aki_policy=small'
        },
        {
          caption: 'Surroundings [summer] (1-5 km)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/2a766302-1473-493d-91a5-1678abf7f916.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/2a766302-1473-493d-91a5-1678abf7f916.jpeg?aki_policy=small'
        },
        {
          caption: 'Region [summer] (>5 km)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/6f8b182d-9c1e-4dfe-9197-94d6b8925ab7.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-22761601/original/6f8b182d-9c1e-4dfe-9197-94d6b8925ab7.jpeg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 122175936,
        firstName: 'Laura - BELVILLA',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Laura - BELVILLA',
        about: 'Hi, I’m Laura. I’m part of the Belvilla Customer service team. My colleagues and I are looking forward to assist you when booking our properties on Airbnb. You can count on our support before, during and after your holiday. Any questions? Just let us know!\r\n\r\nBelvilla is a leading European specialist in the rental of unique, self-catering holiday homes and apartments. We bring more than 35 years of experience in satisfying our guests (you!) and helping them find the perfect holiday. When you stay in a Belvilla home, you can be sure you will enjoy a unique holiday home in ideal surroundings. We’re looking forward to welcoming you in a Belvilla and love to hear from you!',
        memberSince: 'Joined in March 2017',
        languages: [
          'Nederlands',
          'English',
          'Français',
          'Deutsch'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '1,182 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/122175936',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/fc8aad91-ff16-47ac-b29d-620ccfffcc86.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/fc8aad91-ff16-47ac-b29d-620ccfffcc86.jpg?aki_policy=profile_small'
      },
      additionalHosts: [
        {
          id: 305882972,
          firstName: 'Belvilla',
          isSuperHost: false,
          hasProfilePic: true,
          smartName: 'Belvilla',
          about: '',
          memberSince: 'Joined in November 2019',
          languages: [
            'Nederlands',
            'English',
            'Français',
            'Deutsch'
          ],
          hasInclusionBadge: false,
          badges: [],
          hostUrl: 'https://www.airbnb.com/users/show/305882972',
          pictureUrl: 'https://a0.muscache.com/im/pictures/user/013f2362-f502-4627-8934-a629b685e80c.jpg?aki_policy=profile_large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/013f2362-f502-4627-8934-a629b685e80c.jpg?aki_policy=profile_small'
        }
      ],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/5591147',
      name: 'CASA MALVA: A Nature experience 🍀',
      stars: 4.75,
      numberOfGuests: 3,
      address: 'Frigiliana, Málaga, Spain',
      roomType: 'Entire home',
      location: {
        lat: 36.81882,
        lng: -3.92262
      },
      reviews: [
        {
          author: {
            firstName: 'Diana',
            hasProfilePic: true,
            id: '1013161',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/a7dc605b-cfb6-4382-a607-f7b90840b634.jpg?aki_policy=profile_x_medium',
            smartName: 'Diana',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/a7dc605b-cfb6-4382-a607-f7b90840b634.jpg?aki_policy=profile_small'
          },
          comments: 'We really liked staying at Lidia’s house. It’s nice, cosy and Lidia is a great host. The location is pretty remote but reachable with normal sedan at day time. The property would benefit from WiFi as there is no other means of connection but it is available from a local bar.',
          createdAt: '2022-08-04T12:56:53Z',
          id: '686028866711108542',
          collectionTag: null,
          rating: 4,
          recipient: {
            firstName: 'Lidia',
            hasProfilePic: true,
            id: '23225420',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/eeb9cd8b-c7d2-406d-a7e1-0312d8b111c4.jpg?aki_policy=profile_x_medium',
            smartName: 'Lidia',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/eeb9cd8b-c7d2-406d-a7e1-0312d8b111c4.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'August 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Julie',
            hasProfilePic: true,
            id: '415308604',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/aaf16efa-1323-4634-b652-9a1a1d048f97.jpg?aki_policy=profile_x_medium',
            smartName: 'Julie',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/aaf16efa-1323-4634-b652-9a1a1d048f97.jpg?aki_policy=profile_small'
          },
          comments: 'We enjoyed our stay here, especially the location which was unique and surrounded by beautiful nature. Would like to come back! Good communication with host! Thank you, Lidia.',
          createdAt: '2022-04-09T13:39:13Z',
          id: '601251409206241262',
          collectionTag: null,
          rating: 4,
          recipient: {
            firstName: 'Lidia',
            hasProfilePic: true,
            id: '23225420',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/eeb9cd8b-c7d2-406d-a7e1-0312d8b111c4.jpg?aki_policy=profile_x_medium',
            smartName: 'Lidia',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/eeb9cd8b-c7d2-406d-a7e1-0312d8b111c4.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'April 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Raphael',
            hasProfilePic: true,
            id: '121910076',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/2ded9e9f-eec5-4428-b105-47aec38b7197.jpg?aki_policy=profile_x_medium',
            smartName: 'Raphael',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/2ded9e9f-eec5-4428-b105-47aec38b7197.jpg?aki_policy=profile_small'
          },
          comments: 'The house in the lost village is super cute and recommended for a unique stay. We had a great time cooking and hiking and taking some time away from our devices. The town is small with one or two bars (it seemed only one was open during our stay). We ate at the bar for lunch after a long hike and loved the soup and homemade bread which warmed us up after a wet walk. Be aware the roosters are rather noisy at day break and the house was a little cold at night but there are blankets, an oil heater and we bought fire wood to light in the fire place to keep warm. The terrace is great for catching some morning sun. Recommend to bring some cards or board games for some evening entertainment and to come prepared with food to cook as the kitchen at the bar closes at 4pm. The closest shop is about 15-20mins away in frigiliana where you can buy food and supplies. We had a lovely cosy stay and would love to come back in the summer to be able to use the pool after a hike.',
          createdAt: '2022-03-08T13:44:20Z',
          id: '578061158990329541',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Lidia',
            hasProfilePic: true,
            id: '23225420',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/eeb9cd8b-c7d2-406d-a7e1-0312d8b111c4.jpg?aki_policy=profile_x_medium',
            smartName: 'Lidia',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/eeb9cd8b-c7d2-406d-a7e1-0312d8b111c4.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'March 2022',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 24974,
          amountFormatted: '$24,974',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Salón ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/104819446/e1a0f0c7_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/104819446/e1a0f0c7_original.jpg?aki_policy=small'
        },
        {
          caption: 'Panorámica ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/104819473/5bb0f2fd_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/104819473/5bb0f2fd_original.jpg?aki_policy=small'
        },
        {
          caption: 'Cocina americana ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/70576806/7ebbae6b_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/70576806/7ebbae6b_original.jpg?aki_policy=small'
        },
        {
          caption: 'Detalle de la cocina',
          pictureUrl: 'https://a0.muscache.com/im/pictures/70576744/a6ca72dc_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/70576744/a6ca72dc_original.jpg?aki_policy=small'
        },
        {
          caption: 'Habitación principal ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/104819423/fa82d6e2_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/104819423/fa82d6e2_original.jpg?aki_policy=small'
        },
        {
          caption: 'Segundo dormitorio con salida a la terraza',
          pictureUrl: 'https://a0.muscache.com/im/pictures/70576847/7741fba6_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/70576847/7741fba6_original.jpg?aki_policy=small'
        },
        {
          caption: 'A room with a view ;)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/70775856/2d477969_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/70775856/2d477969_original.jpg?aki_policy=small'
        },
        {
          caption: 'Baño con ventana',
          pictureUrl: 'https://a0.muscache.com/im/pictures/69607378/c11af739_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/69607378/c11af739_original.jpg?aki_policy=small'
        },
        {
          caption: 'Bonito baño',
          pictureUrl: 'https://a0.muscache.com/im/pictures/69607403/792feaad_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/69607403/792feaad_original.jpg?aki_policy=small'
        },
        {
          caption: 'Terracita con vistas a la montaña',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b42f2547-ae0c-44a0-9ede-242aa31437f6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b42f2547-ae0c-44a0-9ede-242aa31437f6.jpg?aki_policy=small'
        },
        {
          caption: 'Puerta de la casa',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b3a8bb84-c051-4db8-94fb-4766ee371661.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b3a8bb84-c051-4db8-94fb-4766ee371661.jpg?aki_policy=small'
        },
        {
          caption: 'Entrada ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/56bfdff6-5f05-4482-9446-e47153ff6bcf.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/56bfdff6-5f05-4482-9446-e47153ff6bcf.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/db665445-a99b-4e20-b29e-2db4ec157b66.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/db665445-a99b-4e20-b29e-2db4ec157b66.jpg?aki_policy=small'
        },
        {
          caption: 'Perspectiva desde el camino ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/70775826/bbe437e1_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/70775826/bbe437e1_original.jpg?aki_policy=small'
        },
        {
          caption: 'Cartel que indica que ya llegamos... :)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/80853558/2671de54_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/80853558/2671de54_original.jpg?aki_policy=small'
        },
        {
          caption: 'Más detalles de la aldeíta',
          pictureUrl: 'https://a0.muscache.com/im/pictures/69606691/a49a69b2_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/69606691/a49a69b2_original.jpg?aki_policy=small'
        },
        {
          caption: 'Detalles en las calles de la aldea',
          pictureUrl: 'https://a0.muscache.com/im/pictures/69606711/4a117b02_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/69606711/4a117b02_original.jpg?aki_policy=small'
        },
        {
          caption: 'Calle que conduce a la casa',
          pictureUrl: 'https://a0.muscache.com/im/pictures/104820908/d22a0da5_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/104820908/d22a0da5_original.jpg?aki_policy=small'
        },
        {
          caption: 'Uno de los pintorescos rincones',
          pictureUrl: 'https://a0.muscache.com/im/pictures/69606636/d4416d42_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/69606636/d4416d42_original.jpg?aki_policy=small'
        },
        {
          caption: 'Anochece en El Acebuchal...',
          pictureUrl: 'https://a0.muscache.com/im/pictures/104820939/93a038b7_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/104820939/93a038b7_original.jpg?aki_policy=small'
        },
        {
          caption: 'El Acebuchal de noche',
          pictureUrl: 'https://a0.muscache.com/im/pictures/70777649/fdc5cb7b_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/70777649/fdc5cb7b_original.jpg?aki_policy=small'
        },
        {
          caption: 'Puertas de colores en la aldea',
          pictureUrl: 'https://a0.muscache.com/im/pictures/104821025/27926de0_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/104821025/27926de0_original.jpg?aki_policy=small'
        },
        {
          caption: 'Uno de los itinerarios para hacer senderismo ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/80853865/e1368d4f_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/80853865/e1368d4f_original.jpg?aki_policy=small'
        },
        {
          caption: 'Limoneros de la zona',
          pictureUrl: 'https://a0.muscache.com/im/pictures/80853426/9dc2beab_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/80853426/9dc2beab_original.jpg?aki_policy=small'
        },
        {
          caption: 'Calas cercanas',
          pictureUrl: 'https://a0.muscache.com/im/pictures/80853450/8f48eff6_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/80853450/8f48eff6_original.jpg?aki_policy=small'
        },
        {
          caption: 'Acantilados de Maro, a 9 kms',
          pictureUrl: 'https://a0.muscache.com/im/pictures/80853493/9e51f6c7_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/80853493/9e51f6c7_original.jpg?aki_policy=small'
        },
        {
          caption: 'Balcón de Europa, en Nerja',
          pictureUrl: 'https://a0.muscache.com/im/pictures/80853593/b44a8e68_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/80853593/b44a8e68_original.jpg?aki_policy=small'
        },
        {
          caption: 'Playa de Torre del Mar, con chiringuitos y espetos de sardinas :)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/83853383/3d862c2b_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/83853383/3d862c2b_original.jpg?aki_policy=small'
        },
        {
          caption: 'Cala del Pino',
          pictureUrl: 'https://a0.muscache.com/im/pictures/80853608/2439a9b2_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/80853608/2439a9b2_original.jpg?aki_policy=small'
        },
        {
          caption: 'Playa de Maro',
          pictureUrl: 'https://a0.muscache.com/im/pictures/80853796/a9c5d5d5_original.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/80853796/a9c5d5d5_original.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 23225420,
        firstName: 'Lidia',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Lidia',
        about: '¡Hola! Soy Lidia. Me gusta la gente, la Naturaleza, la meditación, conocer otras culturas y escribir. Pronto publicaré mi primera novela! \n\nTambién me encantan los viajes: he vivido en Boston, NY, Buenos Aires, Maracaibo y Múnich. De regreso a España, siempre necesito ir al Sur, a Andalucía, para desconectar del mundo y conectar conmigo misma.\n\nEntiendo esta casa, en esta increíble zona, como un centro de bienestar interior, sin lujos, una vuelta al origen donde las personas que lleguen se sientan relajados, tranquilos y felices. Sin más. Ni menos. :) \n\nY bueno, es un gran regalo de la vida difrutar de esas millones de estrellas en las noches del Acebuchal. ¡Se ven increíble! \n\nUna cita que resume mi filosofía de vida: \n\n"I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived." (Thoreau) \n',
        memberSince: 'Joined in November 2014',
        languages: [
          'English',
          'Español'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '498 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/23225420',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/eeb9cd8b-c7d2-406d-a7e1-0312d8b111c4.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/eeb9cd8b-c7d2-406d-a7e1-0312d8b111c4.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/39602698',
      name: "Edificio C'an Patilla, 1º A",
      stars: null,
      numberOfGuests: 4,
      address: 'Cala Agulla, Illes Balears, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 39.71712,
        lng: 3.45925
      },
      reviews: [],
      pricing: {
        rate: {
          amount: 15841,
          amountFormatted: '$15,841',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Sala de estar y comedor',
          pictureUrl: 'https://a0.muscache.com/im/pictures/16768903-0950-458d-bfc1-22fd819f1b29.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/16768903-0950-458d-bfc1-22fd819f1b29.jpg?aki_policy=small'
        },
        {
          caption: "Edificio C'an Patilla",
          pictureUrl: 'https://a0.muscache.com/im/pictures/9a8f506e-6b46-4384-9e5d-6ead33a92962.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9a8f506e-6b46-4384-9e5d-6ead33a92962.jpg?aki_policy=small'
        },
        {
          caption: 'Entrada principal ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/849174e7-bc1b-4134-8c53-b22b59f341bd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/849174e7-bc1b-4134-8c53-b22b59f341bd.jpg?aki_policy=small'
        },
        {
          caption: 'Sala de estar y comedor',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8e0ff407-3bfd-4b4f-9261-3b09ea34de84.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8e0ff407-3bfd-4b4f-9261-3b09ea34de84.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/027aee69-8b06-4134-8708-6191f19315ac.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/027aee69-8b06-4134-8708-6191f19315ac.jpg?aki_policy=small'
        },
        {
          caption: 'Cocina',
          pictureUrl: 'https://a0.muscache.com/im/pictures/444e6e0e-f845-47e8-933e-18d2d3d7b355.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/444e6e0e-f845-47e8-933e-18d2d3d7b355.jpg?aki_policy=small'
        },
        {
          caption: 'Baño',
          pictureUrl: 'https://a0.muscache.com/im/pictures/05977ac8-3a76-4ea9-9de6-8619e0da0e1d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/05977ac8-3a76-4ea9-9de6-8619e0da0e1d.jpg?aki_policy=small'
        },
        {
          caption: 'Baño',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5cda16a4-e5af-49a2-8690-6cd4fd6ce323.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5cda16a4-e5af-49a2-8690-6cd4fd6ce323.jpg?aki_policy=small'
        },
        {
          caption: 'Playa de Cala Agulla',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4af1a7b1-5dae-46e2-b18a-02a09c17de7d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4af1a7b1-5dae-46e2-b18a-02a09c17de7d.jpg?aki_policy=small'
        },
        {
          caption: 'Playa de Cala Gat',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3f215fc9-7427-4420-a510-41a51aa195da.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3f215fc9-7427-4420-a510-41a51aa195da.jpg?aki_policy=small'
        },
        {
          caption: 'Playa Font de Sa Cala',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cff14c10-f651-434a-94f9-2de233f7e035.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cff14c10-f651-434a-94f9-2de233f7e035.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 53123809,
        firstName: 'Joan',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Joan',
        about: '',
        memberSince: 'Joined in January 2016',
        languages: [],
        hasInclusionBadge: false,
        badges: [
          '1 Review',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/53123809',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/0bc49265-9708-46a1-b8f2-000790b64ad2.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/0bc49265-9708-46a1-b8f2-000790b64ad2.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/33744225',
      name: 'Royal Apartament-200m From Beach- Wifi',
      stars: 4.73,
      numberOfGuests: 2,
      address: 'Tossa de Mar, Catalunya, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 41.72287,
        lng: 2.93202
      },
      reviews: [
        {
          author: {
            firstName: 'Gary',
            hasProfilePic: true,
            id: '333175872',
            pictureUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3',
            smartName: 'Gary',
            thumbnailUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3'
          },
          comments: 'All good. Very clean , complete with all ameneties for the kitchen.<br/> Also included some basic supplies which is great if you arrive late .<br/> Very close to a supermarket. Dont worry about the location unless you actually want sea front as you can get anywhere in a 5 minutes walk in Tossa. WIFI works well as does the heating ( I came end of November )',
          createdAt: '2022-11-24T14:28:22Z',
          id: '767249794964667005',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Toni',
            hasProfilePic: true,
            id: '254364346',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/9af44280-2113-41f8-b8fb-9d4f6fbad33a.jpg?aki_policy=profile_x_medium',
            smartName: 'Toni',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9af44280-2113-41f8-b8fb-9d4f6fbad33a.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'November 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Melissa',
            hasProfilePic: true,
            id: '377180741',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/35695dd0-9deb-491e-ae50-564bcd838512.jpg?aki_policy=profile_x_medium',
            smartName: 'Melissa',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/35695dd0-9deb-491e-ae50-564bcd838512.jpg?aki_policy=profile_small'
          },
          comments: 'aweome place and awesome location. nicer than nay hotel in Tossa',
          createdAt: '2022-09-25T11:27:46Z',
          id: '723672350399201747',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Toni',
            hasProfilePic: true,
            id: '254364346',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/9af44280-2113-41f8-b8fb-9d4f6fbad33a.jpg?aki_policy=profile_x_medium',
            smartName: 'Toni',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9af44280-2113-41f8-b8fb-9d4f6fbad33a.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'September 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Sven',
            hasProfilePic: true,
            id: '22974545',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/2aed1311-43b7-4f75-8df2-b9f8426ee82d.jpg?aki_policy=profile_x_medium',
            smartName: 'Sven',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/2aed1311-43b7-4f75-8df2-b9f8426ee82d.jpg?aki_policy=profile_small'
          },
          comments: 'We really enjoyed our stay! The apartment is located right in the middle of Tossa, so the beach is only three minutes away. Toni is very friendly. Check-In and Check-Out was easy. The apartment is well equipped. The fridge is really big and you can cook without a problem. The WiFi via a mobile SIM-Router also worked properly. The visible shower curtain shown in the picture got recently updated to a more static door. There are only two things we would like to mention: Yes, there are free parking spots around the apartment, but it is nearly impossible to gather a spot. If you do not want to pay a parking fee on a private parking space (min 7€/day), you have to circle the streets of Tossa for a free parking space. To be fair: Toni is not responsible for the parking issue in Tossa in the high season. <br/>Second point: The air condition is installed in the living room and not on the bedroom. After a while the cold air also reaches the bedroom, because the apartment is not that big - but you have "anticipate" it.',
          createdAt: '2022-07-17T12:43:39Z',
          id: '672976244243322488',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Toni',
            hasProfilePic: true,
            id: '254364346',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/9af44280-2113-41f8-b8fb-9d4f6fbad33a.jpg?aki_policy=profile_x_medium',
            smartName: 'Toni',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9af44280-2113-41f8-b8fb-9d4f6fbad33a.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'July 2022',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 22716,
          amountFormatted: '$22,716',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a7493e87-a19b-4936-92fe-de6af79d0dfa.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a7493e87-a19b-4936-92fe-de6af79d0dfa.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/57e9e6c0-ae1c-4b8e-a276-eee9dfa532ca.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/57e9e6c0-ae1c-4b8e-a276-eee9dfa532ca.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fe18fa04-3965-4599-9ff5-d5573a008911.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fe18fa04-3965-4599-9ff5-d5573a008911.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b9d93154-ce4b-43e1-a2c5-732e035ff292.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b9d93154-ce4b-43e1-a2c5-732e035ff292.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3cbe53c6-53ff-4311-a7c2-46970518b175.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3cbe53c6-53ff-4311-a7c2-46970518b175.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/32e41cdb-c7bf-4f50-b0d7-183398d9bc53.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/32e41cdb-c7bf-4f50-b0d7-183398d9bc53.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/364c5e89-f496-4158-8180-418d137744b6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/364c5e89-f496-4158-8180-418d137744b6.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/54f27050-717e-429f-b32c-c786a803aa2a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/54f27050-717e-429f-b32c-c786a803aa2a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/abed1917-7219-4170-821b-7639e0bd2fbe.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/abed1917-7219-4170-821b-7639e0bd2fbe.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ba465fe7-1f7e-406a-b124-ad4c51dcaefe.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ba465fe7-1f7e-406a-b124-ad4c51dcaefe.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6851869e-6f73-4eec-9e44-a6a59dcc0471.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6851869e-6f73-4eec-9e44-a6a59dcc0471.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1ec66ff6-0c2a-4b03-a342-fa80c9d302af.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1ec66ff6-0c2a-4b03-a342-fa80c9d302af.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3ce87769-834e-4c3e-880b-9ebf11ab63db.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3ce87769-834e-4c3e-880b-9ebf11ab63db.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1ca134c3-e1c2-4daf-959d-641cc6f7c112.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1ca134c3-e1c2-4daf-959d-641cc6f7c112.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/61479113-2b2f-44cb-8734-75ba3620093e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/61479113-2b2f-44cb-8734-75ba3620093e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c4af1c3d-fcda-4ce9-9e24-bad7ad347992.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c4af1c3d-fcda-4ce9-9e24-bad7ad347992.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2d866099-a0cb-443f-92ad-62c949926111.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2d866099-a0cb-443f-92ad-62c949926111.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/43653b31-671f-4eb8-b4fe-05d2fdcb3136.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/43653b31-671f-4eb8-b4fe-05d2fdcb3136.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/663ce08c-e6b0-48f3-907f-49577db65ed4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/663ce08c-e6b0-48f3-907f-49577db65ed4.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/804b7c15-26dd-47ee-9fc7-e55c1bd96bc5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/804b7c15-26dd-47ee-9fc7-e55c1bd96bc5.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/138eb332-95bc-4a27-9d5a-861c9376df1c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/138eb332-95bc-4a27-9d5a-861c9376df1c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a0962bb2-d303-4d04-bf2b-0b5a9bbd3989.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a0962bb2-d303-4d04-bf2b-0b5a9bbd3989.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b5e00c84-715c-4ab6-927b-e63ed93d542b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b5e00c84-715c-4ab6-927b-e63ed93d542b.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5e92cbfb-ee2f-4e67-ac57-7487235be688.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5e92cbfb-ee2f-4e67-ac57-7487235be688.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/730991e7-6b9b-4b16-be51-ac0b8e698ce5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/730991e7-6b9b-4b16-be51-ac0b8e698ce5.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a31dd2f1-22b8-4b91-b0fd-efe6e353758c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a31dd2f1-22b8-4b91-b0fd-efe6e353758c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/01a86c58-5f6b-4d2a-9664-69cf9344e6e8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/01a86c58-5f6b-4d2a-9664-69cf9344e6e8.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c2e94ca1-f3a8-4821-a61b-4c052e2f2cfc.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c2e94ca1-f3a8-4821-a61b-4c052e2f2cfc.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 254364346,
        firstName: 'Toni',
        isSuperHost: true,
        hasProfilePic: true,
        smartName: 'Toni',
        about: 'Hola soy Toni,Soy una persona seria, humilde y que disfruta de las cosas sencillas de la vida. Me encanta el lugar donde vivo y su entorno. Y me gusta tratar bien a las personas que me rodean. Como anfitrión, mi objetivo es que todos mis huéspedes se sientan bien y pasen unos días de vacaciones inolvidables en nuestro apartamento y en Tossa de Mar. Me gusta mucho viajar y compartir experiencias con  los demás.\r\nSoy muy activo y me gusta mucho el deporte, sobre todo el ciclismo, deporte que practico con asiduidad . ',
        memberSince: 'Joined in April 2019',
        languages: [
          'Español'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '56 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/254364346',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/9af44280-2113-41f8-b8fb-9d4f6fbad33a.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9af44280-2113-41f8-b8fb-9d4f6fbad33a.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: true
    },
    {
      url: 'https://www.airbnb.com/rooms/31969327',
      name: 'La Portenya',
      stars: null,
      numberOfGuests: 8,
      address: 'Calonge, Catalunya, Spain',
      roomType: 'Entire villa',
      location: {
        lat: 41.86232,
        lng: 3.07854
      },
      reviews: [],
      pricing: {
        rate: {
          amount: 21121,
          amountFormatted: '$21,121',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'La Portenya - 1',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5a798700-2879-4ada-ada8-c14e52c9c6e7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5a798700-2879-4ada-ada8-c14e52c9c6e7.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 2',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6003fc16-ba07-44b1-b12d-7588636a1080.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6003fc16-ba07-44b1-b12d-7588636a1080.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 3',
          pictureUrl: 'https://a0.muscache.com/im/pictures/74577101-c3c0-4250-873c-c728abe9a01f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/74577101-c3c0-4250-873c-c728abe9a01f.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 4',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f2a6095b-274c-43c1-a7ce-ce2fd7b77011.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f2a6095b-274c-43c1-a7ce-ce2fd7b77011.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 5',
          pictureUrl: 'https://a0.muscache.com/im/pictures/401e0dd2-9163-4a8a-b7dd-e764ada5adf3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/401e0dd2-9163-4a8a-b7dd-e764ada5adf3.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 6',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8f39abc5-eb25-4a7e-9b57-b84599ab1892.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8f39abc5-eb25-4a7e-9b57-b84599ab1892.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 7',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a999db72-e8a6-4743-a2bb-6aa728c3c72b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a999db72-e8a6-4743-a2bb-6aa728c3c72b.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 8',
          pictureUrl: 'https://a0.muscache.com/im/pictures/553bb16a-f423-43d9-91e9-f24f1db4a8ba.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/553bb16a-f423-43d9-91e9-f24f1db4a8ba.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 9',
          pictureUrl: 'https://a0.muscache.com/im/pictures/44be674e-bd5a-4f3d-a77c-f76fcc927693.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/44be674e-bd5a-4f3d-a77c-f76fcc927693.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 10',
          pictureUrl: 'https://a0.muscache.com/im/pictures/20fc61df-6451-4f2d-9e45-ac806cc40764.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/20fc61df-6451-4f2d-9e45-ac806cc40764.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 11',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c22e754b-3736-45ef-82a3-a331b9e9e07a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c22e754b-3736-45ef-82a3-a331b9e9e07a.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 12',
          pictureUrl: 'https://a0.muscache.com/im/pictures/45b9670c-dc3a-477f-b1f9-bb46a44ee830.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/45b9670c-dc3a-477f-b1f9-bb46a44ee830.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 13',
          pictureUrl: 'https://a0.muscache.com/im/pictures/05abbe2a-e931-41de-a98a-dc448a89bc0c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/05abbe2a-e931-41de-a98a-dc448a89bc0c.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 14',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f78672a8-96d7-4e1c-9185-9c343cfb3f6f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f78672a8-96d7-4e1c-9185-9c343cfb3f6f.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 15',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8dfdf981-8381-4d7e-a800-46b2a2fd5e6b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8dfdf981-8381-4d7e-a800-46b2a2fd5e6b.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 16',
          pictureUrl: 'https://a0.muscache.com/im/pictures/815bc917-16fd-4c52-abf6-737676571456.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/815bc917-16fd-4c52-abf6-737676571456.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 17',
          pictureUrl: 'https://a0.muscache.com/im/pictures/286a7228-7eb6-4c7e-b19f-522dfa2c9bd9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/286a7228-7eb6-4c7e-b19f-522dfa2c9bd9.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 18',
          pictureUrl: 'https://a0.muscache.com/im/pictures/dd9ca718-6224-44fb-ad4e-9886725e1ba4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/dd9ca718-6224-44fb-ad4e-9886725e1ba4.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 19',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e6055b4e-feee-4ac6-bacc-92c2700db6bf.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e6055b4e-feee-4ac6-bacc-92c2700db6bf.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 20',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7d55ed29-ce5a-47ed-aac9-886d06d3a4d6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7d55ed29-ce5a-47ed-aac9-886d06d3a4d6.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 21',
          pictureUrl: 'https://a0.muscache.com/im/pictures/698c80d3-308e-4ff6-8b75-0fb63e2d6499.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/698c80d3-308e-4ff6-8b75-0fb63e2d6499.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 22',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0d6dfd34-75a5-481f-bf1d-ec947aae5d92.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0d6dfd34-75a5-481f-bf1d-ec947aae5d92.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 23',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c4528675-92a6-43e8-a90b-0851e1060649.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c4528675-92a6-43e8-a90b-0851e1060649.jpg?aki_policy=small'
        },
        {
          caption: 'La Portenya - 24',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c3d3bbbb-6e7d-440d-a2c5-334c5f763845.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c3d3bbbb-6e7d-440d-a2c5-334c5f763845.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 129837136,
        firstName: 'Quality Estates',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Quality Estates',
        about: '',
        memberSince: 'Joined in May 2017',
        languages: [],
        responseRate: '64%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '77 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/129837136',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/4d818115-5375-49c4-83e9-b1f1db7ec064.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/4d818115-5375-49c4-83e9-b1f1db7ec064.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/21105114',
      name: 'Modern Mansion in Marratxí with Private Swimming Pool',
      stars: null,
      numberOfGuests: 6,
      address: 'Marratxi, Spain',
      roomType: 'Entire home',
      location: {
        lat: 39.644,
        lng: 2.757
      },
      reviews: [],
      pricing: {
        rate: {
          amount: 17741,
          amountFormatted: '$17,741',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Holiday Home Exterior (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/874eac2a-2a24-4e6e-bf0f-463901650176.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/874eac2a-2a24-4e6e-bf0f-463901650176.jpg?aki_policy=small'
        },
        {
          caption: 'Garden (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d22cd2cb-59ea-490d-b84a-c741b7571efe.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d22cd2cb-59ea-490d-b84a-c741b7571efe.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Swimming Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c3be6ac8-b25a-40b8-8f65-1b75f00e3817.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c3be6ac8-b25a-40b8-8f65-1b75f00e3817.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/011b89d9-f35b-4083-aa50-4ebfd4434d01.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/011b89d9-f35b-4083-aa50-4ebfd4434d01.jpg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/872cf458-dc0e-438f-9e0c-7b07b88c71d1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/872cf458-dc0e-438f-9e0c-7b07b88c71d1.jpg?aki_policy=small'
        },
        {
          caption: 'Recreation Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/674e4e8b-7842-4a5f-abd6-287876bbebe0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/674e4e8b-7842-4a5f-abd6-287876bbebe0.jpg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1d187f0c-3f10-4a5d-980d-e69ac10e6260.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1d187f0c-3f10-4a5d-980d-e69ac10e6260.jpg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/54a9ef85-aa7d-418f-b4c2-4620f817c3f2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/54a9ef85-aa7d-418f-b4c2-4620f817c3f2.jpg?aki_policy=small'
        },
        {
          caption: 'Dining Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/36787692-4a69-4c38-9548-a7d964feb23f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/36787692-4a69-4c38-9548-a7d964feb23f.jpg?aki_policy=small'
        },
        {
          caption: 'Kitchen',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4e76e28e-ed72-4646-8895-591e354dfca0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4e76e28e-ed72-4646-8895-591e354dfca0.jpg?aki_policy=small'
        },
        {
          caption: 'Entrance / Reception',
          pictureUrl: 'https://a0.muscache.com/im/pictures/df83e575-ce89-42e2-8307-af8fb3abfb02.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/df83e575-ce89-42e2-8307-af8fb3abfb02.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a04b2293-943b-4aca-b22f-0a57c33f0a94.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a04b2293-943b-4aca-b22f-0a57c33f0a94.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2925a0c2-9a6e-490a-bdbb-e554993f72a2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2925a0c2-9a6e-490a-bdbb-e554993f72a2.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3938a0a0-e69d-4fc2-a05d-b83abc040e1d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3938a0a0-e69d-4fc2-a05d-b83abc040e1d.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5a08ad8a-49c5-4235-8f0c-0e9026063f6b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5a08ad8a-49c5-4235-8f0c-0e9026063f6b.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/944bb529-b6f2-4258-ba38-9a824ef08b88.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/944bb529-b6f2-4258-ba38-9a824ef08b88.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ae107746-00f0-46f7-93af-b9df9aed49b5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ae107746-00f0-46f7-93af-b9df9aed49b5.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3253ae44-6dc7-4e60-8c73-9b9e23e4d8bb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3253ae44-6dc7-4e60-8c73-9b9e23e4d8bb.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d02a3929-dc3f-4c49-9d83-b1d26ad42bea.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d02a3929-dc3f-4c49-9d83-b1d26ad42bea.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6a78140c-48d7-4052-8148-6087b5bbf8d9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6a78140c-48d7-4052-8148-6087b5bbf8d9.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6838feb5-1013-4adb-934e-1c8f22a339fd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6838feb5-1013-4adb-934e-1c8f22a339fd.jpg?aki_policy=small'
        },
        {
          caption: 'Patio / Balcony',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d068e33a-4606-46a5-9aa0-13232ff6f226.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d068e33a-4606-46a5-9aa0-13232ff6f226.jpg?aki_policy=small'
        },
        {
          caption: 'View from Holiday Home (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f36d49a7-905f-41c8-90c6-e7f7e25cdbde.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f36d49a7-905f-41c8-90c6-e7f7e25cdbde.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/86778307-bbdd-4c5f-ac01-4ece44cf89b9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/86778307-bbdd-4c5f-ac01-4ece44cf89b9.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 122175936,
        firstName: 'Laura - BELVILLA',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Laura - BELVILLA',
        about: 'Hi, I’m Laura. I’m part of the Belvilla Customer service team. My colleagues and I are looking forward to assist you when booking our properties on Airbnb. You can count on our support before, during and after your holiday. Any questions? Just let us know!\r\n\r\nBelvilla is a leading European specialist in the rental of unique, self-catering holiday homes and apartments. We bring more than 35 years of experience in satisfying our guests (you!) and helping them find the perfect holiday. When you stay in a Belvilla home, you can be sure you will enjoy a unique holiday home in ideal surroundings. We’re looking forward to welcoming you in a Belvilla and love to hear from you!',
        memberSince: 'Joined in March 2017',
        languages: [
          'Nederlands',
          'English',
          'Français',
          'Deutsch'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '1,182 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/122175936',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/fc8aad91-ff16-47ac-b29d-620ccfffcc86.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/fc8aad91-ff16-47ac-b29d-620ccfffcc86.jpg?aki_policy=profile_small'
      },
      additionalHosts: [
        {
          id: 305882972,
          firstName: 'Belvilla',
          isSuperHost: false,
          hasProfilePic: true,
          smartName: 'Belvilla',
          about: '',
          memberSince: 'Joined in November 2019',
          languages: [
            'Nederlands',
            'English',
            'Français',
            'Deutsch'
          ],
          hasInclusionBadge: false,
          badges: [],
          hostUrl: 'https://www.airbnb.com/users/show/305882972',
          pictureUrl: 'https://a0.muscache.com/im/pictures/user/013f2362-f502-4627-8934-a629b685e80c.jpg?aki_policy=profile_large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/013f2362-f502-4627-8934-a629b685e80c.jpg?aki_policy=profile_small'
        }
      ],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/53915919',
      name: '3 Bedroom Villa, Private Pool, Binibeca',
      stars: null,
      numberOfGuests: 6,
      address: 'Binibequer, Illes Balears, Spain',
      roomType: 'Entire villa',
      location: {
        lat: 39.81905,
        lng: 4.24121
      },
      reviews: [],
      pricing: {
        rate: {
          amount: 24608,
          amountFormatted: '$24,608',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/43211bb1-20f5-4e0c-b026-ae16444b4500.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/43211bb1-20f5-4e0c-b026-ae16444b4500.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/db32b37a-f1d4-40a7-8b46-46662d737d53.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/db32b37a-f1d4-40a7-8b46-46662d737d53.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/58c0b595-4d95-40a4-8db2-06133fc1a33c.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/58c0b595-4d95-40a4-8db2-06133fc1a33c.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/d6725c63-2477-49a0-bbd0-f761cb747062.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/d6725c63-2477-49a0-bbd0-f761cb747062.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/000fc9f7-237b-47fd-aa9f-f234f277a712.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/000fc9f7-237b-47fd-aa9f-f234f277a712.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/9344cf8f-c5c5-440a-ac7b-48c083667029.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/9344cf8f-c5c5-440a-ac7b-48c083667029.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/06f65998-2616-4e25-b991-67124b091b73.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/06f65998-2616-4e25-b991-67124b091b73.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/8a1d0e50-ae37-475a-b470-9a97a98265c8.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/8a1d0e50-ae37-475a-b470-9a97a98265c8.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/48b13b66-8cdd-4ca4-ae6a-72dd146067bc.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/48b13b66-8cdd-4ca4-ae6a-72dd146067bc.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/bdfb9c1a-0bff-4c62-ad92-0c2b0e9dbbe5.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/bdfb9c1a-0bff-4c62-ad92-0c2b0e9dbbe5.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/82da73f5-b808-4861-a26f-287466b17420.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/82da73f5-b808-4861-a26f-287466b17420.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/7e3eab67-c1f0-4a17-acb5-b55061d5887c.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/7e3eab67-c1f0-4a17-acb5-b55061d5887c.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/01b7996d-0577-4959-99e0-2310485ceb60.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/01b7996d-0577-4959-99e0-2310485ceb60.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/16497843-1b55-438b-adfb-b7b819f91c93.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/16497843-1b55-438b-adfb-b7b819f91c93.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/e2aa9514-827c-48df-81e9-544ae85db5c3.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/e2aa9514-827c-48df-81e9-544ae85db5c3.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/f741e513-8915-44cf-9b46-8856bffdb3ca.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/f741e513-8915-44cf-9b46-8856bffdb3ca.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/a3f3e1ea-1949-41c7-a4da-0304f4ca909e.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/a3f3e1ea-1949-41c7-a4da-0304f4ca909e.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/85c42944-f6c7-430b-aab7-c7d05cc458bf.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/85c42944-f6c7-430b-aab7-c7d05cc458bf.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/c120f86f-5dc6-4a5e-9d5f-f2de6e4e4ca2.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/c120f86f-5dc6-4a5e-9d5f-f2de6e4e4ca2.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/126d951d-2bf2-4d1e-957c-01471c2a68ea.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/126d951d-2bf2-4d1e-957c-01471c2a68ea.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/277870f4-df69-4544-8db3-779f1bcd3556.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/277870f4-df69-4544-8db3-779f1bcd3556.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/974728ec-7426-4b38-a1aa-67b1933ae61e.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/974728ec-7426-4b38-a1aa-67b1933ae61e.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/45e6e531-59a2-4834-a2b2-fe3d26af5814.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/45e6e531-59a2-4834-a2b2-fe3d26af5814.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/1ef6a5d7-af09-4942-ba05-331f1f57b115.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/1ef6a5d7-af09-4942-ba05-331f1f57b115.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/c4f2198f-7074-4744-a4ed-cef181200388.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/c4f2198f-7074-4744-a4ed-cef181200388.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/676f1f8f-3b1b-482e-a35f-3b773bf1588c.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53915919/original/676f1f8f-3b1b-482e-a35f-3b773bf1588c.jpeg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 105815786,
        firstName: 'Villas',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Villas',
        about: 'Villas Away are a dynamic villa and apartment holiday specialist with a wide variety of quality villas and apartments in your favourite holiday destinations such as Spain and her islands, France, Portugal, Turkey, Florida, Mauritius and many more.  With so much to offer, we are confident that we will find the right villa or apartment for your perfect holiday. \n \nWith our 25 years experience our knowledge worldwide means you can relax from the moment you choose one of our properties and we will do the rest for you.  The Villas Away team will look after you before, during and after your holiday.  You can book with confidence as our properties are verified by us for your peace of mind.\n   \nAt Villas Away we are committed to matching you with the best possible holiday villa or apartment to matches your needs. Whether its a coastline location with views over the tranquil Mediterranean or a more peaceful countryside location we have the ability to make your holiday dreams come true.\n',
        memberSince: 'Joined in December 2016',
        languages: [],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '238 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/105815786',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/be2a5322-a367-44c3-be49-e69306f457a2.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/be2a5322-a367-44c3-be49-e69306f457a2.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/39076391',
      name: 'Modern Villa in Priego de Córdoba with Private Pool',
      stars: null,
      numberOfGuests: 8,
      address: 'Priego de Córdoba, Spain',
      roomType: 'Entire villa',
      location: {
        lat: 37.46707,
        lng: -4.21829
      },
      reviews: [
        {
          author: {
            firstName: 'Rocio',
            hasProfilePic: true,
            id: '61797372',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/1fcb5853-b80b-45d3-9668-0cf062bb7173.jpg?aki_policy=profile_x_medium',
            smartName: 'Rocio',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/1fcb5853-b80b-45d3-9668-0cf062bb7173.jpg?aki_policy=profile_small'
          },
          comments: 'La casa es tal cual se muestra en las fotos, una casa preciosa, limpia,m y acogedora. El dueño un hombre fantástico, ser más amable y servicial es imposible, hemos estado como en casa, nos ha tratado como a reyes. Sin duda recomendaremos este alojamiento y si podemos volveremos con los ojos cerrados. Muchas gracias por todo',
          createdAt: '2019-12-09T15:28:19Z',
          id: '575152981',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Lisa - BELVILLA',
            hasProfilePic: true,
            id: '109955734',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/0985dba5-c853-43e7-95cc-30d241f73c66.jpg?aki_policy=profile_x_medium',
            smartName: 'Lisa - BELVILLA',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/0985dba5-c853-43e7-95cc-30d241f73c66.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'December 2019',
          localizedReview: {
            comments: 'The house is as shown in the photos, a beautiful house, clean,m and cozy. The owner is a fantastic man, being more friendly and helpful is impossible, we have felt at home, he has treated us like royalty. We will definitely recommend this place and if we can we will come back with our eyes closed. Thank you so much for everything',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 17741,
          amountFormatted: '$17,741',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Holiday Home Exterior [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/180c342b-5d98-4c14-83da-f830ed2977e9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/180c342b-5d98-4c14-83da-f830ed2977e9.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/dfbde19c-e453-4d1a-aa4b-39431e5ff235.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/dfbde19c-e453-4d1a-aa4b-39431e5ff235.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/97c12358-ced9-4289-b4c2-3d425152ccfd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/97c12358-ced9-4289-b4c2-3d425152ccfd.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ee8ae03d-277d-4fde-b35c-ec7f6fc9a0ba.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ee8ae03d-277d-4fde-b35c-ec7f6fc9a0ba.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/eacb7cfa-5422-4154-b0f3-d55b735e6d27.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/eacb7cfa-5422-4154-b0f3-d55b735e6d27.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/896b17b1-4af1-4f1a-81ee-1fe7e7002806.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/896b17b1-4af1-4f1a-81ee-1fe7e7002806.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Swimming Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/670afba2-4613-4d16-a44a-5848fb08dce5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/670afba2-4613-4d16-a44a-5848fb08dce5.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Swimming Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ed139924-89ba-4eba-b728-8866ac6ed896.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ed139924-89ba-4eba-b728-8866ac6ed896.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Swimming Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/34fd2a2d-8c7b-4f5e-bb80-05476baca122.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/34fd2a2d-8c7b-4f5e-bb80-05476baca122.jpg?aki_policy=small'
        },
        {
          caption: 'View from Holiday Home [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/94abb551-e555-4b7a-9973-6f6e4a944a04.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/94abb551-e555-4b7a-9973-6f6e4a944a04.jpg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3373ab41-21a9-4c9c-a45b-a43381f72503.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3373ab41-21a9-4c9c-a45b-a43381f72503.jpg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/747d7176-3349-4266-a104-d51213baa52e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/747d7176-3349-4266-a104-d51213baa52e.jpg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e8e0acd6-621e-470b-8472-be0d498607a5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e8e0acd6-621e-470b-8472-be0d498607a5.jpg?aki_policy=small'
        },
        {
          caption: 'Dining Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d1720f3f-81c9-44cf-a3d0-0aa083c68a50.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d1720f3f-81c9-44cf-a3d0-0aa083c68a50.jpg?aki_policy=small'
        },
        {
          caption: 'Kitchen',
          pictureUrl: 'https://a0.muscache.com/im/pictures/60bec221-4116-4db4-84e5-868943cab099.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/60bec221-4116-4db4-84e5-868943cab099.jpg?aki_policy=small'
        },
        {
          caption: 'Kitchen',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f9f5c9d8-ba64-4d93-bfab-a15789674e7e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f9f5c9d8-ba64-4d93-bfab-a15789674e7e.jpg?aki_policy=small'
        },
        {
          caption: 'Kitchen',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5ccce870-bd36-4e43-9a4e-d51555d765d0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5ccce870-bd36-4e43-9a4e-d51555d765d0.jpg?aki_policy=small'
        },
        {
          caption: 'Landing',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1e4b4816-d391-4e3d-86cd-716689baf885.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1e4b4816-d391-4e3d-86cd-716689baf885.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1bb034e6-8c26-4693-b749-d40209738352.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1bb034e6-8c26-4693-b749-d40209738352.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ed822582-6b06-427b-807f-ac1e006f077f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ed822582-6b06-427b-807f-ac1e006f077f.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8c263c2d-4225-4da8-a72d-381554b54734.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8c263c2d-4225-4da8-a72d-381554b54734.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/71c156ec-cf3a-4f78-a500-304559dacc5b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/71c156ec-cf3a-4f78-a500-304559dacc5b.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0f5f0233-fcaf-4645-a104-40f570c8e56a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0f5f0233-fcaf-4645-a104-40f570c8e56a.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f01573b7-a63f-4c4f-8f23-45a123b40661.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f01573b7-a63f-4c4f-8f23-45a123b40661.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f6965e59-b4e1-41ce-918e-921a4886682c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f6965e59-b4e1-41ce-918e-921a4886682c.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/079d7fca-2495-4afc-8b21-b919191d9767.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/079d7fca-2495-4afc-8b21-b919191d9767.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/caac08e6-439f-4959-bad1-07b59428bf15.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/caac08e6-439f-4959-bad1-07b59428bf15.jpg?aki_policy=small'
        },
        {
          caption: 'Patio / Balcony',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0e1fbaa8-2343-4de3-b124-bbd2092ab1cd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0e1fbaa8-2343-4de3-b124-bbd2092ab1cd.jpg?aki_policy=small'
        },
        {
          caption: 'Patio / Balcony',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3c0b08f8-339a-4fce-ad60-c2633027e3cc.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3c0b08f8-339a-4fce-ad60-c2633027e3cc.jpg?aki_policy=small'
        },
        {
          caption: 'Garden [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b0035b70-5d76-444d-a8ef-f256ea1e6ccd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b0035b70-5d76-444d-a8ef-f256ea1e6ccd.jpg?aki_policy=small'
        },
        {
          caption: 'Garden [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/373697d1-b5c3-4b00-81a5-7a161812ed94.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/373697d1-b5c3-4b00-81a5-7a161812ed94.jpg?aki_policy=small'
        },
        {
          caption: 'Garden [summer]',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0efebb7d-5bf7-4410-a446-07def7c5c46f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0efebb7d-5bf7-4410-a446-07def7c5c46f.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Facilities and Services',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c605e62c-9ef7-488a-9d74-b2d0d980ad33.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c605e62c-9ef7-488a-9d74-b2d0d980ad33.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Facilities and Services',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8e7f2556-7683-4863-a92a-8568d13661ea.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8e7f2556-7683-4863-a92a-8568d13661ea.jpg?aki_policy=small'
        },
        {
          caption: 'Immediate Surroundings [summer] (<1 km)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/21b2fe4e-7808-4b3a-896e-ea92814464ff.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/21b2fe4e-7808-4b3a-896e-ea92814464ff.jpg?aki_policy=small'
        },
        {
          caption: 'Region [summer] (>5 km)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/86eec071-4f90-48b8-ac29-96367e32a25f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/86eec071-4f90-48b8-ac29-96367e32a25f.jpg?aki_policy=small'
        },
        {
          caption: 'Ambiance / Close-up',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6fad3165-c101-409d-ad9a-b9388367e11a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6fad3165-c101-409d-ad9a-b9388367e11a.jpg?aki_policy=small'
        },
        {
          caption: 'Ambiance / Close-up',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3dd67e91-c614-4784-9633-c61b1ee7aae0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3dd67e91-c614-4784-9633-c61b1ee7aae0.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 109955734,
        firstName: 'Lisa - BELVILLA',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Lisa - BELVILLA',
        about: 'Hi, I’m Lisa. I’m part of the Belvilla Customer service team. My colleagues and I are looking forward to assist you when booking our properties on Airbnb. You can count on our support before, during and after your holiday. Any questions? Just let us know!\r\n\r\nBelvilla is a leading European specialist in the rental of unique, self-catering holiday homes and apartments. We bring more than 35 years of experience in satisfying our guests (you!) and helping them find the perfect holiday. When you stay in a Belvilla home, you can be sure you will enjoy a unique holiday home in ideal surroundings. We’re looking forward to welcoming you in a Belvilla and love to hear from you!\r\n',
        memberSince: 'Joined in January 2017',
        languages: [
          'Nederlands',
          'English',
          'Français',
          'Deutsch'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '3,893 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/109955734',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/0985dba5-c853-43e7-95cc-30d241f73c66.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/0985dba5-c853-43e7-95cc-30d241f73c66.jpg?aki_policy=profile_small'
      },
      additionalHosts: [
        {
          id: 305882972,
          firstName: 'Belvilla',
          isSuperHost: false,
          hasProfilePic: true,
          smartName: 'Belvilla',
          about: '',
          memberSince: 'Joined in November 2019',
          languages: [
            'Nederlands',
            'English',
            'Français',
            'Deutsch'
          ],
          hasInclusionBadge: false,
          badges: [],
          hostUrl: 'https://www.airbnb.com/users/show/305882972',
          pictureUrl: 'https://a0.muscache.com/im/pictures/user/013f2362-f502-4627-8934-a629b685e80c.jpg?aki_policy=profile_large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/013f2362-f502-4627-8934-a629b685e80c.jpg?aki_policy=profile_small'
        }
      ],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/22761645',
      name: 'Independent villa with private pool  on an estate in Sayalonga Costa del Sol',
      stars: null,
      numberOfGuests: 6,
      address: 'Sayalonga, Spain',
      roomType: 'Entire villa',
      location: {
        lat: 36.803,
        lng: -4.002
      },
      reviews: [
        {
          author: {
            firstName: 'Juan',
            hasProfilePic: true,
            id: '36033734',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/665d1f6b-a08e-43c4-a5ec-7c51e68b4819.jpg?aki_policy=profile_x_medium',
            smartName: 'Juan',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/665d1f6b-a08e-43c4-a5ec-7c51e68b4819.jpg?aki_policy=profile_small'
          },
          comments: 'El dueño de la casa, Juan Antonio, fue muy atento. Nos informo que por el tema de la Covid desinfectan la casa antes de cada estancia. Totalmente disponible y nos informo de rutas de senderismo en la zona. La casa está impecable. La piscina  es bastante grande y tenia una temperatura estupenda tanto para bañarse a las 8 de la mañana como a las 8 de la tarde. Tiene una terraza con vistas a la montaña que es espectacular para disfrutar de un atardecer o leer un libro por la mañana temprano. Durante la noche hace una temperatura agradable y durante el día se está bastante bien. La casa está muy bien equipada en el interior y el exterior, contando con diferentes mesas en el exterior. Tiene WIFI.  La casa está a 15 minutos de la costa y 10 de Competa. Sin duda, es un sitio al que volveríamos.',
          createdAt: '2020-07-25T14:20:16Z',
          id: '642178561',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Laura - BELVILLA',
            hasProfilePic: true,
            id: '122175936',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/fc8aad91-ff16-47ac-b29d-620ccfffcc86.jpg?aki_policy=profile_x_medium',
            smartName: 'Laura - BELVILLA',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/fc8aad91-ff16-47ac-b29d-620ccfffcc86.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'July 2020',
          localizedReview: {
            comments: 'The owner of the house, Juan Antonio, was very attentive. He informed us that due to the issue of Covid they disinfect the house before each stay. Fully available and informed us of hiking trails in the area. The house is spotless. The pool  is quite large and had a great temperature both for bathing at 8 am and 8 pm. It has a terrace with mountain views that is spectacular to enjoy a sunset or read a book in the early morning. During the night it is a pleasant temperature and during the day it is quite nice. The house is very well equipped inside and out, with different tables outside. It has WIFI.  The house is 15 minutes from the coast and 10 from Competa. Definitely a place we would go back to.',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 16854,
          amountFormatted: '$16,854',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Holiday Home Exterior (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4847b4b7-2785-43a0-ae8f-2a6f8e1077ea.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4847b4b7-2785-43a0-ae8f-2a6f8e1077ea.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6d3dd550-fb82-42ea-a886-0728edc683ca.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6d3dd550-fb82-42ea-a886-0728edc683ca.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9abeee8b-357d-4586-a17f-3697a5513888.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9abeee8b-357d-4586-a17f-3697a5513888.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/54ed4136-52b7-44ab-a8a7-2a24452093de.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/54ed4136-52b7-44ab-a8a7-2a24452093de.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Exterior (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3a3e0895-a3fe-4068-ac84-5ae9ab1e6ebd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3a3e0895-a3fe-4068-ac84-5ae9ab1e6ebd.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Swimming Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/078bc956-6304-4c5e-bf15-26707c1384cf.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/078bc956-6304-4c5e-bf15-26707c1384cf.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Swimming Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d10632b0-03d8-415f-81aa-fdbfca48eb56.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d10632b0-03d8-415f-81aa-fdbfca48eb56.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Swimming Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8fceea04-3762-467a-b2c9-082a16efb10e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8fceea04-3762-467a-b2c9-082a16efb10e.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Swimming Pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ec705f45-534a-4287-af95-c2891a5d25e5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ec705f45-534a-4287-af95-c2891a5d25e5.jpg?aki_policy=small'
        },
        {
          caption: 'View from Holiday Home (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9772f02e-1512-4efc-a1cb-5f9042858efe.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9772f02e-1512-4efc-a1cb-5f9042858efe.jpg?aki_policy=small'
        },
        {
          caption: 'View from Holiday Home (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/acf7a502-c814-45d6-85c5-8f642264187b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/acf7a502-c814-45d6-85c5-8f642264187b.jpg?aki_policy=small'
        },
        {
          caption: 'View from Holiday Home (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c32c55a7-5a5b-4b6e-987e-410f37d01a08.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c32c55a7-5a5b-4b6e-987e-410f37d01a08.jpg?aki_policy=small'
        },
        {
          caption: 'View from Holiday Home (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ed85bb7b-e6a2-4167-a627-3758455c6bfc.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ed85bb7b-e6a2-4167-a627-3758455c6bfc.jpg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3ed75585-747b-444a-b5a4-93ea43850031.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3ed75585-747b-444a-b5a4-93ea43850031.jpg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7f8dcab7-79cb-4017-8ac1-f2a4137f7e1f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7f8dcab7-79cb-4017-8ac1-f2a4137f7e1f.jpg?aki_policy=small'
        },
        {
          caption: 'Living Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c3f9c25c-f2cc-4c86-87cf-ced80ceb85fe.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c3f9c25c-f2cc-4c86-87cf-ced80ceb85fe.jpg?aki_policy=small'
        },
        {
          caption: 'Dining Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c21c45d4-018a-4004-9a0f-9c28fc89a821.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c21c45d4-018a-4004-9a0f-9c28fc89a821.jpg?aki_policy=small'
        },
        {
          caption: 'Dining Room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/406cc2c8-7f78-4c91-9ffc-f21a62ca47dd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/406cc2c8-7f78-4c91-9ffc-f21a62ca47dd.jpg?aki_policy=small'
        },
        {
          caption: 'Kitchen',
          pictureUrl: 'https://a0.muscache.com/im/pictures/67ecf4ae-da83-43e8-8360-f9a5bc889631.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/67ecf4ae-da83-43e8-8360-f9a5bc889631.jpg?aki_policy=small'
        },
        {
          caption: 'Kitchen',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b6a7cd3b-9ba4-48d6-8dd2-315bdff0a197.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b6a7cd3b-9ba4-48d6-8dd2-315bdff0a197.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5c2f1457-ab27-4ade-83a8-e0945835ee85.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5c2f1457-ab27-4ade-83a8-e0945835ee85.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cce862dc-4b28-4a48-b0db-db5c0ca3252f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cce862dc-4b28-4a48-b0db-db5c0ca3252f.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e238a758-24bd-4de5-8f50-43626fd78de8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e238a758-24bd-4de5-8f50-43626fd78de8.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/417b2a2d-1fa0-4a56-8f0b-35c8165e64b6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/417b2a2d-1fa0-4a56-8f0b-35c8165e64b6.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f631a652-f96b-4844-9de6-4305016f3c15.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f631a652-f96b-4844-9de6-4305016f3c15.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/28c9aa1c-110b-4328-9c4b-123970d61d89.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/28c9aa1c-110b-4328-9c4b-123970d61d89.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c1f1c4a8-baf9-4f5f-a8b1-bd6eabf8b38a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c1f1c4a8-baf9-4f5f-a8b1-bd6eabf8b38a.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/71504da5-d779-4f18-bc4c-a7789d4975fb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/71504da5-d779-4f18-bc4c-a7789d4975fb.jpg?aki_policy=small'
        },
        {
          caption: 'Patio / Balcony',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f05357a3-ba59-4aab-9d64-fd5dbe9de691.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f05357a3-ba59-4aab-9d64-fd5dbe9de691.jpg?aki_policy=small'
        },
        {
          caption: 'Garden (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b6bc9332-8678-432e-b7bc-a05cbfea190f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b6bc9332-8678-432e-b7bc-a05cbfea190f.jpg?aki_policy=small'
        },
        {
          caption: 'Garden (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fdcbfb40-3ca3-48d5-ae34-a5941691d9a0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fdcbfb40-3ca3-48d5-ae34-a5941691d9a0.jpg?aki_policy=small'
        },
        {
          caption: 'Garden (summer)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d391e0c0-b5f5-4423-8223-78730518e38f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d391e0c0-b5f5-4423-8223-78730518e38f.jpg?aki_policy=small'
        },
        {
          caption: 'Holiday Home Facilities and Services',
          pictureUrl: 'https://a0.muscache.com/im/pictures/66eeb6be-d7bb-4864-97cf-b5110ee4cfb1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/66eeb6be-d7bb-4864-97cf-b5110ee4cfb1.jpg?aki_policy=small'
        },
        {
          caption: 'Immediate Surroundings (summer) (<1 km)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e99639ac-1ebc-434d-9083-a8970c92ddce.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e99639ac-1ebc-434d-9083-a8970c92ddce.jpg?aki_policy=small'
        },
        {
          caption: 'Surroundings (summer) (1-5 km)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d1827f3f-ff9b-45ac-94ab-6037f1c95412.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d1827f3f-ff9b-45ac-94ab-6037f1c95412.jpg?aki_policy=small'
        },
        {
          caption: 'Region (summer) (>5 km)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/98f3b28c-1af3-4223-a6fa-deb37a5f431a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/98f3b28c-1af3-4223-a6fa-deb37a5f431a.jpg?aki_policy=small'
        },
        {
          caption: 'Region (summer) (>5 km)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9fad6a1d-7933-40ad-9717-c4a66575f120.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9fad6a1d-7933-40ad-9717-c4a66575f120.jpg?aki_policy=small'
        },
        {
          caption: 'Region (summer) (>5 km)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e0980145-d34f-4afd-9212-f776642e90af.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e0980145-d34f-4afd-9212-f776642e90af.jpg?aki_policy=small'
        },
        {
          caption: 'Ambiance / Close-up',
          pictureUrl: 'https://a0.muscache.com/im/pictures/bccd5398-78f8-4a68-b97d-9e7a12e67e8c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/bccd5398-78f8-4a68-b97d-9e7a12e67e8c.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 122175936,
        firstName: 'Laura - BELVILLA',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Laura - BELVILLA',
        about: 'Hi, I’m Laura. I’m part of the Belvilla Customer service team. My colleagues and I are looking forward to assist you when booking our properties on Airbnb. You can count on our support before, during and after your holiday. Any questions? Just let us know!\r\n\r\nBelvilla is a leading European specialist in the rental of unique, self-catering holiday homes and apartments. We bring more than 35 years of experience in satisfying our guests (you!) and helping them find the perfect holiday. When you stay in a Belvilla home, you can be sure you will enjoy a unique holiday home in ideal surroundings. We’re looking forward to welcoming you in a Belvilla and love to hear from you!',
        memberSince: 'Joined in March 2017',
        languages: [
          'Nederlands',
          'English',
          'Français',
          'Deutsch'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '1,182 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/122175936',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/fc8aad91-ff16-47ac-b29d-620ccfffcc86.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/fc8aad91-ff16-47ac-b29d-620ccfffcc86.jpg?aki_policy=profile_small'
      },
      additionalHosts: [
        {
          id: 305882972,
          firstName: 'Belvilla',
          isSuperHost: false,
          hasProfilePic: true,
          smartName: 'Belvilla',
          about: '',
          memberSince: 'Joined in November 2019',
          languages: [
            'Nederlands',
            'English',
            'Français',
            'Deutsch'
          ],
          hasInclusionBadge: false,
          badges: [],
          hostUrl: 'https://www.airbnb.com/users/show/305882972',
          pictureUrl: 'https://a0.muscache.com/im/pictures/user/013f2362-f502-4627-8934-a629b685e80c.jpg?aki_policy=profile_large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/013f2362-f502-4627-8934-a629b685e80c.jpg?aki_policy=profile_small'
        }
      ],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/30401380',
      name: 'Villa Villa Les Ortigues',
      stars: 3.33,
      numberOfGuests: 6,
      address: 'Benijofar, Alicante, Spain',
      roomType: 'Entire villa',
      location: {
        lat: 38.07777,
        lng: -0.74164
      },
      reviews: [
        {
          author: {
            firstName: 'Sep',
            hasProfilePic: true,
            id: '248698444',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/3c49662d-e559-4285-a53a-36a580b2dfc4.jpg?aki_policy=profile_x_medium',
            smartName: 'Sep',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/3c49662d-e559-4285-a53a-36a580b2dfc4.jpg?aki_policy=profile_small'
          },
          comments: 'Very Nice modern accomodation with beautifull community pool. The house is 10 min away from the beach and nearby cities are 10-30 min away for example : alicante, Torrevieja. WiFi could be better. The accomodation has a lot of stuff for you to use there: Bbq , AC in every room, speaker and a lot of attributes for you to use in the kitchen.',
          createdAt: '2019-08-14T14:30:25Z',
          id: '509372671',
          collectionTag: null,
          rating: 4,
          recipient: {
            firstName: 'Nicolas',
            hasProfilePic: true,
            id: '226995524',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/1cc8bc1c-1868-4f8b-b8a6-9cf974935f70.jpg?aki_policy=profile_x_medium',
            smartName: 'Nicolas',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/1cc8bc1c-1868-4f8b-b8a6-9cf974935f70.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'August 2019',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Siukee',
            hasProfilePic: true,
            id: '8871829',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/a605edec-dc08-4646-93ba-2c23a364062d.jpg?aki_policy=profile_x_medium',
            smartName: 'Siukee',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/a605edec-dc08-4646-93ba-2c23a364062d.jpg?aki_policy=profile_small'
          },
          comments: 'Great big house with three beds en three bathrooms. Also the garage is a nice addition. Location wise it is a bit away from the beach and city, so a car is a must. We had a nice holiday.',
          createdAt: '2019-05-02T14:48:13Z',
          id: '446840768',
          collectionTag: null,
          rating: 4,
          recipient: {
            firstName: 'Nicolas',
            hasProfilePic: true,
            id: '226995524',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/1cc8bc1c-1868-4f8b-b8a6-9cf974935f70.jpg?aki_policy=profile_x_medium',
            smartName: 'Nicolas',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/1cc8bc1c-1868-4f8b-b8a6-9cf974935f70.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'May 2019',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Mark',
            hasProfilePic: true,
            id: '158393320',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/7d22b3e0-b22c-4e55-a92a-0e37a6ef43e0.jpg?aki_policy=profile_x_medium',
            smartName: 'Mark',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/7d22b3e0-b22c-4e55-a92a-0e37a6ef43e0.jpg?aki_policy=profile_small'
          },
          comments: 'A nice property. The only issues we had were around pool access, a small outside area and the quality and comfort of the beds.',
          createdAt: '2019-04-15T12:53:02Z',
          id: '437797204',
          collectionTag: null,
          rating: 2,
          recipient: {
            firstName: 'Nicolas',
            hasProfilePic: true,
            id: '226995524',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/1cc8bc1c-1868-4f8b-b8a6-9cf974935f70.jpg?aki_policy=profile_x_medium',
            smartName: 'Nicolas',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/1cc8bc1c-1868-4f8b-b8a6-9cf974935f70.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'April 2019',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 21121,
          amountFormatted: '$21,121',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Villa Les Ortigues - 1',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b548c975-b0bf-43c1-8cdf-2b26193f3f25.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b548c975-b0bf-43c1-8cdf-2b26193f3f25.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 2',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2ffd44d7-a9a8-4978-be34-65c99eaf7499.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2ffd44d7-a9a8-4978-be34-65c99eaf7499.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 3',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1f224c19-8459-42a9-862d-fdbc4779e73d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1f224c19-8459-42a9-862d-fdbc4779e73d.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 4',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5850426d-7da5-4050-a2ca-3321c063203d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5850426d-7da5-4050-a2ca-3321c063203d.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 5',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3992b546-bc76-4e01-a9e0-994c5c83b295.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3992b546-bc76-4e01-a9e0-994c5c83b295.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 6',
          pictureUrl: 'https://a0.muscache.com/im/pictures/95d5778d-431d-4d6a-8ef4-8ca02f5761cc.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/95d5778d-431d-4d6a-8ef4-8ca02f5761cc.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 7',
          pictureUrl: 'https://a0.muscache.com/im/pictures/30205006-26e0-4f9c-9f7c-ec374885bab1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/30205006-26e0-4f9c-9f7c-ec374885bab1.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 8',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9a80cc64-ed16-4d48-abee-a48243d6269d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9a80cc64-ed16-4d48-abee-a48243d6269d.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 9',
          pictureUrl: 'https://a0.muscache.com/im/pictures/830b1857-3f11-4aa6-b1d8-99ffd20e3654.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/830b1857-3f11-4aa6-b1d8-99ffd20e3654.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 10',
          pictureUrl: 'https://a0.muscache.com/im/pictures/28921790-e3e1-404f-a918-7d944fcab13d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/28921790-e3e1-404f-a918-7d944fcab13d.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 11',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9d8a755f-4b24-463f-ab4c-892ede10f62c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9d8a755f-4b24-463f-ab4c-892ede10f62c.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 12',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9454d00e-38e8-4cc0-9b8a-f8f33e8c95b1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9454d00e-38e8-4cc0-9b8a-f8f33e8c95b1.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 13',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a92e928e-d7dc-455c-a4c6-b7aa56251c96.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a92e928e-d7dc-455c-a4c6-b7aa56251c96.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 14',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4a8d00b3-1a74-4d5d-a98a-937d1d2af159.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4a8d00b3-1a74-4d5d-a98a-937d1d2af159.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 15',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b04f7ce5-7f48-404c-8a33-a00ed0f73412.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b04f7ce5-7f48-404c-8a33-a00ed0f73412.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 16',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c8e7bed5-c87a-4008-9366-5d154ab632e8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c8e7bed5-c87a-4008-9366-5d154ab632e8.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 17',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8ae4adc8-8295-4b48-8381-520fcbd74163.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8ae4adc8-8295-4b48-8381-520fcbd74163.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 18',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5f293a9e-817c-427c-809c-9cde13590cd0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5f293a9e-817c-427c-809c-9cde13590cd0.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 19',
          pictureUrl: 'https://a0.muscache.com/im/pictures/581e30e9-c7a2-4dcc-9e09-8648bb89446f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/581e30e9-c7a2-4dcc-9e09-8648bb89446f.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 20',
          pictureUrl: 'https://a0.muscache.com/im/pictures/46ff790f-f7e1-469c-99b5-f9e056e05b4b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/46ff790f-f7e1-469c-99b5-f9e056e05b4b.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 21',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2fa327d4-b4f3-41d5-8f3e-a8c5a347a58e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2fa327d4-b4f3-41d5-8f3e-a8c5a347a58e.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 22',
          pictureUrl: 'https://a0.muscache.com/im/pictures/528913cc-0363-4b74-855e-ed1c3b54aefc.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/528913cc-0363-4b74-855e-ed1c3b54aefc.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 23',
          pictureUrl: 'https://a0.muscache.com/im/pictures/77cf4097-3549-4fc9-987d-39edc3bb9802.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/77cf4097-3549-4fc9-987d-39edc3bb9802.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 24',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f950284b-c7e9-479e-a59e-f3dd3ec0d5ed.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f950284b-c7e9-479e-a59e-f3dd3ec0d5ed.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 25',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8e9338b6-fb4f-405d-8c9b-4abbfadeb44c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8e9338b6-fb4f-405d-8c9b-4abbfadeb44c.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 26',
          pictureUrl: 'https://a0.muscache.com/im/pictures/56de0240-9b71-4aa2-9825-b76d2dc88c60.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/56de0240-9b71-4aa2-9825-b76d2dc88c60.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 27',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3870dad3-0e62-43a0-8056-f4053b25852c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3870dad3-0e62-43a0-8056-f4053b25852c.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 28',
          pictureUrl: 'https://a0.muscache.com/im/pictures/bab8b4bd-6614-4b2e-8314-6a614a09be1b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/bab8b4bd-6614-4b2e-8314-6a614a09be1b.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 29',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0e9bc800-a688-4bf3-be74-d83c3ea19e36.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0e9bc800-a688-4bf3-be74-d83c3ea19e36.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 30',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fde32439-3735-4ecb-92ef-b4f4e2ef3c56.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fde32439-3735-4ecb-92ef-b4f4e2ef3c56.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 31',
          pictureUrl: 'https://a0.muscache.com/im/pictures/749b8620-b417-4968-be94-786a2527fb74.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/749b8620-b417-4968-be94-786a2527fb74.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 32',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a470afa3-17f3-490b-bb75-bf181dd0d6d6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a470afa3-17f3-490b-bb75-bf181dd0d6d6.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 33',
          pictureUrl: 'https://a0.muscache.com/im/pictures/59ec90e9-430b-4ba4-89d4-c72ac334173c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/59ec90e9-430b-4ba4-89d4-c72ac334173c.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 34',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0338009c-c757-43fa-aa1e-fb11e2c24fb1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0338009c-c757-43fa-aa1e-fb11e2c24fb1.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 35',
          pictureUrl: 'https://a0.muscache.com/im/pictures/616435a1-a975-46c1-bf68-6e8b1caef1ba.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/616435a1-a975-46c1-bf68-6e8b1caef1ba.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 36',
          pictureUrl: 'https://a0.muscache.com/im/pictures/bd488b43-c95b-4c38-b6ca-f939b94f3539.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/bd488b43-c95b-4c38-b6ca-f939b94f3539.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 37',
          pictureUrl: 'https://a0.muscache.com/im/pictures/02329a8a-ceae-4e41-b0be-d7a01c71e8be.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/02329a8a-ceae-4e41-b0be-d7a01c71e8be.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 38',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d0b136fc-6a5a-4b43-a036-222a6b3bf831.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d0b136fc-6a5a-4b43-a036-222a6b3bf831.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 39',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ed42e4ba-3397-446c-86dc-1cd30b60715c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ed42e4ba-3397-446c-86dc-1cd30b60715c.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 40',
          pictureUrl: 'https://a0.muscache.com/im/pictures/eeed71ee-0d9d-4c7e-b61e-377adabfa0e5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/eeed71ee-0d9d-4c7e-b61e-377adabfa0e5.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 41',
          pictureUrl: 'https://a0.muscache.com/im/pictures/bddca9bf-d64d-4689-aa17-f18a44cdb22f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/bddca9bf-d64d-4689-aa17-f18a44cdb22f.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 42',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9d98f081-8b98-44c8-a39a-0033a796aca5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9d98f081-8b98-44c8-a39a-0033a796aca5.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 43',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f8e95a84-2f98-4847-9c0a-08ed8bb4655a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f8e95a84-2f98-4847-9c0a-08ed8bb4655a.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 44',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a0c24fc0-03ff-4b84-84c8-7be5978b5a87.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a0c24fc0-03ff-4b84-84c8-7be5978b5a87.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 45',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8a9c8936-8937-4426-af4b-c8e5ba65745d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8a9c8936-8937-4426-af4b-c8e5ba65745d.jpg?aki_policy=small'
        },
        {
          caption: 'Villa Les Ortigues - 46',
          pictureUrl: 'https://a0.muscache.com/im/pictures/490ca6a1-8ba9-494e-8f35-9b1c9e5f7a64.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/490ca6a1-8ba9-494e-8f35-9b1c9e5f7a64.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 226995524,
        firstName: 'Nicolas',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Nicolas',
        about: 'Siempre nuevo, siempre lo mejor de los alojamientos',
        memberSince: 'Joined in November 2018',
        languages: [
          'English',
          'Français',
          'Español'
        ],
        responseRate: '100%',
        responseTime: 'within a few hours',
        hasInclusionBadge: false,
        badges: [
          '369 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/226995524',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/1cc8bc1c-1868-4f8b-b8a6-9cf974935f70.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/1cc8bc1c-1868-4f8b-b8a6-9cf974935f70.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/34772891',
      name: 'MEGAYACHT IN IBIZA AND BALEARIC ISLANDS',
      stars: null,
      numberOfGuests: 12,
      address: 'Balearic Islands, Spain',
      roomType: 'Boat',
      location: {
        lat: 38.91393,
        lng: 1.44476
      },
      reviews: [],
      pricing: {
        rate: {
          amount: 19009,
          amountFormatted: '$19,009',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2a7d4d15-7a5e-4a92-84e3-85b032e96309.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2a7d4d15-7a5e-4a92-84e3-85b032e96309.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6ee5442f-a4d5-4308-8a1b-433a195e08e0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6ee5442f-a4d5-4308-8a1b-433a195e08e0.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f56426d2-f69b-4d52-b22a-a20dbc2c6510.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f56426d2-f69b-4d52-b22a-a20dbc2c6510.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/680a8ad7-2bca-4537-996c-d49948312a72.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/680a8ad7-2bca-4537-996c-d49948312a72.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/55e1a5a4-e1fe-4b03-851b-632d258ae498.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/55e1a5a4-e1fe-4b03-851b-632d258ae498.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c18836ea-9161-44f0-acdd-ca47c06ecc4e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c18836ea-9161-44f0-acdd-ca47c06ecc4e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/16b4d3c3-72c8-4a67-8e10-a0d9a97d051d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/16b4d3c3-72c8-4a67-8e10-a0d9a97d051d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9df178f1-9e1e-4ac9-ad12-0035623ca5a1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9df178f1-9e1e-4ac9-ad12-0035623ca5a1.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2769f513-1114-42b9-a47b-fcd2e38a16b8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2769f513-1114-42b9-a47b-fcd2e38a16b8.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/27d42673-f5ab-481c-9623-3402964ff8ff.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/27d42673-f5ab-481c-9623-3402964ff8ff.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/db1ac1be-91c3-4910-8e79-c0a88330a43c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/db1ac1be-91c3-4910-8e79-c0a88330a43c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/04848c6e-5f85-400b-8f41-e9aae0abb672.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/04848c6e-5f85-400b-8f41-e9aae0abb672.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/63e312de-1c20-47c8-87e7-9f7f3eb7bd2f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/63e312de-1c20-47c8-87e7-9f7f3eb7bd2f.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6989aeb7-b0cd-4da2-bc80-235e175a85cd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6989aeb7-b0cd-4da2-bc80-235e175a85cd.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9152cd0f-60df-4c8c-837d-41cf7fff4466.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9152cd0f-60df-4c8c-837d-41cf7fff4466.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f43be740-7980-45a9-bf3b-ccf489b7f40d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f43be740-7980-45a9-bf3b-ccf489b7f40d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ad1317df-ee6e-4e62-9469-389f64aa6f2f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ad1317df-ee6e-4e62-9469-389f64aa6f2f.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/dfd27fa4-1ffe-456b-b1d9-8035859ee1bb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/dfd27fa4-1ffe-456b-b1d9-8035859ee1bb.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/980d42f5-111a-4a54-b535-29f6c39a72e5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/980d42f5-111a-4a54-b535-29f6c39a72e5.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 249001033,
        firstName: 'Lara',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Lara',
        about: 'En Yacht IN Ibiza ofrecemos un servicio óptimo garantizando una feliz estancia a todos los que nos visitan. \nNos ocupamos de realizar tus gestiones de reservas en restaurantes, alquiler de vehículos, compras y provisiones para el charter o incluso personal trainer o servicios wellness para disfrutar a bordo. \n\nYacht IN Ibiza, tu agencia de barcos en Ibiza!',
        memberSince: 'Joined in March 2019',
        languages: [
          'English',
          'Italiano',
          'Español'
        ],
        responseRate: '0%',
        responseTime: 'a few days or more',
        hasInclusionBadge: false,
        badges: [
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/249001033',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/4c5c7ca6-916b-429b-a3fb-42ee35b197b5.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/4c5c7ca6-916b-429b-a3fb-42ee35b197b5.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/18384814',
      name: 'Novelty primera linia de mar',
      stars: 4.39,
      numberOfGuests: 4,
      address: 'Salou, Catalunya, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 41.07501,
        lng: 1.13791
      },
      reviews: [
        {
          author: {
            firstName: 'Valentina',
            hasProfilePic: true,
            id: '483662776',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/fb48c5a5-2c5f-4ee3-871e-7afdbc5cf644.jpg?aki_policy=profile_x_medium',
            smartName: 'Valentina',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/fb48c5a5-2c5f-4ee3-871e-7afdbc5cf644.jpg?aki_policy=profile_small'
          },
          comments: 'Really nice apartment, with a nice view and I m really appreciate the attention to all details 🙏',
          createdAt: '2022-10-19T11:56:08Z',
          id: '741081241523795436',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Daniel',
            hasProfilePic: true,
            id: '127216913',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/895eaa3d-3658-4ecc-bf3c-920fc78d9a3d.jpg?aki_policy=profile_x_medium',
            smartName: 'Daniel',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/895eaa3d-3658-4ecc-bf3c-920fc78d9a3d.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'October 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'James',
            hasProfilePic: true,
            id: '302082449',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/69f507bb-d8b4-418b-8e4c-5c5bffca085b.jpg?aki_policy=profile_x_medium',
            smartName: 'James',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/69f507bb-d8b4-418b-8e4c-5c5bffca085b.jpg?aki_policy=profile_small'
          },
          comments: 'Daniels apartment is ideally located close to the beach, plus local bars, restaurants and supermarkets.',
          createdAt: '2022-10-14T12:28:49Z',
          id: '737473811381428830',
          collectionTag: null,
          rating: 4,
          recipient: {
            firstName: 'Daniel',
            hasProfilePic: true,
            id: '127216913',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/895eaa3d-3658-4ecc-bf3c-920fc78d9a3d.jpg?aki_policy=profile_x_medium',
            smartName: 'Daniel',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/895eaa3d-3658-4ecc-bf3c-920fc78d9a3d.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'October 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'James',
            hasProfilePic: true,
            id: '138112221',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/42ada7c7-60d9-452f-ad12-fe8b7da40912.jpg?aki_policy=profile_x_medium',
            smartName: 'James',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/42ada7c7-60d9-452f-ad12-fe8b7da40912.jpg?aki_policy=profile_small'
          },
          comments: 'Amazing!! Perfect location, nice and spacious apartment. Would stay again!!',
          createdAt: '2022-10-08T11:21:53Z',
          id: '733091475523200108',
          collectionTag: null,
          rating: 4,
          recipient: {
            firstName: 'Daniel',
            hasProfilePic: true,
            id: '127216913',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/895eaa3d-3658-4ecc-bf3c-920fc78d9a3d.jpg?aki_policy=profile_x_medium',
            smartName: 'Daniel',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/895eaa3d-3658-4ecc-bf3c-920fc78d9a3d.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'October 2022',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 19679,
          amountFormatted: '$19,679',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5a220d95-348c-4ade-a56a-477e70c41e69.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5a220d95-348c-4ade-a56a-477e70c41e69.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/57641c79-a071-4d7e-be65-213f3150b945.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/57641c79-a071-4d7e-be65-213f3150b945.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/81de61b1-81bb-4a69-9ee8-dd0275605811.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/81de61b1-81bb-4a69-9ee8-dd0275605811.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d5891e94-2f0d-41cf-b81b-fbae21747d58.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d5891e94-2f0d-41cf-b81b-fbae21747d58.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0af95b4d-83f6-4653-b5ee-24078969d015.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0af95b4d-83f6-4653-b5ee-24078969d015.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f92faeaa-4c61-4409-a7dc-586a2a769152.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f92faeaa-4c61-4409-a7dc-586a2a769152.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/86c1b9be-674f-4c80-b5de-44287ba3631a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/86c1b9be-674f-4c80-b5de-44287ba3631a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/084392c6-d729-4b23-9113-4d5acb5d6970.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/084392c6-d729-4b23-9113-4d5acb5d6970.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ec44a36b-867a-4200-aeca-6079217e5ec1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ec44a36b-867a-4200-aeca-6079217e5ec1.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/46bc4aad-dc24-45d8-8aed-ba6230e241e6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/46bc4aad-dc24-45d8-8aed-ba6230e241e6.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d01515b9-5956-4251-9b99-bf74d4ffb1a8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d01515b9-5956-4251-9b99-bf74d4ffb1a8.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1b8ae8f9-adce-4c7a-a077-1cc55cceb316.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1b8ae8f9-adce-4c7a-a077-1cc55cceb316.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/03927e92-b221-450b-a344-7c0f41b1ed4b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/03927e92-b221-450b-a344-7c0f41b1ed4b.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/973efb08-7fe8-4557-94d2-7663befa22a1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/973efb08-7fe8-4557-94d2-7663befa22a1.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e15b716e-8b86-496a-86e1-392d426f5f3a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e15b716e-8b86-496a-86e1-392d426f5f3a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2fe432ee-d958-43a6-863a-7217b8252c66.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2fe432ee-d958-43a6-863a-7217b8252c66.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f0612aba-5938-44f5-b9c4-8b0ee22f99fb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f0612aba-5938-44f5-b9c4-8b0ee22f99fb.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ae7773f7-4bbc-4464-90f0-c8dcb1a59795.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ae7773f7-4bbc-4464-90f0-c8dcb1a59795.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9972ea29-8b8e-460c-9ded-917e5ba010c7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9972ea29-8b8e-460c-9ded-917e5ba010c7.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fed5b02a-fe17-4361-bd6e-fb5f44f27269.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fed5b02a-fe17-4361-bd6e-fb5f44f27269.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a41504ab-010c-4455-b8e1-38e8676f74d6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a41504ab-010c-4455-b8e1-38e8676f74d6.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4f7eb959-80aa-40ea-81e1-429381ca0545.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4f7eb959-80aa-40ea-81e1-429381ca0545.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/47fdf421-f8a3-4f6c-bfe0-d39a4c7ee1d6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/47fdf421-f8a3-4f6c-bfe0-d39a4c7ee1d6.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6c824814-aa73-4182-8f24-143a0ee13806.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6c824814-aa73-4182-8f24-143a0ee13806.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3a9128fc-7f78-4ca2-9310-8cd9b518d36e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3a9128fc-7f78-4ca2-9310-8cd9b518d36e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/57f4fccd-fdff-4cda-81a6-4a7aa98cd7f9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/57f4fccd-fdff-4cda-81a6-4a7aa98cd7f9.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5b7eb0aa-2c5f-4b77-86e8-6a55198ebc0e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5b7eb0aa-2c5f-4b77-86e8-6a55198ebc0e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a50d44a4-b032-4dfa-adc4-4f27efbbe600.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a50d44a4-b032-4dfa-adc4-4f27efbbe600.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/da80d7fb-0b9f-450f-9204-14eaa9c848b1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/da80d7fb-0b9f-450f-9204-14eaa9c848b1.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0800faa0-f13b-42c8-a2eb-6072a0d0f4b4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0800faa0-f13b-42c8-a2eb-6072a0d0f4b4.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c12978be-5ad0-45f0-9519-4e62e4f1b9c3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c12978be-5ad0-45f0-9519-4e62e4f1b9c3.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7c0a5308-d845-4467-b70b-f00272d6bbf0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7c0a5308-d845-4467-b70b-f00272d6bbf0.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7739d0e8-526a-4d03-a51a-59bed5633626.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7739d0e8-526a-4d03-a51a-59bed5633626.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6f1c31f1-d555-41c4-a0a6-4143c03de8ce.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6f1c31f1-d555-41c4-a0a6-4143c03de8ce.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ffe01c3c-f793-4419-bf05-7c1e33611bcf.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ffe01c3c-f793-4419-bf05-7c1e33611bcf.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 127216913,
        firstName: 'Daniel',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Daniel',
        about: '',
        memberSince: 'Joined in April 2017',
        languages: [],
        responseRate: '67%',
        responseTime: 'within a few hours',
        hasInclusionBadge: false,
        badges: [
          '409 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/127216913',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/895eaa3d-3658-4ecc-bf3c-920fc78d9a3d.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/895eaa3d-3658-4ecc-bf3c-920fc78d9a3d.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/16184455',
      name: 'Casa rural en El Bierzo',
      stars: 4.33,
      numberOfGuests: 5,
      address: 'Toral de Merayo, Castilla y León, Spain',
      roomType: 'Entire cottage',
      location: {
        lat: 42.52551,
        lng: -6.63406
      },
      reviews: [
        {
          author: {
            firstName: 'Toni',
            hasProfilePic: true,
            id: '34215194',
            pictureUrl: 'https://a0.muscache.com/im/users/34215194/profile_pic/1432938000/original.jpg?aki_policy=profile_x_medium',
            smartName: 'Toni',
            thumbnailUrl: 'https://a0.muscache.com/im/users/34215194/profile_pic/1432938000/original.jpg?aki_policy=profile_small'
          },
          comments: 'The host canceled this reservation 73 days before arrival. This is an automated posting.',
          createdAt: '2017-01-29T17:44:31Z',
          id: '129236293',
          collectionTag: null,
          rating: 0,
          recipient: {
            firstName: 'Sagrario',
            hasProfilePic: true,
            id: '105680824',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/40c97349-adf3-454b-991d-094baf065ad1.jpg?aki_policy=profile_x_medium',
            smartName: 'Sagrario',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/40c97349-adf3-454b-991d-094baf065ad1.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'January 2017',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Joan',
            hasProfilePic: true,
            id: '141704611',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/c88dec36-6e06-42cb-9f56-8155ecd7ffd9.jpg?aki_policy=profile_x_medium',
            smartName: 'Joan',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/c88dec36-6e06-42cb-9f56-8155ecd7ffd9.jpg?aki_policy=profile_small'
          },
          comments: 'Alojamiento rural bien comunicado con la capital. Perfecto para conocer el Bierzo, tanto su patrimonio cultural como natural y gastronómico. Los amfitriones, solícitos y discretos.',
          createdAt: '2019-08-07T13:59:41Z',
          id: '504227644',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Sagrario',
            hasProfilePic: true,
            id: '105680824',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/40c97349-adf3-454b-991d-094baf065ad1.jpg?aki_policy=profile_x_medium',
            smartName: 'Sagrario',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/40c97349-adf3-454b-991d-094baf065ad1.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'August 2019',
          localizedReview: {
            comments: 'Rural accommodation well connected to the capital. Perfect for getting to know the Bierzo, both its cultural and natural and gastronomic heritage. The hosts are helpful and discreet.',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        },
        {
          author: {
            firstName: 'Paloma',
            hasProfilePic: true,
            id: '76281389',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/5ed3533b-4c28-4f79-9122-c06b2e45019e.jpg?aki_policy=profile_x_medium',
            smartName: 'Paloma',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/5ed3533b-4c28-4f79-9122-c06b2e45019e.jpg?aki_policy=profile_small'
          },
          comments: 'La casa es muy bonita, pero fría. Aunque tiene una estufa bilbaína preciosa y Joaquín nos ayudó a mantenerla en funcionamiento, pasamos algo de frío. También dispone de radiadores eléctricos, pero teníamos que ponerlos a media potencia porque si no saltaba el térmico.<br/>La batería de cocina está muy deteriorada por lo que tendría que ser renovada.<br/>Por lo demás: bien ubicada como zona base para visitar Ponferrada, las Médulas... las habitaciones son cómodas y agradables y el trato de Joaquín muy cercano.',
          createdAt: '2018-02-13T12:17:21Z',
          id: '234540078',
          collectionTag: null,
          rating: 3,
          recipient: {
            firstName: 'Sagrario',
            hasProfilePic: true,
            id: '105680824',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/40c97349-adf3-454b-991d-094baf065ad1.jpg?aki_policy=profile_x_medium',
            smartName: 'Sagrario',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/40c97349-adf3-454b-991d-094baf065ad1.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'February 2018',
          localizedReview: {
            comments: "The house is very nice but cold. Although it has a beautiful Bilbao stove and Joaquin helped us keep it up and running, we were a little cold. It also has electric heaters, but we had to put them at medium power because if the thermostat didn't go off.<br/>The kitchen battery is very deteriorated so it would have to be refreshed.<br/>Otherwise: well located as a base area to visit Ponferrada, Las Médulas... the rooms are comfortable and pleasant and Joaquín's treatment is very close.",
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 71787,
          amountFormatted: '$71,787',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'fachada principal',
          pictureUrl: 'https://a0.muscache.com/im/pictures/432c535f-3920-4dd4-86f6-304d6b7f5cea.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/432c535f-3920-4dd4-86f6-304d6b7f5cea.jpg?aki_policy=small'
        },
        {
          caption: 'fachada principal',
          pictureUrl: 'https://a0.muscache.com/im/pictures/09ef82eb-4956-4807-8775-6f9a63015c2a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/09ef82eb-4956-4807-8775-6f9a63015c2a.jpg?aki_policy=small'
        },
        {
          caption: 'puerta principal de entrada',
          pictureUrl: 'https://a0.muscache.com/im/pictures/94803805-8e36-49b0-b118-9f6cb4dbb74c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/94803805-8e36-49b0-b118-9f6cb4dbb74c.jpg?aki_policy=small'
        },
        {
          caption: 'vestíbulo de entrada con aseo',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d57274a5-806c-4b98-b0f2-d69c3ec88834.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d57274a5-806c-4b98-b0f2-d69c3ec88834.jpg?aki_policy=small'
        },
        {
          caption: 'aseo en vestíbulo de entrada con botiquín',
          pictureUrl: 'https://a0.muscache.com/im/pictures/74ae301e-f41a-419f-9f0f-a149c42d7716.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/74ae301e-f41a-419f-9f0f-a149c42d7716.jpg?aki_policy=small'
        },
        {
          caption: 'aseo en vestíbulo de entrada con botiquín',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cc6017c4-3a71-4c6b-8134-ab1d74b1b4c9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cc6017c4-3a71-4c6b-8134-ab1d74b1b4c9.jpg?aki_policy=small'
        },
        {
          caption: 'aseo en vestíbulo de entrada con botiquín',
          pictureUrl: 'https://a0.muscache.com/im/pictures/29ad1108-cb73-4bdd-9a58-21330c5413e9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/29ad1108-cb73-4bdd-9a58-21330c5413e9.jpg?aki_policy=small'
        },
        {
          caption: 'puerta de acceso a la terraza',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f7730ca5-7e9f-4644-95b9-7de765a71d24.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f7730ca5-7e9f-4644-95b9-7de765a71d24.jpg?aki_policy=small'
        },
        {
          caption: 'terraza',
          pictureUrl: 'https://a0.muscache.com/im/pictures/891baa09-ea73-4126-9c53-5e66d69c9996.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/891baa09-ea73-4126-9c53-5e66d69c9996.jpg?aki_policy=small'
        },
        {
          caption: 'distribuidor de dormitorios',
          pictureUrl: 'https://a0.muscache.com/im/pictures/21d672a0-8604-413e-b557-3f20ac5b2839.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/21d672a0-8604-413e-b557-3f20ac5b2839.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio principal ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/565ef4e1-beaf-42a8-bf4a-119510823e6c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/565ef4e1-beaf-42a8-bf4a-119510823e6c.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio principal ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6b4b98f4-6d8b-4566-aa3a-1a40b139dec0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6b4b98f4-6d8b-4566-aa3a-1a40b139dec0.jpg?aki_policy=small'
        },
        {
          caption: 'baño principal compartido',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b9842dfe-411f-4835-9d3c-77e6cd73add1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b9842dfe-411f-4835-9d3c-77e6cd73add1.jpg?aki_policy=small'
        },
        {
          caption: 'baño principal compartido',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7f97cdff-bcd0-4fa0-adcc-09caa6adac56.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7f97cdff-bcd0-4fa0-adcc-09caa6adac56.jpg?aki_policy=small'
        },
        {
          caption: 'baño principal compartido',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4f4fbfcc-bbf1-4f3f-b58a-e0e7277998d5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4f4fbfcc-bbf1-4f3f-b58a-e0e7277998d5.jpg?aki_policy=small'
        },
        {
          caption: 'dormitorio doble con camas de 90x190',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a926b819-f348-4eee-85de-d8dedb2b5a1c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a926b819-f348-4eee-85de-d8dedb2b5a1c.jpg?aki_policy=small'
        },
        {
          caption: 'dormitorio doble con camas de 90x190',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f98c6edb-170f-40f1-b86a-bc09c3e614db.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f98c6edb-170f-40f1-b86a-bc09c3e614db.jpg?aki_policy=small'
        },
        {
          caption: 'dormitorio doble con camas de 90x190',
          pictureUrl: 'https://a0.muscache.com/im/pictures/803cdb96-081b-4a9f-a5be-3ac435a529ab.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/803cdb96-081b-4a9f-a5be-3ac435a529ab.jpg?aki_policy=small'
        },
        {
          caption: 'dormitorio doble con camas de 90x190',
          pictureUrl: 'https://a0.muscache.com/im/pictures/26e3cd3a-fc9c-4642-a55f-402ee5c76ae5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/26e3cd3a-fc9c-4642-a55f-402ee5c76ae5.jpg?aki_policy=small'
        },
        {
          caption: 'Salita con sofá cama ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/243785e1-49a6-44d3-928a-b9807a0e2f53.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/243785e1-49a6-44d3-928a-b9807a0e2f53.jpg?aki_policy=small'
        },
        {
          caption: 'dormitorio dúplex bajo cubierta',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b2390d0c-4ba5-497f-a903-a77fe1e13c00.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b2390d0c-4ba5-497f-a903-a77fe1e13c00.jpg?aki_policy=small'
        },
        {
          caption: 'dormitorio dúplex bajo cubierta',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9740f891-07be-4cdb-9811-e322b31c4197.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9740f891-07be-4cdb-9811-e322b31c4197.jpg?aki_policy=small'
        },
        {
          caption: 'dormitorio dúplex bajo cubierta',
          pictureUrl: 'https://a0.muscache.com/im/pictures/91e1d37a-1c09-43ba-9269-15088ea88aed.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/91e1d37a-1c09-43ba-9269-15088ea88aed.jpg?aki_policy=small'
        },
        {
          caption: 'aseo dormitorio dúplex bajo cubierta',
          pictureUrl: 'https://a0.muscache.com/im/pictures/aef5189e-4c36-4544-b2de-ae2f44add64c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/aef5189e-4c36-4544-b2de-ae2f44add64c.jpg?aki_policy=small'
        },
        {
          caption: 'acceso a dormitorios desde salón',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c77d9866-8db7-4984-af17-4ed44aa166a5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c77d9866-8db7-4984-af17-4ed44aa166a5.jpg?aki_policy=small'
        },
        {
          caption: 'salón con chimenea',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6df4b5c9-c328-4252-89df-99cadcd5934b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6df4b5c9-c328-4252-89df-99cadcd5934b.jpg?aki_policy=small'
        },
        {
          caption: 'salón con chimenea',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cbf06e81-5c9f-4bd5-ba65-7cfef5068593.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cbf06e81-5c9f-4bd5-ba65-7cfef5068593.jpg?aki_policy=small'
        },
        {
          caption: 'salon y comedor',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f7888215-e8c2-4abc-a5d6-aea287fe5f97.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f7888215-e8c2-4abc-a5d6-aea287fe5f97.jpg?aki_policy=small'
        },
        {
          caption: 'comedor',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4f911886-6b4a-44e2-8dba-46b97e464524.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4f911886-6b4a-44e2-8dba-46b97e464524.jpg?aki_policy=small'
        },
        {
          caption: 'comedor',
          pictureUrl: 'https://a0.muscache.com/im/pictures/01e06d89-1c45-430b-8b0c-aa05de0e0815.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/01e06d89-1c45-430b-8b0c-aa05de0e0815.jpg?aki_policy=small'
        },
        {
          caption: 'cocina',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f1ea7a72-5491-4f79-b87e-b0fb69505807.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f1ea7a72-5491-4f79-b87e-b0fb69505807.jpg?aki_policy=small'
        },
        {
          caption: 'cocina',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d40a3386-e8c3-4514-98cc-b49fd63e1266.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d40a3386-e8c3-4514-98cc-b49fd63e1266.jpg?aki_policy=small'
        },
        {
          caption: 'cocina',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ab434061-071c-487e-99a6-f8ab93cdbf5e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ab434061-071c-487e-99a6-f8ab93cdbf5e.jpg?aki_policy=small'
        },
        {
          caption: 'cocina ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/851ed8c1-e125-49b6-912e-003f9a36a839.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/851ed8c1-e125-49b6-912e-003f9a36a839.jpg?aki_policy=small'
        },
        {
          caption: 'acceso al patio exterior',
          pictureUrl: 'https://a0.muscache.com/im/pictures/394d3954-bed4-4fe1-822d-3d1097140cfb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/394d3954-bed4-4fe1-822d-3d1097140cfb.jpg?aki_policy=small'
        },
        {
          caption: 'acceso al patio exterior',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8b2cfeca-82f8-47d6-8d16-8b403e1dd736.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8b2cfeca-82f8-47d6-8d16-8b403e1dd736.jpg?aki_policy=small'
        },
        {
          caption: 'puerte de entrada al jardin',
          pictureUrl: 'https://a0.muscache.com/im/pictures/54a12799-1bc4-41b0-9948-e1a0148d905a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/54a12799-1bc4-41b0-9948-e1a0148d905a.jpg?aki_policy=small'
        },
        {
          caption: 'porche del jardín',
          pictureUrl: 'https://a0.muscache.com/im/pictures/58fbce2d-3ff7-491c-be37-cb81e040921e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/58fbce2d-3ff7-491c-be37-cb81e040921e.jpg?aki_policy=small'
        },
        {
          caption: 'vista del jardín desde el porche',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4fc01dbf-f295-4cab-af0e-a9ccf411f9c2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4fc01dbf-f295-4cab-af0e-a9ccf411f9c2.jpg?aki_policy=small'
        },
        {
          caption: 'jardin de verano compartido con porche y barbacoa',
          pictureUrl: 'https://a0.muscache.com/im/pictures/246b44d5-e0e8-4a25-883a-1db3041bb69f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/246b44d5-e0e8-4a25-883a-1db3041bb69f.jpg?aki_policy=small'
        },
        {
          caption: 'jardin. porche y barbacoa',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6b43ebe4-7305-4db1-a56b-020210bd84e5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6b43ebe4-7305-4db1-a56b-020210bd84e5.jpg?aki_policy=small'
        },
        {
          caption: 'vista de la población desde el cercano monte ¨Pajariel¨',
          pictureUrl: 'https://a0.muscache.com/im/pictures/03786f1b-c58e-4917-b0ee-445c7fab4773.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/03786f1b-c58e-4917-b0ee-445c7fab4773.jpg?aki_policy=small'
        },
        {
          caption: 'tienda y bar junto al río Oza',
          pictureUrl: 'https://a0.muscache.com/im/pictures/48113659-3d94-45de-9e60-ba0290dc050d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/48113659-3d94-45de-9e60-ba0290dc050d.jpg?aki_policy=small'
        },
        {
          caption: 'paraje cercano de Las Médulas, patrimonio de la humanidad.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a6f9d1c1-7216-4e4e-8d7e-e31bbe096de3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a6f9d1c1-7216-4e4e-8d7e-e31bbe096de3.jpg?aki_policy=small'
        },
        {
          caption: 'vista general de la población',
          pictureUrl: 'https://a0.muscache.com/im/pictures/61142730-f16e-4049-a3c5-9e62f3be7b83.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/61142730-f16e-4049-a3c5-9e62f3be7b83.jpg?aki_policy=small'
        },
        {
          caption: 'zona de piscina fluvial de verano.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7807af34-0f15-4147-9079-73870527cf89.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7807af34-0f15-4147-9079-73870527cf89.jpg?aki_policy=small'
        },
        {
          caption: 'la población de Toral de Merayo está ubicada en la ruta del camino de Santiago de invierno',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a2c42963-307d-4c27-b981-293ba987ecc0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a2c42963-307d-4c27-b981-293ba987ecc0.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 105680824,
        firstName: 'Sagrario',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Sagrario',
        about: '',
        memberSince: 'Joined in November 2016',
        languages: [],
        hasInclusionBadge: false,
        badges: [
          '4 Reviews'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/105680824',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/40c97349-adf3-454b-991d-094baf065ad1.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/40c97349-adf3-454b-991d-094baf065ad1.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/34175736',
      name: 'Villa Centelleo',
      stars: null,
      numberOfGuests: 12,
      address: 'Ibiza Town, Ibiza, Spain',
      roomType: 'Entire villa',
      location: {
        lat: 38.90136,
        lng: 1.3411
      },
      reviews: [],
      pricing: {
        rate: {
          amount: 12535,
          amountFormatted: '$12,535',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b931a289-1889-4d31-90ed-bc8917cc6f89.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b931a289-1889-4d31-90ed-bc8917cc6f89.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6548d05c-5f51-45c2-a523-23ff17908473.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6548d05c-5f51-45c2-a523-23ff17908473.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/20992529-188b-46ea-a766-754fde5e23c0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/20992529-188b-46ea-a766-754fde5e23c0.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/bc63fd8b-63ca-4323-ba48-89d15da58c7f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/bc63fd8b-63ca-4323-ba48-89d15da58c7f.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/68189bff-3061-435c-b4b5-b23ea0325b39.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/68189bff-3061-435c-b4b5-b23ea0325b39.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8845837d-8ec5-45dd-b622-aecca2d0b1fa.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8845837d-8ec5-45dd-b622-aecca2d0b1fa.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5b9b59ce-18aa-4e06-b369-310c56f7941c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5b9b59ce-18aa-4e06-b369-310c56f7941c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fabe2984-d1e9-4b94-9d07-674315969409.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fabe2984-d1e9-4b94-9d07-674315969409.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cc8d7025-a32b-4444-9f2f-f256848c742b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cc8d7025-a32b-4444-9f2f-f256848c742b.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ee2efe3e-2203-495f-904a-d7cb35849fbc.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ee2efe3e-2203-495f-904a-d7cb35849fbc.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4f211ff4-287b-4aa9-85f6-5daa0cbf1491.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4f211ff4-287b-4aa9-85f6-5daa0cbf1491.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6f04710b-7671-4cd7-855b-2b09553254c6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6f04710b-7671-4cd7-855b-2b09553254c6.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8d819e84-2e06-4989-a1af-cfcd9a1b8a5b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8d819e84-2e06-4989-a1af-cfcd9a1b8a5b.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2be48ce7-1669-4dfb-ae4a-4a5f6ed7f551.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2be48ce7-1669-4dfb-ae4a-4a5f6ed7f551.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/923bc1a2-7bc5-4006-99de-bc8eb4f0fa48.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/923bc1a2-7bc5-4006-99de-bc8eb4f0fa48.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7870736b-3dd8-4520-b0b9-1fcf4e59d663.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7870736b-3dd8-4520-b0b9-1fcf4e59d663.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3a815d80-7310-4549-81fd-b554ac16d8a6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3a815d80-7310-4549-81fd-b554ac16d8a6.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0444d9b0-6dc6-4c69-ba01-e291e39c0e25.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0444d9b0-6dc6-4c69-ba01-e291e39c0e25.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/10f1cc28-2bdd-4986-9fe0-dde4f3c7aa76.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/10f1cc28-2bdd-4986-9fe0-dde4f3c7aa76.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f9bebde8-145f-43c3-a907-1b9f65b304f9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f9bebde8-145f-43c3-a907-1b9f65b304f9.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/bda5e6af-5e80-4952-8abf-5711b3fb6597.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/bda5e6af-5e80-4952-8abf-5711b3fb6597.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/aeffbb35-98db-424f-a00d-4d2da2d9ffd2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/aeffbb35-98db-424f-a00d-4d2da2d9ffd2.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/986dacca-ec77-4b40-b090-9a0bcd1966b3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/986dacca-ec77-4b40-b090-9a0bcd1966b3.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/03372242-8269-4468-8f41-fa39144c520a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/03372242-8269-4468-8f41-fa39144c520a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/50a5de36-bedb-4d42-9805-037abe94c335.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/50a5de36-bedb-4d42-9805-037abe94c335.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/16f94bee-2a90-43f8-b27c-a14e0acbca5d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/16f94bee-2a90-43f8-b27c-a14e0acbca5d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a4ba6489-8f04-4de7-b82c-a454bbb514bc.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a4ba6489-8f04-4de7-b82c-a454bbb514bc.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/71ca1e61-6191-4ae4-8f05-d5ac768f6ea2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/71ca1e61-6191-4ae4-8f05-d5ac768f6ea2.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1245eba3-aa07-4e06-b448-34c413136382.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1245eba3-aa07-4e06-b448-34c413136382.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 56334120,
        firstName: 'Patrick',
        isSuperHost: true,
        hasProfilePic: true,
        smartName: 'Patrick',
        about: "Hello.\r\n\r\nWe are Charles Marlow, an independent family agency located in Deia.  We are hugely passionate about this part of the Mallorca and look forward to sharing it with you and making sure you have a great stay - that's the most important thing. You can see our complete holiday rental portfolio on our website. ",
        memberSince: 'Joined in January 2016',
        languages: [
          'Čeština',
          'Dansk',
          'English',
          'Deutsch',
          'Español'
        ],
        responseRate: '91%',
        responseTime: 'within a few hours',
        hasInclusionBadge: false,
        badges: [
          '136 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/56334120',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/349e3ec6-c34f-4d4c-858b-79577e90570b.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/349e3ec6-c34f-4d4c-858b-79577e90570b.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: true
    },
    {
      url: 'https://www.airbnb.com/rooms/52434841',
      name: 'Apto [CUATROVIGAS2]',
      stars: 4.75,
      numberOfGuests: 4,
      address: 'Bollullos de la Mitación, Andalucía, Spain',
      roomType: 'Entire loft',
      location: {
        lat: 37.33677,
        lng: -6.13608
      },
      reviews: [
        {
          author: {
            firstName: 'Chris',
            hasProfilePic: true,
            id: '7502440',
            pictureUrl: 'https://a0.muscache.com/im/users/7502440/profile_pic/1373915306/original.jpg?aki_policy=profile_x_medium',
            smartName: 'Chris',
            thumbnailUrl: 'https://a0.muscache.com/im/users/7502440/profile_pic/1373915306/original.jpg?aki_policy=profile_small'
          },
          comments: 'Great spot for main part of town and restaurants. On the smaller side but makes up for this in very convenient checking in, contemporary/clean interior finish and location. <br/><br/>If you are looking for a spot to stay whilst at Skydive Spain - I’d highly recommend. <br/><br/>Parking outside on the street easy to find. <br/><br/>Miguel was prompt and available to contact if needed.',
          createdAt: '2022-03-11T13:48:11Z',
          id: '580237426765409163',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Manuel',
            hasProfilePic: true,
            id: '46946335',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/82dce20b-538b-41d6-b2b8-ddb773cf4de5.jpg?aki_policy=profile_x_medium',
            smartName: 'Manuel',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/82dce20b-538b-41d6-b2b8-ddb773cf4de5.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'March 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Ben',
            hasProfilePic: true,
            id: '227692550',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/1c9e6cb9-38fb-4990-b2ee-d532fe4a2a03.jpg?aki_policy=profile_x_medium',
            smartName: 'Ben',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/1c9e6cb9-38fb-4990-b2ee-d532fe4a2a03.jpg?aki_policy=profile_small'
          },
          comments: 'This is smaller than you’d expect for the money but is very well done out.',
          createdAt: '2021-11-19T13:56:20Z',
          id: '499066647603448686',
          collectionTag: null,
          rating: 4,
          recipient: {
            firstName: 'Manuel',
            hasProfilePic: true,
            id: '46946335',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/82dce20b-538b-41d6-b2b8-ddb773cf4de5.jpg?aki_policy=profile_x_medium',
            smartName: 'Manuel',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/82dce20b-538b-41d6-b2b8-ddb773cf4de5.jpg?aki_policy=profile_small'
          },
          response: 'Thank you for your evaluation, we are surprised by such a low grade in quality, we have put a lot of care in the design and the qualities, we will try to improve.  Thanks',
          localizedDate: 'November 2021',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Ana',
            hasProfilePic: true,
            id: '52443345',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/1d8a60b0-681e-4f7b-bae0-ab3d1ddb9b9b.jpg?aki_policy=profile_x_medium',
            smartName: 'Ana',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/1d8a60b0-681e-4f7b-bae0-ab3d1ddb9b9b.jpg?aki_policy=profile_small'
          },
          comments: 'Ha sido una estancia perfecta con nuestra perrita Sira. Realmente no puedo decir nada a mejorar del apartamento. Huele genial, está súper limpio, la cama es comodísima (la más cómoda en la que he dormido en mi vida), decoración cuidada al detalle... Y lo que más importante me parece: tenía todo lo necesario para pasar una estancia, cosas de primera necesidad que hemos echado en falta en otros apartamentos en los que hemos estado como gel, champú, aceite, sal, especias... completísimo. Volveríamos con los ojos cerrados, además de que Manuel ha sido un anfitrión estupendo y muy simpático.',
          createdAt: '2022-10-16T14:03:50Z',
          id: '738971187380167487',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Manuel',
            hasProfilePic: true,
            id: '46946335',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/82dce20b-538b-41d6-b2b8-ddb773cf4de5.jpg?aki_policy=profile_x_medium',
            smartName: 'Manuel',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/82dce20b-538b-41d6-b2b8-ddb773cf4de5.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'October 2022',
          localizedReview: {
            comments: "It's been a perfect stay with our little dog Sira. I really can't say anything to improve about the apartment. It smells great, it's super clean, the bed is very comfortable (the most comfortable I've ever slept in), thoughtful decoration... and most importantly: it had everything you need to spend a stay, basic things we've missed in other apartments where we've been like gel, shampoo, oil, salt, spices... very complete. We would come back with our eyes closed, plus Manuel has been a great and very nice host.",
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 95170,
          amountFormatted: '$95,170',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/34c13847-74e6-412c-b80d-4b4240246481.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/34c13847-74e6-412c-b80d-4b4240246481.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6a76766e-24de-44b9-9dbe-07ffa9be30b7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6a76766e-24de-44b9-9dbe-07ffa9be30b7.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f024dfae-ae58-42d5-83bb-ffc676f1a176.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f024dfae-ae58-42d5-83bb-ffc676f1a176.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/86c208ed-166f-46f6-b7d9-efdfa7480878.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/86c208ed-166f-46f6-b7d9-efdfa7480878.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1132aabf-3778-49d3-8cc3-172448b5bd58.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1132aabf-3778-49d3-8cc3-172448b5bd58.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c9fadec1-6e35-4623-8982-02c83f1aedf8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c9fadec1-6e35-4623-8982-02c83f1aedf8.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b9d9565b-6d43-4e38-b6f6-130caf3ee273.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b9d9565b-6d43-4e38-b6f6-130caf3ee273.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7976ff12-581f-4159-83c0-0c134afda7be.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7976ff12-581f-4159-83c0-0c134afda7be.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/daf42931-2e30-45d4-8ffe-1ba8a70c9f87.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/daf42931-2e30-45d4-8ffe-1ba8a70c9f87.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a7aa704e-03e7-4e02-9add-0d08ffb436a2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a7aa704e-03e7-4e02-9add-0d08ffb436a2.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6d5fbf1d-0422-4f1e-ba41-a3075f43063b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6d5fbf1d-0422-4f1e-ba41-a3075f43063b.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/eb8ada60-49e5-4ea3-a2c9-4e297178a61c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/eb8ada60-49e5-4ea3-a2c9-4e297178a61c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5680325d-ca86-4a2d-9c86-7352d13e36cd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5680325d-ca86-4a2d-9c86-7352d13e36cd.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e4fe0ebd-f143-4173-99b2-55a20394f7ab.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e4fe0ebd-f143-4173-99b2-55a20394f7ab.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8c509dfe-fbf2-43f9-8862-5308825c949e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8c509dfe-fbf2-43f9-8862-5308825c949e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6a72420a-6162-4635-9d38-13a76e106991.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6a72420a-6162-4635-9d38-13a76e106991.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ddbccf62-8a10-4b6b-bbd1-8450be8d0f83.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ddbccf62-8a10-4b6b-bbd1-8450be8d0f83.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/da0a359a-e364-4018-b678-32a3e7b2a4c8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/da0a359a-e364-4018-b678-32a3e7b2a4c8.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3fd90833-8f6c-4ea8-8a1d-fc7baeccc23f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3fd90833-8f6c-4ea8-8a1d-fc7baeccc23f.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5aed0185-6113-4710-8a1d-db727bef7026.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5aed0185-6113-4710-8a1d-db727bef7026.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a7351399-0a56-4f85-b00d-60ab8b852d26.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a7351399-0a56-4f85-b00d-60ab8b852d26.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3376b6ea-f321-4b63-809d-a4c73c1229d6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3376b6ea-f321-4b63-809d-a4c73c1229d6.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3c2adeff-7bd8-49d4-b7f2-2a1e3c864def.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3c2adeff-7bd8-49d4-b7f2-2a1e3c864def.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/afc3af6d-7739-4539-8511-d97bfc57b1db.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/afc3af6d-7739-4539-8511-d97bfc57b1db.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/18553f6a-39bb-426c-b273-a3e09bbb0707.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/18553f6a-39bb-426c-b273-a3e09bbb0707.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 46946335,
        firstName: 'Manuel',
        isSuperHost: true,
        hasProfilePic: true,
        smartName: 'Manuel',
        about: '',
        memberSince: 'Joined in October 2015',
        languages: [],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '19 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/46946335',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/82dce20b-538b-41d6-b2b8-ddb773cf4de5.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/82dce20b-538b-41d6-b2b8-ddb773cf4de5.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: true
    },
    {
      url: 'https://www.airbnb.com/rooms/45502001',
      name: 'Ibi001 - Luxury private island in Ibiza',
      stars: null,
      numberOfGuests: 10,
      address: 'Illa de Tagomago, Balearic Islands, Spain',
      roomType: 'Entire villa',
      location: {
        lat: 39.03657,
        lng: 1.64308
      },
      reviews: [],
      pricing: {
        rate: {
          amount: 22650,
          amountFormatted: '$22,650',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Location,Day,Location,Swimming pool,Time of day',
          pictureUrl: 'https://a0.muscache.com/im/pictures/febc872f-7df6-435f-b4eb-78603a740ec7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/febc872f-7df6-435f-b4eb-78603a740ec7.jpg?aki_policy=small'
        },
        {
          caption: "Bird's eye view,Day,Day,Mountain view,Natural landscape,Neighbourhood,Property building,Time of day",
          pictureUrl: 'https://a0.muscache.com/im/pictures/5f6363f7-ac96-4178-896f-ca97180ccc0b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5f6363f7-ac96-4178-896f-ca97180ccc0b.jpg?aki_policy=small'
        },
        {
          caption: "Bird's eye view,Day,Day,Property building,Time of day",
          pictureUrl: 'https://a0.muscache.com/im/pictures/32db4306-4049-47e3-a2f3-b05a4d7f96a2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/32db4306-4049-47e3-a2f3-b05a4d7f96a2.jpg?aki_policy=small'
        },
        {
          caption: "Bird's eye view,Day,Day,Property building,Time of day",
          pictureUrl: 'https://a0.muscache.com/im/pictures/e6130100-5965-453a-9e84-3d56543bebd8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e6130100-5965-453a-9e84-3d56543bebd8.jpg?aki_policy=small'
        },
        {
          caption: 'Day,Day,Facade / entrance,Facade / entrance,Garden view,Property building,Property building,Time of day',
          pictureUrl: 'https://a0.muscache.com/im/pictures/54b76cce-12a4-4c23-8db8-6564d328262f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/54b76cce-12a4-4c23-8db8-6564d328262f.jpg?aki_policy=small'
        },
        {
          caption: "Bird's eye view,Bird's eye view,Day,Day,Garden view,Mountain view,Pool view,Property building,Property building,Sea view,Time of day",
          pictureUrl: 'https://a0.muscache.com/im/pictures/37fde3f0-3d97-4056-813e-48755c6f28d3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/37fde3f0-3d97-4056-813e-48755c6f28d3.jpg?aki_policy=small'
        },
        {
          caption: 'Day,Day,Mountain view,Seating area,Solarium,Solarium,Swimming pool,Time of day',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0bac6d06-c94c-42a2-9bac-16f965db4907.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0bac6d06-c94c-42a2-9bac-16f965db4907.jpg?aki_policy=small'
        },
        {
          caption: 'Day,Day,Facade / entrance,Facade / entrance,Garden view,Property building,Property building,Time of day',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a6f8b6ab-fb0b-4b43-8ce5-bea2ba84fca1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a6f8b6ab-fb0b-4b43-8ce5-bea2ba84fca1.jpg?aki_policy=small'
        },
        {
          caption: 'Mountain view,Sea view,Seating area,Solarium,Solarium',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f24e1f40-f493-427f-9b3d-8fe2fe8cb2b4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f24e1f40-f493-427f-9b3d-8fe2fe8cb2b4.jpg?aki_policy=small'
        },
        {
          caption: "Bird's eye view,Bird's eye view,Day,Day,Garden view,Mountain view,Pool view,Property building,Property building,Sea view,Time of day",
          pictureUrl: 'https://a0.muscache.com/im/pictures/9bc2b749-551c-4741-a241-4553b57acf00.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9bc2b749-551c-4741-a241-4553b57acf00.jpg?aki_policy=small'
        },
        {
          caption: 'Communal lounge / TV room,Communal lounge / TV room,Living Room,Photo of the whole room,Seating area,TV and multimedia',
          pictureUrl: 'https://a0.muscache.com/im/pictures/449e3fdc-2ac7-480a-aaad-1f0eb90fdc12.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/449e3fdc-2ac7-480a-aaad-1f0eb90fdc12.jpg?aki_policy=small'
        },
        {
          caption: 'Dining area,Mountain view,Photo of the whole room,Seating area,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/26159063-4e1c-47c5-be39-5726c3bd3e90.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/26159063-4e1c-47c5-be39-5726c3bd3e90.jpg?aki_policy=small'
        },
        {
          caption: 'Living Room,Photo of the whole room,Seating area',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e26772db-523b-47b8-b549-d4c4c684a772.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e26772db-523b-47b8-b549-d4c4c684a772.jpg?aki_policy=small'
        },
        {
          caption: 'Balcony / Terrace,Day,Day,Pool view,Seating area,Time of day',
          pictureUrl: 'https://a0.muscache.com/im/pictures/acfbd5a8-870e-4d72-9181-6b4726499922.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/acfbd5a8-870e-4d72-9181-6b4726499922.jpg?aki_policy=small'
        },
        {
          caption: 'Balcony / Terrace,Day,Day,Dining area,Mountain view,Sea view,Seating area,Time of day',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a21e183f-b032-4aae-9913-de2c93ccc1cc.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a21e183f-b032-4aae-9913-de2c93ccc1cc.jpg?aki_policy=small'
        },
        {
          caption: 'Bed,Bed,Bedroom,Mountain view,Photo of the whole room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cbf5ca10-4434-4a94-aa38-aa7799216ef6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cbf5ca10-4434-4a94-aa38-aa7799216ef6.jpg?aki_policy=small'
        },
        {
          caption: 'Mountain view,Sea view,Seating area,Solarium,Solarium',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b4c41545-494c-47e5-a211-f8931d93216a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b4c41545-494c-47e5-a211-f8931d93216a.jpg?aki_policy=small'
        },
        {
          caption: 'Bed,Bed,Bedroom,Mountain view,Photo of the whole room,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/aa062685-0b95-422f-b70e-497b2ce51c97.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/aa062685-0b95-422f-b70e-497b2ce51c97.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom,Bathroom,Photo of the whole room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/370d460a-bcf3-4ac0-acf4-d17526fe82a2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/370d460a-bcf3-4ac0-acf4-d17526fe82a2.jpg?aki_policy=small'
        },
        {
          caption: 'Communal lounge / TV room,Communal lounge / TV room,Living Room,Mountain view,Photo of the whole room,Seating area,TV and multimedia,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c1b23f29-c686-40fa-a8d2-13fdd6408b16.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c1b23f29-c686-40fa-a8d2-13fdd6408b16.jpg?aki_policy=small'
        },
        {
          caption: 'Communal lounge / TV room,Communal lounge / TV room,Living Room,Photo of the whole room,Seating area,TV and multimedia',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ccc13415-bb0b-4a7b-93d2-34926fae2a4f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ccc13415-bb0b-4a7b-93d2-34926fae2a4f.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom,Bathroom,Photo of the whole room,Shower,Shower,Toilet,Toilet',
          pictureUrl: 'https://a0.muscache.com/im/pictures/dc8d766e-2071-4307-a36d-cab4b7b152c2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/dc8d766e-2071-4307-a36d-cab4b7b152c2.jpg?aki_policy=small'
        },
        {
          caption: 'Bed,Bed,Bedroom,Mountain view,Photo of the whole room,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/619e6a64-e852-4e33-855b-850394823ae3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/619e6a64-e852-4e33-855b-850394823ae3.jpg?aki_policy=small'
        },
        {
          caption: 'Bed,Bed,Bedroom,Mountain view,Photo of the whole room,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a07f046d-03bf-4866-a9c4-417e4df9c6e4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a07f046d-03bf-4866-a9c4-417e4df9c6e4.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom,Bathroom,Photo of the whole room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/eb95be26-2922-4aa5-998c-69a33aca86f0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/eb95be26-2922-4aa5-998c-69a33aca86f0.jpg?aki_policy=small'
        },
        {
          caption: 'Dining area,Mountain view,Photo of the whole room,Seating area,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9ad91569-7d48-4cf4-b1ff-b7de49014e44.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9ad91569-7d48-4cf4-b1ff-b7de49014e44.jpg?aki_policy=small'
        },
        {
          caption: 'Living Room,Photo of the whole room,Seating area',
          pictureUrl: 'https://a0.muscache.com/im/pictures/64ddf3ac-654e-4b0e-8867-0dfd5caab82f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/64ddf3ac-654e-4b0e-8867-0dfd5caab82f.jpg?aki_policy=small'
        },
        {
          caption: 'Facade / entrance,Facade / entrance,Night,Night,Property building,Property building',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e8c8057c-faee-4a24-8241-8ae2c4e5bf7a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e8c8057c-faee-4a24-8241-8ae2c4e5bf7a.jpg?aki_policy=small'
        },
        {
          caption: 'Living Room,Photo of the whole room,Seating area',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9e530d5c-22d1-48a2-b365-7b4f668c5ec1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9e530d5c-22d1-48a2-b365-7b4f668c5ec1.jpg?aki_policy=small'
        },
        {
          caption: "Balcony / Terrace,Bird's eye view,Bird's eye view,Mountain view,Night,Night,Sea view,Solarium,Solarium,Swimming pool",
          pictureUrl: 'https://a0.muscache.com/im/pictures/448bba62-3771-463b-96f2-1d31bd49cfb1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/448bba62-3771-463b-96f2-1d31bd49cfb1.jpg?aki_policy=small'
        },
        {
          caption: 'Balcony / Terrace,Mountain view,Night,Night,Seating area,Solarium,Solarium,Sunrise,Sunset,Swimming pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/472f7fd9-4175-4652-a419-11acc11ed0e3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/472f7fd9-4175-4652-a419-11acc11ed0e3.jpg?aki_policy=small'
        },
        {
          caption: 'Bed,Bed,Bedroom,Mountain view,Photo of the whole room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/14e0af21-a232-4854-99e3-ff27e00e1eb1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/14e0af21-a232-4854-99e3-ff27e00e1eb1.jpg?aki_policy=small'
        },
        {
          caption: 'Balcony / Terrace,Mountain view,Seating area,Solarium,Solarium,Swimming pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9978312b-7daf-4ee5-aaf0-aae29a32e78f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9978312b-7daf-4ee5-aaf0-aae29a32e78f.jpg?aki_policy=small'
        },
        {
          caption: 'Bed,Bed,Bedroom,Mountain view,Photo of the whole room,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/921aae16-cdde-446c-976a-f1719813a454.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/921aae16-cdde-446c-976a-f1719813a454.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom,Bathroom,Photo of the whole room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/137b18bc-bc3f-494b-a489-dfe0a94d108d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/137b18bc-bc3f-494b-a489-dfe0a94d108d.jpg?aki_policy=small'
        },
        {
          caption: 'Bed,Bed,Bedroom,Mountain view,Photo of the whole room,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/be452986-a399-4e8d-82cf-05f48ba3fa4b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/be452986-a399-4e8d-82cf-05f48ba3fa4b.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom,Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/05fd7092-be3c-4ea7-a438-1574a670f938.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/05fd7092-be3c-4ea7-a438-1574a670f938.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/713f3300-3bc9-424c-b6b4-ccc8346343d4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/713f3300-3bc9-424c-b6b4-ccc8346343d4.jpg?aki_policy=small'
        },
        {
          caption: 'Bed,Bed,Bedroom,Mountain view,Photo of the whole room,Sea view,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/42f594d1-1400-4ac1-a220-33f4f706b9fb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/42f594d1-1400-4ac1-a220-33f4f706b9fb.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom,Bathroom,Photo of the whole room,Shower,Shower,Toilet,Toilet',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0edb45ed-38b9-406a-8218-950e9e2a7da2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0edb45ed-38b9-406a-8218-950e9e2a7da2.jpg?aki_policy=small'
        },
        {
          caption: 'Bed,Bed,Bedroom,Mountain view,Photo of the whole room,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a909fccb-277b-46d9-abdb-f348577b14a7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a909fccb-277b-46d9-abdb-f348577b14a7.jpg?aki_policy=small'
        },
        {
          caption: 'Bed,Bed,Bedroom,Mountain view,Photo of the whole room,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/abbcf774-681d-49fe-8413-33b8839b5fb1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/abbcf774-681d-49fe-8413-33b8839b5fb1.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom,Bathroom,Photo of the whole room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/41a2a5c3-1f6b-400e-91ab-0e8873e71c9c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/41a2a5c3-1f6b-400e-91ab-0e8873e71c9c.jpg?aki_policy=small'
        },
        {
          caption: 'Balcony / Terrace,Dining area,Dinner,Mountain view,Sunrise,Sunset,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a2a22682-6407-43bd-a35c-814aa12e5f29.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a2a22682-6407-43bd-a35c-814aa12e5f29.jpg?aki_policy=small'
        },
        {
          caption: 'Day,Day,Garden,Garden,Mountain view,Sea view,Time of day',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a2d11e73-b0dd-4d2a-bc0b-4897808553b1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a2d11e73-b0dd-4d2a-bc0b-4897808553b1.jpg?aki_policy=small'
        },
        {
          caption: 'Facade / entrance,Facade / entrance,Night,Night,Property building,Property building',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e8e994c0-abcb-4ecb-810a-940edf59c271.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e8e994c0-abcb-4ecb-810a-940edf59c271.jpg?aki_policy=small'
        },
        {
          caption: 'Facade / entrance,Facade / entrance,Night,Night,Property building,Property building,Swimming pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8b9c9825-01df-4543-91f3-9eb6b497532e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8b9c9825-01df-4543-91f3-9eb6b497532e.jpg?aki_policy=small'
        },
        {
          caption: "Balcony / Terrace,Bird's eye view,Bird's eye view,Mountain view,Night,Night,Sea view,Solarium,Solarium,Swimming pool",
          pictureUrl: 'https://a0.muscache.com/im/pictures/3fdcbd3f-037e-427b-83c7-3e1534567779.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3fdcbd3f-037e-427b-83c7-3e1534567779.jpg?aki_policy=small'
        },
        {
          caption: 'Balcony / Terrace,Mountain view,Night,Night,Seating area,Solarium,Solarium,Sunrise,Sunset,Swimming pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/38b251c7-663f-417d-b7f7-33ef995b3d7e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/38b251c7-663f-417d-b7f7-33ef995b3d7e.jpg?aki_policy=small'
        },
        {
          caption: 'Mountain view,Night,Night,Sea view,Sunrise,Sunset,Swimming pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c42579cd-33a8-408b-ac2f-9ef778b05800.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c42579cd-33a8-408b-ac2f-9ef778b05800.jpg?aki_policy=small'
        },
        {
          caption: 'Balcony / Terrace,Mountain view,Seating area,Solarium,Solarium,Swimming pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/79aed978-4469-419a-93a9-e28d2a3d6e2a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/79aed978-4469-419a-93a9-e28d2a3d6e2a.jpg?aki_policy=small'
        },
        {
          caption: "Bird's eye view,Day,Day,Mountain view,Natural landscape,Neighbourhood,Property building,Time of day",
          pictureUrl: 'https://a0.muscache.com/im/pictures/a2a4d5a5-2402-4bb9-82b2-56926b2ea73d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a2a4d5a5-2402-4bb9-82b2-56926b2ea73d.jpg?aki_policy=small'
        },
        {
          caption: 'Location,Day,Location,Swimming pool,Time of day',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d815d045-a4a1-4207-a2e8-1156c50d7848.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d815d045-a4a1-4207-a2e8-1156c50d7848.jpg?aki_policy=small'
        },
        {
          caption: 'Day,Day,Mountain view,Seating area,Solarium,Solarium,Swimming pool,Time of day',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a9e4a07f-d563-40dc-aabb-0287906eff3c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a9e4a07f-d563-40dc-aabb-0287906eff3c.jpg?aki_policy=small'
        },
        {
          caption: 'Balcony / Terrace,Day,Day,Pool view,Seating area,Time of day',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3425d506-d864-4692-a1cd-4f105089efe7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3425d506-d864-4692-a1cd-4f105089efe7.jpg?aki_policy=small'
        },
        {
          caption: 'Balcony / Terrace,Day,Day,Dining area,Mountain view,Sea view,Seating area,Time of day',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5aeba268-6075-41d0-97d5-b650033ff8e4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5aeba268-6075-41d0-97d5-b650033ff8e4.jpg?aki_policy=small'
        },
        {
          caption: 'Communal lounge / TV room,Communal lounge / TV room,Living Room,Mountain view,Photo of the whole room,Seating area,TV and multimedia,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f43ae1c9-364b-409c-970b-da4cc5d80ce2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f43ae1c9-364b-409c-970b-da4cc5d80ce2.jpg?aki_policy=small'
        },
        {
          caption: 'Bed,Bed,Bedroom,Mountain view,Photo of the whole room,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/70f0c2f3-9c7a-41bb-a699-0ba4d84ca906.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/70f0c2f3-9c7a-41bb-a699-0ba4d84ca906.jpg?aki_policy=small'
        },
        {
          caption: 'Living Room,Photo of the whole room,Seating area',
          pictureUrl: 'https://a0.muscache.com/im/pictures/35d9c5cc-bb8e-4687-acd3-7a100e8e99f0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/35d9c5cc-bb8e-4687-acd3-7a100e8e99f0.jpg?aki_policy=small'
        },
        {
          caption: 'Bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ab3d7614-e9f9-4a80-9dce-32055e365fdb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ab3d7614-e9f9-4a80-9dce-32055e365fdb.jpg?aki_policy=small'
        },
        {
          caption: 'Bed,Bed,Bedroom,Mountain view,Photo of the whole room,Sea view,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/27e4eadf-80a3-476f-85eb-80c5241d66d6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/27e4eadf-80a3-476f-85eb-80c5241d66d6.jpg?aki_policy=small'
        },
        {
          caption: 'Bathroom,Bathroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/56454d99-50f4-4960-b47a-2879d1c613cc.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/56454d99-50f4-4960-b47a-2879d1c613cc.jpg?aki_policy=small'
        },
        {
          caption: 'Balcony / Terrace,Dining area,Dinner,Mountain view,Sunrise,Sunset,View(from property / room)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3e13700c-48c3-4d8d-914e-76683dfde603.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3e13700c-48c3-4d8d-914e-76683dfde603.jpg?aki_policy=small'
        },
        {
          caption: 'Day,Day,Garden,Garden,Mountain view,Sea view,Time of day',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b39839da-8daf-45e3-9a32-9430f37153e2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b39839da-8daf-45e3-9a32-9430f37153e2.jpg?aki_policy=small'
        },
        {
          caption: 'Facade / entrance,Facade / entrance,Night,Night,Property building,Property building,Swimming pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fb4c271b-e04b-4b4e-8683-41f6f374be14.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fb4c271b-e04b-4b4e-8683-41f6f374be14.jpg?aki_policy=small'
        },
        {
          caption: 'Mountain view,Night,Night,Sea view,Sunrise,Sunset,Swimming pool',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ae7fbd6b-ba70-4aaf-9f51-1c9214b12de2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ae7fbd6b-ba70-4aaf-9f51-1c9214b12de2.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 22805631,
        firstName: 'Latin Exclusive',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Latin Exclusive',
        about: 'We are a leading luxury vacation rental and concierge agency working globally throughout Latin America and Southern Europe with over 15 years of experience. With our world headquarters located in Brazil and key strategic locations such as Trancoso, Fortaleza, Cartagena, Mexico City, and Paris, we have the largest portfolio of unrivaled serviced private luxury homes for quality short-term rentals. We operate with an exceptional, curated approach to bespoke traveling and tailor-made concierge services, attending to all requests 24/7 and 365 days a year, across all time zones.\n---------------------------------------------------------------------------\nOur multilingual, multicultural, highly experienced staff has been looking after the most demanding clients,  always ready to provide service to them at any moment during their stay with us.\n--------------------------------------------------------------------------------\nDiscover our extensive portfolio in the most sought-after luxury travel destinations through our website.',
        memberSince: 'Joined in October 2014',
        languages: [
          'English',
          'Français',
          'Português',
          'Español'
        ],
        responseRate: '99%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '313 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/22805631',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/b6bbb250-e599-48dd-877f-d5e36294a871.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/b6bbb250-e599-48dd-877f-d5e36294a871.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/17287831',
      name: 'LA CASA VERDE( Mancha Real,Jaén, Úbeda ,Baeza)',
      stars: 4.65,
      numberOfGuests: 8,
      address: 'Mancha Real, Andalusia, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 37.78789,
        lng: -3.61059
      },
      reviews: [
        {
          author: {
            firstName: 'André',
            hasProfilePic: true,
            id: '36151930',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/2bf930bf-4bb7-4880-b3a5-5b07cd9caef0.jpg?aki_policy=profile_x_medium',
            smartName: 'André',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/2bf930bf-4bb7-4880-b3a5-5b07cd9caef0.jpg?aki_policy=profile_small'
          },
          comments: '100% recommendable. Big apartment and sparkling clean. Quiet and comfortable. Easy street parking close by.',
          createdAt: '2020-03-01T15:11:08Z',
          id: '612937966',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Alfonso',
            hasProfilePic: true,
            id: '60522668',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/3cd06924-d6db-4062-bd1b-d2c955429625.jpg?aki_policy=profile_x_medium',
            smartName: 'Alfonso',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/3cd06924-d6db-4062-bd1b-d2c955429625.jpg?aki_policy=profile_small'
          },
          response: 'Gracias por vuestra atención.<br/>Un saludo.<br/>Alfonso.',
          language: 'en',
          localizedDate: 'March 2020',
          localizedReview: {
            comments: '',
            disclaimer: 'Translated from English',
            needsTranslation: true,
            response: 'Thank you for your attention to this matter.<br/>Best regards, Alfonso.<br/>'
          }
        },
        {
          author: {
            firstName: 'Riemer',
            hasProfilePic: true,
            id: '58546544',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/5ad55cec-518c-4b4e-ab32-9358ad1b3e07.jpg?aki_policy=profile_x_medium',
            smartName: 'Riemer',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/5ad55cec-518c-4b4e-ab32-9358ad1b3e07.jpg?aki_policy=profile_small'
          },
          comments: 'Alfonso is a very friendly host! The house was very clean and nice! We recommend this place 😀',
          createdAt: '2019-01-03T12:36:30Z',
          id: '366705545',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Alfonso',
            hasProfilePic: true,
            id: '60522668',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/3cd06924-d6db-4062-bd1b-d2c955429625.jpg?aki_policy=profile_x_medium',
            smartName: 'Alfonso',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/3cd06924-d6db-4062-bd1b-d2c955429625.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'January 2019',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Delphine',
            hasProfilePic: true,
            id: '176193802',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/84c0045a-55bf-4dde-8470-819333850612.jpg?aki_policy=profile_x_medium',
            smartName: 'Delphine',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/84c0045a-55bf-4dde-8470-819333850612.jpg?aki_policy=profile_small'
          },
          comments: 'Very good place to sleep.<br/>Thank you for your welcome.',
          createdAt: '2018-04-29T12:50:36Z',
          id: '258422597',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Alfonso',
            hasProfilePic: true,
            id: '60522668',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/3cd06924-d6db-4062-bd1b-d2c955429625.jpg?aki_policy=profile_x_medium',
            smartName: 'Alfonso',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/3cd06924-d6db-4062-bd1b-d2c955429625.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'April 2018',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 63468,
          amountFormatted: '$63,468',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/afdeb7da-50b7-4ecf-a4d4-8f3dd6ebf47b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/afdeb7da-50b7-4ecf-a4d4-8f3dd6ebf47b.jpg?aki_policy=small'
        },
        {
          caption: 'Salón',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d19667d3-c7d6-40e1-88e3-ce68b2288cd7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d19667d3-c7d6-40e1-88e3-ce68b2288cd7.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d8754a3b-b273-458a-93dd-dfc7e1e41e33.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d8754a3b-b273-458a-93dd-dfc7e1e41e33.jpg?aki_policy=small'
        },
        {
          caption: 'Salita',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b3d71faa-affc-43ce-b4e1-3d008761a63d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b3d71faa-affc-43ce-b4e1-3d008761a63d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/99335833-e689-42de-9a5b-9286c76c2096.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/99335833-e689-42de-9a5b-9286c76c2096.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e11ca388-3703-4f1b-bf0f-8f623187ca85.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e11ca388-3703-4f1b-bf0f-8f623187ca85.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6158ce63-c015-43b1-aa6a-eb9faefe600a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6158ce63-c015-43b1-aa6a-eb9faefe600a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/519f2528-624f-48b2-a8fc-7b425f197af6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/519f2528-624f-48b2-a8fc-7b425f197af6.jpg?aki_policy=small'
        },
        {
          caption: 'Cocina',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8efbee3c-3fba-458f-b11e-4572a959184a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8efbee3c-3fba-458f-b11e-4572a959184a.jpg?aki_policy=small'
        },
        {
          caption: 'Cocina',
          pictureUrl: 'https://a0.muscache.com/im/pictures/05102480-d423-4cdd-9e4f-f88debe02b2a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/05102480-d423-4cdd-9e4f-f88debe02b2a.jpg?aki_policy=small'
        },
        {
          caption: 'Entrada',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4698b0cd-acb0-4d4c-88f5-bb02ccac1887.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4698b0cd-acb0-4d4c-88f5-bb02ccac1887.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/652bffee-1529-46fc-a81f-1a972db65436.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/652bffee-1529-46fc-a81f-1a972db65436.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio juvenil',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e7357e7f-92b2-448a-bf84-13671760db0b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e7357e7f-92b2-448a-bf84-13671760db0b.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/eab5342d-e6db-4b96-9f5b-24332da93996.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/eab5342d-e6db-4b96-9f5b-24332da93996.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/51a65f20-95c9-40f1-b4de-98a8710d307e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/51a65f20-95c9-40f1-b4de-98a8710d307e.jpg?aki_policy=small'
        },
        {
          caption: 'Segundo baño',
          pictureUrl: 'https://a0.muscache.com/im/pictures/512d3c1d-c754-43c7-ae3c-c4aa5a944531.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/512d3c1d-c754-43c7-ae3c-c4aa5a944531.jpg?aki_policy=small'
        },
        {
          caption: 'Baño principal',
          pictureUrl: 'https://a0.muscache.com/im/pictures/207d2273-06c5-434c-87ea-e30bf779a29c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/207d2273-06c5-434c-87ea-e30bf779a29c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/dc169f61-3fff-446a-b3e7-c662a47c8f94.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/dc169f61-3fff-446a-b3e7-c662a47c8f94.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8497be46-7317-4101-b72d-abef9583217c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8497be46-7317-4101-b72d-abef9583217c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4ca9aace-f61d-4749-863e-b5d866bd96af.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4ca9aace-f61d-4749-863e-b5d866bd96af.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio matrimonio',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a4462c49-b90e-4143-915d-d61cce2465e1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a4462c49-b90e-4143-915d-d61cce2465e1.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/de9b2963-1d18-4722-8fa0-c40b7e3b1263.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/de9b2963-1d18-4722-8fa0-c40b7e3b1263.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6948e8e4-553f-4b55-8280-0d7eda5cd169.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6948e8e4-553f-4b55-8280-0d7eda5cd169.jpg?aki_policy=small'
        },
        {
          caption: 'Pasillo',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2ee82429-34d1-4e5e-b340-39a878a935c7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2ee82429-34d1-4e5e-b340-39a878a935c7.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio matrimonio',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e2353ca7-9c38-442d-b5d4-5e76c1a6a9ac.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e2353ca7-9c38-442d-b5d4-5e76c1a6a9ac.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/20776769-81a3-4cb7-9e7c-c142f2bf49bd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/20776769-81a3-4cb7-9e7c-c142f2bf49bd.jpg?aki_policy=small'
        },
        {
          caption: 'Terraza',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0e261519-aaaa-4127-b1e1-24fd59bdcaf2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0e261519-aaaa-4127-b1e1-24fd59bdcaf2.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/195f0171-041a-449e-8e96-c55841863e44.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/195f0171-041a-449e-8e96-c55841863e44.jpg?aki_policy=small'
        },
        {
          caption: 'Parroquia San Juan Evangelista Mancha Real',
          pictureUrl: 'https://a0.muscache.com/im/pictures/95d9fc78-b3a1-405e-8382-51d224ebc50e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/95d9fc78-b3a1-405e-8382-51d224ebc50e.jpg?aki_policy=small'
        },
        {
          caption: 'Parque público',
          pictureUrl: 'https://a0.muscache.com/im/pictures/776da99f-3248-4322-b6d8-96c984c741a5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/776da99f-3248-4322-b6d8-96c984c741a5.jpg?aki_policy=small'
        },
        {
          caption: 'Calle maestra Mancha Real',
          pictureUrl: 'https://a0.muscache.com/im/pictures/217fbe10-26c3-433f-bdb1-708dfffc1075.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/217fbe10-26c3-433f-bdb1-708dfffc1075.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1e87f267-7b08-4528-90de-d646664d8b8a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1e87f267-7b08-4528-90de-d646664d8b8a.jpg?aki_policy=small'
        },
        {
          caption: 'El pueblo dispone de piscina cubierta ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3eace9dc-56f3-4f25-b287-bf109c83a0f1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3eace9dc-56f3-4f25-b287-bf109c83a0f1.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 60522668,
        firstName: 'Alfonso',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Alfonso',
        about: '',
        memberSince: 'Joined in February 2016',
        languages: [
          'English',
          'Français',
          'Español'
        ],
        responseRate: '100%',
        responseTime: 'within a few hours',
        hasInclusionBadge: false,
        badges: [
          '43 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/60522668',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/3cd06924-d6db-4062-bd1b-d2c955429625.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/3cd06924-d6db-4062-bd1b-d2c955429625.jpg?aki_policy=profile_small'
      },
      additionalHosts: [
        {
          id: 82766921,
          firstName: 'Remedios',
          isSuperHost: false,
          hasProfilePic: true,
          smartName: 'Remedios',
          about: '',
          memberSince: 'Joined in July 2016',
          languages: [],
          hasInclusionBadge: false,
          badges: [],
          hostUrl: 'https://www.airbnb.com/users/show/82766921',
          pictureUrl: 'https://a0.muscache.com/im/pictures/user/8add3b61-256c-4fb7-84fa-ee020d72926e.jpg?aki_policy=profile_large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/8add3b61-256c-4fb7-84fa-ee020d72926e.jpg?aki_policy=profile_small'
        },
        {
          id: 129566749,
          firstName: 'Pepe',
          isSuperHost: false,
          hasProfilePic: true,
          smartName: 'Pepe',
          about: '',
          memberSince: 'Joined in May 2017',
          languages: [
            'English',
            'Français',
            'Español'
          ],
          hasInclusionBadge: false,
          badges: [],
          hostUrl: 'https://www.airbnb.com/users/show/129566749',
          pictureUrl: 'https://a0.muscache.com/im/pictures/user/b1586ec0-8f22-4496-a940-d675f273fd74.jpg?aki_policy=profile_large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/b1586ec0-8f22-4496-a940-d675f273fd74.jpg?aki_policy=profile_small'
        }
      ],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/50688526',
      name: 'H .Apartamento a estrenar, céntrico y  con vistas.',
      stars: null,
      numberOfGuests: 4,
      address: 'Viveiro, Galicia, Spain',
      roomType: 'Entire serviced apartment',
      location: {
        lat: 43.65854,
        lng: -7.59796
      },
      reviews: [
        {
          author: {
            firstName: 'Angela',
            hasProfilePic: true,
            id: '159231778',
            pictureUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3',
            smartName: 'Angela',
            thumbnailUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3'
          },
          comments: 'Muy limpio y nuevo todo. Muy bien ubicado frente a la ria, perfecto',
          createdAt: '2021-08-08T12:26:52Z',
          id: '424369717075138760',
          collectionTag: null,
          rating: 4,
          recipient: {
            firstName: 'Joaquin',
            hasProfilePic: true,
            id: '409616352',
            pictureUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3',
            smartName: 'Joaquin',
            thumbnailUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3'
          },
          response: null,
          language: 'es',
          localizedDate: 'August 2021',
          localizedReview: {
            comments: 'Very clean and new everything. Very well located in front of the estuary, perfect',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 31769,
          amountFormatted: '$31,769',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-50688526/original/994068c1-998f-4240-8549-76a3ada8999f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-50688526/original/994068c1-998f-4240-8549-76a3ada8999f.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-50688526/original/e8c098b5-9ae7-41e7-a2bb-14e718a3d715.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-50688526/original/e8c098b5-9ae7-41e7-a2bb-14e718a3d715.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-50688526/original/3832422d-689b-4dd5-905d-bcced2c8f1d1.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-50688526/original/3832422d-689b-4dd5-905d-bcced2c8f1d1.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-50688526/original/e958d93c-b1db-4cba-8cec-e86f0b555f07.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-50688526/original/e958d93c-b1db-4cba-8cec-e86f0b555f07.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-50688526/original/46a30d76-9ea4-453f-bdaf-406bf0afce09.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-50688526/original/46a30d76-9ea4-453f-bdaf-406bf0afce09.jpeg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 409616352,
        firstName: 'Joaquin',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Joaquin',
        about: '',
        memberSince: 'Joined in June 2021',
        languages: [
          'Español'
        ],
        hasInclusionBadge: false,
        badges: [
          '5 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/409616352',
        pictureUrl: 'https://a0.muscache.com/defaults/user_pic-640x640.png?v=3',
        thumbnailUrl: 'https://a0.muscache.com/defaults/user_pic-640x640.png?v=3'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/48957927',
      name: 'Habitación doble en casa rural a 4km de Salamanca',
      stars: 5,
      numberOfGuests: 3,
      address: 'Villares de la Reina, Castilla y León, Spain',
      roomType: 'Private room in cottage',
      location: {
        lat: 41.012,
        lng: -5.674
      },
      reviews: [
        {
          author: {
            firstName: 'Montse',
            hasProfilePic: true,
            id: '75515791',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/47060dfb-94c5-4a77-a455-eb15f3e4b6f8.jpg?aki_policy=profile_x_medium',
            smartName: 'Montse',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/47060dfb-94c5-4a77-a455-eb15f3e4b6f8.jpg?aki_policy=profile_small'
          },
          comments: 'La casita está perfectamente equipada y a pesar de ser invierno dentro se está muy caliente . La calefacción funciona muy bien y además hay mantas extras para todas las camas por si acaso .<br/>La parte exterior está cuidada y es espaciosa , a pesar del frío hemos podido hacer barbacoa .  El espacio esta preparado  para vivirlo al aire libre . Imagino en primavera/ verano  será genial .<br/><br/>Literalmente : de la casa al centro de Salamanca hay diez minutos .<br/><br/>Hay un pueblo cerca con dos colmados , se puede ir andando .<br/><br/>El contacto con Noelia fluido en todo momento . Encantadora y muy servicial <br/>Muchas gracias !!',
          createdAt: '2021-12-07T15:05:31Z',
          id: '512147433094696961',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Fidel',
            hasProfilePic: true,
            id: '390611019',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/c485d15e-74aa-4e78-b714-2a820754e7bd.jpg?aki_policy=profile_x_medium',
            smartName: 'Fidel',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/c485d15e-74aa-4e78-b714-2a820754e7bd.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'December 2021',
          localizedReview: {
            comments: 'The cottage is perfectly equipped and despite being winter inside it is very hot . Heating works great and there are also extra blankets for all the beds just in case .<br/>The outside is well-kept and spacious , despite the cold we were able to barbecue .  The space is set up  for outdoor living. I imagine spring/ summer  will be great .<br/><br/>Literally : from the house to downtown Salamanca it is ten minutes .<br/><br/>There is a village nearby with two grocery stores , you can walk .<br/><br/>Contact with Noelia was fluid at all times . Charming and very helpful.<br/>Thank you so much !!',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        },
        {
          author: {
            firstName: 'Enrique',
            hasProfilePic: true,
            id: '427812267',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/c70a44b2-7cef-429d-9ad9-f93cf2aed881.jpg?aki_policy=profile_x_medium',
            smartName: 'Enrique',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/c70a44b2-7cef-429d-9ad9-f93cf2aed881.jpg?aki_policy=profile_small'
          },
          comments: 'Totalmente recomendable, hemos pasado unos días muy agradables. Los propietarios siempre están atentos para echarte una mano',
          createdAt: '2021-11-01T15:44:46Z',
          id: '486075263111879216',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Fidel',
            hasProfilePic: true,
            id: '390611019',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/c485d15e-74aa-4e78-b714-2a820754e7bd.jpg?aki_policy=profile_x_medium',
            smartName: 'Fidel',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/c485d15e-74aa-4e78-b714-2a820754e7bd.jpg?aki_policy=profile_small'
          },
          response: 'Ha sido un placer teneros en La Finca de Salammanca, buen viaje y esperamos veros pronto para disfrutar de nuevo de la ciudad.',
          language: 'es',
          localizedDate: 'November 2021',
          localizedReview: {
            comments: 'Totally recommended, we had a very pleasant time. The owners are always on hand to help you',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: 'It was a pleasure to have you at La Finca de Salammanca, have a safe trip and we hope to see you soon to enjoy the city again.'
          }
        },
        {
          author: {
            firstName: 'Paloma',
            hasProfilePic: true,
            id: '248371289',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/e3fa81bf-ccb1-479e-9ab2-ff3c2cca103e.jpg?aki_policy=profile_x_medium',
            smartName: 'Paloma',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/e3fa81bf-ccb1-479e-9ab2-ff3c2cca103e.jpg?aki_policy=profile_small'
          },
          comments: 'La casa de Fidel es un lugar agradable para desconectar. Lo suficientemente alejado de la civilización y a 5 minutos de ella para no echar nada en falta. <br/>La comunicación con los anfitriones discreta y fluida, inmejorable.',
          createdAt: '2021-08-21T11:31:01Z',
          id: '433763691076559551',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Fidel',
            hasProfilePic: true,
            id: '390611019',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/c485d15e-74aa-4e78-b714-2a820754e7bd.jpg?aki_policy=profile_x_medium',
            smartName: 'Fidel',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/c485d15e-74aa-4e78-b714-2a820754e7bd.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'August 2021',
          localizedReview: {
            comments: "Fidel's house is a nice place to disconnect. Far enough from civilization and 5 minutes away from it so you don't miss anything. <br/>Unbeatable communication with hosts.",
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 63468,
          amountFormatted: '$63,468',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'El lugar perfecto para desconectar... 5000 metros para ti y los tuyos.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d64e7013-1625-487b-929b-ffd274312114.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d64e7013-1625-487b-929b-ffd274312114.jpg?aki_policy=small'
        },
        {
          caption: 'Tenemos el sello de calidad de Turismo de Confianza',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/76fd812b-6f00-426c-9f90-e780e7747840.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/76fd812b-6f00-426c-9f90-e780e7747840.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/25d518bb-68e3-4133-abf9-bff878455d71.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/25d518bb-68e3-4133-abf9-bff878455d71.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/b15c3cba-ff99-4003-b36a-7f635a42dc6c.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/b15c3cba-ff99-4003-b36a-7f635a42dc6c.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/cf82f2ad-12ea-444e-a639-83badadfa4a4.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/cf82f2ad-12ea-444e-a639-83badadfa4a4.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/d67e344f-fc9e-45f2-9647-a86626b54dd3.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/d67e344f-fc9e-45f2-9647-a86626b54dd3.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c31dd375-cd88-49d4-af76-2158844bb51a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c31dd375-cd88-49d4-af76-2158844bb51a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b79eda0c-2c48-4426-9eef-cef8ba5a5b5a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b79eda0c-2c48-4426-9eef-cef8ba5a5b5a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/205e12b3-c725-4d6e-8429-9cc73d3fae3c.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/205e12b3-c725-4d6e-8429-9cc73d3fae3c.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/c0e19453-00db-4784-b7e9-242c92399e9a.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/c0e19453-00db-4784-b7e9-242c92399e9a.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/675bdacb-5c82-4d20-b791-3ae02c1ee17d.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/675bdacb-5c82-4d20-b791-3ae02c1ee17d.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/07f72a2b-a40a-4fdd-829a-f071f2bc28e8.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/07f72a2b-a40a-4fdd-829a-f071f2bc28e8.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/b6acf617-23f2-4fb9-a2c1-622856b81114.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/b6acf617-23f2-4fb9-a2c1-622856b81114.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/cbf07b77-20a7-40a4-b7e9-4612ebeed22e.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/cbf07b77-20a7-40a4-b7e9-4612ebeed22e.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/fc3de4bd-256f-47e6-a572-d14d5702e18b.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/fc3de4bd-256f-47e6-a572-d14d5702e18b.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/3b0d3fa6-2bdf-49f8-a2da-2ed5089911f8.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/3b0d3fa6-2bdf-49f8-a2da-2ed5089911f8.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/cd5c8efc-9345-4575-bfa6-88646b12bd14.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/cd5c8efc-9345-4575-bfa6-88646b12bd14.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/2aa446e1-ba6c-41db-9913-a9c3482deb70.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/2aa446e1-ba6c-41db-9913-a9c3482deb70.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/1b362f91-d460-4ad2-9bdd-4dab6dd075a0.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/1b362f91-d460-4ad2-9bdd-4dab6dd075a0.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/dd8cac3a-afb5-4a46-9098-eaaae4a3aa95.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/dd8cac3a-afb5-4a46-9098-eaaae4a3aa95.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/6c8df410-791f-46c8-90ca-d3dc0ab3aa18.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/6c8df410-791f-46c8-90ca-d3dc0ab3aa18.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/1db81a70-ea30-429f-877b-7c6be54d40c1.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/1db81a70-ea30-429f-877b-7c6be54d40c1.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/a41b6ffe-1b5b-475e-9b12-fe7dca377180.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/a41b6ffe-1b5b-475e-9b12-fe7dca377180.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/bfcdece7-b345-4065-94c6-7a106306030f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/bfcdece7-b345-4065-94c6-7a106306030f.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/8153cc7a-493f-4885-b93e-8b0cfd974f65.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/8153cc7a-493f-4885-b93e-8b0cfd974f65.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/445597d8-7a2f-4466-a4ca-e8f3a5fb7030.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/445597d8-7a2f-4466-a4ca-e8f3a5fb7030.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/c08cccfe-daa8-4d63-983b-f79a4ff42433.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/c08cccfe-daa8-4d63-983b-f79a4ff42433.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/cf55f47c-5d5c-4186-9a52-b54842eb45f3.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/cf55f47c-5d5c-4186-9a52-b54842eb45f3.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/4aab5c5f-479e-4ff6-937c-edec9473611d.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/4aab5c5f-479e-4ff6-937c-edec9473611d.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/5d1e3378-7950-4429-bba6-ec64018d9ab3.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/5d1e3378-7950-4429-bba6-ec64018d9ab3.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/15729dfc-2ecb-4dd2-809a-214690627a5b.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/15729dfc-2ecb-4dd2-809a-214690627a5b.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/d630baa2-6bce-4171-8263-a655d0c94485.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48957927/original/d630baa2-6bce-4171-8263-a655d0c94485.jpeg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 390611019,
        firstName: 'Fidel',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Fidel',
        about: '',
        memberSince: 'Joined in March 2021',
        languages: [],
        hasInclusionBadge: false,
        badges: [
          '5 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/390611019',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/c485d15e-74aa-4e78-b714-2a820754e7bd.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/c485d15e-74aa-4e78-b714-2a820754e7bd.jpg?aki_policy=profile_small'
      },
      additionalHosts: [
        {
          id: 221023001,
          firstName: 'Noelia',
          isSuperHost: false,
          hasProfilePic: true,
          smartName: 'Noelia',
          about: '',
          memberSince: 'Joined in October 2018',
          languages: [],
          hasInclusionBadge: false,
          badges: [],
          hostUrl: 'https://www.airbnb.com/users/show/221023001',
          pictureUrl: 'https://a0.muscache.com/im/pictures/user/7d0e9651-4471-44d6-adb1-4d4ddcdd8e5b.jpg?aki_policy=profile_large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/7d0e9651-4471-44d6-adb1-4d4ddcdd8e5b.jpg?aki_policy=profile_small'
        }
      ],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/42312164',
      name: 'La Catalpa Apartamento',
      stars: 4.7,
      numberOfGuests: 4,
      address: 'Arasán, Aragón, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 42.52512,
        lng: 0.50885
      },
      reviews: [
        {
          author: {
            firstName: 'Alejandro',
            hasProfilePic: true,
            id: '442077722',
            pictureUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3',
            smartName: 'Alejandro',
            thumbnailUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3'
          },
          comments: 'Everything was perfect',
          createdAt: '2023-01-01T15:26:49Z',
          id: '794820684863115187',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Mari Carmen',
            hasProfilePic: true,
            id: '239134763',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/b8593794-cc9f-4d4b-a16b-a990c816ae8e.jpg?aki_policy=profile_x_medium',
            smartName: 'Mari Carmen',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/b8593794-cc9f-4d4b-a16b-a990c816ae8e.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'January 2023',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Mareike',
            hasProfilePic: true,
            id: '21803783',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/71e8d066-54f0-4378-8687-be176b7080d4.jpg?aki_policy=profile_x_medium',
            smartName: 'Mareike',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/71e8d066-54f0-4378-8687-be176b7080d4.jpg?aki_policy=profile_small'
          },
          comments: 'Mari Carmen schickt eine genaue Wegbeschreibung. Das ist sehr gut. Die Wohnung war im EG und hatte alles, was wir uns wünschten. Draußen ist es wie in einem Freisitz eingerichtet, sehr gemütlich. Es kamen sogar einmal Wanderer in unsere Wohnung, weil sie dachten es sei ein Restaurant.',
          createdAt: '2022-08-08T11:12:32Z',
          id: '688875444007300106',
          collectionTag: null,
          rating: 4,
          recipient: {
            firstName: 'Mari Carmen',
            hasProfilePic: true,
            id: '239134763',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/b8593794-cc9f-4d4b-a16b-a990c816ae8e.jpg?aki_policy=profile_x_medium',
            smartName: 'Mari Carmen',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/b8593794-cc9f-4d4b-a16b-a990c816ae8e.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'de',
          localizedDate: 'August 2022',
          localizedReview: {
            comments: "Mari Carmen sends detailed directions. That's very good. The apartment was on the first floor and had everything we wanted. Outside it is furnished like in an outdoor seating area, very cozy. Hikers even came to our apartment once because they thought it was a restaurant.",
            disclaimer: 'Translated from German',
            needsTranslation: true,
            response: null
          }
        },
        {
          author: {
            firstName: 'Belén',
            hasProfilePic: true,
            id: '326123163',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/74d28ef4-6389-4129-a271-2d69807566dc.jpg?aki_policy=profile_x_medium',
            smartName: 'Belén',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/74d28ef4-6389-4129-a271-2d69807566dc.jpg?aki_policy=profile_small'
          },
          comments: 'Estuvimos muy bien , estuvo atenta a nuestra llegada y nos facilitó mucho todo. Lugar súper tranquilo y maravilloso :)',
          createdAt: '2022-02-09T15:17:55Z',
          id: '558539316945833048',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Mari Carmen',
            hasProfilePic: true,
            id: '239134763',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/b8593794-cc9f-4d4b-a16b-a990c816ae8e.jpg?aki_policy=profile_x_medium',
            smartName: 'Mari Carmen',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/b8593794-cc9f-4d4b-a16b-a990c816ae8e.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'February 2022',
          localizedReview: {
            comments: 'We had a great time , she was attentive to our arrival and made everything very easy for us. Super quiet and wonderful place :)',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 68753,
          amountFormatted: '$68,753',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Terraza jardín aparcamiento',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ab2be421-7cca-4593-af01-94ad9d5fab69.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ab2be421-7cca-4593-af01-94ad9d5fab69.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/06c9ace5-6d54-43fb-9771-f1a4314c09f0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/06c9ace5-6d54-43fb-9771-f1a4314c09f0.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/140c3301-6ef0-4023-8399-9c67f22611b4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/140c3301-6ef0-4023-8399-9c67f22611b4.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c8d52e0c-5335-4452-965f-67059ba565d0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c8d52e0c-5335-4452-965f-67059ba565d0.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/248aefb5-e4f6-4026-8563-dd1f7184f630.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/248aefb5-e4f6-4026-8563-dd1f7184f630.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/538240b5-92ab-4a16-81fe-3009820ca091.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/538240b5-92ab-4a16-81fe-3009820ca091.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/bf731c90-68bf-4529-a824-5285656876ff.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/bf731c90-68bf-4529-a824-5285656876ff.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7bb48be2-e56a-4566-8cfe-66dd849518d1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7bb48be2-e56a-4566-8cfe-66dd849518d1.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b7174ef7-4fa8-446f-a022-9f828f9b285c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b7174ef7-4fa8-446f-a022-9f828f9b285c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e3ac0dc3-8ea4-4cbb-8b09-815d49cd26f6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e3ac0dc3-8ea4-4cbb-8b09-815d49cd26f6.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ef8a6abd-1423-41f5-ae02-6e42de490a11.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ef8a6abd-1423-41f5-ae02-6e42de490a11.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6fc0facc-9dbc-4868-b64d-2da7feee37d6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6fc0facc-9dbc-4868-b64d-2da7feee37d6.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5c2b9ad0-37b0-452f-9cff-f7c3a34cd5c4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5c2b9ad0-37b0-452f-9cff-f7c3a34cd5c4.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/98a9a2fd-323f-4fec-8289-243ada58b225.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/98a9a2fd-323f-4fec-8289-243ada58b225.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ccecef3a-6f9b-40af-9286-3d94e6b9ddbc.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ccecef3a-6f9b-40af-9286-3d94e6b9ddbc.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 239134763,
        firstName: 'Mari Carmen',
        isSuperHost: true,
        hasProfilePic: true,
        smartName: 'Mari Carmen',
        about: '',
        memberSince: 'Joined in January 2019',
        languages: [],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '48 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/239134763',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/b8593794-cc9f-4d4b-a16b-a990c816ae8e.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/b8593794-cc9f-4d4b-a16b-a990c816ae8e.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: true
    },
    {
      url: 'https://www.airbnb.com/rooms/52046047',
      name: 'Gredosrentals - Apartamento Adrada',
      stars: null,
      numberOfGuests: 5,
      address: 'La Adrada, Castilla y León, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 40.30219,
        lng: -4.63766
      },
      reviews: [
        {
          author: {
            firstName: 'Andrei',
            hasProfilePic: true,
            id: '54822259',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/9f1dcf92-d3da-4068-96ad-4bbc7fe93348.jpg?aki_policy=profile_x_medium',
            smartName: 'Andrei',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9f1dcf92-d3da-4068-96ad-4bbc7fe93348.jpg?aki_policy=profile_small'
          },
          comments: 'Isabel es una fantastica mujer.<br/>El piso precioso y muy limpio. <br/>Para un mes, lo pasamos una familia con 2 ninos, estupendo. Gracias por todo Isabel.<br/>Saludos y bendiciones.',
          createdAt: '2022-04-07T14:09:51Z',
          id: '599817273862665466',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Isabel De Gruporentals',
            hasProfilePic: true,
            id: '35191296',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/31091639-a157-4d76-8f1f-fd47539f4372.jpg?aki_policy=profile_x_medium',
            smartName: 'Isabel De Gruporentals',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/31091639-a157-4d76-8f1f-fd47539f4372.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'April 2022',
          localizedReview: {
            comments: 'Isabel is an amazing woman.<br/>The apartment is beautiful and very clean. <br/>For a month, we had a family with 2 children, great. Thank you for everything Isabel.<br/>Best regards and blessings.',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 28796,
          amountFormatted: '$28,796',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Dormitorio 1',
          pictureUrl: 'https://a0.muscache.com/im/pictures/dc918ca7-dbb2-49d2-8764-c5ab47f3fa50.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/dc918ca7-dbb2-49d2-8764-c5ab47f3fa50.jpg?aki_policy=small'
        },
        {
          caption: 'Edificio',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b0a16752-b914-4399-80bd-fbd9107ad7ae.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b0a16752-b914-4399-80bd-fbd9107ad7ae.jpg?aki_policy=small'
        },
        {
          caption: 'Salón comedor',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9d6eceee-e234-4cb6-8fa8-d16fd239bb67.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9d6eceee-e234-4cb6-8fa8-d16fd239bb67.jpg?aki_policy=small'
        },
        {
          caption: 'Salón comedor',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c8911243-4386-4f1e-857f-9c1cdb03f16e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c8911243-4386-4f1e-857f-9c1cdb03f16e.jpg?aki_policy=small'
        },
        {
          caption: 'Salón comedor',
          pictureUrl: 'https://a0.muscache.com/im/pictures/523dfeeb-189e-4490-a8e6-ab79a00b2b01.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/523dfeeb-189e-4490-a8e6-ab79a00b2b01.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio 1',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e5e12879-619f-47e6-b529-6f4170e357d0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e5e12879-619f-47e6-b529-6f4170e357d0.jpg?aki_policy=small'
        },
        {
          caption: 'Balcón del dormitorio 1',
          pictureUrl: 'https://a0.muscache.com/im/pictures/190be583-b57c-405e-967d-a35fc5948ba7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/190be583-b57c-405e-967d-a35fc5948ba7.jpg?aki_policy=small'
        },
        {
          caption: 'Cocina',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4be420be-243e-4dbd-a374-d71284590ec5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4be420be-243e-4dbd-a374-d71284590ec5.jpg?aki_policy=small'
        },
        {
          caption: 'Cocina',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fda63c5b-f106-4248-b5aa-7fd15305fc94.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fda63c5b-f106-4248-b5aa-7fd15305fc94.jpg?aki_policy=small'
        },
        {
          caption: 'Baño',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7ae941d4-38ac-4b5d-82e5-09f5d10c967e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7ae941d4-38ac-4b5d-82e5-09f5d10c967e.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio 2',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6d032cb8-71f2-40fa-ae24-2ad7e7ba4ea1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6d032cb8-71f2-40fa-ae24-2ad7e7ba4ea1.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio 2',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f9478f49-fe98-4b6b-b33f-e773cb2117ca.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f9478f49-fe98-4b6b-b33f-e773cb2117ca.jpg?aki_policy=small'
        },
        {
          caption: 'Edificio',
          pictureUrl: 'https://a0.muscache.com/im/pictures/42827692-f1c6-4ebf-980b-00796db3b116.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/42827692-f1c6-4ebf-980b-00796db3b116.jpg?aki_policy=small'
        },
        {
          caption: 'Edificio',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cc84eb46-f6c0-452f-afec-c3541ed07be5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cc84eb46-f6c0-452f-afec-c3541ed07be5.jpg?aki_policy=small'
        },
        {
          caption: 'Piscinas naturales',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b5905e8a-ec01-4908-a0d6-1fc159d8a1e5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b5905e8a-ec01-4908-a0d6-1fc159d8a1e5.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/933e0f14-a87c-48d4-a9fc-cba5265ed9d0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/933e0f14-a87c-48d4-a9fc-cba5265ed9d0.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/66e89b3f-f1b5-4851-893b-c49e004f716a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/66e89b3f-f1b5-4851-893b-c49e004f716a.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a31fa4fb-6e9b-4f2d-9efd-0273e0777f58.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a31fa4fb-6e9b-4f2d-9efd-0273e0777f58.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a7f5cc73-011d-446a-82ea-d61b635ef478.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a7f5cc73-011d-446a-82ea-d61b635ef478.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2c17987d-d095-4254-90ea-b7ba9824cf17.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2c17987d-d095-4254-90ea-b7ba9824cf17.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7c769655-658d-4538-8bdd-64ab014229d3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7c769655-658d-4538-8bdd-64ab014229d3.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/aecc056c-82e4-445b-8f6b-0841c6c42f1f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/aecc056c-82e4-445b-8f6b-0841c6c42f1f.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/08fc8234-58ed-47c9-afbc-5b2cfd2b36d9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/08fc8234-58ed-47c9-afbc-5b2cfd2b36d9.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7402fc80-bad2-4f07-b12e-542b8a5f0592.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7402fc80-bad2-4f07-b12e-542b8a5f0592.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/00fc3e6d-2a84-47ec-b4fc-19b611dd26f3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/00fc3e6d-2a84-47ec-b4fc-19b611dd26f3.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e6adcd5b-8b63-4fbd-8b50-2a6423b35203.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e6adcd5b-8b63-4fbd-8b50-2a6423b35203.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8b9fc884-3f28-4fbc-b1ad-6a2049785bd5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8b9fc884-3f28-4fbc-b1ad-6a2049785bd5.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5fd9ff28-52a1-4000-acaa-2f2bb02d2de4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5fd9ff28-52a1-4000-acaa-2f2bb02d2de4.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/78fb7c11-27cf-4def-b4a8-a216eb8eafbc.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/78fb7c11-27cf-4def-b4a8-a216eb8eafbc.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/70c2e99a-25d4-49b9-9379-51e24988d68f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/70c2e99a-25d4-49b9-9379-51e24988d68f.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9d7f95f7-ebb0-4ea3-9c03-073ba05d2ce3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9d7f95f7-ebb0-4ea3-9c03-073ba05d2ce3.jpg?aki_policy=small'
        },
        {
          caption: 'Alrededores',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5e272907-2821-41db-94fd-6099fe86f99a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5e272907-2821-41db-94fd-6099fe86f99a.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 35191296,
        firstName: 'Isabel De Gruporentals',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Isabel De Gruporentals',
        about: 'Fundadora de Gruporentals: alquileres vacacionales en Vera y Gredos',
        memberSince: 'Joined in June 2015',
        languages: [],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '209 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/35191296',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/31091639-a157-4d76-8f1f-fd47539f4372.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/31091639-a157-4d76-8f1f-fd47539f4372.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/51575629',
      name: 'Cozy apartment with terrace next to the beach',
      stars: 4.69,
      numberOfGuests: 4,
      address: 'Fuengirola, Andalucía, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 36.53333,
        lng: -4.62659
      },
      reviews: [
        {
          author: {
            firstName: 'Danielle',
            hasProfilePic: true,
            id: '702002',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/78b584fc-4738-4361-9593-e2325158f0b7.jpg?aki_policy=profile_x_medium',
            smartName: 'Danielle',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/78b584fc-4738-4361-9593-e2325158f0b7.jpg?aki_policy=profile_small'
          },
          comments: 'Spacious and comfortable piso. I loved the patio and large living room. Well accomodated check in and check out with the friendly Janeth. I would recommend it.',
          createdAt: '2022-10-06T14:37:36Z',
          id: '731740424345174988',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Carolina',
            hasProfilePic: true,
            id: '417812016',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/279c715c-d8af-493e-874d-8e6178375894.jpg?aki_policy=profile_x_medium',
            smartName: 'Carolina',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/279c715c-d8af-493e-874d-8e6178375894.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'October 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Natacha',
            hasProfilePic: true,
            id: '466582648',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/54b1a5a7-df74-4fae-af5f-bb9bea4ee4ce.jpg?aki_policy=profile_x_medium',
            smartName: 'Natacha',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/54b1a5a7-df74-4fae-af5f-bb9bea4ee4ce.jpg?aki_policy=profile_small'
          },
          comments: 'Fine stay',
          createdAt: '2022-09-13T14:03:20Z',
          id: '715053337224352380',
          collectionTag: null,
          rating: 3,
          recipient: {
            firstName: 'Carolina',
            hasProfilePic: true,
            id: '417812016',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/279c715c-d8af-493e-874d-8e6178375894.jpg?aki_policy=profile_x_medium',
            smartName: 'Carolina',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/279c715c-d8af-493e-874d-8e6178375894.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'September 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Debra',
            hasProfilePic: true,
            id: '86538949',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/695e4a92-d503-40db-8fd3-9ad3eaceb086.jpg?aki_policy=profile_x_medium',
            smartName: 'Debra',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/695e4a92-d503-40db-8fd3-9ad3eaceb086.jpg?aki_policy=profile_small'
          },
          comments: 'Fantastic place, very clean, easily accessible to beach and restaurants. Quiet neighbourhood with a grocery store at the base of the building!',
          createdAt: '2022-07-27T13:37:23Z',
          id: '680251045088490465',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Carolina',
            hasProfilePic: true,
            id: '417812016',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/279c715c-d8af-493e-874d-8e6178375894.jpg?aki_policy=profile_x_medium',
            smartName: 'Carolina',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/279c715c-d8af-493e-874d-8e6178375894.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'July 2022',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 47648,
          amountFormatted: '$47,648',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Salón con salida a la terraza (direct access to the terrace)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a3e38102-d9e2-4cc0-8dfc-a635fb64ea16.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a3e38102-d9e2-4cc0-8dfc-a635fb64ea16.jpg?aki_policy=small'
        },
        {
          caption: 'Acogedor salón con sofá cama (cozy living room with sofa bed)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/ba8787bb-2803-4f9a-9673-060dc39a283f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/ba8787bb-2803-4f9a-9673-060dc39a283f.jpeg?aki_policy=small'
        },
        {
          caption: 'Sofá cama (sofa bed)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/dc3b5390-3240-4f6e-9ef2-2b8c80b9d816.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/dc3b5390-3240-4f6e-9ef2-2b8c80b9d816.jpg?aki_policy=small'
        },
        {
          caption: 'Cocina americana completa (furnished open plan kitchen)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0afa3926-dc19-4a05-a887-dc2993f43896.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0afa3926-dc19-4a05-a887-dc2993f43896.jpg?aki_policy=small'
        },
        {
          caption: 'Comedor para 4 personas (dining area for 4)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/479df8d9-3dde-42e3-a85a-473de8cfe0d2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/479df8d9-3dde-42e3-a85a-473de8cfe0d2.jpg?aki_policy=small'
        },
        {
          caption: 'Decorado con gusto (well decorated flat)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2b6e3d04-4884-4c9f-82f0-381782d3e3a0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2b6e3d04-4884-4c9f-82f0-381782d3e3a0.jpg?aki_policy=small'
        },
        {
          caption: 'Decorado con gusto (well decorated flat)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1f5de42e-8b43-4741-b0a3-5177804df0ab.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1f5de42e-8b43-4741-b0a3-5177804df0ab.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/08e23198-19e4-4bc9-8cef-0d7f545e9d5d.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/08e23198-19e4-4bc9-8cef-0d7f545e9d5d.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/1783b895-099b-4ca0-a18e-f5e8d93751fb.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/1783b895-099b-4ca0-a18e-f5e8d93751fb.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/ff645181-7e98-4d74-9240-5d5d7960cfa2.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/ff645181-7e98-4d74-9240-5d5d7960cfa2.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/2549a32b-7948-4297-9c07-b1408b4f70a7.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/2549a32b-7948-4297-9c07-b1408b4f70a7.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/8886cebb-96a2-4808-ae16-ab2adb33be88.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/8886cebb-96a2-4808-ae16-ab2adb33be88.jpeg?aki_policy=small'
        },
        {
          caption: 'Cuenta con cafetera y microondas (coffee maker and microwave at your disposal)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/74146d03-2966-40bf-8e21-ea10aee720ff.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/74146d03-2966-40bf-8e21-ea10aee720ff.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio espacioso y moderno (modern and cosy bedroom)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3f7e5bd2-0aa4-4f64-8fde-0a2d6a6c5318.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3f7e5bd2-0aa4-4f64-8fde-0a2d6a6c5318.jpg?aki_policy=small'
        },
        {
          caption: 'Cama de matrimonio de 140cm (queen size bed)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/cf87acf3-5dda-4df9-a2ad-13f3ece97cca.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/cf87acf3-5dda-4df9-a2ad-13f3ece97cca.jpeg?aki_policy=small'
        },
        {
          caption: 'Welcoming flat',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2c666840-3f30-46ed-ae63-bcf35bf2f21b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2c666840-3f30-46ed-ae63-bcf35bf2f21b.jpg?aki_policy=small'
        },
        {
          caption: 'Cosy bedroom',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0f612446-f67c-4cbf-8441-db8426b98994.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0f612446-f67c-4cbf-8441-db8426b98994.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/4703d6b2-0b35-4113-8943-ee77e8f5193d.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/4703d6b2-0b35-4113-8943-ee77e8f5193d.jpeg?aki_policy=small'
        },
        {
          caption: 'Pensado para tu confort (comfort guaranteed)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2abf98d4-bb72-40fc-901c-2b4edf3d2b91.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2abf98d4-bb72-40fc-901c-2b4edf3d2b91.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/abfda7e7-ff8e-44e2-80a7-efc9dec302c6.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/abfda7e7-ff8e-44e2-80a7-efc9dec302c6.jpeg?aki_policy=small'
        },
        {
          caption: 'Accede a la terraza desde el dormitorio (direct terrace access from the bedroom)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/e418ecdb-d1b1-4ee4-867f-4555f4c91333.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/e418ecdb-d1b1-4ee4-867f-4555f4c91333.jpeg?aki_policy=small'
        },
        {
          caption: 'Access to the terrace from the living room',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6ed4ca57-bbf0-4ee0-b341-40bf76bf40eb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6ed4ca57-bbf0-4ee0-b341-40bf76bf40eb.jpg?aki_policy=small'
        },
        {
          caption: 'Welcoming terrace ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/52b0502c-0fd0-40c1-aa0f-9ebc46feb093.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/52b0502c-0fd0-40c1-aa0f-9ebc46feb093.jpg?aki_policy=small'
        },
        {
          caption: 'Terraza andaluza (andalusian terrace)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6a1db952-6380-4feb-9bf1-85e3a4646496.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6a1db952-6380-4feb-9bf1-85e3a4646496.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/cc3b6912-6cd4-437f-9359-3faaa878c573.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/cc3b6912-6cd4-437f-9359-3faaa878c573.jpeg?aki_policy=small'
        },
        {
          caption: 'Baño completo (full bathroom)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/5e6389f1-f87b-42c0-a40c-777babe7cf12.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/5e6389f1-f87b-42c0-a40c-777babe7cf12.jpeg?aki_policy=small'
        },
        {
          caption: 'Baño (bathroom)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/8c43ccdc-0f88-474d-8c85-a1c6fdce8fd7.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/8c43ccdc-0f88-474d-8c85-a1c6fdce8fd7.jpeg?aki_policy=small'
        },
        {
          caption: 'Ducha de lluvia (rain shower)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/483160f8-cba7-4092-bd90-d944c0c7a211.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/483160f8-cba7-4092-bd90-d944c0c7a211.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/d4e8ff96-8f4b-4534-a5ed-09f4dbedd0dd.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/d4e8ff96-8f4b-4534-a5ed-09f4dbedd0dd.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/0faf5860-e295-49b4-900f-7e7b6ab05fb2.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-51575629/original/0faf5860-e295-49b4-900f-7e7b6ab05fb2.jpeg?aki_policy=small'
        },
        {
          caption: 'Entrada al apartamento (entrance)',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5c4578d1-a410-4fb3-8575-098e54464daf.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5c4578d1-a410-4fb3-8575-098e54464daf.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 417812016,
        firstName: 'Carolina',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Carolina',
        about: '',
        memberSince: 'Joined in August 2021',
        languages: [],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '36 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/417812016',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/279c715c-d8af-493e-874d-8e6178375894.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/279c715c-d8af-493e-874d-8e6178375894.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/26708663',
      name: 'Casa Leti Málaga Centro,Paseo Marítimo (700mts.)',
      stars: 4.77,
      numberOfGuests: 6,
      address: 'Málaga, Andalucía, Spain',
      roomType: 'Entire townhouse',
      location: {
        lat: 36.70326,
        lng: -4.4436
      },
      reviews: [
        {
          author: {
            firstName: 'Fraser',
            hasProfilePic: true,
            id: '464431567',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/9092c592-88ff-40eb-a468-c07804f03cf3.jpg?aki_policy=profile_x_medium',
            smartName: 'Fraser',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9092c592-88ff-40eb-a468-c07804f03cf3.jpg?aki_policy=profile_small'
          },
          comments: 'Very good accommodation. Perfect for our needs. Very clean and outside space worked really well for BBQs',
          createdAt: '2022-08-09T12:44:47Z',
          id: '689646651856159289',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Leticia',
            hasProfilePic: true,
            id: '200819772',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/8303ba2a-891b-426a-a237-d08d093881c4.jpg?aki_policy=profile_x_medium',
            smartName: 'Leticia',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/8303ba2a-891b-426a-a237-d08d093881c4.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'August 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Lene',
            hasProfilePic: true,
            id: '108455726',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/27a16d25-07d7-428f-81ab-8a707cceb5b1.jpg?aki_policy=profile_x_medium',
            smartName: 'Lene',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/27a16d25-07d7-428f-81ab-8a707cceb5b1.jpg?aki_policy=profile_small'
          },
          comments: 'This is the best!!!<br/>Thank you for everything. You are a great host, the best I have experienced in all my travelling years! You made us feel  welcome and at ease from beginning to the end. <br/>You are a very kind and helpful host.<br/>Your flat is so nice, the children enjoyed very much to  come back to your place from Granada. <br/>I hope to come back again!<br/><br/>Lene vilslev',
          createdAt: '2022-04-26T14:58:37Z',
          id: '613612560715651855',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Leticia',
            hasProfilePic: true,
            id: '200819772',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/8303ba2a-891b-426a-a237-d08d093881c4.jpg?aki_policy=profile_x_medium',
            smartName: 'Leticia',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/8303ba2a-891b-426a-a237-d08d093881c4.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'April 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Somer',
            hasProfilePic: true,
            id: '421256828',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/51d32144-ae56-4feb-9df8-47bfc6a6a50f.jpg?aki_policy=profile_x_medium',
            smartName: 'Somer',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/51d32144-ae56-4feb-9df8-47bfc6a6a50f.jpg?aki_policy=profile_small'
          },
          comments: 'Beautiful MODERN space. Perfect, well stocked, kitchen and amazing back Terrace area. Comfortable. Host was Super accommodating and Very Friendly. Perfect little burger place right around the corner. Would recommend this place.',
          createdAt: '2021-09-14T13:21:45Z',
          id: '451214045158099397',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Leticia',
            hasProfilePic: true,
            id: '200819772',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/8303ba2a-891b-426a-a237-d08d093881c4.jpg?aki_policy=profile_x_medium',
            smartName: 'Leticia',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/8303ba2a-891b-426a-a237-d08d093881c4.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'September 2021',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 83564,
          amountFormatted: '$83,564',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/342276ea-ff1b-47a4-ac13-9eb166a50677.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/342276ea-ff1b-47a4-ac13-9eb166a50677.jpg?aki_policy=small'
        },
        {
          caption: 'Cocina',
          pictureUrl: 'https://a0.muscache.com/im/pictures/bec1fdf2-4d21-418c-b05c-2d7b91f7c815.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/bec1fdf2-4d21-418c-b05c-2d7b91f7c815.jpg?aki_policy=small'
        },
        {
          caption: 'Cocina',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4864e580-3a67-4b34-b2c0-59d858f92644.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4864e580-3a67-4b34-b2c0-59d858f92644.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3a165c0c-52ee-4996-b420-135e1ad4795b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3a165c0c-52ee-4996-b420-135e1ad4795b.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4b776d71-e21f-481f-abfe-5d8d5b173740.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4b776d71-e21f-481f-abfe-5d8d5b173740.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b4cdab6e-e64d-4a2e-b278-9f79e0d868e9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b4cdab6e-e64d-4a2e-b278-9f79e0d868e9.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/35410c73-1b36-409a-98fa-a2d556289bb9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/35410c73-1b36-409a-98fa-a2d556289bb9.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6fbbc5d1-854d-4b78-b814-5a4008393581.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6fbbc5d1-854d-4b78-b814-5a4008393581.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c39c08e5-9519-4610-b080-861234c03c5f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c39c08e5-9519-4610-b080-861234c03c5f.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f50b6ea4-b459-4700-8845-2a5420a0231d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f50b6ea4-b459-4700-8845-2a5420a0231d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/14563d32-2468-4ddb-830a-ea3684b928ec.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/14563d32-2468-4ddb-830a-ea3684b928ec.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/74b0a216-975a-4e67-9f1b-78450d9145db.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/74b0a216-975a-4e67-9f1b-78450d9145db.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/649778c3-6a06-4cd4-9b8c-23a72e8bf2cb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/649778c3-6a06-4cd4-9b8c-23a72e8bf2cb.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 200819772,
        firstName: 'Leticia',
        isSuperHost: true,
        hasProfilePic: true,
        smartName: 'Leticia',
        about: 'Soy una persona alegre ,cuidadosa,deportista me encanta viajar.......',
        memberSince: 'Joined in July 2018',
        languages: [
          'Italiano',
          'Español'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '90 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/200819772',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/8303ba2a-891b-426a-a237-d08d093881c4.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/8303ba2a-891b-426a-a237-d08d093881c4.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: true
    },
    {
      url: 'https://www.airbnb.com/rooms/28176127',
      name: 'Apartamento renovado',
      stars: 4.84,
      numberOfGuests: 2,
      address: 'Mundaka, Euskadi, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 43.41007,
        lng: -2.7012
      },
      reviews: [
        {
          author: {
            firstName: 'Camille',
            hasProfilePic: true,
            id: '433168415',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/5130be85-9a2d-4f1e-b292-5b71e3d046f5.jpg?aki_policy=profile_x_medium',
            smartName: 'Camille',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/5130be85-9a2d-4f1e-b292-5b71e3d046f5.jpg?aki_policy=profile_small'
          },
          comments: 'The flat was perfect! It had everything we needed and it felt cozy and comfortable. The location is also very great, It is just in front of the train station and it was near everything. Amaia was extremely nice with us and we are grateful for this 😊',
          createdAt: '2022-04-02T14:25:31Z',
          id: '596201284536056960',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Amaia',
            hasProfilePic: true,
            id: '212813304',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/73a1d217-ad46-48a9-877b-af40f87f9484.jpg?aki_policy=profile_x_medium',
            smartName: 'Amaia',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/73a1d217-ad46-48a9-877b-af40f87f9484.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'April 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Lauren',
            hasProfilePic: true,
            id: '53570873',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/fc42c8f3-79e4-48e0-8362-5bc2d1fd7c57.jpg?aki_policy=profile_x_medium',
            smartName: 'Lauren',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/fc42c8f3-79e4-48e0-8362-5bc2d1fd7c57.jpg?aki_policy=profile_small'
          },
          comments: 'We really enjoyed our stay in Mundaka. Amaia was a lively host. She met us at the station and walked us to the flat. We had everything we needed for our short stay. The place was well furnished and fit the description. We definitely recommend this place for a short stay in Mundaka!',
          createdAt: '2022-03-13T12:56:32Z',
          id: '581660981596701315',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Amaia',
            hasProfilePic: true,
            id: '212813304',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/73a1d217-ad46-48a9-877b-af40f87f9484.jpg?aki_policy=profile_x_medium',
            smartName: 'Amaia',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/73a1d217-ad46-48a9-877b-af40f87f9484.jpg?aki_policy=profile_small'
          },
          response: 'Muchas gracias por todo habéis sido muy amables ,cuidaros mucho',
          language: 'en',
          localizedDate: 'March 2022',
          localizedReview: {
            comments: '',
            disclaimer: 'Translated from English',
            needsTranslation: true,
            response: 'Thank you very much for everything you have been very kind ,take care of yourselves very much'
          }
        },
        {
          author: {
            firstName: 'Joe',
            hasProfilePic: true,
            id: '102599808',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/e9ae5c86-c6a2-4595-9808-2a3765a23f29.jpg?aki_policy=profile_x_medium',
            smartName: 'Joe',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/e9ae5c86-c6a2-4595-9808-2a3765a23f29.jpg?aki_policy=profile_small'
          },
          comments: 'Great little apartment and great location. Great stay',
          createdAt: '2021-10-30T13:56:33Z',
          id: '484571244192831220',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Amaia',
            hasProfilePic: true,
            id: '212813304',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/73a1d217-ad46-48a9-877b-af40f87f9484.jpg?aki_policy=profile_x_medium',
            smartName: 'Amaia',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/73a1d217-ad46-48a9-877b-af40f87f9484.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'October 2021',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 45397,
          amountFormatted: '$45,397',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ca9207eb-4d5f-4d73-ba26-89863f9fd878.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ca9207eb-4d5f-4d73-ba26-89863f9fd878.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/881ed12c-d9ce-43b4-b691-311e95c93443.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/881ed12c-d9ce-43b4-b691-311e95c93443.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ea04c357-6ebe-4d1f-97e3-9a93fd98defc.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ea04c357-6ebe-4d1f-97e3-9a93fd98defc.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/277005b3-8f15-4a56-b894-a43c055bc687.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/277005b3-8f15-4a56-b894-a43c055bc687.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e4f89fb2-1951-4ba6-aaa9-9afa7beb07c1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e4f89fb2-1951-4ba6-aaa9-9afa7beb07c1.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e7c22817-135e-40a8-9d9b-06d28045a170.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e7c22817-135e-40a8-9d9b-06d28045a170.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0bca07f1-8930-49dd-96bd-195069953ab8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0bca07f1-8930-49dd-96bd-195069953ab8.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/40d4f70f-53ca-4614-8ff6-0bf1f4b86519.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/40d4f70f-53ca-4614-8ff6-0bf1f4b86519.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/81398a6c-5584-4f31-8c81-2754dcc859ba.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/81398a6c-5584-4f31-8c81-2754dcc859ba.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f4c04d54-09f7-4854-84a9-85404d7cc04d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f4c04d54-09f7-4854-84a9-85404d7cc04d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f0666450-8164-4ddf-a7a7-93d3340cd0aa.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f0666450-8164-4ddf-a7a7-93d3340cd0aa.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/19c43b9c-77dd-415c-bc0d-34b02729e36a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/19c43b9c-77dd-415c-bc0d-34b02729e36a.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 212813304,
        firstName: 'Amaia',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Amaia',
        about: 'Apartamento recién renovado. Totalmente equipado. ',
        memberSince: 'Joined in August 2018',
        languages: [],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '126 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/212813304',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/73a1d217-ad46-48a9-877b-af40f87f9484.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/73a1d217-ad46-48a9-877b-af40f87f9484.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/18787101',
      name: 'Jolie villa bord de mer à 3 mn à pied de la plage',
      stars: 4.38,
      numberOfGuests: 5,
      address: 'Alcanar, Catalunya, Spain',
      roomType: 'Entire home',
      location: {
        lat: 40.60097,
        lng: 0.57632
      },
      reviews: [
        {
          author: {
            firstName: 'Nikolay',
            hasProfilePic: true,
            id: '7109280',
            pictureUrl: 'https://a0.muscache.com/im/users/7109280/profile_pic/1372177943/original.jpg?aki_policy=profile_x_medium',
            smartName: 'Nikolay',
            thumbnailUrl: 'https://a0.muscache.com/im/users/7109280/profile_pic/1372177943/original.jpg?aki_policy=profile_small'
          },
          comments: 'I recommend that lovely villa!!!',
          createdAt: '2019-08-08T11:38:04Z',
          id: '504664565',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Andre',
            hasProfilePic: true,
            id: '130746069',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/ff598bd5-8df1-4a46-8d47-e1cabc4514a8.jpg?aki_policy=profile_x_medium',
            smartName: 'Andre',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/ff598bd5-8df1-4a46-8d47-e1cabc4514a8.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'August 2019',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Antonia',
            hasProfilePic: true,
            id: '163825936',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/9fba906a-0802-4761-bb51-6fea17258392.jpg?aki_policy=profile_x_medium',
            smartName: 'Antonia',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9fba906a-0802-4761-bb51-6fea17258392.jpg?aki_policy=profile_small'
          },
          comments: 'Nette Wohnung ganz nah an einem kleinen, aber sehr schönen Strand mit Sand und Felsen am Rand gelegen.<br/>Man sollte wissen, dass es viele Hunde in der Nachbarschaft gibt.<br/>Cathy ist eine sehr aufmerksame Gastgeberin, die bei Problemen sofort zur Hilfe eilt.<br/><br/>Unbedingt empfehlenswert für Ausflüge in die nähere Umgebung sind Tortosa (wunderschöne Altstadt) und Hortas de San Joan (kleiner Ort mit kleinem Picasso-Museum in den Bergen).<br/>In La Rapita gibt es auf dem Markt samstags am oberen Rande des Ortes viel Kleidung und phantastische Oliven zu kaufen.',
          createdAt: '2022-08-13T12:35:18Z',
          id: '692540978960039291',
          collectionTag: null,
          rating: 4,
          recipient: {
            firstName: 'Andre',
            hasProfilePic: true,
            id: '130746069',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/ff598bd5-8df1-4a46-8d47-e1cabc4514a8.jpg?aki_policy=profile_x_medium',
            smartName: 'Andre',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/ff598bd5-8df1-4a46-8d47-e1cabc4514a8.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'de',
          localizedDate: 'August 2022',
          localizedReview: {
            comments: 'Nice apartment very close to a small but very nice beach with sand and rocks on the edge.<br/>You should know that there are many dogs in the neighborhood.<br/>Cathy is a very attentive host who rushes to help immediately in case of problems.<br/><br/>Definitely recommended for excursions nearby are Tortosa (beautiful old town) and Hortas de San Joan (small place with small Picasso museum in the mountains).<br/>In La Rapita, there is a lot of clothes and fantastic olives to buy at the market on Saturdays at the top of the place.',
            disclaimer: 'Translated from German',
            needsTranslation: true,
            response: null
          }
        },
        {
          author: {
            firstName: 'Yaëlle',
            hasProfilePic: true,
            id: '24101654',
            pictureUrl: 'https://a0.muscache.com/im/users/24101654/profile_pic/1438890652/original.jpg?aki_policy=profile_x_medium',
            smartName: 'Yaëlle',
            thumbnailUrl: 'https://a0.muscache.com/im/users/24101654/profile_pic/1438890652/original.jpg?aki_policy=profile_small'
          },
          comments: 'Nous avons passé 2 belles semaines de vacances au bord de la mer avec nos 3 enfants chez Sandrine et André. La maison est très agréable (cuisine équipée, climatisation, télé en Français pour les enfants, bbq parfait) et une terrasse pour les repas. Le jardin est joliment arboré, c’est très plaisant. <br/>Il y a en effet un studio au fond du jardin mais qui ne dérange pas du tout l’espace individuel. La route à côté est passante mais grâce à un passage piéton (dos d’âne), nous pouvons accéder facilement à une petite crique de galets et de sable très agréable. <br/>Nous souhaitons remercier très chaleureusement Cathy pour sa disponibilité et sa générosité.',
          createdAt: '2022-07-30T11:15:33Z',
          id: '682353981350153091',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Andre',
            hasProfilePic: true,
            id: '130746069',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/ff598bd5-8df1-4a46-8d47-e1cabc4514a8.jpg?aki_policy=profile_x_medium',
            smartName: 'Andre',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/ff598bd5-8df1-4a46-8d47-e1cabc4514a8.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'fr',
          localizedDate: 'July 2022',
          localizedReview: {
            comments: "We spent 2 beautiful weeks of beachfront vacation with our 3 children at Sandrine and André's. The house is very nice (equipped kitchen, air conditioning, French TV for children, perfect bbq) and a terrace for meals. The garden is beautifully wooded, it's very pleasant. <br/>There is indeed a studio at the back of the garden but which does not disturb the individual space at all. The road next door is busy but thanks to a pedestrian crossing (speed bump), we can easily access a small cove of pebbles and very pleasant sand. <br/>We would like to thank Cathy very warmly for her availability and generosity.",
            disclaimer: 'Translated from French',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 94093,
          amountFormatted: '$94,093',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'vue terrasse plein sud',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2e33e288-722f-489a-9165-13d565b5e385.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2e33e288-722f-489a-9165-13d565b5e385.jpg?aki_policy=small'
        },
        {
          caption: 'Terrasse ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/75fdded3-3201-4cec-a031-612d1df62342.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/75fdded3-3201-4cec-a031-612d1df62342.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7a94a305-b0c7-4ffb-b5e2-f6f5f9575a90.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7a94a305-b0c7-4ffb-b5e2-f6f5f9575a90.jpg?aki_policy=small'
        },
        {
          caption: 'Salon séjour ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/89f2f8c1-686a-48dc-a7bc-52e4a9058ce9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/89f2f8c1-686a-48dc-a7bc-52e4a9058ce9.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fc2c43dd-1c30-4567-b0a3-dcfaf0a924b7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fc2c43dd-1c30-4567-b0a3-dcfaf0a924b7.jpg?aki_policy=small'
        },
        {
          caption: 'cuisine aménagée et équipée\n',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7dec5992-8ec9-4cae-8c55-326eeef1be13.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7dec5992-8ec9-4cae-8c55-326eeef1be13.jpg?aki_policy=small'
        },
        {
          caption: "salle d'eau avec douche à l'italienne et meuble vasque\n",
          pictureUrl: 'https://a0.muscache.com/im/pictures/5638a9fb-b09f-4313-a61c-52cbcb8ce443.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5638a9fb-b09f-4313-a61c-52cbcb8ce443.jpg?aki_policy=small'
        },
        {
          caption: 'Chambre parentale avec lit en 160',
          pictureUrl: 'https://a0.muscache.com/im/pictures/82c28112-2bac-431e-aff7-d2100fbb98b0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/82c28112-2bac-431e-aff7-d2100fbb98b0.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e4cf33cd-df62-4ac0-a463-8e1bf1bb3ddd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e4cf33cd-df62-4ac0-a463-8e1bf1bb3ddd.jpg?aki_policy=small'
        },
        {
          caption: '3 ème chambre avec lit en 90',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3238802f-6168-4b3d-93df-4d0373d65095.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3238802f-6168-4b3d-93df-4d0373d65095.jpg?aki_policy=small'
        },
        {
          caption: 'petite crique à 3 minutes à pied de la maison\n',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5ea7b38d-fd85-43fc-9080-3dff7b2b8625.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5ea7b38d-fd85-43fc-9080-3dff7b2b8625.jpg?aki_policy=small'
        },
        {
          caption: "Terrasse de nuit pendant les fêtes de fin d'année ",
          pictureUrl: 'https://a0.muscache.com/im/pictures/d238e632-b252-4e37-8692-fd76d5abd640.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d238e632-b252-4e37-8692-fd76d5abd640.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 130746069,
        firstName: 'Andre',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Andre',
        about: '',
        memberSince: 'Joined in May 2017',
        languages: [
          'Français'
        ],
        hasInclusionBadge: false,
        badges: [
          '16 Reviews'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/130746069',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/ff598bd5-8df1-4a46-8d47-e1cabc4514a8.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/ff598bd5-8df1-4a46-8d47-e1cabc4514a8.jpg?aki_policy=profile_small'
      },
      additionalHosts: [
        {
          id: 24409429,
          firstName: 'Sandrine',
          isSuperHost: false,
          hasProfilePic: true,
          smartName: 'Sandrine',
          about: '',
          memberSince: 'Joined in December 2014',
          languages: [],
          responseRate: '100%',
          responseTime: 'within an hour',
          hasInclusionBadge: false,
          badges: [],
          hostUrl: 'https://www.airbnb.com/users/show/24409429',
          pictureUrl: 'https://a0.muscache.com/im/users/24409429/profile_pic/1417545694/original.jpg?aki_policy=profile_large',
          thumbnailUrl: 'https://a0.muscache.com/im/users/24409429/profile_pic/1417545694/original.jpg?aki_policy=profile_small'
        }
      ],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/43984457',
      name: 'Apartamento con piscina a 50 m de la playa.',
      stars: 4.73,
      numberOfGuests: 4,
      address: 'Isla Cristina, Andalucía, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 37.19692,
        lng: -7.31752
      },
      reviews: [
        {
          author: {
            firstName: 'Rafael',
            hasProfilePic: true,
            id: '76745779',
            pictureUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3',
            smartName: 'Rafael',
            thumbnailUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3'
          },
          comments: 'Todo muy bien, tal y como se ve publicitado en el anuncio. Nuria súper atenta. Todo genial.',
          createdAt: '2022-08-31T13:00:07Z',
          id: '705599434633992262',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Nuria',
            hasProfilePic: true,
            id: '93988910',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/fbfec818-67a4-4676-b5ad-629c7e0e5c0f.jpg?aki_policy=profile_x_medium',
            smartName: 'Nuria',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/fbfec818-67a4-4676-b5ad-629c7e0e5c0f.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'August 2022',
          localizedReview: {
            comments: 'Everything is very good, as advertised in the listing. Nuria was super attentive. Everything was great.',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        },
        {
          author: {
            firstName: 'Natxo',
            hasProfilePic: true,
            id: '45963312',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/73136469-65d6-4d90-8305-50989b435373.jpg?aki_policy=profile_x_medium',
            smartName: 'Natxo',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/73136469-65d6-4d90-8305-50989b435373.jpg?aki_policy=profile_small'
          },
          comments: 'El apartamento está genial y cuenta con todo lo necesario para una estancia cómoda y agradable. Con muchas facilidades por la zona y muy cerca de la playa para ir cómodamente a pie. Cuenta con una gran terraza que a pesar de no ser muy íntima, es bastante agradable. <br/><br/>Nuria ha sido muy atenta, amable y nos ha resuelto todas las dudas con agilidad. <br/><br/>Como única pega diría que las paredes de los apartamentos de este edificio son finas y se oía a los vecinos (y por consiguiente seguro que ellos a nosotros también). Aunque nada grave. <br/><br/>Si estás mirando algún apartamento por la zona, merece la pena alojarse aquí. Lo recomendamos al 100%.',
          createdAt: '2022-08-14T12:22:59Z',
          id: '693259562723179583',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Nuria',
            hasProfilePic: true,
            id: '93988910',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/fbfec818-67a4-4676-b5ad-629c7e0e5c0f.jpg?aki_policy=profile_x_medium',
            smartName: 'Nuria',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/fbfec818-67a4-4676-b5ad-629c7e0e5c0f.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'August 2022',
          localizedReview: {
            comments: 'The apartment is great and comes with everything you need for a comfortable and pleasant stay. With many facilities in the area and very close to the beach to walk comfortably. It has a large terrace that despite not being very intimate, is quite nice. <br/><br/>Nuria was very attentive, kind and answered all our questions quickly. <br/><br/>The only downside I would say that the walls of the apartments in this building are thin and you could hear the neighbors (and for sure they too). Nothing serious though. <br/><br/>If you are looking at any apartments in the area, it is worth staying here. We recommend it 100%.',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        },
        {
          author: {
            firstName: 'Rosi',
            hasProfilePic: true,
            id: '462705742',
            pictureUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3',
            smartName: 'Rosi',
            thumbnailUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3'
          },
          comments: 'Apartamento muy completo. Muy buena zona . Cerca de la playa y el pueblo',
          createdAt: '2022-07-31T14:59:15Z',
          id: '683191348218713874',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Nuria',
            hasProfilePic: true,
            id: '93988910',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/fbfec818-67a4-4676-b5ad-629c7e0e5c0f.jpg?aki_policy=profile_x_medium',
            smartName: 'Nuria',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/fbfec818-67a4-4676-b5ad-629c7e0e5c0f.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'July 2022',
          localizedReview: {
            comments: 'Very complete apartment. Very good area . Close to the beach and the village',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 47202,
          amountFormatted: '$47,202',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-43984457/original/7485cff2-8458-4d08-a4ea-91db4b20966d.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-43984457/original/7485cff2-8458-4d08-a4ea-91db4b20966d.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-43984457/original/8eba465e-0e02-4df6-8953-0f5e1b87a4c8.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-43984457/original/8eba465e-0e02-4df6-8953-0f5e1b87a4c8.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-43984457/original/443f68ca-f3e7-4904-8a93-a0a9ad681329.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-43984457/original/443f68ca-f3e7-4904-8a93-a0a9ad681329.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-43984457/original/250c5885-029a-423d-a02c-1d3dd552111c.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-43984457/original/250c5885-029a-423d-a02c-1d3dd552111c.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-43984457/original/4d9cd845-4c27-4dc6-bd6d-9269d107e8fd.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-43984457/original/4d9cd845-4c27-4dc6-bd6d-9269d107e8fd.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-43984457/original/8447becc-3f5d-4a09-a4df-df39c1fd1044.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-43984457/original/8447becc-3f5d-4a09-a4df-df39c1fd1044.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-43984457/original/d356329f-b91f-44b8-b726-152081dc0a10.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-43984457/original/d356329f-b91f-44b8-b726-152081dc0a10.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/38738959-1c73-45f2-a727-0c7c2871e754.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/38738959-1c73-45f2-a727-0c7c2871e754.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f83919c6-5c18-40fd-b22d-840bf4847ffe.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f83919c6-5c18-40fd-b22d-840bf4847ffe.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b8922b97-45c1-4474-8bb5-9484618b420e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b8922b97-45c1-4474-8bb5-9484618b420e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/def95857-6b94-4186-8b0e-690ae5f8a3dd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/def95857-6b94-4186-8b0e-690ae5f8a3dd.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cb0d5a79-5b75-4b12-b2fd-6e618da8b1c5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cb0d5a79-5b75-4b12-b2fd-6e618da8b1c5.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6be405b4-b5e1-446e-a975-121830432b76.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6be405b4-b5e1-446e-a975-121830432b76.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6ea30d52-7ff3-4db5-ab42-8691b6f582c0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6ea30d52-7ff3-4db5-ab42-8691b6f582c0.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/25afe937-5f56-41f6-baf7-032f4852ee7a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/25afe937-5f56-41f6-baf7-032f4852ee7a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/09017aca-bd7d-4599-a1db-b0cddc720218.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/09017aca-bd7d-4599-a1db-b0cddc720218.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5214d1fe-6044-4c3b-9e4c-52fd9c1e39ae.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5214d1fe-6044-4c3b-9e4c-52fd9c1e39ae.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 93988910,
        firstName: 'Nuria',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Nuria',
        about: '',
        memberSince: 'Joined in September 2016',
        languages: [],
        responseRate: '67%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '11 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/93988910',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/fbfec818-67a4-4676-b5ad-629c7e0e5c0f.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/fbfec818-67a4-4676-b5ad-629c7e0e5c0f.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/33220084',
      name: 'Charming Majorcan house in Porreres',
      stars: 4.67,
      numberOfGuests: 5,
      address: 'Porreres, Illes Balears, Spain',
      roomType: 'Entire home',
      location: {
        lat: 39.51467,
        lng: 3.02081
      },
      reviews: [
        {
          author: {
            firstName: 'Laura',
            hasProfilePic: true,
            id: '269485228',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/cc5eb1d4-949e-4788-b7c1-0aac1b06df66.jpg?aki_policy=profile_x_medium',
            smartName: 'Laura',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/cc5eb1d4-949e-4788-b7c1-0aac1b06df66.jpg?aki_policy=profile_small'
          },
          comments: 'the house is amazing! <br/>unfortunately we had a problem with a grill, the owners said that it’s broken and we have to wait for another one. the grill arrived on our last day despite the fact that we’ve asked for it 6 days earlier. also, we had to put together all the parts of the grill, we had to look for a screwdriver because it was incomplete, so it took us an hour to prepare it. <br/>however the place is great and it was a pleasure to be there.',
          createdAt: '2022-09-01T14:00:07Z',
          id: '706354407918950692',
          collectionTag: null,
          rating: 4,
          recipient: {
            firstName: 'Joan I Amaia',
            hasProfilePic: true,
            id: '12664284',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/b2602dda-68b6-4bd1-9e3a-b22d7ed2d4a1.jpg?aki_policy=profile_x_medium',
            smartName: 'Joan I Amaia',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/b2602dda-68b6-4bd1-9e3a-b22d7ed2d4a1.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'September 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Veaceslav',
            hasProfilePic: true,
            id: '62306527',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/246ad8c4-ca23-4398-8d50-73720bac4153.jpg?aki_policy=profile_x_medium',
            smartName: 'Veaceslav',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/246ad8c4-ca23-4398-8d50-73720bac4153.jpg?aki_policy=profile_small'
          },
          comments: 'Charming renovated traditional house.  It is very conveniently located and has everything needed. Enjoyed it a lot!',
          createdAt: '2022-07-30T12:31:46Z',
          id: '682392340154847260',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Joan I Amaia',
            hasProfilePic: true,
            id: '12664284',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/b2602dda-68b6-4bd1-9e3a-b22d7ed2d4a1.jpg?aki_policy=profile_x_medium',
            smartName: 'Joan I Amaia',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/b2602dda-68b6-4bd1-9e3a-b22d7ed2d4a1.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'July 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Alexander',
            hasProfilePic: true,
            id: '77233700',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/4c940b2b-5343-4a46-9704-8d2d13cd655e.jpg?aki_policy=profile_x_medium',
            smartName: 'Alexander',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/4c940b2b-5343-4a46-9704-8d2d13cd655e.jpg?aki_policy=profile_small'
          },
          comments: 'A very nice place, lots of space.  Joan was very helpful, answering any queries we had',
          createdAt: '2021-08-10T13:33:57Z',
          id: '425853036447973742',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Joan I Amaia',
            hasProfilePic: true,
            id: '12664284',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/b2602dda-68b6-4bd1-9e3a-b22d7ed2d4a1.jpg?aki_policy=profile_x_medium',
            smartName: 'Joan I Amaia',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/b2602dda-68b6-4bd1-9e3a-b22d7ed2d4a1.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'August 2021',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 60909,
          amountFormatted: '$60,909',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ad83c755-bb12-4b6e-8a40-34df4d3714d2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ad83c755-bb12-4b6e-8a40-34df4d3714d2.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/bf59cfb4-9a43-4a86-874a-6b1c197040b6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/bf59cfb4-9a43-4a86-874a-6b1c197040b6.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0184b1f7-450b-45bc-9387-69fd0595dbd1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0184b1f7-450b-45bc-9387-69fd0595dbd1.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d82d746c-61a1-45a6-8ffd-ddca9e6f0d74.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d82d746c-61a1-45a6-8ffd-ddca9e6f0d74.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b21f2d90-b73d-486f-a9b8-1d3f17d02cea.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b21f2d90-b73d-486f-a9b8-1d3f17d02cea.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d7a4d6af-d05d-4b5c-a9cf-e63495780aac.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d7a4d6af-d05d-4b5c-a9cf-e63495780aac.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b205f3bc-b52a-4b08-b2cc-6c9bffadb8fe.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b205f3bc-b52a-4b08-b2cc-6c9bffadb8fe.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/132a3fd7-a945-432d-b63c-064aaa026e21.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/132a3fd7-a945-432d-b63c-064aaa026e21.jpg?aki_policy=small'
        },
        {
          caption: 'Façana',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4a8061f6-877f-4dd5-a431-61c1ae9a54d9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4a8061f6-877f-4dd5-a431-61c1ae9a54d9.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/83089a34-2584-4919-8196-8c985009cab9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/83089a34-2584-4919-8196-8c985009cab9.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fd00a599-1a68-42d5-94c0-316346584784.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fd00a599-1a68-42d5-94c0-316346584784.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/46f5e24f-babf-406f-b99e-070ba27242bd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/46f5e24f-babf-406f-b99e-070ba27242bd.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e31088e4-c2e8-4188-8bae-8308f75e3521.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e31088e4-c2e8-4188-8bae-8308f75e3521.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e71ea8f2-f586-4bad-899c-5c07a37adc1b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e71ea8f2-f586-4bad-899c-5c07a37adc1b.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/946b0fbc-699e-45b7-a5a0-225f891fa5a2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/946b0fbc-699e-45b7-a5a0-225f891fa5a2.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a56ad9e3-ef66-4945-833c-3c9d58204cd3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a56ad9e3-ef66-4945-833c-3c9d58204cd3.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c32e9e93-91e5-48f2-b04a-b7dff9e54eea.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c32e9e93-91e5-48f2-b04a-b7dff9e54eea.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fbc220f7-98c7-42f8-aedc-f7ace4ba0019.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fbc220f7-98c7-42f8-aedc-f7ace4ba0019.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7fffeb58-2c46-40fe-ba37-bc2f217b227f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7fffeb58-2c46-40fe-ba37-bc2f217b227f.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4fa4006b-1eba-47d0-b683-180fc8817047.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4fa4006b-1eba-47d0-b683-180fc8817047.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/80767685-af7c-4caf-b08e-ddb29904a555.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/80767685-af7c-4caf-b08e-ddb29904a555.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d7c78c93-eb1d-47eb-a7a5-7a7288d10ab7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d7c78c93-eb1d-47eb-a7a5-7a7288d10ab7.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9e5a38a0-b10d-4218-aa87-5410fb93828a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9e5a38a0-b10d-4218-aa87-5410fb93828a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6d49d9a7-6b68-4678-854e-2b679ff46ceb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6d49d9a7-6b68-4678-854e-2b679ff46ceb.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/87a0d1d3-2fde-4798-a683-9b50520ddc33.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/87a0d1d3-2fde-4798-a683-9b50520ddc33.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2034ac64-b613-45d9-bae2-318e01f73947.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2034ac64-b613-45d9-bae2-318e01f73947.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/401e20cf-09a5-4b3e-9f5c-2ffb20235178.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/401e20cf-09a5-4b3e-9f5c-2ffb20235178.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/977cbaac-9b06-4bab-84b2-f704cd91092a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/977cbaac-9b06-4bab-84b2-f704cd91092a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1a9f96f4-3399-4bdf-ac37-36caf8d672a6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1a9f96f4-3399-4bdf-ac37-36caf8d672a6.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 12664284,
        firstName: 'Joan I Amaia',
        isSuperHost: true,
        hasProfilePic: true,
        smartName: 'Joan I Amaia',
        about: "Hola\r\n\r\nSom natiu de l'illa de Mallorca i m'interessa tot allò relacionat amb el turisme sostenible.\r\n\r\nCrec que aquesta pàgina és una bona manera de promoure aquesta sostenibilitat, de viatjar i conèixer gent nova. Espero conèixer-vos en breu!\r\n\r\nSoy nativo de Mallorca y me interesa todo aquello relacionado con el turismo sostenible.\r\n\r\nCreo que esta página es una buena manera de promover esta sostenibilidad, de viajar y conocer gente nueva. Espero conocerlos en breve !\r\n\r\n\r\nI am a native of Mallorca and I'm interested in everything related to sustainable tourism.\r\n\r\nI think this page is a good way to promote the sustainability of travel and meeting new people. I hope to meet you soon!\r\n\r\n\r\nIch bin gebürtig aus Mallorca und ich bin an allem interessiert zu nachhaltiger Tourismus.\r\n\r\nIch glaube, diese Seite ist ein guter Weg, um die Nachhaltigkeit der Reise und neue Leute kennen fördern. Ich hoffe, Sie bald zu treffen!",
        memberSince: 'Joined in February 2014',
        languages: [
          'English',
          'Français',
          'Italiano',
          'Español'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '447 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/12664284',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/b2602dda-68b6-4bd1-9e3a-b22d7ed2d4a1.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/b2602dda-68b6-4bd1-9e3a-b22d7ed2d4a1.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: true
    },
    {
      url: 'https://www.airbnb.com/rooms/53090182',
      name: 'Apartamento con encanto a pie de pistas con garaje y guarda esquis',
      stars: null,
      numberOfGuests: 4,
      address: 'Candanchú, Aragón, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 42.78598,
        lng: -0.52856
      },
      reviews: [],
      pricing: {
        rate: {
          amount: 31681,
          amountFormatted: '$31,681',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f2a43732-46b4-484e-9e81-1614bcdb147b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f2a43732-46b4-484e-9e81-1614bcdb147b.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/aacd7778-dcd5-4452-8c60-a7847e456cbb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/aacd7778-dcd5-4452-8c60-a7847e456cbb.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/dec967bb-9a20-493a-8249-e5050fc07e55.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/dec967bb-9a20-493a-8249-e5050fc07e55.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/71dcaea1-e826-48d0-97aa-2734da97e1ce.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/71dcaea1-e826-48d0-97aa-2734da97e1ce.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0d2fe561-e88d-4e3e-ba84-1ce501f8763d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0d2fe561-e88d-4e3e-ba84-1ce501f8763d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d7af87c7-972a-44b4-853e-35624f1bf547.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d7af87c7-972a-44b4-853e-35624f1bf547.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/debc5886-8d72-4684-8d7e-822e4b336986.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/debc5886-8d72-4684-8d7e-822e4b336986.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0c1516f7-2b6a-4f49-a0e6-6d9f655f7d49.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0c1516f7-2b6a-4f49-a0e6-6d9f655f7d49.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c2c6c2ea-69ac-4c07-afbc-02411b61320a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c2c6c2ea-69ac-4c07-afbc-02411b61320a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fd0e3251-a07a-4d03-8c74-24811579cd84.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fd0e3251-a07a-4d03-8c74-24811579cd84.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/17309c48-8abd-4847-a54a-97ac6ad31a60.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/17309c48-8abd-4847-a54a-97ac6ad31a60.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fd0b35e1-2747-4f03-82e8-780ad5df1823.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fd0b35e1-2747-4f03-82e8-780ad5df1823.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/abf9e6cb-53f2-45b4-ab1f-1a88a232b423.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/abf9e6cb-53f2-45b4-ab1f-1a88a232b423.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e70335bb-9f3d-4c9d-a5da-540a539dd6fe.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e70335bb-9f3d-4c9d-a5da-540a539dd6fe.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c4c38029-aa2d-4be8-95b6-09619eb44b08.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c4c38029-aa2d-4be8-95b6-09619eb44b08.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b8ec50cf-4b5c-42ed-b2fb-1125b1a4aa9d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b8ec50cf-4b5c-42ed-b2fb-1125b1a4aa9d.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 378252302,
        firstName: 'Lander',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Lander',
        about: '',
        memberSince: 'Joined in December 2020',
        languages: [],
        responseRate: '0%',
        responseTime: 'a few days or more',
        hasInclusionBadge: false,
        badges: [],
        hostUrl: 'https://www.airbnb.com/users/show/378252302',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/30b5a983-8183-4017-a5e3-cc211c452a5a.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/30b5a983-8183-4017-a5e3-cc211c452a5a.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/19422838',
      name: 'CHALET  CERCA PARQUE DE CABARCENO-SANTANDER.',
      stars: 4.46,
      numberOfGuests: 6,
      address: 'Camargo, Cantabria, Spain',
      roomType: 'Entire chalet',
      location: {
        lat: 43.40871,
        lng: -3.85952
      },
      reviews: [
        {
          author: {
            firstName: 'Philippe',
            hasProfilePic: true,
            id: '27046881',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/9cd10ec8-13fd-4764-b729-a25f554e460a.jpg?aki_policy=profile_x_medium',
            smartName: 'Philippe',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9cd10ec8-13fd-4764-b729-a25f554e460a.jpg?aki_policy=profile_small'
          },
          comments: 'The host canceled this reservation 193 days before arrival. This is an automated posting.',
          createdAt: '2018-01-13T14:05:02Z',
          id: '226949457',
          collectionTag: null,
          rating: 0,
          recipient: {
            firstName: 'Mercedes',
            hasProfilePic: true,
            id: '136173738',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_x_medium',
            smartName: 'Mercedes',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'January 2018',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Claude',
            hasProfilePic: true,
            id: '51318060',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/5ea89499-bb79-49dc-9a0a-afd106c51b19.jpg?aki_policy=profile_x_medium',
            smartName: 'Claude',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/5ea89499-bb79-49dc-9a0a-afd106c51b19.jpg?aki_policy=profile_small'
          },
          comments: 'Appartement très propre et accueil chaleureux',
          createdAt: '2022-09-06T11:54:07Z',
          id: '709914869219258525',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Mercedes',
            hasProfilePic: true,
            id: '136173738',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_x_medium',
            smartName: 'Mercedes',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'fr',
          localizedDate: 'September 2022',
          localizedReview: {
            comments: 'Very clean apartment and warm welcome',
            disclaimer: 'Translated from French',
            needsTranslation: true,
            response: null
          }
        },
        {
          author: {
            firstName: 'Miguel Angel',
            hasProfilePic: true,
            id: '118361854',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/6a2f367d-c1ea-4091-9ced-c274eb28f447.jpg?aki_policy=profile_x_medium',
            smartName: 'Miguel Angel',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/6a2f367d-c1ea-4091-9ced-c274eb28f447.jpg?aki_policy=profile_small'
          },
          comments: 'La casa está bien para 4 personas, le haría falta una renovación de sábanas y toallas, a la llegada la casa estaba muy limpia, en cuanto a ubicación está muy bien a 15 min de santander y de bastantes playas, cabarceno a 10 min',
          createdAt: '2022-08-23T13:53:27Z',
          id: '699828070239080230',
          collectionTag: null,
          rating: 3,
          recipient: {
            firstName: 'Mercedes',
            hasProfilePic: true,
            id: '136173738',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_x_medium',
            smartName: 'Mercedes',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'August 2022',
          localizedReview: {
            comments: 'The house is fine for 4 people, it would need a renovation of sheets and towels, on arrival the house was very clean, in terms of location it is very good 15 min from santander and several beaches, Cabarceno 10 min',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 68748,
          amountFormatted: '$68,748',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'CHALET',
          pictureUrl: 'https://a0.muscache.com/im/pictures/65baa0c6-27cd-4a0a-a521-8cd7a712d2cb.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/65baa0c6-27cd-4a0a-a521-8cd7a712d2cb.jpg?aki_policy=small'
        },
        {
          caption: 'CHALET NUEVO CERCA DEL PARQUE DE CABARCENO Y AEROPUERTO DE SANTANDER',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e84cc895-470a-48ca-a6b4-026a6b290e87.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e84cc895-470a-48ca-a6b4-026a6b290e87.jpg?aki_policy=small'
        },
        {
          caption: 'TERRAZA DE 50 m',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7a24bdd8-ce07-476f-9124-d742f9db7cb1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7a24bdd8-ce07-476f-9124-d742f9db7cb1.jpg?aki_policy=small'
        },
        {
          caption: 'COCINA AMERICANA',
          pictureUrl: 'https://a0.muscache.com/im/pictures/eec343f0-8bde-4595-92a9-a91680632401.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/eec343f0-8bde-4595-92a9-a91680632401.jpg?aki_policy=small'
        },
        {
          caption: 'CAMA DE MATRIMONIO',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b9e3b3f3-e144-447e-a405-81c05e989bcd.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b9e3b3f3-e144-447e-a405-81c05e989bcd.jpg?aki_policy=small'
        },
        {
          caption: "CAMA DE 1'35 m.",
          pictureUrl: 'https://a0.muscache.com/im/pictures/73d79d6c-2ee0-42a0-9eda-ffa30d5930ff.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/73d79d6c-2ee0-42a0-9eda-ffa30d5930ff.jpg?aki_policy=small'
        },
        {
          caption: 'BAÑO',
          pictureUrl: 'https://a0.muscache.com/im/pictures/91b07f9b-70a3-4b4b-a67e-2def414e0a3f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/91b07f9b-70a3-4b4b-a67e-2def414e0a3f.jpg?aki_policy=small'
        },
        {
          caption: 'DUCHA HIDROMASAJE',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ccfb3e2f-f999-45e0-9560-755f32570dca.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ccfb3e2f-f999-45e0-9560-755f32570dca.jpg?aki_policy=small'
        },
        {
          caption: 'BAÑO',
          pictureUrl: 'https://a0.muscache.com/im/pictures/58ea0ea3-05da-4c32-a9a6-ae75a4e71da0.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/58ea0ea3-05da-4c32-a9a6-ae75a4e71da0.jpg?aki_policy=small'
        },
        {
          caption: 'HABITACION MATRIMONIO',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a6843847-45bc-4810-a950-d51f5476f634.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a6843847-45bc-4810-a950-d51f5476f634.jpg?aki_policy=small'
        },
        {
          caption: 'HABITACION MATRIMONIO',
          pictureUrl: 'https://a0.muscache.com/im/pictures/22aa9b65-29bb-4aa0-9797-d02a37c312aa.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/22aa9b65-29bb-4aa0-9797-d02a37c312aa.jpg?aki_policy=small'
        },
        {
          caption: "HABITACION 2 CAMAS DE 1'05",
          pictureUrl: 'https://a0.muscache.com/im/pictures/a4e0374f-5b61-4c74-8742-9cd18c0e669f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a4e0374f-5b61-4c74-8742-9cd18c0e669f.jpg?aki_policy=small'
        },
        {
          caption: 'ESCRITORIO Y AIRE ACONDICIONADO FRIO-CALOR',
          pictureUrl: 'https://a0.muscache.com/im/pictures/eadd897f-8761-40dc-a937-7d19d00aa453.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/eadd897f-8761-40dc-a937-7d19d00aa453.jpg?aki_policy=small'
        },
        {
          caption: 'SALON-COCINA',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fc8c9006-1110-46c9-968a-b93f26ef61ab.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fc8c9006-1110-46c9-968a-b93f26ef61ab.jpg?aki_policy=small'
        },
        {
          caption: 'ESCRITORIO',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c107c8d8-1ab4-41b3-bec2-22e350a3ffa9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c107c8d8-1ab4-41b3-bec2-22e350a3ffa9.jpg?aki_policy=small'
        },
        {
          caption: 'MESA DE COCINA Y ARMARIO',
          pictureUrl: 'https://a0.muscache.com/im/pictures/39d7c08a-d3a7-4806-9874-f1be31c60f6e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/39d7c08a-d3a7-4806-9874-f1be31c60f6e.jpg?aki_policy=small'
        },
        {
          caption: 'COCINA AMERICANA',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c3c3990e-bbb8-46d2-854c-1e3bded3575a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c3c3990e-bbb8-46d2-854c-1e3bded3575a.jpg?aki_policy=small'
        },
        {
          caption: 'ENTRADA-TAQUILLON',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8a885c56-3332-4638-bee5-296bdaea59a2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8a885c56-3332-4638-bee5-296bdaea59a2.jpg?aki_policy=small'
        },
        {
          caption: 'VISITAR',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8c19aee6-acc8-40ca-ba83-46d8e7717ac6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8c19aee6-acc8-40ca-ba83-46d8e7717ac6.jpg?aki_policy=small'
        },
        {
          caption: 'VISITAR',
          pictureUrl: 'https://a0.muscache.com/im/pictures/da0690d8-e897-45f1-82f0-0eda2f6dadd4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/da0690d8-e897-45f1-82f0-0eda2f6dadd4.jpg?aki_policy=small'
        },
        {
          caption: 'VISITAR',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a2268afc-efce-4646-9fbe-8693d04892ce.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a2268afc-efce-4646-9fbe-8693d04892ce.jpg?aki_policy=small'
        },
        {
          caption: 'VISITAR RECOMENDADO',
          pictureUrl: 'https://a0.muscache.com/im/pictures/2c535083-1af1-45fb-96d7-a3816ccbc638.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/2c535083-1af1-45fb-96d7-a3816ccbc638.jpg?aki_policy=small'
        },
        {
          caption: 'CASA',
          pictureUrl: 'https://a0.muscache.com/im/pictures/dd8f0c9c-8504-451a-b058-9ee76c02ce4b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/dd8f0c9c-8504-451a-b058-9ee76c02ce4b.jpg?aki_policy=small'
        },
        {
          caption: 'BIENVENIDOS A MI CASA\nESTOY ENCANTADA DE RECIBIROS.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/bfefc137-c5fe-4ede-a5dd-916dcc24cbe8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/bfefc137-c5fe-4ede-a5dd-916dcc24cbe8.jpg?aki_policy=small'
        },
        {
          caption: 'ENTRADA',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8ff81ac2-ef79-4d02-8acd-f3fcbdfaca48.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8ff81ac2-ef79-4d02-8acd-f3fcbdfaca48.jpg?aki_policy=small'
        },
        {
          caption: 'TAQUILLON DE ENTRADA',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b46c1fd5-5148-4601-a4be-e567985b15cf.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b46c1fd5-5148-4601-a4be-e567985b15cf.jpg?aki_policy=small'
        },
        {
          caption: 'CENTRO BOTIN-RECIEN INAUGURADO EN LA PRECIOSA BAHIA DE SANTANDER-VISITAR',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8caf8803-2754-4266-9d72-eaac2ab9ac0b.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8caf8803-2754-4266-9d72-eaac2ab9ac0b.jpg?aki_policy=small'
        },
        {
          caption: 'MESA DE TERRAZA',
          pictureUrl: 'https://a0.muscache.com/im/pictures/bcb547c6-781c-4af7-b5ed-76ac0d94192e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/bcb547c6-781c-4af7-b5ed-76ac0d94192e.jpg?aki_policy=small'
        },
        {
          caption: 'TERRAZA CON TENDALES',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3360aa47-3158-491c-bc89-ba6a369b696d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3360aa47-3158-491c-bc89-ba6a369b696d.jpg?aki_policy=small'
        },
        {
          caption: 'SOFA -CAMA DE 1,50 m.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c056db06-33f8-422f-879b-9bf272d7906e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c056db06-33f8-422f-879b-9bf272d7906e.jpg?aki_policy=small'
        },
        {
          caption: 'sofa-cama',
          pictureUrl: 'https://a0.muscache.com/im/pictures/946eb1a8-32ce-49f8-80ac-9a0a09b7b166.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/946eb1a8-32ce-49f8-80ac-9a0a09b7b166.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 136173738,
        firstName: 'Mercedes',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Mercedes',
        about: 'SOY MERCEDES,   ALQUILO MI CASA PARA VACACIONES TODO EL AÑO.ESTOY ENCANTADA DE RECIBIROS.BIENVENIDOS TODOS.\r\nPUEDES CONTACTAR CONMIGO  CUANDO DESEES.\r\nSALUDOS VIAJEROS !!',
        memberSince: 'Joined in June 2017',
        languages: [],
        responseRate: '100%',
        responseTime: 'within a few hours',
        hasInclusionBadge: false,
        badges: [
          '30 Reviews',
          '1 Reference'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/136173738',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/e1408698-27e6-47ad-8d7c-1c1a9030a575.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/44102216',
      name: 'Habitación en la playa',
      stars: 5,
      numberOfGuests: 2,
      address: 'Salou, Catalunya, Spain',
      roomType: 'Private room in rental unit',
      location: {
        lat: 41.06865,
        lng: 1.14836
      },
      reviews: [
        {
          author: {
            firstName: 'Andrea',
            hasProfilePic: true,
            id: '245589228',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/d94a5f9c-697b-4ef8-94f9-bfa51666e0cb.jpg?aki_policy=profile_x_medium',
            smartName: 'Andrea',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/d94a5f9c-697b-4ef8-94f9-bfa51666e0cb.jpg?aki_policy=profile_small'
          },
          comments: 'We were very satisfied with accommodation it was well-equipped and location was very good and close to the beach :)',
          createdAt: '2022-03-06T12:07:25Z',
          id: '576562829992713313',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Artur',
            hasProfilePic: true,
            id: '59050036',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/a7e61f70-224b-4ef7-89b4-2d6cacfa2674.jpg?aki_policy=profile_x_medium',
            smartName: 'Artur',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/a7e61f70-224b-4ef7-89b4-2d6cacfa2674.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'March 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Ruiman',
            hasProfilePic: true,
            id: '424714604',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/4190a25d-0b9d-42ce-baa5-1ff8e3c5f9c7.jpg?aki_policy=profile_x_medium',
            smartName: 'Ruiman',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/4190a25d-0b9d-42ce-baa5-1ff8e3c5f9c7.jpg?aki_policy=profile_small'
          },
          comments: 'Si andas buscando una opción de solo una ducha y dormir cómo fue en mi caso, va bastante bien.<br/><br/>Nos dejó manta, toalla, gel del cuerpo y el W.C muy limpio.<br/><br/>En general todo bien y como comenté antes, alojamiento muy bien para ducha y dormir.<br/><br/>El Anfitrión buena comunicación y preocupación por su parte para saber cómo íbamos de camino y abrirnos la puerta a las 3:30h de la madrugada.<br/><br/>En general, muy bien todo.',
          createdAt: '2021-10-17T11:55:01Z',
          id: '475087985521019071',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Artur',
            hasProfilePic: true,
            id: '59050036',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/a7e61f70-224b-4ef7-89b4-2d6cacfa2674.jpg?aki_policy=profile_x_medium',
            smartName: 'Artur',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/a7e61f70-224b-4ef7-89b4-2d6cacfa2674.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'October 2021',
          localizedReview: {
            comments: "If you're looking for an option of just a shower and sleeping as it was in my case, that's pretty good.<br/><br/>She left us a very clean blanket, towel, body gel, and TOILET.<br/><br/>In general, everything was good and as I mentioned before, the accommodation was very good for showering and sleeping.<br/><br/>The Host was good communication and concern on his part to know how we were on our way and to open the door at 3:30 in the morning.<br/><br/>Overall, everything was very good.",
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        },
        {
          author: {
            firstName: 'O.G.',
            hasProfilePic: true,
            id: '82805431',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/f616cdaf-d4d9-4498-af39-f0885d85b283.jpg?aki_policy=profile_x_medium',
            smartName: 'O.G.',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/f616cdaf-d4d9-4498-af39-f0885d85b283.jpg?aki_policy=profile_small'
          },
          comments: 'Artur is very friendly.Evrything in apartment is very good.Very nice wiev in balcon...very good place for everything.I recomended this apartman.Nice holiday thank you.<br/>Todo en apartamento essta muy perfecto.Cerca esta playa,supermarket,cervecerias......etc.Y en balcony muy perfecto vista en mar.Muchas gracias Artur.',
          createdAt: '2020-09-29T13:44:02Z',
          id: '669325487',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Artur',
            hasProfilePic: true,
            id: '59050036',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/a7e61f70-224b-4ef7-89b4-2d6cacfa2674.jpg?aki_policy=profile_x_medium',
            smartName: 'Artur',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/a7e61f70-224b-4ef7-89b4-2d6cacfa2674.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'September 2020',
          localizedReview: {
            comments: 'Artur is very friendly.Evrything in apartment is very good.Very nice wiev in balcon...very good place for everything.I recomended this apartman.Nice holiday thank you.<br/>Everything in the apartment is very perfect. Close to this beach,supermarket,breweries... etc. And on a very perfect balcony, sea view. Thank you very much Artur.',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 26401,
          amountFormatted: '$26,401',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0f64adc6-3121-426f-99f8-ac7b830141b9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0f64adc6-3121-426f-99f8-ac7b830141b9.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d1cf7dce-3c1f-43a9-9bb4-5b07275a0395.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d1cf7dce-3c1f-43a9-9bb4-5b07275a0395.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/650c0eeb-c214-41d7-bc5e-74f0a1afa9ef.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/650c0eeb-c214-41d7-bc5e-74f0a1afa9ef.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5d635d3c-78ec-498e-97fd-3ee02449a8f4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5d635d3c-78ec-498e-97fd-3ee02449a8f4.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 59050036,
        firstName: 'Artur',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Artur',
        about: 'Always clean apartments',
        memberSince: 'Joined in February 2016',
        languages: [
          'English',
          'Español'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '88 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/59050036',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/a7e61f70-224b-4ef7-89b4-2d6cacfa2674.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/a7e61f70-224b-4ef7-89b4-2d6cacfa2674.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/882963',
      name: 'Dawn in Alicante Playa San Juan',
      stars: 4.9,
      numberOfGuests: 4,
      address: 'Alicante, Valencian Community, Spain',
      roomType: 'Entire condo',
      location: {
        lat: 38.36546,
        lng: -0.41012
      },
      reviews: [
        {
          author: {
            firstName: 'Rita',
            hasProfilePic: true,
            id: '444428824',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/05ce7669-84ee-4bc0-8288-d78f5f8754b3.jpg?aki_policy=profile_x_medium',
            smartName: 'Rita',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/05ce7669-84ee-4bc0-8288-d78f5f8754b3.jpg?aki_policy=profile_small'
          },
          comments: "This is a great APARTMENT.  The VIEWS are unbelievable with just a path between the L shaped balcony and the beach - we spent many happy hours on it.  Luis was a great HOST with instant responses to our few questions.  This is also a great LOCATION if you don't know it I would highly recommend it.   There are sufficient shops, cafes etc. without being overly commercial.  Its fairly quiet, relaxed .... lots of families.  Lots of water sports around.  There is easy accessible TRANSPORT: bus, tram, taxi.  I can't think of anything but positive to say .......",
          createdAt: '2022-07-14T14:18:01Z',
          id: '670849408898293723',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Luis F',
            hasProfilePic: true,
            id: '4720630',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/bbdc4ab0-2e04-4f21-afa8-86454c6be0ad.jpg?aki_policy=profile_x_medium',
            smartName: 'Luis F',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/bbdc4ab0-2e04-4f21-afa8-86454c6be0ad.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'July 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Taras',
            hasProfilePic: true,
            id: '21610508',
            pictureUrl: 'https://a0.muscache.com/im/users/21610508/profile_pic/1439661928/original.jpg?aki_policy=profile_x_medium',
            smartName: 'Taras',
            thumbnailUrl: 'https://a0.muscache.com/im/users/21610508/profile_pic/1439661928/original.jpg?aki_policy=profile_small'
          },
          comments: 'The apartment is located in a beautiful, quiet and picturesque place. Utility service in this quarter work very well, so the streets around you are always clean and well-groomed. The balcony-terrace in this apartment is simply the best, with a beautiful sea view. To protect from the sun, you can use blinds and awnings to spend the whole day here))))<br/>In the two bedrooms we found everything we needed (as well as extra blankets and pillows) so that the children and I could be accommodated. The living room was also very comfortable and spacious.<br/>The kitchen and bathroom are well equipped, but in my opinion already require plumbing repairs and renovation of kitchen utensils.<br/>In general, we had a great time and would not hesitate to stay in this place again.<br/>The owner reacts quickly and always tries to help find a solution.',
          createdAt: '2021-10-29T14:16:12Z',
          id: '483856358137505230',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Luis F',
            hasProfilePic: true,
            id: '4720630',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/bbdc4ab0-2e04-4f21-afa8-86454c6be0ad.jpg?aki_policy=profile_x_medium',
            smartName: 'Luis F',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/bbdc4ab0-2e04-4f21-afa8-86454c6be0ad.jpg?aki_policy=profile_small'
          },
          response: 'Thank you Mr. Taras. In the near future I am thinking about change plumbing of the flat, despite it works fine I guess. Also some utilities of kitchen, you are right!',
          localizedDate: 'October 2021',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Tetiana',
            hasProfilePic: true,
            id: '68697030',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/19b19d43-3698-41d7-87c6-07428f77801c.jpg?aki_policy=profile_x_medium',
            smartName: 'Tetiana',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/19b19d43-3698-41d7-87c6-07428f77801c.jpg?aki_policy=profile_small'
          },
          comments: 'This is perfect apartment with the stunning sea view.  Very light, spacious and cozy. Apartment is fully equipped and you will find everything you need for your comfort. <br/>Great location - a lot of cafes, restaurants, bus stop is near, apartment is not far from different stores.<br/> Luis is a real Super Host, very helpful and careful.<br/>Our vocation was perfect there.',
          createdAt: '2021-09-24T12:33:28Z',
          id: '458437499207875177',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Luis F',
            hasProfilePic: true,
            id: '4720630',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/bbdc4ab0-2e04-4f21-afa8-86454c6be0ad.jpg?aki_policy=profile_x_medium',
            smartName: 'Luis F',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/bbdc4ab0-2e04-4f21-afa8-86454c6be0ad.jpg?aki_policy=profile_small'
          },
          response: 'Thank you so much for your compliments!',
          localizedDate: 'September 2021',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 40409,
          amountFormatted: '$40,409',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Foto desde terraza',
          pictureUrl: 'https://a0.muscache.com/im/pictures/36e22be7-b253-4eae-becf-2d511e2aca76.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/36e22be7-b253-4eae-becf-2d511e2aca76.jpg?aki_policy=small'
        },
        {
          caption: 'Sunrise from flat',
          pictureUrl: 'https://a0.muscache.com/im/pictures/342fef64-2507-4eb4-948f-2dae3d364a3c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/342fef64-2507-4eb4-948f-2dae3d364a3c.jpg?aki_policy=small'
        },
        {
          caption: 'Piscina ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/905e4605-a7c7-447a-aefc-4ebc025f2248.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/905e4605-a7c7-447a-aefc-4ebc025f2248.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4f4d3e5b-6a63-4aff-9221-bd915eab887a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4f4d3e5b-6a63-4aff-9221-bd915eab887a.jpg?aki_policy=small'
        },
        {
          caption: 'Parque infantil ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c088423f-afef-4564-bcc1-b9fcf3422503.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c088423f-afef-4564-bcc1-b9fcf3422503.jpg?aki_policy=small'
        },
        {
          caption: 'Tendedero/ cloth tend',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3178fae5-7668-4e31-ada8-11564866f5e9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3178fae5-7668-4e31-ada8-11564866f5e9.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ada3b0cb-c10f-4de6-a2f8-6f085b6d5d55.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ada3b0cb-c10f-4de6-a2f8-6f085b6d5d55.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ea596319-c777-4a8b-9b6c-7c3b165e68d3.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ea596319-c777-4a8b-9b6c-7c3b165e68d3.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/33e4d8c2-0001-434c-b702-9d32be90985d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/33e4d8c2-0001-434c-b702-9d32be90985d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/11fb51e9-c92a-455a-bbc0-fc86c21424bc.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/11fb51e9-c92a-455a-bbc0-fc86c21424bc.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/14a73d32-248b-4f3a-ad09-7a083880d624.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/14a73d32-248b-4f3a-ad09-7a083880d624.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/45b38fbf-93b0-49c4-83b1-f2d8cec28805.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/45b38fbf-93b0-49c4-83b1-f2d8cec28805.jpg?aki_policy=small'
        },
        {
          caption: 'Terrace',
          pictureUrl: 'https://a0.muscache.com/im/pictures/453e0ded-c993-4432-913c-bc5bdea0759a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/453e0ded-c993-4432-913c-bc5bdea0759a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/49764dde-bc54-4513-adb6-f5dfaf1a7d71.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/49764dde-bc54-4513-adb6-f5dfaf1a7d71.jpg?aki_policy=small'
        },
        {
          caption: 'Lot 4. Height 220 CMS x 250 CMS wide',
          pictureUrl: 'https://a0.muscache.com/im/pictures/58a1d222-b824-47d9-8e78-f84c385bc363.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/58a1d222-b824-47d9-8e78-f84c385bc363.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5c4e84d0-99d1-4c95-ba5d-5a63db915a4f.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5c4e84d0-99d1-4c95-ba5d-5a63db915a4f.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 4720630,
        firstName: 'Luis F',
        isSuperHost: true,
        hasProfilePic: true,
        smartName: 'Luis F',
        about: 'Hola,\r\nme considero una persona amigo de mis amigos, me gusta VIAJAR cuando puedo, lectura variada, conocer gente interesante, escuchar música, practico deporte, amante de la naturaleza, gastronomía. Disfrutar en silencio escuchando las olas mientras la mirada se pierde en la inmensidad del mar. \r\nENGLISH SPOKEN  and Portuguese\r\n\r\n\r\n',
        memberSince: 'Joined in January 2013',
        languages: [
          'English',
          'Português',
          'Español'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '36 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/4720630',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/bbdc4ab0-2e04-4f21-afa8-86454c6be0ad.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/bbdc4ab0-2e04-4f21-afa8-86454c6be0ad.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: true
    },
    {
      url: 'https://www.airbnb.com/rooms/38478733',
      name: 'Fantástico apartamento en Matalascañas',
      stars: 4.91,
      numberOfGuests: 4,
      address: 'Matalascañas - Almonte, Andalucía, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 37.00869,
        lng: -6.56428
      },
      reviews: [
        {
          author: {
            firstName: 'Bruno',
            hasProfilePic: true,
            id: '160189754',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/4afc7b9e-d853-4e17-880f-bf3a05364426.jpg?aki_policy=profile_x_medium',
            smartName: 'Bruno',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/4afc7b9e-d853-4e17-880f-bf3a05364426.jpg?aki_policy=profile_small'
          },
          comments: 'A very bright and welcoming apartment. Nicely furnished, I very much enjoyed my stay here. Host Mamen was very responsive.  Be aware there is a bar next door, which may dissuade some, it did not bother me...',
          createdAt: '2022-10-08T11:53:18Z',
          id: '733107285599807139',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Mamen',
            hasProfilePic: true,
            id: '15252230',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/9b03ddf8-a538-478d-8834-b611c1bef99d.jpg?aki_policy=profile_x_medium',
            smartName: 'Mamen',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9b03ddf8-a538-478d-8834-b611c1bef99d.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'October 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Naomi',
            hasProfilePic: true,
            id: '7413129',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/bb95de9e-88a6-43d0-b608-7f3bb29b3391.jpg?aki_policy=profile_x_medium',
            smartName: 'Naomi',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/bb95de9e-88a6-43d0-b608-7f3bb29b3391.jpg?aki_policy=profile_small'
          },
          comments: 'We had a really lovely time in Doñana National Park. Mamens flat was very clean and comfortable and in a perfect location for exploring this beautiful part of Spain!',
          createdAt: '2019-12-30T14:13:08Z',
          id: '584547818',
          collectionTag: null,
          rating: 4,
          recipient: {
            firstName: 'Mamen',
            hasProfilePic: true,
            id: '15252230',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/9b03ddf8-a538-478d-8834-b611c1bef99d.jpg?aki_policy=profile_x_medium',
            smartName: 'Mamen',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9b03ddf8-a538-478d-8834-b611c1bef99d.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'December 2019',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Ana María',
            hasProfilePic: true,
            id: '6588951',
            pictureUrl: 'https://a0.muscache.com/im/users/6588951/profile_pic/1435278233/original.jpg?aki_policy=profile_x_medium',
            smartName: 'Ana María',
            thumbnailUrl: 'https://a0.muscache.com/im/users/6588951/profile_pic/1435278233/original.jpg?aki_policy=profile_small'
          },
          comments: 'La estancia en el alojamiento de Mamen ha sido fantástica. No solo por lo limpio y quipado que está el apartamento, también porque la comunicación con ella ha sido fluida y fácil y ha estado disponible para todo lo que hemos necesitado. Sin dudas, un lugar muy recomendable para visitar y para volver.<br/>¡Mil gracias Mamen!',
          createdAt: '2022-07-29T14:19:58Z',
          id: '681722023189611071',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Mamen',
            hasProfilePic: true,
            id: '15252230',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/9b03ddf8-a538-478d-8834-b611c1bef99d.jpg?aki_policy=profile_x_medium',
            smartName: 'Mamen',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9b03ddf8-a538-478d-8834-b611c1bef99d.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'July 2022',
          localizedReview: {
            comments: "The stay at Mamen's place was fantastic. Not only because of how clean and tidy the apartment is, also because communication with her has been smooth and easy and she has been available for everything we have needed. Definitely a highly recommended place to visit and to return to.<br/>Thank you so much Mamen!",
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 52908,
          amountFormatted: '$52,908',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/326dd629-c5e3-4769-aedd-d8a5e0557087.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/326dd629-c5e3-4769-aedd-d8a5e0557087.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/5ff8cfb5-5166-4e05-b791-3289e46b158d.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/5ff8cfb5-5166-4e05-b791-3289e46b158d.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/0378681f-fcb2-4a53-8771-999f95f3a321.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/0378681f-fcb2-4a53-8771-999f95f3a321.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/897a5c21-7d65-448e-a648-3be9cfef4067.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/897a5c21-7d65-448e-a648-3be9cfef4067.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d316ef4c-64fe-4de3-b1c7-c729af034979.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d316ef4c-64fe-4de3-b1c7-c729af034979.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/ee778c94-a78b-4c87-ba11-0cbaedae35d5.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/ee778c94-a78b-4c87-ba11-0cbaedae35d5.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/61c65e4f-33ec-4922-a295-39f799c79eba.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/61c65e4f-33ec-4922-a295-39f799c79eba.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4cbfc6a6-e2f2-4752-aa5a-d6aa96eb0e3e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4cbfc6a6-e2f2-4752-aa5a-d6aa96eb0e3e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/85b02daf-65a5-4383-9acb-ea0193e35766.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/85b02daf-65a5-4383-9acb-ea0193e35766.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/6044490a-cb3e-4d7e-98d4-81cd060dca4d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/6044490a-cb3e-4d7e-98d4-81cd060dca4d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/941f6411-e2c1-40de-baa3-64e4c9250ba2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/941f6411-e2c1-40de-baa3-64e4c9250ba2.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c4bb62f8-65f7-4f3c-81c6-0c8653cb8133.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c4bb62f8-65f7-4f3c-81c6-0c8653cb8133.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/1cf46a1a-07e3-460c-a86e-05190c0e2ab9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/1cf46a1a-07e3-460c-a86e-05190c0e2ab9.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5342b563-8e44-4f8d-996a-26b59541a2a5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5342b563-8e44-4f8d-996a-26b59541a2a5.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/02e5eff4-3d26-4d51-ac4b-9d5dbae47da2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/02e5eff4-3d26-4d51-ac4b-9d5dbae47da2.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/e6f548e8-5113-4564-8e6c-8c4c0b93ddc0.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/e6f548e8-5113-4564-8e6c-8c4c0b93ddc0.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8fd22006-2de4-4201-b74c-ed1b498be0c7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8fd22006-2de4-4201-b74c-ed1b498be0c7.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/82558a48-7a0d-4d94-9596-7ca8ea4aedc7.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/82558a48-7a0d-4d94-9596-7ca8ea4aedc7.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/52eababf-809e-4b59-8066-2e0fd064b1ba.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/52eababf-809e-4b59-8066-2e0fd064b1ba.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/c633d325-1c30-4c24-983c-efb76f08b2db.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/c633d325-1c30-4c24-983c-efb76f08b2db.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/ae4a63cc-a8ce-4c9e-9a9c-9c42a3d5e3a5.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/ae4a63cc-a8ce-4c9e-9a9c-9c42a3d5e3a5.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/81488660-96b4-46f0-b384-91358a30d482.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/81488660-96b4-46f0-b384-91358a30d482.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/a09a9625-1635-4026-8196-961630b6bcb7.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/a09a9625-1635-4026-8196-961630b6bcb7.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/871f90ba-406e-4e01-861a-76aacdcda505.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-38478733/original/871f90ba-406e-4e01-861a-76aacdcda505.jpeg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 15252230,
        firstName: 'Mamen',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Mamen',
        about: 'Vivo a una hora de Sevilla, en la costa de Huelva, junto a Parque Nacional de Doñana. Soy una enamorada de ésta ciudad \r\n',
        memberSince: 'Joined in May 2014',
        languages: [
          'English',
          'Español'
        ],
        responseRate: '100%',
        responseTime: 'within a few hours',
        hasInclusionBadge: false,
        badges: [
          '86 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/15252230',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/9b03ddf8-a538-478d-8834-b611c1bef99d.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9b03ddf8-a538-478d-8834-b611c1bef99d.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/23500882',
      name: 'ALOJAMIENTO 1°LINEA PLAYA/BEACHFRONT ACCOMMODATION',
      stars: 4.93,
      numberOfGuests: 3,
      address: 'Málaga, Andalucía, Spain',
      roomType: 'Entire home',
      location: {
        lat: 36.72199,
        lng: -4.37277
      },
      reviews: [
        {
          author: {
            firstName: 'M',
            hasProfilePic: true,
            id: '270013278',
            pictureUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3',
            smartName: 'M',
            thumbnailUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3'
          },
          comments: 'Wonderful location and great communication.',
          createdAt: '2022-11-17T15:30:52Z',
          id: '762207819825201277',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Antonio',
            hasProfilePic: true,
            id: '66376156',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/2c1c6045-f890-4cca-88cb-909028c6b7bb.jpg?aki_policy=profile_x_medium',
            smartName: 'Antonio',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/2c1c6045-f890-4cca-88cb-909028c6b7bb.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'November 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Emma',
            hasProfilePic: true,
            id: '44035960',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/04229acb-e7f6-4a27-905c-93a27a528cda.jpg?aki_policy=profile_x_medium',
            smartName: 'Emma',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/04229acb-e7f6-4a27-905c-93a27a528cda.jpg?aki_policy=profile_small'
          },
          comments: 'Beautiful roof terrace- so spacious. Kitchen was easy to use, bathroom nice and bed comfortable.  It is very charming. The location is amazing! Very kind Pepe allowed us to stay on before our flight which was so nice. <br/>Recommended for all except those who are worried about stairs.',
          createdAt: '2022-11-07T13:31:09Z',
          id: '754899806068227083',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Antonio',
            hasProfilePic: true,
            id: '66376156',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/2c1c6045-f890-4cca-88cb-909028c6b7bb.jpg?aki_policy=profile_x_medium',
            smartName: 'Antonio',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/2c1c6045-f890-4cca-88cb-909028c6b7bb.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'November 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Daniel',
            hasProfilePic: true,
            id: '42111700',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/ee183c1c-7dba-4d13-840b-d99647ae6ec1.jpg?aki_policy=profile_x_medium',
            smartName: 'Daniel',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/ee183c1c-7dba-4d13-840b-d99647ae6ec1.jpg?aki_policy=profile_small'
          },
          comments: 'Beautiful spot, easy bus into málaga',
          createdAt: '2022-10-23T12:00:39Z',
          id: '743982616449288925',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Antonio',
            hasProfilePic: true,
            id: '66376156',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/2c1c6045-f890-4cca-88cb-909028c6b7bb.jpg?aki_policy=profile_x_medium',
            smartName: 'Antonio',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/2c1c6045-f890-4cca-88cb-909028c6b7bb.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'October 2022',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 43101,
          amountFormatted: '$43,101',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Desde la terraza disponemos de vistas al mar, al puerto de Málaga y barcos que navegan.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4b73d91b-cc72-4e26-ba3c-70f0cd181d52.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4b73d91b-cc72-4e26-ba3c-70f0cd181d52.jpg?aki_policy=small'
        },
        {
          caption: 'Amplia terraza con vistas al mar con espacio chill out.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f07970be-237e-4bd5-9aca-3b917a494204.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f07970be-237e-4bd5-9aca-3b917a494204.jpg?aki_policy=small'
        },
        {
          caption: 'Amplia terraza con vistas al mar. Totalmente equipada: dos hamacas, mesa y sillas, y zona chill out.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/fe77942d-33b6-4a48-9c32-cde5ee4c067e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/fe77942d-33b6-4a48-9c32-cde5ee4c067e.jpg?aki_policy=small'
        },
        {
          caption: 'Vistas hacia la zona Este de Málaga.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/94d72e3d-08cf-4021-9f3d-3aaa7bffae02.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/94d72e3d-08cf-4021-9f3d-3aaa7bffae02.jpg?aki_policy=small'
        },
        {
          caption: 'Salón con acceso a la terraza. El salón dispone de un sofá de tres plazas, un sillón, un sillón hamaca, aire acondicionado, televisión y una mesa de estudio con silla para teletrabajar.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ac2e723e-4613-435d-96fe-250e078a87a5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ac2e723e-4613-435d-96fe-250e078a87a5.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio con cama de matrimonio y cuna, totalmente vestidas y con toallas. Se cambia el perchero por la cuna en caso de que el huésped lo solicite. ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/aeb9d5d3-6d0f-48a7-9a75-56318d566ff9.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/aeb9d5d3-6d0f-48a7-9a75-56318d566ff9.jpg?aki_policy=small'
        },
        {
          caption: 'Dormitorio. Cama de matrimonio y cuna.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d6825ae0-4041-455a-9c12-b3b318c1cd2c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d6825ae0-4041-455a-9c12-b3b318c1cd2c.jpg?aki_policy=small'
        },
        {
          caption: 'Baño exterior totalmente equipado.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/39dd61f6-5398-40ce-8ebd-74e2d9d68ac4.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/39dd61f6-5398-40ce-8ebd-74e2d9d68ac4.jpg?aki_policy=small'
        },
        {
          caption: 'Baño con gran armario con dos puertas correderas de espejos.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4fad3ee4-2a52-45df-acdb-3375bb49acf6.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4fad3ee4-2a52-45df-acdb-3375bb49acf6.jpg?aki_policy=small'
        },
        {
          caption: 'Baño con toallas, champú y gel y equipado con todo lo necesario.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a79bf5cd-2e60-46b3-ab6c-807cd1bab1c2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a79bf5cd-2e60-46b3-ab6c-807cd1bab1c2.jpg?aki_policy=small'
        },
        {
          caption: 'Cocina con lavavajillas, vitrocerámica, horno, nevera y congelador, microondas, lavadora y con todos los utensilios necesarios. Todas las estancias son exteriores.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f9f30652-0b74-4342-8337-5a21ea9a14e8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f9f30652-0b74-4342-8337-5a21ea9a14e8.jpg?aki_policy=small'
        },
        {
          caption: 'Otra perspectiva de la cocina. Al piso se accede por la cocina y desde la cocina se accede por unas escaleras a la parte superior donde se encuentran la terraza, salón, dormitorio y baño.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cbfcf7c5-79ab-4546-8c93-6d0eceae7164.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cbfcf7c5-79ab-4546-8c93-6d0eceae7164.jpg?aki_policy=small'
        },
        {
          caption: 'Cocina con zona de comedor.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a0cebf71-9938-4e44-9f61-72d8869b9bb5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a0cebf71-9938-4e44-9f61-72d8869b9bb5.jpg?aki_policy=small'
        },
        {
          caption: 'Vistas al mar desde la terraza.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ce3ed792-dcb9-4cfd-b664-2e7853b8e3f2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ce3ed792-dcb9-4cfd-b664-2e7853b8e3f2.jpg?aki_policy=small'
        },
        {
          caption: 'Vistas al mar desde el salón.',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c4149a99-b52a-49ee-8276-759a31ba0348.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c4149a99-b52a-49ee-8276-759a31ba0348.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 66376156,
        firstName: 'Antonio',
        isSuperHost: true,
        hasProfilePic: true,
        smartName: 'Antonio',
        about: '',
        memberSince: 'Joined in April 2016',
        languages: [],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '142 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/66376156',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/2c1c6045-f890-4cca-88cb-909028c6b7bb.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/2c1c6045-f890-4cca-88cb-909028c6b7bb.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: true
    },
    {
      url: 'https://www.airbnb.com/rooms/21483159',
      name: 'O FIADEIRO',
      stars: 4.72,
      numberOfGuests: 6,
      address: 'Orense, Galicia, Spain',
      roomType: 'Entire home',
      location: {
        lat: 42.36254,
        lng: -7.93226
      },
      reviews: [
        {
          author: {
            firstName: 'Elvisay',
            hasProfilePic: true,
            id: '84464584',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/0867e4bd-f6d4-4fc6-941f-3bac8ebaaa74.jpg?aki_policy=profile_x_medium',
            smartName: 'Elvisay',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/0867e4bd-f6d4-4fc6-941f-3bac8ebaaa74.jpg?aki_policy=profile_small'
          },
          comments: 'A nice place for summer time',
          createdAt: '2019-12-27T15:30:36Z',
          id: '582625948',
          collectionTag: null,
          rating: 3,
          recipient: {
            firstName: 'Keka Y Pancho',
            hasProfilePic: true,
            id: '156041955',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/ec29b50c-859f-4ed3-b4f1-9ecbc005aeaf.jpg?aki_policy=profile_x_medium',
            smartName: 'Keka Y Pancho',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/ec29b50c-859f-4ed3-b4f1-9ecbc005aeaf.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'December 2019',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Marina',
            hasProfilePic: true,
            id: '76891915',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/e585a4e9-2c19-4508-a709-e346e73ead81.jpg?aki_policy=profile_x_medium',
            smartName: 'Marina',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/e585a4e9-2c19-4508-a709-e346e73ead81.jpg?aki_policy=profile_small'
          },
          comments: 'Very nice and cozy place. The house are stylish and you can feel yourself like in a good place to relax and forget about routine. <br/>Also we have met an interesting women who told us a story about the village and showed everything around (but she speaks just Spanish).',
          createdAt: '2019-08-22T22:53:59Z',
          id: '515031442',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Keka Y Pancho',
            hasProfilePic: true,
            id: '156041955',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/ec29b50c-859f-4ed3-b4f1-9ecbc005aeaf.jpg?aki_policy=profile_x_medium',
            smartName: 'Keka Y Pancho',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/ec29b50c-859f-4ed3-b4f1-9ecbc005aeaf.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'August 2019',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Alena',
            hasProfilePic: true,
            id: '250858844',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/9264397f-a75f-4566-bf36-3223eb00d420.jpg?aki_policy=profile_x_medium',
            smartName: 'Alena',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/9264397f-a75f-4566-bf36-3223eb00d420.jpg?aki_policy=profile_small'
          },
          comments: 'Thank you so much for such an outstanding stay !! <br/>Conchada is a glamorous countryside with splendid gardens and modest houses <br/>The owners showed genuine Galician hospitality, were truly kind and generous !! <br/>If you will be pacing by, do not hesitate to visit them ! <br/>They produce their own qualitative wine !<br/>We did not find any cons, it was an honor to experience such a vibrant stay during our first night in Galicia !!! <br/>Gracias again !!',
          createdAt: '2019-08-11T14:56:45Z',
          id: '507168823',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Keka Y Pancho',
            hasProfilePic: true,
            id: '156041955',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/ec29b50c-859f-4ed3-b4f1-9ecbc005aeaf.jpg?aki_policy=profile_x_medium',
            smartName: 'Keka Y Pancho',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/ec29b50c-859f-4ed3-b4f1-9ecbc005aeaf.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'August 2019',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 95170,
          amountFormatted: '$95,170',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Antiguo Fiadeiro rehabilitado ',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f7ded535-cf4b-4cc7-be8e-0d8b0c44bfd1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f7ded535-cf4b-4cc7-be8e-0d8b0c44bfd1.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4663bce6-7c6a-4f4d-ac63-f224f8cd344c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4663bce6-7c6a-4f4d-ac63-f224f8cd344c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/3d579b74-6d75-46a8-a560-32f5b76f7d64.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/3d579b74-6d75-46a8-a560-32f5b76f7d64.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/715ba6de-d33f-4b28-a25e-d38b7e2cf1e5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/715ba6de-d33f-4b28-a25e-d38b7e2cf1e5.jpg?aki_policy=small'
        },
        {
          caption: 'Cocina',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-21483159/original/27ec3b5a-a101-420e-9337-92f4c161442b.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-21483159/original/27ec3b5a-a101-420e-9337-92f4c161442b.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/7dbe70e3-18be-4824-a2a6-6c05f885ee4c.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/7dbe70e3-18be-4824-a2a6-6c05f885ee4c.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8afa5128-5a52-48f1-8173-34e4fdf9c4d2.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8afa5128-5a52-48f1-8173-34e4fdf9c4d2.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/9d0c5894-c83e-4412-8503-6a3b168f35ce.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/9d0c5894-c83e-4412-8503-6a3b168f35ce.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e7fd24a4-8ca1-4d23-9ad5-0fb64a8d5252.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e7fd24a4-8ca1-4d23-9ad5-0fb64a8d5252.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5407a661-b2a8-4dba-9124-2e8edc760394.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5407a661-b2a8-4dba-9124-2e8edc760394.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/8873e4b1-2b62-42a2-886e-bed1ed4d07cf.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/8873e4b1-2b62-42a2-886e-bed1ed4d07cf.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/67e1683e-f93d-43f5-a9ab-15b8f6baf7c7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/67e1683e-f93d-43f5-a9ab-15b8f6baf7c7.jpg?aki_policy=small'
        },
        {
          caption: 'pueblo con encanto',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cc8256a2-e69d-4cd5-b416-d121eff09d19.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cc8256a2-e69d-4cd5-b416-d121eff09d19.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/56f09281-c7ce-483f-b9d4-e428661d7262.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/56f09281-c7ce-483f-b9d4-e428661d7262.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/4038c5b1-4618-4e99-a79e-080c200b0e8d.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/4038c5b1-4618-4e99-a79e-080c200b0e8d.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/512daab8-1662-425f-aa95-2021ed423564.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/512daab8-1662-425f-aa95-2021ed423564.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/52d7bd20-173e-4c31-95f8-0012d8411ec8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/52d7bd20-173e-4c31-95f8-0012d8411ec8.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/a70d63fa-c02a-4f0e-83b9-8a9ae2abfec7.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/a70d63fa-c02a-4f0e-83b9-8a9ae2abfec7.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 156041955,
        firstName: 'Keka Y Pancho',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Keka Y Pancho',
        about: '',
        memberSince: 'Joined in October 2017',
        languages: [],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '60 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/156041955',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/ec29b50c-859f-4ed3-b4f1-9ecbc005aeaf.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/ec29b50c-859f-4ed3-b4f1-9ecbc005aeaf.jpg?aki_policy=profile_small'
      },
      additionalHosts: [
        {
          id: 194096212,
          firstName: 'Julia',
          isSuperHost: false,
          hasProfilePic: true,
          smartName: 'Julia',
          about: '',
          memberSince: 'Joined in June 2018',
          languages: [],
          responseRate: '100%',
          responseTime: 'within an hour',
          hasInclusionBadge: false,
          badges: [],
          hostUrl: 'https://www.airbnb.com/users/show/194096212',
          pictureUrl: 'https://a0.muscache.com/im/pictures/user/83ac5b7f-93f6-4304-9aa0-7eebce3da1a6.jpg?aki_policy=profile_large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/83ac5b7f-93f6-4304-9aa0-7eebce3da1a6.jpg?aki_policy=profile_small'
        }
      ],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/37779223',
      name: 'Apartamento céntrico CC Vialia con terraza',
      stars: 4.71,
      numberOfGuests: 2,
      address: 'Vigo, Galicia, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 42.2353,
        lng: -8.70737
      },
      reviews: [
        {
          author: {
            firstName: 'Noel',
            hasProfilePic: true,
            id: '6801936',
            pictureUrl: 'https://a0.muscache.com/im/users/6801936/profile_pic/1371054619/original.jpg?aki_policy=profile_x_medium',
            smartName: 'Noel',
            thumbnailUrl: 'https://a0.muscache.com/im/users/6801936/profile_pic/1371054619/original.jpg?aki_policy=profile_small'
          },
          comments: 'Excellent apartment, great location near the centre, nice quiet neighborhood and great host who is extremely helpful',
          createdAt: '2022-08-24T14:13:57Z',
          id: '700563168730479868',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Adriana',
            hasProfilePic: true,
            id: '285756351',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/714c16c0-cb1d-4b82-b5e5-970729e14c0b.jpg?aki_policy=profile_x_medium',
            smartName: 'Adriana',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/714c16c0-cb1d-4b82-b5e5-970729e14c0b.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'August 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Adrian',
            hasProfilePic: true,
            id: '228212843',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/e48b3eca-579f-42fc-9964-faab83cc001c.jpg?aki_policy=profile_x_medium',
            smartName: 'Adrian',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/e48b3eca-579f-42fc-9964-faab83cc001c.jpg?aki_policy=profile_small'
          },
          comments: 'calidad precio excelente. muy bonito.',
          createdAt: '2022-09-06T13:40:40Z',
          id: '709968503196909664',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Adriana',
            hasProfilePic: true,
            id: '285756351',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/714c16c0-cb1d-4b82-b5e5-970729e14c0b.jpg?aki_policy=profile_x_medium',
            smartName: 'Adriana',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/714c16c0-cb1d-4b82-b5e5-970729e14c0b.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'September 2022',
          localizedReview: {
            comments: 'excellent value for money. Very nice.',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        },
        {
          author: {
            firstName: 'David',
            hasProfilePic: true,
            id: '80469072',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/7669a308-153d-4714-ac29-3c7098dfed26.jpg?aki_policy=profile_x_medium',
            smartName: 'David',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/7669a308-153d-4714-ac29-3c7098dfed26.jpg?aki_policy=profile_small'
          },
          comments: 'El alojamiento estaba limpio y es tal y como se ve en las fotos. Muy cómodo Gracias a disponer de plaza de garaje (en el mismo bloque y a escasos metros del ascensor) y por tener una ubicación muy próxima al centro, fácil acceso a supermercados, sitios de restauración y el nuevecito centro comercial Vialia, en el que si vas con pequeños se podrán entretener.<br/><br/>Adriàn ha sido muy atenta y comunicativa. Nos recibió en persona y además deja en el apartamento algunas cosas básicas que todos necesitamos y que te facilitan el inicio de la estancia.',
          createdAt: '2022-08-30T14:30:29Z',
          id: '704920141790872438',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Adriana',
            hasProfilePic: true,
            id: '285756351',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/714c16c0-cb1d-4b82-b5e5-970729e14c0b.jpg?aki_policy=profile_x_medium',
            smartName: 'Adriana',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/714c16c0-cb1d-4b82-b5e5-970729e14c0b.jpg?aki_policy=profile_small'
          },
          response: null,
          language: 'es',
          localizedDate: 'August 2022',
          localizedReview: {
            comments: 'The place was clean and exactly as shown in the photos. Very comfortable. Thanks to having a garage space (in the same block and a few meters from the elevator) and for having a very close location to downtown, easy access to supermarkets, restaurant sites and the new Vialia shopping center, where if you go with little ones you can entertain.<br/><br/>Adriàn has been very attentive and communicative. He welcomed us in person and also leaves in the apartment some basic things that we all need and that make it easier for you to start your stay.',
            disclaimer: 'Translated from Spanish',
            needsTranslation: true,
            response: null
          }
        }
      ],
      pricing: {
        rate: {
          amount: 52929,
          amountFormatted: '$52,929',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: 'Dormitorio principal',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-37779223/original/c51f1ba0-b4ab-4669-a567-5ba78b5ebe83.png?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-37779223/original/c51f1ba0-b4ab-4669-a567-5ba78b5ebe83.png?aki_policy=small'
        },
        {
          caption: 'Dormitorio principal con ventanal',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-37779223/original/0170996c-b92d-4811-9cd8-38195c086c55.png?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-37779223/original/0170996c-b92d-4811-9cd8-38195c086c55.png?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/06453a0e-3503-41b0-b0b2-4328a9ab4779.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/06453a0e-3503-41b0-b0b2-4328a9ab4779.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/b5b2cfcc-cc93-4bb9-a65b-f209d7115497.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/b5b2cfcc-cc93-4bb9-a65b-f209d7115497.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/df909dce-8c11-4f24-99c8-1d9792e4f27e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/df909dce-8c11-4f24-99c8-1d9792e4f27e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/e3d51ab5-1426-4563-8813-8aed32fa2be8.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/e3d51ab5-1426-4563-8813-8aed32fa2be8.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d4355d2d-2c28-49a5-a3ea-4ba17fa74274.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d4355d2d-2c28-49a5-a3ea-4ba17fa74274.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cc5b8ef8-6c6d-4c6f-97ec-2a34da8009d1.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cc5b8ef8-6c6d-4c6f-97ec-2a34da8009d1.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/ba3cca5c-50ac-4dc8-9887-7a27cd98b918.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/ba3cca5c-50ac-4dc8-9887-7a27cd98b918.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 285756351,
        firstName: 'Adriana',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Adriana',
        about: '',
        memberSince: 'Joined in August 2019',
        languages: [],
        responseRate: '75%',
        responseTime: 'within a few hours',
        hasInclusionBadge: false,
        badges: [
          '11 Reviews'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/285756351',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/714c16c0-cb1d-4b82-b5e5-970729e14c0b.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/714c16c0-cb1d-4b82-b5e5-970729e14c0b.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/16380263',
      name: 'Estudio acogedor',
      stars: 4.44,
      numberOfGuests: 2,
      address: 'Getafe, Comunidad de Madrid, Spain',
      roomType: 'Entire rental unit',
      location: {
        lat: 40.31119,
        lng: -3.73036
      },
      reviews: [
        {
          author: {
            firstName: 'Aanchal',
            hasProfilePic: true,
            id: '63105049',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/6169d84f-625d-4044-842a-98b1f9cabaea.jpg?aki_policy=profile_x_medium',
            smartName: 'Aanchal',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/6169d84f-625d-4044-842a-98b1f9cabaea.jpg?aki_policy=profile_small'
          },
          comments: 'Place was pretty far from Madrid City Centre, difficult to get back to late at night as the commuter train stops running. You can hear the neighbours and street noise, very loud when trying to sleep. Place was very clean but not ideal if you plan on going to city centre everyday.',
          createdAt: '2019-06-01T12:12:40Z',
          id: '461742745',
          collectionTag: null,
          rating: 3,
          recipient: {
            firstName: 'Yvon',
            hasProfilePic: true,
            id: '107289201',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/c08d97df-a8bd-4403-bfb5-e8a3bb36a30c.jpg?aki_policy=profile_x_medium',
            smartName: 'Yvon',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/c08d97df-a8bd-4403-bfb5-e8a3bb36a30c.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'June 2019',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Anastasia',
            hasProfilePic: true,
            id: '183305720',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/3c6821f8-7940-4030-bdba-9812a56c615e.jpg?aki_policy=profile_x_medium',
            smartName: 'Anastasia',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/3c6821f8-7940-4030-bdba-9812a56c615e.jpg?aki_policy=profile_small'
          },
          comments: 'this apartment is quite good, clean and comfortable, very close to the metro. thanks for your hospitality',
          createdAt: '2019-05-06T13:55:47Z',
          id: '449284555',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Yvon',
            hasProfilePic: true,
            id: '107289201',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/c08d97df-a8bd-4403-bfb5-e8a3bb36a30c.jpg?aki_policy=profile_x_medium',
            smartName: 'Yvon',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/c08d97df-a8bd-4403-bfb5-e8a3bb36a30c.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'May 2019',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Goryacheva',
            hasProfilePic: true,
            id: '50179259',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/7dc0a388-8e8e-49ce-9c74-cd1bdb9a6dfa.jpg?aki_policy=profile_x_medium',
            smartName: 'Goryacheva',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/7dc0a388-8e8e-49ce-9c74-cd1bdb9a6dfa.jpg?aki_policy=profile_small'
          },
          comments: 'Very good and clean place in Getafe, great value for money.',
          createdAt: '2018-12-16T14:55:08Z',
          id: '359131349',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Yvon',
            hasProfilePic: true,
            id: '107289201',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/c08d97df-a8bd-4403-bfb5-e8a3bb36a30c.jpg?aki_policy=profile_x_medium',
            smartName: 'Yvon',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/c08d97df-a8bd-4403-bfb5-e8a3bb36a30c.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'December 2018',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 68025,
          amountFormatted: '$68,025',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5b0c68f0-8edf-47ae-a588-d5e0c395f468.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5b0c68f0-8edf-47ae-a588-d5e0c395f468.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5d41503f-2a5b-468f-99a5-9803a5fb870a.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5d41503f-2a5b-468f-99a5-9803a5fb870a.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/f6c4344e-78f1-4bcc-a295-5d659d7fe187.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/f6c4344e-78f1-4bcc-a295-5d659d7fe187.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/cde6414c-614b-4376-bec3-6ab058e358b5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/cde6414c-614b-4376-bec3-6ab058e358b5.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/0a2d1fa9-d182-4ec9-b8b0-13a25b9525c5.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/0a2d1fa9-d182-4ec9-b8b0-13a25b9525c5.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/c66249e6-8dd2-470c-a234-b11317c16220.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/c66249e6-8dd2-470c-a234-b11317c16220.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/d098995e-0459-43ab-8e03-7657ebea078e.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/d098995e-0459-43ab-8e03-7657ebea078e.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/47d1d8f1-a1f0-47b6-8700-53b393794c99.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/47d1d8f1-a1f0-47b6-8700-53b393794c99.jpg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/5e1fd99c-ba25-4054-beaa-93080dd21526.jpg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/5e1fd99c-ba25-4054-beaa-93080dd21526.jpg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 107289201,
        firstName: 'Yvon',
        isSuperHost: false,
        hasProfilePic: true,
        smartName: 'Yvon',
        about: '',
        memberSince: 'Joined in December 2016',
        languages: [
          'English',
          'Español'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '62 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/107289201',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/c08d97df-a8bd-4403-bfb5-e8a3bb36a30c.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/c08d97df-a8bd-4403-bfb5-e8a3bb36a30c.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: false
    },
    {
      url: 'https://www.airbnb.com/rooms/53700232',
      name: 'VULYK on Sichovyh - Sauna -',
      stars: 5,
      numberOfGuests: 4,
      address: "L'viv, L'vivs'ka oblast, Ukraine",
      roomType: 'Entire rental unit',
      location: {
        lat: 49.83985,
        lng: 24.02321
      },
      reviews: [
        {
          author: {
            firstName: 'Eric',
            hasProfilePic: true,
            id: '95435869',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/43a592fb-7f35-432a-9afa-03d1fc12ddac.jpg?aki_policy=profile_x_medium',
            smartName: 'Eric',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/43a592fb-7f35-432a-9afa-03d1fc12ddac.jpg?aki_policy=profile_small'
          },
          comments: 'Perfect place. Anna was very helpful and communication was great. Thank You!',
          createdAt: '2022-12-22T11:52:03Z',
          id: '787464831588259044',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Anna',
            hasProfilePic: true,
            id: '17281349',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/cd2fea82-f700-4e4c-81b8-72d60b000948.jpg?aki_policy=profile_x_medium',
            smartName: 'Anna',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/cd2fea82-f700-4e4c-81b8-72d60b000948.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'December 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Ali',
            hasProfilePic: true,
            id: '309518439',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/2fc0aaab-5cb8-4102-8d57-b8e3a3feeeb5.jpg?aki_policy=profile_x_medium',
            smartName: 'Ali',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/2fc0aaab-5cb8-4102-8d57-b8e3a3feeeb5.jpg?aki_policy=profile_small'
          },
          comments: 'A wonderful house, very well decorated, warm and elegant.  I recommend',
          createdAt: '2022-12-17T13:59:20Z',
          id: '783905017950579117',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Anna',
            hasProfilePic: true,
            id: '17281349',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/cd2fea82-f700-4e4c-81b8-72d60b000948.jpg?aki_policy=profile_x_medium',
            smartName: 'Anna',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/cd2fea82-f700-4e4c-81b8-72d60b000948.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'December 2022',
          localizedReview: null
        },
        {
          author: {
            firstName: 'Sergey',
            hasProfilePic: true,
            id: '146869328',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/e8c9dd35-190c-460a-948d-86e8d05e7298.jpg?aki_policy=profile_x_medium',
            smartName: 'Sergey',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/e8c9dd35-190c-460a-948d-86e8d05e7298.jpg?aki_policy=profile_small'
          },
          comments: 'Cozy loft with beautiful design in the very heart of Lviv. Unfortunately walls are quite thin so you can hear neighbours.',
          createdAt: '2022-12-13T14:41:52Z',
          id: '781027322381401004',
          collectionTag: null,
          rating: 5,
          recipient: {
            firstName: 'Anna',
            hasProfilePic: true,
            id: '17281349',
            pictureUrl: 'https://a0.muscache.com/im/pictures/user/cd2fea82-f700-4e4c-81b8-72d60b000948.jpg?aki_policy=profile_x_medium',
            smartName: 'Anna',
            thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/cd2fea82-f700-4e4c-81b8-72d60b000948.jpg?aki_policy=profile_small'
          },
          response: null,
          localizedDate: 'December 2022',
          localizedReview: null
        }
      ],
      pricing: {
        rate: {
          amount: 90,
          amountFormatted: '$90',
          currency: 'USD',
          isMicrosAccuracy: false
        },
        rateType: 'nightly'
      },
      photos: [
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/bf89afbc-4517-4f14-8947-dcd0edd9ba60.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/bf89afbc-4517-4f14-8947-dcd0edd9ba60.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/44065de7-894d-4915-b765-e8b0b467a870.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/44065de7-894d-4915-b765-e8b0b467a870.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/63f69b6a-1cd6-4812-9cc5-c2c3fc64dfc0.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/63f69b6a-1cd6-4812-9cc5-c2c3fc64dfc0.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/817c7d75-d761-4bc8-9c07-a19be87f9aa3.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/817c7d75-d761-4bc8-9c07-a19be87f9aa3.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/b7acbb73-8bde-4113-966a-80eab69ac3ae.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/b7acbb73-8bde-4113-966a-80eab69ac3ae.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/7fd46831-9aa1-41eb-a023-3515ff3c78a9.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/7fd46831-9aa1-41eb-a023-3515ff3c78a9.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/addfb760-56c7-4d52-9112-b5ae114a0b8a.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/addfb760-56c7-4d52-9112-b5ae114a0b8a.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/920ae446-1f6e-456f-a266-862fdea9ea8f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/920ae446-1f6e-456f-a266-862fdea9ea8f.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/2f67af39-1f1c-4981-b45d-56bee1f4357e.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/2f67af39-1f1c-4981-b45d-56bee1f4357e.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/511cc7ee-5a5a-4574-9f44-8308dd3bd896.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/511cc7ee-5a5a-4574-9f44-8308dd3bd896.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/94401814-7fd6-4f68-a10e-89c8f44f331d.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/94401814-7fd6-4f68-a10e-89c8f44f331d.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/a531fa9a-e3b9-4aae-959c-fc900220eafc.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/a531fa9a-e3b9-4aae-959c-fc900220eafc.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/b36d9ea7-6d34-4673-b492-b9351e8dc2d1.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/b36d9ea7-6d34-4673-b492-b9351e8dc2d1.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/2b37139c-2243-4bfc-8e61-3e42d2ed3808.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/2b37139c-2243-4bfc-8e61-3e42d2ed3808.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/a900f099-fca5-4b9e-a166-cfb623361f69.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/a900f099-fca5-4b9e-a166-cfb623361f69.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/cc8edae7-7793-459a-9df7-71ad12289ebc.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/cc8edae7-7793-459a-9df7-71ad12289ebc.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/9f9893f0-b1ec-4b74-a78a-d48cfcd3ef8e.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/9f9893f0-b1ec-4b74-a78a-d48cfcd3ef8e.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/bd37d005-1f9e-4aec-8a83-749f7a346377.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/bd37d005-1f9e-4aec-8a83-749f7a346377.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/d4442332-92b4-4e43-ac38-8150a67ac901.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/d4442332-92b4-4e43-ac38-8150a67ac901.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/bbba6029-844f-4d01-a314-e25a52e706af.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/bbba6029-844f-4d01-a314-e25a52e706af.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/63806731-5009-4f82-b1c6-4faad3a09e5e.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/63806731-5009-4f82-b1c6-4faad3a09e5e.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/de0433bc-f29c-49c4-bafb-bffa578f28fe.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/de0433bc-f29c-49c4-bafb-bffa578f28fe.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/c3a85aa1-50e8-4ce4-8acf-e7c36ac939d7.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/c3a85aa1-50e8-4ce4-8acf-e7c36ac939d7.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/a8a0f93c-aa5d-41ba-a1ae-a5c1f54b0429.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/a8a0f93c-aa5d-41ba-a1ae-a5c1f54b0429.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/e0462cff-03ba-47f9-ab06-5296604c7ac3.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/e0462cff-03ba-47f9-ab06-5296604c7ac3.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/5b188908-5ef5-4680-a97e-4d2a7510f874.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/5b188908-5ef5-4680-a97e-4d2a7510f874.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/31ab0c04-629a-4e56-8ba5-75bebc6332c2.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/31ab0c04-629a-4e56-8ba5-75bebc6332c2.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/713ca4ec-0b2c-49a6-86a3-b16513fe9c1b.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/713ca4ec-0b2c-49a6-86a3-b16513fe9c1b.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/cbc2a9f3-ee9b-4ed3-ad7a-d395883aa34a.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/cbc2a9f3-ee9b-4ed3-ad7a-d395883aa34a.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/84aa2c34-5118-4dbd-b267-1f43a7832ae1.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/84aa2c34-5118-4dbd-b267-1f43a7832ae1.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/71151797-ded4-46bf-aa8b-ead372f55be1.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/71151797-ded4-46bf-aa8b-ead372f55be1.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/b3fda5b7-bf1d-4309-a66e-967cc021cf0d.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/b3fda5b7-bf1d-4309-a66e-967cc021cf0d.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/ce89c20e-48e9-40c0-830c-8f20c083e78a.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/ce89c20e-48e9-40c0-830c-8f20c083e78a.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/eb92342f-f47d-4d81-8d09-e72218308b31.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/eb92342f-f47d-4d81-8d09-e72218308b31.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/8617311a-c6fd-4075-b82b-1267173ef89c.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/8617311a-c6fd-4075-b82b-1267173ef89c.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/ccfe6b77-4bac-4abb-91f1-be16ca85d282.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/ccfe6b77-4bac-4abb-91f1-be16ca85d282.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/290c13e0-3f9c-4f3e-959a-64b5d672478d.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/290c13e0-3f9c-4f3e-959a-64b5d672478d.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/e19884ac-061b-46d7-bc5a-4007f6c27e45.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/e19884ac-061b-46d7-bc5a-4007f6c27e45.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/894333c7-182a-440d-a108-afe4e06585fb.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/894333c7-182a-440d-a108-afe4e06585fb.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/b7e6a8e6-962b-41ef-bd07-e6f25f7666f4.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/b7e6a8e6-962b-41ef-bd07-e6f25f7666f4.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/01a0d07f-ef2c-4340-99b4-3fc6c1cf3490.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/01a0d07f-ef2c-4340-99b4-3fc6c1cf3490.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/bf6ecf95-be62-4e69-b5cd-1db8e846bcc6.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/bf6ecf95-be62-4e69-b5cd-1db8e846bcc6.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/62bc54b6-8a75-473b-94a4-cd9de055a6f6.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/62bc54b6-8a75-473b-94a4-cd9de055a6f6.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/b3715db8-799f-45cc-a0b9-22f2d2c497ca.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/b3715db8-799f-45cc-a0b9-22f2d2c497ca.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/379d6c44-d2d4-4d35-9a83-88c3bf336715.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/379d6c44-d2d4-4d35-9a83-88c3bf336715.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/e4b90ed6-3850-4114-b999-c82d01148286.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/e4b90ed6-3850-4114-b999-c82d01148286.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/3456103f-2c31-430c-b904-96a86ae0a418.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/3456103f-2c31-430c-b904-96a86ae0a418.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/18022ce4-d517-418c-bd6a-dd8e2257db3f.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/18022ce4-d517-418c-bd6a-dd8e2257db3f.jpeg?aki_policy=small'
        },
        {
          caption: '',
          pictureUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/2805e944-fe67-4532-9d26-48221d26b2ca.jpeg?aki_policy=large',
          thumbnailUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-53700232/original/2805e944-fe67-4532-9d26-48221d26b2ca.jpeg?aki_policy=small'
        }
      ],
      primaryHost: {
        id: 17281349,
        firstName: 'Anna',
        isSuperHost: true,
        hasProfilePic: true,
        smartName: 'Anna',
        about: 'We are david and Anna , we are happy to welcome you in Lviv . Dont hesitate to contact us , we will be happy to answer and give you information!',
        memberSince: 'Joined in June 2014',
        languages: [
          'English',
          'Français',
          'Русский',
          'Українська'
        ],
        responseRate: '100%',
        responseTime: 'within an hour',
        hasInclusionBadge: false,
        badges: [
          '417 Reviews',
          'Identity verified'
        ],
        hostUrl: 'https://www.airbnb.com/users/show/17281349',
        pictureUrl: 'https://a0.muscache.com/im/pictures/user/cd2fea82-f700-4e4c-81b8-72d60b000948.jpg?aki_policy=profile_large',
        thumbnailUrl: 'https://a0.muscache.com/im/pictures/user/cd2fea82-f700-4e4c-81b8-72d60b000948.jpg?aki_policy=profile_small'
      },
      additionalHosts: [],
      isHostedBySuperhost: true
    }
  ])
  return {
    object
  }
})
