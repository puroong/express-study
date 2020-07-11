// connecting to database

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

// testing connection

(async () => {
	try {
		await sequelize.sync();
		console.log('Connection has been established successfully!');
	} catch(error) {
		console.error('Unable to connect to the database: ', error);
	}

	// closing connection

	sequelize.close()
})();

// logging

const sequelizeWithLoggingOption = new Sequelize('sqlite::memory:', {
	logging: (...msg) => console.log(msg)
});
