import { User } from "./User.js";

export class Feedback {
  id: string;
  userId: User;
  subject: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;

  constructor(id: string, userId: User, subject: string, message: string, createdAt: Date, updatedAt: Date, deletedAt?: Date) {
    this.id = id;
    this.userId = userId;
    this.subject = subject;
    this.message = message;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  public getId(): string {
    return this.id;
  }

  public getUserId(): User {
    return this.userId;
  }

  public getSubject(): string {
    return this.subject;
  }

  public getMessage(): string {
    return this.message;
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

  public setUserId(userId: User): void {
    this.userId = userId;
  }

  public setSubject(subject: string): void {
    this.subject = subject;
  }

  public setMessage(message: string): void {
    this.message = message;
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
