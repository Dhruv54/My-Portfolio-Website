// chrome.runtime.onMessage.addListener(function(rq, sender, sendResponse) {
//     // setTimeout to simulate any callback (even from storage.sync)
//     setTimeout(function() {
//         sendResponse({status: true});
//     }, 1);
//     return true;  // uncomment this line to fix error
// });
/*global chrome*/
chrome.runtime.onMessage.addListener(async function (
    message,
    sender,
    sendResponse
    ) {
    console.log(message.data);
    sendResponse({ data: "Hey!" });
    return true;
});


// chrome.runtime.onMessage.addListener(function(rq, sender, sendResponse) {
//     setTimeout(function() {
//         sendResponse({status: true});
//     }, 1);
//     return true;  // Return true to fix the error
// });