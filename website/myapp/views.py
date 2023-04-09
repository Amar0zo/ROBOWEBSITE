from django.shortcuts import render
import socket

def index(request):
    connected = False
    joints = []
    if request.method == 'POST':
        if 'robot_ip' in request.POST:
            robot_ip = request.POST['robot_ip']
            try:
                robot_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                robot_socket.settimeout(2)
                robot_socket.connect((robot_ip, 30002))
                robot_socket.settimeout(None)
                connected = True
                joints = ['joint1', 'joint2', 'joint3', 'joint4', 'joint5', 'joint6']
            except:
                pass
        elif 'brake_release' in request.POST:
            pass  # do something
        elif 'command' in request.POST:
            pass  # do something
        elif 'power_on' in request.POST:
            pass  # do something
        elif 'power_off' in request.POST:
            pass  # do something
    return render(request, 'index.html', {'connected': connected, 'joints': joints})
