class UserDto {
    id;
    phone;
    name;
    avatar;
    activated;
    createdAt;

    constructor(user) {
        this.id = user._id
        this.activated = user.activated
        this.phone = user.phone
        this.createdAt = user.createdAt
        this.name = user.name
        this.avatar = user.avatar
    }
}

module.exports = UserDto