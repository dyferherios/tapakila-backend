export class Ticket {
  id: string;
  eventId: string;
  ticketTypeId: string;
  userId: string;
  ticketNumber: string;
  amountPaid: number;
  currencyId: string;
  paymentConfirmed: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;

  constructor(id: string, eventId: string, ticketTypeId: string, userId: string, ticketNumber: string, amountPaid: number, currencyId: string, paymentConfirmed: boolean, createdAt: Date, updatedAt: Date, deletedAt?: Date) {
    this.id = id;
    this.eventId = eventId;
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
  public getEventId(): string {
    return this.eventId;
  }
  public getTicketTypeId(): string {
    return this.ticketTypeId;
  }
  public getUserId(): string {
    return this.userId;
  }
  public getTicketNumber(): string {
    return this.ticketNumber;
  }
  public getAmountPaid(): number {
    return this.amountPaid;
  }
  public getCurrencyId(): string {
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
  public setEventId(eventId: string): void {
    this.eventId = eventId;
  }
  public setTicketTypeId(ticketTypeId: string): void {
    this.ticketTypeId = ticketTypeId;
  }
  public setUserId(userId: string): void {
    this.userId = userId;
  }
  public setTicketNumber(ticketNumber: string): void {
    this.ticketNumber = ticketNumber;
  }
  public setAmountPaid(amountPaid: number): void {
    this.amountPaid = amountPaid;
  }
  public setCurrencyId(currencyId: string): void {
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