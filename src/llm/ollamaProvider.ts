import { LLMResponse } from "../models/LLMResponse";

export class OllamaProvider {

    public async analyze(prompt: string): Promise<string> {

        const response = await fetch("http://localhost:11434/api/generate", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                model: "qwen2.5:7b",
                prompt,
                stream: false
            })

        });

        if (!response.ok) {
            throw new Error("Unable to connect to Ollama.");
        }

        const result = await response.json() as LLMResponse;

        return result.response;
    }

}