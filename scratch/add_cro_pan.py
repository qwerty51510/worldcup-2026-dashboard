import json

with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

cro_stats = data["eng-cro"]["teams"]["away"]
pan_stats = data["gha-pan"]["teams"]["away"]

cro_pan = {
    "themeClass": "cro-pan-theme",
    "group": "L组",
    "matchTime": "今天 11:30",
    "stadium": "达拉斯体育场",
    "marketSentiment": "克罗地亚首战遗憾2-4不敌英格兰，本场面对小组最弱的巴拿马必须全取三分。Polymarket预测克罗地亚胜率高达 78%。",
    "teams": {
        "home": cro_stats,
        "away": pan_stats
    },
    "correlation": {
        "text": "克罗地亚场均控球率远高于巴拿马（57.5% vs 45.0%）。克罗地亚中场强大的传控能力将完全压制巴拿马的防线。巴拿马场均进球仅1.05个且高度依赖防守反击，很难对克罗地亚防线造成实质威胁。由于必须争取净胜球，克罗地亚的角球数和进攻射门频次预期会大幅上升。",
        "homeStats": [
            {"label": "控球率", "value": 57.5, "unit": "%"},
            {"label": "场均角球", "value": 5.5, "unit": "个"}
        ],
        "awayStats": [
            {"label": "控球率", "value": 45.0, "unit": "%"},
            {"label": "场均角球", "value": 3.6, "unit": "个"}
        ]
    },
    "playerDuel": {
        "description": "格子军团中场大脑与巴拿马铁腰的攻防绞杀。莫德里奇的渗透传球将不断考验巴拿马防线的韧性。",
        "home": {
            "name": "莫德里奇",
            "club": "皇家马德里",
            "jersey": "10",
            "role": "中场核心 / 组织调度",
            "color": "#ef4444",
            "details": "40岁的传奇中场大师，克罗地亚的绝对大脑，掌控球队攻守两端的传控节奏。"
        },
        "away": {
            "name": "卡拉斯基利亚",
            "club": "休斯敦迪纳摩",
            "jersey": "8",
            "role": "防守型后腰 / 拦截扫荡",
            "color": "#3b82f6",
            "details": "巴拿马中场的核心屏障，拥有极强的身体素质和破坏对方进攻节奏的能力。"
        }
    },
    "squadPlayers": {
        "home": [
            {"name": "克拉马里奇", "role": "禁区抢点"},
            {"name": "科瓦契奇", "role": "中场推进"},
            {"name": "格瓦迪奥尔", "role": "左路压上"}
        ],
        "away": [
            {"name": "法哈多", "role": "反击箭头"},
            {"name": "戴维斯", "role": "左路传中"},
            {"name": "穆里略", "role": "右路防守"}
        ]
    },
    "tacticalDetails": {
        "home": {
            "formation": "4-3-3",
            "style": "中场控球，肋部渗透",
            "injuries": {
                "desc": "无主力球员受伤，全主力出战",
                "impact": 0,
                "detail": "克罗地亚阵容齐整，莫德里奇体能恢复良好。"
            },
            "defenseWarnings": "面对巴拿马的反击，克罗地亚后腰需注意保护防线身后空间。"
        },
        "away": {
            "formation": "5-4-1",
            "style": "低位防守，伺机反击",
            "injuries": {
                "desc": "无关键球员伤停",
                "impact": 0,
                "detail": "巴拿马预计将排出最强防线死守。"
            },
            "defenseWarnings": "需重点盯防克罗地亚中场的后插上远射，减少大禁区前沿的犯规。"
        }
    },
    "odds": {
        "homeWin": "1.30",
        "draw": "4.80",
        "awayWin": "11.00"
    },
    "prediction": {
        "winner": "home",
        "score": "2 - 0",
        "confidence": 85,
        "handicap": "克罗地亚让 1.5 球",
        "totals": "大 2.5 球",
        "direction": "克罗地亚方向",
        "recommendationDetail": "本场比赛实力悬殊，克罗地亚急需三分稳固出线形势。在必须净胜球的情况下，预计克罗地亚将牢牢掌控比赛节奏并多次攻破巴拿马防线。让步1.5球方向合理，推荐克罗地亚取胜穿盘。"
    }
}

data["cro-pan"] = cro_pan

with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("cro-pan added to data.json")
