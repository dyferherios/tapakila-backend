export class User {
    constructor(id, roleId, username, name, email, emailVerifiedAt, password, imageUrl, countryId, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.roleId = roleId;
        this.username = username;
        this.name = name;
        this.email = email;
        this.emailVerifiedAt = emailVerifiedAt;
        this.password = password;
        this.imageUrl = imageUrl;
        this.countryId = countryId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
    getId() {
        return this.id;
    }
    getRoleId() {
        return this.roleId;
    }
    getUsername() {
        return this.username;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getEmailVerifiedAt() {
        return this.emailVerifiedAt;
    }
    getPassword() {
        return this.password;
    }
    getImageUrl() {
        return this.imageUrl;
    }
    getCountryId() {
        return this.countryId;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
    getDeletedAt() {
        return this.deletedAt;
    }
    setId(id) {
        this.id = id;
    }
    setRoleId(roleId) {
        this.roleId = roleId;
    }
    setUsername(username) {
        this.username;
    }
    setName(name) {
        this.name = name;
    }
    setEmail(email) {
        this.email = email;
    }
    setEmailVerifiedAt(emailVerifiedAt) {
        this.emailVerifiedAt = emailVerifiedAt;
    }
    setPassword(password) {
        this.password = password;
    }
    setImageUrl(imageUrl) {
        this.imageUrl = imageUrl;
    }
    setCountryId(countryId) {
        this.countryId = countryId;
    }
    setCreatedAt(createdAt) {
        this.createdAt = createdAt;
    }
    setUpdatedAt(updatedAt) {
        this.updatedAt = updatedAt;
    }
}
