export class Tag {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;

    constructor(id: string, title: string, description: string, createdAt: Date, updatedAt: Date, deletedAt?: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public getId(): string {
        return this.id;
    }
    
    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
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
    public setTitle(title: string): void {
        this.title = title;
    }
    public setDescription(description: string): void {
        this.description = description;
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