import json

with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

matches = ["sui-can", "bih-qat", "mar-hai", "sco-bra", "rsa-kor", "cze-mex"]

for m in matches:
    if m in data:
        obj = data[m]
        
        # injuries
        if "injuries" in obj:
            if isinstance(obj["injuries"].get("home"), dict):
                obj["injuries"]["home"] = []
            if isinstance(obj["injuries"].get("away"), dict):
                obj["injuries"]["away"] = []
            
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Injuries fixed.")
