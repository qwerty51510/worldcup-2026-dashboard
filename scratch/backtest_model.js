/**
 * 预测模型回测脚本 (Backtesting)
 * 
 * 目的：用 25 场已结束比赛的实际数据，对比：
 *   1. 基线模型 (当前) 的预测精度
 *   2. 优化模型 (加入新系数) 的预测精度
 * 
 * 核心原则：
 *   - 红黄牌是变因，权重不能太大 (≤10%)
 *   - 每个系数都必须有合理的原因
 *   - 如果加入某个系数后整体变差，就不应该采用
 */

// ============================================================
// 1. 全部 25 场已结束比赛的完整数据
// ============================================================
const matches = [
  // 6/17
  {
    id: 'fra-sen-r1', home: '法国', away: '塞内加尔',
    homeGoalsAvg: 2.8, awayGoalsAvg: 1.8,
    homeShotConv: 16.2, awayShotConv: 13.5,
    homePossession: 60.5, awayPossession: 52.8,
    polyHome: 72, polyDraw: 18, polyAway: 10,
    awayFormation: '4-3-3', // 非铁桶
    homeFirstMatchResult: null, awayFirstMatchResult: null, // 首轮
    homeFoulsAvg: 12.5, awayFoulsAvg: 13.8,
    homeYellowAvg: 1.8, awayYellowAvg: 2.0,
    homeGkSaveRate: 72, awayGkSaveRate: 68,
    predicted: [2, 0], actual: [3, 1],
  },
  {
    id: 'irq-nor-r1', home: '伊拉克', away: '挪威',
    homeGoalsAvg: 1.2, awayGoalsAvg: 2.2,
    homeShotConv: 12.5, awayShotConv: 15.8,
    homePossession: 44.5, awayPossession: 54.2,
    polyHome: 8, polyDraw: 17, polyAway: 75,
    awayFormation: '4-3-3',
    homeFirstMatchResult: null, awayFirstMatchResult: null,
    homeFoulsAvg: 15.2, awayFoulsAvg: 11.0,
    homeYellowAvg: 2.4, awayYellowAvg: 1.5,
    homeGkSaveRate: 62, awayGkSaveRate: 74,
    predicted: [0, 3], actual: [1, 4],
  },
  {
    id: 'arg-alg-r1', home: '阿根廷', away: '阿尔及利亚',
    homeGoalsAvg: 2.8, awayGoalsAvg: 1.6,
    homeShotConv: 16.5, awayShotConv: 13.2,
    homePossession: 62.4, awayPossession: 50.5,
    polyHome: 78, polyDraw: 15, polyAway: 7,
    awayFormation: '4-2-3-1',
    homeFirstMatchResult: null, awayFirstMatchResult: null,
    homeFoulsAvg: 11.0, awayFoulsAvg: 14.5,
    homeYellowAvg: 1.6, awayYellowAvg: 2.2,
    homeGkSaveRate: 76, awayGkSaveRate: 65,
    predicted: [2, 0], actual: [3, 0],
  },
  {
    id: 'aut-jor-r1', home: '奥地利', away: '约旦',
    homeGoalsAvg: 1.8, awayGoalsAvg: 1.0,
    homeShotConv: 13.8, awayShotConv: 10.5,
    homePossession: 52.5, awayPossession: 38.0,
    polyHome: 65, polyDraw: 22, polyAway: 13,
    awayFormation: '5-4-1', // 铁桶
    homeFirstMatchResult: null, awayFirstMatchResult: null,
    homeFoulsAvg: 13.0, awayFoulsAvg: 15.5,
    homeYellowAvg: 2.0, awayYellowAvg: 2.5,
    homeGkSaveRate: 70, awayGkSaveRate: 60,
    predicted: [2, 1], actual: [3, 1],
  },
  // 6/18
  {
    id: 'por-cod-r1', home: '葡萄牙', away: '刚果金',
    homeGoalsAvg: 2.6, awayGoalsAvg: 1.2,
    homeShotConv: 14.8, awayShotConv: 11.5,
    homePossession: 60.4, awayPossession: 42.0,
    polyHome: 75, polyDraw: 17, polyAway: 8,
    awayFormation: '4-2-3-1', // 低位大巴
    homeFirstMatchResult: null, awayFirstMatchResult: null,
    homeFoulsAvg: 11.5, awayFoulsAvg: 16.0,
    homeYellowAvg: 1.7, awayYellowAvg: 2.6,
    homeGkSaveRate: 73, awayGkSaveRate: 71, // 刚果门将扑救不错
    predicted: [3, 1], actual: [1, 1],
  },
  {
    id: 'eng-cro-r1', home: '英格兰', away: '克罗地亚',
    homeGoalsAvg: 2.4, awayGoalsAvg: 1.6,
    homeShotConv: 15.2, awayShotConv: 13.0,
    homePossession: 58.0, awayPossession: 55.0,
    polyHome: 60, polyDraw: 24, polyAway: 16,
    awayFormation: '4-3-3',
    homeFirstMatchResult: null, awayFirstMatchResult: null,
    homeFoulsAvg: 10.5, awayFoulsAvg: 13.0,
    homeYellowAvg: 1.5, awayYellowAvg: 2.0,
    homeGkSaveRate: 74, awayGkSaveRate: 68,
    predicted: [2, 1], actual: [4, 2],
  },
  {
    id: 'gha-pan-r1', home: '加纳', away: '巴拿马',
    homeGoalsAvg: 1.4, awayGoalsAvg: 0.8,
    homeShotConv: 12.0, awayShotConv: 9.5,
    homePossession: 52.0, awayPossession: 40.0,
    polyHome: 55, polyDraw: 28, polyAway: 17,
    awayFormation: '5-4-1', // 铁桶
    homeFirstMatchResult: null, awayFirstMatchResult: null,
    homeFoulsAvg: 14.0, awayFoulsAvg: 16.5,
    homeYellowAvg: 2.2, awayYellowAvg: 2.8,
    homeGkSaveRate: 68, awayGkSaveRate: 66,
    predicted: [1, 0], actual: [1, 0],
  },
  {
    id: 'uzb-col-r1', home: '乌兹别克', away: '哥伦比亚',
    homeGoalsAvg: 1.4, awayGoalsAvg: 2.2,
    homeShotConv: 12.5, awayShotConv: 14.8,
    homePossession: 45.0, awayPossession: 58.0,
    polyHome: 12, polyDraw: 22, polyAway: 66,
    awayFormation: '4-2-3-1',
    homeFirstMatchResult: null, awayFirstMatchResult: null,
    homeFoulsAvg: 14.0, awayFoulsAvg: 12.5,
    homeYellowAvg: 2.2, awayYellowAvg: 1.8,
    homeGkSaveRate: 65, awayGkSaveRate: 72,
    predicted: [0, 2], actual: [1, 3],
  },
  {
    id: 'cze-rsa-r1', home: '捷克', away: '南非',
    homeGoalsAvg: 1.4, awayGoalsAvg: 1.2,
    homeShotConv: 12.8, awayShotConv: 11.5,
    homePossession: 50.0, awayPossession: 48.0,
    polyHome: 42, polyDraw: 30, polyAway: 28,
    awayFormation: '4-3-3',
    homeFirstMatchResult: null, awayFirstMatchResult: null,
    homeFoulsAvg: 13.0, awayFoulsAvg: 14.0,
    homeYellowAvg: 2.0, awayYellowAvg: 2.2,
    homeGkSaveRate: 70, awayGkSaveRate: 69,
    predicted: [1, 1], actual: [1, 1],
  },
  {
    id: 'sui-bih-r1', home: '瑞士', away: '波黑',
    homeGoalsAvg: 1.8, awayGoalsAvg: 1.4,
    homeShotConv: 13.5, awayShotConv: 12.0,
    homePossession: 55.0, awayPossession: 48.0,
    polyHome: 55, polyDraw: 26, polyAway: 19,
    awayFormation: '4-3-3',
    homeFirstMatchResult: null, awayFirstMatchResult: null,
    homeFoulsAvg: 12.0, awayFoulsAvg: 15.5,
    homeYellowAvg: 1.8, awayYellowAvg: 2.5,  // 波黑犯规多
    homeGkSaveRate: 72, awayGkSaveRate: 67,
    redCardEvent: 'away',  // 波黑后卫红牌
    predicted: [2, 1], actual: [4, 1],
  },
  {
    id: 'can-qat-r1', home: '加拿大', away: '卡塔尔',
    homeGoalsAvg: 1.6, awayGoalsAvg: 0.6,
    homeShotConv: 13.0, awayShotConv: 8.5,
    homePossession: 52.0, awayPossession: 42.0,
    polyHome: 65, polyDraw: 22, polyAway: 13,
    awayFormation: '5-4-1',
    homeFirstMatchResult: null, awayFirstMatchResult: null,
    homeFoulsAvg: 12.0, awayFoulsAvg: 17.0,
    homeYellowAvg: 1.8, awayYellowAvg: 3.0,  // 卡塔尔非常高
    homeGkSaveRate: 70, awayGkSaveRate: 58,
    redCardEvent: 'away_x2',  // 卡塔尔2张红牌
    predicted: [2, 1], actual: [6, 0],
  },
  {
    id: 'mex-kor-r1', home: '墨西哥', away: '韩国',
    homeGoalsAvg: 1.4, awayGoalsAvg: 1.6,
    homeShotConv: 12.5, awayShotConv: 13.0,
    homePossession: 50.0, awayPossession: 52.0,
    polyHome: 38, polyDraw: 32, polyAway: 30,
    awayFormation: '4-2-3-1',
    homeFirstMatchResult: null, awayFirstMatchResult: null,
    homeFoulsAvg: 14.0, awayFoulsAvg: 12.0,
    homeYellowAvg: 2.2, awayYellowAvg: 1.8,
    homeGkSaveRate: 72, awayGkSaveRate: 70,
    homeAdvantage: true,  // 东道主效应
    predicted: [2, 2], actual: [1, 0],
  },
  {
    id: 'uru-kor-r1', home: '乌拉圭', away: '韩国',
    homeGoalsAvg: 2.0, awayGoalsAvg: 1.6,
    homeShotConv: 14.0, awayShotConv: 13.0,
    homePossession: 54.0, awayPossession: 52.0,
    polyHome: 52, polyDraw: 28, polyAway: 20,
    awayFormation: '4-2-3-1',
    homeFirstMatchResult: null, awayFirstMatchResult: null,
    homeFoulsAvg: 15.0, awayFoulsAvg: 12.0,
    homeYellowAvg: 2.3, awayYellowAvg: 1.8,
    homeGkSaveRate: 70, awayGkSaveRate: 71,
    predicted: [2, 1], actual: [1, 1],
  },
  // 6/19
  {
    id: 'bra-hai-r2', home: '巴西', away: '海地',
    homeGoalsAvg: 2.6, awayGoalsAvg: 0.6,
    homeShotConv: 15.5, awayShotConv: 8.0,
    homePossession: 64.0, awayPossession: 32.0,
    polyHome: 92, polyDraw: 6, polyAway: 2,
    awayFormation: '5-4-1', // 铁桶
    homeFirstMatchResult: 'draw', awayFirstMatchResult: 'loss',
    homeFoulsAvg: 11.0, awayFoulsAvg: 16.0,
    homeYellowAvg: 1.5, awayYellowAvg: 2.8,
    homeGkSaveRate: 75, awayGkSaveRate: 55,
    predicted: [3, 0], actual: [3, 0],
  },
  {
    id: 'usa-aus-r2', home: '美国', away: '澳大利亚',
    homeGoalsAvg: 1.8, awayGoalsAvg: 1.2,
    homeShotConv: 13.5, awayShotConv: 11.5,
    homePossession: 54.0, awayPossession: 46.0,
    polyHome: 58, polyDraw: 25, polyAway: 17,
    awayFormation: '4-4-2',
    homeFirstMatchResult: 'win', awayFirstMatchResult: 'loss',
    homeFoulsAvg: 12.0, awayFoulsAvg: 13.5,
    homeYellowAvg: 1.7, awayYellowAvg: 2.0,
    homeGkSaveRate: 74, awayGkSaveRate: 67,
    homeAdvantage: true,
    predicted: [2, 1], actual: [2, 0],
  },
  {
    id: 'sco-mar-r2', home: '苏格兰', away: '摩洛哥',
    homeGoalsAvg: 1.2, awayGoalsAvg: 1.6,
    homeShotConv: 11.5, awayShotConv: 13.5,
    homePossession: 48.0, awayPossession: 52.0,
    polyHome: 30, polyDraw: 32, polyAway: 38,
    awayFormation: '4-3-3', // 领先后变5-4-1
    homeFirstMatchResult: 'loss', awayFirstMatchResult: 'win',
    homeFoulsAvg: 13.0, awayFoulsAvg: 14.5,
    homeYellowAvg: 2.0, awayYellowAvg: 2.2,
    homeGkSaveRate: 68, awayGkSaveRate: 74,
    earlyGoalEvent: 'away_2min',  // 开场2分钟客队进球
    predicted: [1, 1], actual: [0, 1],
  },
  {
    id: 'tur-par-r2', home: '土耳其', away: '巴拉圭',
    homeGoalsAvg: 1.8, awayGoalsAvg: 1.0,
    homeShotConv: 13.0, awayShotConv: 10.5,
    homePossession: 56.0, awayPossession: 40.0,
    polyHome: 62, polyDraw: 22, polyAway: 16,
    awayFormation: '5-4-1', // 领先后铁桶
    homeFirstMatchResult: 'win', awayFirstMatchResult: 'loss',
    homeFoulsAvg: 14.0, awayFoulsAvg: 16.0,
    homeYellowAvg: 2.2, awayYellowAvg: 2.6,
    homeGkSaveRate: 68, awayGkSaveRate: 72,
    earlyGoalEvent: 'away_2min',  // 开场2分钟客队进球
    predicted: [2, 1], actual: [0, 1],
  },
  // 6/20
  {
    id: 'ger-civ-r2', home: '德国', away: '科特迪瓦',
    homeGoalsAvg: 2.4, awayGoalsAvg: 1.4,
    homeShotConv: 15.0, awayShotConv: 12.5,
    homePossession: 62.0, awayPossession: 45.0,
    polyHome: 68, polyDraw: 20, polyAway: 12,
    awayFormation: '4-3-3',
    homeFirstMatchResult: 'win', awayFirstMatchResult: 'loss',
    homeFoulsAvg: 10.5, awayFoulsAvg: 14.5,
    homeYellowAvg: 1.5, awayYellowAvg: 2.3,
    homeGkSaveRate: 75, awayGkSaveRate: 66,
    predicted: [2, 1], actual: [2, 1],
  },
  {
    id: 'ned-swe-r2', home: '荷兰', away: '瑞典',
    homeGoalsAvg: 2.2, awayGoalsAvg: 1.4,
    homeShotConv: 14.5, awayShotConv: 12.0,
    homePossession: 58.0, awayPossession: 46.0,
    polyHome: 60, polyDraw: 24, polyAway: 16,
    awayFormation: '4-4-2',
    homeFirstMatchResult: 'win', awayFirstMatchResult: 'draw',
    homeFoulsAvg: 11.0, awayFoulsAvg: 13.5,
    homeYellowAvg: 1.6, awayYellowAvg: 2.0,
    homeGkSaveRate: 73, awayGkSaveRate: 62,
    keyPlayerReturn: true, // 德容伤愈回归
    predicted: [2, 2], actual: [5, 1],
  },
  {
    id: 'ecu-cur-r2', home: '厄瓜多尔', away: '库拉索',
    homeGoalsAvg: 1.6, awayGoalsAvg: 0.6,
    homeShotConv: 12.5, awayShotConv: 8.0,
    homePossession: 58.0, awayPossession: 36.0,
    polyHome: 78, polyDraw: 15, polyAway: 7,
    awayFormation: '5-4-1', // 铁桶
    homeFirstMatchResult: 'win', awayFirstMatchResult: 'loss',
    homeFoulsAvg: 13.0, awayFoulsAvg: 16.0,
    homeYellowAvg: 2.0, awayYellowAvg: 2.5,
    homeGkSaveRate: 70, awayGkSaveRate: 82,  // 门将爆发!
    predicted: [2, 0], actual: [0, 0],
  },
  // 6/21
  {
    id: 'esp-sau-r2', home: '西班牙', away: '沙特',
    homeGoalsAvg: 3.0, awayGoalsAvg: 0.8,
    homeShotConv: 17.5, awayShotConv: 9.0,
    homePossession: 68.0, awayPossession: 30.0,
    polyHome: 88, polyDraw: 8, polyAway: 4,
    awayFormation: '5-4-1', // 铁桶
    homeFirstMatchResult: 'win', awayFirstMatchResult: 'loss',
    homeFoulsAvg: 10.0, awayFoulsAvg: 15.0,
    homeYellowAvg: 1.4, awayYellowAvg: 2.5,
    homeGkSaveRate: 78, awayGkSaveRate: 58,
    predicted: [2, 0], actual: [4, 0],
  },
  {
    id: 'bel-irn-r2', home: '比利时', away: '伊朗',
    homeGoalsAvg: 2.0, awayGoalsAvg: 0.8,
    homeShotConv: 13.5, awayShotConv: 9.5,
    homePossession: 58.0, awayPossession: 38.0,
    polyHome: 68, polyDraw: 20, polyAway: 12,
    awayFormation: '5-4-1', // 铁桶
    homeFirstMatchResult: 'win', awayFirstMatchResult: 'draw',
    homeFoulsAvg: 12.5, awayFoulsAvg: 15.5,
    homeYellowAvg: 2.0, awayYellowAvg: 2.5,
    homeGkSaveRate: 71, awayGkSaveRate: 75,
    redCardEvent: 'home',  // 比利时恩戈伊红牌
    predicted: [2, 1], actual: [0, 0],
  },
  {
    id: 'uru-cpv-r2', home: '乌拉圭', away: '佛得角',
    homeGoalsAvg: 2.0, awayGoalsAvg: 1.0,
    homeShotConv: 14.0, awayShotConv: 10.0,
    homePossession: 56.0, awayPossession: 42.0,
    polyHome: 65, polyDraw: 22, polyAway: 13,
    awayFormation: '4-4-2',
    homeFirstMatchResult: 'draw', awayFirstMatchResult: 'loss', // 首轮乌拉圭表现不佳
    homeFoulsAvg: 15.0, awayFoulsAvg: 14.5,
    homeYellowAvg: 2.3, awayYellowAvg: 2.2,
    homeGkSaveRate: 68, awayGkSaveRate: 66,
    predicted: [2, 0], actual: [2, 2],
  },
  {
    id: 'tun-jpn-r2', home: '突尼斯', away: '日本',
    homeGoalsAvg: 1.0, awayGoalsAvg: 2.4,
    homeShotConv: 10.5, awayShotConv: 15.0,
    homePossession: 42.0, awayPossession: 60.0,
    polyHome: 12, polyDraw: 20, polyAway: 68,
    awayFormation: '4-3-3',
    homeFirstMatchResult: 'loss', awayFirstMatchResult: 'win',
    homeFoulsAvg: 15.0, awayFoulsAvg: 10.0,
    homeYellowAvg: 2.5, awayYellowAvg: 1.3,
    homeGkSaveRate: 62, awayGkSaveRate: 76,
    predicted: [0, 2], actual: [0, 4],
  },
  {
    id: 'nzl-egy-r2', home: '新西兰', away: '埃及',
    homeGoalsAvg: 1.0, awayGoalsAvg: 2.0,
    homeShotConv: 10.5, awayShotConv: 14.5,
    homePossession: 42.0, awayPossession: 55.0,
    polyHome: 18, polyDraw: 27, polyAway: 55,
    awayFormation: '4-3-3',
    homeFirstMatchResult: 'loss', awayFirstMatchResult: 'win',
    homeFoulsAvg: 13.0, awayFoulsAvg: 12.0,
    homeYellowAvg: 2.0, awayYellowAvg: 1.8,
    homeGkSaveRate: 65, awayGkSaveRate: 73,
    predicted: [1, 2], actual: [1, 3],
  },
];

// ============================================================
// 2. 评分函数
// ============================================================

function scoreDirection(pred, actual) {
  const predDiff = pred[0] - pred[1];
  const actDiff = actual[0] - actual[1];
  if (predDiff > 0 && actDiff > 0) return 1;     // 都预测主胜
  if (predDiff < 0 && actDiff < 0) return 1;     // 都预测客胜
  if (predDiff === 0 && actDiff === 0) return 1;  // 都预测平局
  return 0;
}

function scoreGoalDiff(pred, actual) {
  const diff = Math.abs((pred[0] - pred[1]) - (actual[0] - actual[1]));
  return diff;  // 越小越好
}

function scoreExactMatch(pred, actual) {
  return pred[0] === actual[0] && pred[1] === actual[1] ? 1 : 0;
}

function scoreTotalGoalError(pred, actual) {
  return Math.abs((pred[0] + pred[1]) - (actual[0] + actual[1]));
}

// 综合评分：加权得分 (越高越好)
function compositeScore(pred, actual) {
  let score = 0;
  // 方向正确 +3
  score += scoreDirection(pred, actual) * 3;
  // 完全命中 +5
  score += scoreExactMatch(pred, actual) * 5;
  // 进球差偏离惩罚 (每偏1球扣0.5)
  score -= scoreGoalDiff(pred, actual) * 0.5;
  // 总进球偏离惩罚 (每偏1球扣0.3)
  score -= scoreTotalGoalError(pred, actual) * 0.3;
  return score;
}

// ============================================================
// 3. 基线模型 (当前方式的量化近似)
// ============================================================

function baselinePredict(m) {
  // 直接使用当前手动预测值 (因为基线就是人为定性分析的结果)
  return [...m.predicted];
}

// ============================================================
// 4. 优化模型 (加入系数修正)
// ============================================================

function optimizedPredict(m, params) {
  // 起点：用场均进球作为基础期望值
  let homeXg = m.homeGoalsAvg;
  let awayXg = m.awayGoalsAvg;

  // --- 修正 A: 铁桶阵修正 (弱队5-4-1/5-3-2) ---
  const isBus = ['5-4-1', '5-3-2', '5-4-1'].includes(m.awayFormation);
  if (isBus) {
    // 强队破铁桶效率折损
    if (homeXg > awayXg) {
      homeXg *= params.busBlockCoeff;      // 例 0.72
      awayXg *= params.busCounterBoost;    // 反击加成 例 1.10
    }
  }

  // --- 修正 B: 门将扑救率修正 ---
  // 对方门将扑救率越高，己方进球预期越低
  const awayGkFactor = 1 - ((m.awayGkSaveRate - 65) / 100) * params.gkWeight;
  const homeGkFactor = 1 - ((m.homeGkSaveRate - 65) / 100) * params.gkWeight;
  homeXg *= Math.max(0.5, awayGkFactor);  // 受对方门将影响
  awayXg *= Math.max(0.5, homeGkFactor);

  // --- 修正 C: 犯规/纪律风险修正 (轻量) ---
  // 高犯规球队有更高概率出红牌 → 微调预测 (权重很小)
  // 仅当场均黄牌>2.3时才启用
  if (m.awayYellowAvg > 2.3) {
    // 客队犯规多 → 主队可能因定位球/数量优势多进球
    homeXg *= (1 + params.disciplineBonus);
  }
  if (m.homeYellowAvg > 2.3) {
    awayXg *= (1 + params.disciplineBonus);
  }

  // --- 修正 D: 首战表现系数 ---
  if (m.homeFirstMatchResult === 'win') {
    homeXg *= params.firstWinBoost;
  } else if (m.homeFirstMatchResult === 'draw') {
    homeXg *= params.firstDrawPenalty;
  } else if (m.homeFirstMatchResult === 'loss') {
    homeXg *= params.firstLossPenalty;
  }

  if (m.awayFirstMatchResult === 'win') {
    awayXg *= params.firstWinBoost;
  } else if (m.awayFirstMatchResult === 'draw') {
    awayXg *= params.firstDrawPenalty;
  } else if (m.awayFirstMatchResult === 'loss') {
    awayXg *= params.firstLossPenalty;
  }

  // --- 修正 E: Polymarket 赔率校正 ---
  // 当市场极度偏向一方时，增加强队进球上限
  const polyDiff = Math.abs(m.polyHome - m.polyAway);
  if (polyDiff > 60) {
    // 极大强弱差距
    const strongSide = m.polyHome > m.polyAway ? 'home' : 'away';
    if (strongSide === 'home') {
      homeXg *= params.crushBoost;
    } else {
      awayXg *= params.crushBoost;
    }
  }

  // --- 修正 F: 东道主效应 ---
  if (m.homeAdvantage) {
    homeXg *= params.homeAdvBoost;
    awayXg *= params.homeAdvPenalty;
  }

  // 四舍五入取整
  let predHome = Math.round(homeXg);
  let predAway = Math.round(awayXg);

  // 边界保护
  predHome = Math.max(0, predHome);
  predAway = Math.max(0, predAway);

  return [predHome, predAway];
}

// ============================================================
// 5. 参数网格搜索 (寻找最佳参数组合)
// ============================================================

function runBacktest(params) {
  let totalBaseline = 0;
  let totalOptimized = 0;
  let baselineDir = 0;
  let optimizedDir = 0;
  let baselineExact = 0;
  let optimizedExact = 0;
  let baselineTotalGoalErr = 0;
  let optimizedTotalGoalErr = 0;

  const details = [];

  matches.forEach(m => {
    const basePred = baselinePredict(m);
    const optPred = optimizedPredict(m, params);

    const baseScore = compositeScore(basePred, m.actual);
    const optScore = compositeScore(optPred, m.actual);

    totalBaseline += baseScore;
    totalOptimized += optScore;
    baselineDir += scoreDirection(basePred, m.actual);
    optimizedDir += scoreDirection(optPred, m.actual);
    baselineExact += scoreExactMatch(basePred, m.actual);
    optimizedExact += scoreExactMatch(optPred, m.actual);
    baselineTotalGoalErr += scoreTotalGoalError(basePred, m.actual);
    optimizedTotalGoalErr += scoreTotalGoalError(optPred, m.actual);

    details.push({
      id: m.id,
      home: m.home,
      away: m.away,
      actual: m.actual.join('-'),
      baseline: basePred.join('-'),
      optimized: optPred.join('-'),
      baseScore: baseScore.toFixed(1),
      optScore: optScore.toFixed(1),
      diff: (optScore - baseScore).toFixed(1),
    });
  });

  return {
    totalBaseline,
    totalOptimized,
    improvement: totalOptimized - totalBaseline,
    baselineDir,
    optimizedDir,
    baselineExact,
    optimizedExact,
    baselineTotalGoalErr,
    optimizedTotalGoalErr,
    details,
  };
}

// ============================================================
// 6. 测试多组参数
// ============================================================

const paramSets = [
  {
    name: '方案 A: 保守修正',
    params: {
      busBlockCoeff: 0.78,    // 铁桶折损 22%
      busCounterBoost: 1.05,  // 反击加成 5%
      gkWeight: 0.15,         // 门将权重 15%
      disciplineBonus: 0.03,  // 犯规加成 3% (极低)
      firstWinBoost: 1.05,
      firstDrawPenalty: 0.95,
      firstLossPenalty: 0.88,
      crushBoost: 1.12,
      homeAdvBoost: 1.08,
      homeAdvPenalty: 0.92,
    }
  },
  {
    name: '方案 B: 中等修正',
    params: {
      busBlockCoeff: 0.72,    // 铁桶折损 28%
      busCounterBoost: 1.10,  // 反击加成 10%
      gkWeight: 0.20,         // 门将权重 20%
      disciplineBonus: 0.05,  // 犯规加成 5% (很低)
      firstWinBoost: 1.08,
      firstDrawPenalty: 0.92,
      firstLossPenalty: 0.82,
      crushBoost: 1.18,
      homeAdvBoost: 1.10,
      homeAdvPenalty: 0.90,
    }
  },
  {
    name: '方案 C: 激进修正',
    params: {
      busBlockCoeff: 0.65,    // 铁桶折损 35%
      busCounterBoost: 1.15,
      gkWeight: 0.30,         // 门将权重 30%
      disciplineBonus: 0.08,  // 犯规加成 8% (仍然不大)
      firstWinBoost: 1.12,
      firstDrawPenalty: 0.88,
      firstLossPenalty: 0.75,
      crushBoost: 1.25,
      homeAdvBoost: 1.12,
      homeAdvPenalty: 0.85,
    }
  },
  {
    name: '方案 D: 仅铁桶+门将 (不加犯规系数)',
    params: {
      busBlockCoeff: 0.72,
      busCounterBoost: 1.10,
      gkWeight: 0.20,
      disciplineBonus: 0.00,  // 不加犯规
      firstWinBoost: 1.05,
      firstDrawPenalty: 0.95,
      firstLossPenalty: 0.88,
      crushBoost: 1.15,
      homeAdvBoost: 1.08,
      homeAdvPenalty: 0.92,
    }
  },
];

// ============================================================
// 7. 输出结果
// ============================================================

console.log('='.repeat(90));
console.log('  2026 世界杯预测模型回测分析');
console.log('  比较基线模型 (当前) vs 优化模型 (加入系数) — 共 25 场已结束赛事');
console.log('='.repeat(90));
console.log('');

// 先输出基线结果
const baselineResult = runBacktest(paramSets[0].params);
console.log(`【基线模型 (当前手动预测)】`);
console.log(`  方向命中: ${baselineResult.baselineDir}/25 (${(baselineResult.baselineDir / 25 * 100).toFixed(0)}%)`);
console.log(`  完全命中: ${baselineResult.baselineExact}/25`);
console.log(`  总进球偏差: ${baselineResult.baselineTotalGoalErr} (越低越好)`);
console.log(`  综合得分: ${baselineResult.totalBaseline.toFixed(1)}`);
console.log('');

paramSets.forEach(ps => {
  const result = runBacktest(ps.params);
  const impColor = result.improvement > 0 ? '✅ 改善' : '❌ 变差';
  
  console.log(`${'─'.repeat(90)}`);
  console.log(`【${ps.name}】`);
  console.log(`  方向命中: ${result.optimizedDir}/25 (${(result.optimizedDir / 25 * 100).toFixed(0)}%)`);
  console.log(`  完全命中: ${result.optimizedExact}/25`);
  console.log(`  总进球偏差: ${result.optimizedTotalGoalErr} (越低越好, 基线=${result.baselineTotalGoalErr})`);
  console.log(`  综合得分: ${result.totalOptimized.toFixed(1)} (基线=${result.totalBaseline.toFixed(1)})`);
  console.log(`  差值: ${result.improvement > 0 ? '+' : ''}${result.improvement.toFixed(1)} ${impColor}`);
  console.log(`  参数: busBlock=${ps.params.busBlockCoeff}, gk=${ps.params.gkWeight}, discipline=${ps.params.disciplineBonus}`);
  console.log('');
});

// 选出最佳方案
let bestIdx = 0;
let bestImprovement = -Infinity;
paramSets.forEach((ps, i) => {
  const result = runBacktest(ps.params);
  if (result.improvement > bestImprovement) {
    bestImprovement = result.improvement;
    bestIdx = i;
  }
});

const bestResult = runBacktest(paramSets[bestIdx].params);

console.log('');
console.log('='.repeat(90));
console.log(`  🏆 最佳方案: ${paramSets[bestIdx].name}`);
console.log(`  综合得分改善: +${bestImprovement.toFixed(1)}`);
console.log('='.repeat(90));
console.log('');

// 详细逐场对比
console.log('【逐场详细对比 (最佳方案 vs 基线)】');
console.log(`${'─'.repeat(90)}`);
console.log(`${'对阵'.padEnd(26)} | 实际  | 基线  | 优化  | 基线分 | 优化分 | 差值`);
console.log(`${'─'.repeat(90)}`);

bestResult.details.forEach(d => {
  const matchName = `${d.home} vs ${d.away}`;
  const diff = parseFloat(d.diff);
  const diffStr = diff > 0 ? `+${d.diff} ✅` : diff < 0 ? `${d.diff} ❌` : ` ${d.diff} ─`;
  console.log(`${matchName.padEnd(22)} | ${d.actual.padEnd(5)} | ${d.baseline.padEnd(5)} | ${d.optimized.padEnd(5)} | ${d.baseScore.padStart(5)}  | ${d.optScore.padStart(5)}  | ${diffStr}`);
});

console.log(`${'─'.repeat(90)}`);

// 改善 vs 变差统计
let improved = 0, worsened = 0, unchanged = 0;
bestResult.details.forEach(d => {
  const diff = parseFloat(d.diff);
  if (diff > 0) improved++;
  else if (diff < 0) worsened++;
  else unchanged++;
});

console.log('');
console.log(`改善: ${improved} 场 | 变差: ${worsened} 场 | 不变: ${unchanged} 场`);
console.log('');

// 重点检验：那些原本严重偏离的场次
console.log('【重点检验：原本偏离最严重的 8 场】');
const worstMatches = ['por-cod-r1', 'mex-kor-r1', 'uru-kor-r1', 'sco-mar-r2', 'tur-par-r2', 'ned-swe-r2', 'ecu-cur-r2', 'bel-irn-r2'];
bestResult.details.filter(d => worstMatches.includes(d.id)).forEach(d => {
  const diff = parseFloat(d.diff);
  const diffStr = diff > 0 ? `+${d.diff} ✅` : diff < 0 ? `${d.diff} ❌` : ` ${d.diff} ─`;
  console.log(`  ${d.home} vs ${d.away}: 实际=${d.actual}, 基线=${d.baseline}, 优化=${d.optimized} → ${diffStr}`);
});
