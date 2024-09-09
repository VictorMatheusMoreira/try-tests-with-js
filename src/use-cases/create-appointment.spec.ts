import { describe } from 'vitest'
import { Appointment } from '../entities/appointment'
import { CreateAppointment } from './create-appointment'
import { it } from 'vitest'
import { expect } from 'vitest'


describe('create Appointment', () => {
    it('should be able to create an appointment', () =>{
        const createAppointment = new CreateAppointment()

        const startsAt= new Date()
        const endsAt  = new Date()

        endsAt.setDate(endsAt.getDate() +1)

        expect(createAppointment.execute({
            customer: 'john doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment)
    })
})