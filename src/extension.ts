import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const TRIGGER_CHAR = '"';

	const provider = vscode.languages.registerCompletionItemProvider(
		['typescriptreact', 'javascriptreact'],
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
					const completionItems: vscode.CompletionItem[] = [];

					const cssClasses = ['my-teste-var'];

					cssClasses.forEach(cssClass => {
							const completionItem = new vscode.CompletionItem(cssClass, vscode.CompletionItemKind.Variable);
							completionItems.push(completionItem);
					});

					return completionItems;
			}
		},
		TRIGGER_CHAR
	);

	context.subscriptions.push(provider);
}

export function deactivate() {}
