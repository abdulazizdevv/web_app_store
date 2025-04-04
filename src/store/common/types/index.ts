export interface IPoint {
  id: string
  city: string
  name: string
  address: string
  isActive: boolean
  location?: [number, number]
  floor?: string
  apartment?: string
  accommodation?: string
  building?: string
  to_address_description?: string
}
