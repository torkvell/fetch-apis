const superagent = require('superagent')
const peopleURLs = [
    'https://swapi.co/api/people/1/',
    'https://swapi.co/api/people/2/',
    'https://swapi.co/api/people/3/',
    'https://swapi.co/api/people/4/'
]

const fetchAllData = Promise.all(
    peopleURLs.map(url => {
        return Promise.resolve(superagent
            .get(url)
            .then(res => {
                return res.body
            })
            .catch(err => {
                console.log(err)
            })
        )
    })
)

fetchAllData.then(array => {
    console.log(array.length);
    console.log(fetchAllData);
    console.log(array)
    array.forEach(element => {
        console.log(element.name);
    });
})

//EASY WAY
// const peopleURL1 = Promise.resolve(superagent
//     .get('https://swapi.co/api/people/1/')
//     .then(res => {
//         return res.body
//     })
//     .catch(err => {
//         console.log(err)
//     })
// )

// const peopleURL2 = Promise.resolve(superagent
//     .get('https://swapi.co/api/people/2/')
//     .then(res => {
//         return res.body
//     })
//     .catch(err => {
//         console.log(err)
//     })
// )

// const peopleURL3 = Promise.resolve(superagent
//     .get('https://swapi.co/api/people/2/')
//     .then(res => {
//         return res.body
//     })
//     .catch(err => {
//         console.log(err)
//     })
// )

// const allFetchingDone = Promise.all([peopleURL1, peopleURL2, peopleURL3])

// allFetchingDone.then(array => {
//     console.log(array.length);
//     console.log(array)
//     array.forEach(element => {
//         console.log(element.name);
//     });
// })

// Promises inside promises
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);

//or

doSomething()
    .then(function(result) {
        return doSomethingElse(result);
    })
    .then(function(newResult) {
        return doThirdThing(newResult);
    })
    .then(function(finalResult) {
        console.log('Got the final result: ' + finalResult);
    })
    .catch(failureCallback);

//or

doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doThirdThing(newResult))
    .then(finalResult => {
        console.log(`Got the final result: ${finalResult}`);
    })
    .catch(failureCallback);