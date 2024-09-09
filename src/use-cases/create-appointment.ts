import { Appointment } from '../entities/appointment'

interface CreateAppointmeRequest {
    customer: string;
    startsAt: Date;
    endsAt: Date;
}

type CreateAppointmeResponse = Appointment 


export class CreateAppointment {
    async execute({customer, startsAt, endsAt}: CreateAppointmeRequest): Promise<CreateAppointmeResponse>{
        
        const appointment = new Appointment({customer, startsAt, endsAt})

        return appointment
    }
}

