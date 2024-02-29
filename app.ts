// task 17 Shrinking Guest List

let guestList = ["Hamza", "Usman", "Hassan","Areeba"];

// informing that only two people can be invited
console.log("Due to limited space, only two people can be invited for dinner.")

// Removeing guests untill only two names remain
while (guestList.length> 2) {
const removedGuest = guestList.pop();
console.log(`sorry, ${removedGuest}, you are no longer invited to dinner.`);
}
// Printing invitations to the remaining two guests

// guestList.forEach((guest) => {
//     console.log(`Dear ${guest}, you are still invited to dinner.`));
// }
// Removing the last two names from the list
guestList.pop();
guestList.pop();
// printing final list to confirm it's empty
console.log("Final guest List:", guestList);
