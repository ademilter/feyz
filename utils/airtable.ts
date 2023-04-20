import Airtable from 'airtable'
import { AirtableRecord } from '@/types/airtable'
import { DATA_PER_PAGE } from '@/utils/const'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appeqvrnUnbvHVDmH'
)

const table = base('content')

export const getRecords = async ({
  pageSize = DATA_PER_PAGE,
  offset = 0
}: {
  pageSize?: number
  offset?: number
}): Promise<AirtableRecord[]> => {
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
          }) as AirtableRecord[]
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
