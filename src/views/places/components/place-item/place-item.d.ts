interface IGuests {
  adults: number
  children: number
  infants: number
}

interface ILocation{
  lat: number
  lng: number
}

interface IPhoto{
  caption: string
  pictureUrl: string
  thumbnailUrl: string
}

interface IAUthor{
  id: number
  firstName: string
  pictureUrl: string
}

interface IReview{
  author: IAUthor
  createdAt: string
  comments: string
}

interface IOrder{
  user_id: string
  place_id: number
  place_name: string
  guests: number
  dates: string[]
}

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
  location: ILocation[]
  reviews: IReview[]
  pricing: number
  photos: IPhoto[]
  primaryHost: string
  reserved_dates: Date[] | null
  safety: string[]
  features: string[]
  amenities_location: string[]
  essentials: string[]
}
