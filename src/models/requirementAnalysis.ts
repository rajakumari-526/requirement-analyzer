export interface FunctionalRequirement {
    name: string;
    description: string;
}

export interface BusinessRule {
    name: string;
    description: string;
}

export interface Risk {
    name: string;
    description: string;
}

export interface TestScenario {
    scenario: string;
    description: string;
}

export interface RequirementAnalysis {
    summary: string;
    functionalRequirements: FunctionalRequirement[];
    businessRules: BusinessRule[];
    risks: Risk[];
    testScenarios: TestScenario[];
}