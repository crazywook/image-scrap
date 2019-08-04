export interface LocalStorage<K> {
  get(key: keyof K): K[keyof K]
  set(key: keyof K, value)
  remove(key: keyof K)
}
