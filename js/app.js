const app = Vue.createApp({
    data() {
        return {
            avatarUrl: 'img/avatar.png',
            name: {label: "姓名", id: "name", value: this.generateName()},
            occupation: {label: "職業", value: "死肥宅"},
            age: {label: "年齡", value: Math.floor(Math.random() * 99) + 1},
            residence: {label: "居住地", value: "波士頓"},
            birthplace: {label: "出生地", value: "洛杉磯"},
            attributes: [
                {label: "力量", id: "strength", value: this.genAttr()},
                {label: "敏捷", id: "dexterity", value: this.genAttr()},
                {label: "意志", id: "willpower", value: this.genAttr()},
                {label: "體質", id: "constitution", value: this.genAttr()},
                {label: "外貌", id: "appearance", value: this.genAttr()},
                {label: "教育", id: "education", value: this.genAttr()},
                {label: "體型", id: "size", value: this.genAttr()},
                {label: "智力", id: "intelligence", value: this.genAttr()},
                {label: "閃躲", id: "dodge", value: this.genAttr()},
            ],
            moverate: {label: "移動", value: 8},
            damagebounds: {label: "攻擊加成", value: 0},
            build: {label: "防禦", value: 0},
            hitPoints: {label: "生命", current: 11, max: 11},
            sanity: {label: "心智", current: 11, max: 12},
            luck: {label: "幸運", current: 11, max: 13},
            magicPoints: {label: "魔法", current: 11, max: 14},
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
            const lastName = ["偉", "芳", "婷", "秀英", "敏", "靜", "麗", "強", "磊", "洋", "艷", "勇", "軍", "杰",
                "娟", "濤", "超", "明", "霞", "秀蘭", "剛", "平", "燕", "輝", "玲", "桂英"];
            const sex = ['<i class="fa-solid fa-mars ms-auto"></i>',
                '<i class="fa-solid fa-venus ms-auto"></i>'];
            const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
            const randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
            const randomSex = sex[Math.floor(Math.random() * sex.length)];

            return randomFirstName + randomLastName + randomSex;
        },
        modifyValue(obj, delta) {
            const newValue = obj.current + delta;
            if (newValue >= 0 && newValue <= obj.max) {
                obj.current = newValue;
            }
        },
        decHP() {
            this.modifyValue(this.hitPoints, -1);
        },
        incHP() {
            this.modifyValue(this.hitPoints, 1);
        },
        decSAN() {
            this.modifyValue(this.sanity, -1);
        },
        incSAN() {
            this.modifyValue(this.sanity, 1);
        },
        decLUK() {
            this.modifyValue(this.luck, -1);
        },
        incLUK() {
            this.modifyValue(this.luck, 1);
        },
        decMP() {
            this.modifyValue(this.magicPoints, -1);
        },
        incMP() {
            this.modifyValue(this.magicPoints, 1);
        },
    },
});

app.component('attr-card', {
    props: ['attr'],
    template: `
    <div class="card">
        <div class="card-header" v-bind:title="attr.label">
            <i v-bind:class="attr.icon">{{ attr.label }}</i>
        </div>        
        <div class="card-body">
            <div>{{ attr.value }}</div>
            <div class="badge bg-dark text-white mx-1">{{ Math.floor(attr.value / 2) }}</div>
            <div class="badge bg-dark text-white mx-1">{{ Math.floor(attr.value / 5) }}</div>
        </div>
    </div>
  `
});

app.mount("#app");

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
