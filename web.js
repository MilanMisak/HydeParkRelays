var newrelic = require('newrelic'),
    express = require('express'),
    app = express();

app.use(express.compress());
app.use('/', express.static(__dirname + '/assets'));

app.listen(process.env.PORT || 3000, function() {
    console.log('listening');
});
