import os
import json

base_dir = os.path.dirname(__file__)
data_path = os.path.join(base_dir, '..', 'data.json')
html_path = os.path.join(base_dir, '..', 'index.html')
css_path = os.path.join(base_dir, '..', 'style.css')
app_path = os.path.join(base_dir, '..', 'app.js')

# 1. Update data.json
with open(data_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Update times for existing matches
if "jor-alg" in data:
    data["jor-alg"]["timeLoc"] = "北京时间 6月23日 09:30 | 芝加哥体育场"
if "por-uzb" in data:
    data["por-uzb"]["timeLoc"] = "北京时间 6月23日 23:30 | 多伦多体育场"

new_matches = {
  "arg-aut": {
    "themeClass": "arg-aut-theme",
    "group": "J 组第二轮焦点战",
    "timeLoc": "北京时间 6月22日 23:30 | 达拉斯体育场",
    "teams": {
      "home": {
        "name": "阿根廷",
        "flag": "arg",
        "goals": 2.8,
        "shots": 16.5,
        "sot": 7.2,
        "sOff": 9.3,
        "corners": 6.2,
        "history": {
          "record1Year": "9胜 1平 1负 (胜率 90%)",
          "possession": "62.4%",
          "passAccuracy": "88.8%",
          "cleanSheets": "6次",
          "shotConversion": "16.5%",
          "conversionExplanation": "阿根廷主打传控打法，梅西在前场串联传球和内切射门是进攻核心，阿尔瓦雷斯高速反插提供纵深。",
          "recentMatches": [
            { "opponent": "阿尔及利亚", "score": "3 - 0", "type": "世界杯", "date": "2026-06" }
          ]
        }
      },
      "away": {
        "name": "奥地利",
        "flag": "aut",
        "goals": 1.8,
        "shots": 12.0,
        "sot": 4.8,
        "sOff": 7.2,
        "corners": 5.2,
        "history": {
          "record1Year": "6胜 2平 2负 (胜率 60%)",
          "possession": "52.5%",
          "passAccuracy": "82.4%",
          "cleanSheets": "4次",
          "shotConversion": "13.8%",
          "conversionExplanation": "奥地利由朗尼克带领主打高强度Gegenpressing，前场拦截和逼抢极其凶悍，球风硬朗推进快速。",
          "recentMatches": [
            { "opponent": "约旦", "score": "3 - 1", "type": "世界杯", "date": "2026-06" }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "利昂内尔·梅西",
        "jersey": "10",
        "club": "迈阿密国际",
        "role": "前腰/队长",
        "color": "#3b82f6",
        "details": "阿根廷球王，首战上演帽子戏法状态逆天，前场分牌和直接任意球极具毁灭性。"
      },
      "away": {
        "name": "马塞尔·萨比策",
        "jersey": "9",
        "club": "多特蒙德",
        "role": "中场/核心",
        "color": "#ef4444",
        "details": "奥地利战术核心，后插上远射与拼抢大范围覆盖是朗尼克高压战术的推进器。"
      },
      "description": "阿根廷球王梅西在中场的致命发牌，对决奥地利高压逼抢核心萨比策。萨比策能否在防守端死缠梅西，是奥地利能否生还的关键。"
    },
    "marketPrediction": {
      "polymarketOdds": { "homeWin": 68, "draw": 22, "awayWin": 10 },
      "marketSentiment": "虽然奥地利首战3-1击败约旦，但面对首战大胜的阿根廷，Polymarket资金依然给出了68%的阿根廷胜率估值，平局防范赔率上涨至22%。"
    },
    "bettingPrediction": {
      "handicap": "阿根廷 -1",
      "totals": "大 2.5",
      "recommendation": "阿根廷 -1 让分主胜 (即阿根廷赢盘)",
      "reason": "阿根廷前场传跑极为流畅，梅西、迪马利亚等老将经验丰富，能轻松撕扯奥地利的前压防线。看好阿根廷 3-1 胜出。"
    },
    "verdict": {
      "score": "3 - 1",
      "text": "阿根廷将牢牢控制中场，梅西在中路调度，奥地利的高压逼抢会消耗极大体能并在下半场出现防守漏洞，预计阿根廷 3-1 击败奥地利。"
    },
    "injuries": {
      "home": [],
      "away": []
    },
    "tactics": {
      "homeForm": "4-3-3",
      "awayForm": "4-2-3-1",
      "explanation": "阿根廷采用传控4-3-3阵型，梅西前腰发牌，两翼迪马利亚和阿尔瓦雷斯反插。奥地利主打高强度Gegenpressing 4-2-3-1，萨比策后插上射门。",
      "players": [
        { "x": 180, "y": 450, "num": 23, "name": "马丁内斯", "type": "home" },
        { "x": 140, "y": 380, "num": 13, "name": "罗梅罗", "type": "home" },
        { "x": 220, "y": 380, "num": 19, "name": "奥塔门迪", "type": "home" },
        { "x": 70, "y": 360, "num": 3, "name": "塔利亚菲科", "type": "home" },
        { "x": 290, "y": 360, "num": 26, "name": "莫利纳", "type": "home" },
        { "x": 180, "y": 280, "num": 7, "name": "德保罗", "type": "home" },
        { "x": 120, "y": 240, "num": 20, "name": "麦卡利斯特", "type": "home" },
        { "x": 240, "y": 240, "num": 24, "name": "恩佐", "type": "home" },
        { "x": 70, "y": 140, "num": 11, "name": "迪马利亚", "type": "home" },
        { "x": 290, "y": 140, "num": 9, "name": "阿尔瓦雷斯", "type": "home" },
        { "x": 180, "y": 90, "num": 10, "name": "梅西", "type": "home" },
        
        { "x": 180, "y": 350, "num": 1, "name": "彭茨", "type": "away" },
        { "x": 140, "y": 290, "num": 5, "name": "波施", "type": "away" },
        { "x": 220, "y": 290, "num": 15, "name": "林哈特", "type": "away" },
        { "x": 80, "y": 240, "num": 2, "name": "沃贝尔", "type": "away" },
        { "x": 280, "y": 240, "num": 16, "name": "姆韦内", "type": "away" },
        { "x": 130, "y": 190, "num": 24, "name": "莱默尔", "type": "away" },
        { "x": 230, "y": 190, "num": 6, "name": "赛瓦尔德", "type": "away" },
        { "x": 180, "y": 140, "num": 9, "name": "萨比策", "type": "away" },
        { "x": 80, "y": 95, "num": 19, "name": "鲍姆加特纳", "type": "away" },
        { "x": 280, "y": 95, "num": 10, "name": "格里利奇", "type": "away" },
        { "x": 180, "y": 70, "num": 11, "name": "格雷戈里奇", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "利昂内尔·梅西",
          "age": 39,
          "position": "前腰/前锋",
          "stats": "首战3球 | 国家队累计185场112球",
          "role": "阿根廷历史球王，进攻绝对发起者，拥有无解的任意球、肋部兜射及传球精度。",
          "form": "极佳",
          "ratings": [82, 95, 98, 92, 25, 90],
          "goalDist": { "leftBox": 15, "centerBox": 55, "rightBox": 30, "outsideBox": 12, "conversion": "22.5%" },
          "defenseDefense": "前场大范围策应，战术核心，角球时在弱侧等待二点插上。",
          "defenseWarnings": "奥地利防区中卫必须合力夹防阻截其内切兜射死角。"
        }
      ],
      "away": [
        {
          "name": "马塞尔·萨比策",
          "age": 32,
          "position": "中场",
          "stats": "首战1球1助 | 国家队累计82场18球",
          "role": "多特中场核心，高强度压迫中脑，体能无限，远射、插上与定位球能力极佳。",
          "form": "极佳",
          "ratings": [80, 84, 82, 85, 68, 86],
          "goalDist": { "leftBox": 2, "centerBox": 8, "rightBox": 4, "outsideBox": 4, "conversion": "13.8%" },
          "defenseDefense": "中圈疯狂扫荡绞杀，切断阿根廷后腰传球给梅西的通路。",
          "defenseWarnings": "阿根廷后腰必须密切防范其大禁区前沿的二点无球插上远射。"
        }
      ]
    }
  },
  "fra-irq": {
    "themeClass": "fra-irq-theme",
    "group": "I 组第二轮焦点战",
    "timeLoc": "北京时间 6月23日 03:30 | 费城体育场",
    "teams": {
      "home": {
        "name": "法国",
        "flag": "fra",
        "goals": 2.8,
        "shots": 17.2,
        "sot": 7.8,
        "sOff": 9.4,
        "corners": 6.8,
        "history": {
          "record1Year": "9胜 1平 1负 (胜率 90%)",
          "possession": "60.5%",
          "passAccuracy": "88.2%",
          "cleanSheets": "5次",
          "shotConversion": "16.2%",
          "conversionExplanation": "高卢雄鸡进攻线极其豪华，姆巴佩在左路的绝对速度和变向盘带是所有对手防线的致命噩梦。",
          "recentMatches": [
            { "opponent": "塞内加尔", "score": "3 - 1", "type": "世界杯", "date": "2026-06" }
          ]
        }
      },
      "away": {
        "name": "伊拉克",
        "flag": "irq",
        "goals": 1.2,
        "shots": 9.2,
        "sot": 3.5,
        "sOff": 5.7,
        "corners": 3.8,
        "history": {
          "record1Year": "5胜 2平 3负 (胜率 50%)",
          "possession": "44.5%",
          "passAccuracy": "76.8%",
          "cleanSheets": "3次",
          "shotConversion": "12.5%",
          "conversionExplanation": "伊拉克男足硬度十足，在中后场以5后卫深蹲防守为主，反击寻找中锋胡笙的对抗点。",
          "recentMatches": [
            { "opponent": "挪威", "score": "1 - 4", "type": "世界杯", "date": "2026-06" }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "基利安·姆巴佩",
        "jersey": "10",
        "club": "皇家马德里",
        "role": "左翼锋/队长",
        "color": "#3b82f6",
        "details": "法国头号杀器，拥有无可匹敌的速度与门前致命爆破力，是撕裂密集防守的绝对核心。"
      },
      "away": {
        "name": "艾曼·胡笙",
        "jersey": "18",
        "club": "空军体育",
        "role": "中锋/锋线核心",
        "color": "#10b981",
        "details": "伊拉克锋线巨炮，身高体壮，门前争顶与倚人终结能力极其强悍。"
      },
      "description": "法国队左路姆巴佩的超速爆破，对决伊拉克中锋艾曼·胡笙的强力争顶。伊拉克能否通过极低位大巴延缓姆巴佩的速度，是伊拉克防线的终极考验。"
    },
    "marketPrediction": {
      "polymarketOdds": { "homeWin": 85, "draw": 11, "awayWin": 4 },
      "marketSentiment": "法国首场3-1轻取塞内加尔，面对实力较弱的伊拉克，Polymarket资金呈现一边倒倾向，法国胜率高达85%。"
    },
    "bettingPrediction": {
      "handicap": "法国 -2",
      "totals": "大 3.0",
      "recommendation": "法国 -2 让分主胜 (即法国赢盘)",
      "reason": "法国前场火力完全碾压，姆巴佩和登贝莱在两翼能轻松撕开伊拉克身后的防守空档。预计法国 4-0 轻取伊拉克。"
    },
    "verdict": {
      "score": "4 - 0",
      "text": "法国将牢牢掌控局势，姆巴佩上半场即能攻入两球。伊拉克防线在极度施压下容易自乱阵脚，预计法国 4-0 大胜。"
    },
    "injuries": {
      "home": [],
      "away": []
    },
    "tactics": {
      "homeForm": "4-3-3",
      "awayForm": "5-4-1",
      "explanation": "法国采用控制性 4-3-3，姆巴佩左侧超速突破，格列兹曼前腰串联。伊拉克摆出 5-4-1 大巴，彻底放弃控球，反击连线胡笙。",
      "players": [
        { "x": 180, "y": 450, "num": 16, "name": "迈尼昂", "type": "home" },
        { "x": 140, "y": 380, "num": 4, "name": "萨利巴", "type": "home" },
        { "x": 220, "y": 380, "num": 18, "name": "于帕梅卡诺", "type": "home" },
        { "x": 70, "y": 360, "num": 22, "name": "特奥", "type": "home" },
        { "x": 290, "y": 360, "num": 5, "name": "孔德", "type": "home" },
        { "x": 180, "y": 280, "num": 8, "name": "琼阿梅尼", "type": "home" },
        { "x": 120, "y": 240, "num": 14, "name": "拉比奥特", "type": "home" },
        { "x": 240, "y": 240, "num": 7, "name": "格列兹曼", "type": "home" },
        { "x": 70, "y": 140, "num": 10, "name": "姆巴佩", "type": "home" },
        { "x": 290, "y": 140, "num": 11, "name": "登贝莱", "type": "home" },
        { "x": 180, "y": 90, "num": 15, "name": "小图拉姆", "type": "home" },
        
        { "x": 180, "y": 350, "num": 12, "name": "哈希姆", "type": "away" },
        { "x": 140, "y": 290, "num": 4, "name": "纳蒂克", "type": "away" },
        { "x": 220, "y": 290, "num": 3, "name": "苏拉卡", "type": "away" },
        { "x": 180, "y": 310, "num": 6, "name": "阿德南", "type": "away" },
        { "x": 70, "y": 240, "num": 2, "name": "阿里", "type": "away" },
        { "x": 290, "y": 240, "num": 11, "name": "巴伊什", "type": "away" },
        { "x": 130, "y": 180, "num": 8, "name": "拉希德", "type": "away" },
        { "x": 230, "y": 180, "num": 14, "name": "阿特万", "type": "away" },
        { "x": 80, "y": 120, "num": 13, "name": "雷桑", "type": "away" },
        { "x": 280, "y": 120, "num": 17, "name": "贾西姆", "type": "away" },
        { "x": 180, "y": 70, "num": 18, "name": "胡笙", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "基利安·姆巴佩",
          "age": 27,
          "position": "左翼锋/中锋",
          "stats": "首战1球1助 | 国家队累计82.5场49球",
          "role": "法国队第一王牌，皇马金球级射手，脚底频率与瞬间爆发力极其蛮横，反击无解。",
          "form": "极佳",
          "ratings": [98, 92, 85, 95, 30, 80],
          "goalDist": { "leftBox": 12, "centerBox": 28, "rightBox": 5, "outsideBox": 4, "conversion": "18.2%" },
          "defenseDefense": "前场高位拦截干扰伊拉克边路防守出球方向，节省体能用于反击反切。",
          "defenseWarnings": "伊拉克防线右后卫卡罗莫必须大范围收缩补位，切莫给其一对一起跑空间。"
        }
      ],
      "away": [
        {
          "name": "艾曼·胡笙",
          "age": 30,
          "position": "中锋",
          "stats": "首战1球 | 国家队累计74场28球",
          "role": "伊拉克传奇空霸，门前冲击力和抢点头球能力极强，身形高大具有坚实对抗能力。",
          "form": "极佳",
          "ratings": [78, 86, 68, 72, 45, 88],
          "goalDist": { "leftBox": 1, "centerBox": 22, "rightBox": 3, "outsideBox": 2, "conversion": "15.6%" },
          "defenseDefense": "纠缠法国主力中卫于帕梅卡诺出球，在角球战术中充当防守第一制空点。",
          "defenseWarnings": "法国防线萨利巴和于帕梅卡诺在定位球防守中必须派专人对其进行贴身绕前防空。"
        }
      ]
    }
  },
  "nor-sen": {
    "themeClass": "nor-sen-theme",
    "group": "I 组第二轮焦点战",
    "timeLoc": "北京时间 6月23日 06:30 | 纽约新泽西体育场",
    "teams": {
      "home": {
        "name": "挪威",
        "flag": "nor",
        "goals": 2.2,
        "shots": 13.8,
        "sot": 5.8,
        "sOff": 8.0,
        "corners": 5.5,
        "history": {
          "record1Year": "6胜 2平 2负 (胜率 60%)",
          "possession": "54.2%",
          "passAccuracy": "82.5%",
          "cleanSheets": "4次",
          "shotConversion": "15.8%",
          "conversionExplanation": "挪威队打法简洁高效，前场高塔哈兰德是世界第一终结者，厄德高中路长传制导是战术灵魂。",
          "recentMatches": [
            { "opponent": "伊拉克", "score": "4 - 1", "type": "世界杯", "date": "2026-06" }
          ]
        }
      },
      "away": {
        "name": "塞内加尔",
        "flag": "sen",
        "goals": 1.8,
        "shots": 12.5,
        "sot": 5.0,
        "sOff": 7.5,
        "corners": 5.0,
        "history": {
          "record1Year": "7胜 1平 2负 (胜率 70%)",
          "possession": "52.8%",
          "passAccuracy": "81.5%",
          "cleanSheets": "5次",
          "shotConversion": "13.5%",
          "conversionExplanation": "塞内加尔身体强健，两翼反击起步快，后腰盖耶提供坚韧绞杀拦截，防线库利巴利十分沉稳。",
          "recentMatches": [
            { "opponent": "法国", "score": "1 - 3", "type": "世界杯", "date": "2026-06" }
          ]
        }
      }
    },
    "playerDuel": {
      "home": {
        "name": "埃尔林·哈兰德",
        "jersey": "9",
        "club": "曼彻斯特城",
        "role": "中锋/魔兽",
        "color": "#3b82f6",
        "details": "挪威魔兽，首轮梅开二度状态爆表，禁区内的强悍身形与恐怖射术是所有后卫的灾难。"
      },
      "away": {
        "name": "尼古拉斯·杰克逊",
        "jersey": "9",
        "club": "切尔西",
        "role": "中锋/锋线尖刀",
        "color": "#10b981",
        "details": "塞内加尔核心，擅长穿插和快速反越位，门前终结与速度都具有极强的威胁。"
      },
      "description": "挪威魔兽哈兰德的禁区野蛮碾压，对碰塞内加尔尖刀杰克逊的高速穿插。哈兰德能否撕开塞内加尔库利巴利领衔的防线，是挪威全取三分的关键。"
    },
    "marketPrediction": {
      "polymarketOdds": { "homeWin": 52, "draw": 28, "awayWin": 20 },
      "marketSentiment": "两队首场表现都符合预期，Polymarket资金看好挪威在哈兰德带领下稍微占优，胜率为52%，防范双方闷平的平局赔率在28%。"
    },
    "bettingPrediction": {
      "handicap": "挪威 -0.5",
      "totals": "大 2.5",
      "recommendation": "挪威 -0.5 让分主胜 (即挪威赢盘)",
      "reason": "哈兰德在禁区的压制力无解，厄德高能送出精妙挑传，塞内加尔防线转身稍慢，看好挪威 2-1 险胜。"
    },
    "verdict": {
      "score": "2 - 1",
      "text": "双方在中场将展开激烈对攻。哈兰德将在下半场挺身而出打入致胜一球，塞内加尔虽有反击建树但整体难以抵挡挪威双子星的连线。预计挪威 2-1 胜出。"
    },
    "injuries": {
      "home": [],
      "away": []
    },
    "tactics": {
      "homeForm": "4-3-3",
      "awayForm": "4-3-3",
      "explanation": "挪威打法简练直来直往，厄德高中圈调度直塞，哈兰德在前突前。塞内加尔同样4-3-3，杰克逊反跑，中场盖耶防守硬度高。",
      "players": [
        { "x": 180, "y": 450, "num": 1, "name": "尼兰德", "type": "home" },
        { "x": 140, "y": 380, "num": 3, "name": "阿热", "type": "home" },
        { "x": 220, "y": 380, "num": 15, "name": "厄斯蒂高", "type": "home" },
        { "x": 70, "y": 360, "num": 2, "name": "沃尔夫", "type": "home" },
        { "x": 290, "y": 360, "num": 21, "name": "霍尔姆格伦", "type": "home" },
        { "x": 180, "y": 280, "num": 6, "name": "博格", "type": "home" },
        { "x": 120, "y": 240, "num": 20, "name": "托斯比", "type": "home" },
        { "x": 240, "y": 240, "num": 10, "name": "厄德高", "type": "home" },
        { "x": 70, "y": 140, "num": 11, "name": "努萨", "type": "home" },
        { "x": 290, "y": 140, "num": 22, "name": "鲍勃", "type": "home" },
        { "x": 180, "y": 90, "num": 9, "name": "哈兰德", "type": "home" },
        
        { "x": 180, "y": 350, "num": 16, "name": "门迪", "type": "away" },
        { "x": 140, "y": 290, "num": 3, "name": "库利巴利", "type": "away" },
        { "x": 220, "y": 290, "num": 22, "name": "迪亚洛", "type": "away" },
        { "x": 80, "y": 240, "num": 19, "name": "尼亚哈特", "type": "away" },
        { "x": 280, "y": 240, "num": 14, "name": "雅各布斯", "type": "away" },
        { "x": 180, "y": 190, "num": 5, "name": "盖耶", "type": "away" },
        { "x": 130, "y": 140, "num": 15, "name": "卡马拉", "type": "away" },
        { "x": 230, "y": 140, "num": 18, "name": "萨尔", "type": "away" },
        { "x": 80, "y": 95, "num": 10, "name": "马内", "type": "away" },
        { "x": 280, "y": 95, "num": 11, "name": "恩迪亚耶", "type": "away" },
        { "x": 180, "y": 70, "num": 9, "name": "杰克逊", "type": "away" }
      ]
    },
    "squadPlayers": {
      "home": [
        {
          "name": "埃尔林·哈兰德",
          "age": 25,
          "position": "中锋/前锋",
          "stats": "首战2球 | 国家队累计34场32球",
          "role": "挪威魔兽高塔，曼城主力神射手，拥有一手摧枯拉朽的倚人转身爆射及禁区高空轰顶杀伤力。",
          "form": "极佳",
          "ratings": [80, 96, 78, 82, 38, 91],
          "goalDist": { "leftBox": 4, "centerBox": 25, "rightBox": 2, "outsideBox": 1, "conversion": "28.5%" },
          "defenseDefense": "定位球防守时参与前点起跳争顶，延缓并断开对方盖耶的肋部挑传。",
          "defenseWarnings": "塞内加尔后防线核心库利巴利必须全程贴身进行力量对抗，千万不能给其舒服起步空间。"
        }
      ],
      "away": [
        {
          "name": "尼古拉斯·杰克逊",
          "age": 25,
          "position": "中锋",
          "stats": "首战1球 | 国家队累计20场4球",
          "role": "切尔西前锋，身体素质好，速度极快，擅长在中圈高速穿插，在左翼跑动极其灵活敏锐。",
          "form": "稳定",
          "ratings": [84, 82, 72, 78, 48, 80],
          "goalDist": { "leftBox": 1, "centerBox": 3, "rightBox": 0, "outsideBox": 0, "conversion": "15.0%" },
          "defenseDefense": "积极回撤中场阻断对方厄德高的慢速斜传直塞连线，就地反抢。",
          "defenseWarnings": "挪威后防线阿热在其斜插时必须迅速卡好内侧防线身位，不可盲目出脚吃晃。"
        }
      ]
    }
  }
}

# Merge new matches
data.update(new_matches)

with open(data_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("data.json updated successfully!")

# 2. Update style.css (append themes)
css_append = """

/* Custom Match Themes for Round 2 Focus Matches */
.arg-aut-theme .away-fill { background: var(--accent-red); }
.arg-aut-theme .away-text-accent { color: var(--accent-red); }
.arg-aut-theme .away-player .player-photo-placeholder { border-color: var(--accent-red); box-shadow: 0 0 15px rgba(239, 68, 68, 0.4); }

.fra-irq-theme .away-fill { background: var(--accent-green); }
.fra-irq-theme .away-text-accent { color: var(--accent-green); }
.fra-irq-theme .away-player .player-photo-placeholder { border-color: var(--accent-green); box-shadow: 0 0 15px rgba(16, 185, 129, 0.4); }

.nor-sen-theme .away-fill { background: var(--accent-green); }
.nor-sen-theme .away-text-accent { color: var(--accent-green); }
.nor-sen-theme .away-player .player-photo-placeholder { border-color: var(--accent-green); box-shadow: 0 0 15px rgba(16, 185, 129, 0.4); }
"""

with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

if ".arg-aut-theme" not in css_content:
    with open(css_path, 'a', encoding='utf-8') as f:
        f.write(css_append)
    print("style.css updated successfully!")
else:
    print("style.css already has themes.")

# 3. Update app.js (overview subtitle update)
with open(app_path, 'r', encoding='utf-8') as f:
    app_content = f.read()

old_subtitle = "pageSubtitle.innerText = '美加墨世界杯小组赛第二轮・4场强强对话深度解析';"
new_subtitle = "pageSubtitle.innerText = '美加墨世界杯小组赛第二轮・5场强强对话深度解析';"

if old_subtitle in app_content:
    app_content = app_content.replace(old_subtitle, new_subtitle)
    with open(app_path, 'w', encoding='utf-8') as f:
        f.write(app_content)
    print("app.js updated successfully!")
else:
    print("app.js subtitle already correct or not matched.")

# 4. Update index.html (matches grid, sidebar, insight card, overview subtitle)
with open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

# Replace sidebar navigation block
old_sidebar_block = """                <div class="menu-label">I组/J组焦点战</div>
                <button class="nav-item match-btn" id="btn-match-jor-alg" data-match="jor-alg">
                    <span class="flag-mini-container">
                        <span class="flag-dot jor"></span>vs<span class="flag-dot alg"></span>
                    </span>
                    <span>约旦 vs 阿尔及利亚</span>
                </button>

                <div class="menu-label">K组/L组焦点战</div>
                <button class="nav-item match-btn" id="btn-match-por-uzb" data-match="por-uzb">
                    <span class="flag-mini-container">
                        <span class="flag-dot por"></span>vs<span class="flag-dot uzb"></span>
                    </span>
                    <span>葡萄牙 vs 乌兹别克</span>
                </button>
                <button class="nav-item match-btn" id="btn-match-eng-gha" data-match="eng-gha">
                    <span class="flag-mini-container">
                        <span class="flag-dot eng"></span>vs<span class="flag-dot gha"></span>
                    </span>
                    <span>英格兰 vs 加纳</span>
                </button>
                <button class="nav-item match-btn" id="btn-match-col-cod" data-match="col-cod">
                    <span class="flag-mini-container">
                        <span class="flag-dot col"></span>vs<span class="flag-dot cod"></span>
                    </span>
                    <span>哥伦比亚 vs 刚果 (金)</span>
                </button>"""

new_sidebar_block = """                <div class="menu-label">I组/J组焦点战</div>
                <button class="nav-item match-btn" id="btn-match-arg-aut" data-match="arg-aut">
                    <span class="flag-mini-container">
                        <span class="flag-dot arg"></span>vs<span class="flag-dot aut"></span>
                    </span>
                    <span>阿根廷 vs 奥地利</span>
                </button>
                <button class="nav-item match-btn" id="btn-match-fra-irq" data-match="fra-irq">
                    <span class="flag-mini-container">
                        <span class="flag-dot fra"></span>vs<span class="flag-dot irq"></span>
                    </span>
                    <span>法国 vs 伊拉克</span>
                </button>
                <button class="nav-item match-btn" id="btn-match-nor-sen" data-match="nor-sen">
                    <span class="flag-mini-container">
                        <span class="flag-dot nor"></span>vs<span class="flag-dot sen"></span>
                    </span>
                    <span>挪威 vs 塞内加尔</span>
                </button>
                <button class="nav-item match-btn" id="btn-match-jor-alg" data-match="jor-alg">
                    <span class="flag-mini-container">
                        <span class="flag-dot jor"></span>vs<span class="flag-dot alg"></span>
                    </span>
                    <span>约旦 vs 阿尔及利亚</span>
                </button>

                <div class="menu-label">K组焦点战</div>
                <button class="nav-item match-btn" id="btn-match-por-uzb" data-match="por-uzb">
                    <span class="flag-mini-container">
                        <span class="flag-dot por"></span>vs<span class="flag-dot uzb"></span>
                    </span>
                    <span>葡萄牙 vs 乌兹别克</span>
                </button>"""

if old_sidebar_block in html_content:
    html_content = html_content.replace(old_sidebar_block, new_sidebar_block)
    print("index.html sidebar replaced successfully.")
else:
    print("WARNING: index.html sidebar block not matched.")

# Replace focus matches grid cards block
old_grid_block = """                    <!-- Match Quick Cards -->
                    <h3 class="section-subtitle">今日/明日焦点赛程</h3>
                    <div class="matches-grid">
                        <!-- Card: jor-alg -->
                        <div class="match-preview-card glass-card hover-trigger" data-match="jor-alg">
                            <div class="match-group-tag">J 组第二轮</div>
                            <div class="match-teams-row">
                                <div class="team-block">
                                    <span class="flag-large jor"></span>
                                    <span class="team-name">约旦</span>
                                </div>
                                <div class="vs-badge">VS</div>
                                <div class="team-block">
                                    <span class="flag-large alg"></span>
                                    <span class="team-name">阿尔及利亚</span>
                                </div>
                            </div>
                            <div class="match-meta-info">
                                <span class="match-time">今天 11:00</span>
                                <span class="match-venue">芝加哥体育场</span>
                            </div>
                            <div class="match-highlights">
                                <span class="hl-tag">塔马里反击</span>
                                <span class="hl-tag">马赫雷斯发牌</span>
                            </div>
                        </div>

                        <!-- Card: por-uzb -->
                        <div class="match-preview-card glass-card hover-trigger" data-match="por-uzb">
                            <div class="match-group-tag">K 组第二轮</div>
                            <div class="match-teams-row">
                                <div class="team-block">
                                    <span class="flag-large por"></span>
                                    <span class="team-name">葡萄牙</span>
                                </div>
                                <div class="vs-badge">VS</div>
                                <div class="team-block">
                                    <span class="flag-large uzb"></span>
                                    <span class="team-name">乌兹别克</span>
                                </div>
                            </div>
                            <div class="match-meta-info">
                                <span class="match-time">明天 01:00</span>
                                <span class="match-venue">多伦多体育场</span>
                            </div>
                            <div class="match-highlights">
                                <span class="hl-tag">C罗抢点</span>
                                <span class="hl-tag">绍穆罗多夫冲击</span>
                            </div>
                        </div>

                        <!-- Card: eng-gha -->
                        <div class="match-preview-card glass-card hover-trigger" data-match="eng-gha">
                            <div class="match-group-tag">L 组第二轮</div>
                            <div class="match-teams-row">
                                <div class="team-block">
                                    <span class="flag-large eng"></span>
                                    <span class="team-name">英格兰</span>
                                </div>
                                <div class="vs-badge">VS</div>
                                <div class="team-block">
                                    <span class="flag-large gha"></span>
                                    <span class="team-name">加纳</span>
                                </div>
                            </div>
                            <div class="match-meta-info">
                                <span class="match-time">明天 05:00</span>
                                <span class="match-venue">洛杉矶体育场</span>
                            </div>
                            <div class="match-highlights">
                                <span class="hl-tag">凯恩回撤</span>
                                <span class="hl-tag">库杜斯爆破</span>
                            </div>
                        </div>

                        <!-- Card: col-cod -->
                        <div class="match-preview-card glass-card hover-trigger" data-match="col-cod">
                            <div class="match-group-tag">K 组第二轮</div>
                            <div class="match-teams-row">
                                <div class="team-block">
                                    <span class="flag-large col"></span>
                                    <span class="team-name">哥伦比亚</span>
                                </div>
                                <div class="vs-badge">VS</div>
                                <div class="team-block">
                                    <span class="flag-large cod"></span>
                                    <span class="team-name">刚果 (金)</span>
                                </div>
                            </div>
                            <div class="match-meta-info">
                                <span class="match-time">明天 11:00</span>
                                <span class="match-venue">温港华体育场</span>
                            </div>
                            <div class="match-highlights">
                                <span class="hl-tag">迪亚斯单挑</span>
                                <span class="hl-tag">维萨反击</span>
                            </div>
                        </div>
                    </div>"""

new_grid_block = """                    <!-- Match Quick Cards -->
                    <h3 class="section-subtitle">今日/明日焦点赛程</h3>
                    <div class="matches-grid">
                        <!-- Card: arg-aut -->
                        <div class="match-preview-card glass-card hover-trigger" data-match="arg-aut">
                            <div class="match-group-tag">J 组第二轮</div>
                            <div class="match-teams-row">
                                <div class="team-block">
                                    <span class="flag-large arg"></span>
                                    <span class="team-name">阿根廷</span>
                                </div>
                                <div class="vs-badge">VS</div>
                                <div class="team-block">
                                    <span class="flag-large aut"></span>
                                    <span class="team-name">奥地利</span>
                                </div>
                            </div>
                            <div class="match-meta-info">
                                <span class="match-time">今天 23:30</span>
                                <span class="match-venue">达拉斯体育场</span>
                            </div>
                            <div class="match-highlights">
                                <span class="hl-tag">梅西发牌</span>
                                <span class="hl-tag">萨比策反插</span>
                            </div>
                        </div>

                        <!-- Card: fra-irq -->
                        <div class="match-preview-card glass-card hover-trigger" data-match="fra-irq">
                            <div class="match-group-tag">I 组第二轮</div>
                            <div class="match-teams-row">
                                <div class="team-block">
                                    <span class="flag-large fra"></span>
                                    <span class="team-name">法国</span>
                                </div>
                                <div class="vs-badge">VS</div>
                                <div class="team-block">
                                    <span class="flag-large irq"></span>
                                    <span class="team-name">伊拉克</span>
                                </div>
                            </div>
                            <div class="match-meta-info">
                                <span class="match-time">明天 03:30</span>
                                <span class="match-venue">费城体育场</span>
                            </div>
                            <div class="match-highlights">
                                <span class="hl-tag">姆巴佩爆破</span>
                                <span class="hl-tag">胡笙制空</span>
                            </div>
                        </div>

                        <!-- Card: nor-sen -->
                        <div class="match-preview-card glass-card hover-trigger" data-match="nor-sen">
                            <div class="match-group-tag">I 组第二轮</div>
                            <div class="match-teams-row">
                                <div class="team-block">
                                    <span class="flag-large nor"></span>
                                    <span class="team-name">挪威</span>
                                </div>
                                <div class="vs-badge">VS</div>
                                <div class="team-block">
                                    <span class="flag-large sen"></span>
                                    <span class="team-name">塞内加尔</span>
                                </div>
                            </div>
                            <div class="match-meta-info">
                                <span class="match-time">明天 06:30</span>
                                <span class="match-venue">纽约新泽西体育场</span>
                            </div>
                            <div class="match-highlights">
                                <span class="hl-tag">哈兰德轰炸</span>
                                <span class="hl-tag">杰克逊穿插</span>
                            </div>
                        </div>

                        <!-- Card: jor-alg -->
                        <div class="match-preview-card glass-card hover-trigger" data-match="jor-alg">
                            <div class="match-group-tag">J 组第二轮</div>
                            <div class="match-teams-row">
                                <div class="team-block">
                                    <span class="flag-large jor"></span>
                                    <span class="team-name">约旦</span>
                                </div>
                                <div class="vs-badge">VS</div>
                                <div class="team-block">
                                    <span class="flag-large alg"></span>
                                    <span class="team-name">阿尔及利亚</span>
                                </div>
                            </div>
                            <div class="match-meta-info">
                                <span class="match-time">明天 09:30</span>
                                <span class="match-venue">芝加哥体育场</span>
                            </div>
                            <div class="match-highlights">
                                <span class="hl-tag">塔马里反击</span>
                                <span class="hl-tag">马赫雷斯发牌</span>
                            </div>
                        </div>

                        <!-- Card: por-uzb -->
                        <div class="match-preview-card glass-card hover-trigger" data-match="por-uzb">
                            <div class="match-group-tag">K 组第二轮</div>
                            <div class="match-teams-row">
                                <div class="team-block">
                                    <span class="flag-large por"></span>
                                    <span class="team-name">葡萄牙</span>
                                </div>
                                <div class="vs-badge">VS</div>
                                <div class="team-block">
                                    <span class="flag-large uzb"></span>
                                    <span class="team-name">乌兹别克</span>
                                </div>
                            </div>
                            <div class="match-meta-info">
                                <span class="match-time">明天 23:30</span>
                                <span class="match-venue">多伦多体育场</span>
                            </div>
                            <div class="match-highlights">
                                <span class="hl-tag">C罗抢点</span>
                                <span class="hl-tag">绍穆罗多夫冲击</span>
                            </div>
                        </div>
                    </div>"""

if old_grid_block in html_content:
    html_content = html_content.replace(old_grid_block, new_grid_block)
    print("index.html matches grid replaced successfully.")
else:
    print("WARNING: index.html grid block not matched.")

# Replace header subtitle
html_content = html_content.replace(
    '<p id="page-subtitle" class="text-secondary">美加墨世界杯小组赛第二轮・4场强强对话深度解析</p>',
    '<p id="page-subtitle" class="text-secondary">美加墨世界杯小组赛第二轮・5场强强对话深度解析</p>'
)

# Replace insight text
old_insight_content = """                    <div class="insight-container glass-card">
                        <div class="insight-header">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" class="text-accent">
                                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.7c-.29.37-.542.85-.542 1.37v1.08c0 .3-.25.55-.55.55h-2.5a.55.55 0 0 1-.55-.55v-1.08c0-.52-.252-1-.543-1.37l-.542-.7z"></path>
                            </svg>
                            <h3>2026 世界杯超级比赛日战术前瞻</h3>
                        </div>
                        <p class="insight-text">
                            今日小组赛次轮收官战将移师 J 组、K 组与 L 组。约旦将凭借极低位 5-4-1 铁桶大巴死守阵地，迎战传控流畅的北非雄狮阿尔及利亚；葡萄牙由传奇巨星C罗与B费双核领衔，面对球风坚韧拼抢硬朗的中亚铁骑乌兹别克斯坦；英格兰在前锋凯恩与贝林厄姆带领下对阵速度极快、球风狂野的加纳；哥伦比亚则依靠迪亚斯的个人爆破与J罗的发牌技术，力争敲开刚果（金）的防线大巴。这 4 场对局将直接决定各组的出线形势。
                        </p>
                    </div>"""

new_insight_content = """                    <div class="insight-container glass-card">
                        <div class="insight-header">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" class="text-accent">
                                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.7c-.29.37-.542.85-.542 1.37v1.08c0 .3-.25.55-.55.55h-2.5a.55.55 0 0 1-.55-.55v-1.08c0-.52-.252-1-.543-1.37l-.542-.7z"></path>
                            </svg>
                            <h3>2026 世界杯超级比赛日战术前瞻</h3>
                        </div>
                        <p class="insight-text">
                            小组赛第二轮步入最后高潮。阿根廷由球王梅西领衔，对决朗尼克麾下主打疯狗压迫的奥地利；法国在前锋姆巴佩带领下迎战亚洲强手伊拉克；挪威高塔哈兰德对碰塞内加尔魔锋杰克逊；约旦继续排出低位铁桶防守阿尔及利亚；葡萄牙则由C罗带队出战中亚铁骑乌兹别克斯坦。这 5 场精彩对决将直接决定 J 组、I 组与 K 组的出线生死权。
                        </p>
                    </div>"""

if old_insight_content in html_content:
    html_content = html_content.replace(old_insight_content, new_insight_content)
    print("index.html insight replaced successfully.")
else:
    print("WARNING: index.html insight block not matched.")

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)
print("Finished all modifications!")
