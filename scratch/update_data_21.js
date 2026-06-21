const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.json');
const rawData = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(rawData);

// New matches data for June 21, 2026
const newMatches = {
  "esp-sau": {
    "themeClass": "esp-sau-theme",
    "group": "H 组第二轮焦点战",
    "timeLoc": "北京时间 6月21日 23:59 | 亚特兰大体育场",
    "teams": {
      "home": {
        "name": "西班牙",
        "flag": "esp",
        "goals": 2.5,
        "shots": 16.8,
        "sot": 7.8,
        "sOff": 9.0,
        "corners": 6.8,
        "history": {
          "record1Year": "8胜 1平 1.5负 (胜率 80%)",
          "possession": "64.8%",
          "passAccuracy": "91.2%",
          "cleanSheets": "5次",
          "shotConversion": "14.8%",
          "conversionExplanation": "斗牛士军团主打极致的肋部穿插与小范围传切。威廉姆斯在左、亚马尔在右的“双飞翼”传中，加上罗德里在中场掌控全局的洗球发牌，构成了西班牙极强的推进主线。",
          "recentMatches": [
            { "opponent": "佛得角", "score": "0 - 0", "type": "世界杯", "date": "2026-06" },
            { "opponent": "北爱尔兰", "score": "5 - 1", "type": "国际友谊赛", "date": "2024-06" },
            { "opponent": "安道尔", "score": "5 - 0", "type": "国际友谊赛", "date": "2024-06" },
            { "opponent": "巴西", "score": "3 - 3", "type": "国际友谊赛", "date": "2024-03" }
          ]
        }
      },
      "away": {
        "name": "沙特",
        "flag": "sau",
        "goals": 1.0,
        "shots": 8.2,
        "sot": 3.2,
        "sOff": 5.0,
        "corners": 3.5,
        "history": {
          "record1Year": "5胜 2平 3负 (胜率 50%)",
          "possession": "48.2%",
          "passAccuracy": "78.5%",
          "cleanSheets": "3次",
          "shotConversion": "12.2%",
          "conversionExplanation": "沙特队在防守中极具缠斗硬度，擅长利用高位造越位与凶悍的高位逼抢延缓强队节奏。反击时主要连线达瓦萨里的大步突围，定位球极其顽强。",
          "recentMatches": [
            { "opponent": "乌拉圭", "score": "1 - 3", "type": "世界杯", "date": "2026-06" },
            { "opponent": "约旦", "score": "1 - 2", "type": "世预赛", "date": "2024-06" },
            { "opponent": "巴基斯坦", "score": "3 - 0", "type": "世预赛", "date": "2024-06" },
            { "opponent": "塔吉克斯坦", "score": "1 - 1", "type": "世预赛", "date": "2024-03" }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "尼科·威廉姆斯",
        "jersey": "17",
        "club": "毕尔巴鄂竞技",
        "role": "左翼锋/队长",
        "color": "#3b82f6",
        "details": "西班牙左路过人狂魔，拥有无与伦比的边路起步爆发力与左路走廊沉底倒三角传中的突击能力。"
      },
      "away": {
        "name": "萨利姆·阿尔-达瓦萨里",
        "jersey": "10",
        "club": "利雅得新月",
        "role": "左边锋/队长",
        "color": "#10b981",
        "details": "沙特传奇核心，脚下技术极其纯熟，曾在世界杯破门阿根廷，是沙特唯一反击爆破点。"
      },
      "description": "西班牙王牌快马威廉姆斯的边路强突，与沙特队长达瓦萨里的个人突围连线。威廉姆斯的内切能否早早撕裂沙特的五防线锁局，而达瓦萨里能否利用西班牙高位空档送出致命反击，是本场看点。"
    },
    "marketPrediction": {
      "polymarketOdds": { "homeWin": 82, "draw": 12, "awayWin": 6 },
      "marketSentiment": "西班牙首战遭闷平后，大批资金在 Polymarket 流入“西班牙净胜2球以上”方向，隐含胜率高达 82%，市场情绪普遍预期斗牛士本场必将大举反弹以洗刷首战闷平阴霾。"
    },
    "verdict": {
      "score": "2 - 0",
      "text": "西班牙首战被冷门逼平后本役退无可退，罗德里将在中场提供极致的控制力，威廉姆斯和亚马尔在两翼反复撕扯沙特的防线。沙特防线拦截虽有硬度但难以防范西班牙肋部小范围穿插，加之 Polymarket 市场隐含胜率高达 82%，市场极度看好，预计西班牙 2-0 完胜。"
    },
    "injuries": {
      "home": [
        { "name": "拉波尔特", "desc": "肌肉有些发紧，此役带伤坚持首发，转身回防稍受限制", "status": "warning" }
      ],
      "away": [
        { "name": "阿尔-马尔基", "desc": "膝伤基本康复此役重回替补席，为沙特中场提供硬度后备", "status": "recovered" }
      ]
    },
    "tactics": {
      "homeForm": "4-3-3",
      "awayForm": "5-4-1",
      "explanation": "西班牙采用 4-3-3 进行绝对传控压制，罗德里拖后掌控中圈，法比安横向穿插，威廉姆斯与亚马尔在两侧提供极致拉边突防，莫拉塔在门前充当桥头堡。沙特队祭出 5-4-1 极密铁桶防线，五后卫大禁区深度缩紧，四中场合围罗德里，彻底让出控球，通过大脚直连前场达瓦萨里和布赖坎进行高速反击。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "西蒙", "type": "home" },
        { "x": 140, "y": 380, "num": 14, "name": "拉波尔特", "type": "home" },
        { "x": 220, "y": 380, "num": 3, "name": "勒诺尔芒", "type": "home" },
        { "x": 70, "y": 360, "num": 24, "name": "库库雷利亚", "type": "home" },
        { "x": 290, "y": 360, "num": 2, "name": "卡瓦哈尔", "type": "home" },
        { "x": 180, "y": 280, "num": 16, "name": "罗德里", "type": "home" },
        { "x": 120, "y": 240, "num": 8, "name": "法比安", "type": "home" },
        { "x": 240, "y": 240, "num": 20, "name": "佩德里", "type": "home" },
        { "x": 70, "y": 140, "num": 17, "name": "威廉姆斯", "type": "home" },
        { "x": 290, "y": 140, "num": 19, "name": "亚马尔", "type": "home" },
        { "x": 180, "y": 90, "num": 7, "name": "莫拉塔", "type": "home" },
        
        { "x": 180, "y": 350, "num": 21, "name": "奥维斯", "type": "away" },
        { "x": 180, "y": 295, "num": 4, "name": "奥贾米", "type": "away" },
        { "x": 120, "y": 290, "num": 5, "name": "布莱希", "type": "away" },
        { "x": 240, "y": 290, "num": 13, "name": "沙赫拉尼", "type": "away" },
        { "x": 60, "y": 240, "num": 12, "name": "阿卜杜勒", "type": "away" },
        { "x": 300, "y": 240, "num": 8, "name": "卡诺", "type": "away" },
        { "x": 130, "y": 190, "num": 6, "name": "马尔基", "type": "away" },
        { "x": 230, "y": 190, "num": 16, "name": "纳吉", "type": "away" },
        { "x": 90, "y": 130, "num": 10, "name": "达瓦萨里", "type": "away" },
        { "x": 270, "y": 130, "num": 11, "name": "谢赫里", "type": "away" },
        { "x": 180, "y": 80, "num": 9, "name": "布赖坎", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "尼科·威廉姆斯",
          "age": 23,
          "position": "左翼锋",
          "stats": "本届1助 | 国家队累计24场5球",
          "role": "左路走廊盘带爆破飞翼，身体素质极佳，大范围持球内切与突破撕拉防线效率天下第一。",
          "form": "极佳",
          "ratings": [94, 82, 80, 88, 30, 74],
          "goalDist": { "leftBox": 2, "centerBox": 2, "rightBox": 0, "outsideBox": 1, "conversion": "15.0%" },
          "defenseDefense": "前场的高速逼抢与滑铲拦截，延缓沙特反击起球。",
          "defenseWarnings": "沙特右边卫阿卜杜勒哈米德退防必须预留缓冲宽度，千万不能失位吃晃。"
        },
        {
          "name": "拉明·亚马尔",
          "age": 18,
          "position": "右翼锋",
          "stats": "本届1助 | 国家队累计20场4球",
          "role": "天才金童，右路无解内切盘带与金左脚兜射，视野大局观极佳，是西班牙进攻端核心爆点。",
          "form": "极佳",
          "ratings": [92, 85, 88, 91, 38, 70],
          "goalDist": { "leftBox": 0, "centerBox": 1, "rightBox": 2, "outsideBox": 1, "conversion": "16.5%" },
          "defenseDefense": "右路就地抢截，切断沙特中场将球大脚转移到达瓦萨里一侧的通路。",
          "defenseWarnings": "沙特左中卫布莱希在其拿球内切时必须快速包夹，严防其起左脚大范围斜塞。"
        },
        {
          "name": "罗德里",
          "age": 29,
          "position": "防守中场",
          "stats": "本届拦截4次 | 国家队累计56场4球",
          "role": "金球先生，世界第一后腰，中圈攻防洗球、断球覆盖率与大局观极强，拥有极其致命的二点重炮远射。",
          "form": "极佳",
          "ratings": [72, 78, 95, 86, 92, 96],
          "goalDist": { "leftBox": 0, "centerBox": 1, "rightBox": 0, "outsideBox": 3, "conversion": "9.8%" },
          "defenseDefense": "中圈拖后大闸，拦截沙特反击大脚的第一落脚点。",
          "defenseWarnings": "沙特队在解围时绝不可在中路出球，罗德里在大禁区前沿的抢点远射威胁极大。"
        }
      ],
      "away": [
        {
          "name": "萨利姆·阿尔-达瓦萨里",
          "age": 34,
          "position": "左边锋",
          "stats": "本届1球 | 国家队累计84场22球",
          "role": "沙特球王，技术细腻，拥有极其恐怖的单人肋部爆破与极速折线摆脱射门硬实力。",
          "form": "稳定",
          "ratings": [82, 80, 84, 82, 45, 80],
          "goalDist": { "leftBox": 3, "centerBox": 12, "rightBox": 3, "outsideBox": 4, "conversion": "13.2%" },
          "defenseDefense": "大范围回撤大禁区左侧协助布莱希盯防拉明·亚马尔的内切。",
          "defenseWarnings": "西班牙右边卫卡瓦哈尔切忌盲目套边插上丢掉防守身位，谨防被其反手打身后。"
        },
        {
          "name": "穆罕默德·卡诺",
          "age": 31,
          "position": "防守中场",
          "stats": "本届拦截3次 | 国家队累计52场4球",
          "role": "沙特中场绞杀高塔，身高1米92，对抗强悍，擅长在大禁区前沿倒地封堵拦截对方传切路经。",
          "form": "稳定",
          "ratings": [74, 75, 78, 72, 84, 86],
          "goalDist": { "leftBox": 0, "centerBox": 3, "rightBox": 0, "outsideBox": 1, "conversion": "11.0%" },
          "defenseDefense": "中圈战术大闸，疯狂拼抢骚扰罗德里和法比安的中路短传推进路线。",
          "defenseWarnings": "西班牙中前场传递必须加快球的流动，避免与其在禁区前沿进行强硬的身体纠缠。"
        }
      ]
    }
  },
  "bel-irn": {
    "themeClass": "bel-irn-theme",
    "group": "G 组第二轮焦点战",
    "timeLoc": "北京时间 6月21日 21:00 | 洛杉矶体育场",
    "teams": {
      "home": {
        "name": "比利时",
        "flag": "bel",
        "goals": 2.1,
        "shots": 14.8,
        "sot": 6.5,
        "sOff": 8.3,
        "corners": 6.2,
        "history": {
          "record1Year": "7胜 1平 2负 (胜率 70%)",
          "possession": "58.6%",
          "passAccuracy": "86.5%",
          "cleanSheets": "4次",
          "shotConversion": "14.2%",
          "conversionExplanation": "红魔比利时主打前场高节奏穿插，中脑德布劳内拥有历史级的发牌和直塞视野，杜库在左路的超速突防则是撕开密集防线的最犀利尖刀。",
          "recentMatches": [
            { "opponent": "埃及", "score": "2 - 1", "type": "世界杯", "date": "2026-06" },
            { "opponent": "卢森堡", "score": "3 - 0", "type": "国际友谊赛", "date": "2024-06" },
            { "opponent": "黑山", "score": "2 - 0", "type": "国际友谊赛", "date": "2024-06" },
            { "opponent": "英格兰", "score": "2 - 2", "type": "国际友谊赛", "date": "2024-03" }
          ]
        }
      },
      "away": {
        "name": "伊朗",
        "flag": "irn",
        "goals": 1.4,
        "shots": 10.5,
        "sot": 4.2,
        "sOff": 6.3,
        "corners": 4.5,
        "history": {
          "record1Year": "6胜 2平 2负 (胜率 60%)",
          "possession": "46.5%",
          "passAccuracy": "78.4%",
          "cleanSheets": "4次",
          "shotConversion": "13.3%",
          "conversionExplanation": "波斯铁骑伊朗球风极其硬朗剽悍，中后防拼抢极其积极，锋线塔雷米与阿兹蒙的“双塔连线”在反击中拥有亚洲顶级的终结效率与对抗优势。",
          "recentMatches": [
            { "opponent": "新西兰", "score": "1 - 1", "type": "世界杯", "date": "2026-06" },
            { "opponent": "乌兹别克斯坦", "score": "0 - 0", "type": "世预赛", "date": "2024-06" },
            { "opponent": "香港", "score": "4 - 2", "type": "世预赛", "date": "2024-06" },
            { "opponent": "土库曼斯坦", "score": "1 - 0", "type": "世预赛", "date": "2024-03" }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "凯文·德布劳内",
        "jersey": "7",
        "club": "曼城",
        "role": "前腰/中场中脑",
        "color": "#3b82f6",
        "details": "世界第一中脑，拥有无解的手术刀传中与贴地直塞视野，外围重炮兜射角度极其刁钻。"
      },
      "away": {
        "name": "迈赫迪·塔雷米",
        "jersey": "9",
        "club": "国际米兰",
        "role": "中锋/锋线核心",
        "color": "#10b981",
        "details": "伊朗神锋，拥有极强的身体对抗选位与门前乱战抢点能力，擅长回撤拿球大范围策应。"
      },
      "description": "比利时中场大师德布劳内的致命长传，与伊朗神锋塔雷米的极速对抗卸球射门。德布劳内的挑塞能否撕穿伊朗的硬朗中卫线，而塔雷米能否在比利时老将费尔通亨的防区内强硬卸球破网，是此役命脉。"
    },
    "marketPrediction": {
      "polymarketOdds": { "homeWin": 70, "draw": 20, "awayWin": 10 },
      "marketSentiment": "虽然伊朗防线球风剽悍，但 Polymarket 资金对德布劳内掌控的比利时展现出 70% 的绝对倾斜，平局赔率在 20% 水平，市场普遍防范比利时一球小胜。"
    },
    "verdict": {
      "score": "2 - 1",
      "text": "比利时在中场的掌控力处于绝对优势，德布劳内的直传球能给卢卡库提供绝佳的做球或打门空间，杜库的单点爆破也会给伊朗右防区施加极大压力。虽然伊朗能依靠塔雷米门前抢点扳回一球，但比利时整体火力更足，预计比利时 2-1 险胜。"
    },
    "injuries": {
      "home": [
        { "name": "费尔通亨", "desc": "肌肉有些疲劳轻伤在身，但首发席位预计依然稳固", "status": "warning" }
      ],
      "away": [
        { "name": "普拉利甘吉", "desc": "膝伤已经完全康复重回首发，大大提升了伊朗防守硬度", "status": "recovered" }
      ]
    },
    "tactics": {
      "homeForm": "4-2-3-1",
      "awayForm": "4-4-2",
      "explanation": "比利时采用 4-2-3-1，奥纳纳和蒂勒曼斯双后腰扫荡控制，德布劳内居中发牌，两翼杜库与卢克巴基奥高速冲刺，卢卡库在前场作强力中锋支点。伊朗则排出 4-4-2 防守阵型，中场深蹲落位，断球后迅速长传，阿兹蒙侧翼接应拿球，立刻将球横挑寻找中路包抄的塔雷米直接打门。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "卡斯特尔斯", "type": "home" },
        { "x": 140, "y": 380, "num": 5, "name": "费尔通亨", "type": "home" },
        { "x": 220, "y": 380, "num": 4, "name": "法斯", "type": "home" },
        { "x": 70, "y": 350, "num": 3, "name": "泰亚特", "type": "home" },
        { "x": 290, "y": 350, "num": 21, "name": "卡斯塔涅", "type": "home" },
        { "x": 130, "y": 280, "num": 24, "name": "奥纳纳", "type": "home" },
        { "x": 230, "y": 280, "num": 8, "name": "蒂勒曼斯", "type": "home" },
        { "x": 180, "y": 180, "num": 7, "name": "德布劳内", "type": "home" },
        { "x": 80, "y": 140, "num": 10, "name": "杜库", "type": "home" },
        { "x": 280, "y": 140, "num": 11, "name": "卢克巴基奥", "type": "home" },
        { "x": 180, "y": 90, "num": 9, "name": "卢卡库", "type": "home" },
        
        { "x": 180, "y": 350, "num": 1, "name": "贝兰万德", "type": "away" },
        { "x": 140, "y": 290, "num": 8, "name": "普拉利甘吉", "type": "away" },
        { "x": 220, "y": 290, "num": 13, "name": "卡纳尼", "type": "away" },
        { "x": 80, "y": 240, "num": 5, "name": "穆哈马迪", "type": "away" },
        { "x": 280, "y": 240, "num": 23, "name": "雷扎伊安", "type": "away" },
        { "x": 120, "y": 190, "num": 6, "name": "埃扎托拉希", "type": "away" },
        { "x": 240, "y": 190, "num": 18, "name": "卡里米", "type": "away" },
        { "x": 80, "y": 130, "num": 7, "name": "贾汉巴赫什", "type": "away" },
        { "x": 280, "y": 130, "num": 17, "name": "戈利扎德", "type": "away" },
        { "x": 150, "y": 80, "num": 20, "name": "阿兹蒙", "type": "away" },
        { "x": 210, "y": 80, "num": 9, "name": "塔雷米", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "凯文·德布劳内",
          "age": 34,
          "position": "中场/前腰",
          "stats": "本届1球2助 | 国家队累计104场28球",
          "role": "比利时绝对战术领袖与大脑，传球制导精度达到历史级，擅长在高速推进中送出穿透性贴地传中。",
          "form": "极佳",
          "ratings": [75, 78, 98, 92, 70, 85],
          "goalDist": { "leftBox": 1, "centerBox": 5, "rightBox": 2, "outsideBox": 20, "conversion": "12.2%" },
          "defenseDefense": "中圈前沿的持球接应者，负责大范围拦截二点球并快速斜传直塞。",
          "defenseWarnings": "伊朗中场防线必须贴死阻绝其弧顶大范围起脚，其直接任意球和冷射极有威胁。"
        },
        {
          "name": "杰里米·杜库",
          "age": 24,
          "position": "左边锋",
          "stats": "本届2助 | 国家队累计20场2球",
          "role": "比利时头号过人狂魔，脚底频率奇快，在左翼底线的强行抹过和加速变向极具爆发力。",
          "form": "极佳",
          "ratings": [95, 80, 78, 92, 28, 70],
          "goalDist": { "leftBox": 1, "centerBox": 1, "rightBox": 0, "outsideBox": 0, "conversion": "11.5%" },
          "defenseDefense": "回撤中后场阻截伊朗右翼卫雷扎伊安的前插，就地抢断发起突击。",
          "defenseWarnings": "伊朗右后卫雷扎伊安必须时刻降低防守重心，决不能盲目吃晃被其直接超速抹过防线。"
        }
      ],
      "away": [
        {
          "name": "迈赫迪·塔雷米",
          "age": 33,
          "position": "中锋",
          "stats": "本届1球1助 | 国家队累计78场42球",
          "role": "波斯王牌，国米主力前锋，身体极为强壮，无球反跑和倚人射术顶级，是伊朗反击的锋线大腿。",
          "form": "极佳",
          "ratings": [78, 86, 75, 78, 48, 88],
          "goalDist": { "leftBox": 2, "centerBox": 32, "rightBox": 6, "outsideBox": 2, "conversion": "18.5%" },
          "defenseDefense": "前场的高位扫荡，纠缠比利时中卫法斯，延缓其向前出球。",
          "defenseWarnings": "比利时中卫费尔通亨在禁区防空时必须寸步不离进行卡位，不可给其轻松争顶空间。"
        }
      ]
    }
  },
  "uru-cpv": {
    "themeClass": "uru-cpv-theme",
    "group": "H 组第二轮焦点战",
    "timeLoc": "北京时间 6月22日 06:00 | 迈阿密体育场",
    "teams": {
      "home": {
        "name": "乌拉圭",
        "flag": "uru",
        "goals": 2.2,
        "shots": 15.2,
        "sot": 6.8,
        "sOff": 8.4,
        "corners": 6.5,
        "history": {
          "record1Year": "8胜 2平 1负 (胜率 72.7%)",
          "possession": "60.4%",
          "passAccuracy": "86.2%",
          "cleanSheets": "5次",
          "shotConversion": "14.8%",
          "conversionExplanation": "乌拉圭在贝尔萨的带领下疯狂主打 Gegenpressing，在前场实施海啸般的高压逼抢。巴尔韦德在中场提供无限体能奔跑与重炮轰门，前锋努涅斯则通过凶猛无球穿插撕扯防线。",
          "recentMatches": [
            { "opponent": "沙特", "score": "3 - 1", "type": "世界杯", "date": "2026-06" },
            { "opponent": "墨西哥", "score": "4 - 0", "type": "国际友谊赛", "date": "2024-06" },
            { "opponent": "哥斯达黎加", "score": "0 - 0", "type": "国际友谊赛", "date": "2024-05" },
            { "opponent": "巴斯克", "score": "1 - 1", "type": "国际友谊赛", "date": "2024-03" }
          ]
        }
      },
      "away": {
        "name": "佛得角",
        "flag": "cpv",
        "goals": 1.1,
        "shots": 8.8,
        "sot": 3.0,
        "sOff": 5.8,
        "corners": 3.5,
        "history": {
          "record1Year": "4胜 4平 2负 (胜率 40%)",
          "possession": "42.5%",
          "passAccuracy": "73.5%",
          "cleanSheets": "3次",
          "shotConversion": "11.5%",
          "conversionExplanation": "佛得角大巴防守极其顽强坚韧，上役零封西班牙震惊世界。防线中路协防能力突出，依靠中场罗德里格斯的大范围跑动与门德斯的突然边路快插发起偷袭。",
          "recentMatches": [
            { "opponent": "西班牙", "score": "0 - 0", "type": "世界杯", "date": "2026-06" },
            { "opponent": "利比亚", "score": "1 - 0", "type": "世预赛", "date": "2024-06" },
            { "opponent": "喀麦隆", "score": "1 - 4", "type": "世预赛", "date": "2024-06" },
            { "opponent": "赤道几内亚", "score": "1 - 0", "type": "友谊赛", "date": "2024-03" }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "费德里科·巴尔韦德",
        "jersey": "15",
        "club": "皇家马德里",
        "role": "防守中场/队长",
        "color": "#3b82f6",
        "details": "皇马“小鸟”，拥有无限循环的充沛体能与大范围覆盖扫荡硬度，外围三十米开外的暴力电梯球远射是核心武器。"
      },
      "away": {
        "name": "瑞安·门德斯",
        "jersey": "20",
        "club": "卡拉格拉克",
        "role": "边锋/队长",
        "color": "#fbbf24",
        "details": "佛得角锋线老将，经验丰富，带球突然摆脱变向速度快，是佛得角防守反击时最敏锐的突击出球点。"
      },
      "description": "乌拉圭队长巴尔韦德的强力中路爆破扫荡，与佛得角老将门德斯的边路闪击突围。巴尔韦德的横向滑铲与疯狂反抢能否限制佛得角的反击发起，而门德斯能否利用反击空档直连小禁区，是此役焦点。"
    },
    "marketPrediction": {
      "polymarketOdds": { "homeWin": 78, "draw": 16, "awayWin": 6 },
      "marketSentiment": "由于佛得角首场战平西班牙，Polymarket 资金对其低位大巴给予了一定尊重（平局赔率 16%）。但对乌拉圭的压迫打法依然开出了 78% 的绝对高胜率，本场看好乌拉圭大胜。"
    },
    "verdict": {
      "score": "2 - 0",
      "text": "佛得角防守大巴极其具有弹性，但乌拉圭的“贝尔萨流”前场压迫不仅强度远超西班牙，其中场的巴尔韦德与本坦库尔更能提供强力的中路强插二次进攻。预计佛得角很难长达九十分钟顶住重击，预测乌拉圭 2-0 取胜。"
    },
    "injuries": {
      "home": [
        { "name": "阿劳霍", "desc": "肌肉有些发紧上役被提前换下，此役宣告完全康复将出任主力中卫", "status": "recovered" }
      ],
      "away": []
    },
    "tactics": {
      "homeForm": "4-3-3",
      "awayForm": "5-4-1",
      "explanation": "乌拉圭采用 4-3-3 实施极速 Gegenpressing，巴尔韦德在中场中路提供大面积扫荡和后推，两翼佩利斯特里与阿劳霍以极快速度进行套边突击，努涅斯在禁区中路埋伏争顶。佛得角则排出 5-4-1 极密铁桶阵，五名防守队员紧逼禁区前沿，彻底放弃控球，寄希望于罗德里格斯在中圈将球铲出直塞门德斯进行反击。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "罗切特", "type": "home" },
        { "x": 140, "y": 380, "num": 4, "name": "阿劳霍", "type": "home" },
        { "x": 220, "y": 380, "num": 2, "name": "吉梅内斯", "type": "home" },
        { "x": 70, "y": 350, "num": 16, "name": "奥利维拉", "type": "home" },
        { "x": 290, "y": 350, "num": 8, "name": "南德斯", "type": "home" },
        { "x": 180, "y": 280, "num": 15, "name": "巴尔韦德", "type": "home" },
        { "x": 120, "y": 240, "num": 6, "name": "本坦库尔", "type": "home" },
        { "x": 240, "y": 240, "num": 10, "name": "德拉斯卡埃塔", "type": "home" },
        { "x": 70, "y": 140, "num": 11, "name": "佩利斯特里", "type": "home" },
        { "x": 290, "y": 140, "num": 7, "name": "阿劳霍", "type": "home" },
        { "x": 180, "y": 90, "num": 19, "name": "努涅斯", "type": "home" },
        
        { "x": 180, "y": 350, "num": 1, "name": "沃齐尼亚", "type": "away" },
        { "x": 180, "y": 295, "num": 3, "name": "科斯塔", "type": "away" },
        { "x": 120, "y": 290, "num": 4, "name": "洛佩斯", "type": "away" },
        { "x": 240, "y": 290, "num": 2, "name": "塔瓦雷斯", "type": "away" },
        { "x": 60, "y": 240, "num": 23, "name": "塞梅多", "type": "away" },
        { "x": 300, "y": 240, "num": 18, "name": "罗德里格斯", "type": "away" },
        { "x": 130, "y": 190, "num": 6, "name": "安德拉德", "type": "away" },
        { "x": 230, "y": 190, "num": 10, "name": "蒙泰罗", "type": "away" },
        { "x": 90, "y": 130, "num": 20, "name": "门德斯", "type": "away" },
        { "x": 270, "y": 130, "num": 7, "name": "卡布拉尔", "type": "away" },
        { "x": 180, "y": 80, "num": 11, "name": "贝贝", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "费德里科·巴尔韦德",
          "age": 27,
          "position": "中场/队长",
          "stats": "本届1球1助 | 国家队累计68场8球",
          "role": "乌拉圭领袖，皇马超级飞翼，体能无限，拥有一手恐怖的外围发炮与大范围高空球抢断防线拦截能力。",
          "form": "极佳",
          "ratings": [88, 86, 90, 85, 88, 92],
          "goalDist": { "leftBox": 1, "centerBox": 2, "rightBox": 1, "outsideBox": 4, "conversion": "11.2%" },
          "defenseDefense": "中圈战术扫荡，疯狂奔跑拦截，切断佛得角中路门德斯的反击分边路线。",
          "defenseWarnings": "佛得角中场在出球时必须防范其高速贴身上抢，不可给其轻松起脚传中的空间。"
        },
        {
          "name": "达尔文·努涅斯",
          "age": 26,
          "position": "中锋",
          "stats": "本届3球 | 国家队累计28场12球",
          "role": "利物浦中锋，极强爆发力与无球反插冲击力，拥有极其蛮横的倚人身体对抗与头球炸门威胁。",
          "form": "极佳",
          "ratings": [86, 88, 70, 78, 40, 90],
          "goalDist": { "leftBox": 1, "centerBox": 10, "rightBox": 1, "outsideBox": 0, "conversion": "16.8%" },
          "defenseDefense": "在前场对佛得角三中卫出球进行毁灭性死啃逼抢，延缓其解围球的发动。",
          "defenseWarnings": "佛得角防线必须在角球中对其形成三人夹防，千万不能让其起跳轻松争顶轰门。"
        }
      ],
      "away": [
        {
          "name": "瑞安·门德斯",
          "age": 36,
          "position": "右边锋",
          "stats": "本届1球 | 国家队累计68场16球",
          "role": "佛得角传奇，带球盘带极其诡异多变，定位球弧线精准，是佛得角唯一反击爆破点。",
          "form": "稳定",
          "ratings": [78, 80, 82, 80, 42, 75],
          "goalDist": { "leftBox": 1, "centerBox": 10, "rightBox": 3, "outsideBox": 2, "conversion": "12.5%" },
          "defenseDefense": "大范围回撤参与对乌拉圭左翼佩利斯特里的协防限制。",
          "defenseWarnings": "乌拉圭左边卫奥利维拉在进攻套边前插时必须谨防其沿走廊的高速反插单刀。"
        }
      ]
    }
  },
  "nzl-egy": {
    "themeClass": "nzl-egy-theme",
    "group": "G 组第二轮焦点战",
    "timeLoc": "北京时间 6月22日 09:00 | 温哥华体育场",
    "teams": {
      "home": {
        "name": "新西兰",
        "flag": "nzl",
        "goals": 1.2,
        "shots": 9.5,
        "sot": 3.5,
        "sOff": 6.0,
        "corners": 4.2,
        "history": {
          "record1Year": "5胜 2平 3负 (胜率 50%)",
          "possession": "45.2%",
          "passAccuracy": "78.4%",
          "cleanSheets": "4次",
          "shotConversion": "12.5%",
          "conversionExplanation": "全黑军团新西兰球风极其强硬悍勇。前场极度依赖克里斯·伍德的支点轰炸，两翼起球频繁，在定位球防守和长传攻门中有极强的身体对抗优势。",
          "recentMatches": [
            { "opponent": "伊朗", "score": "1 - 1", "type": "世界杯", "date": "2026-06" },
            { "opponent": "几内亚", "score": "1 - 0", "type": "国际友谊赛", "date": "2024-06" },
            { "opponent": "突尼斯", "score": "0 - 0", "type": "世预赛", "date": "2024-03" },
            { "opponent": "埃及", "score": "0 - 1", "type": "世预赛", "date": "2024-03" }
          ]
        }
      },
      "away": {
        "name": "埃及",
        "flag": "egy",
        "goals": 1.9,
        "shots": 13.5,
        "sot": 6.0,
        "sOff": 7.5,
        "corners": 5.5,
        "history": {
          "record1Year": "7胜 1平 2负 (胜率 70%)",
          "possession": "58.4%",
          "passAccuracy": "86.5%",
          "cleanSheets": "4次",
          "shotConversion": "14.0%",
          "conversionExplanation": "法老军团埃及中前场战术素养极强。右路“法老”萨拉赫是无解的爆破点，中前卫埃尔内尼提供梳理，反击效率在萨拉赫和马尔穆什的冲击下极其凌厉。",
          "recentMatches": [
            { "opponent": "比利时", "score": "1 - 2", "type": "世界杯", "date": "2026-06" },
            { "opponent": "几内亚比绍", "score": "1 - 1", "type": "世预赛", "date": "2024-06" },
            { "opponent": "布基纳法索", "score": "2 - 1", "type": "世预赛", "date": "2024-06" },
            { "opponent": "克罗地亚", "score": "2 - 4", "type": "世预赛", "date": "2024-03" }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "克里斯·伍德",
        "jersey": "9",
        "club": "诺丁汉森林",
        "role": "中锋/锋线高塔",
        "color": "#fbbf24",
        "details": "新西兰传奇射手，身高1米91，大禁区内制空权极强，抢点头槌与定位球压制力高居英超前列。"
      },
      "away": {
        "name": "穆罕默德·萨拉赫",
        "jersey": "10",
        "club": "利物浦",
        "role": "右翼锋/队长",
        "color": "#ef4444",
        "details": "埃及法老，世界最强右路攻击手之一，标志性的右路极速超车带球内切和金左脚兜射死角天下无双。"
      },
      "description": "新西兰空霸中锋克里斯·伍德的禁区高空轰炸，与埃及法老萨拉赫的右路极致内切兜射。伍德的头球回做能否砸碎埃及防区，而萨拉赫的极速内切能否生吃新西兰略显笨重的后卫线，是此役关键所在。"
    },
    "marketPrediction": {
      "polymarketOdds": { "homeWin": 18, "draw": 27, "awayWin": 55 },
      "marketSentiment": "Polymarket 预测概率中，埃及队以 55% 的绝对优势被看好，新西兰隐含胜率仅为 18%。尽管新西兰空海优势明显，但市场更防范萨拉赫的单点爆破效率。"
    },
    "verdict": {
      "score": "1 - 2",
      "text": "新西兰高空压制力在定位球中极具威慑，且伍德的高大身形能频繁压制埃及中卫，但埃及拥有右翼的萨拉赫这一无解爆破点。新西兰的四后卫线转身较慢，很难在萨拉赫与马尔穆什的高速冲击下不失位。结合 Polymarket 实时隐含胜率 55%，预测新西兰 1-2 饮恨。"
    },
    "injuries": {
      "home": [],
      "away": [
        { "name": "埃尔内尼", "desc": "中场拼抢大腿肌肉发紧，此役带伤坚持首发，扫荡范围略有收紧", "status": "warning" }
      ]
    },
    "tactics": {
      "homeForm": "4-4-2",
      "awayForm": "4-3-3",
      "explanation": "新西兰采用稳健的 4-4-2 防御落位，大面积对埃及中后腰前压干扰，边路大范围起球至禁区，全力寻找前锋伍德进行头槌砸门。埃及队则排出 4-3-3 阵型，埃尔内尼在后腰位置洗球分边，萨拉赫在右翼疯狂拉拉扯内切，马尔穆什在左侧呼应插上，直接威胁新西兰禁区软肋。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "克罗科姆", "type": "home" },
        { "x": 140, "y": 380, "num": 4, "name": "托马斯", "type": "home" },
        { "x": 220, "y": 380, "num": 3, "name": "宾顿", "type": "home" },
        { "x": 70, "y": 350, "num": 13, "name": "卡卡切", "type": "home" },
        { "x": 290, "y": 350, "num": 2, "name": "佩恩", "type": "home" },
        { "x": 120, "y": 280, "num": 6, "name": "贝尔", "type": "home" },
        { "x": 240, "y": 280, "num": 8, "name": "加伯特", "type": "home" },
        { "x": 80, "y": 190, "num": 10, "name": "辛格", "type": "home" },
        { "x": 280, "y": 190, "num": 11, "name": "麦考瓦特", "type": "home" },
        { "x": 150, "y": 90, "num": 7, "name": "巴巴罗塞斯", "type": "home" },
        { "x": 210, "y": 90, "num": 9, "name": "克里斯-伍德", "type": "home" },
        
        { "x": 180, "y": 350, "num": 1, "name": "希纳维", "type": "away" },
        { "x": 140, "y": 290, "num": 6, "name": "赫加齐", "type": "away" },
        { "x": 220, "y": 290, "num": 24, "name": "阿卜杜勒", "type": "away" },
        { "x": 80, "y": 240, "num": 21, "name": "萨米", "type": "away" },
        { "x": 280, "y": 240, "num": 3, "name": "霍尼", "type": "away" },
        { "x": 180, "y": 190, "num": 17, "name": "埃尔内尼", "type": "away" },
        { "x": 130, "y": 140, "num": 25, "name": "齐佐", "type": "away" },
        { "x": 230, "y": 140, "num": 8, "name": "阿舒尔", "type": "away" },
        { "x": 80, "y": 95, "num": 22, "name": "马尔穆什", "type": "away" },
        { "x": 280, "y": 95, "num": 10, "name": "萨拉赫", "type": "away" },
        { "x": 180, "y": 70, "num": 7, "name": "特雷泽盖", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "克里斯·伍德",
          "age": 34,
          "position": "中锋/队长",
          "stats": "本届1球 | 国家队累计72场34球",
          "role": "新西兰高空灯塔与传奇，身体极其强健，拥有一手无解的高空争顶卡位与头球战术回摆威胁。",
          "form": "极佳",
          "ratings": [78, 86, 70, 72, 45, 91],
          "goalDist": { "leftBox": 1, "centerBox": 28, "rightBox": 5, "outsideBox": 0, "conversion": "17.5%" },
          "defenseDefense": "定位球防守时参与前点起跳争顶，干扰解围埃及的兜传。",
          "defenseWarnings": "埃及队长赫加齐在角球防守中必须时刻紧贴其起跳身位，严防抢点。"
        }
      ],
      "away": [
        {
          "name": "穆罕默德·萨拉赫",
          "age": 34,
          "position": "右翼锋",
          "stats": "本届2球1助 | 国家队累计96场56球",
          "role": "埃及精神图腾与领袖，利物浦头牌，在右侧大禁区前沿的变向小范围摆脱内切金左脚兜射，防不胜防。",
          "form": "极佳",
          "ratings": [92, 90, 88, 93, 35, 76],
          "goalDist": { "leftBox": 0, "centerBox": 15, "rightBox": 32, "outsideBox": 9, "conversion": "18.2%" },
          "defenseDefense": "前场高位扫荡阻截，切断新西兰左边路卡加切的大脚发起通道。",
          "defenseWarnings": "新西兰左后腰必须在其右侧肋部带球横切时坚决上前合围封堵其射门路线。"
        }
      ]
    }
  }
};

// Add to the main data object
Object.assign(data, newMatches);

// Write it back to data.json beautifully formatted
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log('data.json upgraded successfully with 4 new matches (esp-sau, bel-irn, uru-cpv, nzl-egy)!');
