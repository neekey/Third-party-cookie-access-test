var cookieExpire = (new Date(Date.now() + 10000000)).toUTCString();
document.cookie = 'third_cookie=yes; expires=' + cookieExpire;

console.log('all cookies read from third party page', document.cookie);



function makeRequestWithUserGesture() {
    document.hasStorageAccess().then(function(hasAccess) {
        if (hasAccess) {
            console.log('has access to storage');
        } else {
            var promise = document.requestStorageAccess();
            promise.then(
                function () {
                    // Storage access was granted.
                    // Check whether the user is logged in.
                    // If not, do a popup to log the user in.
                },
                function () {
                    // Storage access was denied.
                }
            );
        }
    });

}

window.onload = function() {
    var cookies = document.cookie;
    var thridPartyCookieExist = cookies.includes('third_cookie=yes');
    var result = document.getElementById('result');
    if (thridPartyCookieExist) {
        result.style.backgroundColor = 'green';
    } else {
        result.style.backgroundColor = 'red';
    }

    var requestAccessBtn = document.getElementById('requestAccess');
    requestAccessBtn.onclick = makeRequestWithUserGesture;
};
