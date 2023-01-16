export type LocalCityType = {
 title: string
 houses: Array<Houses>
 govertmenBuldings: Array<BuildType>
 citizensNumber: number
}

type BuildType = {
    type: string
    budget: number
    staffCount:number
    address:AddressType
}

type Houses = {
    builedAt: number
    repired: boolean
    address:AddressType
}
 type AddressType = {
    number:number
    street:StreetType
 }

 type StreetType = {
    title:string
 }