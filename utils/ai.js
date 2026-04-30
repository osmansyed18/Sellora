const Groq = require("groq-sdk");

// Lazy initialization - only create client when needed
let groq = null;

function getGroqClient() {
  if (!groq && process.env.GROQ_API_KEY) {
    groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
  }
  return groq;
}

async function generateReviewOverview(reviews) {
  const client = getGroqClient();

  // Fallback if no API key configured
  if (!client) {
    const avgRating =
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    return `Based on ${reviews.length} reviews with an average rating of ${avgRating.toFixed(
      1
    )}/5. Guests have shared their experiences about this property.`;
  }

  const allReviewsText = reviews
    .map(
      (r, i) => `Review ${i + 1}: Rating: ${r.rating}/5, Comment: ${r.comment}`
    )
    .join("\n");

  const prompt = `
You are an assistant summarizing customer reviews for a stay/hotel listing.
Write an AI overview in 4-6 lines.

Rules:
- Mention overall sentiment
- Mention positives and negatives
- Keep it simple and human-friendly
- in summary dont write as "**Hotel Overview**" just start giving summary

Reviews:
${allReviewsText}
`;

  try {
    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Groq API error:", error.message);
    const avgRating =
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    return `Based on ${reviews.length} reviews with an average rating of ${avgRating.toFixed(
      1
    )}/5. Guests have shared their experiences about this property.`;
  }
}

module.exports = { generateReviewOverview };
