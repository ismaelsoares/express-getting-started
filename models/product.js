export default (sequelize, DataTypes) => {
	const Product = sequelize.define('Product', {
		name:{
			type: DataTypes.STRING,
			allowNull: false
		},
		description:{
			type: DataTypes.STRING,
			allowNull: false			
		},
		price:{
			type: DataTypes.FLOAT,
			aloowNULL: false
		}
	});
	return Product;
};