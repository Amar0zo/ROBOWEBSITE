console.log("działa");
api = 'C46964C92A8B40C0B331AB1AA5441C46';
ip = '192.168.0.27';


fetch('http://'+ip+'/api/job',{
    method: 'GET',
    headers: {
        'X-Api-Key': api
    }
})
    .then(response => response.json())
    .then(data => {
    console.log('Odpowiedź:', data);
    document.getElementById("printer-status").innerHTML = data.state;
    });