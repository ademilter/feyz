import Airtable from 'airtable'
import { Record } from '@/types/airtable'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appeqvrnUnbvHVDmH'
)

const table = base('content')

export const getRecords = async ({
  pageSize = 2,
  offset = 0
}: {
  pageSize?: number
  offset?: number
}): Promise<Record[]> => {
  return new Promise((resolve, reject) => {
    table
      .select({
        cellFormat: 'json',
        view: 'Grid view',
        pageSize,
        offset
      })
      .eachPage(
        function page(records) {
          const data = records.map((record) => {
            const { id, fields } = record
            return { id, ...fields }
          }) as Record[]
          resolve(data)
        },
        function done(err) {
          if (err) {
            reject(err)
          }
        }
      )
  })
}
