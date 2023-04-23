import './lib/Defaults'
import OrderObserver from "./observables/OrderObserver";
import Subject from "./subjects";

require('dotenv').config()

const subject = new Subject()
new OrderObserver(subject)

subject.setValue('iPhone')

