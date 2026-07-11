export interface Effects {
  cash: number;
  reputation: number;
  customers: number;
  employees: number;
  productQuality: number;
}

export interface Choice {
  text: string;
  effects: Effects;
}

export interface Scenario {
  day: number;
  title: string;
  question: string;
  choices: Choice[];
}