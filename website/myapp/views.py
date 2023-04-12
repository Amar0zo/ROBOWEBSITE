from django.shortcuts import render
import socket

def index(request):
    connected = False
    robot_socket = None
    joints = []
    if request.method == 'POST':
        print (request.POST)
        if 'robot_ip' in request.POST:
            robot_ip = request.POST['robot_ip']
            try:
                robot_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                robot_socket.settimeout(2)
                robot_socket.connect((robot_ip, 30002))
                robot_socket.settimeout(None)
                connected = True
            except:
                pass
        elif 'brake_release' in request.POST:
            connected = True
            robot_socket.settimeout(2)
            comand = "brake_release"
            robot_socket.send(command.encode())
            pass  # do something
        elif 'command' in request.POST:
            pass  # do something
        elif 'power_on' in request.POST:
            connected = True
            robot_socket.send("power on\n".encode())
            pass  # do something
        elif 'power_off' in request.POST:
            pass  # do something
    return render(request, 'index.html', {'connected': connected})
