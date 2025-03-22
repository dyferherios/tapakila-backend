import { TicketType } from "./TicketType.js";
import { Event } from "./Event.js";
import { User } from "./User.js";
import { Currency } from "./Currency.js";

export class Ticket {
  id: string;
  event: Event;
  ticketType: TicketType;
  user: User;
  ticketNumber: string;
  amountPaid: number;
  currency: Currency;
  paymentConfirmed: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;

  constructor(id: string, event: Event, ticketType: TicketType, user: User, ticketNumber: string, amountPaid: number, currency: Currency, paymentConfirmed: boolean, createdAt: Date, updatedAt: Date, deletedAt?: Date) {
    this.id = id;
    this.event = event;
    this.ticketType = ticketType;
    this.user = user;
    this.ticketNumber = ticketNumber;
    this.amountPaid = amountPaid;
    this.currency = currency;
    this.paymentConfirmed = paymentConfirmed;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
  public getId(): string {
    return this.id;
  }
  public getEvent(): Event {
    return this.event;
  }
  public getticketType(): TicketType {
    return this.ticketType;
  }
  public getUser(): User {
    return this.user;
  }
  public getTicketNumber(): string {
    return this.ticketNumber;
  }
  public getAmountPaid(): number {
    return this.amountPaid;
  }
  public getCurrency(): Currency {
    return this.currency;
  }
  public getPaymentConfirmed(): boolean {
    return this.paymentConfirmed;
  }
  public getCreated(): Date {
    return this.createdAt;
  }
  public getUpdated(): Date {
    return this.updatedAt;
  }
  public getDeleted(): Date | undefined {
    return this.deletedAt;
  }
  public setId(id: string): void {
    this.id = id;
  }
  public setEvent(event: Event): void {
    this.event = event;
  }
  public setticketType(ticketType: TicketType): void {
    this.ticketType = ticketType;
  }
  public setUser(user: User): void {
    this.user = user;
  }
  public setTicketNumber(ticketNumber: string): void {
    this.ticketNumber = ticketNumber;
  }
  public setAmountPaid(amountPaid: number): void {
    this.amountPaid = amountPaid;
  }
  public setCurrency(currency: Currency): void {
    this.currency = currency;
  }
  public setPaymentConfirmed(paymentConfirmed: boolean): void {
    this.paymentConfirmed = paymentConfirmed;
  }
  public setCreated(createdAt: Date): void {
    this.createdAt = createdAt;
  }
  public setUpdated(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}