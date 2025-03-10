import { TicketType } from "./TicketType.js";
import { Event } from "./Event.js";
import { User } from "./User.js";
import { Currency } from "./Currency.js";

export class Ticket {
  id: string;
  ticketTypeId: TicketType;
  userId: User;
  ticketNumber: string;
  amountPaid: number;
  currencyId: Currency;
  paymentConfirmed: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;

  constructor(id: string, ticketTypeId: TicketType, userId: User, ticketNumber: string, amountPaid: number, currencyId: Currency, paymentConfirmed: boolean, createdAt: Date, updatedAt: Date, deletedAt?: Date) {
    this.id = id;
    this.ticketTypeId = ticketTypeId;
    this.userId = userId;
    this.ticketNumber = ticketNumber;
    this.amountPaid = amountPaid;
    this.currencyId = currencyId;
    this.paymentConfirmed = paymentConfirmed;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
  public getId(): string {
    return this.id;
  }
  public getTicketTypeId(): TicketType {
    return this.ticketTypeId;
  }
  public getUserId(): User {
    return this.userId;
  }
  public getTicketNumber(): string {
    return this.ticketNumber;
  }
  public getAmountPaid(): number {
    return this.amountPaid;
  }
  public getCurrencyId(): Currency {
    return this.currencyId;
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
  public setTicketTypeId(ticketTypeId: TicketType): void {
    this.ticketTypeId = ticketTypeId;
  }
  public setUserId(userId: User): void {
    this.userId = userId;
  }
  public setTicketNumber(ticketNumber: string): void {
    this.ticketNumber = ticketNumber;
  }
  public setAmountPaid(amountPaid: number): void {
    this.amountPaid = amountPaid;
  }
  public setCurrencyId(currencyId: Currency): void {
    this.currencyId = currencyId;
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