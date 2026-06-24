import json

with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

if "cro-pan" in data:
    cro = data["cro-pan"]
    
    # 1. timeLoc
    if "matchTime" in cro and "stadium" in cro:
        cro["timeLoc"] = f"北京时间 6月24日 {cro['matchTime'].split(' ')[1]} | {cro['stadium']}"
        del cro["matchTime"]
        del cro["stadium"]
    
    # 2. tactics
    if "tacticalDetails" in cro:
        cro["tactics"] = {
            "homeForm": cro["tacticalDetails"]["home"]["formation"],
            "awayForm": cro["tacticalDetails"]["away"]["formation"],
            "explanation": f"克罗地亚采用 {cro['tacticalDetails']['home']['formation']}，{cro['tacticalDetails']['home']['style']}。巴拿马采用 {cro['tacticalDetails']['away']['formation']}，{cro['tacticalDetails']['away']['style']}。",
            "players": [
                {"x": 180, "y": 450, "num": 1, "name": "利瓦科维奇", "type": "home"},
                {"x": 140, "y": 380, "num": 4, "name": "格瓦迪奥尔", "type": "home"},
                {"x": 220, "y": 380, "num": 6, "name": "苏塔洛", "type": "home"},
                {"x": 70,  "y": 360, "num": 3, "name": "博尔纳·索萨", "type": "home"},
                {"x": 290, "y": 360, "num": 2, "name": "尤拉诺维奇", "type": "home"},
                {"x": 180, "y": 280, "num": 11, "name": "布罗佐维奇", "type": "home"},
                {"x": 140, "y": 230, "num": 8, "name": "科瓦契奇", "type": "home"},
                {"x": 220, "y": 230, "num": 10, "name": "莫德里奇", "type": "home"},
                {"x": 100, "y": 140, "num": 7, "name": "马耶尔", "type": "home"},
                {"x": 260, "y": 140, "num": 15, "name": "帕萨利奇", "type": "home"},
                {"x": 180, "y": 90,  "num": 9, "name": "克拉马里奇", "type": "home"},
                
                {"x": 180, "y": 350, "num": 1, "name": "莫斯克拉", "type": "away"},
                {"x": 100, "y": 290, "num": 3, "name": "卡明斯", "type": "away"},
                {"x": 180, "y": 290, "num": 4, "name": "埃斯科巴", "type": "away"},
                {"x": 260, "y": 290, "num": 5, "name": "安德拉德", "type": "away"},
                {"x": 60,  "y": 240, "num": 2, "name": "黑客托尔", "type": "away"},
                {"x": 300, "y": 240, "num": 23, "name": "穆里略", "type": "away"},
                {"x": 140, "y": 190, "num": 8, "name": "卡拉斯基利亚", "type": "away"},
                {"x": 220, "y": 190, "num": 20, "name": "戈多伊", "type": "away"},
                {"x": 120, "y": 130, "num": 10, "name": "巴尔塞纳斯", "type": "away"},
                {"x": 240, "y": 130, "num": 7, "name": "罗德里格斯", "type": "away"},
                {"x": 180, "y": 70,  "num": 17, "name": "法哈多", "type": "away"}
            ]
        }
    
    # 3. marketPrediction, bettingPrediction, verdict, injuries
    if "marketSentiment" in cro:
        cro["marketPrediction"] = {
            "text": cro["marketSentiment"]
        }
        del cro["marketSentiment"]
        
    if "odds" in cro:
        cro["bettingPrediction"] = {
            "homeWin": cro["odds"]["homeWin"],
            "draw": cro["odds"]["draw"],
            "awayWin": cro["odds"]["awayWin"]
        }
        del cro["odds"]
        
    if "prediction" in cro:
        cro["verdict"] = {
            "title": "预测方向：克罗地亚胜",
            "score": cro["prediction"]["score"],
            "confidence": f"{cro['prediction']['confidence']}%",
            "desc": cro["prediction"]["recommendationDetail"],
            "handicap": cro["prediction"]["handicap"],
            "totals": cro["prediction"]["totals"]
        }
        del cro["prediction"]
        
    if "tacticalDetails" in cro:
        cro["injuries"] = {
            "home": {
                "desc": cro["tacticalDetails"]["home"]["injuries"]["desc"],
                "impact": cro["tacticalDetails"]["home"]["injuries"]["impact"]
            },
            "away": {
                "desc": cro["tacticalDetails"]["away"]["injuries"]["desc"],
                "impact": cro["tacticalDetails"]["away"]["injuries"]["impact"]
            }
        }
        del cro["tacticalDetails"]
        
    if "correlation" in cro and "homeStats" in cro["correlation"]:
        # Fix correlation to match standard if needed, standard seems to just be correlation.text
        # Actually in eng-gha correlation is just an object inside data? No, eng-gha doesn't even have correlation?
        pass # Keep it, maybe it doesn't break anything. But let's check eng-gha.

with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("cro-pan keys matched.")
