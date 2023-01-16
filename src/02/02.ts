import exp from "constants"

export type StydentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    tehnoligies: Array<TehnologiesType>
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type CityType = {
    title: string
    countTit: string
    learn: string
}

type TehnologiesType = {
    id: number
    title: string
}



export const stydent: StydentType = {
    name: 'Mikhail',
    age: 29,
    isActive: false,
    address: {
        streetTitle: 'Vokzalnya 8',
        city: {
            title: 'Samara',
            countTit: 'Russia',
            learn: 'Rus'
        }
    },
    tehnoligies: [
        { id: 1, title: 'html' },
        { id: 2, title: 'css' },
        { id: 3, title: 'js' },
    ]
}

export function chgangeLeaen(learnt: string, student: StydentType) {
    student.address.city.learn = learnt
}

export function addSkillsStudent(skill:string, student:StydentType){
 student.tehnoligies.push({id:4,title:skill})
}