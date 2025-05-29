async function getJsonUser(url, options, Token) {
    const resp = await fetch(url, options)
    const data = await resp.json()
    console.log(`RESP IS CALLED SEE:`);
    console.log(resp);
    console.log(`DATA IS RETURNED SEE:`); 
    console.log(data);
    
    }

url = 'http://127.0.0.1:8000/dj-rest-auth/user'
options = {
    method: 'GET',
    headers: {
        'Authorization': `Token eb9b21ae76c8f90522a87ee125960c16c0653b76`
    }
}

getJsonUser(url, options)


