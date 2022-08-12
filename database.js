const mongoose = require('mongoose');
const URI = 'mongodb+srv://julianamadeira:devmaster@clusterdev.jnhsbyt.mongodb.net/case-salon?retryWrites=true&w=majority';

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

mongoose
    .connect(URI)
    .then(() => console.log('DB is connected!'))
    .catch(() => console.log(err)); 