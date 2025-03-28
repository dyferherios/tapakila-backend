import { User } from "./User.js";

export class Feedback {
  id: string;
  user: User;
  subject: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;

  constructor(id: string, user: User, subject: string, message: string, createdAt: Date, updatedAt: Date, deletedAt?: Date) {
    this.id = id;
    this.user = user;
    this.subject = subject;
    this.message = message;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  public getId(): string {
    return this.id;
  }

  public getUser(): User {
    return this.user;
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

  public setUser(user: User): void {
    this.user = user;
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
