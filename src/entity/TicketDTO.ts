export class TicketDTO {
  title: string;
  slug: string;
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
    title: string,
    slug: string,
    description: string,
    availableTicket: number,
    totalTicket: number,
    price: number,
    currency: string,
    ticketNumber: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.title = title;
    this.slug = slug;
    this.description = description;
    this.availableTicket = availableTicket;
    this.totalTicket = totalTicket;
    this.ticketNumber = ticketNumber;
    this.price = price;
    this.currency = currency;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  public getTitle(): string {
    return this.title;
  }
  public getSlug(): string {
    return this.slug;
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