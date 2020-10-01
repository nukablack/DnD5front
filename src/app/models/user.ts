export class User {
  constructor(
    public id: number,
    public role: string,
    public nickname: string,
    public password: string,
    public email: string
  ){}
}
