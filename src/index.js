import { fromEvent,interval} from "rxjs";

import { map, exhaustMap,take,tap} from  "rxjs/operators"
import {ajax } from "rxjs/ajax"

const button = document.querySelector('#btn')
const observable  =fromEvent(
button, 'click'
).pipe(
    exhaustMap(() => {
        return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
            
            take(5),
            tap({
                complete() {
                    console.log('Inner observable completed')
                }
            })
        )
    }),
    //take(5)
)

// const numbersWithSymbol = observable.pipe(
//     map((value) => `$${value}`)
// )

const subscription=observable.subscribe({
    next(value){
        console.log(value)
    },
    complete() {
        console.log('complete')
    }
}
)

console.log('hello')

