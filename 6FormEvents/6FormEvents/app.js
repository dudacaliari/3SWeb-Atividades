
const tweetsContainer = document.querySelector('#tweets');


const tweetForm = document.querySelector('form');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = function(username, tweet) {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b'); 
    bTag.append(username); 
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`); 
    tweetsContainer.append(newTweet);
}

