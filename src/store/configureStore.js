/**
 * Created by Michael on 6/12/17.
 */
if(process.env.NODE_ENV === 'production') {
	module.exports = require('./configureStore.prod');
} else {
	module.exports = require('./configureStore.dev');
}
