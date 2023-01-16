import {addSkillsStudent, chgangeLeaen, livsCity, minsAge, StydentType } from "./02"

let stydent:StydentType 
   
beforeEach(()=>{
    stydent = {
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
})



test("stydent test", ()=> {
 expect(stydent.name).toBe("Mikhail")
})

test('change name studetn',()=> {
    stydent.name = 'Stas'

    expect(stydent.name).toBe('Stas')
})

test('change learn students', ()=> {
    chgangeLeaen('Eng',stydent)

    expect(stydent.address.city.learn).toBe('Eng')
})

test('add skill stydetn', ()=> {
    addSkillsStudent('Angular', stydent)

    expect(stydent.tehnoligies[3].title).toBe('Angular')
})

test('were shoulbe do live a student', ()=>{
    const res = livsCity(stydent,'Samara')

    expect(res).toBe(true)
})

test('age count for student', ()=> {
    const res = minsAge(stydent, 10)
    expect(res).toBe(19)
    expect(stydent.age).toBe(19)
})