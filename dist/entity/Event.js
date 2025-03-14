export class Event {
    constructor(id, eventHallId, hostId, userId, title, slug, description, startDate, startTime, endDate, endTime, ageLimit, createdAt, updatedAt) {
        this.id = id;
        this.eventHallId = eventHallId;
        this.hostId = hostId;
        this.userId = userId;
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
    }
    getId() {
        return this.id;
    }
    getEventHallId() {
        return this.eventHallId;
    }
    getHostId() {
        return this.hostId;
    }
    getUserId() {
        return this.userId;
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
    setEventHallId(eventHallId) {
        this.eventHallId = eventHallId;
    }
    setHostId(hostId) {
        this.hostId = hostId;
    }
    setUserId(userId) {
        this.userId = userId;
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
}
