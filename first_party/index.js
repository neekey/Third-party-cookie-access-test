var cookieExpire = (new Date(Date.now() + 10000000)).toUTCString();
document.cookie = 'top_cookie=yes; expires=' + cookieExpire;

console.log('all cookies read from first party page', document.cookie);