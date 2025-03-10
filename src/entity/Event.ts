import { EventHall } from "./EventHall.js";
import { Host } from "./Host.js";
import { User } from "./User.js";

export class Event {
  id: string;
  eventHallId: EventHall;
  hostId: Host;
  userId: User;
  title: string;
  slug: string;
  description: string;
  startDate: Date;
  startTime: string;
  endDate: Date;
  endTime: string;
  ageLimit: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;

  constructor(id: string, eventHallId: EventHall, hostId: Host, userId: User, title: string, slug: string, description: string, startDate: Date, startTime: string, endDate: Date, endTime: string, ageLimit: string, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.eventHallId = eventHallId;
    this.hostId = hostId;
    this.userId = userId;
    this.title = title;
    this.slug = slug;
    this.description = description;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endDate = endDate;
    this.endTime = endTime;
    this.ageLimit = ageLimit;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): string {
    return this.id;
  }
  public getEventHallId(): EventHall {
    return this.eventHallId;
  }
  public getHostId(): Host {
    return this.hostId;
  }
  public getUserId(): User {
    return this.userId;
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
  public getStartDate(): Date {
    return this.startDate;
  }
  public getStartTime(): string {
    return this.startTime;
  }
  public getEndDate(): Date {
    return this.endDate;
  }
  public getEndTime(): string {
    return this.endTime;
  }
  public getAgeLimit(): string {
    return this.ageLimit;
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
  public setEventHallId(eventHallId: EventHall): void {
    this.eventHallId = eventHallId;
  }
  public setHostId(hostId: Host): void {
    this.hostId = hostId;
  }
  public setUserId(userId: User): void {
    this.userId = userId;
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
  public setStartDate(startDate: Date): void {
    this.startDate = startDate;
  }
  public setStartTime(startTime: string): void {
    this.startTime = startTime;
  }
  public setEndDate(endDate: Date): void {
    this.endDate = endDate;
  }
  public setEndTime(endTime: string): void {
    this.endTime = endTime;
  }
  public setAgeLimit(ageLimit: string): void {
    this.ageLimit = ageLimit;
  }
  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }
  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt
  }
  public setDeletedAt(deletedAt: Date): void {
    this.deletedAt = deletedAt;
  }
}
