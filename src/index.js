import { of, from, fromEvent } from "rxjs";

import { map ,pluck,filter,reduce} from  "rxjs/operators"

const observable  = of(1,2,3,4,5).pipe(

    reduce(
        (acc, val) => acc+ val ,
        0 
    )
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

