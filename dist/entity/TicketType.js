export class TicketType {
    constructor(id, eventId, title, slug, description, availableTicket, price, currencyId, createdAt, updatedAt) {
        this.id = id;
        this.eventId = eventId;
        this.title = title;
        this.slug = slug;
        this.description = description;
        this.availableTicket = availableTicket;
        this.price = price;
        this.currencyId = currencyId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    getId() {
        return this.id;
    }
    getEventId() {
        return this.eventId;
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
    getAvailableTicket() {
        return this.availableTicket;
    }
    getPrice() {
        return this.price;
    }
    getCurrencyId() {
        return this.currencyId;
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
    setEventId(eventId) {
        this.eventId = eventId;
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
    setAvailableTicket(availableTicket) {
        this.availableTicket = availableTicket;
    }
    setPrice(price) {
        this.price = price;
    }
    setCurrencyId(currencyId) {
        this.currencyId = currencyId;
    }
    setCreatedAt(createdAt) {
        this.createdAt = createdAt;
    }
}
