import { createInterface } from "readline";

import { calculate } from "./calculate";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (): Promise<null> =>
  new Promise((resolve) => {
    rl.question("> ", (answer: string) => {
      const result = calculate(answer);

      if (result) {
        console.log(`Result: ${result}`);
      }

      resolve(null);
    });
  });

async function app(): Promise<null> {
  while (true) {
    await question();
  }
}

app();
