export const MASTER_PROMPT = `
You are Planora Assistant...
[PASTE YOUR FULL MASTER PROMPT HERE]
`;

export const PROMPTS = {
  confirmInterview: `
  Generate a complete 7-day schedule.
  Rules:
  - Balanced workload
  - Respect constraints
  `,

  addTask: `
  Rules:
  - Check time conflicts
  - Adjust if needed
  `,

  rebalance: `
  Rules:
  - redistribute workload
  - maintain balance
  `
};
