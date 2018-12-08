# Third-party-cookie-access-test

This is a demo to test if a certain browser support third party cookie access

## Setup

you need to add two records in your `/etc/hosts`:

```
127.0.0.1 firstparty.com
127.0.0.1 thirdparty.com
```

Then install npm and run:

```
npm i
npm start
```

## Test The access to third party cookie

Visit `http://firstparty.com:8000`, if you see read in the iframe it means it has no access to third party cookie otherwise it has.