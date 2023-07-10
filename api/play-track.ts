


export const playTrack = async (device_id:string, track_id:string, bearerToken:string) => {
   
    let options = {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'content-type': 'application/json'
        },
        //data: { 'uris': [`${track_id}`] }
        body: JSON.stringify({"contex_uri": `spotify:track:${track_id}`})
        
    }

   /* return fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, options)
   .then(response => console.log(response)) */
}




//reference

/* curl --request PUT \
  --url https://api.spotify.com/v1/me/player/play \
  --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z' \
  --header 'Content-Type: application/json' \
  --data '{
    "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
    "offset": {
        "position": 5
    },
    "position_ms": 0
}' */


// Play a specified track on the Web Playback SDK's device ID
/* function play(device_id, track) {
    §.ajax({ 
        url: "https://api.spotify.com/vI/me/player/play?device_id=" + device_id,
        type: "PUT",
        data: `{"uris": ["${track}"]}`,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + _token);
        },
            success: function (data) {
                console. log (data);
            }
    })

}
 */