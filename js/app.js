const app = Vue.createApp({
    data() {
        return {
            avatarUrl: 'img/avatar.png',
            name: { label: "姓名", id: "name", value: this.generateName() },
            occupation: { label: "職業", value: "死肥宅" },
            age: { label: "年齡", value: Math.floor(Math.random() * 99) + 1 },
            residence: { label: "居住地", value: "波士頓" },
            birthplace: { label: "出生地", value: "洛杉磯" },
            attributes: [
                { label: "力量", id: "strength", value: this.genAttr() },
                { label: "敏捷", id: "dexterity", value: this.genAttr() },
                { label: "意志", id: "willpower", value: this.genAttr() },
                { label: "體質", id: "constitution", value: this.genAttr() },
                { label: "外貿", id: "appearance", value: this.genAttr() },
                { label: "教育", id: "education", value: this.genAttr() },
                { label: "體型", id: "size", value: this.genAttr() },
                { label: "智力", id: "intelligence", value: this.genAttr() },
                { label: "閃躲", id: "dodge", value: this.genAttr() }
            ],
            moverate: { label: "移動", value: 8 },
            damagebounds: { label: "攻擊加成", value: 0 },
            build: { label: "防禦", value: 0 },
        };
    },
    methods: {
        genAttr() {
            return (this.dice() + this.dice() + this.dice()) * 5
        },
        dice() {
            return Math.floor(Math.random() * 6) + 1;
        },
        generateName() {
            const firstName = ["張", "李", "王", "劉", "陳", "楊", "趙", "黃", "周", "吳"];
            const lastName = ["偉", "芳", "婷", "秀英", "敏", "靜", "麗", "強", "磊", "洋", "艷", "勇", "軍", "杰", "娟", "濤", "超", "明", "霞", "秀蘭", "剛", "平", "燕", "輝", "玲", "桂英"];
            const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
            const randomLastName = lastName[Math.floor(Math.random() * lastName.length)];

            return randomFirstName + randomLastName;
        },
    },
});

app.mount("#app");

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
