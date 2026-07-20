export class RequirementPrompt {

    public static build(requirement: string): string {

        return `
You are a Senior QA Architect.

Analyze the following software requirement.

Return ONLY valid JSON.

Do NOT use markdown.

Do NOT explain.

Return exactly this structure.

{
  "summary": "",
  "functionalRequirements": [
    {
      "name": "",
      "description": ""
    }
  ],
  "businessRules": [
    {
      "name": "",
      "description": ""
    }
  ],
  "risks": [
    {
      "name": "",
      "description": ""
    }
  ],
  "testScenarios": [
    {
      "scenario": "",
      "description": ""
    }
  ]
}

Requirement:

${requirement}
`;

    }

}