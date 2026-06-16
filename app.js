/* ==========================================
   FIFA 2026 MATCH ANALYTICS DASHBOARD JS
   Handles dynamic data loading and dashboard UI
   ========================================== */

let matchData = {};

document.addEventListener('DOMContentLoaded', () => {
    // Fetch datasets from data.json dynamically
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            matchData = data;
            initializeDashboard();
        })
        .catch(err => {
            console.error('无法加载比赛数据，请确认 data.json 文件处于正确目录中。错误信息：', err);
            // Render basic error message in DOM
            document.body.innerHTML += `
                <div style="position:fixed;top:20px;right:20px;background:rgba(239,68,68,0.9);color:#fff;padding:15px;border-radius:8px;z-index:9999;font-size:14px;box-shadow:0 4px 12px rgba(0,0,0,0.3)">
                    <strong>⚠️ 数据加载失败</strong><br>
                    请检查本地服务器或 data.json 路径。<br>
                    <small style="opacity:0.8">${err.message}</small>
                </div>
            `;
        });
});

function initializeDashboard() {
    const tabs = {
        'overview': document.getElementById('section-overview'),
        'correlation': document.getElementById('section-correlation'),
        'match-details': document.getElementById('section-match-details')
    };

    const navButtons = document.querySelectorAll('.nav-item');
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');
    const containerBody = document.querySelector('.content-body');

    // 1. Tab Switching Logic
    function switchTab(targetTabId, matchId = null) {
        // Hide all tabs
        Object.keys(tabs).forEach(key => {
            if (tabs[key]) tabs[key].classList.remove('active');
        });

        // Deactivate sidebar items
        navButtons.forEach(btn => btn.classList.remove('active'));

        // Activate selected tab
        if (tabs[targetTabId]) tabs[targetTabId].classList.add('active');

        // Scroll back to top of container
        if (containerBody) containerBody.scrollTop = 0;

        if (targetTabId === 'overview') {
            const overviewBtn = document.getElementById('btn-overview');
            if (overviewBtn) overviewBtn.classList.add('active');
            pageTitle.innerText = '赛事综合总览';
            pageSubtitle.innerText = '美加墨世界杯超级比赛日・4场重磅对决深度解析';
        } else if (targetTabId === 'correlation') {
            const corrBtn = document.getElementById('btn-correlation');
            if (corrBtn) corrBtn.classList.add('active');
            pageTitle.innerText = '角球与进攻关联分析';
            pageSubtitle.innerText = '基于2026周期8支球队场均数据的科学实证分析';
            renderCorrelationCharts();
        } else if (targetTabId === 'match-details' && matchId) {
            const matchBtn = document.getElementById(`btn-match-${matchId}`);
            if (matchBtn) matchBtn.classList.add('active');
            pageTitle.innerText = `${matchData[matchId].teams.home.name} vs ${matchData[matchId].teams.away.name}`;
            pageSubtitle.innerText = `${matchData[matchId].group}・战术与伤兵细节深度推演`;
            renderMatchDetails(matchId);
        }
    }

    // Bind sidebar buttons
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            const match = btn.getAttribute('data-match');
            if (target) {
                switchTab(target);
            } else if (match) {
                switchTab('match-details', match);
            }
        });
    });

    // Bind Overview match card clicks
    document.querySelectorAll('.match-preview-card').forEach(card => {
        card.addEventListener('click', () => {
            const matchId = card.getAttribute('data-match');
            switchTab('match-details', matchId);
        });
    });

    // 2. Render Dynamic Details for Single Match
    function renderMatchDetails(matchId) {
        const data = matchData[matchId];
        if (!data) return;

        // Reset theme classes on detail layout
        const mainContainer = document.getElementById('section-match-details');
        if (mainContainer) {
            mainContainer.className = 'tab-section active'; // clear out old classes
            mainContainer.classList.add(data.themeClass);
        }

        // Header section updates
        document.getElementById('detail-group-info').innerText = data.group;
        document.getElementById('detail-time-loc').innerText = data.timeLoc;
        
        document.getElementById('detail-name-home').innerText = data.teams.home.name;
        document.getElementById('detail-flag-home').className = `flag-giant ${data.teams.home.flag}`;
        
        document.getElementById('detail-name-away').innerText = data.teams.away.name;
        document.getElementById('detail-flag-away').className = `flag-giant ${data.teams.away.flag}`;

        // Dynamic Stats Bar charts
        const statsContainer = document.getElementById('stats-comparison-bars');
        statsContainer.innerHTML = ''; // clear

        const metrics = [
            { key: 'goals', label: '场均进球数' },
            { key: 'shots', label: '场均射门数' },
            { key: 'sot', label: '场均射正数' },
            { key: 'sOff', label: '场均射歪数' },
            { key: 'corners', label: '场均角球数' }
        ];

        metrics.forEach(m => {
            const homeVal = data.teams.home[m.key];
            const awayVal = data.teams.away[m.key];
            const sum = homeVal + awayVal;
            const homePercent = (homeVal / sum) * 100;
            const awayPercent = (awayVal / sum) * 100;

            const row = document.createElement('div');
            row.className = 'stat-bar-item';
            row.innerHTML = `
                <div class="stat-label-row">
                    <span class="home-text-accent">${homeVal}</span>
                    <span class="stat-label-title">${m.label}</span>
                    <span class="away-text-accent">${awayVal}</span>
                </div>
                <div class="stat-bar-track">
                    <div class="stat-bar-fill home-fill" style="width: ${homePercent}%"></div>
                    <div class="stat-bar-fill away-fill" style="width: ${awayPercent}%"></div>
                </div>
            `;
            statsContainer.appendChild(row);
        });

        // Spotlight update
        document.getElementById('home-jersey').innerText = data.playerDuel.home.jersey;
        document.getElementById('home-player-name').innerText = data.playerDuel.home.name;
        document.getElementById('home-player-club').innerText = data.playerDuel.home.club;
        document.getElementById('home-player-stats').innerHTML = `
            <span>俱乐部: ${data.playerDuel.home.club}</span>
            <span>位置/属性: ${data.playerDuel.home.role}</span>
        `;
        const homeColorEl = document.getElementById('home-player-color');
        if (homeColorEl) {
            homeColorEl.style.boxShadow = `0 0 15px ${data.playerDuel.home.color}`;
            homeColorEl.style.borderColor = data.playerDuel.home.color;
        }

        document.getElementById('away-jersey').innerText = data.playerDuel.away.jersey;
        document.getElementById('away-player-name').innerText = data.playerDuel.away.name;
        document.getElementById('away-player-club').innerText = data.playerDuel.away.club;
        document.getElementById('away-player-stats').innerHTML = `
            <span>俱乐部: ${data.playerDuel.away.club}</span>
            <span>位置/属性: ${data.playerDuel.away.role}</span>
        `;
        const awayColorEl = document.getElementById('away-player-color');
        if (awayColorEl) {
            awayColorEl.style.boxShadow = `0 0 15px ${data.playerDuel.away.color}`;
            awayColorEl.style.borderColor = data.playerDuel.away.color;
        }

        // Player description & detailed bullet
        document.getElementById('player-duel-analysis').innerHTML = `
            <strong>核心看点：</strong>${data.playerDuel.description}<br><br>
            <strong>主队焦点 [${data.playerDuel.home.name}]：</strong>${data.playerDuel.home.details}<br><br>
            <strong>客队焦点 [${data.playerDuel.away.name}]：</strong>${data.playerDuel.away.details}
        `;

        // Detailed Squad Players render
        const squadHomeContainer = document.getElementById('squad-players-home');
        const squadAwayContainer = document.getElementById('squad-players-away');
        document.getElementById('squad-title-home').innerText = `${data.teams.home.name}队 核心球员及角色`;
        document.getElementById('squad-title-away').innerText = `${data.teams.away.name}队 核心球员及角色`;
        
        squadHomeContainer.innerHTML = '';
        squadAwayContainer.innerHTML = '';

        if (data.squadPlayers) {
            data.squadPlayers.home.forEach(p => {
                const card = document.createElement('div');
                card.className = 'squad-player-mini-card';
                card.innerHTML = `
                    <div class="squad-player-header">
                        <div class="squad-player-name-block">
                            <span class="squad-p-name">${p.name}</span>
                            <span class="squad-p-meta">年龄: ${p.age} | 位置: ${p.position}</span>
                        </div>
                        <span class="squad-p-form form-${p.form}">${p.form}</span>
                    </div>
                    <div class="squad-player-stats">${p.stats}</div>
                    <div class="squad-player-role"><strong>核心角色:</strong> ${p.role}</div>
                `;
                squadHomeContainer.appendChild(card);
            });

            data.squadPlayers.away.forEach(p => {
                const card = document.createElement('div');
                card.className = 'squad-player-mini-card';
                card.innerHTML = `
                    <div class="squad-player-header">
                        <div class="squad-player-name-block">
                            <span class="squad-p-name">${p.name}</span>
                            <span class="squad-p-meta">年龄: ${p.age} | 位置: ${p.position}</span>
                        </div>
                        <span class="squad-p-form form-${p.form}">${p.form}</span>
                    </div>
                    <div class="squad-player-stats">${p.stats}</div>
                    <div class="squad-player-role"><strong>核心角色:</strong> ${p.role}</div>
                `;
                squadAwayContainer.appendChild(card);
            });
        }

        // Injuries lists
        document.getElementById('injury-title-home').innerText = `${data.teams.home.name} 伤停报告`;
        const homeInjList = document.getElementById('injury-list-home');
        homeInjList.innerHTML = '';
        data.injuries.home.forEach(inj => {
            const li = document.createElement('li');
            li.className = `injury-item ${inj.status}`;
            li.innerHTML = `
                <span class="injury-dot"></span>
                <div>
                    <span class="injury-item-name">${inj.name}</span>
                    <span class="injury-item-desc">(${inj.desc})</span>
                </div>
            `;
            homeInjList.appendChild(li);
        });

        document.getElementById('injury-title-away').innerText = `${data.teams.away.name} 伤停报告`;
        const awayInjList = document.getElementById('injury-list-away');
        awayInjList.innerHTML = '';
        data.injuries.away.forEach(inj => {
            const li = document.createElement('li');
            li.className = `injury-item ${inj.status}`;
            li.innerHTML = `
                <span class="injury-dot"></span>
                <div>
                    <span class="injury-item-name">${inj.name}</span>
                    <span class="injury-item-desc">(${inj.desc})</span>
                </div>
            `;
            awayInjList.appendChild(li);
        });

        // AI Verdict
        document.getElementById('pred-home-name').innerText = data.teams.home.name;
        document.getElementById('pred-away-name').innerText = data.teams.away.name;
        document.getElementById('pred-score-val').innerText = data.verdict.score;
        document.getElementById('verdict-paragraph').innerText = data.verdict.text;

        // Tactical Formations and Pitch SVGs
        document.getElementById('form-badge-home').innerText = data.tactics.homeForm;
        document.getElementById('form-badge-away').innerText = data.tactics.awayForm;
        document.getElementById('tactics-explanation-text').innerText = data.tactics.explanation;

        // Render Pitch Players
        const playersGroup = document.getElementById('pitch-players-group');
        playersGroup.innerHTML = ''; // clear

        data.tactics.players.forEach(p => {
            const nodeG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            nodeG.setAttribute('class', 'pitch-node');
            
            // Set glowing color based on team (home is blue, away is theme-specific)
            let color = '#3b82f6'; // Home Blue
            if (p.type === 'away') {
                if (matchId === 'fra-sen') color = '#10b981'; // Senegal green
                else if (matchId === 'irq-nor') color = '#ef4444'; // Norway red
                else if (matchId === 'arg-alg') color = '#f59e0b'; // Algeria yellow
                else if (matchId === 'aut-jor') color = '#ef4444'; // Jordan red
            }

            // Circle background
            const circ = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circ.setAttribute('cx', p.x);
            circ.setAttribute('cy', p.y);
            circ.setAttribute('r', '8.5');
            circ.setAttribute('fill', color);
            circ.setAttribute('stroke', '#ffffff');
            circ.setAttribute('stroke-width', '1.5');
            circ.setAttribute('style', `filter: drop-shadow(0 0 3px ${color})`);

            // Jersey text
            const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            txt.setAttribute('x', p.x);
            txt.setAttribute('y', p.y + 3);
            txt.setAttribute('text-anchor', 'middle');
            txt.textContent = p.num;

            // Player name
            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', p.x);
            label.setAttribute('y', p.y + 16);
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('class', 'pitch-node-name');
            label.textContent = p.name;

            nodeG.appendChild(circ);
            nodeG.appendChild(txt);
            nodeG.appendChild(label);
            playersGroup.appendChild(nodeG);
        });
    }

    // 3. Render Correlation Charts and Scatter Plot
    function renderCorrelationCharts() {
        const barChartContainer = document.getElementById('correlation-bar-chart');
        barChartContainer.innerHTML = ''; // clear

        // Group the 8 teams dataset dynamically from matchData
        const teamSet = {};
        Object.keys(matchData).forEach(key => {
            const m = matchData[key];
            teamSet[m.teams.home.name] = {
                name: m.teams.home.name,
                goals: m.teams.home.goals,
                sot: m.teams.home.sot,
                corners: m.teams.home.corners
            };
            teamSet[m.teams.away.name] = {
                name: m.teams.away.name,
                goals: m.teams.away.goals,
                sot: m.teams.away.sot,
                corners: m.teams.away.corners
            };
        });

        const teams = Object.values(teamSet).sort((a, b) => b.sot - a.sot);

        const maxVal = 8.5; // normalization reference

        teams.forEach(t => {
            const gPercent = (t.goals / maxVal) * 100;
            const sotPercent = (t.sot / maxVal) * 100;
            const cPercent = (t.corners / maxVal) * 100;

            const row = document.createElement('div');
            row.className = 'chart-row';
            row.innerHTML = `
                <div class="chart-team-label">${t.name}</div>
                <div class="chart-bars-block">
                    <!-- Goals -->
                    <div class="bar-wrapper">
                        <div class="bar-fill bar-goals" style="width: ${gPercent}%"></div>
                        <span class="bar-val">${t.goals} 进球</span>
                    </div>
                    <!-- SOT -->
                    <div class="bar-wrapper">
                        <div class="bar-fill bar-sot" style="width: ${sotPercent}%"></div>
                        <span class="bar-val">${t.sot} 射正</span>
                    </div>
                    <!-- Corners -->
                    <div class="bar-wrapper">
                        <div class="bar-fill bar-corners" style="width: ${cPercent}%"></div>
                        <span class="bar-val">${t.corners} 角球</span>
                    </div>
                </div>
            `;
            barChartContainer.appendChild(row);
        });

        // Render Scatter Plot Nodes (inside #scatter-plot)
        const scatterContainer = document.getElementById('scatter-plot');
        scatterContainer.innerHTML = ''; // clear

        // Axis limits:
        // x-axis: corners (range 3.0 to 8.0)
        // y-axis: sot (range 2.5 to 8.5)
        const xMin = 3.0, xMax = 8.0;
        const yMin = 2.5, yMax = 8.5;

        teams.forEach(t => {
            // Calculate percentages for position (absolute styling)
            const xPercent = ((t.corners - xMin) / (xMax - xMin)) * 100;
            const yPercent = ((t.sot - yMin) / (yMax - yMin)) * 100;

            // Bubble size correlates with goals (from 30px to 55px)
            const bubbleSize = 30 + ((t.goals - 1.1) / (4.6 - 1.1)) * 25;
            
            // Color shifts based on goal volume
            let color = 'rgba(59, 130, 246, 0.4)'; // blue (low/mid)
            let border = '#3b82f6';
            if (t.goals > 2.0) {
                color = 'rgba(16, 185, 129, 0.45)'; // green (high)
                border = '#10b981';
            }
            if (t.goals >= 4.0) {
                color = 'rgba(245, 158, 11, 0.5)'; // gold (extraordinary)
                border = '#f59e0b';
            }

            const node = document.createElement('div');
            node.className = 'scatter-node';
            node.style.left = `${xPercent}%`;
            node.style.bottom = `${yPercent}%`;
            node.style.width = `${bubbleSize}px`;
            node.style.height = `${bubbleSize}px`;
            node.style.backgroundColor = color;
            node.style.color = '#ffffff';
            node.style.border = `2px solid ${border}`;
            node.innerText = `${t.goals}`;

            // Tooltip label
            const label = document.createElement('div');
            label.className = 'scatter-node-label';
            label.innerHTML = `<strong>${t.name}</strong><br>角球: ${t.corners}<br>射正: ${t.sot}<br>进球: ${t.goals}`;
            node.appendChild(label);

            scatterContainer.appendChild(node);
        });
    }

    // 4. Initialize Widget Clock
    function updateClock() {
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');
        const hh = String(now.getHours()).padStart(2, '0');
        const min = String(now.getMinutes()).padStart(2, '0');
        const clockEl = document.getElementById('current-time');
        if (clockEl) clockEl.innerText = `${yyyy}-${mm}-${dd} ${hh}:${min}`;
    }
    
    updateClock();
    setInterval(updateClock, 60000);

    // Initial state: show overview
    switchTab('overview');
}
