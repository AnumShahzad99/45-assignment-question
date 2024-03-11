let Guest_List: string[] = ['imran khan','nawaz shareef','asif ali zardari'];
//for(let i=0; i<Guest_List.length; i++){
//console.log('Dear Mr.' + Guest_List[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank you!' )
//}
let absent_Guest: string = 'imran khan';
let new_Guest: string = 'kamran tessori';
Guest_List[0] = new_Guest;
//for(let i=0; i<Guest_List.length; i++){
   // console.log('Dear Mr.' + Guest_List[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank you!' )
    //}
    console.log(`Mr. ${absent_Guest} is not coming to the party`);

    console.log('Good news! we find big table so we are inviting 3 more guests.');

    Guest_List.unshift('sir zia khan');
    Guest_List.splice(2 , 0 , 'maryam nawaz');
    Guest_List.push('bilawal buhtto');
//yahan pr 6 guest k array ko print kraya.
    for(let i=0; i<Guest_List.length; i++){

        console.log('Dear Mr.' + Guest_List[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank you!' )
        }
        //big table not arrange.
  console.log('\nsorry we can not arrange big table,only two peole will be invited.' );
  //yahan pr mene guest remove kiye hai.
  while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
     //sorry message to guest for not invite.
    console.log(`sorry Mr. ${remove_Guest}, you are not intied to dinner`)
  }
  //hamare bache hoe 2 invited guest.
  for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr.' + Guest_List[i] +',\n\nit is our pleasure to invite you in our party.\n\nThank you!' )
    }
    //mene sare guest array se remove kr diye.
    Guest_List.splice(0,2);
    console.log( Guest_List);


  