interface IGuests {
  adults: number
  children: number
  infants: number
}

interface IPosition{
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
