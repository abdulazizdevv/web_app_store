import {
  CurrentVariantType,
  IBranch,
  IPaymentTypeObj,
  IMultiLang,
  ISavedModifier,
} from '../../_types'
import { IPoint } from '../common/types'

export interface CartState {
  cart: ICartItem[]
}

export interface IOption {
  label: string
  value: string
}

export interface IOrderType {
  id: string
  name?: IMultiLang
  image?: string
  type: 'hall' | 'self-pickup' | 'delivery' | string
}

export interface IPaymentType {
  id: string
  name: IMultiLang
  image: string
  integration: string
  type: 'cash' | 'online' | 'card' | string
}

export interface IOriginPropertyUpdated {
  options: {
    id: string
    title: { ru: string; en: string; uz: string }
    out_price: number
  }[]
}
export interface IModifier {
  modifier_id: string
  modifier_price: number
  modifier_quantity: number
}

export interface IModifierQuantityObj {
  id: string
  quantity: number
}

export interface ICartItem {
  review?: any
  min_qty?: number
  max_qty?: number
  is_optional?: boolean
  price_with_discount: number
  in_stop: boolean
  default_product: boolean
  product_id: string
  key: string
  quantity: number
  price: number
  variants: CurrentVariantType
  order_modifiers: ISavedModifier[]
  product_name: string
  category_name: string
  type: 'simple' | 'origin' | 'combo'
  comment: string
}

export interface IUser {
  name: string
  access_token: string
  date_of_birth: string
  phone: string
  id: string
}

export interface ISession {
  mobileAd: boolean
  caniuseCookies: boolean
  isLocation: boolean
  addressAccepted: boolean
  crm_table_id: string
  crm_table_number: string
  is_hall: string
  branch_id: string
  chat_id: string
  shipper_id: string
  source: string
  menu_id: string
  fcm_token: string
  platform_id: string
}

export interface IRedux {
  checkout: {
    payment_type: IPaymentTypeObj
    card: { id: string; mask: string; cardMask: string }
    accommodation: string
    apartment: string
    building: string
    floor: string
    description: string
    destination: string
    future_time: string | null
    is_courier_call: boolean
    is_operator_call: boolean
    is_preorder: boolean
    // not in this context but doesnt worth for another slice
    city: string
  }
  auth: {
    user: IUser
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
    message: string
    activeWindow: string
  }
  common: {
    future_order_time: string
    points: IPoint[]
    isMapModalLg: boolean
    isMapModal: boolean
    order_type: IOrderType | null
    location: [number, number] | null
    filter_by_tags: string[]
    filter_by: string
    branch: IBranch | null
    orderIds: any
    deliveryZoneId: string | null
    searchedProduct: string
    editingPoint: IPoint | null
    creatingPoint: boolean
  }
  cart: {
    cart: ICartItem[]
  }
  settings: {
    fcm_token: string
    country: { iso_code: 'UZ' | 'KZ'; currency: string }
    data: {
      shipper_id: string
      created_at: string
      data: {
        about_us?: IMultiLang
        about_us_images?: string[]
        address?: string
        color?: string
        fields?: Record<string, any>
        is_cumulative?: boolean
        is_operator?: boolean
        is_otp?: boolean
        is_promocode?: boolean
        logo?: string
        order_types?: IOrderType[]
        pages?: IOption[]
        payment_types?: IPaymentType[]
        app_store_link: string
        play_store_link: string
        shipper_name?: string
        social_media?: {
          instagram_link: string
          facebook_link?: string
          tik_tok_link?: string
          whatsup_link?: string
          youtube_link?: string
          tg_link?: string
        }
        web_site_languages: IOption[]
        address_placement?: 'beside_logo' | 'header_bottom' | 'hidden'
      }
      domain: string
      domain_id: string
      id: string
      last_active_date: string
      updated_at: string
    } | null
  }
  session: ISession
}
