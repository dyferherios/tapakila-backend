export class Country {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;

  constructor(id: string, name: string, createdAt: Date, updatedAt: Date, deletedAt?: Date) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
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
  public setName(name: string): void {
    this.name = name;
  }
  public setCreated(createdAt: Date): void {
    this.createdAt = createdAt;
  }
  public setUpdated(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
  public setDeleted(deletedAt: Date): void {
    this.deletedAt = deletedAt;
  }
}