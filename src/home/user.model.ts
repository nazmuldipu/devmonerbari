export class User {
  constructor(
    public id?: number,
    public name?: string,
    public username?: string,
    public email?: string,
    public phoneNumber?: string,
    public password?: string,
    public enabled?: boolean,
    public remember?: boolean,
    public terms?: boolean,
    public roles?: any,
    // public company?: Company,
    ) { }
}