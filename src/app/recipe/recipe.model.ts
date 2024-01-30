export interface IRecipe {
  id?: number;
  title: string;
  description: string;
  ingredients: string[];
  creationDate?: Date;
}
