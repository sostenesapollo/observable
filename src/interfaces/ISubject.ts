import IObserver from "./IObserver";

export default interface ISubject {
    attachObserver(observe: IObserver): void;
    detachObserver(observe: IObserver): void;
    notifyAll(): void;
}