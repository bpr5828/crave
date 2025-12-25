import { NextResponse } from 'next/server';

export async function POST(request) {
    const { message, history } = await request.json();

    // Simple state machine logic for the mock
    // History length indicates how many interactions have happened (1 msg = initial greeting)
    const interactionCount = history.filter(h => h.role === 'user').length;

    let responseMessage = "";
    let isComplete = false;
    let recommendations = [];

    // Delay simulation
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (interactionCount === 0) {
        // Should verify cuisine input effectively, for now assume valid
        responseMessage = "That sounds delicious! Do you have any dietary restrictions/allergies I should know about? (e.g., Vegan, Gluten-Free)";
    } else if (interactionCount === 1) {
        responseMessage = "Got it. Finally, to help me balance your meal, do you have any specific nutritional goals? For example, 'High Protein' or specific logic like '40% Carbs, 30% Protein'.";
    } else {
        // Final step, generate results
        isComplete = true;
        responseMessage = "Perfect! I've analyzed your cravings and needs. Here are 3 recipes I think you'll love:";

        // Mock recommendations
        recommendations = [
            {
                id: 1,
                name: "Zesty Quinoa Bowl",
                description: "A refreshing mix of quinoa, black beans, corn, and avocado with a lime-cilantro dressing.",
                macros: { protein: "15g", carbs: "45g", fats: "12g" },
                tags: ["Vegan", "GF"],
                image: "/placeholder-food-1.jpg"
            },
            {
                id: 2,
                name: "Grilled Lemon Herb Chicken",
                description: "Juicy chicken breast marinated in lemon and herbs, served with roasted asparagus.",
                macros: { protein: "35g", carbs: "5g", fats: "10g" },
                tags: ["High Protein", "GF"],
                image: "/placeholder-food-2.jpg"
            },
            {
                id: 3,
                name: "Spicy Tofu Stir-fry",
                description: "Crispy tofu tossed with bell peppers, broccoli, and a spicy soy-ginger sauce.",
                macros: { protein: "18g", carbs: "25g", fats: "15g" },
                tags: ["Vegan", "Spicy"],
                image: "/placeholder-food-3.jpg"
            }
        ];
    }

    return NextResponse.json({
        message: responseMessage,
        isComplete,
        recommendations
    });
}
