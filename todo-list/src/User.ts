export class User {
    id: number;
    name: string;
    email?: string;
  
    constructor(id: number, name: string, email?: string) {
      this.id = id;
      this.name = name;
      if (email) {
        this.email = email;
      }
    }
}
  
  