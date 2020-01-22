{
    "use strict";

    function wait(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
               resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, seconds);
    });
}

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

    function getGithubUsernames(username) {
        return fetch(`https://api.github.com/search/commits?q=sort:committer-date+committer:${username}`,
            {headers: {'Authorization': github, 'Accept': 'application/vnd.github.cloak-preview', }})
            .then(response => response.json())
           .then(res => {
            let commit = res.items[0].commit.author;
                commit.name;
                commit.date;
                console.log(commit)
            });
    }


    console.log(getGithubUsernames("28-png"))


}