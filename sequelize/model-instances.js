const { Sequelize, DataTypes, Model } = require('sequelize');
const datasourceUrl = 'sqlite::memory:';
const sequelize = new Sequelize(datasourceUrl);

class User extends Model {};
User.init({
	name: DataTypes.TEXT,
	favoriteColor: {
		type: DataTypes.TEXT,
		defaultValue: 'green'
	},
	age: DataTypes.INTEGER,
	cash: DataTypes.INTEGER
}, {
	sequelize,
	timestamps: false
});

// create instance

(async () => {
	await sequelize.sync({ force: true });

	const jane = User.build({ name: 'Jane' });
	console.log(jane instanceof User);
	console.log(jane.name);

	await jane.save();
	console.log('Jane was saved to the database!');
})();

// create

(async () => {
	await sequelize.sync({ force: true });

	const jane = await User.create({ name: 'Jane' });
	console.log(jane instanceof User);
	console.log(jane.name);
})();


// update

(async () => {
	await sequelize.sync({ force: true });

	const jane = await User.create({ name: 'Jane' });
	console.log(jane instanceof User);
	console.log(jane.name);

	jane.name = 'Ada';
	await jane.save();
})();

// delete

(async () => {
	await sequelize.sync({ force: true });

	const jane = await User.create({ name: 'Jane' });
	console.log(jane instanceof User);
	console.log(jane.name);

	await jane.destroy();
})();

// increment, decrement

(async () => {
	await sequelize.sync({ force: true });

	const jane = await User.create({ name: 'Jane' });
	console.log(jane instanceof User);
	console.log(jane.name);

	const incrementResult = jane.increment('age', { by: 2 });
})();


