import { groq } from "@/lib/groq";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const prompt = `
You are an experienced startup mentor, investor, and business strategist.

Analyze the startup's final performance based on these metrics:

Cash: ₹${data.cash}
Reputation: ${data.reputation}/100
Customers: ${data.customers}
Employees: ${data.employees}
Product Quality: ${data.productQuality}/100

Generate a professional founder evaluation using the following format:

🏆 Founder Score:
(Give a score out of 100)

👤 Founder Personality:
(Choose one that best fits:
Visionary Founder,
Data-Driven CEO,
Customer-Centric Founder,
Aggressive Risk Taker,
Balanced Entrepreneur,
Growth Strategist)

💰 Financial Health:
(Excellent / Good / Average / Poor)

📈 Business Growth:
(Excellent / Good / Moderate / Weak)

🤝 Leadership:
Evaluate leadership based on employee count and reputation.

⭐ Top Strengths:
Give exactly 3 concise bullet points.

⚠ Areas to Improve:
Give exactly 3 concise bullet points.

🎯 Recommendation:
Give one practical recommendation for the founder's next step.

🚀 Final Verdict:
Write a short motivational conclusion (2–3 sentences).

Rules:
- Keep the total response under 220 words.
- Be constructive and realistic.
- Do not use Markdown tables.
- Use emojis exactly as shown above.
`;

    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    return Response.json({
      report:
        completion.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to generate report" },
      { status: 500 }
    );
  }
}