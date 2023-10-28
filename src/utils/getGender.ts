export const getGender = (gender: string) => {
  switch (gender) {
    case '남자':
      return 'male'
    case '여자':
      return 'female'
    default:
      return 'male'
  }
}
