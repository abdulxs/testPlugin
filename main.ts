import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting, WorkspaceLeaf } from 'obsidian';

export default class MyPlugin extends Plugin {
	
	onload() {
		this.addCommand({
			id: 'cycle-through-panes',
			name: 'Cycle through pane',
			checkCallback: (checking: boolean) => {
				const leaf = this.app.workspace.activeLeaf;
				if(leaf) {
					if(!checking){
						const leafs = this.app.workspace.getLeavesOfType("markdown");
						const index = leafs.indexOf(leaf);
						if(index === leafs.length - 1){
							this.app.workspace.setActiveLeaf(leafs.first());
						} else {
						this.app.workspace.setActiveLeaf(leafs[index + 1]);					
					}
					return true;
				}
				return false;
				}
			}
		});


		this.addCommand({
			id: 'cycle-through-panes-reverse',
			name: 'Cycle through pane (Reverse)',
			checkCallback: (checking: boolean) => {
				const leaf = this.app.workspace.activeLeaf;
				if(leaf) {
					if(!checking){
						const leafs = this.app.workspace.getLeavesOfType("markdown");
						const index = leafs.indexOf(leaf);
						if(index === 0){
							this.app.workspace.setActiveLeaf(leafs.last());
						} else {
						this.app.workspace.setActiveLeaf(leafs[index - 1]);					
					}
					return true;
				}
				return false;
				}
			}
		});
	}

	onunload() {

	}
}