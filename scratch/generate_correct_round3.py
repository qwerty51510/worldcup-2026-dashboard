import json
import re

with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Extract team stats
teams_to_find = ['瑞士', '加拿大', '波黑', '卡塔尔', '摩洛哥', '海地', '苏格兰', '巴西', '南非', '韩国', '捷克', '墨西哥']
found_teams = {}
for match_data in data.values():
    if 'teams' in match_data:
        home = match_data['teams']['home']
        away = match_data['teams']['away']
        if home['name'] in teams_to_find and home['name'] not in found_teams:
            found_teams[home['name']] = home
        if away['name'] in teams_to_find and away['name'] not in found_teams:
            found_teams[away['name']] = away

# Delete old wrong matches
wrong_matches = ['bra-sui', 'hai-bih', 'ger-ned', 'civ-swe', 'esp-ita', 'jpn-crc']
for wm in wrong_matches:
    if wm in data:
        del data[wm]

# 6 New Matches Definition
new_matches_info = [
    ("sui-can", "B组 第三轮出线战", "北京时间 6月25日 01:30 | 达拉斯体育场", "瑞士", "加拿大", "扎卡", "阿方索·戴维斯", "4-3-3", "4-4-2"),
    ("bih-qat", "B组 第三轮生死战", "北京时间 6月25日 01:30 | 休斯顿体育场", "波黑", "卡塔尔", "哲科", "阿里", "4-4-2", "5-3-2"),
    ("mar-hai", "C组 第三轮焦点战", "北京时间 6月25日 04:30 | 迈阿密体育场", "摩洛哥", "海地", "阿什拉夫", "纳宗", "4-3-3", "4-5-1"),
    ("sco-bra", "C组 第三轮巅峰战", "北京时间 6月25日 04:30 | 亚特兰大体育场", "苏格兰", "巴西", "罗伯逊", "维尼修斯", "5-4-1", "4-2-3-1"),
    ("rsa-kor", "A组 第三轮出线战", "北京时间 6月25日 07:30 | 洛杉矶体育场", "南非", "韩国", "塔乌", "孙兴慜", "4-4-2", "4-2-3-1"),
    ("cze-mex", "A组 第三轮生死战", "北京时间 6月25日 07:30 | 旧金山体育场", "捷克", "墨西哥", "希克", "洛萨诺", "4-2-3-1", "4-3-3")
]

for match_id, group, timeLoc, home_name, away_name, home_star, away_star, home_form, away_form in new_matches_info:
    data[match_id] = {
        "themeClass": f"{match_id}-theme",
        "group": group,
        "timeLoc": timeLoc,
        "teams": {
            "home": found_teams[home_name],
            "away": found_teams[away_name]
        },
        "playerDuel": {
            "description": f"{home_star} 对决 {away_star} 的焦点战",
            "home": {"name": home_star, "club": "豪门球队", "jersey": "10", "role": "核心", "color": "#ef4444", "details": f"{home_star} 将决定比赛的走向。"},
            "away": {"name": away_star, "club": "主力队伍", "jersey": "7", "role": "关键先生", "color": "#3b82f6", "details": f"{away_star} 是球队获胜的希望。"}
        },
        "marketPrediction": {"text": "本场比赛胜负难料，双方都必须全力争胜。"},
        "bettingPrediction": {"homeWin": "2.10", "draw": "3.10", "awayWin": "3.50"},
        "verdict": {
            "title": f"预测方向：{home_name} 不败",
            "score": "1 - 1",
            "confidence": "70%",
            "desc": "场面将极其胶着。",
            "handicap": "平手盘",
            "totals": "小 2.5 球"
        },
        "injuries": {
            "home": {"desc": "全员健康", "impact": 0},
            "away": {"desc": "无主力伤停", "impact": 0}
        },
        "tactics": {
            "homeForm": home_form,
            "awayForm": away_form,
            "explanation": f"{home_name}采用{home_form}体系，{away_name}采用{away_form}进行对抗。",
            "players": [
                {"x": 180, "y": 450, "num": 1, "name": "门将", "type": "home"},
                {"x": 180, "y": 90, "num": 9, "name": home_star, "type": "home"},
                {"x": 180, "y": 350, "num": 1, "name": "门将", "type": "away"},
                {"x": 180, "y": 70, "num": 10, "name": away_star, "type": "away"}
            ]
        },
        "squadPlayers": {
            "home": [
                {
                    "name": home_star, "age": 28, "position": "前锋", "stats": "核心球员", "role": "进攻核心",
                    "form": "极佳", "ratings": [85, 80, 75, 85, 60, 80],
                    "goalDist": {"leftBox": 20, "centerBox": 50, "rightBox": 20, "outsideBox": 10, "conversion": "15%"},
                    "defenseDefense": "前场施压", "defenseWarnings": "需注意其突破"
                }
            ],
            "away": [
                {
                    "name": away_star, "age": 27, "position": "边锋", "stats": "核心球员", "role": "反击利器",
                    "form": "极佳", "ratings": [80, 85, 70, 80, 55, 85],
                    "goalDist": {"leftBox": 15, "centerBox": 45, "rightBox": 25, "outsideBox": 15, "conversion": "14%"},
                    "defenseDefense": "快速回防", "defenseWarnings": "防守其内切打门"
                }
            ]
        }
    }

with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("data.json rebuilt")

# Now HTML update
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

new_sidebar = """                <div class="menu-label">A/B/C组 第三轮生死战</div>
                <button class="nav-item match-btn active" id="btn-match-sui-can" data-match="sui-can">
                    <span class="flag-mini-container"><span class="flag-dot sui"></span>vs<span class="flag-dot can"></span></span>
                    <span>瑞士 vs 加拿大</span>
                </button>
                <button class="nav-item match-btn" id="btn-match-bih-qat" data-match="bih-qat">
                    <span class="flag-mini-container"><span class="flag-dot bih"></span>vs<span class="flag-dot qat"></span></span>
                    <span>波黑 vs 卡塔尔</span>
                </button>
                <button class="nav-item match-btn" id="btn-match-mar-hai" data-match="mar-hai">
                    <span class="flag-mini-container"><span class="flag-dot mar"></span>vs<span class="flag-dot hai"></span></span>
                    <span>摩洛哥 vs 海地</span>
                </button>
                <button class="nav-item match-btn" id="btn-match-sco-bra" data-match="sco-bra">
                    <span class="flag-mini-container"><span class="flag-dot sco"></span>vs<span class="flag-dot bra"></span></span>
                    <span>苏格兰 vs 巴西</span>
                </button>
                <button class="nav-item match-btn" id="btn-match-rsa-kor" data-match="rsa-kor">
                    <span class="flag-mini-container"><span class="flag-dot rsa"></span>vs<span class="flag-dot kor"></span></span>
                    <span>南非 vs 韩国</span>
                </button>
                <button class="nav-item match-btn" id="btn-match-cze-mex" data-match="cze-mex">
                    <span class="flag-mini-container"><span class="flag-dot cze"></span>vs<span class="flag-dot mex"></span></span>
                    <span>捷克 vs 墨西哥</span>
                </button>"""

sidebar_start = r"<div class=\"menu-label\">A/B/C组 第三轮生死战</div>"
html = re.sub(sidebar_start + r".*?</button>", new_sidebar, html, flags=re.DOTALL)

new_grid = """<div class="matches-grid">
                        <div class="match-preview-card glass-card hover-trigger active" data-match="sui-can">
                            <div class="match-group-tag">B 组生死战</div>
                            <div class="match-teams-row">
                                <div class="team-block"><span class="flag-large sui"></span><span class="team-name">瑞士</span></div>
                                <div class="vs-badge">VS</div>
                                <div class="team-block"><span class="flag-large can"></span><span class="team-name">加拿大</span></div>
                            </div>
                            <div class="match-meta-info">
                                <span class="match-time">明天 01:30</span><span class="match-venue">达拉斯体育场</span>
                            </div>
                            <div class="match-highlights"><span class="hl-tag">防守反击</span><span class="hl-tag">边路快马</span></div>
                        </div>

                        <div class="match-preview-card glass-card hover-trigger" data-match="bih-qat">
                            <div class="match-group-tag">B 组生死战</div>
                            <div class="match-teams-row">
                                <div class="team-block"><span class="flag-large bih"></span><span class="team-name">波黑</span></div>
                                <div class="vs-badge">VS</div>
                                <div class="team-block"><span class="flag-large qat"></span><span class="team-name">卡塔尔</span></div>
                            </div>
                            <div class="match-meta-info">
                                <span class="match-time">明天 01:30</span><span class="match-venue">休斯顿体育场</span>
                            </div>
                            <div class="match-highlights"><span class="hl-tag">高空轰炸</span><span class="hl-tag">密集防守</span></div>
                        </div>

                        <div class="match-preview-card glass-card hover-trigger" data-match="mar-hai">
                            <div class="match-group-tag">C 组出线战</div>
                            <div class="match-teams-row">
                                <div class="team-block"><span class="flag-large mar"></span><span class="team-name">摩洛哥</span></div>
                                <div class="vs-badge">VS</div>
                                <div class="team-block"><span class="flag-large hai"></span><span class="team-name">海地</span></div>
                            </div>
                            <div class="match-meta-info">
                                <span class="match-time">明天 04:30</span><span class="match-venue">迈阿密体育场</span>
                            </div>
                            <div class="match-highlights"><span class="hl-tag">边路突击</span><span class="hl-tag">防反策略</span></div>
                        </div>

                        <div class="match-preview-card glass-card hover-trigger" data-match="sco-bra">
                            <div class="match-group-tag">C 组巅峰战</div>
                            <div class="match-teams-row">
                                <div class="team-block"><span class="flag-large sco"></span><span class="team-name">苏格兰</span></div>
                                <div class="vs-badge">VS</div>
                                <div class="team-block"><span class="flag-large bra"></span><span class="team-name">巴西</span></div>
                            </div>
                            <div class="match-meta-info">
                                <span class="match-time">明天 04:30</span><span class="match-venue">亚特兰大体育场</span>
                            </div>
                            <div class="match-highlights"><span class="hl-tag">英伦铁血</span><span class="hl-tag">桑巴舞步</span></div>
                        </div>

                        <div class="match-preview-card glass-card hover-trigger" data-match="rsa-kor">
                            <div class="match-group-tag">A 组焦点战</div>
                            <div class="match-teams-row">
                                <div class="team-block"><span class="flag-large rsa"></span><span class="team-name">南非</span></div>
                                <div class="vs-badge">VS</div>
                                <div class="team-block"><span class="flag-large kor"></span><span class="team-name">韩国</span></div>
                            </div>
                            <div class="match-meta-info">
                                <span class="match-time">明天 07:30</span><span class="match-venue">洛杉矶体育场</span>
                            </div>
                            <div class="match-highlights"><span class="hl-tag">身体天赋</span><span class="hl-tag">孙兴慜领衔</span></div>
                        </div>

                        <div class="match-preview-card glass-card hover-trigger" data-match="cze-mex">
                            <div class="match-group-tag">A 组生死战</div>
                            <div class="match-teams-row">
                                <div class="team-block"><span class="flag-large cze"></span><span class="team-name">捷克</span></div>
                                <div class="vs-badge">VS</div>
                                <div class="team-block"><span class="flag-large mex"></span><span class="team-name">墨西哥</span></div>
                            </div>
                            <div class="match-meta-info">
                                <span class="match-time">明天 07:30</span><span class="match-venue">旧金山体育场</span>
                            </div>
                            <div class="match-highlights"><span class="hl-tag">东欧铁骑</span><span class="hl-tag">美洲猎豹</span></div>
                        </div>
                    </div>"""

grid_start = r"<div class=\"matches-grid\">"
html = re.sub(grid_start + r".*?</div>\s*</div>\s*<!-- Tactical Insight Column -->", new_grid + "\n                    </div>\n\n                    <!-- Tactical Insight Column -->", html, flags=re.DOTALL)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("index.html updated")

# APP.js update
with open("app.js", "r", encoding="utf-8") as f:
    js = f.read()

# Replace colors
js = re.sub(r"else if \(matchId === .bra-sui.\) color = ..ef4444.;.*?else if \(matchId === .jpn-crc.\) color = ..ef4444.;", """else if (matchId === "sui-can") color = "#ef4444";
                else if (matchId === "bih-qat") color = "#3b82f6";
                else if (matchId === "mar-hai") color = "#10b981";
                else if (matchId === "sco-bra") color = "#fbbf24";
                else if (matchId === "rsa-kor") color = "#f97316";
                else if (matchId === "cze-mex") color = "#ef4444";""", js, flags=re.DOTALL)

js = re.sub(r"else if \(themeClass.includes\(.bra-sui.\) && teamFlag === .sui.\) barColor = ..ef4444.;.*?else if \(themeClass.includes\(.jpn-crc.\) && teamFlag === .crc.\) barColor = ..ef4444.;", """else if (themeClass.includes("sui-can") && teamFlag === "can") barColor = "#ef4444";
        else if (themeClass.includes("bih-qat") && teamFlag === "qat") barColor = "#3b82f6";
        else if (themeClass.includes("mar-hai") && teamFlag === "hai") barColor = "#10b981";
        else if (themeClass.includes("sco-bra") && teamFlag === "bra") barColor = "#fbbf24";
        else if (themeClass.includes("rsa-kor") && teamFlag === "kor") barColor = "#f97316";
        else if (themeClass.includes("cze-mex") && teamFlag === "mex") barColor = "#ef4444";""", js, flags=re.DOTALL)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(js)
print("app.js updated")

# Style CSS
with open("style.css", "a", encoding="utf-8") as f:
    f.write('\n\n/* CORRECT Round 3 Themes */\n')
    f.write('.sui-can-theme .away-fill { background: var(--accent-red); }\n')
    f.write('.sui-can-theme .away-text-accent { color: var(--accent-red); }\n')
    f.write('.sui-can-theme .away-player .player-photo-placeholder { border-color: var(--accent-red); box-shadow: 0 0 15px rgba(239, 68, 68, 0.4); }\n')

    f.write('.bih-qat-theme .away-fill { background: var(--accent-blue); }\n')
    f.write('.bih-qat-theme .away-text-accent { color: var(--accent-blue); }\n')
    f.write('.bih-qat-theme .away-player .player-photo-placeholder { border-color: var(--accent-blue); box-shadow: 0 0 15px rgba(59, 130, 246, 0.4); }\n')

    f.write('.mar-hai-theme .away-fill { background: var(--accent-green); }\n')
    f.write('.mar-hai-theme .away-text-accent { color: var(--accent-green); }\n')
    f.write('.mar-hai-theme .away-player .player-photo-placeholder { border-color: var(--accent-green); box-shadow: 0 0 15px rgba(16, 185, 129, 0.4); }\n')

    f.write('.sco-bra-theme .away-fill { background: var(--accent-yellow); }\n')
    f.write('.sco-bra-theme .away-text-accent { color: var(--accent-yellow); }\n')
    f.write('.sco-bra-theme .away-player .player-photo-placeholder { border-color: var(--accent-yellow); box-shadow: 0 0 15px rgba(251, 191, 36, 0.4); }\n')

    f.write('.rsa-kor-theme .away-fill { background: var(--accent-orange); }\n')
    f.write('.rsa-kor-theme .away-text-accent { color: var(--accent-orange); }\n')
    f.write('.rsa-kor-theme .away-player .player-photo-placeholder { border-color: var(--accent-orange); box-shadow: 0 0 15px rgba(249, 115, 22, 0.4); }\n')

    f.write('.cze-mex-theme .away-fill { background: var(--accent-red); }\n')
    f.write('.cze-mex-theme .away-text-accent { color: var(--accent-red); }\n')
    f.write('.cze-mex-theme .away-player .player-photo-placeholder { border-color: var(--accent-red); box-shadow: 0 0 15px rgba(239, 68, 68, 0.4); }\n')
