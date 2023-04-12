api = 'C46964C92A8B40C0B331AB1AA5441C46';
ip = '192.168.0.14';

fetch('http://'+ip+'/api/connection',{
    method: 'GET',
    headers: {
        'X-Api-Key': api
    }
})
    .then(response => response.json())
    .then(data => {
    console.log('printer name:', data);
    document.getElementById("printer-name").innerHTML = 'Drukarka - więcej (' + data.current.printerProfile +')';
    });