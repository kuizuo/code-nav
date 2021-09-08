
const modulesFiles = require.context('./modules', true, /\.ts$/)

let allData: any[] = []

modulesFiles.keys().forEach((modulePath) => {
  const value = modulesFiles(modulePath)
  let data = value.default

  if (!data) return
  allData.push(...value.default)
})
// console.log(allData)

import tags from './tags'

export const MOCK_OPEN = true;

export async function getMockData(name: string) {
  return mockData[name];
}

export async function searchResourcesByMook(params: any) {
  if (params.name) {
    let data = allData.filter(d => d.name.includes(params.name)) // d.name.some((n: string) => n.toLowerCase() === params.name.toLowerCase())
    return {
      data,
      total: data.length,
    }
  }

  if (params.tags.length != 0) {
    let data = allData.filter(d => {
      return params.tags.some((t: string) => d.tags.includes(t))
    })

    return {
      data,
      total: data.length,
    }
  }

  if (params.pageNum != 1) {
    return {
      data: allData,
      total: allData.length,
    }
  }

  return {
    data: allData.sort(function () {
      return .5 - Math.random();
    }),
    total: allData.length,
  }
}

export async function getTagByMock(){
  return tags
}

const mockData = {
  searchResourcesByPage: {
    data: allData,
    total: 1,
  },
  getTags: tags,
};
