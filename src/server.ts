import OrderObserver from "./observables/OrderObserver";
import Subject from "./subjects";

const subject = new Subject()
new OrderObserver(subject)

subject.setValue('iPhone')

