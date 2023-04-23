import IObserver from "../interfaces/IObserver";
import ISubject from "../interfaces/ISubject";
import Mail from "../lib/Mail";
import Subject from "../subjects";

export default class OrderObserver implements IObserver {
    private subject: ISubject;

    constructor(subject: Subject) {
        this.subject = subject;
        this.subject.attachObserver(this);
    }

    public update(value: string) {
        // Send email
        Mail.sendEmail({
            to: 'Expedição <expedicao@commercer.com>',
            subject: 'Novo producto vendido',
            text: `O produto ${value} foi comprado, por favor prepare o produto.`
        })
        console.log('Novo pedido', value);
    }
}