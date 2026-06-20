const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.json');
const rawData = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(rawData);

// New matches data for June 20, 2026
const newMatches = {
  "ger-civ": {
    "themeClass": "ger-civ-theme",
    "group": "E 组第二轮焦点战",
    "timeLoc": "北京时间 6月20日 21:00 | 多伦多体育场",
    "teams": {
      "home": {
        "name": "德国",
        "flag": "ger",
        "goals": 2.2,
        "shots": 15.8,
        "sot": 7.2,
        "sOff": 8.6,
        "corners": 6.4,
        "history": {
          "record1Year": "8胜 1平 2负 (胜率 72.7%)",
          "possession": "59.2%",
          "passAccuracy": "88.5%",
          "cleanSheets": "4次",
          "shotConversion": "13.9%",
          "conversionExplanation": "德国战车在主帅纳格尔斯曼的带领下主打前场高频压迫。穆西亚拉与维尔茨的“双子星”在肋部拥有超强的盘带与撕扯防线能力，中前场的小快灵渗透极具威胁。",
          "recentMatches": [
            { "opponent": "厄瓜多尔", "score": "2 - 1", "type": "世界杯", "date": "2026-06" },
            { "opponent": "乌克兰", "score": "0 - 0", "type": "国际友谊赛", "date": "2024-06" },
            { "opponent": "希腊", "score": "2 - 1", "type": "国际友谊赛", "date": "2024-06" },
            { "opponent": "法国", "score": "2 - 0", "type": "国际友谊赛", "date": "2024-03" }
          ]
        }
      },
      "away": {
        "name": "科特迪瓦",
        "flag": "civ",
        "goals": 1.6,
        "shots": 11.4,
        "sot": 4.8,
        "sOff": 6.6,
        "corners": 5.2,
        "history": {
          "record1Year": "6胜 3平 1负 (胜率 60%)",
          "possession": "52.8%",
          "passAccuracy": "82.4%",
          "cleanSheets": "5次",
          "shotConversion": "14.0%",
          "conversionExplanation": "非洲大象科特迪瓦拼抢硬朗，两翼推进极具爆发力。以凯西为首的铁血中场防守极其硬实，反击时通过阿丁格拉的高速突破与空霸阿莱在门前的终结，打出快速边路直传。",
          "recentMatches": [
            { "opponent": "库拉索", "score": "3 - 0", "type": "世界杯", "date": "2026-06" },
            { "opponent": "肯尼亚", "score": "1 - 1", "type": "世预赛", "date": "2024-06" },
            { "opponent": "加蓬", "score": "1 - 0", "type": "世预赛", "date": "2024-06" },
            { "opponent": "贝宁", "score": "2 - 2", "type": "友谊赛", "date": "2024-03" }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "贾马尔·穆西亚拉",
        "jersey": "10",
        "club": "拜仁慕尼黑",
        "role": "前腰/左翼锋",
        "color": "#3b82f6",
        "details": "德国中场核心，盘带脚法极佳，擅长在大禁区周围多人合围中，通过精妙扭动强行起脚和送出致命直塞。"
      },
      "away": {
        "name": "塞巴斯蒂安·阿莱",
        "jersey": "9",
        "club": "莱加内斯",
        "role": "中锋/锋线灯塔",
        "color": "#10b981",
        "details": "科特迪瓦第一空霸，身体素质极佳，拥有顶级的禁区支点背身护球与门前抢点头槌终结能力。"
      },
      "description": "德国进攻万花筒穆西亚拉的灵巧盘带突防，与科特迪瓦神塔阿莱的强硬反弹轰门。穆西亚拉能否在科特迪瓦后腰凯西的贴身绞杀下送出手术刀直塞，而德国双中卫吕迪格和塔能否守住空中防线、阻断科特迪瓦对阿莱的起球点，是此役的最大看点。"
    },
    "verdict": {
      "score": "2 - 1",
      "text": "德国队整体控球速度与局部配合更占上风，穆西亚拉与维尔茨的快速换位能撕扯科特迪瓦转身较慢的双中卫。科特迪瓦虽然能利用定位球和阿莱的支点取得一球，但很难限制住德国多点开花的边路传切，预计德国 2-1 险胜取得小组两连胜。"
    },
    "injuries": {
      "home": [
        { "name": "聚勒", "desc": "大腿肌肉酸痛此役出战成疑，防线高度略受影响", "status": "warning" }
      ],
      "away": [
        { "name": "恩迪卡", "desc": "小腿轻微拉伤，但首发位置依然稳固，需谨防二次受伤", "status": "warning" }
      ]
    },
    "tactics": {
      "homeForm": "4-2-3-1",
      "awayForm": "4-3-3",
      "explanation": "德国采用 4-2-3-1 攻击阵型，克罗斯在中后场长传发牌调度，穆西亚拉在左肋、维尔茨在右肋频繁持球冲击底线，京多安扮演前场串联，哈弗茨无球前插充当伪九号。科特迪瓦摆出 4-3-3 阵型，三中场凯西、塞里、桑加雷在中圈深度截防，通过两翼阿丁格拉和佩佩带球沿边线飞奔传中，寻找门前的中锋阿莱进行高空砸门。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "特尔施特根", "type": "home" },
        { "x": 140, "y": 380, "num": 2, "name": "吕迪格", "type": "home" },
        { "x": 220, "y": 380, "num": 4, "name": "塔", "type": "home" },
        { "x": 70, "y": 360, "num": 3, "name": "劳姆", "type": "home" },
        { "x": 290, "y": 360, "num": 6, "name": "基米希", "type": "home" },
        { "x": 130, "y": 280, "num": 8, "name": "克罗斯", "type": "home" },
        { "x": 230, "y": 280, "num": 23, "name": "安德里希", "type": "home" },
        { "x": 180, "y": 180, "num": 21, "name": "京多安", "type": "home" },
        { "x": 90, "y": 140, "num": 10, "name": "穆西亚拉", "type": "home" },
        { "x": 270, "y": 140, "num": 17, "name": "维尔茨", "type": "home" },
        { "x": 180, "y": 90, "num": 7, "name": "哈弗茨", "type": "home" },
        
        { "x": 180, "y": 350, "num": 1, "name": "福法纳", "type": "away" },
        { "x": 140, "y": 290, "num": 21, "name": "恩迪卡", "type": "away" },
        { "x": 220, "y": 290, "num": 7, "name": "科索努", "type": "away" },
        { "x": 80, "y": 240, "num": 3, "name": "科南", "type": "away" },
        { "x": 280, "y": 240, "num": 5, "name": "辛戈", "type": "away" },
        { "x": 180, "y": 210, "num": 4, "name": "塞里", "type": "away" },
        { "x": 130, "y": 160, "num": 8, "name": "凯西", "type": "away" },
        { "x": 230, "y": 160, "num": 18, "name": "桑加雷", "type": "away" },
        { "x": 90, "y": 110, "num": 24, "name": "阿丁格拉", "type": "away" },
        { "x": 270, "y": 110, "num": 19, "name": "佩佩", "type": "away" },
        { "x": 180, "y": 80, "num": 9, "name": "阿莱", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "贾马尔·穆西亚拉",
          "age": 23,
          "position": "前腰/翼锋",
          "stats": "本届1球1助 | 国家队累计34场6球",
          "role": "中前场持球突进尖刀，擅长利用极快的步频在密集禁区闪转腾挪扭动身躯，是破密集大巴的不二利器。",
          "form": "极佳",
          "ratings": [92, 85, 90, 93, 30, 72],
          "goalDist": { "leftBox": 1, "centerBox": 3, "rightBox": 1, "outsideBox": 1, "conversion": "15.4%" },
          "defenseDefense": "前场高位逼抢一环，大范围对科特迪瓦后腰塞里出球实施干扰。",
          "defenseWarnings": "科特迪瓦右后卫辛戈在退防时要特别留出2米缓冲带，切勿盲目出脚吃晃。"
        },
        {
          "name": "托尼·克罗斯",
          "age": 36,
          "position": "防守中场",
          "stats": "本届2助 | 国家队累计114场17球",
          "role": "中场中脑，传球精准度达到历史级，长传斜吊调度极准，大局观与定位球主罚均是战术核心。",
          "form": "稳定",
          "ratings": [70, 72, 98, 88, 75, 80],
          "goalDist": { "leftBox": 0, "centerBox": 2, "rightBox": 0, "outsideBox": 15, "conversion": "11.2%" },
          "defenseDefense": "中后卫身前防守组织者，负责掌控二点球球权并就地发起大范围斜传发牌。",
          "defenseWarnings": "科特迪瓦中场在反击时必须对其贴身干扰，绝不能让他舒服地摆腿送出大脚直塞。"
        },
        {
          "name": "弗洛里安·维尔茨",
          "age": 23,
          "position": "前腰/翼锋",
          "stats": "本届1球 | 国家队累计28场4球",
          "role": "进攻端核心大脑，拥有无与伦比的直塞嗅觉和肋部穿插穿透力，定位球弧线极其诡异。",
          "form": "极佳",
          "ratings": [88, 84, 91, 88, 42, 75],
          "goalDist": { "leftBox": 1, "centerBox": 2, "rightBox": 1, "outsideBox": 0, "conversion": "14.3%" },
          "defenseDefense": "积极前插前场高压，阻截科特迪瓦中卫恩迪卡的从容短传出球路线。",
          "defenseWarnings": "科特迪瓦防线必须在其大禁区前沿内切持球时坚决包夹，防范其外围冷射兜远角。"
        }
      ],
      "away": [
        {
          "name": "塞巴斯蒂安·阿莱",
          "age": 31,
          "position": "中锋",
          "stats": "本届1球 | 国家队累计26场10球",
          "role": "大象锋线核武，身高1米91，强壮的对抗硬度，擅长在门前完成争顶和扛住后卫摆脱打门。",
          "form": "极佳",
          "ratings": [78, 85, 72, 74, 45, 90],
          "goalDist": { "leftBox": 1, "centerBox": 8, "rightBox": 1, "outsideBox": 0, "conversion": "17.2%" },
          "defenseDefense": "定位球防守时的前点解围者，在中圈阻截德国出球的第一道线。",
          "defenseWarnings": "德国中卫吕迪格与塔必须在其接应传中球时进行身体合围，严防其起跳冲顶砸门。"
        },
        {
          "name": "弗兰克·凯西",
          "age": 29,
          "position": "中场/后腰",
          "stats": "本届拦截5次 | 国家队累计76场11球",
          "role": "中圈绞杀扫荡者，体能极度充沛，大闸身形极具防守威慑力，拥有一脚重炮远射和点球大心脏。",
          "form": "稳定",
          "ratings": [78, 76, 82, 78, 86, 88],
          "goalDist": { "leftBox": 1, "centerBox": 6, "rightBox": 1, "outsideBox": 3, "conversion": "12.8%" },
          "defenseDefense": "禁区前沿的绝对屏障，重点负责限制德国队前腰京多安的穿插与远射。",
          "defenseWarnings": "德国中前场在中圈传递时必须警惕其倒地滑铲与身体对抗，需尽快转移球避其锋芒。"
        },
        {
          "name": "西蒙·阿丁格拉",
          "age": 24,
          "position": "左翼锋/右边锋",
          "stats": "本届1助 | 国家队累计16场2球",
          "role": "非洲金童飞翼，突防速度奇快，脚下变向摆脱频率高，在边路拥有极强的带球纵深单干爆破力。",
          "form": "极佳",
          "ratings": [90, 80, 78, 86, 32, 70],
          "goalDist": { "leftBox": 0, "centerBox": 1, "rightBox": 1, "outsideBox": 0, "conversion": "13.0%" },
          "defenseDefense": "在边路阻截德国边卫基米希的前插，大范围回收底线参与双人防守。",
          "defenseWarnings": "德国右后卫基米希切忌盲目压上失位，在其反击突击时必须让安德里希迅速协防补空位。"
        }
      ]
    }
  },
  "ned-swe": {
    "themeClass": "ned-swe-theme",
    "group": "F 组第二轮焦点战",
    "timeLoc": "北京时间 6月20日 23:30 | 休斯敦体育场",
    "teams": {
      "home": {
        "name": "荷兰",
        "flag": "ned",
        "goals": 2.0,
        "shots": 14.5,
        "sot": 6.2,
        "sOff": 8.3,
        "corners": 6.8,
        "history": {
          "record1Year": "7胜 2平 1负 (胜率 70%)",
          "possession": "58.4%",
          "passAccuracy": "86.8%",
          "cleanSheets": "5次",
          "shotConversion": "14.5%",
          "conversionExplanation": "郁金香军团主打现代传控与高节奏的边中结合。赖因德斯的中路穿插和加克波的左路内切兜射构成了进攻主力线，范戴克则在防线提供绝对的掌控力。",
          "recentMatches": [
            { "opponent": "突尼斯", "score": "2 - 0", "type": "世界杯", "date": "2026-06" },
            { "opponent": "加拿大", "score": "4 - 0", "type": "国际友谊赛", "date": "2024-06" },
            { "opponent": "冰岛", "score": "4 - 0", "type": "国际友谊赛", "date": "2024-06" },
            { "opponent": "苏格兰", "score": "4 - 0", "type": "国际友谊赛", "date": "2024-03" }
          ]
        }
      },
      "away": {
        "name": "瑞典",
        "flag": "swe",
        "goals": 1.8,
        "shots": 12.8,
        "sot": 5.5,
        "sOff": 7.3,
        "corners": 5.5,
        "history": {
          "record1Year": "6胜 1平 3负 (胜率 60%)",
          "possession": "51.2%",
          "passAccuracy": "81.5%",
          "cleanSheets": "3次",
          "shotConversion": "13.8%",
          "conversionExplanation": "瑞典神盾攻防极具身体压迫度。前场双子星伊萨克和约克雷斯拥有欧洲第一梯队的高速盘带反击与终结力，边路传中与定位球包抄极其强力。",
          "recentMatches": [
            { "opponent": "日本", "score": "1 - 1", "type": "世界杯", "date": "2026-06" },
            { "opponent": "丹麦", "score": "1 - 2", "type": "国际友谊赛", "date": "2024-06" },
            { "opponent": "塞尔维亚", "score": "0 - 3", "type": "国际友谊赛", "date": "2024-06" },
            { "opponent": "阿尔巴尼亚", "score": "1 - 0", "type": "国际友谊赛", "date": "2024-03" }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "科迪·加克波",
        "jersey": "11",
        "club": "利物浦",
        "role": "左翼锋/中锋",
        "color": "#3b82f6",
        "details": "荷兰飞翼，在国家队大项赛事常有神级表现。左边路带球内切起右脚死角兜射是其招牌得分利器。"
      },
      "away": {
        "name": "维克托·约克雷斯",
        "jersey": "17",
        "club": "里斯本竞技",
        "role": "中锋/锋线推土机",
        "color": "#fbbf24",
        "details": "北欧进球狂人，身形壮硕且速度飞快，单刀爆破与身体卡位极强，上役梅开二度状态极其火热。"
      },
      "description": "荷兰左翼核武加克波的折线带球突入，与瑞典神锋约克雷斯的超频蛮横推进。加克波能否晃开瑞典右后卫克拉夫特，而约克雷斯能否在荷兰铁塔范戴克的贴身盯防下抢到射门身位，是决定胜负的钥匙。"
    },
    "verdict": {
      "score": "2 - 2",
      "text": "荷兰的中场控制力和局部传递优势会让瑞典长时间防守落位，但瑞典反击中伊萨克和约克雷斯的爆发力和单人爆破能力极其致命。荷兰防线前插过大容易暴露出防身后空档，极易演变为一场对攻大战，预计双方 2-2 握手言和。"
    },
    "injuries": {
      "home": [
        { "name": "弗兰基·德容", "desc": "脚踝伤势基本痊愈，此役宣告伤愈复出重回大名单，极大概率首发", "status": "recovered" }
      ],
      "away": [
        { "name": "林德洛夫", "desc": "脚踝韧带轻微扭伤，此役带伤坚持首发，转身速度或受限制", "status": "warning" }
      ]
    },
    "tactics": {
      "homeForm": "4-3-3",
      "awayForm": "4-4-2",
      "explanation": "荷兰队排出 4-3-3，范戴克后场组织，双边卫邓弗里斯与阿克积极前压参与围攻，中场德容持球发牌分边，加克波与西蒙斯在两翼制造单点突破机会。瑞典队祭出 4-4-2 防守阵型，中场深蹲起防线，一旦断球，中路迅速长传，伊萨克拉边持球吸引防守，约克雷斯则在大禁区中路做蛮横切入，形成两点包抄。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "维尔布鲁根", "type": "home" },
        { "x": 140, "y": 380, "num": 4, "name": "范戴克", "type": "home" },
        { "x": 220, "y": 380, "num": 6, "name": "德弗赖", "type": "home" },
        { "x": 70, "y": 350, "num": 5, "name": "阿克", "type": "home" },
        { "x": 290, "y": 350, "num": 22, "name": "邓弗里斯", "type": "home" },
        { "x": 180, "y": 280, "num": 21, "name": "德容", "type": "home" },
        { "x": 120, "y": 240, "num": 14, "name": "赖因德斯", "type": "home" },
        { "x": 240, "y": 240, "num": 24, "name": "斯豪滕", "type": "home" },
        { "x": 70, "y": 140, "num": 11, "name": "加克波", "type": "home" },
        { "x": 290, "y": 140, "num": 7, "name": "西蒙斯", "type": "home" },
        { "x": 180, "y": 90, "num": 10, "name": "德佩", "type": "home" },
        
        { "x": 180, "y": 350, "num": 1, "name": "奥尔森", "type": "away" },
        { "x": 140, "y": 290, "num": 3, "name": "林德洛夫", "type": "away" },
        { "x": 220, "y": 290, "num": 4, "name": "希恩", "type": "away" },
        { "x": 80, "y": 240, "num": 5, "name": "奥古斯丁松", "type": "away" },
        { "x": 280, "y": 240, "num": 2, "name": "克拉夫特", "type": "away" },
        { "x": 120, "y": 190, "num": 8, "name": "卡尤斯特", "type": "away" },
        { "x": 240, "y": 190, "num": 19, "name": "萨莱特罗斯", "type": "away" },
        { "x": 80, "y": 130, "num": 11, "name": "埃兰加", "type": "away" },
        { "x": 280, "y": 130, "num": 21, "name": "库卢塞夫斯基", "type": "away" },
        { "x": 150, "y": 80, "num": 9, "name": "伊萨克", "type": "away" },
        { "x": 210, "y": 80, "num": 17, "name": "约克雷斯", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "科迪·加克波",
          "age": 27,
          "position": "左翼锋/中锋",
          "stats": "本届2球 | 国家队累计46场15球",
          "role": "前场全能攻击尖刀，盘带灵活且步伐极具欺骗性，内切射远角兜弧线的能力是荷兰反击的第一依仗。",
          "form": "极佳",
          "ratings": [90, 84, 80, 88, 38, 76],
          "goalDist": { "leftBox": 2, "centerBox": 9, "rightBox": 2, "outsideBox": 2, "conversion": "16.8%" },
          "defenseDefense": "深度回撤，在左半扇协助后腰夹击限制瑞典中前卫卡尤斯特的出球。",
          "defenseWarnings": "瑞典右后卫克拉夫特必须牢牢卡主内切身位，切莫轻易被其扣过晃出射门角度。"
        },
        {
          "name": "弗吉尔·范戴克",
          "age": 34,
          "position": "中卫/队长",
          "stats": "本届拦截7次 | 国家队累计78场9球",
          "role": "防线定海神针，身高体壮，拥有顶级的防守选位与卡位对抗，高空球解围成功率高居全队首位。",
          "form": "极佳",
          "ratings": [68, 70, 82, 64, 96, 98],
          "goalDist": { "leftBox": 0, "centerBox": 8, "rightBox": 1, "outsideBox": 0, "conversion": "11.5%" },
          "defenseDefense": "禁区中路的清道夫与防守指挥官，重点负责卡位缠绕约克雷斯的背身拿球。",
          "defenseWarnings": "约克雷斯在与其强行冲撞时必须保持重心，不能在禁区内因为其伸腿卡位而丢失球权。"
        },
        {
          "name": "哈维·西蒙斯",
          "age": 23,
          "position": "右翼锋/前腰",
          "stats": "本届1球1助 | 国家队累计20场2球",
          "role": "进攻端灵性大脑，擅长在肋部做精妙的短传配合，摆脱过人摆动范围小，大局观出色。",
          "form": "极佳",
          "ratings": [88, 80, 86, 91, 40, 70],
          "goalDist": { "leftBox": 0, "centerBox": 1, "rightBox": 1, "outsideBox": 0, "conversion": "13.2%" },
          "defenseDefense": "在前场对瑞典左后卫奥古斯丁松起跑实施高位压迫，破坏第一点出球。",
          "defenseWarnings": "瑞典中场在处理球时要防范其突然在弱侧的隐蔽上抢断球发动二次进攻。"
        }
      ],
      "away": [
        {
          "name": "维克托·约克雷斯",
          "age": 28,
          "position": "中锋",
          "stats": "本届2球 | 国家队累计24场8球",
          "role": "瑞典的野兽神锋，身体素质与爆发力极其恐怖，擅长像坦克一样带球趟过防线，门前射术精湛。",
          "form": "极佳",
          "ratings": [84, 92, 70, 78, 48, 92],
          "goalDist": { "leftBox": 1, "centerBox": 6, "rightBox": 1, "outsideBox": 0, "conversion": "19.5%" },
          "defenseDefense": "高位逼抢荷兰门将出球，限制荷兰从后场的慢速传导路线。",
          "defenseWarnings": "荷兰中卫阿克必须警惕其沿肋部的斜线趟球，强行用身体卡位，不可轻易失位。"
        },
        {
          "name": "亚历山大·伊萨克",
          "age": 26,
          "position": "前锋/中锋",
          "stats": "本届1球1助 | 国家队累计48场11球",
          "role": "瑞典神兵，脚下技术极其灵性，突破幅度大，具备极强的无球反切与精妙做球策应能力。",
          "form": "稳定",
          "ratings": [88, 86, 78, 86, 35, 78],
          "goalDist": { "leftBox": 1, "centerBox": 8, "rightBox": 2, "outsideBox": 0, "conversion": "15.0%" },
          "defenseDefense": "在中前场退守边路，协助封堵荷兰队右边卫邓弗里斯的大幅度压上套边。",
          "defenseWarnings": "荷兰队防线在角球防守中切勿被其灵活的反跑虚晃扯开防守盯人漏洞。"
        },
        {
          "name": "德扬·库卢塞夫斯基",
          "age": 26,
          "position": "右中场/翼锋",
          "stats": "本届1助 | 国家队累计42场4球",
          "role": "边路推土机与战术发点，体能极佳，拥有大范围摆脱和内切左脚传中起高球的能力。",
          "form": "稳定",
          "ratings": [82, 80, 85, 84, 65, 85],
          "goalDist": { "leftBox": 1, "centerBox": 2, "rightBox": 1, "outsideBox": 0, "conversion": "11.8%" },
          "defenseDefense": "中右路大范围逼抢，协助右后卫防守荷兰队长加克波的底线穿插。",
          "defenseWarnings": "荷兰边卫阿克在防守时必须贴紧，严防其起左脚大范围兜向禁区远端找约克雷斯。"
        }
      ]
    }
  },
  "ecu-cur": {
    "themeClass": "ecu-cur-theme",
    "group": "E 组第二轮焦点战",
    "timeLoc": "北京时间 6月20日 15:30 | 堪萨斯城体育场",
    "teams": {
      "home": {
        "name": "厄瓜多尔",
        "flag": "ecu",
        "goals": 1.8,
        "shots": 13.2,
        "sot": 5.8,
        "sOff": 7.4,
        "corners": 6.0,
        "history": {
          "record1Year": "6胜 2平 2负 (胜率 60%)",
          "possession": "54.6%",
          "passAccuracy": "84.2%",
          "cleanSheets": "4次",
          "shotConversion": "13.6%",
          "conversionExplanation": "厄瓜多尔人高马大，在高原洗礼下体能极其恐怖。中场核心莫伊塞斯·凯塞多拥有顶级的出球和抢断能力，两翼的超速突防与老将瓦伦西亚的门前抢点是杀招。",
          "recentMatches": [
            { "opponent": "德国", "score": "1 - 2", "type": "世界杯", "date": "2026-06" },
            { "opponent": "阿根廷", "score": "0 - 1", "type": "世预赛", "date": "2024-06" },
            { "opponent": "玻利维亚", "score": "3 - 1", "type": "国际友谊赛", "date": "2024-06" },
            { "opponent": "危地马拉", "score": "2 - 0", "type": "国际友谊赛", "date": "2024-03" }
          ]
        }
      },
      "away": {
        "name": "库拉索",
        "flag": "cur",
        "goals": 1.0,
        "shots": 7.8,
        "sot": 2.5,
        "sOff": 5.3,
        "corners": 3.2,
        "history": {
          "record1Year": "3胜 2平 5负 (胜率 30%)",
          "possession": "40.5%",
          "passAccuracy": "73.2%",
          "cleanSheets": "2次",
          "shotConversion": "12.8%",
          "conversionExplanation": "库拉索防守端采用极具硬度的 5-4-1 密集防线，门前拼抢积极。依靠队长利昂德罗·巴库纳以及前腰庄奴在反击时的突然爆破，打对方防区结合部。",
          "recentMatches": [
            { "opponent": "科特迪瓦", "score": "0 - 3", "type": "世界杯", "date": "2026-06" },
            { "opponent": "阿鲁巴", "score": "2 - 0", "type": "世预赛", "date": "2024-06" },
            { "opponent": "巴巴多斯", "score": "1 - 1", "type": "世预赛", "date": "2024-06" },
            { "opponent": "赫拉克勒斯", "score": "1 - 0", "type": "友谊赛", "date": "2024-03" }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "莫伊塞斯·凯塞多",
        "jersey": "23",
        "club": "切尔西",
        "role": "防守中场/核心枢纽",
        "color": "#3b82f6",
        "details": "切尔西亿级铁腰，拥有恐怖的中圈洗球和滑铲拦截，是厄瓜多尔转换枢纽的灵魂保障。"
      },
      "away": {
        "name": "庄奴·巴库纳",
        "jersey": "7",
        "club": "伯明翰",
        "role": "中前卫/反击尖刀",
        "color": "#fbbf24",
        "details": "库拉索攻击线支柱，脚下盘带极具爆发力，定位球弧线精准，是库拉索发起绝地反击的要道。"
      },
      "description": "厄瓜多尔铁腰凯塞多的中路拦截阻断，与库拉索尖刀庄奴的反击大步趟球。凯塞多能否彻底锁死库拉索的中路反击通道，而庄奴能否在夹缝中送出斜吊连线，是本场比赛战术攻防的命脉。"
    },
    "verdict": {
      "score": "2 - 0",
      "text": "库拉索实力有限且上役大败，面对厄瓜多尔极其恐怖的拼抢体能与对抗硬度，门前很容易在二点球乱战中暴露出空档。凯塞多在中场的屏障效果会让库拉索反击窒碍难行，预计厄瓜多尔 2-0 零封取胜。"
    },
    "injuries": {
      "home": [
        { "name": "埃斯图皮尼安", "desc": "膝伤已经百分百痊愈，本场重回首发左后卫，提供无解的边路插上支援", "status": "recovered" }
      ],
      "away": []
    },
    "tactics": {
      "homeForm": "4-2-3-1",
      "awayForm": "5-4-1",
      "explanation": "厄瓜多尔采用 4-2-3-1 攻击阵型，凯塞多拖后拦截，埃斯图皮尼安在左侧疯狂前插策应，萨尔门托内切横向撕扯空间，中锋瓦伦西亚埋伏禁区捕捉杀机。库拉索摆出 5-4-1 极密铁桶，五名后卫在大禁区前沿成扇形合拢防御，彻底出让控球率，仅依靠前场的庄奴在反击中趟过厄瓜多尔的单防发起快攻。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "加林德斯", "type": "home" },
        { "x": 140, "y": 380, "num": 3, "name": "因卡皮耶", "type": "home" },
        { "x": 220, "y": 380, "num": 2, "name": "托雷斯", "type": "home" },
        { "x": 70, "y": 350, "num": 6, "name": "帕乔", "type": "home" },
        { "x": 290, "y": 350, "num": 17, "name": "普雷西亚多", "type": "home" },
        { "x": 130, "y": 280, "num": 23, "name": "凯塞多", "type": "home" },
        { "x": 230, "y": 280, "num": 8, "name": "格鲁埃佐", "type": "home" },
        { "x": 180, "y": 180, "num": 10, "name": "派斯", "type": "home" },
        { "x": 90, "y": 140, "num": 16, "name": "萨尔门托", "type": "home" },
        { "x": 270, "y": 140, "num": 9, "name": "门多萨", "type": "home" },
        { "x": 180, "y": 90, "num": 13, "name": "瓦伦西亚", "type": "home" },
        
        { "x": 180, "y": 350, "num": 1, "name": "鲁姆", "type": "away" },
        { "x": 180, "y": 290, "num": 3, "name": "尤里奇", "type": "away" },
        { "x": 130, "y": 290, "num": 4, "name": "玛蒂娜", "type": "away" },
        { "x": 230, "y": 290, "num": 5, "name": "范艾伊马", "type": "away" },
        { "x": 80, "y": 250, "num": 2, "name": "弗洛拉努斯", "type": "away" },
        { "x": 280, "y": 250, "num": 19, "name": "玛利亚", "type": "away" },
        { "x": 150, "y": 190, "num": 8, "name": "L.巴库纳", "type": "away" },
        { "x": 210, "y": 190, "num": 10, "name": "库纳", "type": "away" },
        { "x": 90, "y": 130, "num": 11, "name": "J.马蒂纳", "type": "away" },
        { "x": 270, "y": 130, "num": 7, "name": "J.巴库纳", "type": "away" },
        { "x": 180, "y": 80, "num": 9, "name": "庄奴", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "莫伊塞斯·凯塞多",
          "age": 24,
          "position": "防守中场",
          "stats": "本届拦截5次 | 国家队累计42场3球",
          "role": "切尔西核心，拦截洗球覆盖极广，拥有卓越的长传调度和大心脏的点射稳定性，是全队的攻防节拍器。",
          "form": "极佳",
          "ratings": [82, 78, 88, 84, 88, 91],
          "goalDist": { "leftBox": 0, "centerBox": 2, "rightBox": 0, "outsideBox": 1, "conversion": "9.2%" },
          "defenseDefense": "中圈战术调度大闸，重点防范库拉索队长巴库纳的长传反击线路。",
          "defenseWarnings": "库拉索中场在传球时一定要防范其突然在弱侧的滑铲封堵抢断。"
        },
        {
          "name": "恩纳·瓦伦西亚",
          "age": 36,
          "position": "中锋/队长",
          "stats": "本届1球 | 国家队累计88场41球",
          "role": "厄瓜多尔传奇队长与终结者，拥有极强的爆发力和门前瞬间变向抢点得分能力，精神领袖。",
          "form": "稳定",
          "ratings": [82, 86, 70, 78, 38, 88],
          "goalDist": { "leftBox": 2, "centerBox": 32, "rightBox": 5, "outsideBox": 2, "conversion": "17.8%" },
          "defenseDefense": "在前场对库拉索双中卫出球进行疯狂撕咬，延缓其长传反击发动时间。",
          "defenseWarnings": "库拉索三中卫在角球防守中必须时刻贴紧，严防其门前的后插上争顶轰门。"
        },
        {
          "name": "皮耶罗·因卡皮耶",
          "age": 24,
          "position": "中卫/左后卫",
          "stats": "本届拦截4次 | 国家队累计34场2球",
          "role": "勒沃库森金石后防，脚下技术极其灵性，对抗扎实，擅长在左路持球推进策应埃斯图皮尼安。",
          "form": "极佳",
          "ratings": [78, 70, 82, 75, 88, 86],
          "goalDist": { "leftBox": 0, "centerBox": 2, "rightBox": 0, "outsideBox": 0, "conversion": "11.0%" },
          "defenseDefense": "左肋防线大闸，大范围回追封堵库拉索反击边路走廊。",
          "defenseWarnings": "库拉索右边路切忌在反击时正面与其强硬对抗，需快速敲墙打身后。"
        }
      ],
      "away": [
        {
          "name": "庄奴·巴库纳",
          "age": 28,
          "position": "中前卫",
          "stats": "本届1球 | 国家队累计30场5球",
          "role": "库拉索中前场战术枢纽，脚法奇特，拥有一脚石破天惊的外围冷射重炮和任意球精度。",
          "form": "极佳",
          "ratings": [78, 80, 82, 80, 62, 75],
          "goalDist": { "leftBox": 0, "centerBox": 2, "rightBox": 1, "outsideBox": 2, "conversion": "12.5%" },
          "defenseDefense": "中圈大范围拼抢防守，协助后场阻截厄瓜多尔中腰凯塞多的直传渗透。",
          "defenseWarnings": "厄瓜多尔防线在禁区弧顶附近千万不可给其充裕的摆腿空档，必须紧密防堵。"
        },
        {
          "name": "埃洛伊·鲁姆",
          "age": 37,
          "position": "门将",
          "stats": "本届扑救6次 | 国家队累计48场0球",
          "role": "库拉索的门前门神，拥有极其惊人的反应速度和近距离反射扑救，多次贡献神扑。",
          "form": "稳定",
          "ratings": [45, 40, 68, 42, 85, 88],
          "goalDist": { "leftBox": 0, "centerBox": 0, "rightBox": 0, "outsideBox": 0, "conversion": "0%" },
          "defenseDefense": "门前最终防守线，大喊指挥五中卫防线落位，处理门前高空球与传中球拦截。",
          "defenseWarnings": "厄瓜多尔在打门时必须打出角度，其门前二点扑救极为敏感，很难被直接打死。"
        },
        {
          "name": "利昂德罗·巴库纳",
          "age": 34,
          "position": "后腰/队长",
          "stats": "本届拦截4次 | 国家队累计52场14球",
          "role": "国家队老队长，经验极其丰富，中场大闸扫荡力度强，拥有不俗的身体卡位与洗球能力。",
          "form": "稳定",
          "ratings": [70, 72, 78, 74, 82, 84],
          "goalDist": { "leftBox": 1, "centerBox": 8, "rightBox": 2, "outsideBox": 3, "conversion": "11.2%" },
          "defenseDefense": "中路防线的第一道屏障，疯狂拼抢限制厄瓜多尔前腰派斯的横向盘带穿插。",
          "defenseWarnings": "厄瓜多尔中场在大范围倒球时必须防范其突然上抢，其大局观与铲断极准。"
        }
      ]
    }
  },
  "tun-jpn": {
    "themeClass": "tun-jpn-theme",
    "group": "F 组第二轮焦点战",
    "timeLoc": "北京时间 6月21日 01:30 | 蒙特雷体育场",
    "teams": {
      "home": {
        "name": "突尼斯",
        "flag": "tun",
        "goals": 1.1,
        "shots": 8.5,
        "sot": 3.0,
        "sOff": 5.5,
        "corners": 3.8,
        "history": {
          "record1Year": "4胜 3平 3负 (胜率 40%)",
          "possession": "42.8%",
          "passAccuracy": "76.5%",
          "cleanSheets": "4次",
          "shotConversion": "12.8%",
          "conversionExplanation": "迦太基雄鹰突尼斯作风铁血顽强，擅长扎紧防守篱笆。利用中场悍将斯希里的凶狠缠抱拦截和突袭传中打反击，在低位防守中有极其坚硬的落位深度。",
          "recentMatches": [
            { "opponent": "荷兰", "score": "0 - 2", "type": "世界杯", "date": "2026-06" },
            { "opponent": "赤道几内亚", "score": "1 - 0", "type": "世预赛", "date": "2024-06" },
            { "opponent": "纳米比亚", "score": "0 - 0", "type": "世预赛", "date": "2024-06" },
            { "opponent": "克罗地亚", "score": "0 - 0", "type": "友谊赛", "date": "2024-03" }
          ]
        }
      },
      "away": {
        "name": "日本",
        "flag": "jpn",
        "goals": 2.4,
        "shots": 16.2,
        "sot": 7.5,
        "sOff": 8.7,
        "corners": 6.2,
        "history": {
          "record1Year": "8胜 2平 0负 (胜率 80%)",
          "possession": "60.4%",
          "passAccuracy": "87.8%",
          "cleanSheets": "5次",
          "shotConversion": "14.8%",
          "conversionExplanation": "蓝武士日本主打极致的地面配合与小范围传切。三笘薰的左路“一招鲜”突防爆破与久保建英的内切连线是亚洲顶级武器，远藤航则在中圈提供无缝转换拦截。",
          "recentMatches": [
            { "opponent": "瑞典", "score": "1 - 1", "type": "世界杯", "date": "2026-06" },
            { "opponent": "叙利亚", "score": "5 - 0", "type": "世预赛", "date": "2024-06" },
            { "opponent": "缅甸", "score": "5 - 0", "type": "世预赛", "date": "2024-06" },
            { "opponent": "朝鲜", "score": "1 - 0", "type": "世预赛", "date": "2024-03" }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "埃利亚斯·斯希里",
        "jersey": "17",
        "club": "法兰克福",
        "role": "防守中场/队长",
        "color": "#e8112d",
        "details": "突尼斯中场核心大闸，跑动覆盖极其恐怖（德甲常年跑动王），中路抢断成功率与纠缠拦截极其扎实。"
      },
      "away": {
        "name": "三笘薰",
        "jersey": "7",
        "club": "布莱顿",
        "role": "左翼锋/爆破核武",
        "color": "#3b82f6",
        "details": "日本队终极左路走廊爆破飞翼，世界级带球突破和外线加速强行生吃防守能力，内切挑传威胁巨大。"
      },
      "description": "突尼斯队长斯希里的铁血扫荡堵枪眼，与日本队左翼爆破手三笘薰的极致边路单挑突破。斯希里能否彻底限制日本前场的小范围地面制导，而三笘薰能否用标志性的外线强突撕开突尼斯右路的五后卫防守，是决定此役进球与否的焦点博弈。"
    },
    "verdict": {
      "score": "0 - 2",
      "text": "突尼斯摆出 5-4-1 铁桶大巴力图死守一分，但日本队不仅拥有极强的地面细密控球穿插，三笘薰与久保建英在两翼的极致持球爆破更能有效吸引包夹并晃开防守空间。斯希里中路扫荡范围虽大，但难以抵挡日本下半场的换人冲击，预计日本 2-0 洞穿大巴取胜。"
    },
    "injuries": {
      "home": [
        { "name": "姆萨克尼", "desc": "老伤在首场比赛复发，此役出战成疑大概率替补候命", "status": "warning" }
      ],
      "away": [
        { "name": "守田英正", "desc": "肌肉轻度拉伤，本场替补席待命，由田中碧顶替首发", "status": "warning" }
      ]
    },
    "tactics": {
      "homeForm": "5-4-1",
      "awayForm": "4-2-3-1",
      "explanation": "突尼斯队祭出 5-4-1 极度防守大巴，三中卫与双边卫退防到禁区深处阻绝一切地面挑传，斯希里与莱杜尼中圈疯狂缠绕日本前腰。日本队则排开 4-2-3-1 攻击大阵，远藤航在中圈大闸扫荡控球，田中碧持球向前穿插，三笘薰在左侧底线吸引包夹，久保建英在右侧肋部横向盘带兜射，前插的上田绮世在大禁区内随时准备接应门前包抄。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "达门", "type": "home" },
        { "x": 180, "y": 390, "num": 3, "name": "塔尔比", "type": "home" },
        { "x": 120, "y": 380, "num": 4, "name": "梅里亚赫", "type": "home" },
        { "x": 240, "y": 380, "num": 2, "name": "阿布迪", "type": "home" },
        { "x": 60, "y": 340, "num": 20, "name": "德里格", "type": "home" },
        { "x": 300, "y": 340, "num": 12, "name": "马鲁勒", "type": "home" },
        { "x": 130, "y": 270, "num": 17, "name": "斯希里", "type": "home" },
        { "x": 230, "y": 270, "num": 14, "name": "莱杜尼", "type": "home" },
        { "x": 90, "y": 210, "num": 10, "name": "拉菲亚", "type": "home" },
        { "x": 270, "y": 210, "num": 8, "name": "本·罗姆丹", "type": "home" },
        { "x": 180, "y": 120, "num": 19, "name": "贾齐里", "type": "home" },
        
        { "x": 180, "y": 350, "num": 1, "name": "铃木彩艳", "type": "away" },
        { "x": 140, "y": 290, "num": 4, "name": "板仓滉", "type": "away" },
        { "x": 220, "y": 290, "num": 22, "name": "富安健洋", "type": "away" },
        { "x": 70, "y": 250, "num": 5, "name": "中山雄太", "type": "away" },
        { "x": 290, "y": 250, "num": 2, "name": "菅原由势", "type": "away" },
        { "x": 140, "y": 200, "num": 6, "name": "远藤航", "type": "away" },
        { "x": 220, "y": 200, "num": 17, "name": "田中碧", "type": "away" },
        { "x": 180, "y": 140, "num": 8, "name": "南野拓实", "type": "away" },
        { "x": 80, "y": 100, "num": 7, "name": "三笘薰", "type": "away" },
        { "x": 280, "y": 100, "num": 20, "name": "久保建英", "type": "away" },
        { "x": 180, "y": 70, "num": 9, "name": "上田绮世", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "埃利亚斯·斯希里",
          "age": 31,
          "position": "防守中场",
          "stats": "本届拦截4次 | 国家队累计64场3球",
          "role": "突尼斯后防铁闸，体能极度充沛，抢断极准，擅长在中圈前沿卡死对手小范围直传球路。",
          "form": "极佳",
          "ratings": [76, 75, 84, 78, 88, 92],
          "goalDist": { "leftBox": 0, "centerBox": 2, "rightBox": 0, "outsideBox": 1, "conversion": "8.5%" },
          "defenseDefense": "中圈战术大闸，负责限制并夹击日本中场田中碧与远藤航的持球推进。",
          "defenseWarnings": "日本队前场中路传递时一定要防范其突然从弱侧的上抢拦截二点球。"
        },
        {
          "name": "蒙塔萨尔·塔尔比",
          "age": 28,
          "position": "中卫",
          "stats": "本届拦截5次 | 国家队累计38场2球",
          "role": "防线空中终结者，身材高大对抗极其强硬，防守卡位选位非常稳固，上战防空成功率极高。",
          "form": "稳定",
          "ratings": [62, 68, 70, 58, 90, 88],
          "goalDist": { "leftBox": 0, "centerBox": 2, "rightBox": 0, "outsideBox": 0, "conversion": "11.8%" },
          "defenseDefense": "大禁区中圈大闸，负责死缠上田绮世在小禁区的抢点包抄身位。",
          "defenseWarnings": "上田绮世在其缠绕防守中千万不能盲目回退，需利用久保建英的插上拉开空当。"
        },
        {
          "name": "艾萨·莱杜尼",
          "age": 29,
          "position": "中场",
          "stats": "本届1助 | 国家队累计46场2球",
          "role": "铁血拼命三郎，覆盖面极大，拼抢极其凶悍，善于大范围倒地滑铲破坏对方起脚起球点。",
          "form": "稳定",
          "ratings": [74, 75, 78, 76, 84, 86],
          "goalDist": { "leftBox": 1, "centerBox": 1, "rightBox": 0, "outsideBox": 0, "conversion": "11.0%" },
          "defenseDefense": "中右路大范围逼抢，重点协助右后卫德里格限制日本队飞翼三笘薰的外线生吃。",
          "defenseWarnings": "三笘薰在其下铲卡位时必须做好节奏变化，谨防被其用强悍身体强行顶开防线。"
        }
      ],
      "away": [
        {
          "name": "三笘薰",
          "age": 29,
          "position": "左边锋/左翼",
          "stats": "本届1球1助 | 国家队累计38场8球",
          "role": "布莱顿招牌边路核武，外脚背带球盘带极其丝滑，拥有世界级的瞬间带球启动生吃防守能力。",
          "form": "极佳",
          "ratings": [92, 85, 82, 94, 35, 74],
          "goalDist": { "leftBox": 1, "centerBox": 4, "rightBox": 1, "outsideBox": 2, "conversion": "16.2%" },
          "defenseDefense": "前场高位扫荡拦截，破坏突尼斯反击的右路出球发点。",
          "defenseWarnings": "突尼斯右边卫德里格千万不可随意盲目上抢起脚，在其反跑突防时必须留出防守身位。"
        },
        {
          "name": "久保建英",
          "age": 25,
          "position": "右边锋/前腰",
          "stats": "本届1球 | 国家队累计36场4球",
          "role": "皇家社会核心，脚下频率飞快，精妙的内切左脚弧线兜射与肋部制导，是日本前场的灵性大脑。",
          "form": "极佳",
          "ratings": [88, 82, 88, 92, 40, 68],
          "goalDist": { "leftBox": 0, "centerBox": 2, "rightBox": 1, "outsideBox": 1, "conversion": "13.8%" },
          "defenseDefense": "右路高位阻断逼抢，大范围横向跑动切断突尼斯左路拉菲亚的出球点。",
          "defenseWarnings": "突尼斯左防区防守时必须严防其和南野拓实的交叉撞墙跑位，人墙防线不能被拉乱。"
        },
        {
          "name": "远藤航",
          "age": 33,
          "position": "防守中场/队长",
          "stats": "本届拦截6次 | 国家队累计68场3球",
          "role": "蓝武士队长与利物浦后腰，拥有欧洲顶级的对抗缠绕和二点球抢断能力，攻防转换的灵魂发点。",
          "form": "极佳",
          "ratings": [68, 70, 84, 76, 92, 95],
          "goalDist": { "leftBox": 0, "centerBox": 2, "rightBox": 0, "outsideBox": 1, "conversion": "9.5%" },
          "defenseDefense": "防线前中路指挥官，重点负责拦截突尼斯前场唯一反击点贾齐里的停球接应路线。",
          "defenseWarnings": "突尼斯中场在反击时必须快速将球过渡到边路，决不能在中圈与其强硬纠缠。"
        }
      ]
    }
  }
};

// Add to the main data object
Object.assign(data, newMatches);

// Add goals rankings into data.json
// Let's check how players goals rankings are structured inside data.json
// Usually there might be a top players goal list, or they are computed dynamically.
// In index.html, we saw:
// <tbody id="players-goals-tbody">
//   <!-- 动态由 JS 渲染并填充 -->
// </tbody>
// This means app.js parses the squad players from all matches, ranks them, and renders them.
// Let's make sure the squadPlayers fields are correctly added.

// Write it back to data.json beautifully formatted
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log('data.json upgraded successfully with 4 new matches (ger-civ, ned-swe, ecu-cur, tun-jpn)!');
