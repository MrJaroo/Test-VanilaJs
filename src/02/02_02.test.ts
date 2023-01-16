import { LocalCityType } from "./02_02";

let cityGrov: LocalCityType

beforeEach(() => {
    cityGrov = {
        title: 'New Yrock',
        houses: [
            {
                builedAt: 2012,
                repired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street',
                    }

                }
            },
            {
                builedAt: 2012,
                repired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street',
                    }

                }
            },
            {
                builedAt: 2012,
                repired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street',
                    }

                }
            }
        ],
        govertmenBuldings: [
            {
                type: "HOSPITAL",
                budget: 100000,
                staffCount:200,
                address: {
                    number:1,
                    street: {
                        title: 'Cersec cr'
                    }
                }
            },
            {
                type: "HOSPITAL",
                budget: 100000,
                staffCount:200,
                address: {
                    number:1,
                    street: {
                        title: 'Cersec cr'
                    }
                }
            }
        ],
        citizensNumber: 100000
    }
})

test('test city should 3 houses', () => {
    expect(cityGrov.houses[0].builedAt).toBe(2012)
    expect(cityGrov.houses.length).toBe(3)
})