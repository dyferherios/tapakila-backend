import { Currency } from "./Currency.js";
import { Event } from "./Event.js";
export class TicketType {
  id: string;
  eventId: Event;
  title: string;
  slug: string;
  description: string;
  availableTicket: number;
  price: number;
  currencyId: Currency;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;

  constructor(id: string, eventId: Event, title: string, slug: string, description: string, availableTicket: number, price: number, currencyId: Currency, createdAt: Date, updatedAt: Date) {
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

  public getId(): string {
    return this.id;
  } 
  public getEventId(): Event {
    return this.eventId;
  }
  public getTitle(): string {
    return this.title
  }
  public getSlug(): string {
    return this.slug;
  }
  public getDescription(): string {
    return this.description;
  }
  public getAvailableTicket(): number {
    return this.availableTicket
  }
  public getPrice(): number {
    return this.price;
  }
  public getCurrencyId(): Currency {
    return this.currencyId;
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
  public setId(id: string): void {
    this.id = id;
  }
  public setEventId(eventId: Event): void {
    this.eventId = eventId;
  }
  public setTitle(title: string): void {
    this.title = title;
  }
  public setSlug(slug: string): void {
    this.slug = slug
  }
  public setDescription(description: string): void {
    this.description = description;
  }
  public setAvailableTicket(availableTicket: number): void {
    this.availableTicket = availableTicket;
  }
  public setPrice(price: number): void {
    this.price = price;
  }
  public setCurrencyId(currencyId: Currency): void {
    this.currencyId = currencyId;
  }
  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

}