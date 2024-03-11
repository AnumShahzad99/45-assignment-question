let Guest_List: string[] = ['imran khan','nawaz shareef','asif ali zardari'];

//for(let i=0; i<Guest_List.length; i++){
//console.log('Dear Mr.' + Guest_List[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank you!' )
//}

let absent_Guest: string = 'imran khan';

let new_Guest: string = 'kamran tessori';
Guest_List[0] = new_Guest;


for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr.' + Guest_List[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank you!' )
    }
    console.log(`Mr. ${absent_Guest} is not coming to the party`);

    console.log('Good news! we find big table so we are inviting 3 more guests.');

    Guest_List.unshift('sir zia khan');
    Guest_List.splice(2 , 0 , 'maryam nawaz');
    Guest_List.push('bilawal buhtto');

    for(let i=0; i<Guest_List.length; i++){

        console.log('Dear Mr.' + Guest_List[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank you!' )
        }