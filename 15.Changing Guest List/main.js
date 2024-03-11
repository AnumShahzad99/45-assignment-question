var Guest_List = ['imran khan', 'nawaz shareef', 'asif ali zardari'];
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!');
}
var absent_Guest = 'imran khan';
var new_Guest = 'kamran tessori';
Guest_List[0] = new_Guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!');
}
console.log("Mr. ".concat(absent_Guest, " is not coming to the party"));
