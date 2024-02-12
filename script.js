// Array of items
var items = [
    'Not a yes, huh?😔 Let\'s try again😊',
    "That's not an answer I want!😤 Give it another try!😁",
    "Sorry but \"no\" as a response is not allowed🙃",
    "I\'ve just said that i dont take a \"no\" response😡",
    "Come on dont be shy, click the yes button already🤗",
    "I will not give up until you say yes😎",
    "It will be a day full of happiness if you say yes✨",
    'Come on how many \"no\" buttons you\"ve\" already clicked!😭',
    "You\'re still not giving me a yes?😒",
    'Are you really sure?🥹 Think about it...again??🥹',
    'You\'re hurting me now😢',
    'Why not a yes?😣',
    'Am I not enough?😫',
    'Please give me a chance🙃',
    'You wont regret clicking the \"yes\" button😉',
    "We\'re just gonna repeating this thing🫥",
    "Is a yes really hard to click? Maybe its to small😲"
];

// Function to pick a random item from the array
function NoResponse() {
    
    if (items.length === 0) {
        alert("Click yes already! Youre not getting anymore of here anymore😈");
        return;
    }
    var selectedItem = items.shift();
    alert(selectedItem);
}

