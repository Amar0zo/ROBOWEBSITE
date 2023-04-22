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

    document.getElementById('xplus').addEventListener('click', function() {
        fetch('http://'+ip+'/api/printer/command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': api
        },
        body: JSON.stringify({
            apikey: api,
          command: [
            'G0 X+10',
          ]
              
        })
        })
        .then(response => response.json())
        .then(data => {
        console.log('Odpowiedź:', data);
        });
        });
        
        document.getElementById('xmin').addEventListener('click', function() {
        fetch('http://'+ip+'/api/printer/command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': api
        },
        body: JSON.stringify({
            apikey: api,
          command: [
            'G0 X-10',
          ]
              
        })
        })
        .then(response => response.json())
        .then(data => {
        console.log('Odpowiedź:', data);
        });
        });
            
        document.getElementById('yplus').addEventListener('click', function() {
        fetch('http://'+ip+'/api/printer/command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': api
        },
        body: JSON.stringify({
            apikey: api,
          command: [
            'G0 Y+10',
          ]
              
        })
        })
        .then(response => response.json())
        .then(data => {
        console.log('Odpowiedź:', data);
        });
        });
            
        document.getElementById('ymin').addEventListener('click', function() {
        fetch('http://'+ip+'/api/printer/command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': api
        },
        body: JSON.stringify({
            apikey: api,
          command: [
            'G0 Y-10',
          ]
              
        })
        })
        .then(response => response.json())
        .then(data => {
        console.log('Odpowiedź:', data);
        });
        });
            
        document.getElementById('zplus').addEventListener('click', function() {
        fetch('http://'+ip+'/api/printer/command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': api
        },
        body: JSON.stringify({
            apikey: api,
          command: [
            'G0 Z+10',
          ]
              
        })
        })
        .then(response => response.json())
        .then(data => {
        console.log('Odpowiedź:', data);
        });
        });
            
        document.getElementById('zmin').addEventListener('click', function() {
        fetch('http://'+ip+'/api/printer/command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': api
        },
        body: JSON.stringify({
            apikey: api,
          command: [
            'G0 Z-10',
          ]
              
        })
        })
        .then(response => response.json())
        .then(data => {
        console.log('Odpowiedź:', data);
        });
        });