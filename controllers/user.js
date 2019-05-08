class User {
    static async create(ctx) {
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `创建用户成功`,
            data: {}
        }
    }
    static async login(ctx) {
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `登录成功`,
            data: {}
        }
    }
    static async delete(ctx) {
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `删除成功`,
            data: {}
        }
    }
    static async info(ctx) {
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `用户信息`,
            data: {}
        }
    }
    static async list(ctx) {
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `用户列表`,
            data: {}
        }
    }
}

module.exports = User;