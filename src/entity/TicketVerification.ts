import { Ticket } from "./Ticket.js";
import { User } from "./User.js";

export class TicketVerification {
  id: string;
  ticketId: Ticket;
  userId: User;
  paymentConfirmed: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  constructor(id: string, ticketId: Ticket, userId: User, paymentConfirmed: boolean, createdAt: Date, updatedAt: Date, deletedAt?: Date) {
    this.id = id;
    this.ticketId = ticketId;
    this.userId = userId;
    this.paymentConfirmed = paymentConfirmed;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
  public getId(): string {
    return this.id;
  }
  public getTicketId(): Ticket {
    return this.ticketId;
  }
  public getUserId(): User {
    return this.userId;
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
  public setTicketId(ticketId: Ticket): void {
    this.ticketId = ticketId;
  }
  public setUserId(userId: User): void {
    this.userId = userId;
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