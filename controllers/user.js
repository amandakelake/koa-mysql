const UserModel = require('../models/user');

class User {
    static async create(ctx) {
        const {
            username,
            password,
            email
        } = ctx.request.body;
        const user = {
            username: username,
            password: password,
            email: email
        };
        await UserModel.create(user);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `创建用户成功`,
            data: {}
        }
    }
    static async login(ctx) {

    }
    static async delete(ctx) {

    }
    static async info(ctx) {

    }
    static async list(ctx) {

    }
}

module.exports = User;