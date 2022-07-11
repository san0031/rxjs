import { fromEvent,interval} from "rxjs";

import { map,mergeMap,take,tap} from  "rxjs/operators"
import {ajax } from "rxjs/ajax"

const button = document.querySelector('#btn')
const observable  =fromEvent(
button, 'click'
).pipe(
    mergeMap(() => {
        return interval(1000).pipe(
            tap(console.log),
            take(5)
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

