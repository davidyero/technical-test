import { FEATURE_FLAGS } from '../shared/mocks/featureFlags.mocks.ts'

export const useFeatureFlags = () => {
  const getFeatureFlags = () => {
    return FEATURE_FLAGS
  }

  return {
    getFeatureFlags,
  }
}