export interface AirtableRecord {
  id: string
  createdTime: string
  fields: {
    tags: string[]
    createdDate: string
    source: string
    title: string
    summary: string
    url: string
    // author: string
    image: Array<{
      id: string
      width: number
      height: number
      url: string
    }>
  }
}
