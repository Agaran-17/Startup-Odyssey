import { groq } from "@/lib/groq";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const prompt = `
You are an expert startup mentor.

Analyze this startup journey:

Cash: ${data.cash}
Reputation: ${data.reputation}
Customers: ${data.customers}
Employees: ${data.employees}
Product Quality: ${data.productQuality}

Give:
1. Founder Score /100
2. Strengths
3. Weaknesses
4. Final Verdict

Keep the response under 150 words.
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