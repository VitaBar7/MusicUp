export const login = async () => {
    var formBody = [];
    var encodedKey = encodeURIComponent("grant_type");
    var encodedValue = encodeURIComponent("client_credentials");
    formBody.push(encodedKey + "=" + encodedValue);

    let options = {
        method: 'POST',
        headers: {
            'Authorization': 'Basic MGU3ZDc0MTNiNzQ5NDM4MzgxNGUwMzZjMWQ1Mjc0Njc6MTMwOWM2YTk2M2Q3NDhjOTlhMDc4NWNiMWU2OTBkNWQ=',
            'content-type': 'application/x-www-form-urlencoded'
          },
          body: formBody.join("&")       
    }

   return fetch('https://accounts.spotify.com/api/token', options)
   .then(response => response.json())
}