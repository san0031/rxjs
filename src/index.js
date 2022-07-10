import { Observable } from "rxjs";

const observable  = new Observable((subscriber) => {
subscriber.next('Hello Vidya')
subscriber.error('Susbcriber error function called')
subscriber.complete()
subscriber.next('After complete calll')
})

observable.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log("Complete called!")
    },
    error: (err) => {
        console.error(err);
    }
})

