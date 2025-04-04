export class TicketDTO {
  eventId: string;
  title: string;
  slug: string;
  ticketType: string;
  description: string;
  availableTicket: number;
  totalTicket: number;
  price: number;
  currency: string;
  ticketNumber: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;

  constructor(
    eventId: string,
    title: string,
    slug: string,
    ticketType: string,
    description: string,
    availableTicket: number,
    totalTicket: number,
    price: number,
    currency: string,
    ticketNumber: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.eventId = eventId;
    this.title = title;
    this.slug = slug;
    this.ticketType = ticketType;
    this.description = description;
    this.availableTicket = availableTicket;
    this.totalTicket = totalTicket;
    this.ticketNumber = ticketNumber;
    this.price = price;
    this.currency = currency;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  public getEventId(): string {
    return this.eventId;
  }
  public setEventId(eventId: string): void {
    this.eventId = eventId;
  }
  public getTitle(): string {
    return this.title;
  }
  public getSlug(): string {
    return this.slug;
  }
  getTicketType(): string {
    return this.ticketType;
  }
  public getTicketNumber(): string {
    return this.ticketNumber;
  }
  public setTIcketType(ticketType: string): void {
    this.ticketType = ticketType;
  }
  public setTicketNumber(ticketNumber: string): void {
    this.ticketNumber = ticketNumber;
  }
  public getDescription(): string {
    return this.description;
  }
  public getAvailableTicket(): number {
    return this.availableTicket;
  }
  public getTotalTicket(): number {
    return this.totalTicket;
  }
  public getPrice(): number {
    return this.price;
  }
  public getCurrency(): string {
    return this.currency;
  }
  public getCreatedAt(): Date {
    return this.createdAt;
  }
  public getUpdatedAt(): Date {
    return this.updatedAt;
  }
  public getDeletedAt(): Date | undefined {
    return this.deletedAt;
  }
  public setTitle(title: string): void {
    this.title = title;
  }
  public setSlug(slug: string): void {
    this.slug = slug;
  }
  public setDescription(description: string): void {
    this.description = description;
  }
  public setAvailableTicket(availableTicket: number): void {
    this.availableTicket = availableTicket;
  }
  public setTotalTicket(totalTicket: number): void {
    this.totalTicket = totalTicket;
  }
    
  public setPrice(price: number): void {
    this.price = price;
  }
  public setCurrency(currency: string): void {
    this.currency = currency;
  }
  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }
}