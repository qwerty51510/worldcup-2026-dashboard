const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.json');
const rawData = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(rawData);

const newMatches = {
  "jor-alg": {
    "themeClass": "jor-alg-theme",
    "group": "J 组第二轮焦点战",
    "timeLoc": "北京时间 6月22日 11:00 | 芝加哥体育场",
    "teams": {
      "home": {
        "name": "约旦",
        "flag": "jor",
        "goals": 0.9,
        "shots": 8.0,
        "sot": 3.0,
        "sOff": 5.0,
        "corners": 3.2,
        "history": {
          "record1Year": "4胜 2平 4负 (胜率 40%)",
          "possession": "40.2%",
          "passAccuracy": "73.5%",
          "cleanSheets": "4次",
          "shotConversion": "11.2%",
          "conversionExplanation": "约旦队坚守极致低位防反，注重禁区合围和强力头槌防守，反击依靠塔马里的个人盘带推进。",
          "recentMatches": [
            { "opponent": "奥地利", "score": "0 - 1", "type": "世界杯", "date": "2026-06" }
          ]
        }
      },
      "away": {
        "name": "阿尔及利亚",
        "flag": "alg",
        "goals": 1.7,
        "shots": 12.5,
        "sot": 5.2,
        "sOff": 7.3,
        "corners": 5.8,
        "history": {
          "record1Year": "6胜 2平 2负 (胜率 60%)",
          "possession": "55.8%",
          "passAccuracy": "84.5%",
          "cleanSheets": "4次",
          "shotConversion": "13.6%",
          "conversionExplanation": "北非雄狮阿尔及利亚传控流畅，中场持球摆脱快，边路反击与大门终结率处于优势。",
          "recentMatches": [
            { "opponent": "阿根廷", "score": "0 - 3", "type": "世界杯", "date": "2026-06" }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "穆萨·阿尔-塔马里",
        "jersey": "10",
        "club": "蒙彼利埃",
        "role": "右边锋/反击核武",
        "color": "#fbbf24",
        "details": "约旦梅西，在右路有极强的高速突破和内切起脚能力，是约旦前场反击唯一威胁。"
      },
      "away": {
        "name": "里亚德·马赫雷斯",
        "jersey": "7",
        "club": "吉达国民",
        "role": "右边锋/队长",
        "color": "#10b981",
        "details": "阿尔及利亚核心，右路内切兜射死角和定位球传球精度极强，是进攻端绝对战术大脑。"
      },
      "description": "约旦快马塔马里的孤影突击，对抗阿尔及利亚传奇队长马赫雷斯的内切发牌。约旦防线能否承受住马赫雷斯的肋部挑塞，是本场最大看点。"
    },
    "marketPrediction": {
      "polymarketOdds": { "homeWin": 18, "draw": 32, "awayWin": 50 },
      "marketSentiment": "虽然约旦防守大巴极其具有韧性，但 Polymarket 资金依然对实力明显占优的阿尔及利亚给出了 50% 的胜率估值，防范两队陷入闷平的平局赔率也上涨至 32%。"
    },
    "bettingPrediction": {
      "handicap": "阿尔及利亚 -0.75",
      "totals": "小 2.25",
      "recommendation": "进球数小于 2.25 (小球) 胜率最高",
      "reason": "约旦防守低位大巴展现出极其强大的粘性，首战面对奥地利仅输一粒定位球。阿尔及利亚前场传跑虽然细腻但面对铁桶破门效率一般，预计本场场面极为焦滞沉闷，小球胜率极高。"
    },
    "verdict": {
      "score": "0 - 1",
      "text": "约旦将继续落位 5-4-1 极密铁桶阵，阿尔及利亚在中圈拥有掌控权，马赫雷斯会在肋部寻求小范围穿插。虽然约旦反击有塔马里的单点威胁，但阿尔及利亚整体防线控制更为沉稳。预计阿尔及利亚通过下半场的定位球机会 1-0 艰难带走三分。"
    },
    "injuries": {
      "home": [],
      "away": []
    },
    "tactics": {
      "homeForm": "5-4-1",
      "awayForm": "4-2-3-1",
      "explanation": "约旦继续排出 5-4-1 大巴，彻底放弃控球，合围大禁区，依靠塔马里的高速反击。阿尔及利亚采用 4-2-3-1，马赫雷斯右翼策应，本塞拜尼后场稳健调度。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "阿布莱拉", "type": "home" },
        { "x": 140, "y": 380, "num": 3, "name": "纳西卜", "type": "home" },
        { "x": 220, "y": 380, "num": 5, "name": "阿拉伯", "type": "home" },
        { "x": 70, "y": 350, "num": 2, "name": "阿布哈希什", "type": "home" },
        { "x": 290, "y": 350, "num": 23, "name": "哈达德", "type": "home" },
        { "x": 180, "y": 280, "num": 8, "name": "拉瓦比德", "type": "home" },
        { "x": 120, "y": 240, "num": 14, "name": "阿亚尔德", "type": "home" },
        { "x": 240, "y": 240, "num": 10, "name": "塔马里", "type": "home" },
        { "x": 70, "y": 140, "num": 13, "name": "马尔迪", "type": "home" },
        { "x": 290, "y": 140, "num": 9, "name": "奥尔万", "type": "home" },
        { "x": 180, "y": 90, "num": 11, "name": "奈马特", "type": "home" },
        
        { "x": 180, "y": 350, "num": 1, "name": "曼德雷亚", "type": "away" },
        { "x": 140, "y": 290, "num": 2, "name": "曼迪", "type": "away" },
        { "x": 220, "y": 290, "num": 21, "name": "本塞拜尼", "type": "away" },
        { "x": 80, "y": 240, "num": 15, "name": "艾特努里", "type": "away" },
        { "x": 280, "y": 240, "num": 3, "name": "吉托恩", "type": "away" },
        { "x": 180, "y": 190, "num": 6, "name": "本塔莱布", "type": "away" },
        { "x": 130, "y": 140, "num": 14, "name": "泽鲁基", "type": "away" },
        { "x": 230, "y": 140, "num": 8, "name": "奥亚尔", "type": "away" },
        { "x": 80, "y": 95, "num": 11, "name": "布奈贾", "type": "away" },
        { "x": 280, "y": 95, "num": 7, "name": "马赫雷斯", "type": "away" },
        { "x": 180, "y": 70, "num": 10, "name": "庄奴", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "穆萨·阿尔-塔马里",
          "age": 28,
          "position": "右翼锋",
          "stats": "上场射门2次 | 国家队累计62场16球",
          "role": "进攻端绝对核心，具备顶级的带球反击爆发力和内切起脚底蕴。",
          "form": "稳定",
          "ratings": [88, 80, 78, 84, 30, 72],
          "goalDist": { "leftBox": 1, "centerBox": 8, "rightBox": 5, "outsideBox": 2, "conversion": "13.5%" },
          "defenseDefense": "大范围退防本方右路协助哈达德，破坏阿尔及利亚左翼艾特努里的插上。",
          "defenseWarnings": "阿尔及利亚左闸退防必须注意其带球加速，不可轻易给其内切起左脚的空间。"
        }
      ],
      "away": [
        {
          "name": "里亚德·马赫雷斯",
          "age": 35,
          "position": "右翼锋",
          "stats": "上场传球35次 | 国家队累计94场31球",
          "role": "阿尔及利亚领袖，脚下控制和盘带顶级，传球视野极其广阔，大局观无解。",
          "form": "稳定",
          "ratings": [80, 84, 88, 85, 40, 76],
          "goalDist": { "leftBox": 0, "centerBox": 8, "rightBox": 18, "outsideBox": 5, "conversion": "14.2%" },
          "defenseDefense": "中前场的短传拦截与就地逼抢，切断约旦中圈向两侧出球的路线。",
          "defenseWarnings": "约旦队在其大禁区肋部时必须迅速两人包夹，以严防其左脚兜射远角。"
        }
      ]
    }
  },
  "por-uzb": {
    "themeClass": "por-uzb-theme",
    "group": "K 组第二轮焦点战",
    "timeLoc": "北京时间 6月23日 01:00 | 多伦多体育场",
    "teams": {
      "home": {
        "name": "葡萄牙",
        "flag": "por",
        "goals": 2.7,
        "shots": 17.8,
        "sot": 7.8,
        "sOff": 10.0,
        "corners": 6.8,
        "history": {
          "record1Year": "10胜 0平 1负 (胜率 91%)",
          "possession": "61.2%",
          "passAccuracy": "88.8%",
          "cleanSheets": "7次",
          "shotConversion": "15.0%",
          "conversionExplanation": "葡萄牙进攻华丽，B费中路掌控节奏，C罗定位球与抢点能力极其强硬。",
          "recentMatches": [
            { "opponent": "刚果（金）", "score": "3 - 1", "type": "世界杯", "date": "2026-06" }
          ]
        }
      },
      "away": {
        "name": "乌兹别克斯坦",
        "flag": "uzb",
        "goals": 1.2,
        "shots": 9.5,
        "sot": 3.8,
        "sOff": 5.7,
        "corners": 4.0,
        "history": {
          "record1Year": "5胜 3平 2负 (胜率 50%)",
          "possession": "45.8%",
          "passAccuracy": "77.5%",
          "cleanSheets": "3次",
          "shotConversion": "12.0%",
          "conversionExplanation": "中亚铁骑乌兹别克斯坦拼抢硬朗，防守纪律严明，反击主要依靠绍穆罗多夫的冲击。",
          "recentMatches": [
            { "opponent": "哥伦比亚", "score": "0 - 1", "type": "世界杯", "date": "2026-06" }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "C罗",
        "jersey": "7",
        "club": "利雅得胜利",
        "role": "中锋/队长",
        "color": "#3b82f6",
        "details": "世界杯谢幕之作，首轮轰入一球状态极佳，大门、抢点与大心脏能力为历史级。"
      },
      "away": {
        "name": "埃尔多尔·绍穆罗多夫",
        "jersey": "14",
        "club": "罗马",
        "role": "中锋/队长",
        "color": "#f59e0b",
        "details": "乌兹别克斯坦领军核心，身形高大且爆发力好，背身拿球和反击穿插威胁极大。"
      },
      "description": "传奇射手 C罗的谢幕狂攻，与中亚神锋绍穆罗多夫的高速反扑。C罗在禁区的统治力将是对乌兹别克三中卫的极大考验。"
    },
    "marketPrediction": {
      "polymarketOdds": { "homeWin": 78, "draw": 15, "awayWin": 7 },
      "marketSentiment": "葡萄牙首轮3-1取得开门红，Polymarket 资金呈现出 78% 的一边倒倾向，市场预期葡萄牙本场将乘胜追击，拿下出线主动权。"
    },
    "bettingPrediction": {
      "handicap": "葡萄牙 -1.5",
      "totals": "大 2.75",
      "recommendation": "葡萄牙 -1.5 让分主胜 (即葡萄牙赢盘)",
      "reason": "葡萄牙整体实力明显占优，B费在中路的传控调度能大范围撕扯乌兹别克的深度大巴。C罗的门前制空和莱奥的超速突破能轻易扯开禁区空档。看好葡萄牙 3-0 轻松穿盘。"
    },
    "verdict": {
      "score": "3 - 0",
      "text": "葡萄牙将以极致的传控主导比赛。B费和B席的双核调度能让乌兹别克防线反复横移导致失位，C罗在门前的绝对统治力是攻破乌兹别克大巴的最强利器。预计葡萄牙以 3-0 完胜。"
    },
    "injuries": {
      "home": [],
      "away": []
    },
    "tactics": {
      "homeForm": "4-3-3",
      "awayForm": "5-3-2",
      "explanation": "葡萄牙采用 4-3-3，B费梳理全局，莱奥与B席在两翼撕扯，C罗居中终结。乌兹别克采用 5-3-2 深度大巴，绍穆罗多夫拖后准备长传连线。",
      "players": [
        { "x": 180, "y": 450, "num": 22, "name": "科斯塔", "type": "home" },
        { "x": 140, "y": 380, "num": 4, "name": "迪亚斯", "type": "home" },
        { "x": 220, "y": 380, "num": 3, "name": "佩佩", "type": "home" },
        { "x": 70, "y": 360, "num": 19, "name": "门德斯", "type": "home" },
        { "x": 290, "y": 360, "num": 20, "name": "坎塞洛", "type": "home" },
        { "x": 180, "y": 280, "num": 6, "name": "帕利尼亚", "type": "home" },
        { "x": 120, "y": 240, "num": 8, "name": "B费", "type": "home" },
        { "x": 240, "y": 240, "num": 10, "name": "B席", "type": "home" },
        { "x": 70, "y": 140, "num": 17, "name": "莱奥", "type": "home" },
        { "x": 290, "y": 140, "num": 11, "name": "菲利克斯", "type": "home" },
        { "x": 180, "y": 90, "num": 7, "name": "C罗", "type": "home" },
        
        { "x": 180, "y": 350, "num": 1, "name": "尤苏波夫", "type": "away" },
        { "x": 180, "y": 295, "num": 3, "name": "阿里库洛夫", "type": "away" },
        { "x": 120, "y": 290, "num": 5, "name": "阿舒尔马托夫", "type": "away" },
        { "x": 240, "y": 290, "num": 4, "name": "胡桑诺夫", "type": "away" },
        { "x": 60, "y": 240, "num": 13, "name": "谢尔佐夫", "type": "away" },
        { "x": 300, "y": 240, "num": 2, "name": "阿里约诺夫", "type": "away" },
        { "x": 130, "y": 190, "num": 7, "name": "舒库罗夫", "type": "away" },
        { "x": 230, "y": 190, "num": 9, "name": "哈姆罗贝科夫", "type": "away" },
        { "x": 90, "y": 130, "num": 10, "name": "马沙里波夫", "type": "away" },
        { "x": 270, "y": 130, "num": 11, "name": "乌鲁诺夫", "type": "away" },
        { "x": 180, "y": 80, "num": 14, "name": "绍穆罗多夫", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "C罗",
          "age": 41,
          "position": "中锋/前锋",
          "stats": "首战1球 | 国家队累计213场131球",
          "role": "超级前沿核武，拥有顶级的禁区抢点、头槌防守及心理素质。",
          "form": "极佳",
          "ratings": [80, 95, 78, 82, 30, 88],
          "goalDist": { "leftBox": 26, "centerBox": 85, "rightBox": 13, "outsideBox": 7, "conversion": "24.6%" },
          "defenseDefense": "前场高位扫荡阻截，在角球时是大禁区内重要防空点。",
          "defenseWarnings": "乌立别克中防盯防必须寸步不离，绝不能让他轻松起跳和摆腿。"
        }
      ],
      "away": [
        {
          "name": "埃尔多尔·绍穆罗多夫",
          "age": 31,
          "position": "中锋",
          "stats": "国家队累计72场38球",
          "role": "罗马神锋，中亚冲击高塔，身形高大、对抗硬度极好，无球斜插极具威胁。",
          "form": "稳定",
          "ratings": [78, 84, 72, 75, 48, 86],
          "goalDist": { "leftBox": 2, "centerBox": 28, "rightBox": 6, "outsideBox": 2, "conversion": "15.6%" },
          "defenseDefense": "中圈战术支点逼抢，破坏葡萄牙防线迪亚斯的慢速传递路线。",
          "defenseWarnings": "葡萄牙后腰帕利尼亚必须防范其在中圈的卡位胸部卸长传球动作。"
        }
      ]
    }
  },
  "eng-gha": {
    "themeClass": "eng-gha-theme",
    "group": "L 组第二轮焦点战",
    "timeLoc": "北京时间 6月23日 05:00 | 洛杉矶体育场",
    "teams": {
      "home": {
        "name": "英格兰",
        "flag": "eng",
        "goals": 2.7,
        "shots": 16.2,
        "sot": 7.5,
        "sOff": 8.7,
        "corners": 6.8,
        "history": {
          "record1Year": "9胜 2平 0负 (胜率 81%)",
          "possession": "61.0%",
          "passAccuracy": "89.0%",
          "cleanSheets": "6次",
          "shotConversion": "17.2%",
          "conversionExplanation": "三狮军团中前场群星璀璨，贝林厄姆和凯恩在小范围地面撞墙中效率奇高，萨卡在右边路单点爆破极其蛮横。",
          "recentMatches": [
            { "opponent": "克罗地亚", "score": "2 - 1", "type": "世界杯", "date": "2026-06" }
          ]
        }
      },
      "away": {
        "name": "加纳",
        "flag": "gha",
        "goals": 1.5,
        "shots": 10.8,
        "sot": 4.5,
        "sOff": 6.3,
        "corners": 4.2,
        "history": {
          "record1Year": "5胜 2平 3负 (胜率 50%)",
          "possession": "48.2%",
          "passAccuracy": "79.5%",
          "cleanSheets": "3次",
          "shotConversion": "12.8%",
          "conversionExplanation": "非洲黑星加纳球风狂野奔放，两翼齐飞速度极快，库杜斯的个人带球爆破和远射极具威胁。",
          "recentMatches": [
            { "opponent": "巴拿马", "score": "1 - 1", "type": "世界杯", "date": "2026-06" }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "哈里·凯恩",
        "jersey": "9",
        "club": "拜仁慕尼黑",
        "role": "中锋/队长",
        "color": "#3b82f6",
        "details": "英格兰队史第一射手，终结与回撤做球大局观世界顶级，本届世界杯的核心支柱。"
      },
      "away": {
        "name": "穆罕默德·库杜斯",
        "jersey": "20",
        "club": "西汉姆联",
        "role": "前腰/右边锋",
        "color": "#ef4444",
        "details": "加纳王牌，底盘极低、过人对抗极为强硬，有一脚石破天惊的外围爆射冷枪。"
      },
      "description": "英格兰王牌神锋凯恩的回撤中路组织，对垒加纳爆破手库杜斯的中路超车推进。凯恩能否通过背身直塞扯开加纳转身慢的中卫线，是此役关键。"
    },
    "marketPrediction": {
      "polymarketOdds": { "homeWin": 72, "draw": 18, "awayWin": 10 },
      "marketSentiment": "英格兰首战2-1击败克罗地亚展现出稳健底蕴，Polymarket 实时预测胜率达到了 72%。平局防范赔率为 18%。"
    },
    "bettingPrediction": {
      "handicap": "英格兰 -1.25",
      "totals": "大 2.5",
      "recommendation": "英格兰 -1.25 让分主胜 (即英格兰赢盘)",
      "reason": "英格兰中前场整体传递极其流畅，萨卡与福登在两边路能给加纳脆弱的肋部防守施加极大压力，加纳防守纪律性一般。看好英格兰大胜，比分预计为 3-1。"
    },
    "verdict": {
      "score": "3 - 1",
      "text": "英格兰在中前场地面传控优势明显。凯恩的回撤能拉开加纳双中卫萨利苏与阿马泰，为贝林厄姆的高速前插创造完美空档。虽然加克波和库杜斯能依靠个人突防扳回一球，但整体实力英格兰优势明显，预计英格兰 3-1 大胜。"
    },
    "injuries": {
      "home": [],
      "away": []
    },
    "tactics": {
      "homeForm": "4-2-3-1",
      "awayForm": "4-3-3",
      "explanation": "英格兰采用 4-2-3-1，赖斯与搭档稳守后腰，贝林厄姆前腰前插，萨卡和福登在边肋活动，凯恩回撤策应。加纳采用 4-3-3，中场深蹲绞杀，反击打库杜斯这一侧的边路走廊。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "皮克福德", "type": "home" },
        { "x": 140, "y": 380, "num": 5, "name": "斯通斯", "type": "home" },
        { "x": 220, "y": 380, "num": 6, "name": "格伊", "type": "home" },
        { "x": 70, "y": 360, "num": 12, "name": "特里皮尔", "type": "home" },
        { "x": 290, "y": 360, "num": 2, "name": "沃克", "type": "home" },
        { "x": 130, "y": 280, "num": 4, "name": "赖斯", "type": "home" },
        { "x": 230, "y": 280, "num": 21, "name": "梅努", "type": "home" },
        { "x": 180, "y": 180, "num": 10, "name": "贝林厄姆", "type": "home" },
        { "x": 80, "y": 140, "num": 7, "name": "萨卡", "type": "home" },
        { "x": 280, "y": 140, "num": 11, "name": "福登", "type": "home" },
        { "x": 180, "y": 90, "num": 9, "name": "凯恩", "type": "home" },
        
        { "x": 180, "y": 350, "num": 1, "name": "阿蒂-吉吉", "type": "away" },
        { "x": 140, "y": 290, "num": 4, "name": "萨利苏", "type": "away" },
        { "x": 220, "y": 290, "num": 18, "name": "阿马泰", "type": "away" },
        { "x": 80, "y": 240, "num": 14, "name": "门萨", "type": "away" },
        { "x": 280, "y": 240, "num": 2, "name": "兰普泰", "type": "away" },
        { "x": 120, "y": 190, "num": 21, "name": "阿卜杜勒-萨梅德", "type": "away" },
        { "x": 240, "y": 190, "num": 8, "name": "阿希梅鲁", "type": "away" },
        { "x": 180, "y": 130, "num": 20, "name": "库杜斯", "type": "away" },
        { "x": 90, "y": 80, "num": 9, "name": "乔丹·阿尤", "type": "away" },
        { "x": 270, "y": 80, "num": 19, "name": "伊尼亚基·威廉姆斯", "type": "away" },
        { "x": 180, "y": 70, "num": 10, "name": "塞门约", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "哈里·凯恩",
          "age": 32,
          "position": "中锋",
          "stats": "首战1球 | 国家队累计102场67球",
          "role": "前场大心脏终结者与战术支点，传控回撤做球视野极佳，是英格兰核心领袖。",
          "form": "极佳",
          "ratings": [80, 94, 88, 84, 50, 92],
          "goalDist": { "leftBox": 4, "centerBox": 55, "rightBox": 6, "outsideBox": 2, "conversion": "21.5%" },
          "defenseDefense": "定位球防守时在本方禁区发挥极其关键的防空高空球控制。",
          "defenseWarnings": "加纳防区必须贴紧防范其回撤做球后向两侧送出的空当球。"
        }
      ],
      "away": [
        {
          "name": "穆罕默德·库杜斯",
          "age": 25,
          "position": "前腰",
          "stats": "国家队累计32场10球",
          "role": "加纳王牌爆破手，底盘极度扎实，过人强硬，爆射远射威慑力大。",
          "form": "极佳",
          "ratings": [88, 82, 80, 86, 45, 80],
          "goalDist": { "leftBox": 1, "centerBox": 6, "rightBox": 2, "outsideBox": 1, "conversion": "15.0%" },
          "defenseDefense": "积极回追，在左半侧协助阻截英格兰飞翼萨卡的前插。",
          "defenseWarnings": "英格兰后腰赖斯必须对其贴身，严防其起左脚重炮轰山。"
        }
      ]
    }
  },
  "col-cod": {
    "themeClass": "col-cod-theme",
    "group": "K 组第二轮焦点战",
    "timeLoc": "北京时间 6月23日 11:00 | 温哥华体育场",
    "teams": {
      "home": {
        "name": "哥伦比亚",
        "flag": "col",
        "goals": 2.0,
        "shots": 13.5,
        "sot": 5.8,
        "sOff": 7.7,
        "corners": 6.0,
        "history": {
          "record1Year": "8胜 2平 1.5负 (胜率 75%)",
          "possession": "58.4%",
          "passAccuracy": "86.5%",
          "cleanSheets": "5次",
          "shotConversion": "14.2%",
          "conversionExplanation": "哥伦比亚整体推进快速流畅，迪亚斯在左路的个人爆破速度极强，J罗在中路发牌任意球精度极高。",
          "recentMatches": [
            { "opponent": "乌兹别克", "score": "1 - 0", "type": "世界杯", "date": "2026-06" }
          ]
        }
      },
      "away": {
        "name": "刚果（金）",
        "flag": "cod",
        "goals": 1.15,
        "shots": 9.8,
        "sot": 3.5,
        "sOff": 6.3,
        "corners": 4.0,
        "history": {
          "record1Year": "4胜 4平 2.5负 (胜率 40%)",
          "possession": "48.2%",
          "passAccuracy": "79.8%",
          "cleanSheets": "4次",
          "shotConversion": "11.7%",
          "conversionExplanation": "刚果（金）身体拼抢强硬，低位防守扎实，反击主要依靠维萨在左翼的个人超速强突。",
          "recentMatches": [
            { "opponent": "葡萄牙", "score": "1 - 3", "type": "世界杯", "date": "2026-06" }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "路易斯·迪亚斯",
        "jersey": "7",
        "club": "利物浦",
        "role": "左翼锋/爆破飞翼",
        "color": "#3b82f6",
        "details": "哥伦比亚边路过人王，拥有恐怖的横向盘带变向和底线倒三角传中爆破力。"
      },
      "away": {
        "name": "约安·维萨",
        "jersey": "20",
        "club": "布伦特福德",
        "role": "左边锋/反击快马",
        "color": "#f59e0b",
        "details": "刚果（金）核心反击手，带球突然摆脱变向快，门前抢点终结极其敏锐。"
      },
      "description": "哥伦比亚王牌迪亚斯的边路单吃，对抗刚果（金）维萨的极速反击穿插。迪亚斯左路的突防效率将直接决定哥伦比亚破僵局的时间。"
    },
    "marketPrediction": {
      "polymarketOdds": { "homeWin": 65, "draw": 23, "awayWin": 12 },
      "marketSentiment": "Polymarket 实时预测胜率分布中，技术更为出众的哥伦比亚被 65% 高胜率看好。资金多防范哥伦比亚 2-0 取胜。"
    },
    "bettingPrediction": {
      "handicap": "哥伦比亚 -1",
      "totals": "大 2.25",
      "recommendation": "哥伦比亚 -1 让分主胜 (即哥伦比亚赢盘)",
      "reason": "哥伦比亚中场组织和边路硬实力均占据主导地位，迪亚斯在左侧底线过人几乎无人能挡，J罗任意球威慑力十足，刚果（金）后防漏洞大，看好哥伦比亚 2-0 零封赢盘。"
    },
    "verdict": {
      "score": "2 - 0",
      "text": "哥伦比亚依靠地面逼抢掌控中圈。迪亚斯的左翼突围和J罗前场直塞将为哥伦比亚锋线创造极佳的近门机会，刚果（金）双后腰拼抢虽硬但防线抗压心理一般。预计哥伦比亚 2-0 大胜。"
    },
    "injuries": {
      "home": [],
      "away": []
    },
    "tactics": {
      "homeForm": "4-2-3-1",
      "awayForm": "4-2-3-1",
      "explanation": "哥伦比亚采用 4-2-3-1 控制打法，J罗在中路前沿发牌，迪亚斯在左路大范围单挑爆破。刚果（金）低位 4-2-3-1 深蹲防守，反击直传大脚连线维萨。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "巴尔加斯", "type": "home" },
        { "x": 140, "y": 380, "num": 3, "name": "卢库米", "type": "home" },
        { "x": 220, "y": 380, "num": 23, "name": "桑切斯", "type": "home" },
        { "x": 70, "y": 360, "num": 17, "name": "莫希卡", "type": "home" },
        { "x": 290, "y": 360, "num": 4, "name": "阿里亚斯", "type": "home" },
        { "x": 130, "y": 280, "num": 16, "name": "莱尔马", "type": "home" },
        { "x": 230, "y": 280, "num": 6, "name": "里奥斯", "type": "home" },
        { "x": 180, "y": 180, "num": 10, "name": "哈梅斯·罗德里格斯", "type": "home" },
        { "x": 80, "y": 140, "num": 7, "name": "迪亚斯", "type": "home" },
        { "x": 280, "y": 140, "num": 11, "name": "阿里亚斯", "type": "home" },
        { "x": 180, "y": 90, "num": 19, "name": "博尔哈", "type": "home" },
        
        { "x": 180, "y": 350, "num": 1, "name": "马西哈", "type": "away" },
        { "x": 140, "y": 290, "num": 22, "name": "姆本巴", "type": "away" },
        { "x": 220, "y": 290, "num": 4, "name": "巴图宾西卡", "type": "away" },
        { "x": 80, "y": 240, "num": 26, "name": "马苏亚库", "type": "away" },
        { "x": 280, "y": 240, "num": 2, "name": "卡卢卢", "type": "away" },
        { "x": 120, "y": 190, "num": 8, "name": "穆图萨米", "type": "away" },
        { "x": 240, "y": 190, "num": 18, "name": "皮克尔", "type": "away" },
        { "x": 180, "y": 130, "num": 14, "name": "卡库塔", "type": "away" },
        { "x": 90, "y": 80, "num": 20, "name": "维萨", "type": "away" },
        { "x": 270, "y": 80, "num": 11, "name": "博加恩达", "type": "away" },
        { "x": 180, "y": 70, "num": 19, "name": "班扎", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "路易斯·迪亚斯",
          "age": 29,
          "position": "左翼锋",
          "stats": "首战1助 | 国家队累计56场12球",
          "role": "利物浦爆破快马，过人盘带丝滑奔放，变向内切与倒三角极具杀伤力。",
          "form": "极佳",
          "ratings": [94, 82, 78, 88, 30, 72],
          "goalDist": { "leftBox": 1, "centerBox": 7, "rightBox": 2, "outsideBox": 2, "conversion": "14.0%" },
          "defenseDefense": "积极回收参与防区阻截刚果（金）右翼博加恩达的高速推进。",
          "defenseWarnings": "刚果（金）右后卫卡卢卢防守时切忌盲目出脚吃晃被其直接生吃。"
        }
      ],
      "away": [
        {
          "name": "约安·维萨",
          "age": 29,
          "position": "左边锋",
          "stats": "首战1球 | 国家队累计26场6球",
          "role": "布伦特福德前锋，过人速度快，抢点选位极准，反击核心爆破手。",
          "form": "稳定",
          "ratings": [88, 82, 75, 83, 38, 76],
          "goalDist": { "leftBox": 2, "centerBox": 3, "rightBox": 1, "outsideBox": 0, "conversion": "18.5%" },
          "defenseDefense": "大范围回追，在前场纠缠哥伦比亚中卫桑切斯出球。",
          "defenseWarnings": "哥伦比亚右边卫防守需注意回追卡位，不可给其反插底线传中空档。"
        }
      ]
    }
  }
};

Object.assign(data, newMatches);

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully added new focus matches for June 22/23 to data.json!');
