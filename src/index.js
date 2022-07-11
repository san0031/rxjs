import { of, from, fromEvent } from "rxjs";

import { map ,pluck,filter} from  "rxjs/operators"

const observable  = fromEvent(
    document,'keydown'
).pipe(
    //map(event => event.code)
    // pluck('code'),
    // filter(code => code === 'Space')
    map(event => {
        return  event.code === 'Space' ? event.code : null
     })
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

