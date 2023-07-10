export const request = (url:string, params = {}, bearerToken:string) => {
    let options = {
        method: "GET",
        headers: { Authorization: `Bearer ${bearerToken}` }
    };
    url += '?' + (new URLSearchParams(params)).toString()
    return fetch(url, options).then(response => response.json())
}

export const putRequest = (url:string, body: object, bearerToken:string) => {
    let options = {
        method: "PUT",
        headers: { Authorization: `Bearer ${bearerToken}` },
        body: JSON.stringify(body)
    };

    return fetch(url, options).then(response => response)
}