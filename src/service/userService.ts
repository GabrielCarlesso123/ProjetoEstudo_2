import User from "../schemas/User";

class UserService {

    async createUser(input) {
        try {
            await User.create(input)
        } catch (err) {
            console.error('Failed to create a User', err)
        }
        finally {
            return
        }
    }
}