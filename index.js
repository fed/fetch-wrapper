function apiClient({ url, body, ...options } = {}) {
    const headers = {
        'Content-Type': 'application/json'
    };

    const config = {
        method: body ? 'POST' : 'GET',
        ...options,
        headers: {
          ...headers,
          ...options.headers
        }
    };

    if (body) {
        config.body = JSON.stringify(body)
    }

    return window
        .fetch(url, config)
        .then(async response => {
            const data = await response.json();

            // The built-in window.fetch API doesn't handle errors in the same way axios does.
            // By default, it will only reject a promise if the actual request itself failed
            // (i.e. network error) and not if it returned a "Client error response".
            // Luckily, the `response` object has an `ok` property we can use to reject the promise.
            if (response.ok) {
                return data;
            } else {
                return Promise.reject(data);
            }
        });
}

apiClient.get = (url, options) => apiClient({
    url,
    ...options
});

apiClient.post = (url, body, options) => apiClient({
    url,
    body,
    ...options
});

export default apiClient;
