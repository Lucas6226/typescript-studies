class students {
   constructor(
      readonly name: string,
      protected id: number,
      private history: string,
   ) {}
      
   myName(): string {
      return this.name;
   }
   
}