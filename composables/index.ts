
export const useStore = () => {
    //useStateはrefを返す
    let apps = useState('apps', () => null);
    let title = useState('title', () => "N-DB設計");
    let messages: globalThis.Ref<any[]> = useState('messages', () => []);
    let user: any = useState('user', () => null);
    let printing = useState('printing', () => false);
    let isRail = useState('isRail', () => false);
    const addMessage = (message: any) => {
        if (!message.dismissible) {
            message.dismissible = false;
        }
        if (!message.time) {
            message.time = 4;
        }
        if (message.risk !== 0 && !message.risk) {
            message.risk = 3;
        }
        messages.value.push(message);
    };
    return {
        app: "100math",
        version: "1.0.0",
        apps,
        title,
        messages,
        user,
        printing,
        isRail,
        pages: [
            {
                title: "ユーザ情報", to: "/user",
                description: "ユーザの登録情報の変更ができます。",
                icon: "mdi-account",
                conds: {
                    signedIn: true,
                    appSelected: false,
                },
            },
        ],

        addMessage,
    };
};
export const useTasks = () => useState('tasks', () => 0);