import json

# 1. 6 Matches Details
matches = {
    "bra-sui": {
        "themeClass": "bra-sui-theme",
        "group": "A组 第三轮生死战",
        "timeLoc": "北京时间 6月25日 00:00 | 洛杉矶体育场",
        "teams": {
            "home": {"name": "巴西", "flag": "bra", "goals": 2.2, "shots": 16.5, "sot": 7.0, "sOff": 9.5, "corners": 6.8},
            "away": {"name": "瑞士", "flag": "sui", "goals": 1.2, "shots": 10.2, "sot": 3.8, "sOff": 6.4, "corners": 4.1}
        },
        "playerDuel": {
            "description": "维尼修斯的左路爆破对抗阿坎吉领衔的防线",
            "home": {"name": "维尼修斯", "club": "皇家马德里", "jersey": "7", "role": "左边锋", "color": "#fbbf24", "details": "当世顶尖突破手，巴西破局的关键。"},
            "away": {"name": "阿坎吉", "club": "曼城", "jersey": "5", "role": "中后卫", "color": "#ef4444", "details": "后防核心，单防与出球能力极强。"}
        },
        "marketPrediction": {"text": "巴西队实力占优，但瑞士防守顽强，预计控球率巴西达65%，Polymarket预测巴西胜率68%。"},
        "bettingPrediction": {"homeWin": "1.45", "draw": "4.20", "awayWin": "7.50"},
        "verdict": {
            "title": "预测方向：巴西胜",
            "score": "2 - 0",
            "confidence": "82%",
            "desc": "巴西进攻端天赋碾压，瑞士难以全场死守。",
            "handicap": "巴西让 1.25 球",
            "totals": "小 2.75 球"
        },
        "injuries": {
            "home": {"desc": "内马尔仍在恢复期，其余全主力", "impact": 10},
            "away": {"desc": "扎卡小腿轻伤但可首发", "impact": 5}
        },
        "tactics": {
            "homeForm": "4-2-3-1",
            "awayForm": "5-4-1",
            "explanation": "巴西将采用高位压迫和快速轮转，瑞士则以五后卫密集防守伺机反击。",
            "players": []
        },
        "squadPlayers": {"home": [], "away": []}
    },
    "hai-bih": {
        "themeClass": "hai-bih-theme",
        "group": "A组 第三轮出线战",
        "timeLoc": "北京时间 6月25日 00:00 | 芝加哥体育场",
        "teams": {
            "home": {"name": "海地", "flag": "hai", "goals": 0.5, "shots": 6.0, "sot": 1.5, "sOff": 4.5, "corners": 2.5},
            "away": {"name": "波黑", "flag": "bih", "goals": 1.3, "shots": 11.0, "sot": 4.5, "sOff": 6.5, "corners": 5.0}
        },
        "playerDuel": {
            "description": "波黑老将哲科的禁区支点作用",
            "home": {"name": "纳宗", "club": "特鲁瓦", "jersey": "9", "role": "中锋", "color": "#3b82f6", "details": "海地唯一具备五大联赛经验的射手。"},
            "away": {"name": "哲科", "club": "费内巴切", "jersey": "11", "role": "中锋", "color": "#10b981", "details": "虽然年迈，但在禁区内的战术价值依然无可替代。"}
        },
        "marketPrediction": {"text": "波黑实力碾压，必须取胜以锁定出线名额。"},
        "bettingPrediction": {"homeWin": "8.00", "draw": "4.50", "awayWin": "1.38"},
        "verdict": {
            "title": "预测方向：波黑胜",
            "score": "0 - 2",
            "confidence": "75%",
            "desc": "波黑整体实力占优，高空轰炸对海地威胁巨大。",
            "handicap": "波黑让 1.5 球",
            "totals": "大 2.5 球"
        },
        "injuries": {
            "home": {"desc": "全员健康", "impact": 0},
            "away": {"desc": "无主力伤停", "impact": 0}
        },
        "tactics": {
            "homeForm": "4-4-2",
            "awayForm": "4-3-3",
            "explanation": "海地立足防守，波黑主打边路传中找哲科。",
            "players": []
        },
        "squadPlayers": {"home": [], "away": []}
    },
    "ger-ned": {
        "themeClass": "ger-ned-theme",
        "group": "B组 第三轮巅峰战",
        "timeLoc": "北京时间 6月25日 04:00 | 纽约体育场",
        "teams": {
            "home": {"name": "德国", "flag": "ger", "goals": 2.5, "shots": 18.0, "sot": 7.5, "sOff": 10.5, "corners": 7.2},
            "away": {"name": "荷兰", "flag": "ned", "goals": 2.1, "shots": 14.5, "sot": 5.8, "sOff": 8.7, "corners": 6.0}
        },
        "playerDuel": {
            "description": "维尔茨与哈维·西蒙斯的青春对决",
            "home": {"name": "维尔茨", "club": "勒沃库森", "jersey": "10", "role": "前腰", "color": "#ef4444", "details": "德国前场进攻核心，创造力满分。"},
            "away": {"name": "哈维·西蒙斯", "club": "莱比锡", "jersey": "7", "role": "前腰", "color": "#f97316", "details": "荷兰队的爆点，突破犀利。"}
        },
        "marketPrediction": {"text": "两强相遇，谁赢谁获小组第一，平局可能性较高。"},
        "bettingPrediction": {"homeWin": "2.30", "draw": "3.40", "awayWin": "3.00"},
        "verdict": {
            "title": "预测方向：平局",
            "score": "2 - 2",
            "confidence": "65%",
            "desc": "双方攻击力极强，预计是一场开放式的进球大战。",
            "handicap": "平手盘",
            "totals": "大 3.5 球"
        },
        "injuries": {
            "home": {"desc": "克罗斯退役，中场拦截略降", "impact": 15},
            "away": {"desc": "德容健康状态良好", "impact": 0}
        },
        "tactics": {
            "homeForm": "4-2-3-1",
            "awayForm": "3-4-1-2",
            "explanation": "德国依靠维尔茨和穆西亚拉的肋部传切，荷兰依靠两翼齐飞。",
            "players": []
        },
        "squadPlayers": {"home": [], "away": []}
    },
    "civ-swe": {
        "themeClass": "civ-swe-theme",
        "group": "B组 第三轮生死战",
        "timeLoc": "北京时间 6月25日 04:00 | 费城体育场",
        "teams": {
            "home": {"name": "科特迪瓦", "flag": "civ", "goals": 1.4, "shots": 12.0, "sot": 4.5, "sOff": 7.5, "corners": 5.2},
            "away": {"name": "瑞典", "flag": "swe", "goals": 1.6, "shots": 13.5, "sot": 5.0, "sOff": 8.5, "corners": 4.8}
        },
        "playerDuel": {
            "description": "伊萨克与科特迪瓦防线的速度比拼",
            "home": {"name": "阿莱", "club": "多特蒙德", "jersey": "9", "role": "中锋", "color": "#f97316", "details": "空霸，前场重要支点。"},
            "away": {"name": "伊萨克", "club": "纽卡斯尔", "jersey": "11", "role": "中锋", "color": "#fbbf24", "details": "速度极快，反击利器。"}
        },
        "marketPrediction": {"text": "瑞典整体战术素养稍高，但科特迪瓦身体天赋出众，悬念极大。"},
        "bettingPrediction": {"homeWin": "2.80", "draw": "3.10", "awayWin": "2.60"},
        "verdict": {
            "title": "预测方向：瑞典不败",
            "score": "1 - 1",
            "confidence": "70%",
            "desc": "瑞典在僵持战中更有战术纪律性，科特迪瓦进攻依赖个人能力。",
            "handicap": "瑞典 平手",
            "totals": "小 2.5 球"
        },
        "injuries": {
            "home": {"desc": "全主力", "impact": 0},
            "away": {"desc": "全主力", "impact": 0}
        },
        "tactics": {
            "homeForm": "4-3-3",
            "awayForm": "4-4-2",
            "explanation": "科特迪瓦强攻两路，瑞典立足双线防守反击。",
            "players": []
        },
        "squadPlayers": {"home": [], "away": []}
    },
    "esp-ita": {
        "themeClass": "esp-ita-theme",
        "group": "C组 第三轮焦点战",
        "timeLoc": "北京时间 6月25日 08:00 | 迈阿密体育场",
        "teams": {
            "home": {"name": "西班牙", "flag": "esp", "goals": 2.0, "shots": 15.5, "sot": 6.2, "sOff": 9.3, "corners": 7.5},
            "away": {"name": "意大利", "flag": "ita", "goals": 1.2, "shots": 11.5, "sot": 4.0, "sOff": 7.5, "corners": 5.0}
        },
        "playerDuel": {
            "description": "罗德里对决巴雷拉",
            "home": {"name": "罗德里", "club": "曼城", "jersey": "16", "role": "后腰", "color": "#ef4444", "details": "全球第一后腰，西班牙的节拍器。"},
            "away": {"name": "巴雷拉", "club": "国际米兰", "jersey": "18", "role": "中场", "color": "#3b82f6", "details": "意大利攻防转换的核心引擎。"}
        },
        "marketPrediction": {"text": "传控对防反的经典演绎，西班牙胜率被稍稍看好。"},
        "bettingPrediction": {"homeWin": "2.10", "draw": "3.10", "awayWin": "3.80"},
        "verdict": {
            "title": "预测方向：西班牙胜",
            "score": "1 - 0",
            "confidence": "75%",
            "desc": "西班牙的持续施压终将打穿意大利疲惫的防线。",
            "handicap": "西班牙让 0.5 球",
            "totals": "小 2.5 球"
        },
        "injuries": {
            "home": {"desc": "佩德里轻伤，可能轮休", "impact": 10},
            "away": {"desc": "基耶萨状态成疑", "impact": 15}
        },
        "tactics": {
            "homeForm": "4-3-3",
            "awayForm": "3-5-2",
            "explanation": "西班牙极致控球，意大利深度回撤并依靠边翼卫反击。",
            "players": []
        },
        "squadPlayers": {"home": [], "away": []}
    },
    "jpn-crc": {
        "themeClass": "jpn-crc-theme",
        "group": "C组 第三轮生死战",
        "timeLoc": "北京时间 6月25日 08:00 | 亚特兰大体育场",
        "teams": {
            "home": {"name": "日本", "flag": "jpn", "goals": 1.8, "shots": 14.0, "sot": 5.5, "sOff": 8.5, "corners": 6.0},
            "away": {"name": "哥斯达黎加", "flag": "crc", "goals": 0.8, "shots": 7.5, "sot": 2.5, "sOff": 5.0, "corners": 3.0}
        },
        "playerDuel": {
            "description": "三笘薰的边路突击",
            "home": {"name": "三笘薰", "club": "布莱顿", "jersey": "9", "role": "左边锋", "color": "#3b82f6", "details": "亚洲第一突破手。"},
            "away": {"name": "纳瓦斯", "club": "自由球员", "jersey": "1", "role": "门将", "color": "#ef4444", "details": "哥斯达黎加最后的防线。"}
        },
        "marketPrediction": {"text": "日本技术全面占优，赢球出线。"},
        "bettingPrediction": {"homeWin": "1.40", "draw": "4.50", "awayWin": "8.50"},
        "verdict": {
            "title": "预测方向：日本胜",
            "score": "2 - 0",
            "confidence": "85%",
            "desc": "日本传控与速度结合，将压制哥斯达黎加。",
            "handicap": "日本让 1.25 球",
            "totals": "大 2.5 球"
        },
        "injuries": {
            "home": {"desc": "全主力健康", "impact": 0},
            "away": {"desc": "多名老将体能亮红灯", "impact": 10}
        },
        "tactics": {
            "homeForm": "4-2-3-1",
            "awayForm": "5-4-1",
            "explanation": "日本前场压迫，哥斯达黎加全线退守。",
            "players": []
        },
        "squadPlayers": {"home": [], "away": []}
    }
}

with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for k, v in matches.items():
    data[k] = v

with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Round 3 matches appended to data.json")
