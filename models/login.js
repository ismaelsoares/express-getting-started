export default (sequelize, DataTypes) =>{
    const Login = sequelize.define('Login', {
      usuario: {type: DataTypes.STRING},
      senha: {type: DataTypes.STRING}
    });
    return Login;  
};
