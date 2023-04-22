import socket

class Robot:
    def __init__(self, port : int):
        self._ip= None
        self._port = port
        self._connected = False
        self._socketObject = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    def connect(self, ip : str) ->  bool: #expect bool return value
        try:
            self._ip = ip
            self._socketObject.connect((self._ip, self._port))
            self._connected = True
            data = self._socketObject.recv(100)
            print('received "%s"' % data)
            return True
        except:
            return False       

    def send_command(self, command):
        try:
            message = command + '\n'
            print('sending "%s"' % message)
            self._socketObject.sendto(message.encode(), (self._ip, self._port))
            response = str(self._socketObject.recv(100))
            print('received "%s"' % response)
            return True, response
        except:
            response=""
            return False, response

    def disconnect(self):
        self.sock.close()
        self.connected = False
