interface AppointmentProps {
     customer: string;
     startsAt: Date;
     endsAt: Date;
}

export class Appointment {
    execute(arg0: { custome: string; startsAt: Date; endsAt: Date; }): any {
        throw new Error('Method not implemented.');
    }
    private props: AppointmentProps;

    get customer() {
        return this.props.customer;
    } 

    get startsAt (){
        return this.props.startsAt
    }

    get endsAt(){
        return this.props.endsAt
    }

    constructor (props: AppointmentProps) {
        const { startsAt, endsAt} = props

        if(endsAt <= startsAt) {
            throw new Error('invalid end date')
        }
        
        this.props = props
    }
}