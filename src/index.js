import { interval } from "rxjs";

import { map ,pluck,filter,reduce,take,scan,tap} from  "rxjs/operators"

const observable  = interval(500).pipe(
    take(5),
    tap({
        next(val) {
            console.log(val)
        }
    }
        
    ),
    reduce(
    //    scan(
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

