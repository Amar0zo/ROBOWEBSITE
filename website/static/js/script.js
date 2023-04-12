console.log("działa");
api = 'C46964C92A8B40C0B331AB1AA5441C46';
ip = '192.168.0.14';


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

fetch('http://'+ip+'/api/printer/tool',{
    method: 'GET',
    headers: {
        'X-Api-Key': api
    }
})
    .then(response => response.json())
    .then(data => {
    console.log('Odpowiedź:', data);
    document.getElementById("printer-htemp").innerHTML = "Temperatura głowicy:</br> " + data.tool0.actual;
    });

fetch('http://'+ip+'/api/printer/bed',{
    method: 'GET',
    headers: {
        'X-Api-Key': api
    }
})
    .then(response => response.json())
    .then(data => {
    console.log('Odpowiedź:', data);
    document.getElementById("printer-btemp").innerHTML = "Temperatura stołu:</br>" + data.bed.actual;
    });

fetch('http://'+ip+'/api/job',{
    method: 'GET',
    headers: {
        'X-Api-Key': api
    }
})
    .then(response => response.json())
    .then(data => {
    console.log('Odpowiedź:', data);
    document.getElementById("printer-gcode").innerHTML = data.job.file.display;
    });

fetch('http://'+ip+'/api/job',{
    method: 'GET',
    headers: {
        'X-Api-Key': api
    }
})
    .then(response => response.json())
    .then(data => {
    console.log('Odpowiedź:', data);
    document.getElementById("printer-gcode").innerHTML = data.job.file.display;
    });

fetch('http://'+ip+'/api/job',{
    method: 'GET',
    headers: {
        'X-Api-Key': api
    }
})
    .then(response => response.json())
    .then(data => {
    console.log('Odpowiedź:', data);
    document.getElementById("progressbar").innerHTML = Math.floor(data.progress.completion) + "%";
    });

fetch('http://'+ip+'/api/connection',{
    method: 'GET',
    headers: {
        'X-Api-Key': api
    }
})
    .then(response => response.json())
    .then(data => {
    console.log('printer name:', data);
    document.getElementById("printer-name").innerHTML = data.current.printerProfile;
    });

    