export type UseToggleReturnType<T> = readonly [T, () => void]

export type HasValueProperty<T> = T extends { value: boolean } ? T : never
