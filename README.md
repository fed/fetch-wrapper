# fetch-wrapper

A simple fetch wrapper inspired on [axios](https://github.com/axios/axios) and [this post](https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper) by Kent C. Dodds.

## Usage examples

### apiClient.get(endpoint, options)

```js
apiClient
    .get('https://api.github.com/users')
    .then(data => console.log(data))
    .catch(err => console.error(err));
```

You can also pass in your authorization headers in case the endpoint is protected:

```js
const token = 'eyJhbGciOiJIv5cCI6IkpXVCJ9...';
const headers = {
'Authorization': `Bearer ${token}`
};

apiClient
    .get('https://rawr.com/your-protected-endpoint', { headers })
    .then(data => console.log(data))
    .catch(err => console.error(err));
```

## apiClient.post(endpoint, body, options)

```js
const token = 'eyJhbGciOiJIv5cCI6IkpXVCJ9...';
const headers = {
'Authorization': `Bearer ${token}`
};
const body = {
    foo: 'rawr'
};

apiClient
    .post('https://rawr.com/something', body, { headers })
    .then(data => console.log(data))
    .catch(err => console.error(err));
