import {App} from "~/utils/class/app";
import {useStore} from "~/composables";

export class BaseSetClass<T> {
    selectedApp?: globalThis.Ref<App | null>;
    isSignedIn?: globalThis.Ref<boolean>;
    addMessage?: any;

    newItem: T | null = null;
    items: T[] = [];
    selects: number[] = [];
    selected: T | null = null;
    editing: T | null = null;

    constructor(cls: new () => T) {
        let {selectedApp, isSignedIn, addMessage} = useStore();
        this.selectedApp = selectedApp;
        this.isSignedIn = isSignedIn;
        this.addMessage = addMessage;
        this.newItem = new cls();
    }

    edit(item: T) {
        this.editing = {...item};
    }

    select(item: T) {
        this.selected = {...item};
    }
}