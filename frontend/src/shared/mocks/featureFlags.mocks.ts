export const FEATURE_FLAGS: IFeatureFlags = {
  INTERNATIONALIZATION: true,
  EDIT_PRODUCT: true,
  REMOVE_PRODUCT: true,
  CREATE_PRODUCT: true,
}

export interface IFeatureFlags {
  INTERNATIONALIZATION: boolean
  EDIT_PRODUCT: boolean
  REMOVE_PRODUCT: boolean
  CREATE_PRODUCT: boolean
}
