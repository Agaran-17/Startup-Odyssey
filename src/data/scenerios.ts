import { Scenario } from "@/types/scenerio";

export const scenarios: Scenario[] = [
  {
    day: 1,
    title: "Leo's First Customer",
    question:
      "A customer wants a custom feature before purchasing. What will you do?",

    choices: [
      {
        text: "Build it",
        effects: {
          cash: -10000,
          reputation: 5,
          customers: 1,
          employees: 0,
          productQuality: 3,
        },
      },
      {
        text: "Promise it later",
        effects: {
          cash: 0,
          reputation: 2,
          customers: 1,
          employees: 0,
          productQuality: 0,
        },
      },
      {
        text: "Reject it",
        effects: {
          cash: 0,
          reputation: -3,
          customers: 0,
          employees: 0,
          productQuality: 0,
        },
      },
    ],
  },

  {
    day: 2,
    title: "Bug Report",
    question:
      "A customer reports a major bug. What will you do?",

    choices: [
      {
        text: "Fix it immediately",
        effects: {
          cash: -5000,
          reputation: 5,
          customers: 0,
          employees: 0,
          productQuality: 5,
        },
      },

      {
        text: "Delay the fix",
        effects: {
          cash: 0,
          reputation: -3,
          customers: -1,
          employees: 0,
          productQuality: -2,
        },
      },

      {
        text: "Ignore it",
        effects: {
          cash: 0,
          reputation: -8,
          customers: -2,
          employees: 0,
          productQuality: -5,
        },
      },
    ],
  },

  {
  day: 3,
  title: "Social Media Opportunity",
  question:
    "A startup page offers to feature your startup. What will you do?",

  choices: [
    {
      text: "Pay for the feature",
      effects: {
        cash: -15000,
        reputation: 3,
        customers: 15,
        employees: 0,
        productQuality: 0,
      },
    },

    {
      text: "Request collaboration",
      effects: {
        cash: 0,
        reputation: 2,
        customers: 8,
        employees: 0,
        productQuality: 0,
      },
    },

    {
      text: "Ignore it",
      effects: {
        cash: 0,
        reputation: 0,
        customers: 0,
        employees: 0,
        productQuality: 0,
       },
     },
   ],
 },

 {
  day: 4,
  title: "Customer Feature Request",
  question:
    "Multiple customers are requesting a new feature. What will you do?",

  choices: [
    {
      text: "Build it now",
      effects: {
        cash: -10000,
        reputation: 5,
        customers: 5,
        employees: 0,
        productQuality: 8,
      },
    },

    {
      text: "Add to roadmap",
      effects: {
        cash: 0,
        reputation: 2,
        customers: 2,
        employees: 0,
        productQuality: 0,
      },
    },

    {
      text: "Ignore the request",
      effects: {
        cash: 0,
        reputation: -5,
        customers: -3,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 5,
  title: "Customer Review",
  question:
    "A happy customer wants to share a public review. What will you do?",

  choices: [
    {
      text: "Promote the review",
      effects: {
        cash: 0,
        reputation: 5,
        customers: 10,
        employees: 0,
        productQuality: 0,
      },
    },

    {
      text: "Ask for detailed feedback",
      effects: {
        cash: 0,
        reputation: 3,
        customers: 5,
        employees: 0,
        productQuality: 3,
      },
    },

    {
      text: "Thank them and move on",
      effects: {
        cash: 0,
        reputation: 1,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 6,
  title: "First Employee",
  question:
    "Your workload is increasing and you can't handle everything alone. What will you do?",

  choices: [
    {
      text: "Hire an experienced developer",
      effects: {
        cash: -20000,
        reputation: 0,
        customers: 0,
        employees: 1,
        productQuality: 8,
      },
    },

    {
      text: "Hire an intern",
      effects: {
        cash: -5000,
        reputation: 0,
        customers: 0,
        employees: 1,
        productQuality: 3,
      },
    },

    {
      text: "Continue working alone",
      effects: {
        cash: 0,
        reputation: 0,
        customers: 0,
        employees: 0,
        productQuality: -2,
      },
    },
  ],
},

{
  day: 7,
  title: "Limited Budget",
  question:
    "Your marketing budget is running low. What will you do?",

  choices: [
    {
      text: "Invest more in marketing",
      effects: {
        cash: -15000,
        reputation: 3,
        customers: 15,
        employees: 0,
        productQuality: 0,
      },
    },

    {
      text: "Reduce spending",
      effects: {
        cash: 0,
        reputation: 0,
        customers: 5,
        employees: 0,
        productQuality: 0,
      },
    },

    {
      text: "Stop marketing completely",
      effects: {
        cash: 0,
        reputation: -2,
        customers: -5,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 8,
  title: "New Competitor",
  question:
    "A competitor launches a product similar to yours. What will you do?",

  choices: [
    {
      text: "Improve your product",
      effects: {
        cash: -10000,
        reputation: 0,
        customers: 5,
        employees: 0,
        productQuality: 10,
      },
    },

    {
      text: "Reduce your price",
      effects: {
        cash: -5000,
        reputation: 0,
        customers: 10,
        employees: 0,
        productQuality: 0,
      },
    },

    {
      text: "Ignore them",
      effects: {
        cash: 0,
        reputation: -3,
        customers: -10,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 9,
  title: "Referral Program",
  question:
    "Existing customers suggest a referral rewards program. What will you do?",

  choices: [
    {
      text: "Launch referral program",
      effects: {
        cash: -5000,
        reputation: 3,
        customers: 20,
        employees: 0,
        productQuality: 0,
      },
    },

    {
      text: "Run a small pilot",
      effects: {
        cash: -2000,
        reputation: 0,
        customers: 10,
        employees: 0,
        productQuality: 0,
      },
    },

    {
      text: "Skip it",
      effects: {
        cash: 0,
        reputation: 0,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 10,
  title: "Startup Event",
  question:
    "A startup networking event invites you to showcase your product. What will you do?",

  choices: [
    {
      text: "Attend and present",
      effects: {
        cash: -10000,
        reputation: 8,
        customers: 15,
        employees: 0,
        productQuality: 0,
      },
    },

    {
      text: "Send your employee",
      effects: {
        cash: -5000,
        reputation: 3,
        customers: 8,
        employees: 0,
        productQuality: 0,
      },
    },

    {
      text: "Skip the event",
      effects: {
        cash: 0,
        reputation: 0,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 11,
  title: "Sudden Growth",
  question: "Your startup gains 100 new visitors this week. What will you do?",
  choices: [
    {
      text: "Upgrade infrastructure",
      effects: {
        cash: -20000,
        reputation: 5,
        customers: 10,
        employees: 0,
        productQuality: 5,
      },
    },
    {
      text: "Wait and observe",
      effects: {
        cash: 0,
        reputation: -2,
        customers: 5,
        employees: 0,
        productQuality: -3,
      },
    },
    {
      text: "Limit new users",
      effects: {
        cash: 0,
        reputation: 2,
        customers: -5,
        employees: 0,
        productQuality: 3,
      },
    },
  ],
},

{
  day: 12,
  title: "Server Issues",
  question: "Traffic spikes are slowing down your platform. What will you do?",
  choices: [
    {
      text: "Upgrade servers",
      effects: {
        cash: -15000,
        reputation: 5,
        customers: 0,
        employees: 0,
        productQuality: 5,
      },
    },
    {
      text: "Apply a temporary fix",
      effects: {
        cash: -5000,
        reputation: 0,
        customers: 0,
        employees: 0,
        productQuality: 2,
      },
    },
    {
      text: "Ignore it",
      effects: {
        cash: 0,
        reputation: -8,
        customers: -10,
        employees: 0,
        productQuality: -5,
      },
    },
  ],
},

{
  day: 13,
  title: "Employee Idea",
  question: "Your employee suggests a risky new feature. What will you do?",
  choices: [
    {
      text: "Build it",
      effects: {
        cash: -15000,
        reputation: 0,
        customers: 10,
        employees: 0,
        productQuality: 10,
      },
    },
    {
      text: "Research first",
      effects: {
        cash: -5000,
        reputation: 2,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Reject it",
      effects: {
        cash: 0,
        reputation: -2,
        customers: 0,
        employees: 0,
        productQuality: -2,
      },
    },
  ],
},

{
  day: 14,
  title: "Partnership Offer",
  question: "A larger company wants to partner with your startup. What will you do?",
  choices: [
    {
      text: "Accept immediately",
      effects: {
        cash: 5000,
        reputation: 5,
        customers: 8,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Negotiate better terms",
      effects: {
        cash: 3000,
        reputation: 10,
        customers: 5,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Reject the offer",
      effects: {
        cash: 0,
        reputation: -3,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 15,
  title: "Employee Burnout",
  question: "Your employee is showing signs of burnout. What will you do?",
  choices: [
    {
      text: "Give time off",
      effects: {
        cash: -5000,
        reputation: 5,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Push harder",
      effects: {
        cash: 0,
        reputation: -8,
        customers: 0,
        employees: 0,
        productQuality: -5,
      },
    },
    {
      text: "Hire support",
      effects: {
        cash: -15000,
        reputation: 0,
        customers: 0,
        employees: 1,
        productQuality: 5,
      },
    },
  ],
},

{
  day: 16,
  title: "Enterprise Request",
  question: "A large company wants a custom version of your product. What will you do?",
  choices: [
    {
      text: "Build it",
      effects: {
        cash: 15000,
        reputation: 3,
        customers: 5,
        employees: 0,
        productQuality: 3,
      },
    },
    {
      text: "Delay decision",
      effects: {
        cash: 0,
        reputation: -3,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Decline",
      effects: {
        cash: 0,
        reputation: -5,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 17,
  title: "Aggressive Marketing",
  question: "A marketing agency promises rapid growth. What will you do?",
  choices: [
    {
      text: "Invest heavily",
      effects: {
        cash: -25000,
        reputation: 0,
        customers: 10,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Run a small campaign",
      effects: {
        cash: -10000,
        reputation: 0,
        customers: 5,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Reject the offer",
      effects: {
        cash: 0,
        reputation: 0,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 18,
  title: "Major Client Discount",
  question: "A major client asks for a discount. What will you do?",
  choices: [
    {
      text: "Give discount",
      effects: {
        cash: 5000,
        reputation: 0,
        customers: 3,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Offer smaller discount",
      effects: {
        cash: 10000,
        reputation: 3,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Refuse",
      effects: {
        cash: 0,
        reputation: -5,
        customers: -5,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 19,
  title: "Community Growth",
  question: "Users are forming a community around your product. What will you do?",
  choices: [
    {
      text: "Build a community program",
      effects: {
        cash: -10000,
        reputation: 8,
        customers: 6,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Observe first",
      effects: {
        cash: 0,
        reputation: 2,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Ignore it",
      effects: {
        cash: 0,
        reputation: -5,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 20,
  title: "Market Expansion",
  question: "You have an opportunity to enter a new market. What will you do?",
  choices: [
    {
      text: "Expand immediately",
      effects: {
        cash: -30000,
        reputation: 5,
        customers: 10,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Research first",
      effects: {
        cash: -5000,
        reputation: 3,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Stay focused",
      effects: {
        cash: 0,
        reputation: 0,
        customers: 0,
        employees: 0,
        productQuality: 3,
      },
    },
  ],
},
{
  day: 21,
  title: "Angel Investor",
  question: "An angel investor offers funding for a share of your startup. What will you do?",
  choices: [
    {
      text: "Accept immediately",
      effects: {
        cash: 150000,
        reputation: 5,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Negotiate better terms",
      effects: {
        cash: 200000,
        reputation: 8,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Reject the offer",
      effects: {
        cash: 0,
        reputation: 2,
        customers: 0,
        employees: 0,
        productQuality: 3,
      },
    },
  ],
},

{
  day: 22,
  title: "Viral Attention",
  question: "Your startup suddenly goes viral online. What will you do?",
  choices: [
    {
      text: "Scale aggressively",
      effects: {
        cash: -50000,
        reputation: 5,
        customers: 25,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Grow carefully",
      effects: {
        cash: 0,
        reputation: 3,
        customers: 8,
        employees: 0,
        productQuality: 5,
      },
    },
    {
      text: "Cash out the attention",
      effects: {
        cash: 25000,
        reputation: -10,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 23,
  title: "Competitor Price War",
  question: "A competitor cuts their prices by 50%. What will you do?",
  choices: [
    {
      text: "Match their price",
      effects: {
        cash: -30000,
        reputation: 0,
        customers: 20,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Focus on quality",
      effects: {
        cash: 0,
        reputation: 5,
        customers: 0,
        employees: 0,
        productQuality: 10,
      },
    },
    {
      text: "Focus on branding",
      effects: {
        cash: -10000,
        reputation: 8,
        customers: 10,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 24,
  title: "Security Issue",
  question: "A security flaw is discovered in your product. What will you do?",
  choices: [
    {
      text: "Fix and announce it",
      effects: {
        cash: -20000,
        reputation: 10,
        customers: 0,
        employees: 0,
        productQuality: 5,
      },
    },
    {
      text: "Fix quietly",
      effects: {
        cash: -10000,
        reputation: 2,
        customers: 0,
        employees: 0,
        productQuality: 3,
      },
    },
    {
      text: "Ignore it",
      effects: {
        cash: 0,
        reputation: -15,
        customers: -20,
        employees: 0,
        productQuality: -10,
      },
    },
  ],
},

{
  day: 25,
  title: "Economic Slowdown",
  question: "The market is slowing down. What will you do?",
  choices: [
    {
      text: "Reduce expenses",
      effects: {
        cash: 15000,
        reputation: -5,
        customers: 0,
        employees: -1,
        productQuality: 0,
      },
    },
    {
      text: "Invest aggressively",
      effects: {
        cash: -40000,
        reputation: 0,
        customers: 25,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Maintain strategy",
      effects: {
        cash: 0,
        reputation: 0,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 26,
  title: "Acquisition Offer",
  question: "A large company wants to acquire your startup. What will you do?",
  choices: [
    {
      text: "Sell the startup",
      effects: {
        cash: 200000,
        reputation: 5,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Negotiate a better deal",
      effects: {
        cash: 150000,
        reputation: 10,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Stay independent",
      effects: {
        cash: 0,
        reputation: 5,
        customers: 0,
        employees: 0,
        productQuality: 5,
      },
    },
  ],
},

{
  day: 27,
  title: "Unexpected Growth",
  question: "Customer growth is exploding beyond expectations. What will you do?",
  choices: [
    {
      text: "Upgrade infrastructure",
      effects: {
        cash: -30000,
        reputation: 5,
        customers: 30,
        employees: 0,
        productQuality: 5,
      },
    },
    {
      text: "Focus on marketing",
      effects: {
        cash: -20000,
        reputation: 0,
        customers: 40,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Save money",
      effects: {
        cash: 10000,
        reputation: -5,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 28,
  title: "Legal Notice",
  question: "A competitor sends a legal notice. What will you do?",
  choices: [
    {
      text: "Fight legally",
      effects: {
        cash: -50000,
        reputation: 10,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Settle peacefully",
      effects: {
        cash: -200000,
        reputation: 2,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Ignore it",
      effects: {
        cash: 0,
        reputation: -15,
        customers: -10,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 29,
  title: "Founder Award",
  question: "You are nominated for a national startup award. What will you do?",
  choices: [
    {
      text: "Campaign heavily",
      effects: {
        cash: -15000,
        reputation: 15,
        customers: 5,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Stay focused on product",
      effects: {
        cash: 0,
        reputation: 5,
        customers: 0,
        employees: 0,
        productQuality: 5,
      },
    },
    {
      text: "Withdraw",
      effects: {
        cash: 0,
        reputation: 0,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
  ],
},

{
  day: 30,
  title: "The Final Decision",
  question: "A global investor offers massive funding but wants significant control. What will you do?",
  choices: [
    {
      text: "Accept the deal",
      effects: {
        cash: 400000,
        reputation: -10,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Negotiate better terms",
      effects: {
        cash: 350000,
        reputation: 10,
        customers: 0,
        employees: 0,
        productQuality: 0,
      },
    },
    {
      text: "Stay independent",
      effects: {
        cash: 0,
        reputation: 15,
        customers: 0,
        employees: 0,
        productQuality: 10,
      },
    },
  ],
},
];