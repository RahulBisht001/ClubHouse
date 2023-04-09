class UserDto {
    id;
    phone;
    activated;
    createdAt;

    constructor(user) {
        this.id = user._id
        this.activated = user.activated
        this.phone = user.phone
        this.createdAt = user.createdAt
    }
}

module.exports = UserDto