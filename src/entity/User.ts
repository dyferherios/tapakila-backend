import { Country } from "./Country.js";
import { Role } from "./Role.js";

export class User {
  id: string;
  roleId: Role;
  username: string;
  name: string;
  email: string;
  emailVerifiedAt: Date;
  password: string;
  imageUrl: string;
  countryId: Country;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;

  constructor(
    id: string,
    roleId: Role,
    username: string,
    name: string,
    email: string,
    emailVerifiedAt: Date,
    password: string,
    imageUrl: string,
    countryId: Country,
    createdAt: Date,
    updatedAt: Date,
    deletedAt?: Date
  ) {
    this.id = id;
    this.roleId = roleId;
    this.username = username;
    this.name = name;
    this.email = email;
    this.emailVerifiedAt = emailVerifiedAt;
    this.password = password;
    this.imageUrl = imageUrl;
    this.countryId = countryId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  public getId(): string {
    return this.id;
  }
  public getRoleId(): Role {
    return this.roleId;
  }
  public getUsername(): string {
    return this.username;
  }
  public getName(): string {
    return this.name;
  }
  public getEmail(): string {
    return this.email;
  }
  public getEmailVerifiedAt(): Date {
    return this.emailVerifiedAt;
  }
  public getPassword(): string {
    return this.password;
  }
  public getImageUrl(): string {
    return this.imageUrl;
  }
  public getCountryId(): Country {
    return this.countryId;
  }
  public getCreatedAt(): Date {
    return this.createdAt;
  }
  public getUpdatedAt(): Date {
    return this.updatedAt;
  }
  public getDeletedAt(): Date | undefined {
    return this.deletedAt
  }
  public setId(id: string): void {
    this.id = id;
  }
  public setRoleId(roleId: Role): void {
    this.roleId = roleId;
  }
  public setUsername(username: string): void {
    this.username
  }
  public setName(name: string): void {
    this.name = name;
  }
  public setEmail(email: string): void {
    this.email = email;
  }
  public setEmailVerifiedAt(emailVerifiedAt: Date): void {
    this.emailVerifiedAt = emailVerifiedAt;
  }
  public setPassword(password: string): void {
    this.password = password;
  }
  public setImageUrl(imageUrl: string): void {
    this.imageUrl = imageUrl;
  }
  public setCountryId(countryId: Country): void {
    this.countryId = countryId;
  }
  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }
  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }

}