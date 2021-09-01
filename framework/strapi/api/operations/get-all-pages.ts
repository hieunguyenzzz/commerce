export type Page = { url: string }
export type GetAllPagesResult = { pages: Page[] }

export default function getAllPageOperation() {
  function getAllPage(): Promise<GetAllPagesResult> {
    return Promise.resolve({pages:[]})
  }
  return getAllPage
}
