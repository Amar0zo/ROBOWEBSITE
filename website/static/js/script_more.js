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
      command: 
        'G0 X+10',
      
              
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
        command: 
        'G0 X-10',
    
              
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
        command: 
        'G0 Y+10',
              
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
        command: 
        'G0 Y-10',
              
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
        command: 
        'G0 Z+10',
              
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
        command: 
        'G0 Z-10',
              
    })
    })
    .then(response => response.json())
    .then(data => {
    console.log('Odpowiedź:', data);
    });
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
    document.getElementById("printer-status").innerHTML = "Stan: "+data.state;
    });

function refreshData() {
    fetch('http://'+ip+'/api/printer/tool',{
    method: 'GET',
    headers: {
        'X-Api-Key': api
    }
})
        .then(response => response.json())
        .then(data => {
        document.getElementById("actual").innerHTML = "Aktualna temperatura: " + data.tool0.actual;
        document.getElementById("target").innerHTML = "Docelowa temperatura: " + data.tool0.target;
        
    });
}
setInterval(refreshData, 1000);

document.getElementById('send-request-button').addEventListener('click', function() {
    fetch('http://'+ip+'/api/printer/tool', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': api
    },
    body: JSON.stringify({
        apikey: api,
      command: 'target',
      targets: {
        tool0: parseInt(document.getElementById('liczba').value),
      }
    })
    })
    .then(response => response.json())
    .then(data => {
    console.log('Odpowiedź:', data);
    });
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
    document.getElementById("printer-gcode").innerHTML = "Nazwa pliku: "+data.job.file.display;
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
    document.getElementById("printer-time").innerHTML =  "Czas trwania: "+Math.floor((data.progress.printTime/60)/60)+":"+Math.floor((data.progress.printTime/60)%60);
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
    document.getElementById("printer-timeleft").innerHTML =  "Pozostały czas: "+Math.floor((data.progress.printTimeLeft/60)/60)+":"+Math.floor((data.progress.printTimeLeft/60)%60);
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
    document.getElementById("printer-material").innerHTML =  "Potrzebny filament: "+(data.job.filament.tool0.length/1000).toFixed(2)+"m/"+data.job.filament.tool0.volume.toFixed(2)+"cm<sup>3</sup>";
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

document.getElementById('print-btn').addEventListener('click', function() {
    fetch('http://'+ip+'/api/job', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': api
    },
    body: JSON.stringify({
        apikey: api,
        command: 'start',
    })
    })
    .then(response => response.json())
    .then(data => {
    console.log('Odpowiedź:', data);
    });
    });

document.getElementById('pause-btn').addEventListener('click', function() {
    fetch('http://'+ip+'/api/job', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': api
    },
    body: JSON.stringify({
        apikey: api,
        command: 'pause',
    })
    })
    .then(response => response.json())
    .then(data => {
    console.log('Odpowiedź:', data);
    });
    });

    document.getElementById('stop-btn').addEventListener('click', function() {
        fetch('http://'+ip+'/api/job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': api
        },
        body: JSON.stringify({
            apikey: api,
            command: 'cancel',
        })
        })
        .then(response => response.json())
        .then(data => {
        console.log('Odpowiedź:', data);
        });
        });