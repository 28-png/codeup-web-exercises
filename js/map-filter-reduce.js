{
    "use strict";

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

const threes = users.filter(user => user.languages.length >= 3);
console.log(threes);

    const emails = users.map(user => user.email);
    console.log(emails);


    const average = users.reduce((accumulation, currentNumber) =>
        accumulation + currentNumber.yearsOfExperience, 0) / users.length;
    console.log(average);



let longestEmail = users.reduce((emailCount, emailLetter) =>
    emailCount.email.length > emailLetter.email.length ? emailCount : emailLetter).email;

    console.log(longestEmail);

    const instructorNames = users.reduce((nameCount, nameList) => {
        return  nameCount + " " + nameList.name
    }, 'your instructors are:');
    console.log(instructorNames + ".");


    const returnUnique = users.reduce((languages, user) => {
for(let language of user.languages) {
    if(!languages.includes(language)) {
        languages.push(language)
    }
}
return languages
    },[]);

    console.log(returnUnique);


}