const app = require('./app');
const conf = require('./config/config');

app.listen(conf.PORT, () => console.log(`Server is running... ${conf.PORT}`))
