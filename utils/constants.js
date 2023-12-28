export const PREFECTURES = ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県', '茨城県',
    '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県', '富山県',
    '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県', '三重県',
    '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県', '鳥取県', '島根県',
    '岡山県', '広島県', '山口県', '徳島県', '香川県', '愛媛県', '高知県', '福岡県',
    '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'];

export const SEX = [
    {
        title: "未定義",
        description: "性別を指定しません",
        value: 0
    },
    {
        title: "男性",
        description: "",
        value: 1
    },
    {
        title: "女性",
        description: "",
        value: 2
    },
    {
        title: "その他",
        description: "",
        value: 3
    },
];
let SEX_OBJECT = {};
for (let g of SEX) {
    SEX_OBJECT[g.value] = g;
}
export {SEX_OBJECT};

export default {
    SEX, SEX_OBJECT,
};

export const PERMISSION = [
    {
        title: "オーナー",
        description: "",
        value: 1,
    },
    {
        title: "マネージャー",
        description: "",
        value: 3,
    },
    {
        title: "閲覧者",
        description: "",
        value: 5,
    },
];
let PERMISSION_OBJECT = {};
for (let g of PERMISSION) {
    PERMISSION_OBJECT[g.value] = g;
}
export {PERMISSION_OBJECT};

export const WEEKS = [
    {title: "日曜日", value: "sunday", short: "日"},
    {title: "月曜日", value: "monday", short: "月"},
    {title: "火曜日", value: "tuesday", short: "火"},
    {title: "水曜日", value: "wednesday", short: "水"},
    {title: "木曜日", value: "thursday", short: "木"},
    {title: "金曜日", value: "friday", short: "金"},
    {title: "土曜日", value: "saturday", short: "土"},
];
let WEEKS_OBJECT = {};
for (let g of WEEKS) {
    WEEKS_OBJECT[g.value] = g;
}
export {WEEKS_OBJECT};