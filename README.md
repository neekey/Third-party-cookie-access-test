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

## Safari ITP

Safari is adopping this [Intelligent Tracking Prevention](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/), it blocks thrid party cookie access.

At the moment (2018-12-09) the behavior of Safari 12 does not do exactly like the ITP does. It instead blocks the access by default, but if you visit the third party website directly, then the domain gains the access to its cookes while being embedded as thrid party iframe.
