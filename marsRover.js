
const rover = require('./rovers');

const rover1 = new rover();
const rover2 = new rover();

rover1.setPosition(1,2,'N');
rover1.move('RMRMRMRMM');
rover2.setPosition(1,2,'N');
rover2.move('LMLMLMLMM');




