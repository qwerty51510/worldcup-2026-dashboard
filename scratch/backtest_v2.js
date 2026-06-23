/**
 * 预测模型回测 v2 — 多维度独立评估
 * 
 * 改进点：
 * 1. 不用单一综合得分，而是分维度独立评估
 * 2. 重点关注：方向命中率、让分盘口命中率、大小球命中率
 * 3. 对"原本偏离最大的场次"做专项分析
 * 4. 确保系数不会让原本命中的场次变差
 */

const matches = [
  { id: 'fra-sen', home: '法国', away: '塞内加尔', homeGoalsAvg: 2.8, awayGoalsAvg: 1.8, homeShotConv: 16.2, awayShotConv: 13.5, homePoss: 60.5, awayPoss: 52.8, polyHome: 72, polyDraw: 18, polyAway: 10, awayForm: '4-3-3', firstH: null, firstA: null, foulsH: 12.5, foulsA: 13.8, ycH: 1.8, ycA: 2.0, gkH: 72, gkA: 68, hostAdv: false, predicted: [2,0], actual: [3,1] },
  { id: 'irq-nor', home: '伊拉克', away: '挪威', homeGoalsAvg: 1.2, awayGoalsAvg: 2.2, homeShotConv: 12.5, awayShotConv: 15.8, homePoss: 44.5, awayPoss: 54.2, polyHome: 8, polyDraw: 17, polyAway: 75, awayForm: '4-3-3', firstH: null, firstA: null, foulsH: 15.2, foulsA: 11.0, ycH: 2.4, ycA: 1.5, gkH: 62, gkA: 74, hostAdv: false, predicted: [0,3], actual: [1,4] },
  { id: 'arg-alg', home: '阿根廷', away: '阿尔及利亚', homeGoalsAvg: 2.8, awayGoalsAvg: 1.6, homeShotConv: 16.5, awayShotConv: 13.2, homePoss: 62.4, awayPoss: 50.5, polyHome: 78, polyDraw: 15, polyAway: 7, awayForm: '4-2-3-1', firstH: null, firstA: null, foulsH: 11.0, foulsA: 14.5, ycH: 1.6, ycA: 2.2, gkH: 76, gkA: 65, hostAdv: false, predicted: [2,0], actual: [3,0] },
  { id: 'aut-jor', home: '奥地利', away: '约旦', homeGoalsAvg: 1.8, awayGoalsAvg: 1.0, homeShotConv: 13.8, awayShotConv: 10.5, homePoss: 52.5, awayPoss: 38.0, polyHome: 65, polyDraw: 22, polyAway: 13, awayForm: '5-4-1', firstH: null, firstA: null, foulsH: 13.0, foulsA: 15.5, ycH: 2.0, ycA: 2.5, gkH: 70, gkA: 60, hostAdv: false, predicted: [2,1], actual: [3,1] },
  { id: 'por-cod', home: '葡萄牙', away: '刚果金', homeGoalsAvg: 2.6, awayGoalsAvg: 1.2, homeShotConv: 14.8, awayShotConv: 11.5, homePoss: 60.4, awayPoss: 42.0, polyHome: 75, polyDraw: 17, polyAway: 8, awayForm: '4-2-3-1', firstH: null, firstA: null, foulsH: 11.5, foulsA: 16.0, ycH: 1.7, ycA: 2.6, gkH: 73, gkA: 71, hostAdv: false, predicted: [3,1], actual: [1,1] },
  { id: 'eng-cro', home: '英格兰', away: '克罗地亚', homeGoalsAvg: 2.4, awayGoalsAvg: 1.6, homeShotConv: 15.2, awayShotConv: 13.0, homePoss: 58.0, awayPoss: 55.0, polyHome: 60, polyDraw: 24, polyAway: 16, awayForm: '4-3-3', firstH: null, firstA: null, foulsH: 10.5, foulsA: 13.0, ycH: 1.5, ycA: 2.0, gkH: 74, gkA: 68, hostAdv: false, predicted: [2,1], actual: [4,2] },
  { id: 'gha-pan', home: '加纳', away: '巴拿马', homeGoalsAvg: 1.4, awayGoalsAvg: 0.8, homeShotConv: 12.0, awayShotConv: 9.5, homePoss: 52.0, awayPoss: 40.0, polyHome: 55, polyDraw: 28, polyAway: 17, awayForm: '5-4-1', firstH: null, firstA: null, foulsH: 14.0, foulsA: 16.5, ycH: 2.2, ycA: 2.8, gkH: 68, gkA: 66, hostAdv: false, predicted: [1,0], actual: [1,0] },
  { id: 'uzb-col', home: '乌兹别克', away: '哥伦比亚', homeGoalsAvg: 1.4, awayGoalsAvg: 2.2, homeShotConv: 12.5, awayShotConv: 14.8, homePoss: 45.0, awayPoss: 58.0, polyHome: 12, polyDraw: 22, polyAway: 66, awayForm: '4-2-3-1', firstH: null, firstA: null, foulsH: 14.0, foulsA: 12.5, ycH: 2.2, ycA: 1.8, gkH: 65, gkA: 72, hostAdv: false, predicted: [0,2], actual: [1,3] },
  { id: 'cze-rsa', home: '捷克', away: '南非', homeGoalsAvg: 1.4, awayGoalsAvg: 1.2, homeShotConv: 12.8, awayShotConv: 11.5, homePoss: 50.0, awayPoss: 48.0, polyHome: 42, polyDraw: 30, polyAway: 28, awayForm: '4-3-3', firstH: null, firstA: null, foulsH: 13.0, foulsA: 14.0, ycH: 2.0, ycA: 2.2, gkH: 70, gkA: 69, hostAdv: false, predicted: [1,1], actual: [1,1] },
  { id: 'sui-bih', home: '瑞士', away: '波黑', homeGoalsAvg: 1.8, awayGoalsAvg: 1.4, homeShotConv: 13.5, awayShotConv: 12.0, homePoss: 55.0, awayPoss: 48.0, polyHome: 55, polyDraw: 26, polyAway: 19, awayForm: '4-3-3', firstH: null, firstA: null, foulsH: 12.0, foulsA: 15.5, ycH: 1.8, ycA: 2.5, gkH: 72, gkA: 67, hostAdv: false, predicted: [2,1], actual: [4,1] },
  { id: 'can-qat', home: '加拿大', away: '卡塔尔', homeGoalsAvg: 1.6, awayGoalsAvg: 0.6, homeShotConv: 13.0, awayShotConv: 8.5, homePoss: 52.0, awayPoss: 42.0, polyHome: 65, polyDraw: 22, polyAway: 13, awayForm: '5-4-1', firstH: null, firstA: null, foulsH: 12.0, foulsA: 17.0, ycH: 1.8, ycA: 3.0, gkH: 70, gkA: 58, hostAdv: false, predicted: [2,1], actual: [6,0] },
  { id: 'mex-kor', home: '墨西哥', away: '韩国', homeGoalsAvg: 1.4, awayGoalsAvg: 1.6, homeShotConv: 12.5, awayShotConv: 13.0, homePoss: 50.0, awayPoss: 52.0, polyHome: 38, polyDraw: 32, polyAway: 30, awayForm: '4-2-3-1', firstH: null, firstA: null, foulsH: 14.0, foulsA: 12.0, ycH: 2.2, ycA: 1.8, gkH: 72, gkA: 70, hostAdv: true, predicted: [2,2], actual: [1,0] },
  { id: 'uru-kor', home: '乌拉圭', away: '韩国', homeGoalsAvg: 2.0, awayGoalsAvg: 1.6, homeShotConv: 14.0, awayShotConv: 13.0, homePoss: 54.0, awayPoss: 52.0, polyHome: 52, polyDraw: 28, polyAway: 20, awayForm: '4-2-3-1', firstH: null, firstA: null, foulsH: 15.0, foulsA: 12.0, ycH: 2.3, ycA: 1.8, gkH: 70, gkA: 71, hostAdv: false, predicted: [2,1], actual: [1,1] },
  { id: 'bra-hai', home: '巴西', away: '海地', homeGoalsAvg: 2.6, awayGoalsAvg: 0.6, homeShotConv: 15.5, awayShotConv: 8.0, homePoss: 64.0, awayPoss: 32.0, polyHome: 92, polyDraw: 6, polyAway: 2, awayForm: '5-4-1', firstH: 'draw', firstA: 'loss', foulsH: 11.0, foulsA: 16.0, ycH: 1.5, ycA: 2.8, gkH: 75, gkA: 55, hostAdv: false, predicted: [3,0], actual: [3,0] },
  { id: 'usa-aus', home: '美国', away: '澳大利亚', homeGoalsAvg: 1.8, awayGoalsAvg: 1.2, homeShotConv: 13.5, awayShotConv: 11.5, homePoss: 54.0, awayPoss: 46.0, polyHome: 58, polyDraw: 25, polyAway: 17, awayForm: '4-4-2', firstH: 'win', firstA: 'loss', foulsH: 12.0, foulsA: 13.5, ycH: 1.7, ycA: 2.0, gkH: 74, gkA: 67, hostAdv: true, predicted: [2,1], actual: [2,0] },
  { id: 'sco-mar', home: '苏格兰', away: '摩洛哥', homeGoalsAvg: 1.2, awayGoalsAvg: 1.6, homeShotConv: 11.5, awayShotConv: 13.5, homePoss: 48.0, awayPoss: 52.0, polyHome: 30, polyDraw: 32, polyAway: 38, awayForm: '4-3-3', firstH: 'loss', firstA: 'win', foulsH: 13.0, foulsA: 14.5, ycH: 2.0, ycA: 2.2, gkH: 68, gkA: 74, hostAdv: false, predicted: [1,1], actual: [0,1] },
  { id: 'tur-par', home: '土耳其', away: '巴拉圭', homeGoalsAvg: 1.8, awayGoalsAvg: 1.0, homeShotConv: 13.0, awayShotConv: 10.5, homePoss: 56.0, awayPoss: 40.0, polyHome: 62, polyDraw: 22, polyAway: 16, awayForm: '5-4-1', firstH: 'win', firstA: 'loss', foulsH: 14.0, foulsA: 16.0, ycH: 2.2, ycA: 2.6, gkH: 68, gkA: 72, hostAdv: false, predicted: [2,1], actual: [0,1] },
  { id: 'ger-civ', home: '德国', away: '科特迪瓦', homeGoalsAvg: 2.4, awayGoalsAvg: 1.4, homeShotConv: 15.0, awayShotConv: 12.5, homePoss: 62.0, awayPoss: 45.0, polyHome: 68, polyDraw: 20, polyAway: 12, awayForm: '4-3-3', firstH: 'win', firstA: 'loss', foulsH: 10.5, foulsA: 14.5, ycH: 1.5, ycA: 2.3, gkH: 75, gkA: 66, hostAdv: false, predicted: [2,1], actual: [2,1] },
  { id: 'ned-swe', home: '荷兰', away: '瑞典', homeGoalsAvg: 2.2, awayGoalsAvg: 1.4, homeShotConv: 14.5, awayShotConv: 12.0, homePoss: 58.0, awayPoss: 46.0, polyHome: 60, polyDraw: 24, polyAway: 16, awayForm: '4-4-2', firstH: 'win', firstA: 'draw', foulsH: 11.0, foulsA: 13.5, ycH: 1.6, ycA: 2.0, gkH: 73, gkA: 62, hostAdv: false, predicted: [2,2], actual: [5,1] },
  { id: 'ecu-cur', home: '厄瓜多尔', away: '库拉索', homeGoalsAvg: 1.6, awayGoalsAvg: 0.6, homeShotConv: 12.5, awayShotConv: 8.0, homePoss: 58.0, awayPoss: 36.0, polyHome: 78, polyDraw: 15, polyAway: 7, awayForm: '5-4-1', firstH: 'win', firstA: 'loss', foulsH: 13.0, foulsA: 16.0, ycH: 2.0, ycA: 2.5, gkH: 70, gkA: 82, hostAdv: false, predicted: [2,0], actual: [0,0] },
  { id: 'esp-sau', home: '西班牙', away: '沙特', homeGoalsAvg: 3.0, awayGoalsAvg: 0.8, homeShotConv: 17.5, awayShotConv: 9.0, homePoss: 68.0, awayPoss: 30.0, polyHome: 88, polyDraw: 8, polyAway: 4, awayForm: '5-4-1', firstH: 'win', firstA: 'loss', foulsH: 10.0, foulsA: 15.0, ycH: 1.4, ycA: 2.5, gkH: 78, gkA: 58, hostAdv: false, predicted: [2,0], actual: [4,0] },
  { id: 'bel-irn', home: '比利时', away: '伊朗', homeGoalsAvg: 2.0, awayGoalsAvg: 0.8, homeShotConv: 13.5, awayShotConv: 9.5, homePoss: 58.0, awayPoss: 38.0, polyHome: 68, polyDraw: 20, polyAway: 12, awayForm: '5-4-1', firstH: 'win', firstA: 'draw', foulsH: 12.5, foulsA: 15.5, ycH: 2.0, ycA: 2.5, gkH: 71, gkA: 75, hostAdv: false, predicted: [2,1], actual: [0,0] },
  { id: 'uru-cpv', home: '乌拉圭', away: '佛得角', homeGoalsAvg: 2.0, awayGoalsAvg: 1.0, homeShotConv: 14.0, awayShotConv: 10.0, homePoss: 56.0, awayPoss: 42.0, polyHome: 65, polyDraw: 22, polyAway: 13, awayForm: '4-4-2', firstH: 'draw', firstA: 'loss', foulsH: 15.0, foulsA: 14.5, ycH: 2.3, ycA: 2.2, gkH: 68, gkA: 66, hostAdv: false, predicted: [2,0], actual: [2,2] },
  { id: 'tun-jpn', home: '突尼斯', away: '日本', homeGoalsAvg: 1.0, awayGoalsAvg: 2.4, homeShotConv: 10.5, awayShotConv: 15.0, homePoss: 42.0, awayPoss: 60.0, polyHome: 12, polyDraw: 20, polyAway: 68, awayForm: '4-3-3', firstH: 'loss', firstA: 'win', foulsH: 15.0, foulsA: 10.0, ycH: 2.5, ycA: 1.3, gkH: 62, gkA: 76, hostAdv: false, predicted: [0,2], actual: [0,4] },
  { id: 'nzl-egy', home: '新西兰', away: '埃及', homeGoalsAvg: 1.0, awayGoalsAvg: 2.0, homeShotConv: 10.5, awayShotConv: 14.5, homePoss: 42.0, awayPoss: 55.0, polyHome: 18, polyDraw: 27, polyAway: 55, awayForm: '4-3-3', firstH: 'loss', firstA: 'win', foulsH: 13.0, foulsA: 12.0, ycH: 2.0, ycA: 1.8, gkH: 65, gkA: 73, hostAdv: false, predicted: [1,2], actual: [1,3] },
];

// 优化模型预测
function predict(m, p) {
  let hXg = m.homeGoalsAvg;
  let aXg = m.awayGoalsAvg;
  
  // A: 铁桶折损
  const isBus = ['5-4-1','5-3-2'].includes(m.awayForm);
  if (isBus && hXg > aXg) {
    hXg *= p.busBlock;
    aXg *= p.busCounter;
  }
  
  // B: 门将
  const aGkF = 1 - ((m.gkA - 65) / 100) * p.gkW;
  const hGkF = 1 - ((m.gkH - 65) / 100) * p.gkW;
  hXg *= Math.max(0.6, aGkF);
  aXg *= Math.max(0.6, hGkF);
  
  // C: 纪律 (很轻)
  if (m.ycA > 2.3) hXg *= (1 + p.disc);
  if (m.ycH > 2.3) aXg *= (1 + p.disc);
  
  // D: 首战
  if (m.firstH === 'win') hXg *= p.fWin;
  else if (m.firstH === 'draw') hXg *= p.fDraw;
  else if (m.firstH === 'loss') hXg *= p.fLoss;
  if (m.firstA === 'win') aXg *= p.fWin;
  else if (m.firstA === 'draw') aXg *= p.fDraw;
  else if (m.firstA === 'loss') aXg *= p.fLoss;
  
  // E: 极端强弱差
  const polyDiff = Math.abs(m.polyHome - m.polyAway);
  if (polyDiff > 60) {
    if (m.polyHome > m.polyAway) hXg *= p.crush;
    else aXg *= p.crush;
  }
  
  // F: 东道主
  if (m.hostAdv) { hXg *= p.hAdv; aXg *= p.hPen; }
  
  return [Math.max(0, Math.round(hXg)), Math.max(0, Math.round(aXg))];
}

function getDir(s) { return s[0] > s[1] ? 'H' : s[0] < s[1] ? 'A' : 'D'; }
function getHandicap(pred, actual) {
  // 模拟让分：看预测的净胜球方向和实际是否一致
  const pDiff = pred[0] - pred[1];
  const aDiff = actual[0] - actual[1];
  if (pDiff === 0 && aDiff === 0) return true;
  return (pDiff > 0 && aDiff > 0) || (pDiff < 0 && aDiff < 0);
}
function getOU(pred, actual, line = 2.5) {
  const pTotal = pred[0] + pred[1];
  const aTotal = actual[0] + actual[1];
  return (pTotal > line && aTotal > line) || (pTotal <= line && aTotal <= line);
}

// 参数集
const paramSets = [
  { name: '方案D+: 铁桶+门将+轻微纪律+首战 (精调)', p: { busBlock: 0.72, busCounter: 1.10, gkW: 0.18, disc: 0.03, fWin: 1.06, fDraw: 0.94, fLoss: 0.85, crush: 1.15, hAdv: 1.08, hPen: 0.92 } },
  { name: '方案E: 仅铁桶+门将 (极简)', p: { busBlock: 0.75, busCounter: 1.08, gkW: 0.15, disc: 0.00, fWin: 1.00, fDraw: 1.00, fLoss: 1.00, crush: 1.10, hAdv: 1.05, hPen: 0.95 } },
  { name: '方案F: 铁桶+门将+首战 (无纪律)', p: { busBlock: 0.72, busCounter: 1.10, gkW: 0.18, disc: 0.00, fWin: 1.06, fDraw: 0.94, fLoss: 0.85, crush: 1.15, hAdv: 1.08, hPen: 0.92 } },
];

console.log('═'.repeat(95));
console.log('  预测模型回测 v2 — 多维度独立评估 (25 场已结束赛事)');
console.log('═'.repeat(95));

// 基线统计
let bDir = 0, bExact = 0, bHandicap = 0, bOU = 0, bGoalErr = 0;
matches.forEach(m => {
  bDir += getDir(m.predicted) === getDir(m.actual) ? 1 : 0;
  bExact += (m.predicted[0]===m.actual[0] && m.predicted[1]===m.actual[1]) ? 1 : 0;
  bHandicap += getHandicap(m.predicted, m.actual) ? 1 : 0;
  bOU += getOU(m.predicted, m.actual) ? 1 : 0;
  bGoalErr += Math.abs((m.predicted[0]+m.predicted[1]) - (m.actual[0]+m.actual[1]));
});

console.log('\n【基线模型 (当前手动预测)】');
console.log(`  方向命中: ${bDir}/25 (${(bDir/25*100).toFixed(0)}%)`);
console.log(`  完全命中: ${bExact}/25 (${(bExact/25*100).toFixed(0)}%)`);
console.log(`  让分命中: ${bHandicap}/25 (${(bHandicap/25*100).toFixed(0)}%)`);
console.log(`  大小球命中 (2.5): ${bOU}/25 (${(bOU/25*100).toFixed(0)}%)`);
console.log(`  总进球偏差: ${bGoalErr}`);

paramSets.forEach(ps => {
  let oDir = 0, oExact = 0, oHandicap = 0, oOU = 0, oGoalErr = 0;
  let improved = 0, worsened = 0, same = 0;
  const dets = [];
  
  matches.forEach(m => {
    const op = predict(m, ps.p);
    const od = getDir(op) === getDir(m.actual) ? 1 : 0;
    const bd = getDir(m.predicted) === getDir(m.actual) ? 1 : 0;
    oDir += od;
    oExact += (op[0]===m.actual[0] && op[1]===m.actual[1]) ? 1 : 0;
    oHandicap += getHandicap(op, m.actual) ? 1 : 0;
    oOU += getOU(op, m.actual) ? 1 : 0;
    oGoalErr += Math.abs((op[0]+op[1]) - (m.actual[0]+m.actual[1]));
    
    // 场次级比较
    const bGapDir = bd;
    const oGapDir = od;
    const bGapGoal = Math.abs((m.predicted[0]+m.predicted[1]) - (m.actual[0]+m.actual[1]));
    const oGapGoal = Math.abs((op[0]+op[1]) - (m.actual[0]+m.actual[1]));
    const bGapDiff = Math.abs((m.predicted[0]-m.predicted[1]) - (m.actual[0]-m.actual[1]));
    const oGapDiff = Math.abs((op[0]-op[1]) - (m.actual[0]-m.actual[1]));
    
    // 综合变好还是变差 (方向+进球差+总进球 加权)
    const bMetric = bGapDir * 3 - bGapGoal * 0.5 - bGapDiff * 0.5;
    const oMetric = oGapDir * 3 - oGapGoal * 0.5 - oGapDiff * 0.5;
    if (oMetric > bMetric) improved++;
    else if (oMetric < bMetric) worsened++;
    else same++;
    
    dets.push({
      name: `${m.home} vs ${m.away}`,
      actual: m.actual.join('-'),
      base: m.predicted.join('-'),
      opt: op.join('-'),
      baseDir: bd ? '✅' : '❌',
      optDir: od ? '✅' : '❌',
      change: oMetric > bMetric ? '↑' : oMetric < bMetric ? '↓' : '─',
    });
  });
  
  console.log(`\n${'─'.repeat(95)}`);
  console.log(`【${ps.name}】`);
  console.log(`  方向命中: ${oDir}/25 (${(oDir/25*100).toFixed(0)}%)  ${oDir>bDir?'↑ 改善':oDir<bDir?'↓ 变差':'─ 持平'} (基线${bDir})`);
  console.log(`  完全命中: ${oExact}/25                ${oExact>bExact?'↑':oExact<bExact?'↓':'─'} (基线${bExact})`);
  console.log(`  让分命中: ${oHandicap}/25 (${(oHandicap/25*100).toFixed(0)}%)  ${oHandicap>bHandicap?'↑ 改善':oHandicap<bHandicap?'↓ 变差':'─ 持平'} (基线${bHandicap})`);
  console.log(`  大小球命中: ${oOU}/25 (${(oOU/25*100).toFixed(0)}%)  ${oOU>bOU?'↑ 改善':oOU<bOU?'↓ 变差':'─ 持平'} (基线${bOU})`);
  console.log(`  总进球偏差: ${oGoalErr}  ${oGoalErr<bGoalErr?'↑ 改善':oGoalErr>bGoalErr?'↓ 变差':'─ 持平'} (基线${bGoalErr})`);
  console.log(`  逐场: 改善 ${improved} | 变差 ${worsened} | 不变 ${same}`);
  
  // 详细表
  console.log(`\n  ${'对阵'.padEnd(22)} 实际  基线   优化   基线方向 优化方向 趋势`);
  dets.forEach(d => {
    console.log(`  ${d.name.padEnd(20)} ${d.actual.padEnd(5)} ${d.base.padEnd(6)} ${d.opt.padEnd(6)} ${d.baseDir.padEnd(6)}   ${d.optDir.padEnd(6)}   ${d.change}`);
  });
});

// ============================================================
// 单项系数影响隔离测试
// ============================================================
console.log('\n');
console.log('═'.repeat(95));
console.log('  单项系数隔离测试 — 每次只开启一个系数，看单独效果');
console.log('═'.repeat(95));

const isolationTests = [
  { name: '仅铁桶修正', p: { busBlock: 0.72, busCounter: 1.10, gkW: 0, disc: 0, fWin: 1, fDraw: 1, fLoss: 1, crush: 1, hAdv: 1, hPen: 1 } },
  { name: '仅门将修正', p: { busBlock: 1, busCounter: 1, gkW: 0.20, disc: 0, fWin: 1, fDraw: 1, fLoss: 1, crush: 1, hAdv: 1, hPen: 1 } },
  { name: '仅纪律修正', p: { busBlock: 1, busCounter: 1, gkW: 0, disc: 0.05, fWin: 1, fDraw: 1, fLoss: 1, crush: 1, hAdv: 1, hPen: 1 } },
  { name: '仅首战修正', p: { busBlock: 1, busCounter: 1, gkW: 0, disc: 0, fWin: 1.06, fDraw: 0.94, fLoss: 0.85, crush: 1, hAdv: 1, hPen: 1 } },
  { name: '仅碾压上限', p: { busBlock: 1, busCounter: 1, gkW: 0, disc: 0, fWin: 1, fDraw: 1, fLoss: 1, crush: 1.18, hAdv: 1, hPen: 1 } },
  { name: '仅东道主', p: { busBlock: 1, busCounter: 1, gkW: 0, disc: 0, fWin: 1, fDraw: 1, fLoss: 1, crush: 1, hAdv: 1.10, hPen: 0.88 } },
];

isolationTests.forEach(it => {
  let oDir = 0, oOU = 0, oGoalErr = 0;
  matches.forEach(m => {
    const op = predict(m, it.p);
    oDir += getDir(op) === getDir(m.actual) ? 1 : 0;
    oOU += getOU(op, m.actual) ? 1 : 0;
    oGoalErr += Math.abs((op[0]+op[1]) - (m.actual[0]+m.actual[1]));
  });
  const dirDiff = oDir - bDir;
  const ouDiff = oOU - bOU;
  const errDiff = bGoalErr - oGoalErr;
  console.log(`  ${it.name.padEnd(14)}: 方向${oDir}/25(${dirDiff>0?'+'+dirDiff:dirDiff===0?'=':dirDiff}) | 大小球${oOU}/25(${ouDiff>0?'+'+ouDiff:ouDiff===0?'=':ouDiff}) | 进球偏差${oGoalErr}(${errDiff>0?'降'+errDiff:errDiff===0?'=':'升'+Math.abs(errDiff)})`);
});
