const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.json');
const rawData = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(rawData);

// New matches to insert with verdict included
const newMatches = {
  "usa-aus": {
    "themeClass": "usa-aus-theme",
    "group": "D 组第二轮焦点战",
    "timeLoc": "北京时间 6月20日 01:30 | 西雅图流明球场",
    "teams": {
      "home": {
        "name": "美国",
        "flag": "usa",
        "goals": 2.6,
        "shots": 16.5,
        "sot": 7.8,
        "sOff": 8.7,
        "corners": 6.8,
        "history": {
          "record1Year": "8胜 1平 1负 (胜率 80%)",
          "possession": "58.5%",
          "passAccuracy": "86.8%",
          "cleanSheets": "5次",
          "shotConversion": "15.8%",
          "conversionExplanation": "美国队作为东道主在西雅图主场作战，拥有极其活跃的前场冲击力。普利西奇的左路爆破内切与麦肯尼的中后场插上头球是核心武器。",
          "recentMatches": [
            {
              "opponent": "巴拉圭",
              "score": "4 - 1",
              "type": "世界杯",
              "date": "2026-06"
            },
            {
              "opponent": "哥伦比亚",
              "score": "1 - 5",
              "type": "国际友谊赛",
              "date": "2024-06"
            },
            {
              "opponent": "巴西",
              "score": "1 - 1",
              "type": "国际友谊赛",
              "date": "2024-06"
            },
            {
              "opponent": "墨西哥",
              "score": "2 - 0",
              "type": "中北美联",
              "date": "2024-03"
            }
          ]
        }
      },
      "away": {
        "name": "澳大利亚",
        "flag": "aus",
        "goals": 1.9,
        "shots": 12.2,
        "sot": 5.0,
        "sOff": 7.2,
        "corners": 5.8,
        "history": {
          "record1Year": "7胜 1平 2负 (胜率 70%)",
          "possession": "52.4%",
          "passAccuracy": "81.2%",
          "cleanSheets": "6次",
          "shotConversion": "15.6%",
          "conversionExplanation": "澳大利亚球风极其硬朗强悍，擅长通过定位球和高空轰炸以及长传冲吊打开局面。中卫高塔苏塔尔在攻防两端都是绝对的定海神针。",
          "recentMatches": [
            {
              "opponent": "土耳其",
              "score": "2 - 0",
              "type": "世界杯",
              "date": "2026-06"
            },
            {
              "opponent": "巴勒斯坦",
              "score": "5 - 0",
              "type": "世预赛",
              "date": "2024-06"
            },
            {
              "opponent": "孟加拉国",
              "score": "2 - 0",
              "type": "世预赛",
              "date": "2024-06"
            },
            {
              "opponent": "黎巴嫩",
              "score": "5 - 0",
              "type": "世预赛",
              "date": "2024-03"
            }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "克里斯蒂安·普利西奇",
        "jersey": "10",
        "club": "AC米兰",
        "role": "左翼锋/队长",
        "color": "#3b82f6",
        "details": "美国队长（30球），拥有顶级的带球内切变向与门前致命爆破，是美国队在反击 and 压迫时的进攻尖刀。"
      },
      "away": {
        "name": "哈里·苏塔尔",
        "jersey": "19",
        "club": "莱斯特城",
        "role": "中卫/防线核心",
        "color": "#f59e0b",
        "details": "澳大利亚防空霸主（11球），身高2米，定位球抢点轰炸与门前破坏能力极强，上役贡献多次关键解围。"
      },
      "description": "美国队左路王牌利刃普利西奇与澳大利亚2米高塔苏塔尔的高空和地面的极致博弈。普利西奇的极致速度与盘带内切能否撕裂澳大利亚略显笨重的中卫线，而苏塔尔能否守住门前禁空领空，并利用角球战术轰开美国大门，是此役的最大看点。"
    },
    "verdict": {
      "score": "2 - 1",
      "text": "美国队占据主场哨声与体能优势，普利西奇在左翼的冲击力将压制袋鼠军团较为迟缓的防线。虽然澳大利亚在定位球和高度上有绝对优势（如高塔苏塔尔的争顶威胁），但美国整体地面传控速度更快，预计美国 2-1 险胜取得两连胜。"
    },
    "injuries": {
      "home": [
        {
          "name": "德斯特",
          "desc": "膝伤确定缺席本届世界杯，右后卫防守硬度稍降",
          "status": "recovered"
        }
      ],
      "away": [
        {
          "name": "古德温",
          "desc": "大腿肌肉拉伤此役出战成疑，定位球主罚水准受损",
          "status": "warning"
        }
      ]
    },
    "tactics": {
      "homeForm": "4-3-3",
      "awayForm": "4-4-2",
      "explanation": "美国队采用高强度压迫 4-3-3 阵型，麦肯尼、穆萨在中场进行大范围的扫荡和插上，两翼普利西奇与维阿利用极致的速度进行边路穿穿，撕扯澳大利亚的防线。澳大利亚则排出稳健的 4-4-2 防守两道防线，中场进行深度落位，反击时依靠两翼的传中寻找门前的莱基和突前的公牛杜克，或者利用定位球长传冲吊轰炸美国防区。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "特纳", "type": "home" },
        { "x": 180, "y": 380, "num": 3, "name": "理查兹", "type": "home" },
        { "x": 110, "y": 380, "num": 13, "name": "罗宾逊", "type": "home" },
        { "x": 250, "y": 380, "num": 2, "name": "斯卡利", "type": "home" },
        { "x": 180, "y": 300, "num": 4, "name": "亚当斯", "type": "home" },
        { "x": 120, "y": 250, "num": 8, "name": "麦肯尼", "type": "home" },
        { "x": 240, "y": 250, "num": 6, "name": "穆萨", "type": "home" },
        { "x": 70, "y": 140, "num": 10, "name": "普利西奇", "type": "home" },
        { "x": 290, "y": 140, "num": 21, "name": "维阿", "type": "home" },
        { "x": 180, "y": 100, "num": 20, "name": "巴洛贡", "type": "home" },
        { "x": 180, "y": 40, "num": 18, "name": "雷纳", "type": "home" },
        
        { "x": 180, "y": 350, "num": 18, "name": "瑞恩", "type": "away" },
        { "x": 180, "y": 280, "num": 19, "name": "苏塔尔", "type": "away" },
        { "x": 110, "y": 280, "num": 3, "name": "罗尔斯", "type": "away" },
        { "x": 50, "y": 230, "num": 5, "name": "博斯", "type": "away" },
        { "x": 310, "y": 230, "num": 2, "name": "阿特金森", "type": "away" },
        { "x": 140, "y": 180, "num": 22, "name": "欧文", "type": "away" },
        { "x": 220, "y": 180, "num": 8, "name": "梅特卡夫", "type": "away" },
        { "x": 90, "y": 140, "num": 23, "name": "古德温", "type": "away" },
        { "x": 270, "y": 140, "num": 7, "name": "博伊尔", "type": "away" },
        { "x": 150, "y": 80, "num": 15, "name": "杜克", "type": "away" },
        { "x": 210, "y": 80, "num": 11, "name": "莱基", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "克里斯蒂安·普利西奇",
          "age": 27,
          "position": "左翼锋/前腰",
          "stats": "本届2球 | 国家队累计72场30球",
          "role": "美国队长，AC米兰飞翼，盘带身形极其灵性，擅长依靠极强的脚下变向爆破内切打门。",
          "form": "极佳",
          "ratings": [88, 82, 85, 87, 45, 75],
          "goalDist": {
            "leftBox": 5,
            "centerBox": 15,
            "rightBox": 6,
            "outsideBox": 4,
            "conversion": "16.5%"
          },
          "defenseDefense": "高强度的左路回防拦截，协助亚当斯拦截对方右边卫的插上。",
          "defenseWarnings": "澳大利亚右后卫阿特金森必须预留防守深度，切莫上抢吃晃被一步过掉。"
        },
        {
          "name": "福拉林·巴洛贡",
          "age": 24,
          "position": "中锋",
          "stats": "本届2球 | 国家队累计20场8球",
          "role": "摩纳哥强力神射手，门前嗅觉极其灵敏，擅长无球前插和底线切入包抄抢点。",
          "form": "极佳",
          "ratings": [85, 84, 72, 78, 32, 80],
          "goalDist": {
            "leftBox": 1,
            "centerBox": 6,
            "rightBox": 1,
            "outsideBox": 0,
            "conversion": "18.2%"
          },
          "defenseDefense": "前场高位逼抢的第一线扫荡者，主要纠缠干扰澳大利亚的中卫出球路线。",
          "defenseWarnings": "澳大利亚中卫苏塔尔必须随时进行身体卡位压制，干扰其反插接球的节奏。"
        },
        {
          "name": "韦斯顿·麦肯尼",
          "age": 27,
          "position": "中场",
          "stats": "本届1助 | 国家队累计56场11球",
          "role": "尤文图斯中场大闸与拼命三郎，覆盖面积大，拼抢凶悍，二点球插上与头球极具威胁。",
          "form": "稳定",
          "ratings": [78, 75, 80, 76, 78, 86],
          "goalDist": {
            "leftBox": 2,
            "centerBox": 6,
            "rightBox": 2,
            "outsideBox": 1,
            "conversion": "11.5%"
          },
          "defenseDefense": "中场的扫荡核心，负责限制澳大利亚队长欧文的中路起球与插上争顶。",
          "defenseWarnings": "澳大利亚中圈持球必须警惕其斜刺里突然上抢，需尽快将球分到边路避开缠斗。"
        }
      ],
      "away": [
        {
          "name": "马修·莱基",
          "age": 35,
          "position": "右边锋/中锋",
          "stats": "本届1助 | 国家队累计79场14球",
          "role": "袋鼠军团锋线老将与精神支柱，身体对抗极其强悍，作风硬朗，擅长抗开防守抢点打门。",
          "form": "稳定",
          "ratings": [75, 76, 74, 76, 60, 82],
          "goalDist": {
            "leftBox": 2,
            "centerBox": 8,
            "rightBox": 3,
            "outsideBox": 1,
            "conversion": "13.0%"
          },
          "defenseDefense": "深度回撤防守，在中右路协助后腰进行对普利西奇的协防限制。",
          "defenseWarnings": "美国队左边卫罗宾逊切勿前插过深丢掉身后的防守空档，随时警惕其反击插身后。"
        },
        {
          "name": "杰克逊·欧文",
          "age": 33,
          "position": "中场/队长",
          "stats": "本届1球 | 国家队累计70场11球",
          "role": "袋鼠中场战术支柱，体能充沛，前插能力极强，在定位球战术中拥有极佳的门前头球威胁。",
          "form": "极佳",
          "ratings": [72, 74, 78, 72, 82, 85],
          "goalDist": {
            "leftBox": 1,
            "centerBox": 8,
            "rightBox": 1,
            "outsideBox": 1,
            "conversion": "12.1%"
          },
          "defenseDefense": "中路深度屏障，负责拦截美国中场麦肯尼和亚当斯的向前地面塞球路线。",
          "defenseWarnings": "美国队防线必须在其前插时紧密贴身防空，不能漏出十二码点附近的第二落脚点。"
        },
        {
          "name": "哈里·苏塔尔",
          "age": 27,
          "position": "中卫/防线核心",
          "stats": "本届拦截6次 | 国家队累计32场11球",
          "role": "袋鼠防空终极高塔，防守站位极其精准，在定位球中是澳大利亚最恐怖的头球终结者。",
          "form": "极佳",
          "ratings": [62, 70, 68, 60, 92, 95],
          "goalDist": {
            "leftBox": 1,
            "centerBox": 9,
            "rightBox": 1,
            "outsideBox": 0,
            "conversion": "18.3%"
          },
          "defenseDefense": "大禁区中路的清道夫与防空指挥官，负责封锁巴洛贡和雷纳的禁区中路射门。",
          "defenseWarnings": "美国在角球防守中必须派高大球员对其进行强力贴身死缠，千万不能让其轻松起跳顶门。"
        }
      ]
    }
  },
  "sco-mar": {
    "themeClass": "sco-mar-theme",
    "group": "C 组第二轮焦点战",
    "timeLoc": "北京时间 6月20日 04:30 | 波士顿吉列体育场",
    "teams": {
      "home": {
        "name": "苏格兰",
        "flag": "sco",
        "goals": 1.6,
        "shots": 11.2,
        "sot": 4.5,
        "sOff": 6.7,
        "corners": 5.4,
        "history": {
          "record1Year": "6胜 1平 3负 (胜率 60%)",
          "possession": "51.2%",
          "passAccuracy": "81.5%",
          "cleanSheets": "4次",
          "shotConversion": "14.2%",
          "conversionExplanation": "苏格兰队拼抢极其凶狠顽强，两翼起球频繁。麦克托米奈的大禁区弧顶无球插上爆射与罗伯逊的精确左路斜吊传中是主要得分战术。",
          "recentMatches": [
            {
              "opponent": "海地",
              "score": "1 - 0",
              "type": "世界杯",
              "date": "2026-06"
            },
            {
              "opponent": "直布罗陀",
              "score": "2 - 0",
              "type": "国际友谊赛",
              "date": "2024-06"
            },
            {
              "opponent": "芬兰",
              "score": "2 - 2",
              "type": "国际友谊赛",
              "date": "2024-06"
            },
            {
              "opponent": "北爱尔兰",
              "score": "0 - 1",
              "type": "国际友谊赛",
              "date": "2024-03"
            }
          ]
        }
      },
      "away": {
        "name": "摩洛哥",
        "flag": "mar",
        "goals": 2.1,
        "shots": 14.8,
        "sot": 6.2,
        "sOff": 8.6,
        "corners": 6.5,
        "history": {
          "record1Year": "8胜 2平 0负 (胜率 80%)",
          "possession": "59.4%",
          "passAccuracy": "87.2%",
          "cleanSheets": "6次",
          "shotConversion": "14.1%",
          "conversionExplanation": "摩洛哥队延续了世界杯四强的坚实反防素养，中前场战术素养极高，依靠阿什拉夫的右路无解套边和齐耶赫的弧线球直塞连线锋线恩内斯里。",
          "recentMatches": [
            {
              "opponent": "巴西",
              "score": "1 - 1",
              "type": "世界杯",
              "date": "2026-06"
            },
            {
              "opponent": "刚果共和国",
              "score": "6 - 0",
              "type": "世预赛",
              "date": "2024-06"
            },
            {
              "opponent": "赞比亚",
              "score": "2 - 1",
              "type": "世预赛",
              "date": "2024-06"
            },
            {
              "opponent": "安哥拉",
              "score": "1 - 0",
              "type": "国际友谊赛",
              "date": "2024-03"
            }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "斯科特·麦克托米奈",
        "jersey": "4",
        "club": "那不勒斯",
        "role": "中场/突击前腰",
        "color": "#3b82f6",
        "details": "苏格兰中场轰炸机（11球），后插上意识与门前抢点轰炸能力极强，在国家队是绝对的锋线杀器。"
      },
      "away": {
        "name": "阿什拉夫·哈基米",
        "jersey": "2",
        "club": "巴黎圣日耳曼",
        "role": "右后卫/战术走廊",
        "color": "#10b981",
        "details": "世界第一右后卫（10球），攻防一体，极致的右翼狂飙带球突破，拥有一脚石破天惊的直接任意球。"
      },
      "description": "苏格兰铁血中场麦克托米奈与摩洛哥右翼飞翼阿什拉夫的中路及边路绞杀。麦克托米奈的前插争顶能否顶碎摩洛哥防区，而阿什拉夫的高速助攻能否生吃罗伯逊一侧的防线，是苏摩大战的关键命脉。"
    },
    "verdict": {
      "score": "1 - 1",
      "text": "苏格兰中场麦克托米奈与罗伯逊的边路连线具备极强的硬度与头球轰炸威胁，但摩洛哥防线极其坚韧，且阿什拉夫与齐耶赫的边路快攻能给苏格兰的三中卫体系制造巨大空档。双方风格相克，预计将战成 1-1 平局。"
    },
    "injuries": {
      "home": [
        {
          "name": "戴克斯",
          "desc": "膝伤缺席，苏格兰禁区中路损失一位核心中锋支点",
          "status": "recovered"
        }
      ],
      "away": [
        {
          "name": "马兹拉维",
          "desc": "小腿轻微酸痛，首发存疑可能替补待命",
          "status": "warning"
        }
      ]
    },
    "tactics": {
      "homeForm": "3-5-2",
      "awayForm": "4-3-3",
      "explanation": "苏格兰队祭出铁血 3-5-2，中圈派上麦金、吉尔莫和麦克托米奈，两翼以罗伯逊和希基进行大范围折返往复。摩洛哥排开 4-3-3 传控大阵，右边后卫阿什拉夫压上客串右边锋，齐耶赫拉边组织，阿姆拉巴特中场负责凶悍拦截与洗球，恩内斯里在小禁区内时刻准备力压中卫起跳争顶。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "冈恩", "type": "home" },
        { "x": 180, "y": 380, "num": 5, "name": "汉利", "type": "home" },
        { "x": 110, "y": 380, "num": 6, "name": "蒂尔尼", "type": "home" },
        { "x": 250, "y": 380, "num": 15, "name": "波蒂厄斯", "type": "home" },
        { "x": 60, "y": 260, "num": 3, "name": "罗伯逊", "type": "home" },
        { "x": 300, "y": 260, "num": 2, "name": "希基", "type": "home" },
        { "x": 180, "y": 240, "num": 8, "name": "吉尔莫", "type": "home" },
        { "x": 130, "y": 180, "num": 7, "name": "麦金", "type": "home" },
        { "x": 230, "y": 180, "num": 4, "name": "麦克托米奈", "type": "home" },
        { "x": 150, "y": 100, "num": 10, "name": "亚当斯", "type": "home" },
        { "x": 210, "y": 100, "num": 11, "name": "克里斯蒂", "type": "home" },
        
        { "x": 180, "y": 350, "num": 1, "name": "布努", "type": "away" },
        { "x": 150, "y": 280, "num": 5, "name": "阿格尔德", "type": "away" },
        { "x": 210, "y": 280, "num": 6, "name": "塞斯", "type": "away" },
        { "x": 80, "y": 220, "num": 3, "name": "阿拉", "type": "away" },
        { "x": 280, "y": 220, "num": 2, "name": "阿什拉夫", "type": "away" },
        { "x": 180, "y": 190, "num": 4, "name": "阿姆拉巴特", "type": "away" },
        { "x": 130, "y": 140, "num": 8, "name": "奥纳西", "type": "away" },
        { "x": 230, "y": 140, "num": 14, "name": "哈里", "type": "away" },
        { "x": 80, "y": 90, "num": 17, "name": "布法尔", "type": "away" },
        { "x": 280, "y": 90, "num": 7, "name": "齐耶赫", "type": "away" },
        { "x": 180, "y": 70, "num": 19, "name": "恩-内斯里", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "安迪·罗伯逊",
          "age": 32,
          "position": "左后卫/队长",
          "stats": "本届1助 | 国家队累计80场3球",
          "role": "苏格兰精神领袖，利物浦主力飞翼，体能无限，拥有一手世界级的左侧精妙斜传与任意球调度。",
          "form": "极佳",
          "ratings": [85, 68, 87, 82, 84, 80],
          "goalDist": {
            "leftBox": 0,
            "centerBox": 1,
            "rightBox": 0,
            "outsideBox": 2,
            "conversion": "9.5%"
          },
          "defenseDefense": "负责左路的往复防守，大范围补防抢断，遏制对方阿什拉夫的起球套边。",
          "defenseWarnings": "摩洛哥右边路切勿给其充裕的传中起脚弧线空间，必须在中圈附近实施干扰抢断。"
        },
        {
          "name": "斯科特·麦克托米奈",
          "age": 29,
          "position": "中场/前腰",
          "stats": "本届2球 | 国家队累计52场11球",
          "role": "苏格兰前场空中铁塔与终结者，爆发力极强，无球插上以及远射破网效率位列全队第一。",
          "form": "极佳",
          "ratings": [78, 83, 76, 75, 80, 88],
          "goalDist": {
            "leftBox": 2,
            "centerBox": 6,
            "rightBox": 1,
            "outsideBox": 2,
            "conversion": "15.2%"
          },
          "defenseDefense": "中场第一道屏障，拼抢凶猛，拦截并阻断摩洛哥阿姆拉巴特的向前传导洗球。",
          "defenseWarnings": "摩洛哥双中卫必须紧盯其在弧顶的二次插上，防止被其直接凌空起脚轰门。"
        },
        {
          "name": "约翰·麦金",
          "age": 31,
          "position": "中场",
          "stats": "本届1球 | 国家队累计70场18球",
          "role": "阿斯顿维拉铁腰，身体底盘极稳，护球与摆脱盘带极强，长传制导效率极高。",
          "form": "稳定",
          "ratings": [76, 80, 82, 84, 76, 85],
          "goalDist": {
            "leftBox": 3,
            "centerBox": 10,
            "rightBox": 3,
            "outsideBox": 2,
            "conversion": "13.8%"
          },
          "defenseDefense": "中圈绞杀扫荡核心，负责限制摩洛哥奥纳西的带球向前推进。",
          "defenseWarnings": "摩洛哥防守时警惕其大屁股护球转身的突然斜传直塞，人墙防线不能被带乱。"
        }
      ],
      "away": [
        {
          "name": "阿什拉夫·哈基米",
          "age": 27,
          "position": "右后卫",
          "stats": "本届1助 | 国家队累计78场10球",
          "role": "世界级攻击型右后卫，巴黎圣日耳曼核心走廊，速度极快，定位球与突袭传中是超级武器。",
          "form": "极佳",
          "ratings": [94, 78, 86, 88, 82, 84],
          "goalDist": {
            "leftBox": 1,
            "centerBox": 3,
            "rightBox": 2,
            "outsideBox": 4,
            "conversion": "12.0%"
          },
          "defenseDefense": "右路退防第一线，负责协防盯防苏格兰队长罗伯逊的左侧快速套边。",
          "defenseWarnings": "苏格兰左路罗伯逊绝不能轻易失位，必须随时安排中场蒂尔尼进行左侧弱侧补位防爆。"
        },
        {
          "name": "优素福·恩-内斯里",
          "age": 29,
          "position": "中锋",
          "stats": "本届1球 | 国家队累计73场22球",
          "role": "摩洛哥第一禁区轰炸机，弹跳极高，抢点与高空头槌极为暴烈，前场压迫极为积极。",
          "form": "稳定",
          "ratings": [82, 84, 68, 72, 45, 88],
          "goalDist": {
            "leftBox": 2,
            "centerBox": 18,
            "rightBox": 2,
            "outsideBox": 0,
            "conversion": "17.5%"
          },
          "defenseDefense": "在前场对苏格兰三中卫汉利出球进行凶狠逼抢，延缓其长传出球的精度。",
          "defenseWarnings": "苏格兰三中卫汉利和蒂尔尼在角球防守中必须死掐其第一起跳点，不可失位。"
        },
        {
          "name": "哈基姆·齐耶赫",
          "age": 33,
          "position": "右边锋/前腰",
          "stats": "本届1助 | 国家队累计62场22球",
          "role": "加拉塔萨雷魔术师，精妙的金左脚弧线传中与直塞撕扯防线能力出众，摩洛哥定位球第一人。",
          "form": "良好",
          "ratings": [78, 82, 88, 85, 40, 72],
          "goalDist": {
            "leftBox": 1,
            "centerBox": 5,
            "rightBox": 2,
            "outsideBox": 14,
            "conversion": "11.2%"
          },
          "defenseDefense": "中右路大范围逼抢，切断苏格兰边卫希基的左侧传中球路线。",
          "defenseWarnings": "严防其在禁区右侧的兜射和前点斜塞直塞，必须始终保持双人夹击站位。"
        }
      ]
    }
  },
  "bra-hai": {
    "themeClass": "bra-hai-theme",
    "group": "C 组第二轮焦点战",
    "timeLoc": "北京时间 6月20日 07:00 | 费城林肯金融球场",
    "teams": {
      "home": {
        "name": "巴西",
        "flag": "bra",
        "goals": 3.4,
        "shots": 18.5,
        "sot": 8.9,
        "sOff": 9.6,
        "corners": 7.2,
        "history": {
          "record1Year": "7胜 2平 1负 (胜率 70%)",
          "possession": "62.4%",
          "passAccuracy": "89.2%",
          "cleanSheets": "4次",
          "shotConversion": "18.4%",
          "conversionExplanation": "巴西队首战被摩洛哥逼平，此役求胜欲望极其强烈。维尼修斯和罗德里戈在前场的穿插以及极其残暴的脚下控球是海地防线的致命威胁。",
          "recentMatches": [
            {
              "opponent": "摩洛哥",
              "score": "1 - 1",
              "type": "世界杯",
              "date": "2026-06"
            },
            {
              "opponent": "墨西哥",
              "score": "3 - 2",
              "type": "国际友谊赛",
              "date": "2024-06"
            },
            {
              "opponent": "美国",
              "score": "1 - 1",
              "type": "国际友谊赛",
              "date": "2024-06"
            },
            {
              "opponent": "西班牙",
              "score": "3 - 3",
              "type": "国际友谊赛",
              "date": "2024-03"
            }
          ]
        }
      },
      "away": {
        "name": "海地",
        "flag": "hai",
        "goals": 1.2,
        "shots": 8.4,
        "sot": 2.8,
        "sOff": 5.6,
        "corners": 3.5,
        "history": {
          "record1Year": "3胜 2平 5负 (胜率 30%)",
          "possession": "42.5%",
          "passAccuracy": "72.4%",
          "cleanSheets": "2次",
          "shotConversion": "14.3%",
          "conversionExplanation": "海地队拼抢硬度极大，主要采取深度 5-4-1 极密铁桶防守。依靠空霸佩罗特和纳佐恩的锋线对抗反击打对方防线纵深。",
          "recentMatches": [
            {
              "opponent": "苏格兰",
              "score": "0 - 1",
              "type": "世界杯",
              "date": "2026-06"
            },
            {
              "opponent": "巴巴多斯",
              "score": "3 - 1",
              "type": "世预赛",
              "date": "2024-06"
            },
            {
              "opponent": "圣卢西亚",
              "score": "2 - 1",
              "type": "世预赛",
              "date": "2024-06"
            },
            {
              "opponent": "法属圭亚那",
              "score": "1 - 1",
              "type": "友谊赛",
              "date": "2024-03"
            }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "维尼修斯",
        "jersey": "7",
        "club": "皇家马德里",
        "role": "左翼锋",
        "color": "#3b82f6",
        "details": "皇家马德里金球级巨星（7球），拥有世界第一的脚下盘带和边路极速爆破，是巴西撕裂密集防守的头号核弹。"
      },
      "away": {
        "name": "弗朗茨迪·佩罗特",
        "jersey": "9",
        "club": "海法马卡比",
        "role": "中锋/高空灯塔",
        "color": "#ef4444",
        "details": "海地锋线空霸（21球），身高1米94，门前身体对抗极其强悍，海地反击时唯一的支点大腿。"
      },
      "description": "巴西王牌维尼修斯左侧过人爆破与海地空霸中锋佩罗特的强悍身体冲撞。维尼修斯的爆破能否快速打破僵局撕开海地大巴，而佩罗特能否凭借身体在巴西后腰吉马良斯面前抗开身位制造反击，是本场强弱对话的终极博弈。"
    },
    "verdict": {
      "score": "3 - 0",
      "text": "巴西队首战遭平后本场退无可退，维尼修斯与罗德里戈将联手实施高强度的前场爆破。海地的 5-4-1 铁桶防线在巴西的极致地面渗透下难以长时间支撑，预计巴西队将 3-0 迎来一场大胜。"
    },
    "injuries": {
      "home": [
        {
          "name": "内马尔",
          "desc": "膝盖重伤缺席，中前场创造力受损，由罗德里戈打核心前腰",
          "status": "recovered"
        }
      ],
      "away": [
        {
          "name": "阿尔库斯",
          "desc": "主力后卫肌肉发紧，此役大概率带伤坚持首发",
          "status": "warning"
        }
      ]
    },
    "tactics": {
      "homeForm": "4-2-3-1",
      "awayForm": "5-4-1",
      "explanation": "巴西采用 4-2-3-1 阵型进行高位绝对压制，吉马良斯与帕奎塔双后腰掌控中圈，罗德里戈居中调度分边，维尼修斯在左侧、拉菲尼亚在右侧实施边路极致轮番爆破。海地则摆出 5-4-1 极密铁桶防线，五名后卫在禁区内一字排开，四名中场在中圈后撤协助封堵，彻底让出球权，纯靠反击直传佩罗特或高空球寻找机会。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "阿利森", "type": "home" },
        { "x": 150, "y": 380, "num": 4, "name": "马尔基尼奥斯", "type": "home" },
        { "x": 210, "y": 380, "num": 3, "name": "加布里埃尔", "type": "home" },
        { "x": 80, "y": 320, "num": 6, "name": "阿兰纳", "type": "home" },
        { "x": 280, "y": 320, "num": 2, "name": "达尼洛", "type": "home" },
        { "x": 150, "y": 240, "num": 5, "name": "吉马良斯", "type": "home" },
        { "x": 210, "y": 240, "num": 8, "name": "帕奎塔", "type": "home" },
        { "x": 180, "y": 170, "num": 10, "name": "罗德里戈", "type": "home" },
        { "x": 80, "y": 140, "num": 7, "name": "维尼修斯", "type": "home" },
        { "x": 280, "y": 140, "num": 11, "name": "拉菲尼亚", "type": "home" },
        { "x": 180, "y": 90, "num": 9, "name": "理查利森", "type": "home" },
        
        { "x": 180, "y": 350, "num": 1, "name": "普拉西德", "type": "away" },
        { "x": 180, "y": 290, "num": 4, "name": "阿代", "type": "away" },
        { "x": 130, "y": 290, "num": 6, "name": "热罗姆", "type": "away" },
        { "x": 230, "y": 290, "num": 2, "name": "阿尔库斯", "type": "away" },
        { "x": 80, "y": 250, "num": 3, "name": "格里尔", "type": "away" },
        { "x": 280, "y": 250, "num": 5, "name": "拉朗德", "type": "away" },
        { "x": 150, "y": 190, "num": 8, "name": "克里斯蒂安", "type": "away" },
        { "x": 210, "y": 190, "num": 17, "name": "皮科", "type": "away" },
        { "x": 90, "y": 130, "num": 10, "name": "坎塔夫", "type": "away" },
        { "x": 270, "y": 130, "num": 7, "name": "纳佐恩", "type": "away" },
        { "x": 180, "y": 80, "num": 9, "name": "佩罗特", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "维尼修斯",
          "age": 25,
          "position": "左边锋",
          "stats": "本届2球 | 国家队累计35场7球",
          "role": "皇家马德里头牌快马，世界最强带球盘带与左翼爆破核弹，在左路底线切入的单人破大巴能力天下无双。",
          "form": "极佳",
          "ratings": [96, 88, 84, 95, 38, 78],
          "goalDist": {
            "leftBox": 2,
            "centerBox": 3,
            "rightBox": 1,
            "outsideBox": 1,
            "conversion": "18.0%"
          },
          "defenseDefense": "前场的高速就地反抢，切断海地右边后腰皮科的反击起球路线。",
          "defenseWarnings": "海地右后卫阿尔库斯和热罗姆必须贴死，千万不可给其一对一加速变向的时间。"
        },
        {
          "name": "罗德里戈",
          "age": 25,
          "position": "右边锋/前腰",
          "stats": "本届1球 | 国家队累计30场8球",
          "role": "皇马核心前锋，脚下技术极其细腻，擅长在大禁区周围实施精妙穿插走位，门前终结极其冷静稳定。",
          "form": "极佳",
          "ratings": [88, 85, 86, 90, 42, 75],
          "goalDist": {
            "leftBox": 1,
            "centerBox": 5,
            "rightBox": 1,
            "outsideBox": 1,
            "conversion": "16.5%"
          },
          "defenseDefense": "负责禁区前沿的二点球争抢，协助吉马良斯破坏对方后场大脚反击第一落点。",
          "defenseWarnings": "海地中场防线必须严防其和维尼修斯的肋部交错穿插跑位，人盯人不可分神。"
        },
        {
          "name": "布鲁诺·吉马良斯",
          "age": 28,
          "position": "防守中场",
          "stats": "本届拦截4次 | 国家队累计28场2球",
          "role": "纽卡斯尔联中场发牌器，传球制导极其优秀，拥有极强的中路洗球和硬度扫荡拦截能力。",
          "form": "稳定",
          "ratings": [76, 72, 88, 84, 82, 85],
          "goalDist": {
            "leftBox": 0,
            "centerBox": 1,
            "rightBox": 0,
            "outsideBox": 1,
            "conversion": "8.5%"
          },
          "defenseDefense": "中圈战术调度大闸，负责拦截海地前锋纳佐恩接应后场的解围球。",
          "defenseWarnings": "海地中场持球必须警惕其倒地滑铲抢断，要快速将球横敲分边。"
        }
      ],
      "away": [
        {
          "name": "杜康斯·纳佐恩",
          "age": 32,
          "position": "中锋",
          "stats": "本届1球 | 国家队累计56场29球",
          "role": "海地传奇前锋，身体庞大强壮，拥有极其蛮横的门前倚人射门与对抗爆发力。",
          "form": "极佳",
          "ratings": [78, 82, 70, 75, 35, 86],
          "goalDist": {
            "leftBox": 2,
            "centerBox": 22,
            "rightBox": 3,
            "outsideBox": 2,
            "conversion": "15.6%"
          },
          "defenseDefense": "大范围回撤到本方禁区前沿，参与防守定位球和第一落点的解围争顶。",
          "defenseWarnings": "巴西中卫马尔基尼奥斯绝不可贴身时掉以轻心，必须依靠加布里埃尔进行夹击。"
        },
        {
          "name": "威尔德-唐纳德·格里尔",
          "age": 37,
          "position": "左后卫/左边锋",
          "stats": "本届1助 | 国家队累计61场11球",
          "role": "海地传奇边卫，攻防兼备，虽然年纪偏大但身体极为强硬，在左路反击起球和防守极具韧性。",
          "form": "稳定",
          "ratings": [72, 74, 72, 74, 76, 82],
          "goalDist": {
            "leftBox": 1,
            "centerBox": 6,
            "rightBox": 1,
            "outsideBox": 3,
            "conversion": "12.0%"
          },
          "defenseDefense": "负责左路的极限拦截，对抗拉菲尼亚，并在对方大禁区弧顶附近进行定位球解围。",
          "defenseWarnings": "巴西队右后卫达尼洛必须注意防守身位，不能给其轻松传中和套边插上的机会。"
        },
        {
          "name": "弗朗茨迪·佩罗特",
          "age": 31,
          "position": "前锋/中锋",
          "stats": "本届1球 | 国家队累计30场21球",
          "role": "海法马卡比锋线巨兽，身高1米94，弹跳力惊人，前场头球和争顶能力是海地的终极武器。",
          "form": "极佳",
          "ratings": [74, 80, 65, 70, 32, 90],
          "goalDist": {
            "leftBox": 2,
            "centerBox": 16,
            "rightBox": 2,
            "outsideBox": 1,
            "conversion": "16.8%"
          },
          "defenseDefense": "定位球防守时的第一防空大闸，站立在小禁区中央破坏巴西的所有传中起球。",
          "defenseWarnings": "巴西中卫必须在定位球时对其形成环抱之势，坚决不能让其在小禁区内抢到身位。"
        }
      ]
    }
  },
  "tur-par": {
    "themeClass": "tur-par-theme",
    "group": "D 组第二轮焦点战",
    "timeLoc": "北京时间 6月20日 09:30 | 纽约大都会人寿体育场",
    "teams": {
      "home": {
        "name": "土耳其",
        "flag": "tur",
        "goals": 1.8,
        "shots": 15.6,
        "sot": 6.8,
        "sOff": 8.8,
        "corners": 6.0,
        "history": {
          "record1Year": "7胜 0平 3负 (胜率 70%)",
          "possession": "58.2%",
          "passAccuracy": "86.5%",
          "cleanSheets": "4次",
          "shotConversion": "12.5%",
          "conversionExplanation": "土耳其首战虽然控球狂轰滥炸但遗憾落败（零封），此役生死战全力强攻。恰尔汗奥卢的中场重炮与定位球，加上小将居勒尔的右路内切是核心杀招。",
          "recentMatches": [
            {
              "opponent": "澳大利亚",
              "score": "0 - 2",
              "type": "世界杯",
              "date": "2026-06"
            },
            {
              "opponent": "意大利",
              "score": "0 - 0",
              "type": "友谊赛",
              "date": "2024-06"
            },
            {
              "opponent": "波兰",
              "score": "1 - 2",
              "type": "友谊赛",
              "date": "2024-06"
            },
            {
              "opponent": "奥地利",
              "score": "1 - 6",
              "type": "友谊赛",
              "date": "2024-03"
            }
          ]
        }
      },
      "away": {
        "name": "巴拉圭",
        "flag": "par",
        "goals": 1.4,
        "shots": 10.8,
        "sot": 4.2,
        "sOff": 6.6,
        "corners": 4.5,
        "history": {
          "record1Year": "4胜 2平 4负 (胜率 40%)",
          "possession": "46.8%",
          "passAccuracy": "78.4%",
          "cleanSheets": "3次",
          "shotConversion": "11.2%",
          "conversionExplanation": "巴拉圭首战以1-4败于美国，防守暴露严重漏洞。本场将极其警惕土耳其的地面推进，主要依靠阿尔米隆在边路的强行爆破进行快速反击。",
          "recentMatches": [
            {
              "opponent": "美国",
              "score": "1 - 4",
              "type": "世界杯",
              "date": "2026-06"
            },
            {
              "opponent": "智利",
              "score": "0 - 3",
              "type": "国际友谊赛",
              "date": "2024-06"
            },
            {
              "opponent": "秘鲁",
              "score": "0 - 0",
              "type": "国际友谊赛",
              "date": "2024-06"
            },
            {
              "opponent": "哥伦比亚",
              "score": "0 - 1",
              "type": "世预赛",
              "date": "2023-11"
            }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "哈坎·恰尔汗奥卢",
        "jersey": "10",
        "club": "国际米兰",
        "role": "组织中场/队长",
        "color": "#3b82f6",
        "details": "国米核心中脑（20球），拥有惊人的长传精准度与世界级任意球和外围远射重炮威胁。"
      },
      "away": {
        "name": "米格尔·阿尔米隆",
        "jersey": "10",
        "club": "纽卡斯尔联",
        "role": "右边锋",
        "color": "#ef4444",
        "details": "纽卡超级快马（8球），体能无限，左脚兜射极其凶狠，是巴拉圭反击的绝对发动机。"
      },
      "description": "土耳其队长恰尔汗奥卢的中场直塞炮弹调度与巴拉圭反击之王阿尔米隆的极速对轰。恰尔汗奥卢能否在中圈完全掌控比赛主动权，而阿尔米隆能否用极速突破土耳其空虚的后防，是此战成败的核心所在。"
    },
    "verdict": {
      "score": "2 - 1",
      "text": "两队迎来出线生死战，土耳其恰尔汗奥卢的远射与居勒尔的灵性内切将是破大巴的利器。巴拉圭防线在首战惨败后立足防守，虽然阿尔米隆能打出致命反击，但土耳其整体传控优势更为明显，预计土耳其 2-1 险胜。"
    },
    "injuries": {
      "home": [
        {
          "name": "卡巴克",
          "desc": "膝伤缺席，土耳其后防少了一名身材高大的主力中卫",
          "status": "recovered"
        }
      ],
      "away": [
        {
          "name": "戈麦斯",
          "desc": "中场拼抢时韧带拉伤此役无缘登场，巴拉圭中场扫荡力打折扣",
          "status": "recovered"
        }
      ]
    },
    "tactics": {
      "homeForm": "4-2-3-1",
      "awayForm": "4-3-3",
      "explanation": "土耳其采用 4-2-3-1 攻击阵型，恰尔汗奥卢和科克库拖后梳理，居勒尔居右策应内切拉开空档，伊尔马兹在左路横冲直撞。巴拉圭防守时变成 4-5-1 深度落位防御，一旦断球，中场迅速直传大脚，依靠边路阿尔米隆与左路的恩西索强行变向爆破带球快攻，直扑土耳其球门。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "居诺克", "type": "home" },
        { "x": 150, "y": 380, "num": 4, "name": "阿卡丁", "type": "home" },
        { "x": 210, "y": 380, "num": 14, "name": "巴达克杰", "type": "home" },
        { "x": 80, "y": 320, "num": 20, "name": "卡迪奥卢", "type": "home" },
        { "x": 280, "y": 320, "num": 18, "name": "穆尔杜尔", "type": "home" },
        { "x": 150, "y": 240, "num": 10, "name": "恰尔汗奥卢", "type": "home" },
        { "x": 210, "y": 240, "num": 15, "name": "奥兹詹", "type": "home" },
        { "x": 180, "y": 170, "num": 6, "name": "科克库", "type": "home" },
        { "x": 80, "y": 140, "num": 21, "name": "伊尔马兹", "type": "home" },
        { "x": 280, "y": 140, "num": 8, "name": "居勒尔", "type": "home" },
        { "x": 180, "y": 90, "num": 19, "name": "星奴", "type": "home" },
        
        { "x": 180, "y": 350, "num": 1, "name": "卡洛斯", "type": "away" },
        { "x": 150, "y": 280, "num": 15, "name": "戈麦斯", "type": "away" },
        { "x": 210, "y": 280, "num": 5, "name": "巴尔武埃纳", "type": "away" },
        { "x": 80, "y": 220, "num": 4, "name": "埃斯皮诺萨", "type": "away" },
        { "x": 280, "y": 220, "num": 2, "name": "加马拉", "type": "away" },
        { "x": 180, "y": 190, "num": 23, "name": "比利亚桑蒂", "type": "away" },
        { "x": 130, "y": 140, "num": 8, "name": "库瓦斯", "type": "away" },
        { "x": 230, "y": 140, "num": 20, "name": "理查德", "type": "away" },
        { "x": 80, "y": 90, "num": 19, "name": "恩西索", "type": "away" },
        { "x": 280, "y": 90, "num": 10, "name": "阿尔米隆", "type": "away" },
        { "x": 180, "y": 70, "num": 9, "name": "萨纳布里亚", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "哈坎·恰尔汗奥卢",
          "age": 32,
          "position": "中场/队长",
          "stats": "本届2球 | 国家队累计94场20球",
          "role": "土耳其队长，国米王牌，中场掌控力极强，外围远射重炮和任意球直接破门直接决定土耳其的上限。",
          "form": "极佳",
          "ratings": [72, 85, 92, 84, 75, 82],
          "goalDist": {
            "leftBox": 1,
            "centerBox": 4,
            "rightBox": 1,
            "outsideBox": 14,
            "conversion": "12.8%"
          },
          "defenseDefense": "防线前的中路指挥官，拦截巴拉圭后场长传直塞的落脚点。",
          "defenseWarnings": "巴拉圭中场绝对不能在禁区外25米给其轻松起脚或犯规漏定位球的空当。"
        },
        {
          "name": "阿尔达·居勒尔",
          "age": 21,
          "position": "右翼锋/前腰",
          "stats": "本届1球 | 国家队累计16场3球",
          "role": "皇马妖星，脚法极为华丽灵动，传中弧线精准，擅长中右路拿球内切晃开后防线兜射远角。",
          "form": "极佳",
          "ratings": [85, 80, 88, 92, 45, 68],
          "goalDist": {
            "leftBox": 1,
            "centerBox": 1,
            "rightBox": 0,
            "outsideBox": 1,
            "conversion": "14.5%"
          },
          "defenseDefense": "右路协助防守，干扰并逼抢对方左翼锋恩西索的快攻起步节奏。",
          "defenseWarnings": "巴拉圭左后卫埃斯皮诺萨必须时刻注意其左脚变向的线路，不能轻易下铲被过。"
        },
        {
          "name": "巴里什·阿尔佩尔·伊尔马兹",
          "age": 26,
          "position": "右边锋/中锋",
          "stats": "本届1助 | 国家队累计20场3球",
          "role": "边路推土机，体能极度充沛，速度飞快，对抗强硬，擅长在前场实施毁灭性的高位压迫。",
          "form": "稳定",
          "ratings": [90, 78, 74, 80, 65, 86],
          "goalDist": {
            "leftBox": 0,
            "centerBox": 2,
            "rightBox": 1,
            "outsideBox": 0,
            "conversion": "13.5%"
          },
          "defenseDefense": "前场第一线反抢屏障，大范围回追切断对方反击的长传线路。",
          "defenseWarnings": "巴拉圭防线在后场传导时决不能拖沓，谨防被其用身体强行抢断生吃。"
        }
      ],
      "away": [
        {
          "name": "米格尔·阿尔米隆",
          "age": 32,
          "position": "右边锋",
          "stats": "本届1助 | 国家队累计58场8球",
          "role": "纽卡斯尔联快马，反击核心，体能无上限，拥有极其致命的右侧长驱直入与左脚彩虹弧线兜射。",
          "form": "极佳",
          "ratings": [92, 78, 80, 85, 62, 75],
          "goalDist": {
            "leftBox": 1,
            "centerBox": 4,
            "rightBox": 2,
            "outsideBox": 1,
            "conversion": "12.5%"
          },
          "defenseDefense": "协助中场退守拦截土耳其卡迪奥卢的压上助攻，就地发起极极速单人反击。",
          "defenseWarnings": "土耳其左后卫卡迪奥卢切忌盲目前插，必须随时在其弱侧留人预防极速单刀。"
        },
        {
          "name": "胡利奥·恩西索",
          "age": 22,
          "position": "前腰/左翼",
          "stats": "本届1球 | 国家队累计18场2球",
          "role": "布莱顿超新星，小范围内切过人极其残暴，冷射重炮效率惊人，是巴拉圭前场的灵性核武。",
          "form": "极佳",
          "ratings": [86, 82, 78, 88, 42, 72],
          "goalDist": {
            "leftBox": 0,
            "centerBox": 1,
            "rightBox": 0,
            "outsideBox": 1,
            "conversion": "13.8%"
          },
          "defenseDefense": "大禁区前沿协助扫荡，干扰并拦截土耳其恰尔汗奥卢的前压直塞线路。",
          "defenseWarnings": "土耳其防线在其大禁区前带球时必须快速合围，决不能给其横切起脚怒射的空隙。"
        },
        {
          "name": "安东尼奥·萨纳布里亚",
          "age": 30,
          "position": "中锋",
          "stats": "本届1球 | 国家队累计34场4球",
          "role": "都灵中锋，门前卡位对抗能力非常扎实，擅长在小禁区乱战中停球摆脱起脚破门。",
          "form": "稳定",
          "ratings": [78, 80, 72, 76, 35, 82],
          "goalDist": {
            "leftBox": 1,
            "centerBox": 2,
            "rightBox": 1,
            "outsideBox": 0,
            "conversion": "15.0%"
          },
          "defenseDefense": "定位球防守时参与前点起跳解围，前场逼抢对方巴达克杰的接球出球。",
          "defenseWarnings": "土耳其双中卫必须随时对其门前的无球反跑进行卡位阻挡，严防抢点。"
        }
      ]
    }
  }
};

// Add to the main data object
Object.assign(data, newMatches);

// Write it back to data.json beautifully formatted
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log('data.json upgraded successfully with 4 new matches (including verdict)!');
