import { test } from 'vitest'
import { Appointment } from './appointment'
import { expect } from 'chai'

test('create an appointment', () => {
    const startsAt= new Date()
    const endsAt  = new Date()

    endsAt.setDate(endsAt.getDate() +1 )

    const appointment = new Appointment({
        customer: 'john doe',
        startsAt,
        endsAt
    })

    expect(appointment).instanceOf(Appointment)
    expect(appointment.customer).equal('john doe')
});

test('cannot create an appointment with end date before start date', () => { 
    
    const startsAt= new Date()
    const endsAt  = new Date()

    endsAt.setDate(endsAt.getDate() -1 )
    
    expect(() => {
        return new Appointment({
            customer: 'john doe',
            startsAt,
            endsAt
        })
    }).throw()
    
})