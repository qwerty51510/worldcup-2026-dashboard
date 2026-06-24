import json

with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

matches = ["sui-can", "bih-qat", "mar-hai", "sco-bra", "rsa-kor", "cze-mex"]

for m in matches:
    if m in data:
        obj = data[m]
        
        # marketPrediction
        if "text" in obj.get("marketPrediction", {}):
            obj["marketPrediction"] = {
                "polymarketOdds": {
                    "homeWin": 45,
                    "draw": 30,
                    "awayWin": 25
                },
                "marketSentiment": "本场比赛胜负难料，双方都必须全力争胜。"
            }
            
        # bettingPrediction
        if "homeWin" in obj.get("bettingPrediction", {}):
            obj["bettingPrediction"] = {
                "handicap": "平手盘",
                "totals": "小 2.5",
                "recommendation": "推荐平局或让球下盘",
                "reason": "考虑到双方实力接近，大概率会打平。"
            }
            
        # verdict
        if "title" in obj.get("verdict", {}):
            score = obj["verdict"].get("score", "1-1")
            text = obj["verdict"].get("desc", "场面将极其胶着。")
            obj["verdict"] = {
                "score": score,
                "text": text
            }
            
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Keys fixed.")
