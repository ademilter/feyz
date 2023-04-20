export interface Record {
  id: string
  tags: string[]
  createdDate: string
  author: string
  title: string
  summary: string
  url: string
  image: Array<{
    id: string
    width: number
    height: number
    url: string
    filename: string
    size: number
    type: string
    thumbnails: {
      small: {
        url: string
        width: number
        height: number
      }
      large: {
        url: string
        width: number
        height: number
      }
      full: {
        url: string
        width: number
        height: number
      }
    }
  }>
}
