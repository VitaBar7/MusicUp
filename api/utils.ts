const request = (url:string, params = {}, bearerToken:string) => {
    let options = {
        method: "GET",
        headers: { Authorization: `Bearer ${bearerToken}` }
    };
    url += '?' + (new URLSearchParams(params)).toString()
    return fetch(url, options).then(response => response.json())
}

export default request