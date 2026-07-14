// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "rajakumari" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('rajakumari.helloWorld', async () => {

        const requirement = await vscode.window.showInputBox({
            placeHolder: 'Paste your requirement here...',
            prompt: 'QA Copilot Requirement Analyzer'
        });

        if (!requirement) {
            vscode.window.showWarningMessage('No requirement was entered.');
            return;
        }

        vscode.window.showInformationMessage(
            `Requirement received (${requirement.length} characters).`
        );

    });
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
