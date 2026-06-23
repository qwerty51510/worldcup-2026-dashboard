import json

with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

squadPlayers = {
    "home": [
        {
            "name": "克拉马里奇",
            "age": 34,
            "position": "中锋",
            "stats": "世预赛出场10次打进5球",
            "role": "前场多面手，主要在禁区中路抢点，同时也拉边扯动为中场后排插上制造空间。",
            "form": "良好",
            "ratings": [78, 85, 75, 80, 50, 72],
            "goalDist": {
                "leftBox": 15,
                "centerBox": 60,
                "rightBox": 15,
                "outsideBox": 10,
                "conversion": "15.5%"
            },
            "defenseDefense": "前场第一线逼抢，虽然体能有所下降但战术执行力高。",
            "defenseWarnings": "巴拿马后卫需防止其突然的前插抢点和禁区边缘的二次进攻。"
        },
        {
            "name": "科瓦契奇",
            "age": 32,
            "position": "中场",
            "stats": "场均传球成功率 92.5%",
            "role": "中场突击手和节拍器，负责将球从后场推进到前场，是莫德里奇的重要帮手。",
            "form": "优秀",
            "ratings": [82, 75, 90, 88, 70, 85],
            "goalDist": {
                "leftBox": 5,
                "centerBox": 30,
                "rightBox": 5,
                "outsideBox": 60,
                "conversion": "8.2%"
            },
            "defenseDefense": "中场拦截与覆盖，能在攻防转换时迅速贴身破坏。",
            "defenseWarnings": "注意其在中路的纵向带球突破，避免轻易伸腿被过。"
        },
        {
            "name": "格瓦迪奥尔",
            "age": 24,
            "position": "左后卫",
            "stats": "场均解围4.2次，拦截2.1次",
            "role": "左路防守铁闸，同时具备极强的带球向前能力和进攻支援属性。",
            "form": "极佳",
            "ratings": [88, 65, 85, 80, 92, 90],
            "goalDist": {
                "leftBox": 60,
                "centerBox": 20,
                "rightBox": 0,
                "outsideBox": 20,
                "conversion": "6.0%"
            },
            "defenseDefense": "防线核心力量，单防能力出众且能为中卫补位。",
            "defenseWarnings": "防守端需提防其在定位球时的头球威胁和左路肋部的突然前插。"
        }
    ],
    "away": [
        {
            "name": "法哈多",
            "age": 31,
            "position": "中锋",
            "stats": "国家队出场45次进12球",
            "role": "反击中的支点与终结者，依靠身体素质在对方半场争抢第一落点。",
            "form": "一般",
            "ratings": [70, 75, 65, 78, 45, 80],
            "goalDist": {
                "leftBox": 10,
                "centerBox": 70,
                "rightBox": 10,
                "outsideBox": 10,
                "conversion": "11.5%"
            },
            "defenseDefense": "退防时参与中场拦截，阻碍对方后卫轻易出球。",
            "defenseWarnings": "克罗地亚中卫需在反击时紧贴防守，防止其抗住人后做球。"
        },
        {
            "name": "戴维斯",
            "age": 33,
            "position": "左翼卫",
            "stats": "左路传中成功率 28%",
            "role": "五后卫体系中的左路推进器，进攻时提供宽度，防守时回撤落位。",
            "form": "良好",
            "ratings": [75, 60, 70, 82, 75, 85],
            "goalDist": {
                "leftBox": 50,
                "centerBox": 10,
                "rightBox": 0,
                "outsideBox": 40,
                "conversion": "4.0%"
            },
            "defenseDefense": "主要负责盯防对方右边锋的内切与下底。",
            "defenseWarnings": "避免被其在边路轻松起球传中。"
        },
        {
            "name": "穆里略",
            "age": 30,
            "position": "右后卫",
            "stats": "场均抢断 2.8 次",
            "role": "右路防守悍将，身体硬朗，是球队右路防线的定海神针。",
            "form": "优秀",
            "ratings": [72, 50, 68, 75, 82, 88],
            "goalDist": {
                "leftBox": 0,
                "centerBox": 20,
                "rightBox": 50,
                "outsideBox": 30,
                "conversion": "3.5%"
            },
            "defenseDefense": "一对一防守强硬，擅长卡位和破坏传中。",
            "defenseWarnings": "定位球进攻时有一定威胁，需注意防空盯人。"
        }
    ]
}

data["cro-pan"]["squadPlayers"] = squadPlayers

with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("cro-pan squadPlayers fixed.")
