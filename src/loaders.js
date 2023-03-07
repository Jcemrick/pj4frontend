import URL from "./url"

export const indexLoader = async () => {
    const response = await fetch(URL)
    const incident = await response.json()
    return incident
}

export const showLoader =  async ({params}) => {
    const response = await fetch(URL + `${params.id}/`)
    const incident = await response.json()
    return incident
}