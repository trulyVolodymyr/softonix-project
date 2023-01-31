
interface IFilters{
  priceRange: number[]
  roomType: string
  propertyType: string
  beds: number
  bedrooms: number
  bathrooms: number
  essentials: string[]
  features: string[]
  location: string[]
  safety: string[]
}

interface IFiltersItem{
  getQueryWithValue: (filters: IFilters) => string
}
