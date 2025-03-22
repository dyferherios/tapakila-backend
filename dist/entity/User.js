export class User {
    constructor(id, role, username, name, email, emailVerifiedAt, password, imageUrl, country, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.role = role;
        this.username = username;
        this.name = name;
        this.email = email;
        this.emailVerifiedAt = emailVerifiedAt;
        this.password = password;
        this.imageUrl = imageUrl;
        this.country = country;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return this.role;
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
    getCountry() {
        return this.country;
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
    setRoleId(role) {
        this.role = role;
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
    setCountry(country) {
        this.country = country;
    }
    setCreatedAt(createdAt) {
        this.createdAt = createdAt;
    }
    setUpdatedAt(updatedAt) {
        this.updatedAt = updatedAt;
    }
}
