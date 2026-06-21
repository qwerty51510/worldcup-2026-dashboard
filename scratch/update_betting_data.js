const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.json');
const rawData = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(rawData);

const bettingData = {
  "tun-jpn": {
    "handicap": "日本 -1",
    "totals": "大 2.0",
    "recommendation": "日本 -1 让分客胜 (即日本赢盘)",
    "reason": "日本队在小范围地面的控制力极强，且三笘薰在左路的单点爆破极易扯开突尼斯的五防线。虽然突尼斯防守硬度高，但日本队的后备力量能给突尼斯持续施压，在领先一球后突尼斯被迫压上极易被日本扩大比分。"
  },
  "esp-sau": {
    "handicap": "西班牙 -1.5",
    "totals": "小 2.75",
    "recommendation": "西班牙 -1.5 让分主胜 (即西班牙赢盘)",
    "reason": "西班牙首战被冷门逼平后本场必须大胜以夺回主动权。沙特防线虽然在低位纠缠，但对于西班牙的肋部传切极其不适应。西班牙预计以控球窒息对手，2-0 零封带走比赛，打穿让球盘，且总进球在小球区间。"
  },
  "bel-irn": {
    "handicap": "比利时 -1",
    "totals": "大 2.25",
    "recommendation": "进球数大于 2.25 (大球)",
    "reason": "德布劳内在中场的长塞能制造大量的二点威胁，而比利时防线老将费尔通亨转身较慢，很容易被伊朗双塔塔雷米与阿兹蒙抓住反击空档破门。两队均有破门能力，大球概率最高。"
  },
  "uru-cpv": {
    "handicap": "乌拉圭 -1.25",
    "totals": "小 2.5",
    "recommendation": "乌拉圭 -1.25 让分主胜 (即乌拉圭赢盘)",
    "reason": "乌拉圭在前场的 Gegenpressing 压迫效率高，能极快阻断佛得角由门德斯发起的反击。佛得角虽有铁桶防御但难以通过中半场，乌拉圭预计 2-0 胜出打穿 1.25 盘口，并且佛得角很难取得进球。"
  },
  "nzl-egy": {
    "handicap": "埃及 -0.75",
    "totals": "大 2.25",
    "recommendation": "埃及 -0.75 让分客胜 (即埃及赢盘)",
    "reason": "新西兰的四后卫防线在防守速度快的边路时容易吃力，萨拉赫在右翼的超速内切几乎是无解的爆破点。虽然新西兰能依靠克里斯·伍德的空海优势通过定位球攻入一球，但防不住萨拉赫和马尔穆什的联袂冲击。"
  }
};

for (const matchId in bettingData) {
  if (data[matchId]) {
    data[matchId].bettingPrediction = bettingData[matchId];
  }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully injected betting predictions into data.json!');
