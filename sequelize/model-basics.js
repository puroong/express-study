// sequelize.define

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
	firstName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	lastName: {
		type: DataTypes.STRING
	}
}, {});

console.log(User === sequelize.models.User);

// extending model

class User extends Model {}
User.init({
	firstName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	lastName: {
		type: DataTypes.STRING
	}
}, {
	sequelize,
	modelName: 'User'
});

console.log(User === sequelize.models.User);

// table names

sequelize.define('User', {
	firstName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	lastName: {
		type: DataTypes.STRING
	}
}, {
	freezeTableName: true // stop auto pluralization by inflection.js
})

// or

const sequelize = new Sequelize('sqlite::memory:', {
	define: {
		freezeTableName: true // stop auto pluralization by inflection.js
	}
})

// provide table name directl

sequelize.define('User', {
	firstName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	lastName: {
		type: DataTypes.STRING
	}
}, {
	tableName: 'Employees'
});

// Model Synchronization

User.sync(); // create table if not exist
User.sync({ force: true }); // create table and drop original if exists
User.sync({ alter: true }); // check and update changes to table

(async () => {
	await sequelize.sync();
})(); // synchronize all tables

// Drop tables

(async () => {
	await User.drop();
})(); // drop only user table

(async () => {
	await sequelize.drop();
})(); // drop all tables

// Timestamps
// sequelize add createdAt, updateAt columns by default

sequelize.define('User', {
	firstName: {
		type: DataTypes.STRING,
		allowNull: false
	}, 
	lastName: {
		type: DataTypes.STRING
	}
}, {
	timestamps: false
}); // disable timestamps

sequelize.define('User', {
	firstName: {
		type: DataTypes.STRING,
		allowNull: false
	}, 
	lastName: {
		type: DataTypes.STRING
	}
}, {
	timestamps: true,
	createdAt: false,
	updatedAt: 'updatedTimestamp'
}); // timestamps can be optional

// Default Values

sequelize.define('User', {
	name: {
		type: DataTypes.STRING,
		defaultValue: "John Doe"
	}
});

sequelize.define('Foo', {
	bar: {
		type: DataTypes.DATETIME,
		defaultValue: Sequelize.NOW
	}
});
