# URL Shortener Microservice
## User stories:
1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
3. When I visit that shortened URL, it will redirect me to my original link.

## Example creation usage:

```js
https://short-links.glitch.me/new/https://www.google.com 
https://short-links.glitch.me/new/https://www.freecodecamp.com
```

## Example creation output:

```js
{ "original_url": "https://short-links.glitch.me/new/https://www.google.com", "short_url": "https://short-links.glitch.me/HMw0B" }
```

## Usage:

```
https://short-links.glitch.me/3ZYOK
```

### Will redirect to:

```
https://www.google.com/
```
