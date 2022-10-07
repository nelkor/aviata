export const getRawJson = async (path: string) => {
  try {
    const res = await fetch(path)

    return res.json()
  } catch (e) {
    return null
  }
}
