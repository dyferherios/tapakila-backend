import { Ticket } from "./Ticket.js";
import { User } from "./User.js";

export class TicketVerification {
  id: string;
  ticket: Ticket;
  user: User;
  paymentConfirmed: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  constructor(id: string, ticket: Ticket, user: User, paymentConfirmed: boolean, createdAt: Date, updatedAt: Date, deletedAt?: Date) {
    this.id = id;
    this.ticket = ticket;
    this.user = user;
    this.paymentConfirmed = paymentConfirmed;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
  public getId(): string {
    return this.id;
  }
  public getTicket(): Ticket {
    return this.ticket;
  }
  public getUser(): User {
    return this.user;
  }
  public getPaymentConfirmed(): boolean {
    return this.paymentConfirmed;
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
  public setTicket(ticket: Ticket): void {
    this.ticket = ticket;
  }
  public setUser(user: User): void {
    this.user = user;
  }
  public setPaymentConfirmed(paymentConfirmed: boolean): void {
    this.paymentConfirmed = paymentConfirmed;
  }
  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }
  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
  public setDeletedAt(deletedAt: Date): void {
    this.deletedAt = deletedAt;
  }
  
}