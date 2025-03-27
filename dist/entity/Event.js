export class Event {
    constructor(id, eventHall, host, user, title, slug, description, startDate, startTime, endDate, endTime, ageLimit, createdAt, updatedAt, eventImage) {
        this.id = id;
        this.eventHall = eventHall;
        this.host = host;
        this.user = user;
        this.title = title;
        this.slug = slug;
        this.description = description;
        this.startDate = startDate;
        this.startTime = startTime;
        this.endDate = endDate;
        this.endTime = endTime;
        this.ageLimit = ageLimit;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.eventImage = eventImage;
    }
    getd() {
        return this.id;
    }
    getEventHall() {
        return this.eventHall;
    }
    getHost() {
        return this.host;
    }
    getUser() {
        return this.user;
    }
    getTitle() {
        return this.title;
    }
    getSlug() {
        return this.slug;
    }
    getDescription() {
        return this.description;
    }
    getStartDate() {
        return this.startDate;
    }
    getStartTime() {
        return this.startTime;
    }
    getEndDate() {
        return this.endDate;
    }
    getEndTime() {
        return this.endTime;
    }
    getAgeLimit() {
        return this.ageLimit;
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
    setEventHall(eventHall) {
        this.eventHall = eventHall;
    }
    setHost(host) {
        this.host = host;
    }
    setUser(user) {
        this.user = user;
    }
    setTitle(title) {
        this.title = title;
    }
    setSlug(slug) {
        this.slug = slug;
    }
    setDescription(description) {
        this.description = description;
    }
    setStartDate(startDate) {
        this.startDate = startDate;
    }
    setStartTime(startTime) {
        this.startTime = startTime;
    }
    setEndDate(endDate) {
        this.endDate = endDate;
    }
    setEndTime(endTime) {
        this.endTime = endTime;
    }
    setAgeLimit(ageLimit) {
        this.ageLimit = ageLimit;
    }
    setCreatedAt(createdAt) {
        this.createdAt = createdAt;
    }
    setUpdatedAt(updatedAt) {
        this.updatedAt;
    }
    setDeletedAt(deletedAt) {
        this.deletedAt = deletedAt;
    }
    getEventImage() {
        return this.eventImage;
    }
    setEventImage(eventImage) {
        this.eventImage = eventImage;
    }
}
