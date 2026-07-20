import { RequirementAnalysis } from "../models/requirementAnalysis";
import { OllamaProvider } from "../llm/ollamaProvider";
import { RequirementPrompt } from "../prompts/requirementPrompt";
import { ResponseParser } from "../parser/responseParser";

export class RequirementAnalyzer {

    private readonly ollamaProvider = new OllamaProvider();

    public async analyze(
        requirement: string
    ): Promise<RequirementAnalysis> {

        if (!requirement.trim()) {
            throw new Error("Requirement cannot be empty.");
        }

        const prompt = RequirementPrompt.build(requirement);

        const response = await this.ollamaProvider.analyze(prompt);

        const analysis = ResponseParser.parse(response);

        return analysis;
    }

}