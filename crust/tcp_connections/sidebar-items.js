initSidebarItems({"type":[["InTcpStream",""],["TcpReader",""],["TcpWriter",""]],"fn":[["connect_tcp","Connect to a server and open a send-receive pair.  See `upgrade` for more details."],["listen","Starts listening for connections on this ip and port. Returns: * A receiver of Tcp stream objects.  It is recommended that you `upgrade` these. * A TcpAcceptor.  This can be used to close the listener from outside of the listening thread."],["listen2",""],["upgrade_tcp","Upgrades a TcpStream to a Sender-Receiver pair that you can use to send and receive objects automatically.  If there is an error decoding or encoding values, that respective part is shut down."]],"struct":[["OutTcpStream",""]]});