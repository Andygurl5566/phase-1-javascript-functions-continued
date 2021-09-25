// Your code here

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

saturdayFun()

//

let mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

mondayWork()

// wrapAdjective

// function wrapAdjective(adjective = "*"){
//     const encouragingPromptFunction = function(paramater="special"){
//         return `You are ${parameter}`
//     }
// }
// wrapAdjective()

function wrapAdjective(mark = "*"){
    return function encouragingPrompt(word = "special"){
      return `You are ${mark}${word}${mark}!`
    }
}
wrapAdjective("a hard worker")