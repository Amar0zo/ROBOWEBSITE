import socket

class Robot:
    def __init__(self, port=29999):
        self.port = port
        self.connected = False
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.ip_address = ''

    def connect(self, ip_address):
        try:
            self.sock.connect((ip_address, self.port))
            self.ip_address = ip_address
            self.connected = True
            data = self.sock.recv(100)
            print('received "%s"' % data)
            return True
        except:
            return False       

    def send_command(self, command):
        try:
            message = command + '\n'
            print('sending "%s"' % message)
            self.sock.send(message.encode())
            response = str(self.sock.recv(100))
            print('received "%s"' % response)
            return True, response
        except:
            response=""
            return False, response

    def power_on(self):
        (status, response) = self.send_command ("power on")
        print (str(status), response)
        if status:
            if "Powering on" in response:
                print ("OK")
                return True
            else:
                print ("Error")
                return False
        else:
            return False
    def disconnect(self):
        self.sock.close()
        self.connected = False
