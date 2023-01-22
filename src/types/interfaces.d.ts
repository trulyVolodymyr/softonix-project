interface IPlace {
  id: number
  name: string
  stars: number
  numberOfGuests: number
  bedrooms: number
  beds: number
  bathrooms: number
  propertyType: string
  address: string
  roomType: string
  location: string
  reviews: string | null
  pricing: number
  photos: string
  primaryHost: string
  reserved_dates: string
  safety: string[]
  features: string[]
  amenities_location: string[]
  essentials: string[]
}
// {
//   "id": 45,
//   "name": "La Catalpa Apartamento",
//   "stars": 4.7,
//   "numberOfGuests": 4,
//   "bedrooms": 3,
//   "beds": 5,
//   "bathrooms": 2,
//   "propertyType": "apartment",
//   "address": "Arasán, Aragón, Spain",
//   "roomType": "Entire",
//   "location": "{\"lat\":42.52512,\"lng\":0.50885}",
//   "reviews": null,
//   "pricing": 68753,
//   "photos": "[{\"caption\":\"Terraza jardín aparcamiento\",\"pictureUrl\":\"https://a0.muscache.com/im/pictures/ab2be421-7cca-4593-af01-94ad9d5fab69.jpg?aki_policy=large\",\"thumbnailUrl\":\"https://a0.muscache.com/im/pictures/ab2be421-7cca-4593-af01-94ad9d5fab69.jpg?aki_policy=small\"},{\"caption\":\"\",\"pictureUrl\":\"https://a0.muscache.com/im/pictures/06c9ace5-6d54-43fb-9771-f1a4314c09f0.jpg?aki_policy=large\",\"thumbnailUrl\":\"https://a0.muscache.com/im/pictures/06c9ace5-6d54-43fb-9771-f1a4314c09f0.jpg?aki_policy=small\"},{\"caption\":\"\",\"pictureUrl\":\"https://a0.muscache.com/im/pictures/140c3301-6ef0-4023-8399-9c67f22611b4.jpg?aki_policy=large\",\"thumbnailUrl\":\"https://a0.muscache.com/im/pictures/140c3301-6ef0-4023-8399-9c67f22611b4.jpg?aki_policy=small\"},{\"caption\":\"\",\"pictureUrl\":\"https://a0.muscache.com/im/pictures/c8d52e0c-5335-4452-965f-67059ba565d0.jpg?aki_policy=large\",\"thumbnailUrl\":\"https://a0.muscache.com/im/pictures/c8d52e0c-5335-4452-965f-67059ba565d0.jpg?aki_policy=small\"},{\"caption\":\"\",\"pictureUrl\":\"https://a0.muscache.com/im/pictures/248aefb5-e4f6-4026-8563-dd1f7184f630.jpg?aki_policy=large\",\"thumbnailUrl\":\"https://a0.muscache.com/im/pictures/248aefb5-e4f6-4026-8563-dd1f7184f630.jpg?aki_policy=small\"},{\"caption\":\"\",\"pictureUrl\":\"https://a0.muscache.com/im/pictures/538240b5-92ab-4a16-81fe-3009820ca091.jpg?aki_policy=large\",\"thumbnailUrl\":\"https://a0.muscache.com/im/pictures/538240b5-92ab-4a16-81fe-3009820ca091.jpg?aki_policy=small\"},{\"caption\":\"\",\"pictureUrl\":\"https://a0.muscache.com/im/pictures/bf731c90-68bf-4529-a824-5285656876ff.jpg?aki_policy=large\",\"thumbnailUrl\":\"https://a0.muscache.com/im/pictures/bf731c90-68bf-4529-a824-5285656876ff.jpg?aki_policy=small\"},{\"caption\":\"\",\"pictureUrl\":\"https://a0.muscache.com/im/pictures/7bb48be2-e56a-4566-8cfe-66dd849518d1.jpg?aki_policy=large\",\"thumbnailUrl\":\"https://a0.muscache.com/im/pictures/7bb48be2-e56a-4566-8cfe-66dd849518d1.jpg?aki_policy=small\"},{\"caption\":\"\",\"pictureUrl\":\"https://a0.muscache.com/im/pictures/b7174ef7-4fa8-446f-a022-9f828f9b285c.jpg?aki_policy=large\",\"thumbnailUrl\":\"https://a0.muscache.com/im/pictures/b7174ef7-4fa8-446f-a022-9f828f9b285c.jpg?aki_policy=small\"},{\"caption\":\"\",\"pictureUrl\":\"https://a0.muscache.com/im/pictures/e3ac0dc3-8ea4-4cbb-8b09-815d49cd26f6.jpg?aki_policy=large\",\"thumbnailUrl\":\"https://a0.muscache.com/im/pictures/e3ac0dc3-8ea4-4cbb-8b09-815d49cd26f6.jpg?aki_policy=small\"},{\"caption\":\"\",\"pictureUrl\":\"https://a0.muscache.com/im/pictures/ef8a6abd-1423-41f5-ae02-6e42de490a11.jpg?aki_policy=large\",\"thumbnailUrl\":\"https://a0.muscache.com/im/pictures/ef8a6abd-1423-41f5-ae02-6e42de490a11.jpg?aki_policy=small\"},{\"caption\":\"\",\"pictureUrl\":\"https://a0.muscache.com/im/pictures/6fc0facc-9dbc-4868-b64d-2da7feee37d6.jpg?aki_policy=large\",\"thumbnailUrl\":\"https://a0.muscache.com/im/pictures/6fc0facc-9dbc-4868-b64d-2da7feee37d6.jpg?aki_policy=small\"},{\"caption\":\"\",\"pictureUrl\":\"https://a0.muscache.com/im/pictures/5c2b9ad0-37b0-452f-9cff-f7c3a34cd5c4.jpg?aki_policy=large\",\"thumbnailUrl\":\"https://a0.muscache.com/im/pictures/5c2b9ad0-37b0-452f-9cff-f7c3a34cd5c4.jpg?aki_policy=small\"},{\"caption\":\"\",\"pictureUrl\":\"https://a0.muscache.com/im/pictures/98a9a2fd-323f-4fec-8289-243ada58b225.jpg?aki_policy=large\",\"thumbnailUrl\":\"https://a0.muscache.com/im/pictures/98a9a2fd-323f-4fec-8289-243ada58b225.jpg?aki_policy=small\"},{\"caption\":\"\",\"pictureUrl\":\"https://a0.muscache.com/im/pictures/ccecef3a-6f9b-40af-9286-3d94e6b9ddbc.jpg?aki_policy=large\",\"thumbnailUrl\":\"https://a0.muscache.com/im/pictures/ccecef3a-6f9b-40af-9286-3d94e6b9ddbc.jpg?aki_policy=small\"}]",
//   "primaryHost": "Mari Carmen",
//   "reserved_dates": "[\"\",\"\"]",
//   "safety": [
//       "Carbon monoxide alarm"
//   ],
//   "features": [
//       "Pool",
//       "Free parking on premises"
//   ],
//   "amenities_location": [
//       "Waterfront"
//   ],
//   "essentials": [
//       "Wifi",
//       "Washer",
//       "Air conditioning",
//       "Dedicated workspace",
//       "Hair dryer"
//   ]
// }
