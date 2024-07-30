import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const TRIGGER_CHAR = '"';

  const provider = vscode.languages.registerCompletionItemProvider(
    ["typescriptreact", "javascriptreact"],
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
      ) {
        const linePrefix = document
          .lineAt(position)
          .text.slice(0, position.character);

        if (!linePrefix.includes('className="')) {
          return undefined;
        }

        const cssClasses = [
          "ez-flex",
          "ez-flex--column",
          "ez-flex--column-reverse",
          "ez-flex--row-reverse",
          "ez-flex--nowrap",
          "ez-flex--wrap",
          "ez-flex--wrap-reverse",
          "ez-flex--justify-start",
          "ez-flex--justify-end",
          "ez-flex--justify-center",
          "ez-flex--justify-between",
          "ez-flex--justify-around",
          "ez-flex--justify-evenly",
          "ez-flex--align-items-stretch",
          "ez-flex--align-items-start",
          "ez-flex--align-items-end",
          "ez-flex--align-items-center",
          "ez-flex--align-items-baseline",
          "ez-flex--align-content-start",
          "ez-flex--align-content-end",
          "ez-flex--align-content-between",
          "ez-flex--align-content-around",
          "ez-flex-item--first",
          "ez-flex-item--last",
          "ez-flex-item--align-stretch",
          "ez-flex-item--align-start",
          "ez-flex-item--align-end",
          "ez-flex-item--align-center",
          "ez-flex-item--align-baseline",
          "ez-flex-item--auto",
          "ez-margin--extra-small",
          "ez-margin--small",
          "ez-margin--medium",
          "ez-margin--large",
          "ez-margin--none",
          "ez-margin--auto",
          "ez-margin-horizontal--extra-small",
          "ez-margin-horizontal--small",
          "ez-margin-horizontal--medium",
          "ez-margin-horizontal--large",
          "ez-margin-horizontal--auto",
          "ez-margin-vertical--extra-small",
          "ez-margin-vertical--small",
          "ez-margin-vertical--medium",
          "ez-margin-vertical--large",
          "ez-margin-vertical--auto",
          "ez-margin-left--extra-small",
          "ez-margin-left--small",
          "ez-margin-left--medium",
          "ez-margin-left--large",
          "ez-margin-left--auto",
          "ez-margin-right--extra-small",
          "ez-margin-right--small",
          "ez-margin-right--medium",
          "ez-margin-right--large",
          "ez-margin-right--auto",
          "ez-margin-top--extra-small",
          "ez-margin-top--small",
          "ez-margin-top--medium",
          "ez-margin-top--large",
          "ez-margin-top--auto",
          "ez-margin-bottom--extra-small",
          "ez-margin-bottom--small",
          "ez-margin-bottom--medium",
          "ez-margin-bottom--large",
          "ez-margin-bottom--auto",
          "ez-padding--extra-small",
          "ez-padding--small",
          "ez-padding--medium",
          "ez-padding--large",
          "ez-padding--none",
          "ez-padding--auto",
          "ez-padding-horizontal--extra-small",
          "ez-padding-horizontal--small",
          "ez-padding-horizontal--medium",
          "ez-padding-horizontal--large",
          "ez-padding-horizontal--auto",
          "ez-padding-vertical--extra-small",
          "ez-padding-vertical--small",
          "ez-padding-vertical--medium",
          "ez-padding-vertical--large",
          "ez-padding-vertical--auto",
          "ez-padding-left--extra-small",
          "ez-padding-left--small",
          "ez-padding-left--medium",
          "ez-padding-left--large",
          "ez-padding-left--auto",
          "ez-padding-right--extra-small",
          "ez-padding-right--small",
          "ez-padding-right--medium",
          "ez-padding-right--large",
          "ez-padding-right--auto",
          "ez-padding-top--extra-small",
          "ez-padding-top--small",
          "ez-padding-top--medium",
          "ez-padding-top--large",
          "ez-padding-top--auto",
          "ez-padding-bottom--extra-small",
          "ez-padding-bottom--small",
          "ez-padding-bottom--medium",
          "ez-padding-bottom--large",
          "ez-padding-bottom--auto",
        ];

        return cssClasses.map((cssClass) => {
          return new vscode.CompletionItem(
            cssClass,
            vscode.CompletionItemKind.Variable
          );
        });
      },
    },
    TRIGGER_CHAR
  );

  context.subscriptions.push(provider);
}

export function deactivate() {}
