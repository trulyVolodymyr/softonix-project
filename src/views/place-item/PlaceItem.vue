<template>
  <h3
    class="text-xl font-bold mb-3"
  >
    {{ place.name }}
  </h3>
  <div class="flex space-x-5 mb-3">
    <p>{{ place.address }}</p>
    <p>{{ place.reviews.length }} reviews</p>
    <div class="flex items-center space-x-1">
      <IconStar />
      <p class="text-sm">
        {{ place.stars }}
      </p>
    </div>
  </div>
  <div
    class="grid grid-cols-4 gap-4 mb-4"
  >
    <img
      v-for="item in place.photos.slice(0,5)"
      :key="item.pictureUrl"
      class="first-of-type:col-span-2 first-of-type:row-span-2"
      :src="item.pictureUrl"
      :alt="item.caption"
    >
  </div>
  <p
    class="text-lg font-bold"
  >
    {{ place.roomType }} hosted by {{ place.primaryHost.firstName }}
  </p>
  <p class="pb-4 border-b-[1px] border-black mb-3">
    {{ placeInfo }}
  </p>
  <div>
    <h3
      class="text-xl font-bold mb-3"
    >
      What this place offers
    </h3>
    <ul class="grid grid-cols-2 mb-8">
      <li v-for="item in place.amenities.essentials" :key="item">
        <p class="font-medium mb-1">
          - {{ item }}
        </p>
      </li>
      <li v-for="item in place.amenities.features" :key="item">
        <p class="font-medium mb-1">
          - {{ item }}
        </p>
      </li>
    </ul>

    <div class="grid gap-5 grid-container">
      <div
        v-for="item in place.reviews"
        :key="item.author.id"
        class="w-full mb-4"
      >
        <div
          class="flex mb-2"
        >
          <img
            class=" w-10 h-10 mr-8"
            :src="item.author.pictureUrl" :alt="item.author.firstName"
          >
          <div>
            <p class=" text-sm font-bold">
              {{ item.author.firstName }}
            </p>
            <p class=" text-sm font-bold">
              {{ formatDate(item.createdAt) }}
            </p>
          </div>
        </div>
        <p class="text-sm">
          {{ item.comments }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>

const placeInfo = computed(() => {
  const text = []
  if (place.value.numberOfGuests > 1) {
    text.push(`${place.value.numberOfGuests} guests /`)
  } else {
    text.push(`${place.value.numberOfGuests} guest /`)
  }

  if (place.value.bedrooms > 1) {
    text.push(` ${place.value.bedrooms} bedrooms /`)
  } else {
    text.push(` ${place.value.bedrooms} bedroom /`)
  }

  if (place.value.beds > 1) {
    text.push(` ${place.value.beds} beds /`)
  } else {
    text.push(` ${place.value.beds} bed /`)
  }

  if (place.value.bathrooms > 1) {
    text.push(` ${place.value.bathrooms} bathrooms`)
  } else {
    text.push(` ${place.value.bathrooms} bathroom`)
  }

  return text.join('')
})

function formatDate (date: string) {
  const d = new Date(date)
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  let month = '' + monthNames[(d.getMonth() + 1)]
  const year = d.getFullYear()

  if (month.length < 2) { month = '0' + month }

  return [month, year].join(' ')
}

const place = ref(
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
        comments: 'Amazing location of the apartment! Scooters to rent, thd beach, wonderful local restaurants, grocery shops and everything else which possibly you would need are just few steps away.Sergio was very pleasant and helpful giving some valuable tips to get around.',
        createdAt: '2019-08-26T12:42:36Z',
        rating: 5
      },
      {
        author: {
          firstName: 'Anna',
          pictureUrl: 'https://a0.muscache.com/im/pictures/user/0d28b2b3-176b-41e8-bec0-c092db9a2274.jpg?aki_policy=profile_x_medium'
        },
        comments: "Highly recommend. The place is exactly like advertised. Location is great. Literally a minute away from the beach. Buses are frequent and a taxi is only 7£ from the center. Food and bars down the street. It's a lovely area. The apartment has everything you need.",
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
  }
)
</script>

<style>
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(300px, 450px));
}
</style>
