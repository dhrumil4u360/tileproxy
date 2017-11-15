var httpProxy = require('http-proxy');

httpProxy.createProxyServer({target:'http://themaptiles.cloudapp.net:80'}).listen((process.env.PORT || 8000));