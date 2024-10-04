export const questions=[
    {
    question:'What country is known as ‘The Emerald Isle’?',
    options:['Maldives','Ireland','Philippines'],
    answer:'Ireland'
},
    {
    question:'What country has the longest coastline?',
    options:['Russia','Indonesia','Canada'],
    answer:'Canada'
},
    {
    question:'Which of these countries is NOT in Asia',
    options:['Bosnia','Israel','Thailand'],
    answer:'Bosnia'
},

]

export type Question=
    {
        question:{
            text:string,
        },
        options:string[],
        correctAnswer:string,
        incorrectAnswers:string[],
    }