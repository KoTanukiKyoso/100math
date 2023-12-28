export const isURL = (url: string) => {
    const newValue = url;
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(newValue);
};
export const isMail = (address: string) => {
    if (!address) {
        return false;
    }
    let regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    return !!address.match(regex);
};
export const isPassword = (password: string) => {
    if (!password) {
        return false;
    }
    let regex: RegExp = new RegExp(/^[a-zA-Z0-9.!#$%&*+=?_~-]+$/);
    return !!password.match(regex);
};

export const getWEBP = (file: string, size: string | number) => {
    if (!file) {
        return;
    }
    let filenames: string[] = file.split(".");
    filenames.pop();
    let filename: string = filenames.join(".");
    return filename + "_" + size + ".webp";
};

export const rules: Dictionary = {
    required: (v: string) => !!v || '必須項目です',
    passwordMatch: (v: string) => isPassword(v) || "パスワードに使用できない文字が含まれています",
    emailMatch: (v: string) => isMail(v) || `メールアドレスの形式が不正です`,
    urlMatch: (v: string) => isURL(v) || `URLの形式が不正です`,
    min: (n: number, v: string) => (v && v.length >= n) || `${n}文字以上で入力してください`,
    max: (n: number, v: string) => (v.length <= n) || `${n}文字以下で入力してください`,
    fileSizeKMax: (n: number, v: File) => !v || (v.size <= n * 1024) || `${n}KB以下のファイルを選択してください`,
    fileSizeMMax: (n: number, v: File) => !v || (v.size <= n * 1024 * 1024) || `${n}MB以下のファイルを選択してください`,
}

export const arrayShuffle = (array: number[]) => {
    for (let i = (array.length - 1); 0 < i; i--) {
        // 0〜(i+1)の範囲で値を取得
        let r = Math.floor(Math.random() * (i + 1));
        // 要素の並び替えを実行
        let tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
    }
    return array;
}