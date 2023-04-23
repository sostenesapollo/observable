import IObserver from '../interfaces/IObserver';
import ISubject from '../interfaces/ISubject';

export default class Subject implements ISubject {
    private value: any;
    private observers: IObserver[] = [];

    setValue(T: any) {
        this.value = T;
        this.notifyAll()
    }

    public attachObserver(observer: IObserver) {
        this.observers.push(observer);
    }

    public detachObserver(observer: IObserver) {
        const index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }

    public notifyAll() {
        for(let observer of this.observers) {
            observer.update(this.value);
        }
    }
}