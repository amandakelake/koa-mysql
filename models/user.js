const db = require('../config/db');
const Sequelize = db.sequelize;
// 引入用户模型
const UserSchema = Sequelize.import('../schema/user');
// //自动创建表
UserSchema.sync({
    force: false
});

class UserModel {
    static async create(user) {
        let {
            username,
            password,
            email
        } = user;
        await UserSchema.create({
            username,
            password,
            email
        })
        return true;
    }
    static async delete(id) {}
    static async allUserList() {}
    static async userInfo(user) {}
}

module.exports = UserModel;