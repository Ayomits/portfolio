import type { DOMKeyframesDefinition } from "motion"

type AnimationVariant<T extends DOMKeyframesDefinition = DOMKeyframesDefinition> = Record<string, T>
type AnimationLibrary<AV extends AnimationVariant = AnimationVariant> = Record<string, AV>

interface CreateAnimationLibraryGlobalOptions<AV extends AnimationVariant = AnimationVariant, AG extends AnimationLibrary = AnimationLibrary> {
  variants: AV
  animations: AG
}

function compareArrays(arr1: Array<unknown>, arr2: Array<unknown>) {
  return arr1.length === arr2.length && arr1.filter(item => arr2.includes(item))
}

function isEmptyObj(obj: object) {
  return Object.keys(obj).length === 0
}

export function createAnimationLibrary<
  AGV extends AnimationVariant = AnimationVariant,
  AG extends AnimationLibrary = AnimationLibrary
>(globalOptions: CreateAnimationLibraryGlobalOptions<AGV, AG>) {
  return function <AN extends AnimationLibrary = AnimationLibrary<AGV>>(animations: AN) {
    const mergedAnimations = { ...globalOptions.animations, ...animations }
    return Object.fromEntries(
      Object.entries(mergedAnimations).map(([key, value]) => {
        let obj: Record<string, DOMKeyframesDefinition> = {}
        const globalVariantKeys = Object.keys(globalOptions.variants)
        const localVariantKeys = Object.keys(value)
        const isEmpty = isEmptyObj(value)
        if (isEmpty) {
          obj = { ...globalOptions.variants }
        }
        if (compareArrays(globalVariantKeys, localVariantKeys) && !isEmpty) {
          for (const key in value) {
            if (globalVariantKeys.includes(key)) {
              obj[key] = { ...value[key], ...globalOptions.variants[key] }
            }
          }
        }
        return [key, { ...value, ...obj }]
      })
    ) as AN & AG
  }
}
