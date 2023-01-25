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
  created_at: Date
  price: number | undefined
}
interface IEditValue{
  name: string
  address: string
  guest: number
  bedrooms: number
  beds: number
  bathrooms: number
  essentials: string
  features: string
  amenities_location: string
  safety: string
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
  location: ILocation
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

interface IPostPlace{
  name: string
  numberOfGuests: number
  bedrooms: number
  beds: number
  bathrooms: number
  propertyType: string
  address: string
  roomType: string
  location: {
    lat: number
    lng: number
  }
  pricing: number
  photos: IPhoto[]
  primaryHost: string
  safety: string[]
  features: string[]
  amenities_location: string[]
  essentials: string[]
}
