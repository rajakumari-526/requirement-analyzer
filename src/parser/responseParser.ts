import { RequirementAnalysis } from "../models/requirementAnalysis";

export class ResponseParser {

    public static parse(response: string): RequirementAnalysis {

        const cleaned = response
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        try {

            return JSON.parse(cleaned) as RequirementAnalysis;

        } catch {

            throw new Error(
                "AI returned an invalid JSON response.\n\nResponse:\n\n" + cleaned
            );

        }

    }

}