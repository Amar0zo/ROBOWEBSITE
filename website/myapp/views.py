from django.shortcuts import render
from myapp.robot import Robot

def index(request):
    robot = Robot('192.168.0.19', 29999)
    robot.connect()

    if request.method == 'POST':
        robot.send_command('brake release')

   # robot.disconnect()

    return render(request, 'index.html', {'connected': robot.connected})
