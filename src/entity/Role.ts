export class Role {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(
    id: string,
    title: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id
    this.title = title
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  getId(): string { return this.id; }
  getTitle(): string { return this.title; }
  getCreatedAt(): Date { return this.createdAt; }
  getUpdatedAt(): Date { return this.updatedAt; }

  setTitle(title: string): void { this.title = title; }
  setUpdatedAt(updatedAt: Date): void { this.updatedAt = updatedAt; }
}