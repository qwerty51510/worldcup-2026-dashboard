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
    let currentMatchId = null;
    let tacticalTimeouts = [];

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
            pageSubtitle.innerText = '美加墨世界杯超级比赛日・5场重磅对决深度解析';
        } else if (targetTabId === 'correlation') {
            const corrBtn = document.getElementById('btn-correlation');
            if (corrBtn) corrBtn.classList.add('active');
            pageTitle.innerText = '角球与进攻关联分析';
            pageSubtitle.innerText = '基于2026周期10支球队场均数据的科学实证分析';
            renderCorrelationCharts();
        } else if (targetTabId === 'match-details' && matchId) {
            currentMatchId = matchId;
            resetTacticalPitch(matchId);
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

    // Bind tactics board drill buttons and badges
    const btnDrillOffense = document.getElementById('btn-drill-offense');
    const btnDrillDefense = document.getElementById('btn-drill-defense');
    const btnDrillReset = document.getElementById('btn-drill-reset');

    if (btnDrillOffense) {
        btnDrillOffense.addEventListener('click', () => {
            if (currentMatchId) runTacticalAnimation(currentMatchId, 'offense');
        });
    }
    if (btnDrillDefense) {
        btnDrillDefense.addEventListener('click', () => {
            if (currentMatchId) runTacticalAnimation(currentMatchId, 'defense');
        });
    }
    if (btnDrillReset) {
        btnDrillReset.addEventListener('click', () => {
            if (currentMatchId) resetTacticalPitch(currentMatchId);
        });
    }

    const badgeHome = document.getElementById('form-badge-home');
    const badgeAway = document.getElementById('form-badge-away');

    if (badgeHome) {
        badgeHome.addEventListener('click', () => {
            if (currentMatchId) {
                const teamName = matchData[currentMatchId].teams.home.name;
                const formation = matchData[currentMatchId].tactics.homeForm;
                openFormationModal(formation, teamName);
            }
        });
    }
    if (badgeAway) {
        badgeAway.addEventListener('click', () => {
            if (currentMatchId) {
                const teamName = matchData[currentMatchId].teams.away.name;
                const formation = matchData[currentMatchId].tactics.awayForm;
                openFormationModal(formation, teamName);
            }
        });
    }

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
            nodeG.setAttribute('data-name', p.name);
            
            // Set glowing color based on team (home is blue, away is theme-specific)
            let color = '#3b82f6'; // Home Blue
            if (p.type === 'away') {
                if (matchId === 'fra-sen') color = '#10b981'; // Senegal green
                else if (matchId === 'irq-nor') color = '#ef4444'; // Norway red
                else if (matchId === 'arg-alg') color = '#f59e0b'; // Algeria yellow
                else if (matchId === 'aut-jor') color = '#ef4444'; // Jordan red
                else if (matchId === 'por-cod') color = '#f59e0b'; // Congo DR yellow
                else if (matchId === 'eng-cro') color = '#ef4444'; // Croatia red
                else if (matchId === 'gha-pan') color = '#ef4444'; // Panama red
                else if (matchId === 'uzb-col') color = '#f59e0b'; // Colombia yellow
                else if (matchId === 'cze-rsa') color = '#10b981'; // South Africa green
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

    // 4.5 Tactics Drill Database & Animations
    const TACTICAL_DB = {
        '4-3-3': {
            title: '4-3-3 阵型',
            subtitle: '攻守平衡与边路突破的现代足球模板',
            characteristics: '注重场地宽度的拉开，前场三叉戟能实现高强度的就地压迫。中场三人组能够灵活切换单双后腰，兼顾控球与拦截，防守时落位极具层次感，能迅速拉宽进攻路线。',
            offensePlay: '通过肋部套边重叠，由翼锋内切或下底传中寻找包抄点，配合中场插上远射。',
            defensePlay: '中前场高位就地反抢，封锁对方边卫起动通道，以攻代守。',
            disruption: '能有效阻断对手在后场平稳起步、中场平推以及弱侧的慢速大范围横向转移。',
            keypoint: '单后腰 (DM) 的横向跑动拦截与落位防守至关重要（例如法国的坎特/琼阿梅尼）。若单后腰被打穿，防线将直接面对对手反击的直塞冲击。'
        },
        '4-2-3-1': {
            title: '4-2-3-1 阵型',
            subtitle: '后腰屏障深厚、层次分明的攻守阵型',
            characteristics: '双防守后腰提供扎实的中路拦截屏障，极大释放两侧边后卫的前插能力。前场四人组在中前腰的梳理下，可以开展极其流畅的传跑配合，中路及肋部威胁极大。',
            offensePlay: '前腰前场派牌，翼锋肋部内切，边后卫插上套边套底，单中锋穿插做球。',
            defensePlay: '双后腰在门前立起高墙，边路采取延缓退守，压缩大禁区前沿及弧顶空间。',
            disruption: '能有效阻断对手在禁区前沿的中路直塞、弧顶倒三角回传以及半肋部的斜塞传跑。',
            keypoint: '前腰 (AM) 的致命分球与无球拼抢、以及双后腰的默契滑铲移动是阵型能否高效运转的命脉所在（例如挪威战中的伊拉克、阿根廷战中的阿尔及利亚）。'
        },
        '4-4-2': {
            title: '4-4-2 阵型',
            subtitle: '经典、结构扁平而攻守极其严密的均衡阵型',
            characteristics: '两条四人防线形成极其规则的网格覆盖，空间压缩力极强。进攻时主要依靠双中锋一高一快或一前一后打乱对方站位，两翼的攻防覆盖面积极大，容错率极高。',
            offensePlay: '通过中场横向过渡，快速分边利用边路传中，或中路双中锋做球撕扯打身后。',
            defensePlay: '两条规则的防线整体横移、前后压迫，封锁两条防线之间的空当。',
            disruption: '能有效阻断对手的肋部套边配合、后腰插上直塞以及边锋在中路的内切路径。',
            keypoint: '双中场/边前卫 (LM/RM) 的往复折返奔跑体能和双中锋在前场的交叉跑位扯动是打破僵局的命脉（例如阿根廷的梅西/劳塔罗双中锋绞杀）。'
        },
        '4-2-2-2': {
            title: '4-2-2-2 阵型',
            subtitle: '朗尼克极速 Gegenpressing 的疯狂乱战大杀器',
            characteristics: '中路极度拥挤，双防守后腰配双前腰，完全放弃纯粹的边路，将兵力全部集结于中路和肋部。追求在前场断球后的3秒内直接刺入禁区形成射门，节奏极其狂暴。',
            offensePlay: '前场就地多人疯狂夹攻断球，快速出球找斜线插上的双中锋完成致命一击。',
            defensePlay: '疯狗式贴身逼抢（Gegenpressing），整体高位压迫，在中场破坏对手出球路线。',
            disruption: '强力阻断对手的后防线出球、守门员手抛球策划以及后场向中场的地面出球传递。',
            keypoint: '双前腰 (AM) 与防守中场的高强度跑动逼抢与就地断球快下是此阵型运转的核心（例如奥地利萨比策/莱默尔的中前场窒息绞杀）。'
        },
        '5-4-1': {
            title: '5-4-1 阵型',
            subtitle: '宽度与纵深防守锁死的低位铁血大巴',
            characteristics: '五后卫封死整个大禁区线，三中卫防空与门前卡位能力拉满，两条防线距离极近，对手极难打穿纵深。进攻端完全寄托于极速快马和定位球争顶。',
            offensePlay: '后场长传打身后，或者利用极速边路单兵突袭完成致命反击，多打一剑穿心。',
            defensePlay: '低位极其密集的双层屏障，翼卫随时落位成五后卫，彻底压缩门前空当。',
            disruption: '有效切断对手在禁区内的传中争顶、边路肋部的倒三角传中以及中卫起脚打门路线。',
            keypoint: '三中卫 (CB) 的解围卡位和两侧翼卫 (WB) 的长跑体能是维系防线不塌方的死穴（例如约旦队的低位防守大巴）。'
        }
    };

    const TACTICAL_DRILLS = {
        'fra-sen': {
            'offense': {
                caption: '法国 4-3-3 经典进攻配合：边路突击与门前包抄',
                commentary: [
                    { time: 0, text: '【拉比奥中场起动策划，直推前场肋部】' },
                    { time: 1000, text: '【登贝莱高速套边接球，起脚低平球传中！】' },
                    { time: 2200, text: '【姆巴佩门前冷静包抄，推射破门！⚽ 法国 1-0 塞内加尔】' }
                ],
                players: {
                    '迈尼昂': { x: 180, y: 460 },
                    '孔德': { x: 70, y: 390 },
                    '萨利巴': { x: 140, y: 400 },
                    '于帕': { x: 220, y: 400 },
                    '特奥': { x: 290, y: 390 },
                    '琼阿梅尼': { x: 110, y: 300 },
                    '坎特': { x: 250, y: 320 },
                    '拉比奥': { x: 160, y: 230 },
                    '登贝莱': { x: 60, y: 120 },
                    '奥利塞': { x: 280, y: 170 },
                    '姆巴佩': { x: 180, y: 95 },
                    // Opponent defenders shift to cover
                    '门迪': { x: 170, y: 45 },
                    '库利巴利': { x: 160, y: 95 },
                    '迪亚洛': { x: 200, y: 100 },
                    '雅各布斯': { x: 75, y: 115 },
                    '萨巴利': { x: 275, y: 115 }
                },
                passes: [
                    { from: { x: 180, y: 280 }, to: { x: 60, y: 120 }, duration: 1000, delay: 0 },
                    { from: { x: 60, y: 120 }, to: { x: 180, y: 95 }, duration: 1200, delay: 1000 },
                    { from: { x: 180, y: 95 }, to: { x: 180, y: 15 }, duration: 500, delay: 2200 }
                ],
                runs: [
                    { name: '登贝莱', from: { x: 70, y: 210 }, to: { x: 60, y: 120 }, duration: 1000, delay: 0 },
                    { name: '姆巴佩', from: { x: 180, y: 170 }, to: { x: 180, y: 95 }, duration: 1000, delay: 500 }
                ]
            },
            'defense': {
                caption: '塞内加尔 4-3-3 深度防守阻断与快下反击',
                commentary: [
                    { time: 0, text: '【法国队拉比奥横敲奥利塞，尝试直塞禁区弧顶】' },
                    { time: 1000, text: '【塞内加尔双人包夹封堵，盖耶倒地滑铲抢断！🛡️】' },
                    { time: 2200, text: '【得球后第一秒直传发起快攻，打特奥压上的空当寻找马内！】' }
                ],
                players: {
                    '拉比奥': { x: 180, y: 260 },
                    '奥利塞': { x: 250, y: 210 },
                    '姆巴佩': { x: 180, y: 170 },
                    // Defending team blocks
                    '门迪': { x: 180, y: 40 },
                    '库利巴利': { x: 160, y: 110 },
                    '迪亚洛': { x: 200, y: 110 },
                    '雅各布斯': { x: 80, y: 120 },
                    '萨巴利': { x: 280, y: 120 },
                    '盖耶': { x: 180, y: 165 },
                    'P.萨尔': { x: 220, y: 160 },
                    'L.卡马拉': { x: 150, y: 175 },
                    '马内': { x: 70, y: 220 },
                    'I.萨尔': { x: 290, y: 240 },
                    '杰克逊': { x: 180, y: 240 }
                },
                passes: [
                    { from: { x: 180, y: 280 }, to: { x: 250, y: 210 }, duration: 1000, delay: 0 },
                    { from: { x: 250, y: 210 }, to: { x: 180, y: 165 }, duration: 1000, delay: 1000 },
                    { from: { x: 180, y: 165 }, to: { x: 70, y: 220 }, duration: 1000, delay: 2200 }
                ],
                runs: [
                    { name: '盖耶', from: { x: 120, y: 170 }, to: { x: 180, y: 165 }, duration: 800, delay: 1000 },
                    { name: '马内', from: { x: 80, y: 270 }, to: { x: 70, y: 220 }, duration: 1000, delay: 1500 }
                ]
            }
        },
        'irq-nor': {
            'offense': {
                caption: '挪威 4-3-3 肋部渗透与哈兰德门前终结',
                commentary: [
                    { time: 0, text: '【厄德高右肋拿球观察，送出手术刀般精妙低传】' },
                    { time: 1000, text: '【哈兰德依住防守中卫，强行前插获得单刀门前机会】' },
                    { time: 2200, text: '【哈兰德倒地铲射打球门近角！球进了！⚽ 挪威 1-0 伊拉克】' }
                ],
                players: {
                    '厄德高': { x: 210, y: 180 },
                    '哈兰德': { x: 180, y: 100 },
                    '瑟洛特': { x: 260, y: 140 },
                    '努萨': { x: 100, y: 150 },
                    // Opponent defenders
                    '哈希姆': { x: 170, y: 45 },
                    '苏拉卡': { x: 160, y: 105 },
                    '纳蒂克': { x: 195, y: 110 },
                    '亚希亚': { x: 70, y: 120 },
                    'H.阿里': { x: 290, y: 120 }
                },
                passes: [
                    { from: { x: 180, y: 210 }, to: { x: 180, y: 100 }, duration: 1200, delay: 0 },
                    { from: { x: 180, y: 100 }, to: { x: 180, y: 15 }, duration: 500, delay: 2200 }
                ],
                runs: [
                    { name: '哈兰德', from: { x: 180, y: 310 }, to: { x: 180, y: 100 }, duration: 1200, delay: 0 },
                    { name: '瑟洛特', from: { x: 290, y: 270 }, to: { x: 260, y: 140 }, duration: 1000, delay: 0 }
                ]
            },
            'defense': {
                caption: '伊拉克 4-2-3-1 低位防守落位与长传阻击',
                commentary: [
                    { time: 0, text: '【挪威中场贝尔格向前做球，准备塞给肋部空切的努萨】' },
                    { time: 1000, text: '【伊拉克后腰阿姆马里卡住内线，直接大脚断下并完成解围！🛡️】' },
                    { time: 2200, text: '【解围球准确找到前场高中锋侯赛因，伊拉克就地发起防反！】' }
                ],
                players: {
                    // Iraq defending
                    '阿姆马里': { x: 140, y: 220 },
                    '拉希德': { x: 220, y: 240 },
                    '侯赛因': { x: 180, y: 310 },
                    '苏拉卡': { x: 140, y: 140 },
                    '纳蒂克': { x: 220, y: 140 },
                    '亚希亚': { x: 70, y: 130 },
                    'H.阿里': { x: 290, y: 130 }
                },
                passes: [
                    { from: { x: 120, y: 170 }, to: { x: 140, y: 220 }, duration: 1000, delay: 0 },
                    { from: { x: 140, y: 220 }, to: { x: 180, y: 310 }, duration: 1200, delay: 1800 }
                ],
                runs: [
                    { name: '阿姆马里', from: { x: 120, y: 330 }, to: { x: 140, y: 220 }, duration: 1000, delay: 0 },
                    { name: '侯赛因', from: { x: 180, y: 180 }, to: { x: 180, y: 310 }, duration: 1000, delay: 500 }
                ]
            }
        },
        'arg-alg': {
            'offense': {
                caption: '阿根廷 4-4-2 短传渗透配合：中路小范围绣花与破门',
                commentary: [
                    { time: 0, text: '【恩佐中路推进，短斜传给接应的梅西】' },
                    { time: 1000, text: '【梅西虚晃突破，与劳塔罗进行撞墙配合，斜塞给侧向插上的麦卡】' },
                    { time: 2200, text: '【麦卡利斯特禁区边缘脚弓推射死角挂网！⚽ 阿根廷 1-0 阿尔及利亚】' }
                ],
                players: {
                    '恩佐': { x: 170, y: 240 },
                    '梅西': { x: 200, y: 140 },
                    '劳塔罗': { x: 140, y: 100 },
                    '麦卡': { x: 90, y: 130 },
                    // Opponent defenders
                    '本博特': { x: 170, y: 45 },
                    '本塞拜尼': { x: 140, y: 105 },
                    '贝莱德': { x: 200, y: 105 }
                },
                passes: [
                    { from: { x: 180, y: 320 }, to: { x: 200, y: 140 }, duration: 1000, delay: 0 },
                    { from: { x: 200, y: 140 }, to: { x: 140, y: 100 }, duration: 800, delay: 1000 },
                    { from: { x: 140, y: 100 }, to: { x: 90, y: 130 }, duration: 800, delay: 1800 },
                    { from: { x: 90, y: 130 }, to: { x: 180, y: 15 }, duration: 600, delay: 2600 }
                ],
                runs: [
                    { name: '梅西', from: { x: 240, y: 195 }, to: { x: 200, y: 140 }, duration: 1000, delay: 0 },
                    { name: '麦卡', from: { x: 100, y: 330 }, to: { x: 90, y: 130 }, duration: 1200, delay: 500 }
                ]
            },
            'defense': {
                caption: '阿尔及利亚 4-2-3-1 双后腰移动合围与断球',
                commentary: [
                    { time: 0, text: '【阿根廷德保罗试图斜传寻找中路活动的梅西】' },
                    { time: 1000, text: '【阿尔及利亚后腰班塔莱布与泽鲁基形成夹攻，将球破坏！🛡️】' },
                    { time: 2200, text: '【抢断后快速分球给右翼马赫雷斯，顺势铺开反击！】' }
                ],
                players: {
                    // Defending team Algeria
                    '班塔莱布': { x: 150, y: 220 },
                    '泽鲁基': { x: 210, y: 220 },
                    '马赫雷斯': { x: 290, y: 280 },
                    '艾特努里': { x: 70, y: 150 },
                    '本塞拜尼': { x: 140, y: 140 },
                    '贝莱德': { x: 220, y: 140 }
                },
                passes: [
                    { from: { x: 260, y: 330 }, to: { x: 150, y: 220 }, duration: 1000, delay: 0 },
                    { from: { x: 150, y: 220 }, to: { x: 290, y: 280 }, duration: 1000, delay: 2000 }
                ],
                runs: [
                    { name: '班塔莱布', from: { x: 120, y: 170 }, to: { x: 150, y: 220 }, duration: 800, delay: 0 },
                    { name: '马赫雷斯', from: { x: 300, y: 240 }, to: { x: 290, y: 280 }, duration: 1000, delay: 1000 }
                ]
            }
        },
        'aut-jor': {
            'offense': {
                caption: '奥地利 4-2-2-2 Gegenpressing 抢断反击快下配合',
                commentary: [
                    { time: 0, text: '【约旦后卫传球迟缓，萨比策与莱默尔形成高位夹击将球强行断下！】' },
                    { time: 1000, text: '【断球后瞬间斜塞穿透防线，格雷戈里奇心领神会斜插】' },
                    { time: 2200, text: '【格雷戈里奇禁区左侧左脚怒射破网！⚽ 奥地利 1-0 约旦】' }
                ],
                players: {
                    '萨比策': { x: 160, y: 180 },
                    '莱默尔': { x: 210, y: 200 },
                    '格雷戈里奇': { x: 120, y: 95 },
                    '阿瑙托维奇': { x: 220, y: 100 },
                    // Opponent defenders
                    '阿布莱拉': { x: 180, y: 40 },
                    '阿拉伯': { x: 180, y: 110 }
                },
                passes: [
                    { from: { x: 180, y: 140 }, to: { x: 160, y: 180 }, duration: 800, delay: 0 },
                    { from: { x: 160, y: 180 }, to: { x: 120, y: 95 }, duration: 800, delay: 1000 },
                    { from: { x: 120, y: 95 }, to: { x: 180, y: 15 }, duration: 500, delay: 2200 }
                ],
                runs: [
                    { name: '萨比策', from: { x: 100, y: 250 }, to: { x: 160, y: 180 }, duration: 800, delay: 0 },
                    { name: '格雷戈里奇', from: { x: 130, y: 180 }, to: { x: 120, y: 95 }, duration: 1000, delay: 500 }
                ]
            },
            'defense': {
                caption: '约旦 5-4-1 铁血五后卫落位防御与横移阻断',
                commentary: [
                    { time: 0, text: '【奥地利萨比策分边左翼，维默尔起脚大范围传中】' },
                    { time: 1000, text: '【约旦三中卫体系整体横移，高大中卫阿拉伯禁区内头球解围！🛡️】' },
                    { time: 2200, text: '【翼卫阿布塔哈拿到二点球，大脚解围大范围转移，解围危机！】' }
                ],
                players: {
                    // Defending team Jordan 5-4-1
                    '阿拉伯': { x: 180, y: 120 },
                    '纳赛布': { x: 230, y: 125 },
                    '马里': { x: 130, y: 125 },
                    '阿布塔哈': { x: 70, y: 150 },
                    '哈达德': { x: 290, y: 150 },
                    '拉瓦比德': { x: 150, y: 200 },
                    '阿尔马尔迪': { x: 210, y: 200 }
                },
                passes: [
                    { from: { x: 100, y: 250 }, to: { x: 180, y: 120 }, duration: 1200, delay: 0 },
                    { from: { x: 180, y: 120 }, to: { x: 70, y: 150 }, duration: 800, delay: 1500 },
                    { from: { x: 70, y: 150 }, to: { x: 30, y: 350 }, duration: 1000, delay: 2400 }
                ],
                runs: [
                    { name: '阿拉伯', from: { x: 180, y: 90 }, to: { x: 180, y: 120 }, duration: 800, delay: 500 },
                    { name: '阿布塔哈', from: { x: 40, y: 110 }, to: { x: 70, y: 150 }, duration: 1000, delay: 500 }
                ]
            }
        },
        'por-cod': {
            'offense': {
                caption: '葡萄牙 4-3-3 经典进攻演练：中路渗透与C罗终结',
                commentary: [
                    { time: 0, text: '【B费中圈附近拿球，送出精妙直塞给拉边的莱奥】' },
                    { time: 1000, text: '【莱奥超速带球底线低平传中，横穿刚果金两名中卫！】' },
                    { time: 2200, text: '【C罗拍马赶到冷静垫射破门！⚽ 葡萄牙 1-0 刚果（金）】' }
                ],
                players: {
                    'B费': { x: 130, y: 280 },
                    '莱奥': { x: 50, y: 120 },
                    'C罗': { x: 180, y: 100 },
                    '马苏亚库': { x: 65, y: 120 },
                    '姆本巴': { x: 145, y: 105 },
                    '巴图宾西卡': { x: 215, y: 110 }
                },
                passes: [
                    { from: { x: 110, y: 320 }, to: { x: 50, y: 120 }, duration: 1000, delay: 0 },
                    { from: { x: 50, y: 120 }, to: { x: 180, y: 100 }, duration: 1200, delay: 1000 },
                    { from: { x: 180, y: 100 }, to: { x: 180, y: 15 }, duration: 500, delay: 2200 }
                ],
                runs: [
                    { name: '莱奥', from: { x: 70, y: 210 }, to: { x: 50, y: 120 }, duration: 1000, delay: 0 },
                    { name: 'C罗', from: { x: 180, y: 170 }, to: { x: 180, y: 100 }, duration: 1000, delay: 500 }
                ]
            },
            'defense': {
                caption: '刚果（金）4-2-3-1 中路关门阻断与维萨反击',
                commentary: [
                    { time: 0, text: '【葡萄牙中路直塞，皮克尔移动卡位完成断球】' },
                    { time: 1000, text: '【皮克尔断球后不停球直接斜推左路空当，寻找维萨！】' },
                    { time: 2200, text: '【维萨超速起跑带球斜插防线身后，就地发起强袭！】' }
                ],
                players: {
                    '皮克尔': { x: 180, y: 185 },
                    '维萨': { x: 70, y: 200 },
                    '坎塞洛': { x: 90, y: 280 }
                },
                passes: [
                    { from: { x: 110, y: 320 }, to: { x: 180, y: 185 }, duration: 1000, delay: 0 },
                    { from: { x: 180, y: 185 }, to: { x: 70, y: 200 }, duration: 1000, delay: 1000 }
                ],
                runs: [
                    { name: '皮克尔', from: { x: 240, y: 170 }, to: { x: 180, y: 185 }, duration: 800, delay: 0 },
                    { name: '维萨', from: { x: 80, y: 270 }, to: { x: 70, y: 200 }, duration: 1000, delay: 1000 }
                ]
            }
        },
        'eng-cro': {
            'offense': {
                caption: '英格兰 4-2-3-1 肋部渗透：贝林厄姆喂饼凯恩得手',
                commentary: [
                    { time: 0, text: '【赖斯横敲贝林厄姆，后者持球直插克罗地亚肋部】' },
                    { time: 1000, text: '【贝林厄姆吸引包夹送出直塞，凯恩反越位插上】' },
                    { time: 2200, text: '【凯恩脚弓冷静推射球门死角得手！⚽ 英格兰 1-0 克罗地亚】' }
                ],
                players: {
                    '贝林厄姆': { x: 200, y: 160 },
                    '凯恩': { x: 180, y: 110 },
                    '科瓦契奇': { x: 140, y: 160 },
                    '苏塔洛': { x: 160, y: 115 }
                },
                passes: [
                    { from: { x: 130, y: 330 }, to: { x: 200, y: 160 }, duration: 1000, delay: 0 },
                    { from: { x: 200, y: 160 }, to: { x: 180, y: 110 }, duration: 1000, delay: 1000 },
                    { from: { x: 180, y: 110 }, to: { x: 180, y: 15 }, duration: 500, delay: 2200 }
                ],
                runs: [
                    { name: '贝林厄姆', from: { x: 180, y: 270 }, to: { x: 200, y: 160 }, duration: 1000, delay: 0 },
                    { name: '凯恩', from: { x: 180, y: 180 }, to: { x: 180, y: 110 }, duration: 1000, delay: 500 }
                ]
            },
            'defense': {
                caption: '克罗地亚 4-3-3 经典拦截：中场绞杀洗球',
                commentary: [
                    { time: 0, text: '【英格兰中场传球给福登，科瓦契奇横移拦截将球破坏】' },
                    { time: 1000, text: '【断球后顺势横敲给莫德里奇，魔笛外脚背大范围转移！】' },
                    { time: 2200, text: '【转移准确落到左路快马克拉马里奇脚下，反击大门洞开！】' }
                ],
                players: {
                    '科瓦契奇': { x: 210, y: 210 },
                    '莫德里奇': { x: 170, y: 180 },
                    '克拉马里奇': { x: 80, y: 200 }
                },
                passes: [
                    { from: { x: 180, y: 270 }, to: { x: 210, y: 210 }, duration: 1000, delay: 0 },
                    { from: { x: 210, y: 210 }, to: { x: 170, y: 180 }, duration: 800, delay: 1000 },
                    { from: { x: 170, y: 180 }, to: { x: 80, y: 200 }, duration: 1200, delay: 2200 }
                ],
                runs: [
                    { name: '科瓦契奇', from: { x: 120, y: 170 }, to: { x: 210, y: 210 }, duration: 800, delay: 0 },
                    { name: '克拉马里奇', from: { x: 80, y: 270 }, to: { x: 80, y: 200 }, duration: 1000, delay: 1200 }
                ]
            }
        },
        'gha-pan': {
            'offense': {
                caption: '加纳 4-3-3 突破配合：库杜斯内切喂饼威廉姆斯',
                commentary: [
                    { time: 0, text: '【托马斯传给右肋的库杜斯，库杜斯标志性左脚带球内切】' },
                    { time: 1000, text: '【库杜斯虚晃晃过对方边卫，横敲给中路切入的威廉姆斯】' },
                    { time: 2200, text: '【威廉姆斯抢在三中卫封堵前推射球门远角入网！⚽ 加纳 1-0 巴拿马】' }
                ],
                players: {
                    '库杜斯': { x: 270, y: 200 },
                    '威廉姆斯': { x: 120, y: 110 },
                    '戴维斯': { x: 80, y: 120 },
                    '科尔多瓦': { x: 130, y: 115 }
                },
                passes: [
                    { from: { x: 180, y: 320 }, to: { x: 270, y: 200 }, duration: 1000, delay: 0 },
                    { from: { x: 270, y: 200 }, to: { x: 120, y: 110 }, duration: 1000, delay: 1000 },
                    { from: { x: 120, y: 110 }, to: { x: 180, y: 15 }, duration: 500, delay: 2200 }
                ],
                runs: [
                    { name: '库杜斯', from: { x: 250, y: 320 }, to: { x: 270, y: 200 }, duration: 1000, delay: 0 },
                    { name: '威廉姆斯', from: { x: 70, y: 210 }, to: { x: 120, y: 110 }, duration: 1000, delay: 500 }
                ]
            },
            'defense': {
                caption: '巴拿马 5-4-1 铁血大巴：边路关门与拦截',
                commentary: [
                    { time: 0, text: '【加纳长传试图寻找左翼塞门约，巴拿马整体防线横移】' },
                    { time: 1000, text: '【中卫埃斯科巴高空拦截，力压前锋头球解围！🛡️】' },
                    { time: 2200, text: '【二点球被卡拉斯基利亚稳稳拿到，大脚开向前场发起反击】' }
                ],
                players: {
                    '埃斯科巴': { x: 200, y: 120 },
                    '卡拉斯基利亚': { x: 140, y: 180 },
                    '科尔多瓦': { x: 125, y: 120 }
                },
                passes: [
                    { from: { x: 250, y: 320 }, to: { x: 200, y: 120 }, duration: 1200, delay: 0 },
                    { from: { x: 200, y: 120 }, to: { x: 140, y: 180 }, duration: 800, delay: 1500 }
                ],
                runs: [
                    { name: '埃斯科巴', from: { x: 180, y: 90 }, to: { x: 200, y: 120 }, duration: 800, delay: 500 },
                    { name: '卡拉斯基利亚', from: { x: 130, y: 160 }, to: { x: 140, y: 180 }, duration: 1000, delay: 500 }
                ]
            }
        },
        'uzb-col': {
            'offense': {
                caption: '哥伦比亚 4-3-3 边路狂飙：哈梅斯助攻迪亚斯爆破破门',
                commentary: [
                    { time: 0, text: '【哈梅斯前场斜塞打对方防线身后，路易斯·迪亚斯超速强突】' },
                    { time: 1000, text: '【迪亚斯在左边路接球直接晃过防卫中卫胡桑诺夫，杀入禁区】' },
                    { time: 2200, text: '【迪亚斯内切打门抽射远角死角入网！⚽ 哥伦比亚 1-0 乌兹别克斯坦】' }
                ],
                players: {
                    '詹姆斯': { x: 220, y: 140 },
                    'L.迪亚斯': { x: 120, y: 100 },
                    '胡桑诺夫': { x: 220, y: 120 },
                    '阿舒尔马托夫': { x: 130, y: 115 }
                },
                passes: [
                    { from: { x: 240, y: 170 }, to: { x: 120, y: 100 }, duration: 1000, delay: 0 },
                    { from: { x: 120, y: 100 }, to: { x: 180, y: 15 }, duration: 600, delay: 2200 }
                ],
                runs: [
                    { name: '詹姆斯', from: { x: 240, y: 170 }, to: { x: 220, y: 140 }, duration: 1000, delay: 0 },
                    { name: 'L.迪亚斯', from: { x: 80, y: 270 }, to: { x: 120, y: 100 }, duration: 1200, delay: 0 }
                ]
            },
            'defense': {
                caption: '乌兹别克斯坦 5-4-1 大巴锁死中路与解围',
                commentary: [
                    { time: 0, text: '【哥伦比亚尝试斜传禁区找杜兰，胡桑诺夫倒地滑铲抢断】' },
                    { time: 1000, text: '【抢断后大脚解围长传给肖穆罗多夫，中亚狼反击第一点起航！】' },
                    { time: 2200, text: '【肖穆罗多夫高空停球卡死防线，稳稳控制二点球】' }
                ],
                players: {
                    '胡桑诺夫': { x: 190, y: 380 },
                    '肖穆罗多夫': { x: 180, y: 230 }
                },
                passes: [
                    { from: { x: 240, y: 170 }, to: { x: 190, y: 380 }, duration: 1000, delay: 0 },
                    { from: { x: 190, y: 380 }, to: { x: 180, y: 230 }, duration: 1200, delay: 1000 }
                ],
                runs: [
                    { name: '胡桑诺夫', from: { x: 250, y: 400 }, to: { x: 190, y: 380 }, duration: 800, delay: 0 },
                    { name: '肖穆罗多夫', from: { x: 180, y: 180 }, to: { x: 180, y: 230 }, duration: 1000, delay: 500 }
                ]
            }
        },
        'cze-rsa': {
            'offense': {
                caption: '捷克 4-2-3-1 经典进攻：普罗沃德长传斜插找希克',
                commentary: [
                    { time: 0, text: '【索切克中场横传，普罗沃德带球前插斜吊禁区】' },
                    { time: 1000, text: '【希克高高跃起泰山压顶凌空抽射打球门死角！】' },
                    { time: 2200, text: '【希克重炮破网！⚽ 捷克 1-0 南非】' }
                ],
                players: {
                    '普罗沃德': { x: 260, y: 210 },
                    '希克': { x: 180, y: 100 },
                    '科夸纳': { x: 150, y: 110 }
                },
                passes: [
                    { from: { x: 130, y: 330 }, to: { x: 260, y: 210 }, duration: 1000, delay: 0 },
                    { from: { x: 260, y: 210 }, to: { x: 180, y: 100 }, duration: 1000, delay: 1000 },
                    { from: { x: 180, y: 100 }, to: { x: 180, y: 15 }, duration: 500, delay: 2200 }
                ],
                runs: [
                    { name: '普罗沃德', from: { x: 230, y: 330 }, to: { x: 260, y: 210 }, duration: 1000, delay: 0 },
                    { name: '希克', from: { x: 180, y: 180 }, to: { x: 180, y: 100 }, duration: 1000, delay: 500 }
                ]
            },
            'defense': {
                caption: '南非 4-2-3-1 经典快下：陶左翼反击单刀突袭',
                commentary: [
                    { time: 0, text: '【捷克进攻被南非莫科纳中场滑铲干净封堵拦截】' },
                    { time: 1000, text: '【得球后瞬间斜塞给左翼超速插上的珀西·陶！】' },
                    { time: 2200, text: '【陶甩开防守直插底线，南非发起闪电地面反击！】' }
                ],
                players: {
                    '莫科纳': { x: 175, y: 230 },
                    '陶': { x: 60, y: 180 }
                },
                passes: [
                    { from: { x: 230, y: 330 }, to: { x: 175, y: 230 }, duration: 1000, delay: 0 },
                    { from: { x: 175, y: 230 }, to: { x: 60, y: 180 }, duration: 1000, delay: 1000 }
                ],
                runs: [
                    { name: '莫科纳', from: { x: 180, y: 200 }, to: { x: 175, y: 230 }, duration: 800, delay: 0 },
                    { name: '陶', from: { x: 80, y: 270 }, to: { x: 60, y: 180 }, duration: 1000, delay: 1000 }
                ]
            }
        }
    };

    function clearTacticalTimeouts() {
        tacticalTimeouts.forEach(t => clearTimeout(t));
        tacticalTimeouts = [];
    }

    function runTacticalAnimation(matchId, type) {
        clearTacticalTimeouts();

        const matchInfo = matchData[matchId];
        if (!matchInfo) return;

        // Reset players to initial static coordinates immediately so we start from defaults
        matchInfo.tactics.players.forEach(p => {
            const playerNode = document.querySelector(`.pitch-node[data-name="${p.name}"]`);
            if (playerNode) {
                const circle = playerNode.querySelector('circle');
                const texts = playerNode.querySelectorAll('text');
                circle.setAttribute('cx', p.x);
                circle.setAttribute('cy', p.y);
                if (texts[0]) {
                    texts[0].setAttribute('x', p.x);
                    texts[0].setAttribute('y', p.y + 3);
                }
                if (texts[1]) {
                    texts[1].setAttribute('x', p.x);
                    texts[1].setAttribute('y', p.y + 16);
                }
            }
        });

        const linesGroup = document.getElementById('pitch-animation-lines');
        if (linesGroup) linesGroup.innerHTML = '';
        const ball = document.getElementById('pitch-animation-ball');
        if (ball) ball.style.display = 'none';

        const drill = TACTICAL_DRILLS[matchId] ? TACTICAL_DRILLS[matchId][type] : null;
        if (!drill) return;

        const captionContainer = document.getElementById('tactics-live-caption');
        const captionText = document.getElementById('tactics-live-text');
        if (captionContainer && captionText) {
            captionContainer.style.display = 'flex';
            captionText.innerText = '准备开始演练...';
        }

        // Delay starting movements to allow DOM layout coordinates to settle
        const initTimeout = setTimeout(() => {
            // A. Move players to tactical animation positions
            Object.keys(drill.players).forEach(pName => {
                const playerNode = document.querySelector(`.pitch-node[data-name="${pName}"]`);
                if (playerNode) {
                    const targetCoords = drill.players[pName];
                    const circle = playerNode.querySelector('circle');
                    const texts = playerNode.querySelectorAll('text');
                    circle.setAttribute('cx', targetCoords.x);
                    circle.setAttribute('cy', targetCoords.y);
                    if (texts[0]) {
                        texts[0].setAttribute('x', targetCoords.x);
                        texts[0].setAttribute('y', targetCoords.y + 3);
                    }
                    if (texts[1]) {
                        texts[1].setAttribute('x', targetCoords.x);
                        texts[1].setAttribute('y', targetCoords.y + 16);
                    }
                }
            });

            // B. Draw running lines
            if (drill.runs && linesGroup) {
                drill.runs.forEach(run => {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('class', 'run-line');
                    line.setAttribute('x1', run.from.x);
                    line.setAttribute('y1', run.from.y);
                    line.setAttribute('x2', run.to.x);
                    line.setAttribute('y2', run.to.y);
                    linesGroup.appendChild(line);
                });
            }

            // C. Play ball passes
            if (drill.passes && ball && linesGroup) {
                ball.style.display = 'block';
                ball.style.transition = 'none';
                ball.setAttribute('cx', drill.passes[0].from.x);
                ball.setAttribute('cy', drill.passes[0].from.y);

                ball.getBoundingClientRect(); // force reflow

                drill.passes.forEach(pass => {
                    const pTimeout = setTimeout(() => {
                        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                        line.setAttribute('class', 'pass-line');
                        line.setAttribute('x1', pass.from.x);
                        line.setAttribute('y1', pass.from.y);
                        line.setAttribute('x2', pass.to.x);
                        line.setAttribute('y2', pass.to.y);
                        linesGroup.appendChild(line);

                        ball.style.transition = `cx ${pass.duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), cy ${pass.duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
                        ball.setAttribute('cx', pass.to.x);
                        ball.setAttribute('cy', pass.to.y);
                    }, pass.delay);
                    tacticalTimeouts.push(pTimeout);
                });
            }

            // D. Commentary subtitle updates
            if (drill.commentary && captionText) {
                drill.commentary.forEach(comment => {
                    const cTimeout = setTimeout(() => {
                        captionText.innerText = comment.text;
                    }, comment.time);
                    tacticalTimeouts.push(cTimeout);
                });
            }
        }, 150);
        tacticalTimeouts.push(initTimeout);
    }

    function resetTacticalPitch(matchId) {
        clearTacticalTimeouts();
        
        const captionContainer = document.getElementById('tactics-live-caption');
        if (captionContainer) captionContainer.style.display = 'none';
        
        const linesGroup = document.getElementById('pitch-animation-lines');
        if (linesGroup) linesGroup.innerHTML = '';
        
        const ball = document.getElementById('pitch-animation-ball');
        if (ball) ball.style.display = 'none';

        // Re-render original coordinates
        renderMatchDetails(matchId);
    }

    // Formation Modal Details Display
    const formationModalEl = document.getElementById('formation-modal');
    const formationModalCloseBtn = document.getElementById('formation-modal-close-btn');

    function openFormationModal(formationName, teamName) {
        if (!formationModalEl) return;
        
        const data = TACTICAL_DB[formationName];
        if (!data) return;

        document.getElementById('formation-modal-title').innerText = `${teamName} ${data.title}`;
        document.getElementById('formation-modal-subtitle').innerText = data.subtitle;
        document.getElementById('formation-characteristics').innerText = data.characteristics;
        document.getElementById('formation-offense-play').innerText = data.offensePlay;
        document.getElementById('formation-defense-play').innerText = data.defensePlay;
        document.getElementById('formation-disruption').innerText = data.disruption;
        document.getElementById('formation-keypoint').innerText = data.keypoint;

        formationModalEl.classList.add('active');
    }

    function closeFormationModal() {
        if (formationModalEl) formationModalEl.classList.remove('active');
    }

    if (formationModalCloseBtn) {
        formationModalCloseBtn.addEventListener('click', closeFormationModal);
    }
    
    if (formationModalEl) {
        formationModalEl.addEventListener('click', (e) => {
            if (e.target === formationModalEl) {
                closeFormationModal();
            }
        });
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
