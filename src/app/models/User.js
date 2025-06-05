import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database.js';


class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: true
  }
);

export default User;
