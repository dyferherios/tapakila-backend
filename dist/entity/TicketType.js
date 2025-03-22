export class TicketType {
    constructor(id, event, title, slug, description, availableTicket, price, currency, createdAt, updatedAt) {
        this.id = id;
        this.event = event;
        this.title = title;
        this.slug = slug;
        this.description = description;
        this.availableTicket = availableTicket;
        this.price = price;
        this.currency = currency;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    getId() {
        return this.id;
    }
    getEvent() {
        return this.event;
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
    getCurrency() {
        return this.currency;
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
    setEvent(event) {
        this.event = event;
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
    setCurrency(currency) {
        this.currency = currency;
    }
    setCreatedAt(createdAt) {
        this.createdAt = createdAt;
    }
}
