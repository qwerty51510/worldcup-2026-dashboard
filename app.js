/* ==========================================
   FIFA 2026 MATCH ANALYTICS DASHBOARD JS
   Handles dynamic data loading, dashboard UI, and radar charts
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
                // Add click event for modal details
                card.addEventListener('click', () => {
                    openPlayerModal(p, data.teams.home.name, data.teams.home.flag, data.themeClass);
                });
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
                // Add click event for modal details
                card.addEventListener('click', () => {
                    openPlayerModal(p, data.teams.away.name, data.teams.away.flag, data.themeClass);
                });
                squadAwayContainer.appendChild(card);
            });
        }

        // Make Spotlight elements clickable
        const homePlayerSpotlight = document.querySelector('.home-player');
        const awayPlayerSpotlight = document.querySelector('.away-player');
        
        const findFullPlayerData = (name, list) => list.find(item => item.name.includes(name));

        if (homePlayerSpotlight) {
            const clone = homePlayerSpotlight.cloneNode(true);
            homePlayerSpotlight.parentNode.replaceChild(clone, homePlayerSpotlight);
            clone.style.cursor = 'pointer';
            clone.addEventListener('click', () => {
                const fullP = findFullPlayerData(data.playerDuel.home.name, data.squadPlayers.home);
                if (fullP) openPlayerModal(fullP, data.teams.home.name, data.teams.home.flag, data.themeClass);
            });
        }
        if (awayPlayerSpotlight) {
            const clone = awayPlayerSpotlight.cloneNode(true);
            awayPlayerSpotlight.parentNode.replaceChild(clone, awayPlayerSpotlight);
            clone.style.cursor = 'pointer';
            clone.addEventListener('click', () => {
                const fullP = findFullPlayerData(data.playerDuel.away.name, data.squadPlayers.away);
                if (fullP) openPlayerModal(fullP, data.teams.away.name, data.teams.away.flag, data.themeClass);
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
                flag: m.teams.home.flag,
                goals: m.teams.home.goals,
                sot: m.teams.home.sot,
                corners: m.teams.home.corners,
                history: m.teams.home.history
            };
            teamSet[m.teams.away.name] = {
                name: m.teams.away.name,
                flag: m.teams.away.flag,
                goals: m.teams.away.goals,
                sot: m.teams.away.sot,
                corners: m.teams.away.corners,
                history: m.teams.away.history
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
                <div style="text-align: center;">
                    <button class="btn-more-data" data-team="${t.name}">更多...</button>
                </div>
            `;
            row.querySelector('.btn-more-data').addEventListener('click', () => {
                openTeamModal(t);
            });
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

        // SVG Dimensions
        const width = 600;
        const height = 380;
        const padding = { top: 25, right: 30, bottom: 45, left: 50 };
        const plotWidth = width - padding.left - padding.right;
        const plotHeight = height - padding.top - padding.bottom;

        const xScale = (corners) => padding.left + ((corners - xMin) / (xMax - xMin)) * plotWidth;
        const yScale = (sot) => padding.top + (1 - (sot - yMin) / (yMax - yMin)) * plotHeight;

        // Tooltip container inside wrapper
        let tooltip = document.getElementById('scatter-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'scatter-tooltip';
            tooltip.className = 'scatter-tooltip';
            tooltip.style.opacity = '0';
            tooltip.style.pointerEvents = 'none';
            scatterContainer.appendChild(tooltip);
        }

        // Start building SVG
        let svgHtml = `<svg viewBox="0 0 ${width} ${height}" class="scatter-svg" xmlns="http://www.w3.org/2000/svg">`;

        // 1. Grid lines (corners: 3.0 to 8.0 step 1.0, sot: 3.0 to 8.0 step 1.0)
        for (let val = 3.0; val <= 8.0; val += 1.0) {
            const x = xScale(val);
            svgHtml += `<line class="scatter-grid-line" x1="${x}" y1="${padding.top}" x2="${x}" y2="${padding.top + plotHeight}"></line>`;
        }
        for (let val = 3.0; val <= 8.0; val += 1.0) {
            const y = yScale(val);
            svgHtml += `<line class="scatter-grid-line" x1="${padding.left}" y1="${y}" x2="${padding.left + plotWidth}" y2="${y}"></line>`;
        }

        // 2. Quadrant Dividers at X = 5.5, Y = 5.5
        const xDivider = xScale(5.5);
        const yDivider = yScale(5.5);
        svgHtml += `
            <line class="scatter-quadrant-line" x1="${xDivider}" y1="${padding.top}" x2="${xDivider}" y2="${padding.top + plotHeight}"></line>
            <line class="scatter-quadrant-line" x1="${padding.left}" y1="${yDivider}" x2="${padding.left + plotWidth}" y2="${yDivider}"></line>
        `;

        // 3. Quadrant Watermarks
        svgHtml += `
            <text class="scatter-quadrant-label" x="${xScale(6.75)}" y="${yScale(7.2)}" text-anchor="middle">第一象限: 双高统治区 (强攻与高射正)</text>
            <text class="scatter-quadrant-label" x="${xScale(6.75)}" y="${yScale(3.8)}" text-anchor="middle">第四象限: 只传不射区 (控球多/缺终结)</text>
            <text class="scatter-quadrant-label" x="${xScale(4.25)}" y="${yScale(7.2)}" text-anchor="middle">第二象限: 高效突袭区 (射术精/重反击)</text>
            <text class="scatter-quadrant-label" x="${xScale(4.25)}" y="${yScale(3.8)}" text-anchor="middle">第三象限: 低迷稳守区 (重防守/落位深)</text>
        `;

        // 4. Coordinate Axes Lines
        svgHtml += `
            <line class="scatter-axis-line" x1="${padding.left}" y1="${padding.top - 10}" x2="${padding.left}" y2="${padding.top + plotHeight}"></line>
            <line class="scatter-axis-line" x1="${padding.left}" y1="${padding.top + plotHeight}" x2="${padding.left + plotWidth + 10}" y2="${padding.top + plotHeight}"></line>
        `;

        // 5. Ticks & Labels on X and Y
        for (let val = 3.0; val <= 8.0; val += 1.0) {
            const x = xScale(val);
            svgHtml += `
                <line class="scatter-axis-tick" x1="${x}" y1="${padding.top + plotHeight}" x2="${x}" y2="${padding.top + plotHeight + 4}"></line>
                <text class="scatter-tick-label" x="${x}" y="${padding.top + plotHeight + 16}" text-anchor="middle">${val.toFixed(1)}</text>
            `;
        }
        for (let val = 2.5; val <= 8.5; val += 1.0) {
            const y = yScale(val);
            svgHtml += `
                <line class="scatter-axis-tick" x1="${padding.left - 4}" y1="${y}" x2="${padding.left}" y2="${y}"></line>
                <text class="scatter-tick-label" x="${padding.left - 8}" y="${y + 3}" text-anchor="end">${val.toFixed(1)}</text>
            `;
        }

        // 6. Axis titles
        svgHtml += `
            <text class="scatter-axis-title" x="${padding.left + plotWidth / 2}" y="${height - 8}" text-anchor="middle">场均角球数 (角球量) →</text>
            <text class="scatter-axis-title" x="${- (padding.top + plotHeight / 2)}" y="${15}" text-anchor="middle" transform="rotate(-90)">场均射正数 (终结准星) →</text>
        `;

        // 7. Render bubbles using foreignObject for rich HTML rendering of flag and goals
        teams.forEach(t => {
            const xVal = xScale(t.corners);
            const yVal = yScale(t.sot);
            
            // Calculate size based on goals (diameter between 52px and 76px)
            const bubbleSize = 52 + ((t.goals - 1.1) / (4.6 - 1.1)) * 24;
            const radius = bubbleSize / 2;

            // Highlight border
            let border = 'rgba(59, 130, 246, 0.7)';
            if (t.goals > 2.0) border = 'rgba(16, 185, 129, 0.8)';
            if (t.goals >= 4.0) border = 'rgba(245, 158, 11, 0.85)';

            svgHtml += `
                <foreignObject x="${xVal - radius}" y="${yVal - radius}" width="${bubbleSize}" height="${bubbleSize}" class="scatter-fo" data-team="${t.name}">
                    <div class="scatter-bubble-badge" style="border-color: ${border}">
                        <div class="scatter-bubble-flag ${t.flag}"></div>
                        <span class="scatter-bubble-name">${t.name}</span>
                        <span class="scatter-bubble-goals">${t.goals}球/场</span>
                    </div>
                </foreignObject>
            `;
        });

        svgHtml += `</svg>`;
        scatterContainer.innerHTML += svgHtml;

        // 8. Bind hover and click interactions
        const bubbleNodes = scatterContainer.querySelectorAll('.scatter-fo');
        bubbleNodes.forEach(node => {
            const teamName = node.getAttribute('data-team');
            const teamObj = teamSet[teamName];

            node.addEventListener('mouseenter', () => {
                tooltip.innerHTML = `
                    <div class="scatter-tooltip-header">
                        <span class="flag-dot ${teamObj.flag}"></span>
                        <span>${teamObj.name}国家队</span>
                    </div>
                    <div class="scatter-tooltip-row">
                        <span class="scatter-tooltip-lbl">场均进球:</span>
                        <span class="scatter-tooltip-val text-accent">${teamObj.goals} 球</span>
                    </div>
                    <div class="scatter-tooltip-row">
                        <span class="scatter-tooltip-lbl">场均射正:</span>
                        <span class="scatter-tooltip-val">${teamObj.sot} 次</span>
                    </div>
                    <div class="scatter-tooltip-row">
                        <span class="scatter-tooltip-lbl">场均角球:</span>
                        <span class="scatter-tooltip-val">${teamObj.corners} 次</span>
                    </div>
                    <div class="scatter-tooltip-row">
                        <span class="scatter-tooltip-lbl">射门进球转化率:</span>
                        <span class="scatter-tooltip-val" style="color: var(--accent-green)">${teamObj.history.shotConversion}</span>
                    </div>
                    <div class="scatter-tooltip-explanation">
                        <strong>进球效率分析: </strong>${teamObj.history.conversionExplanation.substring(0, 75)}...
                    </div>
                `;
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translate(-50%, -105%) scale(1)';
            });

            node.addEventListener('mousemove', (e) => {
                const rect = scatterContainer.getBoundingClientRect();
                const xPos = e.clientX - rect.left;
                const yPos = e.clientY - rect.top;
                tooltip.style.left = `${xPos}px`;
                tooltip.style.top = `${yPos}px`;
            });

            node.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translate(-50%, -105%) scale(0.95)';
            });

            node.addEventListener('click', () => {
                openTeamModal(teamObj);
            });
        });
    }

    // 4. Team Modal Detailed Display
    const teamModalEl = document.getElementById('team-modal');
    const teamModalCloseBtn = document.getElementById('team-modal-close-btn');

    function openTeamModal(teamObj) {
        if (!teamModalEl) return;

        // Set Basic Text
        document.getElementById('modal-team-name').innerText = `${teamObj.name}国家队`;
        document.getElementById('modal-team-subtitle').innerText = `近一年战绩: ${teamObj.history.record1Year}`;
        document.getElementById('modal-team-flag').className = `flag-large ${teamObj.flag}`;
        
        document.getElementById('team-stat-possession').innerText = teamObj.history.possession;
        document.getElementById('team-stat-pass').innerText = teamObj.history.passAccuracy;
        document.getElementById('team-stat-cleansheet').innerText = teamObj.history.cleanSheets;
        document.getElementById('team-stat-conversion').innerText = teamObj.history.shotConversion;
        
        document.getElementById('team-conversion-explanation').innerText = teamObj.history.conversionExplanation;

        // Populate Recent Matches
        const matchesContainer = document.getElementById('team-recent-matches');
        matchesContainer.innerHTML = '';

        if (teamObj.history.recentMatches && teamObj.history.recentMatches.length > 0) {
            teamObj.history.recentMatches.forEach(match => {
                const matchEl = document.createElement('div');
                matchEl.className = 'team-match-item';
                
                const scores = match.score.split('-').map(s => parseInt(s.trim()));
                let resultClass = 'draw';
                let resultText = '平';
                if (scores.length === 2 && !isNaN(scores[0]) && !isNaN(scores[1])) {
                    if (scores[0] > scores[1]) {
                        resultClass = 'win';
                        resultText = '胜';
                    } else if (scores[0] < scores[1]) {
                        resultClass = 'loss';
                        resultText = '负';
                    }
                }
                
                matchEl.innerHTML = `
                    <div class="team-match-meta">
                        <span class="team-match-type">${match.type}</span>
                        <span class="team-match-date">${match.date}</span>
                    </div>
                    <div class="team-match-vs">
                        <span class="team-match-opponent">vs ${match.opponent}</span>
                        <span class="team-match-score ${resultClass}">${match.score} (${resultText})</span>
                    </div>
                `;
                matchesContainer.appendChild(matchEl);
            });
        } else {
            matchesContainer.innerHTML = '<div style="color:var(--text-muted);font-size:0.8rem;text-align:center;padding:20px;">暂无历史战绩数据</div>';
        }

        // Open Modal
        teamModalEl.classList.add('active');
    }

    function closeTeamModal() {
        if (teamModalEl) teamModalEl.classList.remove('active');
    }

    if (teamModalCloseBtn) {
        teamModalCloseBtn.addEventListener('click', closeTeamModal);
    }
    
    if (teamModalEl) {
        teamModalEl.addEventListener('click', (e) => {
            if (e.target === teamModalEl) {
                closeTeamModal();
            }
        });
    }

    // 4. Player Modal Detailed Display
    const modalEl = document.getElementById('player-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    function openPlayerModal(player, teamName, teamFlag, themeClass) {
        if (!modalEl) return;

        // Set Basic Text
        document.getElementById('modal-player-name').innerText = player.name;
        document.getElementById('modal-player-meta').innerText = `年龄: ${player.age} | 位置: ${player.position} | 状态: ${player.form}`;
        document.getElementById('modal-player-team').innerText = teamName;
        document.getElementById('modal-player-flag').className = `flag-large ${teamFlag}`;
        document.getElementById('modal-stat-overall').innerText = player.stats;
        document.getElementById('modal-stat-conversion').innerText = player.goalDist.conversion;
        document.getElementById('modal-def-desc').innerText = player.defenseDefense;
        document.getElementById('modal-def-warn').innerText = player.defenseWarnings;

        // Render Goal Distribution CSS Progress Bars
        const distContainer = document.getElementById('modal-goal-dist');
        distContainer.innerHTML = ''; // clear

        const distData = [
            { label: '禁区内左侧进球', val: player.goalDist.leftBox },
            { label: '禁区内中央进球', val: player.goalDist.centerBox },
            { label: '禁区内右侧进球', val: player.goalDist.rightBox },
            { label: '禁区外远射进球', val: player.goalDist.outsideBox }
        ];

        // Determine bar color based on theme
        let barColor = '#3b82f6'; // default blue
        if (themeClass.includes('fra-sen') && teamFlag === 'sen') barColor = '#10b981';
        else if (themeClass.includes('irq-nor') && teamFlag === 'nor') barColor = '#ef4444';
        else if (themeClass.includes('arg-alg') && teamFlag === 'alg') barColor = '#f59e0b';
        else if (themeClass.includes('aut-jor') && teamFlag === 'jor') barColor = '#ef4444';

        distData.forEach(item => {
            const row = document.createElement('div');
            row.className = 'g-dist-row';
            row.innerHTML = `
                <span class="g-dist-lbl">${item.label}</span>
                <div class="g-dist-track">
                    <div class="g-dist-bar" style="width: 0%; background-color: ${barColor}"></div>
                </div>
                <span class="g-dist-val">${item.val}</span>
            `;
            distContainer.appendChild(row);
            
            // Trigger transition animation in next tick
            setTimeout(() => {
                row.querySelector('.g-dist-bar').style.width = item.val;
            }, 100);
        });

        // Draw SVG Radar Chart
        drawRadarChart(player.ratings, barColor);

        // Open Modal
        modalEl.classList.add('active');
    }

    function closePlayerModal() {
        if (modalEl) modalEl.classList.remove('active');
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closePlayerModal);
    }
    
    // Close modal when clicking on the overlay backdrop
    if (modalEl) {
        modalEl.addEventListener('click', (e) => {
            if (e.target === modalEl) {
                closePlayerModal();
            }
        });
    }

    // SVG Radar Drawing Logic
    function drawRadarChart(ratings, themeColor) {
        const svg = document.getElementById('radar-svg');
        if (!svg) return;
        svg.innerHTML = ''; // clear

        const cx = 100;
        const cy = 100;
        const R = 68; // max radius
        const labels = ['速度', '射门', '传球', '盘带', '防守', '力量'];
        const angles = [];

        // 1. Calculate angles (6 axes, pointing straight up first)
        for (let i = 0; i < 6; i++) {
            angles.push(-Math.PI / 2 + (i * Math.PI) / 3);
        }

        // Create radial grid background (4 levels: 25%, 50%, 75%, 100%)
        const gridLevels = [0.25, 0.5, 0.75, 1];
        gridLevels.forEach(level => {
            const points = [];
            angles.forEach(angle => {
                const x = cx + R * level * Math.cos(angle);
                const y = cy + R * level * Math.sin(angle);
                points.push(`${x},${y}`);
            });
            const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            poly.setAttribute('points', points.join(' '));
            poly.setAttribute('class', 'radar-grid');
            svg.appendChild(poly);
        });

        // Draw 6 straight axis lines and text labels
        angles.forEach((angle, i) => {
            const xOuter = cx + R * Math.cos(angle);
            const yOuter = cy + R * Math.sin(angle);
            
            // Line
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', cx);
            line.setAttribute('y1', cy);
            line.setAttribute('x2', xOuter);
            line.setAttribute('y2', yOuter);
            line.setAttribute('class', 'radar-axis');
            svg.appendChild(line);

            // Label push out position
            const xLabel = cx + (R + 15) * Math.cos(angle);
            const yLabel = cy + (R + 13) * Math.sin(angle) + 2.5;

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', xLabel);
            text.setAttribute('y', yLabel);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('class', 'radar-label');
            text.textContent = `${labels[i]} (${ratings[i]})`;
            svg.appendChild(text);
        });

        // Calculate player points polygon
        const playerPoints = [];
        angles.forEach((angle, i) => {
            const r = R * (ratings[i] / 100);
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            playerPoints.push(`${x},${y}`);
        });

        // Render filled polygon
        const playerPoly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        playerPoly.setAttribute('points', playerPoints.join(' '));
        playerPoly.setAttribute('class', 'radar-polygon');
        playerPoly.setAttribute('style', `fill: ${hexToRgba(themeColor, 0.25)}; stroke: ${themeColor}`);
        svg.appendChild(playerPoly);

        // Add small glowing vertices dots
        angles.forEach((angle, i) => {
            const r = R * (ratings[i] / 100);
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            dot.setAttribute('cx', x);
            dot.setAttribute('cy', y);
            dot.setAttribute('r', '2.5');
            dot.setAttribute('fill', '#ffffff');
            dot.setAttribute('stroke', themeColor);
            dot.setAttribute('stroke-width', '1.5');
            svg.appendChild(dot);
        });
    }

    // Helper to convert hex colors to RGBA for semi-transparent radar fill
    function hexToRgba(hex, alpha) {
        // Remove # if present
        hex = hex.replace('#', '');
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // 5. Initialize Widget Clock
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
