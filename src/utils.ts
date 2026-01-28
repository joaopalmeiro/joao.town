import { shuffle as d3Shuffle } from "d3-array";

export function shuffle(str: string): string {
  return d3Shuffle(str.split("")).join("");
}
