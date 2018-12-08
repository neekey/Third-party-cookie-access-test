var cookieExpire = (new Date(Date.now() + 10000000)).toUTCString();
document.cookie = 'top_cookie_from_third=yes; expires=' + cookieExpire;

console.log('all cookies read from first party page by a third party script', document.cookie);