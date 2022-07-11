import { fromEvent} from "rxjs";

import { map} from  "rxjs/operators"
import {ajax } from "rxjs/ajax"

const button = document.querySelector('#btn')
const observable  =fromEvent(
button, 'click'
).pipe(
    map(() => {
        return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
    })
)

// const numbersWithSymbol = observable.pipe(
//     map((value) => `$${value}`)
// )

const subscription=observable.subscribe({
    next(value){
        value.subscribe(console.log)
    },
    complete() {
        console.log('complete')
    }
}
)

console.log('hello')

