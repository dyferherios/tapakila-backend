import { Currency } from "./Currency.js";
import { Event } from "./Event.js";
export class TicketType {
  id: string;
  event: Event;
  title: string;
  slug: string;
  description: string;
  availableTicket: number;
  price: number;
  currency: Currency;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;

  constructor(id: string, event: Event, title: string, slug: string, description: string, availableTicket: number, price: number, currency: Currency, createdAt: Date, updatedAt: Date) {
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

  public getId(): string {
    return this.id;
  } 
  public getEvent(): Event {
    return this.event;
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
  public getCurrency(): Currency {
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
  public setId(id: string): void {
    this.id = id;
  }
  public setEvent(event: Event): void {
    this.event = event;
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
  public setCurrency(currency: Currency): void {
    this.currency = currency;
  }
  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

}