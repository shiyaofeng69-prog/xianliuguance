const limiterTableData = [
    { psm: 'ttec.western_mall_event', redisPsm: '{"sgi":":mallva:":"my:":"', limitType: '接口限流类型', meshStatus: '已接入Mesh', operator: '🎭', updateTime: '2026-05-15 14:08:53', enabled: true },
    { psm: 'ttec.western_mall_event', redisPsm: '{"sgi":":mallva:":"my:":"', limitType: '自定义key限流类型', meshStatus: '已接入Mesh', operator: '🎭', updateTime: '2026-05-15 14:08:53', enabled: true },
    { psm: 'oec.promotion.points.business', redisPsm: '{"sgi":":mallva:":"my:":"', limitType: '接口限流类型', meshStatus: '已接入Mesh', operator: '🎭', updateTime: '2026-05-15 14:08:53', enabled: true },
    { psm: 'oec.promotion.points.business', redisPsm: '{"sgi":":mallva:":"my:":"', limitType: '自定义key限流类型', meshStatus: '已接入Mesh', operator: '🎭', updateTime: '2026-05-15 14:08:53', enabled: true },
    { psm: 'oec.promotion.price_data', redisPsm: '{"sgi":":mallva:":"my:":"', limitType: '接口限流类型', meshStatus: '已接入Mesh', operator: '🎭', updateTime: '2026-05-15 14:08:53', enabled: true },
    { psm: 'oec.promotion.price_data', redisPsm: '{"sgi":":mallva:":"my:":"', limitType: '自定义key限流类型', meshStatus: '已接入Mesh', operator: '🎭', updateTime: '2026-05-15 14:08:53', enabled: true },
    { psm: 'oec.promotion.trade_engine', redisPsm: '{"sgi":":mallva:":"my:":"', limitType: '接口限流类型', meshStatus: '已接入Mesh', operator: '🎭', updateTime: '2026-05-15 14:08:53', enabled: true },
    { psm: 'oec.promotion.trade_engine', redisPsm: '{"sgi":":mallva:":"my:":"', limitType: '自定义key限流类型', meshStatus: '已接入Mesh', operator: '🎭', updateTime: '2026-05-15 14:08:53', enabled: true },
    { psm: 'oec.operation.product_group', redisPsm: '{"sgi":":mallva:":"my:":"', limitType: '接口限流类型', meshStatus: '已接入Mesh', operator: '🎭', updateTime: '2026-05-15 14:08:33', enabled: true },
    { psm: 'oec.operation.product_group', redisPsm: '{"sgi":":mallva:":"my:":"', limitType: '自定义key限流类型', meshStatus: '已接入Mesh', operator: '🎭', updateTime: '2026-05-15 14:08:33', enabled: true }
];

let observationTasks = [
    { id: '1', name: 'Promotion核心链路晚高峰观测', psm: 'oec.promotion.trade_engine', qps: '峰值: 12k / P99: 8.6k / 阈值: 15k', successRate: '99.98%', owner: '张三', topologyLevel: '上游2层 / 下游3层', cpu: '35%', tags: ['核心链路', '晚高峰'], creator: '张三', updateTime: '2026-05-18 14:23:00', status: 'normal' },
    { id: '2', name: 'Mall Event服务观测', psm: 'ttec.western.mall.event', qps: '峰值: 8.5k / P99: 6.2k / 阈值: 10k', successRate: '98.2%', owner: '李四', topologyLevel: '上游1层 / 下游1层', cpu: '68%', tags: ['监控'], creator: '李四', updateTime: '2026-05-18 13:45:00', status: 'warning' },
    { id: '3', name: '积分业务限流观测', psm: 'promotion.points_business', qps: '峰值: 23k / P99: 21k / 阈值: 25k', successRate: '91.3%', owner: '王五', topologyLevel: '上游2层 / 下游2层', cpu: '92%', tags: ['核心链路'], creator: '王五', updateTime: '2026-05-18 14:20:00', status: 'error' },
    { id: '4', name: '产品分组服务监控', psm: 'oec.operation.product_group', qps: '峰值: 5.2k / P99: 4.1k / 阈值: 8k', successRate: '99.8%', owner: '张三', topologyLevel: '上游1层 / 下游2层', cpu: '42%', tags: ['监控'], creator: '张三', updateTime: '2026-05-18 12:30:00', status: 'normal' },
    { id: '5', name: 'Argos指标采集观测', psm: 'toutiao.ms.argos', qps: '峰值: 15k / P99: 12k / 阈值: 18k', successRate: '99.95%', owner: '李四', topologyLevel: '上游3层 / 下游1层', cpu: '55%', tags: ['核心链路', '监控'], creator: '李四', updateTime: '2026-05-18 11:20:00', status: 'normal' },
    { id: '6', name: '价格数据服务观测', psm: 'oec.promotion.price_data', qps: '峰值: 6.8k / P99: 5.3k / 阈值: 8k', successRate: '97.6%', owner: '王五', topologyLevel: '上游1层 / 下游1层', cpu: '71%', tags: [], creator: '王五', updateTime: '2026-05-18 10:15:00', status: 'warning' }
];

const topologyNodes = [
    { id: '1', name: 'toutiao.ms.argos', role: 'upstream', level: 1, qps: '2.3k', successRate: '99.9%', cpu: '45%', status: 'normal', x: 150, y: 150 },
    { id: '2', name: 'promotion.gateway', role: 'upstream', level: 2, qps: '5.1k', successRate: '99.5%', cpu: '58%', status: 'normal', x: 280, y: 100 },
    { id: '3', name: 'oec.promotion.trade_engine', role: 'target', level: 0, qps: '8.5k', successRate: '98.2%', cpu: '68%', status: 'warning', x: 450, y: 250, isTarget: true },
    { id: '4', name: 'oec.promotion.price_data', role: 'downstream', level: 1, qps: '3.2k', successRate: '97.6%', cpu: '71%', status: 'warning', x: 600, y: 180 },
    { id: '5', name: 'oec.promotion.points', role: 'downstream', level: 1, qps: '4.8k', successRate: '91.3%', cpu: '92%', status: 'error', x: 600, y: 320 },
    { id: '6', name: 'oec.operation.product_group', role: 'downstream', level: 2, qps: '1.5k', successRate: '99.8%', cpu: '42%', status: 'normal', x: 750, y: 150 },
    { id: '7', name: 'oec.payment.core', role: 'downstream', level: 2, qps: '2.1k', successRate: '99.9%', cpu: '38%', status: 'normal', x: 750, y: 280 },
    { id: '8', name: 'ttec.western.mall.event', role: 'downstream', level: 3, qps: '800', successRate: '99.2%', cpu: '25%', status: 'normal', x: 880, y: 120 },
    { id: '9', name: 'redis.cache.cluster', role: 'downstream', level: 3, qps: '12k', successRate: '99.99%', cpu: '65%', status: 'normal', x: 880, y: 250 }
];

const topologyEdges = [
    { from: '1', to: '2', qps: '2.3k', status: 'normal' },
    { from: '2', to: '3', qps: '5.1k', status: 'normal' },
    { from: '3', to: '4', qps: '3.2k', status: 'warning' },
    { from: '3', to: '5', qps: '4.8k', status: 'error' },
    { from: '4', to: '6', qps: '1.5k', status: 'normal' },
    { from: '5', to: '7', qps: '2.1k', status: 'normal' },
    { from: '6', to: '8', qps: '800', status: 'normal' },
    { from: '7', to: '9', qps: '12k', status: 'normal' }
];

function renderLimiterTable() {
    const tbody = document.getElementById('limiterTableBody');
    tbody.innerHTML = limiterTableData.map(item => `
        <tr>
            <td>${item.psm}</td>
            <td>${item.redisPsm}</td>
            <td><span class="badge ${item.limitType.includes('接口') ? 'badge-primary' : 'badge-success'}">${item.limitType}</span></td>
            <td><span class="badge badge-success">${item.meshStatus}</span></td>
            <td>${item.operator}</td>
            <td>${item.updateTime}</td>
            <td>
                <label class="switch"><input type="checkbox" ${item.enabled ? 'checked' : ''}><span class="slider"></span></label>
                <a href="#" class="action-link">详情</a>
                <a href="#" class="action-link">删除</a>
            </td>
        </tr>
    `).join('');
}

function renderObservationTable(filteredData = observationTasks) {
    const tbody = document.getElementById('observationTableBody');
    tbody.innerHTML = filteredData.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.psm}</td>
            <td>${item.creator}</td>
            <td>${item.topologyLevel}</td>
            <td>${item.tags.map(tag => `<span class="badge badge-primary">${tag}</span>`).join(' ') || '-'}</td>
            <td>${item.updateTime}</td>
            <td>
                <a href="#" class="action-link" onclick="viewDetail('${item.id}')">详情</a>
                <a href="#" class="action-link" onclick="editTask('${item.id}')">编辑</a>
                <a href="#" class="action-link" onclick="copyTask('${item.id}')">复制</a>
                <a href="#" class="action-link" onclick="showDeleteConfirm('${item.id}')">删除</a>
            </td>
        </tr>
    `).join('');
}

function getSuccessRateBadge(rate) {
    const num = parseFloat(rate);
    if (num >= 99.5) return 'badge-success';
    if (num >= 95) return 'badge-primary';
    if (num >= 90) return 'badge-warning';
    return 'badge-error';
}

function getCpuBadge(cpu) {
    const num = parseFloat(cpu);
    if (num < 50) return 'badge-success';
    if (num < 70) return 'badge-warning';
    return 'badge-error';
}

function getStatusBadge(status) {
    const badges = { normal: 'badge-success', warning: 'badge-warning', error: 'badge-error' };
    return badges[status] || 'badge-gray';
}

function getStatusText(status) {
    const texts = { normal: '正常', warning: '告警中', error: '异常' };
    return texts[status] || '未知';
}

function switchPage(pageName) {
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.page-content').forEach(page => page.classList.add('hidden'));
    const pageHeaderActions = document.getElementById('pageHeaderActions');
    const backBtn = document.getElementById('loBackToList');
    const createBtn = document.getElementById('btnCreateLink');
    const saveSplit = document.getElementById('loSaveSplit');
    // 默认隐藏返回按钮，仅工作台模式显示
    if (backBtn) backBtn.classList.add('hidden');
    if (createBtn) createBtn.classList.add('hidden');
    if (saveSplit) saveSplit.classList.add('hidden');
    
    if (pageName === 'limiter') {
        document.querySelector('[data-page="limiter"]').classList.add('active');
        document.getElementById('limiterPage').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = '限流管理';
        document.getElementById('pageDesc').textContent = '';
        if (pageHeaderActions) pageHeaderActions.classList.remove('show');
    } else if (pageName === 'link-observation') {
        // 默认进入链路列表页（已发布链路）
        document.querySelector('[data-page="link-observation"]').classList.add('active');
        document.getElementById('linkListPage').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = '流控观测列表';
        document.getElementById('pageDesc').textContent = '';
        if (pageHeaderActions) pageHeaderActions.classList.add('show');
        if (createBtn) createBtn.classList.remove('hidden');
        renderLoLinks();
    } else if (pageName === 'link-workbench') {
        // 链路工作台（新建 / 查看 / 编辑）：标题由 applyWorkbenchMode 设置
        document.querySelector('[data-page="link-observation"]').classList.add('active');
        document.getElementById('linkObservationPage').classList.remove('hidden');
        document.getElementById('pageDesc').textContent = '';
        if (pageHeaderActions) pageHeaderActions.classList.add('show');
        if (saveSplit) saveSplit.classList.remove('hidden');
        renderObservationTable();
        // 仅 create 模式才复位为空态；view/edit/copy 由 enterWorkbench 自行回填
        if (loWorkbenchState.mode === 'create' && typeof restoreLoFilterDraft === 'function') {
            restoreLoFilterDraft();
        }
    }
}

function openModal(type, taskId = null) {
    const modal = document.getElementById('linkModal');
    const title = document.getElementById('modalTitle');
    const confirmBtn = document.getElementById('btnModalConfirm');
    
    if (type === 'create') {
        title.textContent = '新建任务';
        confirmBtn.textContent = '确定';
        clearForm();
    } else if (type === 'edit') {
        title.textContent = '编辑任务';
        confirmBtn.textContent = '保存';
        const task = observationTasks.find(t => t.id === taskId);
        if (task) {
            document.getElementById('formName').value = task.name;
            document.getElementById('formPsm').value = task.psm;
            document.getElementById('formUpstream').value = '2';
            document.getElementById('formDownstream').value = '2';
            renderModalTags(task.tags || []);
        }
    } else if (type === 'copy') {
        title.textContent = '复制任务';
        confirmBtn.textContent = '确定';
        const task = observationTasks.find(t => t.id === taskId);
        if (task) {
            document.getElementById('formName').value = task.name + ' (副本)';
            document.getElementById('formPsm').value = task.psm;
            document.getElementById('formUpstream').value = '2';
            document.getElementById('formDownstream').value = '2';
            renderModalTags(task.tags || []);
        }
    }
    
    modal.dataset.type = type;
    modal.dataset.taskId = taskId || '';
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('linkModal').classList.add('hidden');
}

function clearForm() {
    document.getElementById('formName').value = '';
    document.getElementById('formPsm').value = '';
    document.getElementById('formMethod').value = '';
    document.getElementById('formCluster').value = '';
    const tr = document.getElementById('formTimeRange');
    if (tr) tr.value = '';
    const vr = document.getElementById('formVRegion');
    if (vr) vr.value = '';
    const vd = document.getElementById('formVDC');
    if (vd) vd.value = '';
    document.getElementById('formUpstream').value = '1';
    document.getElementById('formDownstream').value = '2';
    renderModalTags([]);
}

function renderModalTags(tags) {
    const rows = document.getElementById('tagRows');
    if (!rows) return;
    rows.innerHTML = '';
    if (tags && tags.length) {
        tags.forEach(t => addTagRow(t));
    }
    bindAddTagBtn();
}

function bindAddTagBtn() {
    const btn = document.getElementById('btnAddTag');
    if (!btn) return;
    btn.onclick = () => addTagRow('');
}

function getTagPresetOptions() {
    return ['核心链路', '晚高峰', '监控', '稳定性', '大促保障'];
}

function addTagRow(value = '') {
    const rows = document.getElementById('tagRows');
    if (!rows) return;
    const row = document.createElement('div');
    row.className = 'tag-row form-row-3';
    row.innerHTML = `
        <div class="form-item">
            <div class="tag-input-wrapper">
                <input type="text" class="form-control tag-input" placeholder="请选择或输入标签" autocomplete="off" value="${value}">
                <span class="tag-input-arrow">▾</span>
                <div class="tag-dropdown hidden"></div>
            </div>
        </div>
        <div class="form-item tag-action-item">
            <button type="button" class="btn-tag-remove">删除</button>
        </div>
        <div class="form-item form-item-empty"></div>
    `;
    rows.appendChild(row);

    const input = row.querySelector('.tag-input');
    const dropdown = row.querySelector('.tag-dropdown');
    const removeBtn = row.querySelector('.btn-tag-remove');

    const renderOptions = (keyword = '') => {
        const all = getTagPresetOptions();
        const kw = (keyword || '').toLowerCase().trim();
        const filtered = kw ? all.filter(o => o.toLowerCase().includes(kw)) : all;
        if (filtered.length === 0) {
            dropdown.innerHTML = '<div class="searchable-empty">暂无匹配项</div>';
        } else {
            dropdown.innerHTML = filtered
                .map(o => `<div class="tag-dropdown-option" data-value="${o}">${o}</div>`)
                .join('');
        }
    };

    const showDropdown = () => {
        renderOptions(input.value);
        dropdown.classList.remove('hidden');
        row.classList.add('open');
    };
    const hideDropdown = () => {
        dropdown.classList.add('hidden');
        row.classList.remove('open');
    };

    input.addEventListener('focus', showDropdown);
    input.addEventListener('click', showDropdown);
    input.addEventListener('input', () => renderOptions(input.value));
    dropdown.addEventListener('mousedown', (e) => {
        const opt = e.target.closest('.tag-dropdown-option');
        if (!opt) return;
        e.preventDefault();
        input.value = opt.dataset.value;
        hideDropdown();
    });
    document.addEventListener('click', (e) => {
        if (!row.contains(e.target)) hideDropdown();
    });

    removeBtn.addEventListener('click', () => row.remove());
}

function getModalTags() {
    const rows = document.getElementById('tagRows');
    if (!rows) return [];
    return Array.from(rows.querySelectorAll('.tag-input'))
        .map(i => i.value.trim())
        .filter(v => v);
}

function saveTask() {
    const modal = document.getElementById('linkModal');
    const type = modal.dataset.type;
    const taskId = modal.dataset.taskId;
    
    const name = document.getElementById('formName').value;
    const psm = document.getElementById('formPsm').value;
    
    if (!name || !psm) {
        alert('请填写必填字段');
        return;
    }
    
    if (type === 'create') {
        const newTask = {
            id: Date.now().toString(),
            name,
            psm,
            qps: '峰值: 0 / P99: 0 / 阈值: 0',
            successRate: '100%',
            owner: '当前用户',
            topologyLevel: `上游${document.getElementById('formUpstream').value}层 / 下游${document.getElementById('formDownstream').value}层`,
            cpu: '0%',
            tags: getModalTags(),
            creator: '当前用户',
            updateTime: new Date().toLocaleString('zh-CN'),
            status: 'normal'
        };
        observationTasks.unshift(newTask);
    } else if (type === 'edit') {
        const task = observationTasks.find(t => t.id === taskId);
        if (task) {
            task.name = name;
            task.psm = psm;
            task.tags = getModalTags();
            task.topologyLevel = `上游${document.getElementById('formUpstream').value}层 / 下游${document.getElementById('formDownstream').value}层`;
            task.updateTime = new Date().toLocaleString('zh-CN');
        }
    } else if (type === 'copy') {
        const newTask = {
            id: Date.now().toString(),
            name,
            psm,
            qps: '峰值: 0 / P99: 0 / 阈值: 0',
            successRate: '100%',
            owner: '当前用户',
            topologyLevel: `上游${document.getElementById('formUpstream').value}层 / 下游${document.getElementById('formDownstream').value}层`,
            cpu: '0%',
            tags: getModalTags(),
            creator: '当前用户',
            updateTime: new Date().toLocaleString('zh-CN'),
            status: 'normal'
        };
        observationTasks.unshift(newTask);
    }
    
    closeModal();
    renderObservationTable();
}

function showDeleteConfirm(taskId) {
    const task = observationTasks.find(t => t.id === taskId);
    const modal = document.getElementById('confirmModal');
    modal.dataset.taskId = taskId;
    const msg = document.getElementById('confirmModalMessage');
    if (msg && task) {
        msg.textContent = `确定要删除任务「${task.name}」吗？此操作无法撤销。`;
    }
    modal.classList.remove('hidden');
}

function deleteTask() {
    const modal = document.getElementById('confirmModal');
    const taskId = modal.dataset.taskId;
    const task = observationTasks.find(t => t.id === taskId);
    observationTasks = observationTasks.filter(t => t.id !== taskId);
    modal.classList.add('hidden');
    renderObservationTable();
    showToast(task ? `任务「${task.name}」已删除` : '任务已删除');
}

function closeConfirmModal() {
    document.getElementById('confirmModal').classList.add('hidden');
}

function showToast(message) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'globalToast';
        toast.className = 'global-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2000);
}

function viewDetail(taskId) {
    const task = observationTasks.find(t => t.id === taskId);
    if (!task) return;
    
    document.querySelectorAll('.page-content').forEach(page => page.classList.add('hidden'));
    document.getElementById('detailPage').classList.remove('hidden');
    
    document.getElementById('detailTitle').textContent = task.name;
    document.getElementById('infoPsm').textContent = task.psm;
    document.getElementById('infoTimeRange').textContent = '近24h';
    document.getElementById('infoUpstream').textContent = '2层';
    document.getElementById('infoDownstream').textContent = '3层';
    document.getElementById('infoRegion').textContent = 'cn';
    document.getElementById('infoVdc').textContent = 'dc1';
    document.getElementById('infoCreator').textContent = task.creator;
    document.getElementById('infoUpdateTime').textContent = task.updateTime;
    
    document.getElementById('summaryNodes').textContent = '27';
    document.getElementById('summaryAbnormal').textContent = '3';
    document.getElementById('summaryCalls').textContent = '5';
    document.getElementById('summaryLastTime').textContent = '14:23';
    document.getElementById('summaryTypes').textContent = 'QPS裁剪、限流命中升高、CPU飙升';
    
    renderTopology();
    renderDetailTable();
}

function goBack() {
    switchPage('link-observation');
}

function renderTopology() {
    const svg = document.getElementById('topologySvg');
    const containerWidth = svg.parentElement.clientWidth;
    svg.setAttribute('viewBox', `0 0 ${containerWidth} 500`);
    
    let svgContent = `<defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#91d5ff"/>
        </marker>
        <marker id="arrowhead-warning" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#fa8c16"/>
        </marker>
        <marker id="arrowhead-error" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#f5222d"/>
        </marker>
    </defs>`;
    
    topologyEdges.forEach(edge => {
        const fromNode = topologyNodes.find(n => n.id === edge.from);
        const toNode = topologyNodes.find(n => n.id === edge.to);
        if (!fromNode || !toNode) return;
        
        const color = edge.status === 'error' ? '#f5222d' : edge.status === 'warning' ? '#fa8c16' : '#91d5ff';
        const arrowId = edge.status === 'error' ? 'arrowhead-error' : edge.status === 'warning' ? 'arrowhead-warning' : 'arrowhead';
        
        svgContent += `<line x1="${fromNode.x + 60}" y1="${fromNode.y}" x2="${toNode.x - 60}" y2="${toNode.y}" stroke="${color}" stroke-width="2" marker-end="url(#${arrowId})"/>`;
    });
    
    topologyNodes.forEach(node => {
        const colors = { normal: '#52c41a', warning: '#fa8c16', error: '#f5222d', gray: '#d9d9d9' };
        const bgColors = { normal: '#f6ffed', warning: '#fff7e6', error: '#fff1f0', gray: '#f5f5f5' };
        const color = colors[node.status] || '#d9d9d9';
        const bgColor = bgColors[node.status] || '#f5f5f5';
        
        const isTarget = node.isTarget;
        const strokeWidth = isTarget ? 3 : 1;
        
        svgContent += `<g class="node-group" onclick="showNodeDetail('${node.id}')" style="cursor: pointer">`;
        svgContent += `<rect x="${node.x - 60}" y="${node.y - 40}" width="120" height="80" rx="8" fill="${bgColor}" stroke="${color}" stroke-width="${strokeWidth}"/>`;
        if (isTarget) {
            svgContent += `<rect x="${node.x - 60}" y="${node.y - 40}" width="120" height="20" rx="8" fill="${color}" opacity="0.1"/>`;
            svgContent += `<text x="${node.x}" y="${node.y - 25}" text-anchor="middle" font-size="11" fill="${color}" font-weight="bold">目标服务</text>`;
        }
        svgContent += `<text x="${node.x}" y="${node.y - 5}" text-anchor="middle" font-size="12" fill="#333">${node.name}</text>`;
        svgContent += `<text x="${node.x}" y="${node.y + 12}" text-anchor="middle" font-size="11" fill="#666">QPS: ${node.qps}</text>`;
        svgContent += `<text x="${node.x}" y="${node.y + 28}" text-anchor="middle" font-size="11" fill="#666">成功率: ${node.successRate}</text>`;
        svgContent += `<circle cx="${node.x + 45}" cy="${node.y + 35}" r="6" fill="${color}"/>`;
        svgContent += `</g>`;
    });
    
    svg.innerHTML = svgContent;
}

function renderDetailTable() {
    const tbody = document.getElementById('detailTableBody');
    tbody.innerHTML = topologyNodes.map(node => `
        <tr>
            <td>${node.name}</td>
            <td><span class="badge ${node.role === 'target' ? 'badge-primary' : node.role === 'upstream' ? 'badge-success' : 'badge-warning'}">${node.role === 'target' ? '目标' : node.role === 'upstream' ? '上游' : '下游'}</span></td>
            <td>${node.level}</td>
            <td>cn</td>
            <td>${node.qps}</td>
            <td>${parseInt(node.qps) * 1.2}k</td>
            <td><span class="badge ${getSuccessRateBadge(node.successRate)}">${node.successRate}</span></td>
            <td><span class="badge ${getCpuBadge(node.cpu)}">${node.cpu}</span></td>
            <td><span class="badge badge-gray">正常</span></td>
            <td><span class="badge ${getStatusBadge(node.status)}">${getStatusText(node.status)}</span></td>
            <td>${node.status === 'error' ? '14:23' : '-'}</td>
            <td><a href="#" class="action-link" onclick="showNodeDetail('${node.id}')">查看详情</a></td>
        </tr>
    `).join('');
}

function showNodeDetail(nodeId) {
    const node = topologyNodes.find(n => n.id === nodeId);
    if (!node) return;
    
    document.getElementById('drawerTitle').textContent = node.name;
    document.getElementById('nodePsm').textContent = node.name;
    document.getElementById('nodeRegion').textContent = 'cn';
    document.getElementById('nodeVdc').textContent = 'dc1';
    document.getElementById('nodeCluster').textContent = 'cluster-01';
    document.getElementById('nodeRole').textContent = node.role === 'target' ? '目标服务' : node.role === 'upstream' ? '上游服务' : '下游服务';
    document.getElementById('nodeLevel').textContent = node.level;
    document.getElementById('nodeQps').textContent = node.qps;
    document.getElementById('nodeCpu').textContent = node.cpu;
    document.getElementById('nodeSuccessRate').textContent = node.successRate;
    document.getElementById('nodeErrorRate').textContent = (100 - parseFloat(node.successRate)).toFixed(1) + '%';
    document.getElementById('nodePeak').textContent = parseInt(node.qps) * 1.5 + 'k';
    document.getElementById('nodeP99').textContent = parseInt(node.qps) * 0.8 + 'k';
    document.getElementById('nodeAvg').textContent = parseInt(node.qps) * 0.6 + 'k';
    document.getElementById('nodeThreshold').textContent = parseInt(node.qps) * 2 + 'k';
    
    const abnormalSection = document.getElementById('abnormalSection');
    if (node.status === 'error' || node.status === 'warning') {
        abnormalSection.style.display = 'block';
        document.getElementById('abnormalList').innerHTML = `
            <div class="abnormal-item"><span class="abnormal-label">限流发生时间</span><span class="abnormal-value">14:23</span></div>
            <div class="abnormal-item"><span class="abnormal-label">预警发生时间</span><span class="abnormal-value">14:18</span></div>
            <div class="abnormal-item"><span class="abnormal-label">工单异常时间</span><span class="abnormal-value">14:25</span></div>
        `;
        document.getElementById('nodeBeforeLimit').textContent = '8.5k';
        document.getElementById('nodeAfterLimit').textContent = '4.2k';
        document.getElementById('nodeCutRatio').textContent = '50%';
        document.getElementById('nodePriority').textContent = '优先级受限';
    } else {
        abnormalSection.style.display = 'none';
    }
    
    document.getElementById('nodeDrawer').classList.remove('hidden');
}

function closeDrawer() {
    document.getElementById('nodeDrawer').classList.add('hidden');
}

function searchTasks() {
    const name = document.getElementById('filterName').value.toLowerCase();
    const entry = document.getElementById('filterEntry').value.toLowerCase();
    const creator = document.getElementById('filterCreator').value;
    const tag = document.getElementById('filterTag').value;
    
    let filtered = observationTasks.filter(task => {
        let match = true;
        if (name && !task.name.toLowerCase().includes(name)) match = false;
        if (entry && !task.psm.toLowerCase().includes(entry)) match = false;
        if (creator && task.creator !== creator) match = false;
        if (tag && !task.tags.includes(tag)) match = false;
        return match;
    });
    
    renderObservationTable(filtered);
}

function resetFilters() {
    document.getElementById('filterName').value = '';
    document.getElementById('filterEntry').value = '';
    document.getElementById('filterCreator').value = '';
    document.getElementById('filterTag').value = '';
    renderObservationTable();
}

function switchView(view) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.view-content').forEach(v => v.classList.add('hidden'));
    
    document.getElementById(`tab${view === 'topology' ? 'Topology' : 'List'}`).classList.add('active');
    document.getElementById(`${view}View`).classList.remove('hidden');
}

function searchList() {
    const keyword = document.getElementById('listSearch').value.toLowerCase();
    const status = document.getElementById('listStatus').value;
    
    let filtered = topologyNodes.filter(node => {
        let match = true;
        if (keyword && !node.name.toLowerCase().includes(keyword)) match = false;
        if (status !== '全部状态') {
            const statusMap = { '正常': 'normal', '告警': 'warning', '异常': 'error' };
            if (node.status !== statusMap[status]) match = false;
        }
        return match;
    });
    
    const tbody = document.getElementById('detailTableBody');
    tbody.innerHTML = filtered.map(node => `
        <tr>
            <td>${node.name}</td>
            <td><span class="badge ${node.role === 'target' ? 'badge-primary' : node.role === 'upstream' ? 'badge-success' : 'badge-warning'}">${node.role === 'target' ? '目标' : node.role === 'upstream' ? '上游' : '下游'}</span></td>
            <td>${node.level}</td>
            <td>cn</td>
            <td>${node.qps}</td>
            <td>${parseInt(node.qps) * 1.2}k</td>
            <td><span class="badge ${getSuccessRateBadge(node.successRate)}">${node.successRate}</span></td>
            <td><span class="badge ${getCpuBadge(node.cpu)}">${node.cpu}</span></td>
            <td><span class="badge badge-gray">正常</span></td>
            <td><span class="badge ${getStatusBadge(node.status)}">${getStatusText(node.status)}</span></td>
            <td>${node.status === 'error' ? '14:23' : '-'}</td>
            <td><a href="#" class="action-link" onclick="showNodeDetail('${node.id}')">查看详情</a></td>
        </tr>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderLimiterTable();
    // 立即注册全局「外部点击关闭下拉」兜底
    setupLoLinksOutsideClickClose();
    // 立即绑定工作台部门树（页面加载即可用）
    if (typeof bindLoWorkbenchDeptTree === 'function') bindLoWorkbenchDeptTree();
    
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            if (page) {
                switchPage(page);
            }
        });
    });
    
    const $on = (id, evt, fn) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(evt, fn);
    };

    $on('btnSearch', 'click', searchTasks);
    $on('btnReset', 'click', resetFilters);
    $on('modalClose', 'click', closeModal);
    $on('btnModalCancel', 'click', closeModal);
    $on('btnModalConfirm', 'click', saveTask);
    $on('btnConfirmCancel', 'click', closeConfirmModal);
    $on('btnConfirmOk', 'click', deleteTask);
    $on('confirmModalClose', 'click', closeConfirmModal);
    $on('confirmModalMask', 'click', closeConfirmModal);
    $on('btnBack', 'click', goBack);
    $on('tabTopology', 'click', () => switchView('topology'));
    $on('tabList', 'click', () => switchView('list'));
    $on('drawerClose', 'click', closeDrawer);
    $on('btnDrawerClose', 'click', closeDrawer);
    $on('listSearch', 'input', searchList);
    $on('listStatus', 'change', searchList);
    $on('btnListExport', 'click', () => showToast('导出功能开发中'));
    $on('btnZoomIn', 'click', () => showToast('放大功能开发中'));
    $on('btnZoomOut', 'click', () => showToast('缩小功能开发中'));
    $on('btnResetView', 'click', renderTopology);
    $on('btnLocate', 'click', () => showToast('定位功能开发中'));
    $on('btnExport', 'click', () => showToast('导出图片功能开发中'));

    // Page Header Action Buttons
    // 链路工作台「保存配置」按钮：直接打开保存确认抽屉
    $on('btnSaveConfig', 'click', () => {
        saveCurrentLink(false);
    });

    // 保存配置 caret 下拉
    $on('btnSaveCaret', 'click', (e) => {
        e.stopPropagation();
        const menu = document.getElementById('loSaveMenu');
        if (!menu) return;
        menu.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('loSaveMenu');
        if (!menu || menu.classList.contains('hidden')) return;
        if (e.target.closest('#loSaveSplit')) return;
        menu.classList.add('hidden');
    });
    const saveMenu = document.getElementById('loSaveMenu');
    if (saveMenu) {
        saveMenu.addEventListener('click', (e) => {
            const item = e.target.closest('.lo-save-menu-item');
            if (!item) return;
            const act = item.getAttribute('data-save-act');
            saveMenu.classList.add('hidden');
            if (act === 'save') saveCurrentLink(false);
            else if (act === 'saveAs') saveCurrentLink(true);
        });
    }

    // Topology level steppers: enforce 1~3
    ['loUpLevel', 'loDownLevel'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('input', () => {
            let v = parseInt(el.value, 10);
            if (isNaN(v)) return;
            if (v > 3) { el.value = 3; showToast('拓扑层级最多 3 层'); }
            if (v < 1) el.value = 1;
        });
    });

    // 保存链路抽屉绑定
    $on('loSaveDrawerClose', 'click', closeLoSaveDrawer);
    $on('loSaveDrawerCancel', 'click', closeLoSaveDrawer);
    $on('loSaveDrawerConfirm', 'click', confirmLoSaveDrawer);
    // 点击遮罩关闭抽屉
    const _loSaveDrawer = document.getElementById('loSaveDrawer');
    if (_loSaveDrawer && !_loSaveDrawer._bound) {
        _loSaveDrawer._bound = true;
        _loSaveDrawer.addEventListener('click', (e) => {
            if (e.target === _loSaveDrawer) closeLoSaveDrawer();
        });
    }
    // ESC 关闭 / Enter 提交（仅当抽屉打开时）
    if (!document._loSaveDrawerKeyBound) {
        document._loSaveDrawerKeyBound = true;
        document.addEventListener('keydown', (e) => {
            const drawer = document.getElementById('loSaveDrawer');
            if (!drawer || drawer.classList.contains('hidden')) return;
            if (e.key === 'Escape') { e.preventDefault(); closeLoSaveDrawer(); }
            else if (e.key === 'Enter' && document.activeElement?.id === 'loSaveName') {
                e.preventDefault(); confirmLoSaveDrawer();
            }
        });
    }

    // New Link Observation page bindings
    $on('loTabTopology', 'click', () => switchLoView('topology'));
    $on('loTabList', 'click', () => switchLoView('list'));
    // 工作台头部：返回
    $on('loBackToList', 'click', () => switchPage('link-observation'));
    $on('loGenerateBtn', 'click', () => {
        // 先同步状态机，再渲染，确保状态切换原子化
        const snapshot = JSON.stringify(collectLoFilterValues());
        loConfigState.lastGenerated = snapshot;
        loConfigState.dirty = false;
        loConfigState.firstFilled = false;
        loResultGenerated = true;
        renderLoTopology();
        renderLoList();
        persistLoFilterDraft();
        showToast('已生成结果');
    });
    // 链路查询结果 - 列表视图筛选
    ['loListFCallerSvc', 'loListFCallerCluster', 'loListFCallerIface', 'loListFCalleeSvc', 'loListFCalleeCluster', 'loListFCalleeIface'].forEach(id => {
        $on(id, 'input', renderLoList);
        $on(id, 'keydown', (e) => {
            if (e.key === 'Enter') renderLoList();
        });
    });
    $on('loListSearchBtn', 'click', renderLoList);
    $on('loListResetBtn', 'click', () => {
        ['loListFCallerSvc', 'loListFCallerCluster', 'loListFCallerIface', 'loListFCalleeSvc', 'loListFCalleeCluster', 'loListFCalleeIface'].forEach(id => {
            const el = document.getElementById(id); if (el) el.value = '';
        });
        renderLoList();
    });
    // 链路查询结果筛选项 - 下拉搜索建议
    setupLoListFilterSuggest();
    // 列表视图操作列「查看」按钮：打开节点服务详情抽屉
    const _loListBody = document.getElementById('loListTableBody');
    if (_loListBody && !_loListBody._bound) {
        _loListBody._bound = true;
        _loListBody.addEventListener('click', (e) => {
            const btn = e.target.closest('.lo-list-view-btn');
            if (!btn) return;
            const psm = btn.getAttribute('data-psm');
            if (psm) openLoNodeDrawer(psm);
        });
        // 长名称 hover 展示全称
        _loListBody.addEventListener('mouseover', (e) => {
            const tgt = e.target.closest('[data-fullname]');
            if (tgt && typeof showLoRuleFullnameTip === 'function') showLoRuleFullnameTip(tgt);
        });
        _loListBody.addEventListener('mouseout', (e) => {
            const tgt = e.target.closest('[data-fullname]');
            if (tgt && typeof hideLoRuleFullnameTip === 'function') hideLoRuleFullnameTip();
        });
    }
    $on('loNodeDrawerClose', 'click', closeLoNodeDrawer);
    $on('loNodeDrawerMask', 'click', closeLoNodeDrawer);

    // 拓扑画布工具栏
    $on('loCanvasLocate', 'click', toggleLoLocatePanel);
    $on('loCanvasExport', 'click', exportLoCanvas);
    $on('loCanvasZoomIn', 'click', () => { loCanvasState.zoom = Math.min(2, loCanvasState.zoom + 0.2); renderLoTopology(); });
    $on('loCanvasZoomOut', 'click', () => { loCanvasState.zoom = Math.max(0.4, loCanvasState.zoom - 0.2); renderLoTopology(); });
    $on('loCanvasFullscreen', 'click', toggleLoFullscreen);

    // Lightbox 关闭
    $on('loImageLightboxClose', 'click', closeLoImageLightbox);
    const lbMaskEl = document.querySelector('#loImageLightbox .lo-image-lightbox-mask');
    if (lbMaskEl) lbMaskEl.addEventListener('click', closeLoImageLightbox);

    // 限流详情 drawer 关闭/保存
    $on('loLimitDetailDrawerClose', 'click', closeLoLimitDetailDrawer);
    $on('loLimitDetailDrawerMask', 'click', closeLoLimitDetailDrawer);
    $on('loLimitDetailCancel', 'click', closeLoLimitDetailDrawer);
    $on('loLimitDetailSave', 'click', saveLoLimitDetail);
    $on('loLocateInput', 'focus', updateLoLocateDropdown);
    $on('loLocateInput', 'input', updateLoLocateDropdown);
    document.addEventListener('click', (e) => {
        const panel = document.getElementById('loLocatePanel');
        const btn = document.getElementById('loCanvasLocate');
        if (!panel || panel.classList.contains('hidden')) return;
        if (!panel.contains(e.target) && !btn.contains(e.target)) {
            panel.classList.add('hidden');
            btn.classList.remove('active');
        }
    });

    initSearchableSelects();
    initLoFilterWatch();
    restoreLoFilterDraft();
    renderLoTopology();
    renderLoList();
});

function initSearchableSelects() {
    const optionsMap = {
        filterName: () => [...new Set(observationTasks.map(t => t.name))],
        filterEntry: () => [...new Set(observationTasks.map(t => t.psm))],
        filterCreator: () => [...new Set(observationTasks.map(t => t.creator))],
        filterTag: () => [...new Set(observationTasks.flatMap(t => t.tags))],
        formPsm: () => [
            'ttec.western.mall.event',
            'oec.promotion.trade_engine',
            'oec.operation.product_group',
            'toutiao.ms.argos',
            'promotion.points_business',
            'oec.promotion.price_data'
        ],
        formMethod: () => ['CreateOrder', 'GetBillInfo', 'QueryOrder', 'PayOrder', 'ReverseOrder'],
        formCluster: () => ['default', 'cluster-01', 'cluster-02', 'cluster-03'],
        formVRegion: () => ['CN', 'SG', 'US', 'ROW'],
        formVDC: () => ['maliva', 'useast', 'boe', 'lf', 'hl'],
        loEntry: () => [
            'toutiao.ms.argos',
            'ttec.western.mall.event',
            'oec.promotion.trade_engine',
            'oec.operation.product_group',
            'promotion.points_business',
            'toutiao.search.gateway',
            'toutiao.feed.ranking',
            'ecom.payment.cashier',
            'ecom.risk.gateway',
            'douyin.live.stream',
            'douyin.im.message',
            'lark.calendar.api',
            'lark.docs.editor',
            'tiktok.user.profile',
            'tiktok.video.encode'
        ],
        loVDC: () => ['maliva', 'useast', 'boe', 'lf', 'hl', 'sg-central', 'us-east'],
        loCluster: () => ['default', 'cluster-01', 'cluster-02', 'cluster-03', 'gray', 'canary'],
        loDepType: () => ['强依赖/业务强依赖', '弱依赖', '未定义/无法判断'],
        loPriority: () => ['P0', 'P1', 'P2'],
        loSvcType: () => ['HTTP', 'RPC'],
        loTimeRange: () => ['近 1h', '近 3h', '近 6h', '近 12h', '近 24h', '近 3 天', '近 7 天']
    };

    // 链路入口 服务 → 接口（双联级）映射
    const loEntryMethodMap = window.loEntryMethodMap;

    document.querySelectorAll('.searchable-select').forEach(wrapper => {
        const field = wrapper.dataset.field;
        const input = wrapper.querySelector('.searchable-input');
        const dropdown = wrapper.querySelector('.searchable-dropdown');

        // 链路入口：双联级搜索（服务 + 接口），支持跨层级搜索
        if (field === 'loEntry' && wrapper.classList.contains('lo-cascader-select')) {
            const colSvc = dropdown.querySelector('.lo-cascader-col-svc');
            const colMethod = dropdown.querySelector('.lo-cascader-col-method');
            let activeSvc = null;
            let methodFilterKw = ''; // 用于在右栏中高亮 / 过滤接口

            const renderSvcCol = (keyword = '') => {
                const all = optionsMap.loEntry();
                const kw = keyword.toLowerCase().trim();
                let filtered;
                if (!kw) {
                    filtered = all;
                } else {
                    // 跨层级：服务名匹配 OR 该服务下任一接口名匹配
                    filtered = all.filter(svc => {
                        if (svc.toLowerCase().includes(kw)) return true;
                        const methods = loEntryMethodMap[svc] || [];
                        return methods.some(m => m.toLowerCase().includes(kw));
                    });
                }
                if (filtered.length === 0) {
                    colSvc.innerHTML = '<div class="searchable-empty">暂无匹配项</div>';
                    colMethod.innerHTML = '';
                    return;
                }
                // 若当前 activeSvc 不在过滤结果中：优先选中"接口命中"的第一个服务
                if (!activeSvc || !filtered.includes(activeSvc)) {
                    if (kw) {
                        const svcWithMethodHit = filtered.find(svc => {
                            const methods = loEntryMethodMap[svc] || [];
                            return methods.some(m => m.toLowerCase().includes(kw));
                        });
                        activeSvc = svcWithMethodHit || filtered[0];
                    } else {
                        activeSvc = filtered[0];
                    }
                }
                colSvc.innerHTML = filtered.map(svc => {
                    const cls = svc === activeSvc ? ' active' : '';
                    // 用关键词高亮服务名
                    const labelHtml = highlightKw(svc, kw);
                    return `<div class="lo-cascader-svc${cls}" data-svc="${svc}">
                        <span class="lo-cascader-svc-label">${labelHtml}</span>
                        <span class="lo-cascader-svc-arrow">›</span>
                    </div>`;
                }).join('');
                renderMethodCol();
            };

            const renderMethodCol = () => {
                if (!activeSvc) {
                    colMethod.innerHTML = '';
                    return;
                }
                const methods = loEntryMethodMap[activeSvc] || [];
                const kw = methodFilterKw.toLowerCase().trim();
                // 跨层级搜索时：只展示匹配接口；若服务名命中（接口都不匹配）则展示全部
                let displayMethods = methods;
                if (kw) {
                    const svcMatches = activeSvc.toLowerCase().includes(kw);
                    const methodMatches = methods.filter(m => m.toLowerCase().includes(kw));
                    displayMethods = methodMatches.length > 0 ? methodMatches : (svcMatches ? methods : []);
                }
                if (displayMethods.length === 0) {
                    colMethod.innerHTML = '<div class="searchable-empty">该服务暂无匹配接口</div>';
                    return;
                }
                colMethod.innerHTML = displayMethods.map(m => {
                    const fullVal = activeSvc + ' / ' + m;
                    const active = input.value === fullVal ? ' active' : '';
                    const labelHtml = highlightKw(m, kw);
                    return `<div class="lo-cascader-method${active}" data-svc="${activeSvc}" data-method="${m}">${labelHtml}</div>`;
                }).join('');
            };

            // 关键词高亮辅助
            const highlightKw = (text, kw) => {
                if (!kw) return text;
                const idx = text.toLowerCase().indexOf(kw);
                if (idx === -1) return text;
                const before = text.slice(0, idx);
                const hit = text.slice(idx, idx + kw.length);
                const after = text.slice(idx + kw.length);
                return `${before}<span class="lo-cascader-hl">${hit}</span>${after}`;
            };

            const showDropdown = () => {
                const v = input.value;
                let kw = v;
                if (v && v.indexOf(' / ') !== -1) {
                    const parts = v.split(' / ');
                    const svc = parts[0].trim();
                    if (loEntryMethodMap[svc]) {
                        activeSvc = svc;
                        kw = '';
                    }
                }
                methodFilterKw = kw;
                renderSvcCol(kw);
                dropdown.classList.remove('hidden');
                wrapper.classList.add('open');
            };
            const hideDropdown = () => {
                dropdown.classList.add('hidden');
                wrapper.classList.remove('open');
            };

            input.addEventListener('focus', showDropdown);
            input.addEventListener('click', showDropdown);
            input.addEventListener('input', () => {
                const v = input.value;
                // 整段「服务 / 接口」格式时，按服务名搜索；否则整段都参与搜索
                let kw = v;
                if (v.indexOf(' / ') !== -1) kw = v.split(' / ')[0].trim();
                methodFilterKw = kw;
                // 输入变更时重置 activeSvc，让其根据搜索结果自动选最优
                activeSvc = null;
                renderSvcCol(kw);
            });

            colSvc.addEventListener('mousedown', (e) => {
                const item = e.target.closest('.lo-cascader-svc');
                if (!item) return;
                e.preventDefault();
                activeSvc = item.dataset.svc;
                colSvc.querySelectorAll('.lo-cascader-svc').forEach(el => {
                    el.classList.toggle('active', el.dataset.svc === activeSvc);
                });
                renderMethodCol();
            });

            colMethod.addEventListener('mousedown', (e) => {
                const item = e.target.closest('.lo-cascader-method');
                if (!item) return;
                e.preventDefault();
                input.value = item.dataset.svc + ' / ' + item.dataset.method;
                methodFilterKw = '';
                hideDropdown();
                input.blur();
            });

            document.addEventListener('click', (e) => {
                if (!wrapper.contains(e.target)) hideDropdown();
            });
            return;
        }

        const renderOptions = (keyword = '') => {
            const all = optionsMap[field] ? optionsMap[field]() : [];
            const kw = keyword.toLowerCase().trim();
            const filtered = kw
                ? all.filter(opt => opt.toLowerCase().includes(kw))
                : all;
            if (filtered.length === 0) {
                dropdown.innerHTML = '<div class="searchable-empty">暂无匹配项</div>';
            } else {
                dropdown.innerHTML = filtered.map(opt => {
                    const active = opt === input.value ? ' active' : '';
                    return `<div class="searchable-option${active}" data-value="${opt}">${opt}</div>`;
                }).join('');
            }
        };

        const showDropdown = () => {
            renderOptions(input.value);
            dropdown.classList.remove('hidden');
            wrapper.classList.add('open');
        };

        const hideDropdown = () => {
            dropdown.classList.add('hidden');
            wrapper.classList.remove('open');
        };

        input.addEventListener('focus', showDropdown);
        input.addEventListener('click', showDropdown);
        input.addEventListener('input', () => renderOptions(input.value));

        dropdown.addEventListener('mousedown', (e) => {
            const opt = e.target.closest('.searchable-option');
            if (!opt) return;
            e.preventDefault();
            input.value = opt.dataset.value;
            hideDropdown();
        });

        document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) hideDropdown();
        });
    });
}

function viewDetail(id) { viewDetail(id); }
function editTask(id) { openModal('edit', id); }
function copyTask(id) { openModal('copy', id); }
function showDeleteConfirm(id) { showDeleteConfirm(id); }

/* ============= Link Observation: new layout ============= */
function switchLoView(view) {
    const tabT = document.getElementById('loTabTopology');
    const tabL = document.getElementById('loTabList');
    const canvas = document.getElementById('loCanvas');
    const list = document.getElementById('loListView');
    if (!tabT || !tabL || !canvas || !list) return;
    if (view === 'topology') {
        tabT.classList.add('active');
        tabL.classList.remove('active');
        canvas.classList.remove('hidden');
        list.classList.add('hidden');
    } else {
        tabT.classList.remove('active');
        tabL.classList.add('active');
        canvas.classList.add('hidden');
        list.classList.remove('hidden');
    }
}

const loTopologyData = {
    target: {
        psm: 'toutiao.ms.argos',
        status: 'normal', // normal | warn | error
        abnormalTraffic: false,
        qps: '10.67 req/s',
        vdc: 'Singapore-Central / sg3',
        cluster: 'cluster-a',
        method: 'http',
        limitConfig: '阈值 15 req/s，优先级 P1 保底',
        currentQps: '10.67 req/s',
        peakQps: '18.3',
        p99: '13.2',
        threshold: '15.0',
        invokeMethod: 'GET /api/v2/argos/query',
        cpu: '36%',
        success: '99.98%',
        upstream: 'payment-core / promotion-gateway',
        downstream: 'alarm / argos_monitor_data / facade-api-i18n',
        limitMode: 'iface'
    },
    downstream: [
        {
            psm: 'bytedance.bytedoc.argos_monitor_data',
            status: 'normal',
            abnormalTraffic: false,
            qps: '',
            vdc: 'Singapore-Central / sg3',
            cluster: 'cluster-c',
            method: 'rpc',
            limitConfig: '阈值 5k req/s，优先级 P2',
            currentQps: '0 req/s',
            peakQps: '0.5k',
            p99: '0.4k',
            threshold: '5k',
            invokeMethod: 'BatchWrite',
            cpu: '20%',
            success: '100%',
            upstream: 'toutiao.ms.argos',
            downstream: '-',
            limitMode: 'iface'
        },
        {
            psm: 'toutiao.microservice.alarm',
            status: 'error',
            abnormalTraffic: true,
            abnormalCount: 1,
            qps: '609.17 req/s',
            vdc: 'Singapore-Central / sg3',
            cluster: 'cluster-b',
            method: 'rpc',
            limitConfig: '阈值 500 req/s，优先级 P0',
            currentQps: '609.17 req/s',
            peakQps: '8.6k',
            p99: '7.2k',
            threshold: '500',
            invokeMethod: 'NotifyAlarm',
            cpu: '88%',
            success: '91.3%',
            upstream: 'toutiao.ms.argos',
            downstream: '-',
            limitEvent: { time: '2026-05-19 14:23:08', data: '触发限流，丢弃 1284 次/min，达到阈值 500 req/s 上限 121.8%' },
            warnEvent: { time: '2026-05-19 14:18:31', data: 'CPU 利用率 88%（阈值 80%），触发预警' },
            ticketEvent: { time: '2026-05-19 14:25:42', data: '工单 #INC-20260519-882：alarm 服务接口响应延迟异常，关联告警 5 条' },
            limitMode: 'key'
        },
        {
            psm: 'facade-api-i18n.byted.org',
            status: 'warn',
            abnormalTraffic: false,
            qps: '',
            vdc: 'Singapore-East / sg5',
            cluster: 'cluster-d',
            method: 'http',
            limitConfig: '阈值 2k req/s，优先级 P1',
            currentQps: '120 req/s',
            peakQps: '1.2k',
            p99: '0.9k',
            threshold: '2k',
            invokeMethod: 'GET /i18n/translate',
            cpu: '32%',
            success: '99.8%',
            upstream: 'toutiao.ms.argos',
            downstream: '-',
            warnEvent: { time: '2026-05-19 13:48:11', data: '调用成功率 99.8%（阈值 99.9%），触发预警' },
            limitMode: 'iface'
        }
    ],
    upstream: []
};

// 状态颜色映射
const LO_STATUS_COLOR = {
    normal: { rect: '#d4f4d4', stroke: '#52c41a', dot: '#52c41a', text: '#1d1f23', isLight: true },
    warn:   { rect: '#fff7e6', stroke: '#fa8c16', dot: '#fa8c16', text: '#1d1f23', isLight: true },
    error:  { rect: '#fff1f0', stroke: '#ff4d4f', dot: '#ff4d4f', text: '#1d1f23', isLight: true }
};

// 是否已生成观测结果（初始登录为 false，拓扑/列表展示空态）
let loResultGenerated = false;

// 拓扑视图交互状态
const loCanvasState = {
    zoom: 1,
    metric: 'QPS',
    stat: '最新值',
    realtime: true,
    legend: true,
    realtimeTimer: null,
    alertFilter: 'all',
    qpsOp: 'gte',
    qpsValue: null,
    cpuOp: 'gte',
    cpuValue: null
};

// 各节点的指标样本（用于切换节点指标/统计函数时显示）
function getLoMetricLabel(node) {
    const m = loCanvasState.metric;
    const s = loCanvasState.stat;
    const data = {
        QPS: { '最新值': node.currentQps || '-', '均值': node.peakQps ? (parseFloat(node.peakQps) * 0.6).toFixed(2) + ' req/s' : '-', '峰值': node.peakQps ? node.peakQps + ' req/s' : '-', 'P99': node.p99 ? node.p99 + ' req/s' : '-' },
        '错误率': { '最新值': node.success ? (100 - parseFloat(node.success)).toFixed(2) + '%' : '-', '均值': '0.05%', '峰值': '8.7%', 'P99': '7.2%' },
        '延迟': { '最新值': '36ms', '均值': '42ms', '峰值': '128ms', 'P99': '96ms' },
        CPU: { '最新值': node.cpu || '-', '均值': node.cpu || '-', '峰值': node.cpu || '-', 'P99': node.cpu || '-' }
    };
    return (data[m] && data[m][s]) || '-';
}

function renderLoTopology() {
    const svg = document.getElementById('loTopologySvg');
    if (!svg) return;
    const baseW = svg.clientWidth || 900;
    const w = baseW;
    const h = 460;
    // 未生成结果时显示空态提示
    if (!loResultGenerated) {
        svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
        svg.innerHTML = `
            <text x="${w / 2}" y="${h / 2}" text-anchor="middle" fill="#bfbfbf" font-size="14">点击「生成结果」查看链路拓扑</text>
        `;
        const cnt = document.getElementById('loCanvasCount');
        if (cnt) cnt.textContent = '0';
        // 隐藏告警筛选面板
        const filterPanel = document.getElementById('loAlertFilterPanel');
        if (filterPanel) filterPanel.classList.add('hidden');
        // 重置图例计数
        ['loLegendCntNormal', 'loLegendCntError', 'loLegendCntWarn', 'loLegendCntAbnormal'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = '0';
        });
        return;
    }
    const z = loCanvasState.zoom;
    // 使用 viewBox 实现缩放
    const vbW = w / z;
    const vbH = h / z;
    const offsetX = (w - vbW) / 2;
    const offsetY = (h - vbH) / 2;
    svg.setAttribute('viewBox', `${offsetX} ${offsetY} ${vbW} ${vbH}`);
    const targetX = w * 0.32;
    const targetY = h / 2;
    const downX = w * 0.62;
    const downCount = loTopologyData.downstream.length;
    // 接口粒度时节点更高，加大行间距避免重叠
    const _gran = document.querySelector('input[name="loGran"][value="interface"]');
    const _showIface = !!(_gran && _gran.checked);
    const downGap = _showIface ? 100 : 70;
    const downStartY = targetY - ((downCount - 1) * downGap) / 2;

    let html = '';

    // 节点统一宽度（与 renderLoNode 中保持一致）
    const NODE_W = 220;

    // Edges (curved)
    loTopologyData.downstream.forEach((node, i) => {
        const ny = downStartY + i * downGap;
        const c1x = (targetX + NODE_W + downX) / 2;
        const path = `M ${targetX + NODE_W} ${targetY} C ${c1x} ${targetY}, ${c1x} ${ny}, ${downX - 4} ${ny}`;
        const stroke = node.status === 'error' ? '#ff4d4f' : (node.status === 'warn' ? '#fa8c16' : '#ffa39e');
        html += `<path class="lo-edge" data-from="${loTopologyData.target.psm}" data-to="${node.psm}" d="${path}" fill="none" stroke="${stroke}" stroke-width="1.5" opacity="0.85"/>`;
        html += `<circle cx="${downX - 4}" cy="${ny}" r="3" fill="${stroke}"/>`;
        const labelX = (targetX + NODE_W + downX) / 2;
        const labelY = (targetY + ny) / 2 - 6;
        const metric = getLoMetricLabel(node);
        if (metric !== '-') {
            html += `<text x="${labelX}" y="${labelY}" text-anchor="middle" fill="${stroke}" font-size="11">${metric}</text>`;
        }
    });

    // Target node
    html += renderLoNode(targetX, targetY, loTopologyData.target, true);

    // Downstream nodes
    loTopologyData.downstream.forEach((node, i) => {
        const ny = downStartY + i * downGap;
        html += renderLoNode(downX, ny, node, false);
    });

    svg.innerHTML = html;

    // 节点点击 -> 详情抽屉
    svg.querySelectorAll('[data-psm]').forEach(el => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
            const psm = el.getAttribute('data-psm');
            openLoNodeDrawer(psm);
        });
        // hover 高亮关联边 + 在节点上方展示全称 tooltip
        el.addEventListener('mouseenter', () => {
            const psm = el.getAttribute('data-psm');
            svg.querySelectorAll('.lo-edge').forEach(p => {
                if (p.getAttribute('data-from') === psm || p.getAttribute('data-to') === psm) {
                    p.setAttribute('stroke-width', '3');
                    p.setAttribute('opacity', '1');
                } else {
                    p.setAttribute('opacity', '0.25');
                }
            });
            showLoNodeTooltip(el);
        });
        el.addEventListener('mouseleave', () => {
            svg.querySelectorAll('.lo-edge').forEach(p => {
                p.setAttribute('stroke-width', '1.5');
                p.setAttribute('opacity', '0.85');
            });
            hideLoNodeTooltip();
        });
    });

    // 边点击 → 边详情抽屉
    svg.querySelectorAll('.lo-edge').forEach(p => {
        p.style.cursor = 'pointer';
        p.addEventListener('click', (e) => {
            e.stopPropagation();
            const from = p.getAttribute('data-from');
            const to = p.getAttribute('data-to');
            openLoEdgeDrawer(from, to);
        });
    });

    // 更新节点计数
    const cnt = document.getElementById('loCanvasCount');
    if (cnt) cnt.textContent = String(1 + loTopologyData.downstream.length);

    // 更新告警筛选条 + 一次性绑定 chips
    updateLoAlertBar();
    bindLoAlertBarChips();
    bindLoCanvasMetricFilter();
    bindLoCanvasLegendChips();
}

function renderLoNode(x, y, node, isTarget) {
    const status = node.status || 'normal';
    const color = LO_STATUS_COLOR[status];
    const label = node.psm;
    // 是否启用接口粒度：勾选了 interface 复选框
    const showIface = (function() {
        const el = document.querySelector('input[name="loGran"][value="interface"]');
        return !!(el && el.checked);
    })();
    const ifaceText = showIface ? `method: ${node.invokeMethod || '-'}` : '';

    // 所有节点采用统一宽度（target 与 downstream 一致）；过长文本截断，由 <title> 提供 hover 全称
    const rectW = 220;
    const PSM_MAX_CHARS = 26;
    const IFACE_MAX_CHARS = 26;
    const truncate = (s, max) => {
        if (!s) return '';
        if (s.length <= max) return s;
        return s.slice(0, Math.max(0, max - 1)) + '…';
    };
    const displayLabel = truncate(label, PSM_MAX_CHARS);
    const displayIface = truncate(ifaceText, IFACE_MAX_CHARS);
    const hasAbn = !!node.abnormalTraffic;

    // 节点高度：双行 56，单行 30
    const rectH = showIface ? 56 : 30;
    const rectX = x;
    const rectY = y - rectH / 2;
    const psmRowY = rectY;
    const psmRowH = showIface ? 28 : rectH;
    const psmCenterY = psmRowY + psmRowH / 2;
    const ifaceRowY = psmRowY + psmRowH;
    const ifaceRowH = 28;
    const ifaceCenterY = ifaceRowY + ifaceRowH / 2;

    // alertFilter 命中判定
    const filter = loCanvasState.alertFilter || 'all';
    let matched = true;
    if (!isTarget && filter !== 'all') {
        if (filter === 'error') matched = (status === 'error');
        else if (filter === 'warn') matched = (status === 'warn');
        else if (filter === 'normal') matched = (status === 'normal' && !node.abnormalTraffic);
        else if (filter === 'abnormal') matched = !!node.abnormalTraffic;
        else matched = true;
    }
    // QPS / CPU 数值筛选命中判定（target 节点不参与）
    const cmp = (val, op, target) => {
        if (val == null || isNaN(val)) return false;
        if (op === 'gte') return val >= target;
        if (op === 'lte') return val <= target;
        if (op === 'eq') return val === target;
        return true;
    };
    let metricMatched = true;
    if (!isTarget) {
        if (loCanvasState.qpsValue != null) {
            const qps = parseFloat(String(node.peakQps || node.currentQps || '').replace(/[^\d.]/g, ''));
            metricMatched = metricMatched && cmp(qps, loCanvasState.qpsOp, loCanvasState.qpsValue);
        }
        if (loCanvasState.cpuValue != null) {
            const cpu = parseFloat(String(node.cpu || '').replace(/[^\d.]/g, ''));
            metricMatched = metricMatched && cmp(cpu, loCanvasState.cpuOp, loCanvasState.cpuValue);
        }
    }
    const hasMetricFilter = !isTarget && (loCanvasState.qpsValue != null || loCanvasState.cpuValue != null);
    const dim = !isTarget && ((filter !== 'all' && !matched) || (hasMetricFilter && !metricMatched));
    const groupOpacity = dim ? 0.25 : 1;
    const baseStrokeW = isTarget || status === 'error' ? 1.8 : 1;
    const strokeW = (!isTarget && ((filter !== 'all' && matched) || (hasMetricFilter && metricMatched))) ? 2.5 : baseStrokeW;

    // 「异常」红色圆形数字角标（参考消息未读提醒：红底白字 + 白边），溢出节点右上角
    let abnTagSvg = '';
    if (hasAbn) {
        const cnt = node.abnormalCount || 1;
        const display = cnt > 99 ? '99+' : String(cnt);
        const r = 9;
        const cx = rectX + rectW - 2;
        const cy = psmRowY + 2;
        abnTagSvg = `
            <g class="lo-abn-badge">
                <circle cx="${cx}" cy="${cy}" r="${r}" fill="#722ed1" stroke="#ffffff" stroke-width="2"/>
                <text x="${cx}" y="${cy + 3.5}" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="600">${display}</text>
            </g>
        `;
    }

    // 接口行：浅灰底 + 黑字
    let ifaceRowSvg = '';
    if (showIface) {
        ifaceRowSvg = `
            <rect x="${rectX}" y="${ifaceRowY}" width="${rectW}" height="${ifaceRowH}" fill="#f5f5f5" stroke="${color.stroke}" stroke-width="${strokeW}" rx="0" ry="0"/>
            <text x="${rectX + 12}" y="${ifaceCenterY + 4}" fill="#1d1f23" font-size="12">${displayIface}</text>
        `;
    }

    // 节点级 hover 全称：psm 单行 / psm + method 双行；通过 data-full 提供给自定义 tooltip
    const fullTitle = showIface ? `${label}\n${ifaceText}` : label;
    const fullAttr = encodeURIComponent(fullTitle);

    return `
        <g data-psm="${label}" data-full="${fullAttr}" opacity="${groupOpacity}">
            <rect x="${rectX}" y="${psmRowY}" width="${rectW}" height="${psmRowH}" fill="${color.rect}" stroke="${color.stroke}" stroke-width="${strokeW}" rx="4" ry="4"/>
            ${ifaceRowSvg}
            <text x="${rectX + 12}" y="${psmCenterY + 4}" fill="${color.text}" font-size="12">${displayLabel}</text>
            ${abnTagSvg}
        </g>
    `;
}

// 自定义节点 hover 全称 tooltip：定位在节点正上方
function showLoNodeTooltip(gEl) {
    if (!gEl) return;
    const canvas = document.getElementById('loCanvas');
    if (!canvas) return;
    let tip = document.getElementById('loNodeTooltip');
    if (!tip) {
        tip = document.createElement('div');
        tip.id = 'loNodeTooltip';
        tip.className = 'lo-node-tooltip hidden';
        canvas.appendChild(tip);
    }
    let full = '';
    try {
        full = decodeURIComponent(gEl.getAttribute('data-full') || '');
    } catch (e) { full = gEl.getAttribute('data-psm') || ''; }
    if (!full) return;
    tip.innerHTML = full.split('\n').map(s => `<div>${s}</div>`).join('');
    // 使其先渲染以测量尺寸
    tip.classList.remove('hidden');
    const canvasRect = canvas.getBoundingClientRect();
    const nodeRect = gEl.getBoundingClientRect();
    const tipRect = tip.getBoundingClientRect();
    let left = (nodeRect.left - canvasRect.left) + (nodeRect.width - tipRect.width) / 2;
    let top = (nodeRect.top - canvasRect.top) - tipRect.height - 8;
    // 边界保护
    if (left < 4) left = 4;
    if (left + tipRect.width > canvasRect.width - 4) left = canvasRect.width - tipRect.width - 4;
    if (top < 4) top = (nodeRect.bottom - canvasRect.top) + 8; // 上方放不下时退到下方
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
}

function hideLoNodeTooltip() {
    const tip = document.getElementById('loNodeTooltip');
    if (tip) tip.classList.add('hidden');
}

let _loAlertChipsBound = false;
function bindLoAlertBarChips() {
    if (_loAlertChipsBound) return;
    const panel = document.getElementById('loAlertFilterPanel');
    if (!panel) return;
    panel.querySelectorAll('.lo-alert-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            panel.querySelectorAll('.lo-alert-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const filter = chip.getAttribute('data-filter') || 'all';
            loCanvasState.alertFilter = filter;
            // 同步左上 legend 的 active 态
            document.querySelectorAll('.lo-canvas-legend .lo-legend-item').forEach(item => {
                item.classList.toggle('active', item.getAttribute('data-filter') === filter);
            });
            renderLoTopology();
        });
    });
    _loAlertChipsBound = true;
}

let _loMetricFilterBound = false;
function bindLoCanvasMetricFilter() {
    if (_loMetricFilterBound) return;
    const btn = document.getElementById('loCanvasMetricApply');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const qpsOp = (document.getElementById('loCanvasQpsOp')?.value || document.getElementById('loCanvasQpsOp')?.getAttribute('data-op') || 'gte');
        const qpsRaw = document.getElementById('loCanvasQpsValue')?.value;
        const cpuOp = document.getElementById('loCanvasCpuOp')?.value || 'gte';
        const cpuRaw = document.getElementById('loCanvasCpuValue')?.value;
        loCanvasState.qpsOp = qpsOp;
        loCanvasState.qpsValue = (qpsRaw === '' || qpsRaw == null) ? null : parseFloat(qpsRaw);
        loCanvasState.cpuOp = cpuOp;
        loCanvasState.cpuValue = (cpuRaw === '' || cpuRaw == null) ? null : parseFloat(cpuRaw);
        renderLoTopology();
    });
    _loMetricFilterBound = true;
}

function updateLoAlertBar() {
    const all = [loTopologyData.target, ...loTopologyData.downstream];
    let normal = 0, err = 0, warn = 0, abnormal = 0;
    all.forEach(n => {
        if (n.status === 'error') err++;
        else if (n.status === 'warn') warn++;
        else normal++;
        if (n.abnormalTraffic) abnormal++;
    });
    const setText = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = String(v); };
    setText('loLegendCntAll', all.length);
    setText('loLegendCntNormal', normal);
    setText('loLegendCntError', err);
    setText('loLegendCntWarn', warn);
    setText('loLegendCntAbnormal', abnormal);
    // legend 高亮态与 alertFilter 同步
    document.querySelectorAll('.lo-canvas-legend .lo-legend-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-filter') === (loCanvasState.alertFilter || 'all'));
    });
    const hasAlert = (err + warn + abnormal) > 0;
    const panel = document.getElementById('loAlertFilterPanel');
    if (panel) {
        if (hasAlert) panel.classList.remove('hidden');
        else panel.classList.add('hidden');
    }
}

let _loLegendChipsBound = false;
function bindLoCanvasLegendChips() {
    if (_loLegendChipsBound) return;
    const legend = document.querySelector('.lo-canvas-legend');
    if (!legend) return;
    legend.querySelectorAll('.lo-legend-item').forEach(item => {
        item.addEventListener('click', () => {
            const filter = item.getAttribute('data-filter') || 'all';
            loCanvasState.alertFilter = filter;
            // 同步右上 alert chip 的 active 态（若存在）
            const panel = document.getElementById('loAlertFilterPanel');
            if (panel) {
                panel.querySelectorAll('.lo-alert-chip').forEach(c => {
                    c.classList.toggle('active', c.getAttribute('data-filter') === filter);
                });
            }
            renderLoTopology();
        });
    });
    _loLegendChipsBound = true;
}

function renderLoList() {
    const tbody = document.getElementById('loListTableBody');
    if (!tbody) return;
    // 根据观测粒度切换列与筛选项的可见性
    applyLoListGranularityVisibility();
    // 未生成结果时列表清空
    if (!loResultGenerated) {
        tbody.innerHTML = '';
        return;
    }
    const isInterfaceLevel = !!document.querySelector('input[name="loGran"][value="interface"]:checked');
    const fCallerSvc = (document.getElementById('loListFCallerSvc')?.value || '').toLowerCase().trim();
    const fCallerCluster = (document.getElementById('loListFCallerCluster')?.value || '').toLowerCase().trim();
    const fCallerIface = isInterfaceLevel ? (document.getElementById('loListFCallerIface')?.value || '').toLowerCase().trim() : '';
    const fCalleeSvc = (document.getElementById('loListFCalleeSvc')?.value || '').toLowerCase().trim();
    const fCalleeCluster = (document.getElementById('loListFCalleeCluster')?.value || '').toLowerCase().trim();
    const fCalleeIface = isInterfaceLevel ? (document.getElementById('loListFCalleeIface')?.value || '').toLowerCase().trim() : '';

    const callerSvc = loTopologyData.target.psm;
    const callerCluster = loTopologyData.target.cluster || '-';
    const callerIface = loTopologyData.target.invokeMethod || '-';
    const edges = loTopologyData.downstream.map(n => ({ caller: loTopologyData.target, callee: n }));
    const filteredEdges = edges.filter(({ callee: n }) => {
        const calleeSvc = (n.psm || '').toLowerCase();
        const calleeCluster = (n.cluster || '').toLowerCase();
        const calleeIface = (n.invokeMethod || '').toLowerCase();
        const callerSvcLow = callerSvc.toLowerCase();
        const callerClusterLow = callerCluster.toLowerCase();
        const callerIfaceLow = callerIface.toLowerCase();
        if (fCallerSvc && !callerSvcLow.includes(fCallerSvc)) return false;
        if (fCallerCluster && !callerClusterLow.includes(fCallerCluster)) return false;
        if (fCallerIface && !callerIfaceLow.includes(fCallerIface)) return false;
        if (fCalleeSvc && !calleeSvc.includes(fCalleeSvc)) return false;
        if (fCalleeCluster && !calleeCluster.includes(fCalleeCluster)) return false;
        if (fCalleeIface && !calleeIface.includes(fCalleeIface)) return false;
        return true;
    });

    tbody.innerHTML = filteredEdges.map(({ callee: n }) => {
        const method = n.invokeMethod || '-';
        const cells = [
            `<td><span class="lo-list-cell-ellipsis" data-fullname="${callerSvc}">${callerSvc}</span></td>`,
            `<td>${callerCluster}</td>`,
            `<td class="lo-list-col-callerIface"><span class="lo-list-cell-ellipsis" data-fullname="${callerIface}">${callerIface}</span></td>`,
            `<td><span class="lo-list-cell-ellipsis" data-fullname="${n.psm}">${n.psm}</span></td>`,
            `<td>${n.cluster || '-'}</td>`,
            `<td class="lo-list-col-calleeIface"><span class="lo-list-cell-ellipsis" data-fullname="${method}">${method}</span></td>`,
            `<td>${n.peakQps || '-'}</td>`,
            `<td>${n.currentQps || '-'}</td>`,
            `<td>${n.p99 || '-'}</td>`,
            `<td><button class="btn-link lo-list-view-btn" data-psm="${n.psm}">查看</button></td>`
        ].join('');
        return `<tr>${cells}</tr>`;
    }).join('') || `<tr><td colspan="10" style="text-align:center;color:#999;padding:24px">暂无匹配数据</td></tr>`;
}

// 链路查询结果列表 - 根据观测粒度切换列与筛选项可见性
function applyLoListGranularityVisibility() {
    const isInterfaceLevel = !!document.querySelector('input[name="loGran"][value="interface"]:checked');
    const root = document.getElementById('loListView');
    if (!root) return;
    root.classList.toggle('lo-list-mode-iface', isInterfaceLevel);
    root.classList.toggle('lo-list-mode-svc', !isInterfaceLevel);
    // 服务粒度时清空隐藏的接口筛选输入，避免「看不见但仍生效」
    if (!isInterfaceLevel) {
        const ci = document.getElementById('loListFCallerIface');
        const ce = document.getElementById('loListFCalleeIface');
        if (ci) ci.value = '';
        if (ce) ce.value = '';
    }
}

// 监听观测粒度切换：实时同步列表/筛选项的列结构
(function bindLoListGranWatcher() {
    if (window._loListGranBound) return;
    window._loListGranBound = true;
    document.addEventListener('change', (e) => {
        const t = e.target;
        if (t && t.matches && t.matches('input[name="loGran"]')) {
            if (typeof renderLoList === 'function') renderLoList();
        }
    });
})();

/* ============= 链路列表（已发布链路） ============= */
// 链路入口 服务 → 接口（双联级）映射 - 提到全局以供列表筛选复用
window.loEntryMethodMap = {
    'toutiao.ms.argos': ['BatchQuery', 'QueryDetail', 'CreateAlert', 'UpdateRule', 'DeleteRule', 'ListAlert', 'AckAlert', 'GetMetric', 'PushMetric', 'StreamMetric'],
    'ttec.western.mall.event': ['PublishEvent', 'ConsumeEvent', 'AckEvent', 'ListEvent', 'RetryEvent', 'ArchiveEvent', 'GetEventDetail', 'BatchPublish'],
    'oec.promotion.trade_engine': ['CreateOrder', 'PayOrder', 'CancelOrder', 'QueryOrder', 'ReverseOrder', 'RefundOrder', 'ConfirmReceipt', 'CloseOrder', 'ListOrder', 'BatchQueryOrder'],
    'oec.operation.product_group': ['ListGroup', 'CreateGroup', 'UpdateGroup', 'DeleteGroup', 'AddMember', 'RemoveMember', 'GetGroupDetail', 'BindRule'],
    'promotion.points_business': ['Earn', 'Redeem', 'QueryBalance', 'ListHistory', 'Transfer', 'ExpireCheck', 'Adjust'],
    'toutiao.search.gateway': ['Search', 'Suggest', 'Trending', 'HistoryQuery', 'ClearHistory', 'SearchByTopic'],
    'toutiao.feed.ranking': ['RankFeed', 'ColdStart', 'WarmUp', 'GetUserProfile', 'UpdateUserVector'],
    'ecom.payment.cashier': ['CreatePayment', 'QueryPayment', 'ClosePayment', 'Refund', 'BindCard', 'UnbindCard', 'ListMethod'],
    'ecom.risk.gateway': ['EvalRisk', 'PreCheck', 'PostCheck', 'BlackListAdd', 'BlackListRemove', 'CaseQuery'],
    'douyin.live.stream': ['StartLive', 'EndLive', 'JoinRoom', 'LeaveRoom', 'SendGift', 'SendComment', 'GetStreamInfo'],
    'douyin.im.message': ['SendText', 'SendImage', 'RecallMessage', 'PullHistory', 'MarkRead', 'GetUnread'],
    'lark.calendar.api': ['CreateEvent', 'UpdateEvent', 'DeleteEvent', 'ListEvent', 'AcceptInvite', 'DeclineInvite'],
    'lark.docs.editor': ['CreateDoc', 'UpdateDoc', 'GetDoc', 'ListDoc', 'ShareDoc', 'CopyDoc', 'ExportDoc'],
    'tiktok.user.profile': ['GetProfile', 'UpdateProfile', 'Follow', 'Unfollow', 'BlockUser', 'GetFollowers', 'GetFollowing'],
    'tiktok.video.encode': ['SubmitJob', 'CancelJob', 'QueryJob', 'ListJob', 'RetryJob', 'GetJobLog'],
    'ttec.cart.sapi': ['GetCart', 'AddCart', 'RemoveCart', 'UpdateCart', 'ClearCart']
};

// 部门组织架构（树形）
const loDeptTree = [
    {
        name: 'GEC', children: [
            {
                name: 'GEC-业务平台', children: [
                    { name: 'GEC-业务平台-开放平台' },
                    { name: 'GEC-业务平台-研发架构' },
                    { name: 'GEC-业务平台-解决方案' },
                    { name: 'GEC-业务平台-营销平台', children: [
                        { name: 'GEC-业务平台-营销平台-促销中心' },
                        { name: 'GEC-业务平台-营销平台-优惠券中心' }
                    ] },
                    { name: 'GEC-业务平台-搜索' }
                ]
            },
            {
                name: '产品研发和工程架构-GEC', children: [
                    { name: '产品研发和工程架构-GEC-基础架构' },
                    { name: '产品研发和工程架构-GEC-质量与稳定性' }
                ]
            }
        ]
    },
    {
        name: '电商-OEC', children: [
            { name: '电商-OEC-交易' },
            { name: '电商-OEC-营销' },
            { name: '电商-OEC-支付' }
        ]
    }
];

const loUserLinks = [
    {
        id: 'link-1', name: '全渠道_进入购物车-ttec.cart.sapi:default::GetCart',
        entry: 'ttec.cart.sapi:GetCart:default',
        entryPsm: 'ttec.cart.sapi', entryMethod: 'GetCart',
        granularity: 'interface',
        dept: '产品研发和工程架构-GEC',
        tag: '核心', priority: 'P0', owner: '徐学文',
        topology: '向上1层 / 向下2层',
        nodes: 12, edges: 18,
        status: 'limit', alertCount: 23, peakQps: '12.4k req/s',
        updateTime: '2026-05-25 14:32',
        createTime: '2025-08-12 09:20',
        vdc: 'sg-central', cluster: 'default', upLevel: 1, downLevel: 2,
        timeRange: '近 24h', depType: '强依赖/业务强依赖', svcPriority: 'P0', svcType: 'RPC'
    },
    {
        id: 'link-2', name: '下单入口',
        entry: 'oec.shop.sapi:CreateOrder:default',
        entryPsm: 'oec.shop.sapi', entryMethod: 'CreateOrder',
        granularity: 'interface',
        dept: 'GEC-交易与供应链物流',
        tag: '核心', priority: 'P0', owner: '吕文杰',
        topology: '向上1层 / 向下3层',
        nodes: 18, edges: 24,
        status: 'warn', alertCount: 7, peakQps: '6.8k req/s',
        updateTime: '2026-05-24 10:18',
        createTime: '2024-11-03 15:42',
        vdc: 'maliva', cluster: 'cluster-01', upLevel: 1, downLevel: 3,
        timeRange: '近 24h', depType: '强依赖/业务强依赖', svcPriority: 'P0', svcType: 'RPC'
    },
    {
        id: 'link-3', name: '测试链路',
        entry: 'oec.shop.sapi:GetBillInfo:default',
        entryPsm: 'oec.shop.sapi', entryMethod: 'GetBillInfo',
        granularity: 'interface',
        dept: 'GEC-业务平台-研发架构',
        tag: '基础', priority: 'P2', owner: '当前用户',
        topology: '向上1层 / 向下1层',
        nodes: 6, edges: 7,
        status: 'safe', alertCount: 0, peakQps: '1.2k req/s',
        updateTime: '2026-05-23 19:05',
        createTime: '2026-05-20 11:08',
        vdc: 'sg-central', cluster: 'cluster-02', upLevel: 1, downLevel: 1,
        timeRange: '近 6h', depType: '弱依赖', svcPriority: 'P2', svcType: 'HTTP'
    },
    {
        id: 'link-4', name: 'Start Reverse-Start Reverse-oec.reverse.order_api::ReverseInitiationFlow',
        entry: 'oec.reverse.order_api:ReverseInitiationFlow:default',
        entryPsm: 'oec.reverse.order_api', entryMethod: 'ReverseInitiationFlow',
        granularity: 'interface',
        dept: '产品研发和工程架构-GEC',
        tag: '核心', priority: 'P1', owner: 'Wensi Yang',
        topology: '向上1层 / 向下2层',
        nodes: 10, edges: 14,
        status: 'limit', alertCount: 15, peakQps: '4.2k req/s',
        updateTime: '2026-05-25 09:50',
        createTime: '2025-09-18 14:30',
        vdc: 'maliva', cluster: 'default', upLevel: 1, downLevel: 2,
        timeRange: '近 12h', depType: '强依赖/业务强依赖', svcPriority: 'P1', svcType: 'RPC'
    },
    {
        id: 'link-5', name: 'Start Reverse -Access Control Check-oec.reverse.order_api::default::ReverseSubmitFlowAccessControl',
        entry: 'oec.reverse.order_api:ReverseSubmitFlowAccessControl:default',
        entryPsm: 'oec.reverse.order_api', entryMethod: 'ReverseSubmitFlowAccessControl',
        granularity: 'interface',
        dept: '产品研发和工程架构-GEC',
        tag: '核心', priority: 'P1', owner: 'Wensi Yang',
        topology: '向上1层 / 向下2层',
        nodes: 8, edges: 11,
        status: 'safe', alertCount: 0, peakQps: '3.5k req/s',
        updateTime: '2026-05-22 16:12',
        createTime: '2025-10-25 17:22',
        vdc: 'sg-central', cluster: 'default', upLevel: 1, downLevel: 2,
        timeRange: '近 24h', depType: '强依赖/业务强依赖', svcPriority: 'P1', svcType: 'RPC'
    },
    {
        id: 'link-6', name: 'feed流推荐 more-ttec.recommend.api::default::PDPGuessLikeRecommend',
        entry: 'ttec.recommend.api:PDPGuessLikeRecommend:default',
        entryPsm: 'ttec.recommend.api', entryMethod: 'PDPGuessLikeRecommend',
        granularity: 'interface',
        dept: '产品研发和工程架构-GEC',
        tag: '营收', priority: 'P0', owner: '徐昕',
        topology: '向上1层 / 向下3层',
        nodes: 14, edges: 19,
        status: 'warn', alertCount: 4, peakQps: '32.5k req/s',
        updateTime: '2026-05-25 11:08',
        createTime: '2024-07-09 10:50',
        vdc: 'us-east', cluster: 'canary', upLevel: 1, downLevel: 3,
        timeRange: '近 3 天', depType: '强依赖/业务强依赖', svcPriority: 'P0', svcType: 'RPC'
    }
];

const loLinksState = { name: '', entry: '', dept: '', priority: '', creator: '' };
let loLinksTab = 'all'; // 'all' | 'mine'
// 工作台模式：create | view | edit | copy
const loWorkbenchState = { mode: 'create', editingId: null };

// 部门简短显示（参考图表现为部分文字 + 省略号）
function shortDept(d) {
    if (!d) return '-';
    if (d.startsWith('产品研发和工程架构')) return '产品研发和工程架构-GI...';
    return d;
}
// 头像首字
function avatarText(name) {
    if (!name) return '?';
    const ch = name.trim().charAt(0);
    return ch;
}
function avatarColor(name) {
    const palette = ['#ffd591', '#91caff', '#b7eb8f', '#ffadd2', '#d3adf7'];
    let h = 0;
    for (const c of (name || '')) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    return palette[h % palette.length];
}

function renderLoLinks() {
    const tbody = document.getElementById('loLinksTableBody');
    const empty = document.getElementById('loLinksEmpty');
    if (!tbody) return;

    const s = loLinksState;
    const currentUser = '当前用户';
    const filtered = loUserLinks.filter(l => {
        if (loLinksTab === 'mine' && (l.owner || '') !== currentUser) return false;
        if (s.name && !l.name.toLowerCase().includes(s.name.toLowerCase())) return false;
        if (s.entry && !(l.entry || '').toLowerCase().includes(s.entry.toLowerCase())) return false;
        if (s.dept && !(l.dept || '').includes(s.dept)) return false;
        if (s.priority && l.priority !== s.priority) return false;
        if (s.creator && !(l.owner || '').toLowerCase().includes(s.creator.toLowerCase())) return false;
        return true;
    });

    if (!filtered.length) {
        tbody.innerHTML = '';
        if (empty) empty.classList.remove('hidden');
        const cnt = document.getElementById('loLinksCount');
        if (cnt) cnt.textContent = '共 0 条';
        bindLoLinksEvents();
        return;
    }
    if (empty) empty.classList.add('hidden');
    const cnt = document.getElementById('loLinksCount');
    if (cnt) cnt.textContent = `共 ${filtered.length} 条`;

    tbody.innerHTML = filtered.map(l => {
        // 链路入口：psm名称 < 接口名称
        const entryDisp = l.entryMethod
            ? `${l.entryPsm} &lt; ${l.entryMethod}`
            : (l.entry || '-');
        // 创建时间补秒
        const ct = (l.createTime || '').length === 16 ? (l.createTime + ':00') : (l.createTime || '-');
        return `
        <tr class="lo-links-row${l.id === loSaveDrawerState.lastSavedId ? ' lo-links-row-flash' : ''}" data-link-id="${l.id}">
            <td class="lo-links-name-cell">
                <span class="lo-list-cell-ellipsis lo-links-name" data-fullname="${l.name}">${l.name}</span>
            </td>
            <td><span class="lo-list-cell-ellipsis lo-links-entry" data-fullname="${(l.entryPsm || '') + (l.entryMethod ? ' < ' + l.entryMethod : '')}">${entryDisp}</span></td>
            <td><span class="lo-list-cell-ellipsis lo-links-dept" data-fullname="${l.dept || ''}">${l.dept || '-'}</span></td>
            <td>
                <span class="lo-links-owner">
                    <span class="lo-links-avatar" style="background:${avatarColor(l.owner)}">${avatarText(l.owner)}</span>
                    <span>${l.owner}</span>
                </span>
            </td>
            <td><span class="lo-links-topo">${l.topology}</span></td>
            <td><span class="lo-links-priority lo-links-priority-${l.priority}">${l.priority}</span></td>
            <td><span class="lo-links-time">${ct}</span></td>
            <td class="lo-links-td-action">
                <button class="lo-links-act-link" data-act="view" data-link-id="${l.id}">详情</button>
                <button class="lo-links-act-link lo-links-act-link-danger" data-act="delete" data-link-id="${l.id}">删除</button>
            </td>
        </tr>
    `; }).join('');

    bindLoLinksEvents();
}

function bindLoLinksEvents() {
    const view = document.getElementById('linkListPage');
    if (!view || view._loLinksBound) return;
    view._loLinksBound = true;

    const ids = ['loLinksFName', 'loLinksFEntry', 'loLinksFDept', 'loLinksFPriority', 'loLinksFCreator'];
    const map = {
        loLinksFName: 'name',
        loLinksFEntry: 'entry',
        loLinksFDept: 'dept',
        loLinksFPriority: 'priority',
        loLinksFCreator: 'creator'
    };
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const evt = el.tagName === 'SELECT' ? 'change' : 'input';
        el.addEventListener(evt, () => {
            loLinksState[map[id]] = el.value;
        });
    });

    // 链路名称 / 创建人 联想下拉
    bindLoLinksSuggest('loLinksFName', 'name', 'name');
    bindLoLinksSuggest('loLinksFCreator', 'creator', 'owner');
    // 链路入口 级联下拉（PSM → 接口）
    bindLoLinksEntryCascade();
    // 部门 树形下拉
    bindLoLinksDeptTree();

    // 全局兜底：用 capture 阶段的 mousedown，点击容器外即关闭所有面板
    setupLoLinksOutsideClickClose();

    const searchBtn = document.getElementById('loLinksSearchBtn');
    if (searchBtn) searchBtn.addEventListener('click', renderLoLinks);

    const resetBtn = document.getElementById('loLinksResetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            ids.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
            loLinksState.name = ''; loLinksState.entry = '';
            loLinksState.dept = ''; loLinksState.priority = ''; loLinksState.creator = '';
            renderLoLinks();
        });
    }

    const createBtn = document.getElementById('btnCreateLink');
    if (createBtn && !createBtn._bound) {
        createBtn._bound = true;
        createBtn.addEventListener('click', () => enterWorkbench('create'));
    }

    // 列表 tab 切换
    document.querySelectorAll('#linkListPage .lo-list-tab').forEach(tab => {
        if (tab._bound) return;
        tab._bound = true;
        tab.addEventListener('click', () => {
            const t = tab.getAttribute('data-list-tab') || 'all';
            loLinksTab = t;
            document.querySelectorAll('#linkListPage .lo-list-tab').forEach(o => o.classList.toggle('active', o === tab));
            renderLoLinks();
        });
    });

    const tbody = document.getElementById('loLinksTableBody');
    if (tbody) {
        tbody.addEventListener('click', (e) => {
            const act = e.target.closest('.lo-links-act-link');
            if (!act) return;
            const id = act.getAttribute('data-link-id');
            const link = loUserLinks.find(l => l.id === id);
            if (!link) return;
            const action = act.getAttribute('data-act');
            if (action === 'view' || action === 'edit') enterWorkbench('edit', link);
            else if (action === 'delete') {
                openLoDeleteConfirm(link, () => {
                    const idx = loUserLinks.findIndex(l => l.id === id);
                    if (idx > -1) loUserLinks.splice(idx, 1);
                    renderLoLinks();
                    if (typeof showToast === 'function') showToast('链路已删除');
                });
            }
        });

        tbody.addEventListener('mouseover', (e) => {
            const tgt = e.target.closest('[data-fullname]');
            if (tgt && typeof showLoRuleFullnameTip === 'function') showLoRuleFullnameTip(tgt);
        });
        tbody.addEventListener('mouseout', (e) => {
            const tgt = e.target.closest('[data-fullname]');
            if (tgt && typeof hideLoRuleFullnameTip === 'function') hideLoRuleFullnameTip();
        });
    }
}

// 删除链路 - 自定义确认弹窗
let _loDeleteConfirmCb = null;
function openLoDeleteConfirm(link, onConfirm) {
    const overlay = document.getElementById('loDeleteConfirm');
    const target = document.getElementById('loDeleteConfirmTarget');
    if (!overlay || !target) return;
    _loDeleteConfirmCb = onConfirm;
    target.innerHTML = `
        <div class="lo-confirm-target-row"><span class="lo-confirm-target-label">观测视图名称</span><span class="lo-confirm-target-value" title="${link.name}">${link.name}</span></div>
        <div class="lo-confirm-target-row"><span class="lo-confirm-target-label">链路入口</span><span class="lo-confirm-target-value">${link.entryPsm || ''}${link.entryMethod ? ' &lt; ' + link.entryMethod : ''}</span></div>
        <div class="lo-confirm-target-row"><span class="lo-confirm-target-label">创建人</span><span class="lo-confirm-target-value">${link.owner || '-'}</span></div>
    `;
    overlay.classList.remove('hidden');
    setTimeout(() => document.getElementById('loDeleteConfirmCancel')?.focus(), 30);
    bindLoDeleteConfirmEvents();
}

function closeLoDeleteConfirm() {
    document.getElementById('loDeleteConfirm')?.classList.add('hidden');
    _loDeleteConfirmCb = null;
}

function bindLoDeleteConfirmEvents() {
    const overlay = document.getElementById('loDeleteConfirm');
    if (!overlay || overlay._bound) return;
    overlay._bound = true;
    document.getElementById('loDeleteConfirmCancel')?.addEventListener('click', closeLoDeleteConfirm);
    document.getElementById('loDeleteConfirmOk')?.addEventListener('click', () => {
        const cb = _loDeleteConfirmCb;
        closeLoDeleteConfirm();
        if (typeof cb === 'function') cb();
    });
    // 点遮罩关闭
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLoDeleteConfirm();
    });
    // ESC 关闭 / Enter 确认
    document.addEventListener('keydown', (e) => {
        if (overlay.classList.contains('hidden')) return;
        if (e.key === 'Escape') { e.preventDefault(); closeLoDeleteConfirm(); }
        else if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('loDeleteConfirmOk')?.click();
        }
    });
}


// 全局兜底：点击下拉容器外部时关闭所有列表筛选下拉面板
function setupLoLinksOutsideClickClose() {
    if (document._loLinksFilterCloseBound) return;
    document._loLinksFilterCloseBound = true;

    const SELECTORS = '#linkListPage .lo-filter-suggest, #linkListPage .lo-filter-cascade, #linkListPage .lo-filter-tree, #loDeptWrap';
    const PANELS = '#linkListPage .lo-filter-suggest-panel, #linkListPage .lo-filter-cascade-panel, #linkListPage .lo-filter-tree-panel, #loDeptPanel';

    const closeAllFilterPanels = () => {
        document.querySelectorAll(PANELS).forEach(p => {
            if (!p.classList.contains('hidden')) p.classList.add('hidden');
        });
        ['loLinksFName', 'loLinksFEntry', 'loLinksFDept', 'loLinksFCreator', 'loDept'].forEach(id => {
            const el = document.getElementById(id);
            if (el && document.activeElement === el) el.blur();
        });
    };

    // pointerdown 捕获阶段，确保在所有组件 mousedown 之前判断
    document.addEventListener('pointerdown', (e) => {
        const inside = e.target.closest(SELECTORS);
        if (!inside) closeAllFilterPanels();
    }, true);

    // 滚动时关闭（防止下拉漂离输入框）
    window.addEventListener('scroll', closeAllFilterPanels, true);
    window.addEventListener('resize', closeAllFilterPanels);

    // ESC 关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllFilterPanels();
    });

    // 暴露给其他场景调用
    window.closeAllLoLinksFilterPanels = closeAllFilterPanels;
}


// 链路名称 / 创建人 联想下拉
function bindLoLinksSuggest(inputId, stateField, dataField) {
    const input = document.getElementById(inputId);
    const panel = document.getElementById(inputId + 'Panel');
    if (!input || !panel || input._bound) return;
    input._bound = true;
    const linkField = dataField || stateField;

    const renderPanel = () => {
        const kw = (input.value || '').trim().toLowerCase();
        // 全量候选去重
        const seen = new Set();
        const list = [];
        loUserLinks.forEach(l => {
            const v = l[linkField];
            if (!v || seen.has(v)) return;
            seen.add(v);
            if (kw && !v.toLowerCase().includes(kw)) return;
            list.push(v);
        });
        if (!list.length) {
            panel.classList.add('hidden');
            return;
        }
        panel.innerHTML = list.slice(0, 10).map(v => {
            const html = kw
                ? v.replace(new RegExp(`(${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<mark>$1</mark>')
                : v;
            return `<div class="lo-filter-suggest-item" data-val="${v.replace(/"/g, '&quot;')}">${html}</div>`;
        }).join('');
        panel.classList.remove('hidden');
    };

    input.addEventListener('focus', renderPanel);
    input.addEventListener('input', () => {
        loLinksState[stateField] = input.value;
        renderPanel();
    });
    input.addEventListener('blur', () => {
        // 延迟关闭，确保 panel 内 mousedown 选项能先处理
        setTimeout(() => panel.classList.add('hidden'), 150);
    });
    panel.addEventListener('mousedown', (e) => {
        const item = e.target.closest('.lo-filter-suggest-item');
        if (!item) return;
        e.preventDefault();
        const v = item.getAttribute('data-val');
        input.value = v;
        loLinksState[stateField] = v;
        panel.classList.add('hidden');
    });
}

// 链路入口 级联下拉（PSM → 接口）
function bindLoLinksEntryCascade() {
    const input = document.getElementById('loLinksFEntry');
    const panel = document.getElementById('loLinksFEntryPanel');
    const wrap = document.getElementById('loLinksFEntryWrap');
    if (!input || !panel || !wrap || wrap._bound) return;
    wrap._bound = true;

    let activeSvc = null;
    const svcList = Object.keys(window.loEntryMethodMap || {});

    const render = () => {
        const methods = activeSvc ? (window.loEntryMethodMap[activeSvc] || []) : [];
        const svcCol = svcList.map(s => `
            <div class="lo-cas-item${s === activeSvc ? ' active' : ''}" data-svc="${s}">
                <span class="lo-cas-label">${s}</span>
                <span class="lo-cas-arrow">›</span>
            </div>
        `).join('');
        const methodCol = activeSvc
            ? methods.map(m => `<div class="lo-cas-item lo-cas-method" data-method="${m}">${m}</div>`).join('')
            : '<div class="lo-cas-empty">请先选择服务</div>';
        panel.innerHTML = `
            <div class="lo-cas-col lo-cas-col-svc">${svcCol}</div>
            <div class="lo-cas-col lo-cas-col-method">${methodCol}</div>
        `;
    };

    const open = () => { render(); panel.classList.remove('hidden'); };
    const close = () => panel.classList.add('hidden');

    input.addEventListener('focus', open);
    input.addEventListener('click', open);
    input.addEventListener('blur', () => {
        setTimeout(() => panel.classList.add('hidden'), 150);
    });

    panel.addEventListener('mousedown', (e) => {
        const svcItem = e.target.closest('[data-svc]');
        const methodItem = e.target.closest('[data-method]');
        if (svcItem) {
            e.preventDefault();
            activeSvc = svcItem.getAttribute('data-svc');
            render();
            // 防止 input blur 关闭
            setTimeout(() => input.focus(), 0);
            return;
        }
        if (methodItem && activeSvc) {
            e.preventDefault();
            const method = methodItem.getAttribute('data-method');
            const val = `${activeSvc} / ${method}`;
            input.value = val;
            loLinksState.entry = val;
            close();
        }
    });
}

// 部门 树形下拉
function bindLoLinksDeptTree() {
    const input = document.getElementById('loLinksFDept');
    const panel = document.getElementById('loLinksFDeptPanel');
    const wrap = document.getElementById('loLinksFDeptWrap');
    if (!input || !panel || !wrap || wrap._bound) return;
    wrap._bound = true;

    const expanded = new Set();

    const renderTree = (nodes, depth) => {
        return nodes.map(node => {
            const hasChildren = node.children && node.children.length;
            const isOpen = expanded.has(node.name);
            const arrow = hasChildren ? `<span class="lo-tree-arrow${isOpen ? ' open' : ''}">▸</span>` : '<span class="lo-tree-arrow-placeholder"></span>';
            return `
                <div class="lo-tree-node" data-name="${node.name}" data-has-children="${hasChildren ? '1' : '0'}" style="padding-left:${depth * 16}px">
                    ${arrow}<span class="lo-tree-label">${node.name}</span>
                </div>
                ${hasChildren && isOpen ? `<div class="lo-tree-children">${renderTree(node.children, depth + 1)}</div>` : ''}
            `;
        }).join('');
    };

    const render = () => {
        panel.innerHTML = `
            <div class="lo-tree-search">
                <input type="text" class="form-control lo-tree-search-input" placeholder="请选择部门" id="loLinksFDeptSearch">
            </div>
            <div class="lo-tree-body">${renderTree(loDeptTree, 0)}</div>
        `;
        const searchInput = panel.querySelector('#loLinksFDeptSearch');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                const kw = searchInput.value.trim().toLowerCase();
                const body = panel.querySelector('.lo-tree-body');
                if (!body) return;
                if (!kw) { body.innerHTML = renderTree(loDeptTree, 0); return; }
                const flat = [];
                const collect = (nodes) => nodes.forEach(n => { flat.push(n); if (n.children) collect(n.children); });
                collect(loDeptTree);
                const matched = flat.filter(n => n.name.toLowerCase().includes(kw));
                body.innerHTML = matched.length
                    ? matched.map(n => `<div class="lo-tree-node" data-name="${n.name}" data-has-children="0"><span class="lo-tree-arrow-placeholder"></span><span class="lo-tree-label">${n.name}</span></div>`).join('')
                    : '<div class="lo-cas-empty">未匹配到部门</div>';
            });
        }
    };

    const open = () => { render(); panel.classList.remove('hidden'); };
    const close = () => panel.classList.add('hidden');

    input.addEventListener('focus', open);
    input.addEventListener('click', open);
    input.addEventListener('blur', () => {
        setTimeout(() => {
            // 如果焦点已经落在 panel 内（搜索框 / 子节点），不关闭
            if (panel.contains(document.activeElement)) return;
            panel.classList.add('hidden');
        }, 200);
    });

    panel.addEventListener('mousedown', (e) => {
        // 点击搜索框不关闭
        if (e.target.closest('.lo-tree-search-input')) return;
        const node = e.target.closest('.lo-tree-node');
        if (!node) {
            // 阻止 input blur 关闭面板（点空白处）
            e.preventDefault();
            setTimeout(() => input.focus(), 0);
            return;
        }
        e.preventDefault();
        const name = node.getAttribute('data-name');
        const hasChildren = node.getAttribute('data-has-children') === '1';
        if (hasChildren) {
            // 切换展开
            if (expanded.has(name)) expanded.delete(name);
            else expanded.add(name);
            const body = panel.querySelector('.lo-tree-body');
            if (body) body.innerHTML = renderTree(loDeptTree, 0);
            setTimeout(() => input.focus(), 0);
            return;
        }
        // 选中叶子
        input.value = name;
        loLinksState.dept = name;
        close();
    });
}

// 工作台 部门 树形下拉（与列表页 bindLoLinksDeptTree 同构，挂在 loDept / loDeptPanel）
function bindLoWorkbenchDeptTree() {
    const input = document.getElementById('loDept');
    const panel = document.getElementById('loDeptPanel');
    const wrap = document.getElementById('loDeptWrap');
    if (!input || !panel || !wrap || wrap._bound) return;
    wrap._bound = true;

    const expanded = new Set();

    const renderTree = (nodes, depth) => {
        return nodes.map(node => {
            const hasChildren = node.children && node.children.length;
            const isOpen = expanded.has(node.name);
            const arrow = hasChildren ? `<span class="lo-tree-arrow${isOpen ? ' open' : ''}">▸</span>` : '<span class="lo-tree-arrow-placeholder"></span>';
            return `
                <div class="lo-tree-node" data-name="${node.name}" data-has-children="${hasChildren ? '1' : '0'}" style="padding-left:${depth * 16}px">
                    ${arrow}<span class="lo-tree-label">${node.name}</span>
                </div>
                ${hasChildren && isOpen ? `<div class="lo-tree-children">${renderTree(node.children, depth + 1)}</div>` : ''}
            `;
        }).join('');
    };

    const render = () => {
        panel.innerHTML = `
            <div class="lo-tree-search">
                <input type="text" class="form-control lo-tree-search-input" placeholder="请选择部门" id="loDeptSearch">
            </div>
            <div class="lo-tree-body">${renderTree(loDeptTree, 0)}</div>
        `;
        const searchInput = panel.querySelector('#loDeptSearch');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                const kw = searchInput.value.trim().toLowerCase();
                const body = panel.querySelector('.lo-tree-body');
                if (!body) return;
                if (!kw) { body.innerHTML = renderTree(loDeptTree, 0); return; }
                const flat = [];
                const collect = (nodes) => nodes.forEach(n => { flat.push(n); if (n.children) collect(n.children); });
                collect(loDeptTree);
                const matched = flat.filter(n => n.name.toLowerCase().includes(kw));
                body.innerHTML = matched.length
                    ? matched.map(n => `<div class="lo-tree-node" data-name="${n.name}" data-has-children="0"><span class="lo-tree-arrow-placeholder"></span><span class="lo-tree-label">${n.name}</span></div>`).join('')
                    : '<div class="lo-cas-empty">未匹配到部门</div>';
            });
        }
    };

    const open = () => { render(); panel.classList.remove('hidden'); };
    const close = () => panel.classList.add('hidden');

    input.addEventListener('focus', open);
    input.addEventListener('click', open);
    input.addEventListener('blur', () => {
        setTimeout(() => {
            if (panel.contains(document.activeElement)) return;
            panel.classList.add('hidden');
        }, 200);
    });

    panel.addEventListener('mousedown', (e) => {
        if (e.target.closest('.lo-tree-search-input')) return;
        const node = e.target.closest('.lo-tree-node');
        if (!node) {
            e.preventDefault();
            setTimeout(() => input.focus(), 0);
            return;
        }
        e.preventDefault();
        const name = node.getAttribute('data-name');
        const hasChildren = node.getAttribute('data-has-children') === '1';
        if (hasChildren) {
            if (expanded.has(name)) expanded.delete(name);
            else expanded.add(name);
            const body = panel.querySelector('.lo-tree-body');
            if (body) body.innerHTML = renderTree(loDeptTree, 0);
            setTimeout(() => input.focus(), 0);
            return;
        }
        input.value = name;
        close();
    });
}

// 进入工作台
function enterWorkbench(mode, link) {
    loWorkbenchState.mode = mode;
    loWorkbenchState.editingId = (link && (mode === 'edit' || mode === 'view')) ? link.id : null;
    // 在 switchPage 之前先把 pageTitle 设置为目标值（避免任何覆盖）
    const titleEl = document.getElementById('pageTitle');
    if (titleEl) {
        if (mode === 'create') titleEl.textContent = '新建观测视图';
        else if (mode === 'view' && link) titleEl.textContent = link.name;
        else if (mode === 'edit' && link) titleEl.textContent = link.name;
        else if (mode === 'copy' && link) titleEl.textContent = `${link.name}（副本）`;
    }
    switchPage('link-workbench');
    // 同步设置标题/按钮
    applyWorkbenchModeMeta(mode, link);
    // 绑定部门树下拉（确保进入工作台后下拉可用）
    if (typeof bindLoWorkbenchDeptTree === 'function') bindLoWorkbenchDeptTree();
    // 同步回填表单（DOM 此时已可见）
    if (link && mode !== 'create' && typeof applyLoLinkToFilters === 'function') {
        applyLoLinkToFilters(link);
    }
    // 等待 DOM 测量完成后再渲染拓扑
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            applyWorkbenchMode(mode, link);
            if (link && typeof renderLoTopology === 'function') renderLoTopology();
            if (link && typeof renderLoList === 'function') renderLoList();
        });
    });
}

// 仅设置标题/按钮，不触碰表单
function applyWorkbenchModeMeta(mode, link) {
    const titleEl = document.getElementById('pageTitle');
    const saveBtn = document.getElementById('btnSaveConfig');
    const backBtn = document.getElementById('loBackToList');
    const resultCard = document.getElementById('loResultCard');
    if (backBtn) backBtn.classList.remove('hidden');
    if (mode === 'create') {
        if (titleEl) titleEl.textContent = '新建观测视图';
        if (saveBtn) saveBtn.textContent = '保存配置';
        if (resultCard) resultCard.classList.add('hidden');
        loResultGenerated = false;
    } else if (mode === 'view' && link) {
        if (titleEl) titleEl.textContent = link.name;
        if (saveBtn) saveBtn.textContent = '保存配置';
        if (resultCard) resultCard.classList.remove('hidden');
    } else if (mode === 'edit' && link) {
        if (titleEl) titleEl.textContent = link.name;
        if (saveBtn) saveBtn.textContent = '保存配置';
        if (resultCard) resultCard.classList.remove('hidden');
    } else if (mode === 'copy' && link) {
        if (titleEl) titleEl.textContent = `${link.name}（副本）`;
        if (saveBtn) saveBtn.textContent = '保存配置';
        if (resultCard) resultCard.classList.remove('hidden');
    }
}

function applyWorkbenchMode(mode, link) {
    const titleEl = document.getElementById('pageTitle');
    const saveBtn = document.getElementById('btnSaveConfig');
    const backBtn = document.getElementById('loBackToList');
    const resultCard = document.getElementById('loResultCard');
    if (backBtn) backBtn.classList.remove('hidden');
    if (mode === 'create') {
        if (titleEl) titleEl.textContent = '新建观测视图';
        if (saveBtn) saveBtn.textContent = '保存配置';
        if (resultCard) resultCard.classList.add('hidden');
        loResultGenerated = false;
    } else if (mode === 'view' && link) {
        if (titleEl) titleEl.textContent = link.name;
        if (saveBtn) saveBtn.textContent = '保存配置';
        if (resultCard) resultCard.classList.remove('hidden');
        applyLoLinkToFilters(link);
    } else if (mode === 'edit' && link) {
        if (titleEl) titleEl.textContent = link.name;
        if (saveBtn) saveBtn.textContent = '保存配置';
        if (resultCard) resultCard.classList.remove('hidden');
        applyLoLinkToFilters(link);
    } else if (mode === 'copy' && link) {
        if (titleEl) titleEl.textContent = `${link.name}（副本）`;
        if (saveBtn) saveBtn.textContent = '保存配置';
        if (resultCard) resultCard.classList.remove('hidden');
        applyLoLinkToFilters(link);
    }
}

function applyLoLinkToFilters(link) {
    const setVal = (id, v) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.value = v || '';
        // 通知 searchable-select 等组件
        try {
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
        } catch (e) { /* ignore */ }
    };
    setVal('loEntry', link.entryMethod ? `${link.entryPsm} / ${link.entryMethod}` : (link.entryPsm || ''));
    setVal('loVDC', link.vdc || '');
    setVal('loCluster', link.cluster || '');
    setVal('loTimeRange', link.timeRange || '近 24h');
    setVal('loUpLevel', link.upLevel || '');
    setVal('loDownLevel', link.downLevel || '');
    setVal('loDepType', link.depType || '强依赖/业务强依赖');
    setVal('loPriority', link.svcPriority || link.priority || '');
    setVal('loSvcType', link.svcType || 'RPC');
    setVal('loDept', link.dept || '');
    document.querySelectorAll('input[name="loGran"]').forEach(c => {
        c.checked = c.value === link.granularity;
    });
    // 不自动生成结果，保留"点击生成结果查看链路拓扑"提示
    loResultGenerated = false;
    if (typeof renderLoTopology === 'function') renderLoTopology();
    if (typeof renderLoList === 'function') renderLoList();
}

// 保存链路（打开右侧抽屉确认）
function saveCurrentLink(asNew) {
    const mode = loWorkbenchState.mode;
    const isEdit = (mode === 'edit') && !asNew;
    loSaveDrawerState.isEdit = isEdit;
    loSaveDrawerState.asNew = !!asNew;

    // 收集当前筛选项快照
    const v = (typeof collectLoFilterValues === 'function') ? collectLoFilterValues() : {};
    const entryRaw = (document.getElementById('loEntry')?.value || '').trim();
    const upRaw = (document.getElementById('loUpLevel')?.value || '').trim();
    const downRaw = (document.getElementById('loDownLevel')?.value || '').trim();
    const upLv = upRaw === '' ? null : (parseInt(upRaw) || 0);
    const downLv = downRaw === '' ? null : (parseInt(downRaw) || 0);
    const granEl = document.querySelector('input[name="loGran"]:checked');
    const granularity = granEl ? granEl.value : '';
    const granText = granularity === 'interface' ? '接口' : (granularity === 'psm' ? 'PSM/服务' : '');
    const topologyText = (upLv == null && downLv == null)
        ? ''
        : `向上 ${upLv == null ? '-' : upLv} 层 / 向下 ${downLv == null ? '-' : downLv} 层`;

    // 必填项校验：工作台筛选项中带 * 的字段必须先填写
    const requiredChecks = [
        { ok: !!entryRaw, focusId: 'loEntry', msg: '请先选择链路入口' },
        { ok: !!v.loVDC, focusId: 'loVDC', msg: '请先选择 VDC' },
        { ok: !!v.loCluster, focusId: 'loCluster', msg: '请先选择集群' },
        { ok: !!v.loTimeRange, focusId: 'loTimeRange', msg: '请先选择时间范围' },
        { ok: upLv != null && downLv != null, focusId: 'loUpLevel', msg: '请先填写拓扑层级（向上 / 向下）' },
        { ok: !!v.loDept, focusId: 'loDept', msg: '请先选择部门' },
        { ok: !!granularity, focusId: null, msg: '请先选择观测粒度' }
    ];
    const failed = requiredChecks.find(c => !c.ok);
    if (failed) {
        showToast(failed.msg);
        if (failed.focusId) {
            const el = document.getElementById(failed.focusId);
            if (el) {
                el.focus();
                if (typeof el.scrollIntoView === 'function') {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        }
        return;
    }

    // 默认值（编辑模式取原数据）
    let defaultName = '';
    if (isEdit) {
        const ex = loUserLinks.find(l => l.id === loWorkbenchState.editingId);
        if (ex) defaultName = ex.name || '';
    } else if (asNew && loWorkbenchState.editingId) {
        const ex = loUserLinks.find(l => l.id === loWorkbenchState.editingId);
        if (ex) defaultName = `${ex.name}（副本）`;
    }

    // 填充抽屉
    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val == null ? '' : val; };
    document.getElementById('loSaveDrawerTitle').textContent = isEdit ? '编辑观测视图' : '新建观测视图';
    setVal('loSaveName', defaultName);
    setVal('loSaveEntry', entryRaw);
    setVal('loSaveVDC', v.loVDC || '');
    setVal('loSaveCluster', v.loCluster || '');
    setVal('loSaveTimeRange', v.loTimeRange || '');
    setVal('loSaveTopology', topologyText);
    setVal('loSaveDepType', v.loDepType || '');
    setVal('loSaveSvcPriority', v.loPriority || '');
    setVal('loSaveSvcType', v.loSvcType || '');
    setVal('loSaveDept', v.loDept || '未选择');
    setVal('loSaveGran', granText);

    // 打开抽屉
    document.getElementById('loSaveDrawer').classList.remove('hidden');
    setTimeout(() => {
        const nameInput = document.getElementById('loSaveName');
        if (nameInput) { nameInput.focus(); nameInput.select(); }
    }, 50);
}

const loSaveDrawerState = { isEdit: false, asNew: false, lastSavedId: null };

function closeLoSaveDrawer() {
    document.getElementById('loSaveDrawer').classList.add('hidden');
}

function confirmLoSaveDrawer() {
    const name = (document.getElementById('loSaveName')?.value || '').trim();
    if (!name) { showToast('请输入观测视图名称'); return; }
    if (name.length > 40) { showToast('观测视图名称不能超过 40 个字符'); return; }
    // 重名校验（排除当前编辑项）
    const dupe = loUserLinks.find(l => l.name === name && l.id !== loWorkbenchState.editingId);
    if (!loSaveDrawerState.isEdit && dupe) { showToast('该观测视图名称已存在，请更换'); return; }

    // 解析入口
    const entryRaw = (document.getElementById('loEntry')?.value || '').trim();
    const [entryPsm, entryMethod] = entryRaw.includes('/')
        ? entryRaw.split('/').map(s => s.trim())
        : [entryRaw, ''];
    const v = (typeof collectLoFilterValues === 'function') ? collectLoFilterValues() : {};
    const granEl = document.querySelector('input[name="loGran"]:checked');
    const granularity = granEl ? granEl.value : 'interface';
    const upLv = parseInt(document.getElementById('loUpLevel')?.value) || 1;
    const downLv = parseInt(document.getElementById('loDownLevel')?.value) || 1;
    const now = new Date();
    const ts = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

    if (loSaveDrawerState.isEdit) {
        const ex = loUserLinks.find(l => l.id === loWorkbenchState.editingId);
        if (ex) {
            ex.name = name;
            ex.entry = entryMethod ? `${entryPsm}:${entryMethod}:default` : entryPsm;
            ex.entryPsm = entryPsm;
            ex.entryMethod = entryMethod;
            ex.granularity = granularity;
            ex.vdc = v.loVDC || ex.vdc;
            ex.cluster = v.loCluster || ex.cluster;
            ex.timeRange = v.loTimeRange || ex.timeRange;
            ex.depType = v.loDepType || ex.depType;
            ex.svcPriority = v.loPriority || ex.svcPriority;
            ex.svcType = v.loSvcType || ex.svcType;
            ex.dept = v.loDept || ex.dept;
            ex.upLevel = upLv;
            ex.downLevel = downLv;
            ex.topology = `向上${upLv}层 / 向下${downLv}层`;
            ex.updateTime = ts;
            loSaveDrawerState.lastSavedId = ex.id;
        }
        showToast('修改已保存');
    } else {
        const newId = 'link-' + Date.now();
        loUserLinks.unshift({
            id: newId,
            name,
            entry: entryMethod ? `${entryPsm}:${entryMethod}:default` : entryPsm,
            entryPsm, entryMethod,
            granularity,
            dept: v.loDept || '产品研发和工程架构-GEC', tag: '核心', priority: 'P2', owner: '当前用户',
            topology: `向上${upLv}层 / 向下${downLv}层`,
            nodes: 8, edges: 10,
            status: 'safe', alertCount: 0, peakQps: '0 req/s',
            updateTime: ts,
            createTime: ts,
            vdc: v.loVDC || '', cluster: v.loCluster || '',
            timeRange: v.loTimeRange || '', depType: v.loDepType || '',
            svcPriority: v.loPriority || '', svcType: v.loSvcType || '',
            upLevel: upLv, downLevel: downLv
        });
        loSaveDrawerState.lastSavedId = newId;
        showToast('链路已保存');
    }
    closeLoSaveDrawer();
    switchPage('link-observation');
    // 3 秒后清除新链路高亮
    setTimeout(() => {
        loSaveDrawerState.lastSavedId = null;
        if (typeof renderLoLinks === 'function') renderLoLinks();
    }, 3000);
}

function findLoNode(psm) {
    if (loTopologyData.target.psm === psm) return loTopologyData.target;
    return loTopologyData.downstream.find(n => n.psm === psm);
}

function openLoEdgeDrawer(fromPsm, toPsm) {
    const caller = findLoNode(fromPsm);
    const callee = findLoNode(toPsm);
    if (!caller || !callee) return;
    const titleEl = document.getElementById('loNodeDrawerTitle');
    const bodyEl = document.getElementById('loNodeDrawerBody');
    const drawer = document.getElementById('loNodeDrawer');
    if (!titleEl || !bodyEl || !drawer) return;
    const isInterfaceLevel = (function () {
        const r = document.querySelector('input[name="loGran"]:checked');
        return r ? (r.value === 'interface' || r.value === 'iface') : false;
    })();
    titleEl.textContent = `${caller.psm} → ${callee.psm}`;

    // 强弱依赖：基于 caller→callee 哈希稳定派生
    const depTypes = ['强依赖', '业务强依赖', '弱依赖'];
    const depSeed = (caller.psm + '→' + callee.psm).split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const depType = depTypes[depSeed % depTypes.length];
    // 流量比例：该边 avg / 调用方对外总 avg
    const callerOutSum = (loTopologyData.downstream || [])
        .reduce((s, d) => s + (parseLoQpsNumber(d.avgQps) || 0), 0)
        || (parseLoQpsNumber(callee.avgQps) || 1);
    const thisAvg = parseLoQpsNumber(callee.avgQps) || 0;
    const ratioStr = (callerOutSum > 0 ? (thisAvg / callerOutSum * 100) : 0).toFixed(2) + '%';

    const callerCluster = caller.cluster || 'default';
    const calleeCluster = callee.cluster || 'default';
    // 调用方/被调用方接口：优先使用节点 invokeMethod，缺失时基于 psm 与 caller→callee 哈希稳定派生
    const ifacePool = ['BatchWrite', 'BatchQuery', 'NotifyAlarm', 'GetDetail', 'ListItems', 'UpdateConfig'];
    const pickIface = (svcPsm, salt) => {
        const svc = (svcPsm || 'svc').split('.').slice(-1)[0] || 'svc';
        const seed = (svcPsm + '|' + salt).split('').reduce((a, c) => a + c.charCodeAt(0), 0);
        return svc + '.' + ifacePool[seed % ifacePool.length];
    };
    const callerIface = caller.invokeMethod && caller.invokeMethod !== '-'
        ? caller.invokeMethod
        : pickIface(caller.psm, 'caller→' + callee.psm);
    const calleeIface = callee.invokeMethod && callee.invokeMethod !== '-'
        ? callee.invokeMethod
        : pickIface(callee.psm, caller.psm + '→callee');

    const rows = [];
    rows.push({ k: '调用方服务', v: caller.psm });
    rows.push({ k: '调用方集群', v: callerCluster });
    if (isInterfaceLevel) rows.push({ k: '调用方接口', v: callerIface });
    rows.push({ k: '被调用方服务', v: callee.psm });
    rows.push({ k: '被调用方集群', v: calleeCluster });
    if (isInterfaceLevel) rows.push({ k: '被调用方接口', v: calleeIface });
    rows.push({ k: '强弱依赖', v: depType });
    rows.push({ k: '流量比例', v: ratioStr });

    bodyEl.innerHTML = `
        <div class="lo-detail-section">
            <div class="lo-detail-section-title">边详情</div>
            <div class="lo-base-grid">
                ${rows.map(r => `
                    <div class="lo-base-item">
                        <span class="lo-base-label">${r.k}</span>
                        <span class="lo-base-value" title="${r.v}">${r.v}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    drawer.classList.remove('hidden');
}

// 解析 QPS 字符串为数值
function parseLoQpsNumber(s) {
    if (s == null || s === '' || s === '-') return 0;
    if (typeof s === 'number') return s;
    const m = String(s).trim().match(/^([\d.]+)\s*(k|w)?/i);
    if (!m) return parseFloat(s) || 0;
    let n = parseFloat(m[1]) || 0;
    const u = (m[2] || '').toLowerCase();
    if (u === 'k') n *= 1000;
    else if (u === 'w') n *= 10000;
    return n;
}

function openLoNodeDrawer(psm) {
    const node = findLoNode(psm);
    if (!node) return;
    const titleEl = document.getElementById('loNodeDrawerTitle');
    const bodyEl = document.getElementById('loNodeDrawerBody');
    const drawer = document.getElementById('loNodeDrawer');
    if (!titleEl || !bodyEl || !drawer) return;
    titleEl.textContent = node.psm;

    const isAbnormal = node.status !== 'normal';
    const badgeHtml = isAbnormal
        ? `<span class="badge ${node.status === 'error' ? 'badge-error' : 'badge-warning'}">${node.status === 'error' ? '异常' : '预警'}</span>`
        : '';

    // 观测粒度判定：勾选 interface = 接口级；否则按服务级
    const _ifaceGran = document.querySelector('input[name="loGran"][value="interface"]');
    const isInterfaceLevel = !!(_ifaceGran && _ifaceGran.checked);

    // 提取节点优先级（从 limitConfig 文本中解析）
    const priorityText = (node.limitConfig || '').match(/P\d/) ? (node.limitConfig.match(/P\d[^，,]*/) || ['P1'])[0] : 'P1';
    // 服务名（PSM 最后一段或全部）
    const svcName = node.psm;
    const ifaceName = node.invokeMethod || '-';

    // 基础信息（两列）— 按观测粒度区分字段
    const baseFields = isInterfaceLevel
        ? [
            { label: '接口', value: ifaceName },
            { label: '服务', value: svcName },
            { label: 'VDC', value: node.vdc || '-' },
            { label: '集群', value: node.cluster || '-' }
        ]
        : [
            { label: 'psm', value: svcName },
            { label: 'VDC', value: node.vdc || '-' },
            { label: '集群', value: node.cluster || '-' },
            { label: '优先级', value: priorityText }
        ];
    const baseHtml = `
        <div class="lo-detail-section">
            <div class="lo-detail-section-title">基本信息${badgeHtml ? ' ' + badgeHtml : ''}</div>
            <div class="lo-base-grid">
                ${baseFields.map(f => `<div class="lo-base-item"><span class="lo-base-label">${f.label}</span><span class="lo-base-value">${f.value}</span></div>`).join('')}
            </div>
        </div>
    `;

    // ========= 节点关系数据生成（按 PRD 拓展指标） =========
    // 上游/下游边的聚合数据来源；从 mock 数据派生 max/avg/p99/limited/limitRate/errorRate/rtAvg/rtP99/cpu/dependency/healthy/sparkline 等
    function _toQps(v) {
        if (v == null || v === '' || v === '-') return 0;
        if (typeof v === 'number') return v;
        const s = String(v).trim();
        const m = s.match(/^([\d.]+)\s*(k|w)?\s*(req\/s)?$/i);
        if (!m) return parseFloat(s) || 0;
        let n = parseFloat(m[1]) || 0;
        if ((m[2] || '').toLowerCase() === 'k') n *= 1000;
        else if ((m[2] || '').toLowerCase() === 'w') n *= 10000;
        return n;
    }
    function _pctFromCpu(v) {
        if (!v) return 0;
        const m = String(v).match(/[\d.]+/);
        return m ? parseFloat(m[0]) : 0;
    }
    function _hashStr(s) {
        let h = 0;
        for (let i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; }
        return Math.abs(h);
    }
    function _genSpark(seed, baseAvg) {
        const arr = [];
        for (let i = 0; i < 12; i++) {
            const r = ((_hashStr(seed + i) % 100) / 100) * 0.6 + 0.7; // 0.7~1.3
            arr.push(Math.max(0, baseAvg * r));
        }
        return arr;
    }
    function _formatQps(v) {
        if (v == null || isNaN(v)) return '-';
        if (v === 0) return '0';
        if (v >= 10000) return (v / 10000).toFixed(2) + 'w';
        if (v >= 1) return v.toFixed(2);
        return v.toFixed(2);
    }
    function _formatPct(v) {
        if (v == null || isNaN(v)) return '-';
        return v.toFixed(2) + '%';
    }
    function _priorityOf(n) {
        const m = (n.limitConfig || '').match(/P[012]/);
        return m ? m[0] : 'P2';
    }
    function _depTypeOf(n) {
        // 简易：根据节点 hash 派生强弱依赖
        const types = ['强依赖', '业务强依赖', '弱依赖', '未标注'];
        return types[_hashStr(n.psm) % 4];
    }
    function _vdcOf(n) {
        // 简短化 VDC：取 / 后段
        if (!n.vdc) return '-';
        const segs = String(n.vdc).split(/\s*\/\s*/);
        return segs[segs.length - 1].toUpperCase().replace(/[^A-Z0-9]/g, '');
    }
    function _healthOf(n) {
        if (n.status === 'error') return { key: 'error', text: '异常' };
        if (n.status === 'warn') return { key: 'warn', text: '预警' };
        if ((n.limitConfig || '').includes('限流') && _toQps(n.threshold) > 0 && _toQps(n.peakQps) >= _toQps(n.threshold) * 0.9) return { key: 'limit', text: '限流' };
        return { key: 'safe', text: '正常' };
    }
    // 构造一行边（caller -> callee）的所有指标
    function _edgeMetrics(caller, callee) {
        const callQps = _toQps(callee.peakQps) || _toQps(callee.qps) || _toQps(callee.currentQps) || 0;
        const max = _toQps(callee.peakQps) || callQps;
        const avg = _toQps(callee.currentQps) || callQps * 0.6;
        const p99 = _toQps(callee.p99) || callQps * 1.2;
        const threshold = _toQps(callee.threshold);
        // 被限流 QPS：阈值存在且 max 超阈值时取 max - threshold
        const limited = (threshold > 0 && max > threshold) ? (max - threshold) : 0;
        const limitRate = max > 0 ? (limited / max) * 100 : 0;
        // 错误率：依据 success
        const succ = parseFloat(String(callee.success || '100').replace('%', '')) || 100;
        const errRate = Math.max(0, 100 - succ);
        // RT
        const rtAvg = ((_hashStr(callee.psm) % 80) + 8) / 1; // 8~88ms
        const rtP99 = rtAvg * 2.4;
        const cpuPct = _pctFromCpu(callee.cpu);
        const totalCallerCalls = _toQps(caller.peakQps) || avg * 3;
        const trafficRatio = totalCallerCalls > 0 ? (avg / totalCallerCalls) * 100 : 0;
        const sparkline = _genSpark(callee.psm + (callee.invokeMethod || ''), avg);
        return {
            svc: callee.psm,
            iface: callee.invokeMethod || '-',
            vdc: _vdcOf(callee),
            cluster: callee.cluster || '-',
            priority: _priorityOf(callee),
            depType: _depTypeOf(callee),
            trafficRatio,
            max, avg, p99,
            limited, limitRate, errRate,
            rtAvg, rtP99,
            cpu: cpuPct,
            sparkline,
            tickets: callee.abnormalCount || 0,
            health: _healthOf(callee),
            raw: callee
        };
    }

    // 构造上游/下游行
    const upstreamEdges = [];
    const downstreamEdges = [];
    if (node === loTopologyData.target) {
        // target 节点：上游通常未渲染节点，仅根据 upstream 字段构造一个聚合
        if (node.upstream && node.upstream !== '-') {
            String(node.upstream).split(/\s*[\/／]\s*/).forEach(name => {
                const fakeUp = { psm: 'toutiao.upstream.' + name.replace(/\s+/g, ''), invokeMethod: 'invoke', vdc: node.vdc, cluster: 'cluster-up', limitConfig: 'P1', success: '99.95%', peakQps: node.peakQps, currentQps: node.currentQps, p99: node.p99, threshold: node.threshold, cpu: '32%', status: 'normal' };
                upstreamEdges.push(_edgeMetrics(fakeUp, node));
            });
        }
        loTopologyData.downstream.forEach(d => downstreamEdges.push(_edgeMetrics(node, d)));
    } else {
        // 下游节点：上游为 target；下游可能为空，构造 1 条派生
        upstreamEdges.push(_edgeMetrics(loTopologyData.target, node));
        if (node.downstream && node.downstream !== '-') {
            String(node.downstream).split(/\s*[\/／]\s*/).forEach(name => {
                const fakeDown = { psm: 'svc.' + name.replace(/\s+/g, ''), invokeMethod: 'BatchWrite', vdc: node.vdc, cluster: 'cluster-d', limitConfig: 'P2', success: '100%', peakQps: node.peakQps, currentQps: node.currentQps, p99: node.p99, threshold: node.threshold, cpu: '18%', status: 'normal' };
                downstreamEdges.push(_edgeMetrics(node, fakeDown));
            });
        }
    }

    // 扩充：每个服务派生多接口 × 多集群副本，便于演示「全部*聚合」与多选展开逻辑
    function _expandClusters(edges) {
        const clusterPool = ['cluster-a', 'cluster-b', 'cluster-c', 'cluster-d', 'cluster-e'];
        const ifacePool = ['BatchWrite', 'BatchQuery', 'NotifyAlarm', 'GetDetail', 'ListItems', 'UpdateConfig'];
        const expanded = [];
        edges.forEach(e => {
            const seed = _hashStr(e.svc + (e.iface || ''));
            // 集群数 2~4
            const clusterCount = 2 + (seed % 3);
            const clusterStart = seed % clusterPool.length;
            const usedClusters = [];
            for (let i = 0; i < clusterCount; i++) {
                usedClusters.push(clusterPool[(clusterStart + i) % clusterPool.length]);
            }
            // 接口数 2~3（包括原始 iface）
            const ifaceCount = 2 + ((seed >> 4) % 2);
            const ifaceStart = (seed >> 8) % ifacePool.length;
            const usedIfaces = [];
            const origIface = e.iface && e.iface !== '-' ? e.iface : null;
            if (origIface) usedIfaces.push(origIface);
            for (let i = 0; usedIfaces.length < ifaceCount && i < ifacePool.length; i++) {
                const cand = ifacePool[(ifaceStart + i) % ifacePool.length];
                if (!usedIfaces.includes(cand)) usedIfaces.push(cand);
            }
            // 叉乘 接口 × 集群
            usedIfaces.forEach((ifname, ifIdx) => {
                usedClusters.forEach((c, cIdx) => {
                    const idx = ifIdx * usedClusters.length + cIdx;
                    const factor = (0.4 + ((seed >> (idx + 1)) % 60) / 100);
                    const norm = factor / (clusterCount * ifaceCount);
                    expanded.push({
                        ...e,
                        iface: ifname,
                        cluster: c,
                        max: e.max * (0.55 + ((seed >> idx) % 50) / 100),
                        avg: e.avg * (0.55 + ((seed >> idx) % 50) / 100) * norm * (clusterCount * ifaceCount),
                        p99: e.p99 * (0.65 + ((seed >> idx) % 40) / 100),
                        cpu: Math.min(99, Math.max(5, e.cpu + ((seed >> idx) % 20) - 10)),
                        limited: e.limited * norm,
                        limitRate: e.limitRate,
                        errRate: e.errRate
                    });
                });
            });
        });
        return expanded;
    }
    const upstreamEdgesExpanded = _expandClusters(upstreamEdges);
    const downstreamEdgesExpanded = _expandClusters(downstreamEdges);

    // 渲染聚合表格的工具函数
    function buildIfaceBlock(direction, edges) {
        // direction: 'up' | 'down'
        const labelPrefix = direction === 'up' ? '调用方' : '被调用方';
        const stateKey = direction === 'up' ? 'loIfaceUp' : 'loIfaceDown';
        // 初始化筛选状态（从 URL 读取）
        const usp = new URLSearchParams(window.location.search);
        const initFilter = {
            svc: (usp.get(`${stateKey}_svc`) || '*').split(',').filter(Boolean),
            iface: (usp.get(`${stateKey}_iface`) || '*').split(',').filter(Boolean),
            vdc: (usp.get(`${stateKey}_vdc`) || '*').split(',').filter(Boolean),
            cluster: (usp.get(`${stateKey}_cluster`) || '*').split(',').filter(Boolean)
        };
        window[stateKey] = window[stateKey] || initFilter;

        // 候选值：集群恒定取自当前数据 + 常用 mock；接口取自当前数据（接口粒度下即为上游/下游所有节点接口名）
        const baseClusters = Array.from(new Set(edges.map(e => e.cluster).filter(v => v && v !== '-')));
        const extraClusters = ['cluster-a', 'cluster-b', 'cluster-c', 'cluster-d', 'cluster-e', 'cluster-up', 'cluster-dn', 'cluster-01', 'cluster-02', 'cluster-03'];
        const allCluster = Array.from(new Set([...baseClusters, ...extraClusters]));
        const baseIface = Array.from(new Set(edges.map(e => e.iface).filter(v => v && v !== '-')));
        const extraIface = ['BatchWrite', 'BatchQuery', 'NotifyAlarm', 'GetDetail', 'ListItems', 'UpdateConfig', 'DeleteRecord', 'GET /i18n/translate', 'POST /order/create', 'PUT /user/update'];
        // 接口粒度：仅暴露当前节点真实关联的接口（上游/下游所有节点对应的接口）
        // 服务粒度：候选 = 真实数据 + mock，便于用户筛选更精细数据
        const allIface = isInterfaceLevel
            ? (baseIface.length ? baseIface : extraIface.slice(0, 5))
            : Array.from(new Set([...baseIface, ...extraIface]));

        const renderFilterChip = (field, label, options) => {
            const sel = window[stateKey][field] || ['*'];
            const isAll = !sel.length || sel.includes('*');
            const display = isAll ? '*' : (sel.length === 1 ? sel[0] : `${sel[0]} +${sel.length - 1}`);
            return `<div class="lo-iface-filter-chip" data-field="${field}">
                <span class="lo-iface-filter-label">${label}</span>
                <span class="lo-iface-filter-value${isAll ? ' is-all' : ''}" title="${sel.join(', ') || '*'}">${display}</span>
                <span class="lo-iface-filter-arrow">▾</span>
                <div class="lo-iface-filter-pop hidden">
                    <div class="lo-iface-filter-pop-search"><input type="text" placeholder="搜索 ${label}" /></div>
                    <div class="lo-iface-filter-pop-list">
                        <label class="lo-iface-filter-pop-item"><input type="checkbox" data-val="*" ${isAll ? 'checked' : ''}> *（全部）</label>
                        ${options.map(o => `<label class="lo-iface-filter-pop-item"><input type="checkbox" data-val="${o}" ${(!isAll && sel.includes(o)) ? 'checked' : ''}> ${o}</label>`).join('')}
                    </div>
                </div>
            </div>`;
        };

        // chip 区：无论观测粒度都展示「接口 + 集群」两个筛选项，默认值均为 *
        const filterChips = `
            ${renderFilterChip('iface', `${labelPrefix}接口`, allIface)}
            ${renderFilterChip('cluster', `${labelPrefix}集群`, allCluster)}
            <button class="lo-iface-filter-reset" type="button">重置</button>
        `;

        // 已选 chip：按需求隐藏（避免与筛选项 chip 信息重复）
        const selectedChips = '';

        // 应用筛选（仅按可见字段过滤）
        let rows = edges.filter(e => {
            const f = window[stateKey];
            if (f.iface && f.iface.length && !f.iface.includes('*') && !f.iface.includes(e.iface)) return false;
            if (f.cluster && f.cluster.length && !f.cluster.includes('*') && !f.cluster.includes(e.cluster)) return false;
            return true;
        });

        // 聚合规则：
        // - 当某维度筛选 = '*'（全部），则把该维度的所有值合并到 1 行，列展示 '*'
        // - 当某维度筛选指定具体值（单选/多选），按该维度展开
        const f = window[stateKey];
        const ifaceAll = !f.iface || !f.iface.length || f.iface.includes('*');
        const clusterAll = !f.cluster || !f.cluster.length || f.cluster.includes('*');
        // 分组键：服务（恒定）+ 接口 + 集群
        const groupKeyOf = (e) => [e.svc, ifaceAll ? '*' : e.iface, clusterAll ? '*' : e.cluster].join('||');
        const groups = new Map();
        rows.forEach(e => {
            const k = groupKeyOf(e);
            if (!groups.has(k)) groups.set(k, []);
            groups.get(k).push(e);
        });
        rows = Array.from(groups.values()).map(grp => {
            const head = grp[0];
            const aggCpu = grp.reduce((s, x) => s + (x.cpu || 0), 0) / grp.length;
            const aggMax = grp.reduce((m, x) => Math.max(m, x.max || 0), 0);
            const aggP99 = grp.reduce((m, x) => Math.max(m, x.p99 || 0), 0);
            const aggAvg = grp.reduce((s, x) => s + (x.avg || 0), 0);
            const aggLimited = grp.reduce((s, x) => s + (x.limited || 0), 0);
            const aggLimitRate = grp.reduce((m, x) => Math.max(m, x.limitRate || 0), 0);
            const aggErrRate = grp.reduce((m, x) => Math.max(m, x.errRate || 0), 0);
            return {
                ...head,
                cluster: clusterAll ? '*' : head.cluster,
                iface: ifaceAll ? '*' : head.iface,
                max: aggMax,
                avg: aggAvg,
                p99: aggP99,
                cpu: aggCpu,
                limited: aggLimited,
                limitRate: aggLimitRate,
                errRate: aggErrRate
            };
        });

        // 默认排序：被限流 QPS 倒序 → 错误率倒序
        rows.sort((a, b) => (b.limited - a.limited) || (b.errRate - a.errRate));

        // 表头（无论粒度，统一 8 列）：服务 / 接口 / 集群 / 优先级 / 流量 Max / 流量 Avg / 流量 P99 / CPU 利用率
        const ths = [
            `<th class="lo-iface-col-svc">${labelPrefix}服务</th>`,
            `<th>${labelPrefix}接口</th>`,
            `<th>${labelPrefix}集群</th>`,
            `<th>优先级</th>`,
            `<th>流量 Max</th>`,
            `<th>流量 Avg</th>`,
            `<th>流量 P99</th>`,
            `<th>CPU 利用率</th>`
        ].join('');

        // 行
        const trs = rows.length ? rows.map(r => {
            const cpuCls = r.cpu > 85 ? ' lo-iface-cell-err' : (r.cpu > 70 ? ' lo-iface-cell-warn' : '');
            const priorityChip = `<span class="lo-iface-priority lo-iface-priority-${(r.priority || 'P2').toLowerCase()}">${r.priority || 'P2'}</span>`;
            const tds = [
                `<td><span class="lo-iface-svc-text">${r.svc}</span></td>`,
                `<td>${r.iface || '-'}</td>`,
                `<td>${r.cluster}</td>`,
                `<td>${priorityChip}</td>`,
                `<td>${_formatQps(r.max)}</td>`,
                `<td>${_formatQps(r.avg)}</td>`,
                `<td>${_formatQps(r.p99)}</td>`,
                `<td><span class="${cpuCls.trim()}">${_formatPct(r.cpu)}</span></td>`
            ].join('');
            return `<tr>${tds}</tr>`;
        }).join('') : `<tr><td colspan="8"><div class="lo-iface-empty"><div class="lo-iface-empty-icon">📭</div><div>请调整筛选条件</div><a class="lo-iface-empty-clear" data-state="${stateKey}">清空筛选</a></div></td></tr>`;

        return `
            <div class="lo-detail-section lo-iface-block" data-direction="${direction}" data-state="${stateKey}">
                <div class="lo-detail-section-title">${direction === 'up' ? '上游节点信息' : '下游节点信息'}</div>
                <div class="lo-iface-filter-row">${filterChips}</div>
                ${selectedChips}
                <div class="lo-iface-table-scroll">
                    <table class="data-table lo-iface-table lo-iface-table-pro">
                        <thead><tr>${ths}</tr></thead>
                        <tbody>${trs}</tbody>
                    </table>
                </div>
            </div>
        `;
    }

    const upstreamHtml = buildIfaceBlock('up', upstreamEdgesExpanded);
    const downstreamHtml = buildIfaceBlock('down', downstreamEdgesExpanded);

    // 告警事件区块：流量趋势图 + 异常表 + 限流配置（GEC / Neptune）
    let alertHtml = '';
    {
        const qpsChartHtml = buildLoNodeQpsTabbed(node, isInterfaceLevel);

        // 异常表（按观测粒度区分）
        // 列：异常类型、异常接口、异常影响接口、异常流量值、触发时间、异常工单
        const dnIfaces = (loTopologyData.downstream || [])
            .map(d => d.invokeMethod)
            .filter(Boolean);
        const buildTicket = (suffix) => 'INC-' + new Date().toISOString().slice(0, 10).replace(/-/g, '') + '-' + suffix;
        let abnRows = [];
        if (node.ticketEvent) {
            if (isInterfaceLevel) {
                // 接口级：仅展示当前接口的异常明细
                const tk = (node.ticketEvent.data.match(/#?INC-\d+-\d+/) || [buildTicket('001')])[0].replace(/^#/, '');
                abnRows.push({
                    type: '异常流量',
                    iface: node.invokeMethod || '-',
                    affected: dnIfaces.slice(0, 3),
                    traffic: node.peakQps || '-',
                    time: node.ticketEvent.time,
                    ticket: tk
                });
            } else {
                // 服务级：展示该 PSM 下所有关联异常工单的接口
                const svcIfaces = [];
                if (node.invokeMethod) svcIfaces.push(node.invokeMethod);
                const svcShort = (node.psm || '').split('.').slice(-1)[0] || 'svc';
                ['BatchWrite', 'BatchQuery', 'NotifyAlarm'].forEach(s => {
                    const m = `${svcShort}.${s}`;
                    if (!svcIfaces.includes(m)) svcIfaces.push(m);
                });
                svcIfaces.slice(0, 3).forEach((m, i) => {
                    abnRows.push({
                        type: '异常流量',
                        iface: m,
                        affected: dnIfaces.slice(i, i + 2 + (i % 2)),
                        traffic: i === 0 ? (node.peakQps || '-') : (Math.round((node.peakQps || 800) * (0.6 + i * 0.2)) + ' QPS'),
                        time: node.ticketEvent.time,
                        ticket: buildTicket(String(101 + i))
                    });
                });
            }
        }
        const renderAffected = (arr) => {
            if (!arr || !arr.length) return '<span class="lo-iface-cell-muted">-</span>';
            return arr.map(x => `<span class="lo-abn-affected-chip" title="${x}">${x}</span>`).join('');
        };
        const abnTable = `
            <div class="lo-alert-sub-title">异常</div>
            <table class="data-table lo-iface-table lo-abn-table">
                <thead><tr><th>异常类型</th><th>异常接口</th><th>异常影响接口</th><th>异常流量值</th><th>触发时间</th><th>异常工单</th></tr></thead>
                <tbody>
                    ${abnRows.length
                        ? abnRows.map(r => `<tr>
                            <td>${r.type}</td>
                            <td title="${r.iface}">${r.iface}</td>
                            <td class="lo-abn-affected-cell">${renderAffected(r.affected)}</td>
                            <td>${r.traffic}</td>
                            <td>${r.time}</td>
                            <td><a class="lo-ticket-link" href="https://oncall.bytedance.net/ticket/${r.ticket}" target="_blank" rel="noopener">${r.ticket}</a></td>
                        </tr>`).join('')
                        : `<tr><td colspan="6" style="text-align:center;color:#999">暂无数据</td></tr>`}
                </tbody>
            </table>
        `;

        // 限流配置：GEC-限流器 / Neptune / TLB 三个 tab
        const svcCluster = node.cluster || 'default';
        const svcIface = node.invokeMethod && node.invokeMethod !== '-' ? node.invokeMethod : ((node.psm || 'svc').split('.').slice(-1)[0] + '.BatchQuery');
        const upPsm = node !== loTopologyData.target ? loTopologyData.target.psm : 'toutiao.upstream';
        const upCluster = node !== loTopologyData.target ? (loTopologyData.target.cluster || 'default') : 'cluster-up';
        const limitVal = node.threshold || '10000 req/s';
        const sceneText = '默认场景';
        const customKey = 'user_id';
        const limitTypeIface = '接口限流';
        const limitTypeKey = '自定义 key 限流';
        const tlbDomain = (node.psm || 'svc').split('.').slice(-1)[0] + '.byted.org';
        const tlbPath = '/api/v1/' + ((node.psm || 'svc').split('.').slice(-1)[0]) + '/list';
        const tlbCluster = svcCluster;
        // 限流集群（接口/自定义 key 限流场景下）
        const limitCluster = svcCluster;
        // 是否为 HTTP 服务（仅 HTTP 服务才展示 TLB tab）
        const isHttpService = (node.svcType || '').toUpperCase() === 'HTTP'
            || (node.method || '').toLowerCase() === 'http';

        // ========== GEC-限流器 ==========
        // PSM 级：分「接口限流」「自定义 key 限流」两个子 Tab
        //   - 接口限流：调用方服务 / 调用方集群 / 限流接口 / 限流集群 / 限流值 / 操作
        //   - 自定义 key 限流：限流场景 / 限流集群 / 自定义 key / 限流值 / 操作
        // 接口级：保留单表格（限流类型 / 调用方服务 / 调用方集群 / 限流接口 / 限流场景 / 限流值 / 操作）
        let gecPaneHtml = '';
        if (!isInterfaceLevel) {
            // 接口限流子 Tab
            const gecIfaceHeads = ['调用方服务', '调用方集群', '限流接口', '限流集群', '限流值', '操作'];
            const gecIfaceRow = [upPsm, upCluster, svcIface, limitCluster, limitVal];
            const gecIfaceBody = `<tr>${gecIfaceRow.map(c => `<td title="${c}">${c}</td>`).join('')}<td><a class="lo-config-action" href="#" data-target="gec" data-psm="${node.psm}">查看</a></td></tr>`;
            const gecIfaceTable = `
                <table class="data-table lo-iface-table">
                    <thead><tr>${gecIfaceHeads.map(h => `<th>${h}</th>`).join('')}</tr></thead>
                    <tbody>${gecIfaceBody}</tbody>
                </table>
            `;
            // 自定义 key 限流子 Tab
            const gecKeyHeads = ['限流场景', '限流集群', '自定义 key', '限流值', '操作'];
            const gecKeyRow = [sceneText, limitCluster, customKey, limitVal];
            const gecKeyBody = `<tr>${gecKeyRow.map(c => `<td title="${c}">${c}</td>`).join('')}<td><a class="lo-config-action" href="#" data-target="gec" data-psm="${node.psm}">查看</a></td></tr>`;
            const gecKeyTable = `
                <table class="data-table lo-iface-table">
                    <thead><tr>${gecKeyHeads.map(h => `<th>${h}</th>`).join('')}</tr></thead>
                    <tbody>${gecKeyBody}</tbody>
                </table>
            `;
            gecPaneHtml = `
                <div class="lo-cfg-sub-tabs">
                    <div class="lo-cfg-sub-tab active" data-subtab="iface">${limitTypeIface}</div>
                    <div class="lo-cfg-sub-tab" data-subtab="key">${limitTypeKey}</div>
                </div>
                <div class="lo-cfg-sub-panel" data-subpanel="iface">${gecIfaceTable}</div>
                <div class="lo-cfg-sub-panel hidden" data-subpanel="key">${gecKeyTable}</div>
            `;
        } else {
            const gecHeads = ['调用方服务', '调用方集群', '限流接口', '限流集群', '限流值', '操作'];
            const gecCells = [upPsm, upCluster, svcIface, limitCluster, limitVal];
            const gecBody = `<tr>${gecCells.map(c => `<td title="${c}">${c}</td>`).join('')}<td><a class="lo-config-action" href="#" data-target="gec" data-psm="${node.psm}">查看</a></td></tr>`;
            gecPaneHtml = `
                <table class="data-table lo-iface-table">
                    <thead><tr>${gecHeads.map(h => `<th>${h}</th>`).join('')}</tr></thead>
                    <tbody>${gecBody}</tbody>
                </table>
            `;
        }

        // ========== Neptune ==========
        // PSM 级：调用方服务 / 调用方集群 / 限流接口 / 限流场景 / 限流值 / 操作
        // 接口级：保留原字段
        let neptuneTable = '';
        if (!isInterfaceLevel) {
            const neptuneHeads = ['调用方服务', '调用方集群', '限流接口', '限流场景', '限流值', '操作'];
            const neptuneCells = [upPsm, upCluster, svcIface, sceneText, limitVal];
            const neptuneBody = `<tr>${neptuneCells.map(c => `<td title="${c}">${c}</td>`).join('')}<td><a class="lo-config-action" href="#" data-target="neptune" data-psm="${node.psm}">查看</a></td></tr>`;
            neptuneTable = `
                <table class="data-table lo-iface-table">
                    <thead><tr>${neptuneHeads.map(h => `<th>${h}</th>`).join('')}</tr></thead>
                    <tbody>${neptuneBody}</tbody>
                </table>
            `;
        } else {
            const neptuneHeads = ['限流类型', '调用方服务', '调用方集群', '限流接口', '限流场景', '限流值', '操作'];
            const neptuneCells = ['集群限流', upPsm, upCluster, svcIface, sceneText, limitVal];
            const neptuneBody = `<tr>${neptuneCells.map(c => `<td title="${c}">${c}</td>`).join('')}<td><a class="lo-config-action" href="#" data-target="neptune" data-psm="${node.psm}">查看</a></td></tr>`;
            neptuneTable = `
                <table class="data-table lo-iface-table">
                    <thead><tr>${neptuneHeads.map(h => `<th>${h}</th>`).join('')}</tr></thead>
                    <tbody>${neptuneBody}</tbody>
                </table>
            `;
        }

        // ========== TLB ==========
        // 仅 HTTP 服务展示该 tab
        // 字段：TLB集群 / TLB域名 / TLB路径 / 限流值 / 操作
        let tlbTable = '';
        if (isHttpService) {
            const tlbHeads = ['TLB集群', 'TLB域名', 'TLB路径', '限流值', '操作'];
            const tlbCells = [tlbCluster, tlbDomain, tlbPath, limitVal];
            const tlbBody = `<tr>${tlbCells.map(c => `<td title="${c}">${c}</td>`).join('')}<td><a class="lo-config-action" href="#" data-target="tlb" data-psm="${node.psm}">查看</a></td></tr>`;
            tlbTable = `
                <table class="data-table lo-iface-table">
                    <thead><tr>${tlbHeads.map(h => `<th>${h}</th>`).join('')}</tr></thead>
                    <tbody>${tlbBody}</tbody>
                </table>
            `;
        }

        const cfgTable = `
            <div class="lo-alert-sub-title">限流配置</div>
            <div class="lo-cfg-tabs">
                <div class="lo-cfg-tab-headers">
                    <div class="lo-cfg-tab-h active" data-tab="gec">GEC-限流器</div>
                    <div class="lo-cfg-tab-h" data-tab="neptune">Neptune</div>
                    ${isHttpService ? `<div class="lo-cfg-tab-h" data-tab="tlb">TLB</div>` : ''}
                </div>
                <div class="lo-cfg-tab-panel" data-panel="gec">
                    ${gecPaneHtml}
                </div>
                <div class="lo-cfg-tab-panel hidden" data-panel="neptune">
                    ${neptuneTable}
                </div>
                ${isHttpService ? `<div class="lo-cfg-tab-panel hidden" data-panel="tlb">${tlbTable}</div>` : ''}
            </div>
        `;

        alertHtml = `
            <div class="lo-detail-section">
                ${qpsChartHtml}
                ${abnTable}
                ${cfgTable}
            </div>
        `;
    }

    bodyEl.innerHTML = baseHtml + upstreamHtml + downstreamHtml + alertHtml;

    // 聚合筛选交互（上游 / 下游表格）
    function rerenderIfaceBlock(direction) {
        const newHtml = buildIfaceBlock(direction, direction === 'up' ? upstreamEdgesExpanded : downstreamEdgesExpanded);
        const cur = bodyEl.querySelector(`.lo-iface-block[data-direction="${direction}"]`);
        if (cur) {
            const tmp = document.createElement('div');
            tmp.innerHTML = newHtml;
            const next = tmp.firstElementChild;
            // 仅替换内部内容，保留外层节点与已绑定的事件监听
            cur.innerHTML = next.innerHTML;
        }
    }
    function syncIfaceFilterToUrl() {
        try {
            const usp = new URLSearchParams(window.location.search);
            ['loIfaceUp', 'loIfaceDown'].forEach(stateKey => {
                ['svc', 'iface', 'vdc', 'cluster'].forEach(f => {
                    const sel = (window[stateKey] && window[stateKey][f]) || [];
                    const k = `${stateKey}_${f}`;
                    if (!sel.length || sel.includes('*')) usp.delete(k);
                    else usp.set(k, sel.join(','));
                });
            });
            const newUrl = window.location.pathname + (usp.toString() ? '?' + usp.toString() : '') + window.location.hash;
            window.history.replaceState(null, '', newUrl);
        } catch (e) {}
    }
    bodyEl.querySelectorAll('.lo-iface-block').forEach(block => {
        const direction = block.getAttribute('data-direction');
        const stateKey = block.getAttribute('data-state');

        // 点击 chip 切换 pop
        block.addEventListener('click', (e) => {
            // 操作按钮
            const act = e.target.closest('.lo-iface-act-link');
            if (act) {
                e.preventDefault();
                const psm = act.getAttribute('data-psm');
                const action = act.getAttribute('data-act');
                if (action === 'view') openLoNodeDrawer(psm);
                else if (action === 'topo') {
                    if (typeof showToast === 'function') showToast(`已跳转到「${psm}」拓扑视图`);
                } else if (action === 'cfg') {
                    if (typeof showToast === 'function') showToast(`已打开「${psm}」限流配置`);
                }
                return;
            }
            // 服务名链接
            const svcLink = e.target.closest('.lo-iface-svc-link');
            if (svcLink) {
                e.preventDefault();
                openLoNodeDrawer(svcLink.getAttribute('data-psm'));
                return;
            }
            // 重置
            if (e.target.closest('.lo-iface-filter-reset')) {
                window[stateKey] = { svc: ['*'], iface: ['*'], vdc: ['*'], cluster: ['*'] };
                syncIfaceFilterToUrl();
                rerenderIfaceBlock(direction);
                return;
            }
            // 已选 chip × 移除
            const sx = e.target.closest('.lo-iface-selected-chip');
            if (sx && e.target.classList.contains('lo-iface-selected-x')) {
                const f = sx.getAttribute('data-field');
                const v = sx.getAttribute('data-val');
                window[stateKey][f] = (window[stateKey][f] || []).filter(x => x !== v);
                if (!window[stateKey][f].length) window[stateKey][f] = ['*'];
                syncIfaceFilterToUrl();
                rerenderIfaceBlock(direction);
                return;
            }
            // 空态「清空筛选」
            const ec = e.target.closest('.lo-iface-empty-clear');
            if (ec) {
                e.preventDefault();
                window[stateKey] = { svc: ['*'], iface: ['*'], vdc: ['*'], cluster: ['*'] };
                syncIfaceFilterToUrl();
                rerenderIfaceBlock(direction);
                return;
            }
            // chip 弹层切换
            const chip = e.target.closest('.lo-iface-filter-chip');
            if (chip) {
                if (e.target.closest('.lo-iface-filter-pop')) {
                    // 在弹层内：checkbox 处理
                    const cb = e.target.closest('input[type="checkbox"]');
                    if (cb) {
                        const field = chip.getAttribute('data-field');
                        const val = cb.getAttribute('data-val');
                        let cur = (window[stateKey][field] || []).slice();
                        if (val === '*') {
                            cur = cb.checked ? ['*'] : [];
                        } else {
                            cur = cur.filter(x => x !== '*');
                            if (cb.checked) {
                                if (!cur.includes(val)) cur.push(val);
                            } else {
                                cur = cur.filter(x => x !== val);
                            }
                            if (!cur.length) cur = ['*'];
                        }
                        window[stateKey][field] = cur;
                        syncIfaceFilterToUrl();
                        rerenderIfaceBlock(direction);
                        // 重渲后保持当前 chip 的弹层展开，便于继续多选
                        const blockAfter = bodyEl.querySelector(`.lo-iface-block[data-direction="${direction}"]`);
                        if (blockAfter) {
                            const chipAfter = blockAfter.querySelector(`.lo-iface-filter-chip[data-field="${field}"]`);
                            if (chipAfter) {
                                const popAfter = chipAfter.querySelector('.lo-iface-filter-pop');
                                if (popAfter) popAfter.classList.remove('hidden');
                            }
                        }
                    }
                    return;
                }
                // chip 自身：切换 pop 显示
                const pop = chip.querySelector('.lo-iface-filter-pop');
                if (pop) {
                    // 关闭其他
                    block.querySelectorAll('.lo-iface-filter-pop').forEach(p => { if (p !== pop) p.classList.add('hidden'); });
                    pop.classList.toggle('hidden');
                }
                return;
            }
            // 点其他位置：关闭所有 pop
            block.querySelectorAll('.lo-iface-filter-pop').forEach(p => p.classList.add('hidden'));
        });

        // 弹层内搜索
        block.addEventListener('input', (e) => {
            const search = e.target.closest('.lo-iface-filter-pop-search input');
            if (!search) return;
            const list = search.closest('.lo-iface-filter-pop').querySelector('.lo-iface-filter-pop-list');
            const kw = search.value.trim().toLowerCase();
            list.querySelectorAll('.lo-iface-filter-pop-item').forEach(it => {
                const v = (it.textContent || '').toLowerCase();
                it.style.display = v.includes(kw) ? '' : 'none';
            });
        });
    });
    // 全局点击外部关闭聚合筛选 pop
    if (!document._loIfaceFilterClose) {
        document._loIfaceFilterClose = true;
        document.addEventListener('pointerdown', (e) => {
            if (!e.target.closest('.lo-iface-filter-chip')) {
                document.querySelectorAll('.lo-iface-filter-pop').forEach(p => p.classList.add('hidden'));
            }
        }, true);
    }

    // 初次渲染 QPS 图表内容（多接口对比） + 绑定下拉/搜索事件
    bodyEl.querySelectorAll('.lo-qps-chart-wrap').forEach(wrap => {
        renderLoQpsChartContent(wrap);
    });
    bindLoQpsChartEvents(bodyEl);

    // 事件代理：编辑跳转 + Tab 切换
    if (!bodyEl._loConfigBound) {
        bodyEl.addEventListener('click', (e) => {
            // 顶层 Tab：GEC / Neptune
            const tabH = e.target.closest('.lo-cfg-tab-h');
            if (tabH) {
                const root = tabH.closest('.lo-cfg-tabs');
                if (!root) return;
                const key = tabH.getAttribute('data-tab');
                root.querySelectorAll('.lo-cfg-tab-h').forEach(h => h.classList.toggle('active', h === tabH));
                root.querySelectorAll('.lo-cfg-tab-panel').forEach(p => {
                    p.classList.toggle('hidden', p.getAttribute('data-panel') !== key);
                });
                return;
            }
            // GEC 内子 Tab：接口限流 / 自定义 key 限流
            const subTab = e.target.closest('.lo-cfg-sub-tab');
            if (subTab) {
                const wrap = subTab.closest('.lo-cfg-tab-panel');
                if (!wrap) return;
                const key = subTab.getAttribute('data-subtab');
                wrap.querySelectorAll('.lo-cfg-sub-tab').forEach(s => s.classList.toggle('active', s === subTab));
                wrap.querySelectorAll('.lo-cfg-sub-panel').forEach(p => {
                    p.classList.toggle('hidden', p.getAttribute('data-subpanel') !== key);
                });
                return;
            }
            // 编辑：根据来源跳转到对应平台
            const a = e.target.closest('.lo-config-action');
            if (a) {
                e.preventDefault();
                const target = a.getAttribute('data-target') || 'gec';
                if (target === 'neptune') {
                    // 跳转到 Neptune 平台对应限流配置详情页（mock 外链）
                    window.open('https://neptune.bytedance.net/limit/detail?psm=' + encodeURIComponent(a.getAttribute('data-psm') || ''), '_blank');
                } else {
                    closeLoNodeDrawer();
                    if (typeof switchPage === 'function') switchPage('limiter');
                }
            }
        });
        bodyEl._loConfigBound = true;
    }

    drawer.classList.remove('hidden');
}

// 解析 threshold 数值（支持 "15" / "5k" / "500" / "2k" / "15.0"）
function parseLoThresholdNumber(t) {
    if (!t) return 0;
    const s = String(t).trim();
    const m = s.match(/^([\d.]+)\s*([kKmM]?)/);
    if (!m) return 0;
    let n = parseFloat(m[1]);
    if (m[2] === 'k' || m[2] === 'K') n *= 1000;
    if (m[2] === 'm' || m[2] === 'M') n *= 1000000;
    return n;
}

function parseLoThresholdWaterText(t) {
    const v = parseLoThresholdNumber(t) * 0.8;
    if (v >= 1000) return (v / 1000).toFixed(1) + 'k req/s';
    return v.toFixed(1) + ' req/s';
}

// 构造节点的接口列表（mock）
// - limitMode = 'iface'：以节点的 invokeMethod 为首，再补充几个常见接口
// - limitMode = 'key' ：自定义 key 限流，列表为 key 名（如 user_id / device_id 等）
// 状态分类（仅 normal / warn / limit；流量趋势图中不展示「异常」）：
//   limit  →  peak ≥ limit
//   warn   →  0.8 ≤ peak/limit < 1.0
//   normal →  peak/limit < 0.8
function getLoNodeInterfaces(node) {
    const baseLimit = parseLoThresholdNumber(node.threshold) || 100;
    const isKeyMode = node.limitMode === 'key';
    const isAllMode = node.limitMode === 'all';
    // 'all' 模式：合并接口限流 + 自定义 Key 限流，并在每条上加 kind 字段
    if (isAllMode) {
        const ifaceList = getLoNodeInterfaces({ ...node, limitMode: 'iface' }).map(it => ({ ...it, kind: 'iface' }));
        const keyList = getLoNodeInterfaces({ ...node, limitMode: 'key' }).map(it => ({ ...it, kind: 'key' }));
        // 状态分组排序：limit > warn > safe；同状态内按 ratio 降序
        const order = { limit: 0, warn: 1, safe: 2 };
        return [...ifaceList, ...keyList].sort((a, b) => (order[a.status] - order[b.status]) || (b.ratio - a.ratio));
    }
    // 节点是限流/异常状态：主项标记为 limit；预警状态：主项标记为 warn；其余为 normal
    const isNodeError = node.status === 'error' || !!node.abnormalTraffic;
    const isNodeWarn = node.status === 'warn';

    // 各项 mock 配置：mul 决定 peak/limit 的比值
    const ifaceCandidates = [
        { suffix: 'List',       mul: 0.45 },
        { suffix: 'Detail',     mul: 0.72 },
        { suffix: 'Create',     mul: 0.55 },
        { suffix: 'Update',     mul: 0.88 },
        { suffix: 'Delete',     mul: 0.32 },
        { suffix: 'BatchQuery', mul: 0.95 }
    ];

    // 主项 peak：根据节点状态强制对齐
    let primaryPeak;
    if (isNodeError) primaryPeak = baseLimit * 1.08;       // 触发限流
    else if (isNodeWarn) primaryPeak = baseLimit * 0.88;   // 预警区间
    else primaryPeak = baseLimit * 0.5;                    // 正常

    let list = [];
    if (isKeyMode) {
        // 自定义 Key 限流：name 形如「场景 · VDC · key」
        const sceneCands = ['下单场景', '支付场景', '风控场景', '搜索场景', '推荐场景'];
        const vdcCands = ['VDC-SG', 'VDC-US', 'VDC-CN', 'VDC-MY'];
        const keyCands2 = [
            { key: 'user_id',    mul: null }, // primary
            { key: 'device_id',  mul: 0.78 },
            { key: 'app_id',     mul: 0.42 },
            { key: 'tenant_id',  mul: 0.92 },
            { key: 'shop_id',    mul: 0.65 },
            { key: 'order_id',   mul: 0.36 },
            { key: 'session_id', mul: 0.55 }
        ];
        const callerSvc = node.upstream || 'toutiao.upstream';
        const calleeSvc = node.psm;
        keyCands2.forEach((c, i) => {
            const scene = sceneCands[i % sceneCands.length];
            const vdc = vdcCands[i % vdcCands.length];
            const name = `${scene} · ${vdc} · ${c.key}`;
            const peak = c.mul == null ? primaryPeak : baseLimit * c.mul;
            list.push({
                name, limit: baseLimit, peak,
                meta: { scene, callerSvc, calleeSvc, customKey: c.key }
            });
        });
    } else {
        // 接口限流：name 形如「上游PSM › 上游集群 › 服务PSM › 服务集群 › 服务接口」
        const upPsm = node.upstream || 'toutiao.upstream';
        const upClusters = ['default', 'cluster-up', 'gray'];
        const svcClusters = ['default', 'cluster-c', 'cluster-01'];
        const primaryName = node.invokeMethod || (node.psm + '/default');
        const buildPath = (upC, svcC, m) => `${upPsm} › ${upC} › ${node.psm} › ${svcC} › ${m}`;
        list.push({
            name: buildPath(upClusters[0], svcClusters[0], primaryName),
            limit: baseLimit,
            peak: primaryPeak,
            meta: { callerSvc: upPsm, callerCluster: upClusters[0], calleeSvc: node.psm, calleeCluster: svcClusters[0], calleeIface: primaryName }
        });
        const svc = node.psm.split('.').slice(-1)[0] || 'svc';
        ifaceCandidates.forEach((c, i) => {
            const m = svc + '.' + c.suffix;
            const upC = upClusters[i % upClusters.length];
            const svcC = svcClusters[i % svcClusters.length];
            list.push({
                name: buildPath(upC, svcC, m),
                limit: baseLimit,
                peak: baseLimit * c.mul,
                meta: { callerSvc: upPsm, callerCluster: upC, calleeSvc: node.psm, calleeCluster: svcC, calleeIface: m }
            });
        });
    }
    // 计算状态与 proximity（peak/limit）
    return list.map(it => {
        const ratio = it.limit > 0 ? it.peak / it.limit : 0;
        let status = 'safe';
        if (ratio >= 1) status = 'limit';
        else if (ratio >= 0.8) status = 'warn';
        return { ...it, ratio, status };
    }).sort((a, b) => b.ratio - a.ratio);
}

// 时间范围（"近 5mins" / "近 1h" 等）→ 总毫秒数 + 轴标签格式
function loTrRangeMeta(tr) {
    const map = {
        '近 5mins':  { ms: 5  * 60 * 1000,        fmt: 'hm' },
        '近 15mins': { ms: 15 * 60 * 1000,        fmt: 'hm' },
        '近 30mins': { ms: 30 * 60 * 1000,        fmt: 'hm' },
        '近 1h':     { ms: 60 * 60 * 1000,        fmt: 'hm' },
        '近 3h':     { ms: 3  * 60 * 60 * 1000,   fmt: 'hm' },
        '近 6h':     { ms: 6  * 60 * 60 * 1000,   fmt: 'hm' },
        '近 12h':    { ms: 12 * 60 * 60 * 1000,   fmt: 'hm' },
        '近 24h':    { ms: 24 * 60 * 60 * 1000,   fmt: 'mdhm' },
        '近 3 天':   { ms: 3  * 24 * 60 * 60 * 1000, fmt: 'mdh' },
        '近 7 天':   { ms: 7  * 24 * 60 * 60 * 1000, fmt: 'md' }
    };
    return map[tr] || map['近 30mins'];
}
function loFmtTickLabel(t, fmt) {
    const pad = (n) => String(n).padStart(2, '0');
    const mm = pad(t.getMonth() + 1);
    const dd = pad(t.getDate());
    const hh = pad(t.getHours());
    const mi = pad(t.getMinutes());
    if (fmt === 'md')   return `${mm}-${dd}`;
    if (fmt === 'mdh')  return `${mm}-${dd} ${hh}:00`;
    if (fmt === 'mdhm') return `${mm}-${dd} ${hh}:${mi}`;
    return `${hh}:${mi}`;
}

// 生成单个接口的折线点位
// - status='limit'：曲线整体高位运行，至少有 1/3 区段 ≥ 限流值，反映「限流状态」
// - status='warn' ：曲线主要落在「预警水位 ~ 限流值」之间，反映「预警状态」
// - status='safe' ：曲线在水位之下平稳波动
function buildLoIfacePoints(iface, padL, padT, innerW, innerH, yMax, _isError) {
    const N = 28;
    const pts = [];
    const now = Date.now();
    const startTs = now - 6 * 5 * 60 * 1000;
    const endTs = now;
    const limit = iface.limit;
    const water = limit * 0.8;
    // 用名字哈希生成不同相位
    let h = 0;
    for (let i = 0; i < iface.name.length; i++) h = (h * 31 + iface.name.charCodeAt(i)) | 0;
    const phase = (h % 100) / 100 * Math.PI * 2;

    for (let i = 0; i < N; i++) {
        const ratio = i / (N - 1);
        let v;
        if (iface.status === 'limit') {
            // 高位运行 + 中段触顶（保证 hover 到中段会触发限流卡片）
            // 基线：限流值 * 0.95 上下 ±3% 起伏
            const baseHigh = limit * 0.95 + Math.sin(ratio * Math.PI * 2 + phase) * limit * 0.03;
            // 触顶段：i 在 [N*0.3, N*0.7] 之间，强行 ≥ 限流值
            const inHotZone = (i >= N * 0.3 && i <= N * 0.7);
            v = inHotZone
                ? Math.max(limit * (1.05 + 0.08 * Math.sin((i - N * 0.3) * 0.55 + phase)), limit * 1.02)
                : baseHigh;
        } else if (iface.status === 'warn') {
            // 主要在水位以上、限流值以下，中段进入预警区
            const base = water * 1.02 + Math.sin(ratio * Math.PI * 2 + phase) * water * 0.05;
            const inHotZone = (i >= N * 0.35 && i <= N * 0.7);
            v = inHotZone
                ? water + (limit - water) * (0.4 + 0.5 * Math.abs(Math.sin((i - N * 0.35) * 0.7 + phase)))
                : base;
            // 钳制在 [water*0.95, limit*0.99]
            if (v >= limit) v = limit * 0.985;
            if (v < water * 0.92) v = water * 0.95;
        } else {
            // 正常：在水位以下波动
            const peak = Math.min(iface.peak, water * 0.9);
            v = peak * 0.7 + Math.sin(ratio * Math.PI * 2 + phase) * peak * 0.18 + Math.cos(ratio * Math.PI * 3 + phase) * peak * 0.08;
            if (v < 0) v = 0;
            if (v >= water) v = water * 0.95;
        }
        const x = padL + (i / (N - 1)) * innerW;
        const y = padT + innerH - (v / yMax) * innerH;
        const ts = startTs + ratio * (endTs - startTs);
        const t = new Date(ts);
        const fmt = (n) => String(n).padStart(2, '0');
        const timeLabel = `${t.getFullYear()}-${fmt(t.getMonth() + 1)}-${fmt(t.getDate())} ${fmt(t.getHours())}:${fmt(t.getMinutes())}:${fmt(t.getSeconds())}`;
        pts.push({ x, y, v, time: timeLabel, ts });
    }
    return pts;
}

// 接口曲线调色板（最多 5 条）
const LO_LINE_COLORS = ['#1890ff', '#13a8a8', '#722ed1', '#fa8c16', '#eb2f96'];

// 接口状态徽标
function buildLoStatusBadge(status) {
    const map = {
        safe:     { text: '正常', bg: '#f6ffed', color: '#389e0d', border: '#b7eb8f' },
        warn:     { text: '预警', bg: '#fff7e6', color: '#d46b08', border: '#ffd591' },
        limit:    { text: '限流', bg: '#fff1f0', color: '#cf1322', border: '#ffa39e' },
        abnormal: { text: '异常', bg: '#f9f0ff', color: '#531dab', border: '#d3adf7' }
    };
    const c = map[status] || map.safe;
    return `<span class="lo-iface-badge" style="background:${c.bg};color:${c.color};border-color:${c.border}">${c.text}</span>`;
}

// 构建 QPS 趋势图（支持多接口对比 + 顶部下拉选择 + 底部图名图例）
// 方案 A：Tab 切类型 + 联想搜索下拉
// - 服务级别：同时展示「接口限流 / 自定义 Key 限流」Tab，可切换查看
// - 接口级别：仅「接口限流」Tab，自定义 Key Tab 置灰且不可点击
function buildLoNodeQpsTabbed(node, isInterfaceLevel) {
    // 不再按 Tab 区分接口限流 / 自定义 Key 限流，统一在一个下拉选择框中展示。
    // 接口级别：仍只展示接口限流（自定义 Key 限流不适用）。
    // 服务级别：'all' 模式合并两类规则，列表中通过 tag 区分。
    const mergedNode = { ...node, limitMode: isInterfaceLevel ? 'iface' : 'all' };
    const chart = buildLoNodeQpsChart(mergedNode);
    return `<div class="lo-rule-tabbed" data-active-tab="all">
        <div class="lo-rule-pane" data-pane="all">${chart}</div>
    </div>`;
}

function buildLoNodeQpsChart(node) {
    const W = 560, H = 220;
    const padL = 44, padR = 24, padT = 16, padB = 28;
    const innerW = W - padL - padR;
    const innerH = H - padT - padB;

    const isKeyMode = node.limitMode === 'key';
    const isAllMode = node.limitMode === 'all';
    const limitTypeText = isAllMode ? '混合限流' : (isKeyMode ? '自定义 key 限流' : '接口限流');
    const dimText = isAllMode ? '规则' : (isKeyMode ? 'key' : '接口');

    // 接口/key 列表（流量趋势图中不展示「异常」状态）
    const ifaces = getLoNodeInterfaces(node).filter(f => f.status !== 'abnormal');
    // 默认选中最危险的一条（已按 ratio 倒序）
    const defaultSelected = ifaces.length > 0 ? [ifaces[0].name] : [];

    // 7 个 X 轴 tick
    const now = new Date();
    const ticks = [];
    for (let i = 6; i >= 0; i--) {
        const t = new Date(now.getTime() - i * 5 * 60 * 1000);
        const hh = String(t.getHours()).padStart(2, '0');
        const mm = String(t.getMinutes()).padStart(2, '0');
        ticks.push(`${hh}:${mm}`);
    }

    // 限流值与水位（取节点级别 threshold）
    const limit = parseLoThresholdNumber(node.threshold) || 100;
    const water = limit * 0.8;
    // yMax 取选中接口峰值最大，或限流值的 1.4 倍
    const peakMax = Math.max(...ifaces.map(f => f.peak));
    const yMax = Math.max(limit * 1.4, peakMax * 1.05);

    // Y 轴
    let yAxisHtml = '';
    for (let i = 0; i < 5; i++) {
        const ratio = i / 4;
        const yy = padT + innerH - ratio * innerH;
        const val = (yMax * ratio);
        const valLabel = val >= 1000 ? (val / 1000).toFixed(1) + 'k' : val.toFixed(0);
        yAxisHtml += `<line x1="${padL}" y1="${yy}" x2="${padL + innerW}" y2="${yy}" stroke="#f0f0f0" stroke-width="1"/>`;
        yAxisHtml += `<text x="${padL - 6}" y="${yy + 3}" text-anchor="end" font-size="10" fill="#999">${valLabel}</text>`;
    }
    // X 轴
    let xAxisHtml = '';
    ticks.forEach((label, i) => {
        const xx = padL + (i / (ticks.length - 1)) * innerW;
        xAxisHtml += `<text x="${xx}" y="${padT + innerH + 16}" text-anchor="middle" font-size="10" fill="#999">${label}</text>`;
    });

    // 限流值线 / 预警水位线
    const yLimit = padT + innerH - (limit / yMax) * innerH;
    const yWater = padT + innerH - (water / yMax) * innerH;
    const limitLine = `
        <line x1="${padL}" y1="${yLimit}" x2="${padL + innerW}" y2="${yLimit}" stroke="#ff4d4f" stroke-width="1.2" stroke-dasharray="6 4"/>
        <text x="${padL + innerW - 4}" y="${yLimit - 4}" text-anchor="end" font-size="10" fill="#ff4d4f">限流值线 ${limit >= 1000 ? (limit / 1000).toFixed(1) + 'k' : limit}</text>
    `;
    const waterLine = `
        <line x1="${padL}" y1="${yWater}" x2="${padL + innerW}" y2="${yWater}" stroke="#fa8c16" stroke-width="1.2" stroke-dasharray="6 4"/>
        <text x="${padL + innerW - 4}" y="${yWater + 12}" text-anchor="end" font-size="10" fill="#fa8c16">预警水位线 ${water >= 1000 ? (water / 1000).toFixed(1) + 'k' : water.toFixed(0)}</text>
    `;

    // 多曲线：先内置所有接口的点位数据，渲染时按选中过滤
    const allLines = ifaces.map((f, i) => {
        const pts = buildLoIfacePoints(f, padL, padT, innerW, innerH, yMax, node.status === 'error' && f.name === node.invokeMethod);
        return {
            name: f.name,
            status: f.status,
            limit: f.limit,
            peak: f.peak,
            kind: f.kind || (isKeyMode ? 'key' : 'iface'),
            color: LO_LINE_COLORS[i % LO_LINE_COLORS.length],
            meta: f.meta || {},
            pts
        };
    });

    // ============================================================
    // 构造事件 mock 列表（events）
    // 规则：
    //   - 曲线越过限流值线的接口：构造一条 limit 事件（含工单 ID），
    //     触发时间取首次越线点；流量值取该点瞬时 QPS。
    //   - 曲线越过预警水位线（未越限流值线）的接口：构造一条 warning
    //     事件；触发时间取首次进入预警区的时间。
    //   - 同时构造一个"曲线越线但 ±2 分钟内无事件"的演示场景：
    //     在最末一条接口上，强制制造一段越线但故意不发事件（通过
    //     skipEventForLastIface 标记跳过事件生成）。
    // ============================================================
    const events = [];
    const lastIdx = allLines.length - 1;
    const lineLimitTypeOf = (line) => line.kind === 'key' ? '自定义 key 限流' : '接口限流';
    allLines.forEach((line, idx) => {
        // 演示「无匹配事件」场景：跳过最末一条 warn/limit 接口的事件生成
        const skipEvent = (idx === lastIdx && (line.status === 'warn' || line.status === 'limit'));
        if (skipEvent) return;

        if (line.status === 'limit') {
            // 取所有越线点：首点为事件触发时间、峰值点为流量值快照；
            // 每个越线点位都作为「匹配锚点」(_matchTs) 保留，
            // 以保证用户 hover 越线段任意位置都能命中 ±2min 窗口。
            const violators = line.pts.filter(p => p.v >= line.limit);
            if (violators.length > 0) {
                const peakPt = violators.reduce((a, b) => a.v >= b.v ? a : b);
                const startPt = violators[0];
                const ticketId = 'INC-' + new Date(startPt.ts).toISOString().slice(0, 10).replace(/-/g, '') + '-' + (100 + Math.floor(Math.random() * 900));
                const dur = 180 + Math.floor(Math.random() * 600); // 3-13min
                violators.forEach((p) => {
                    events.push({
                        eventType: 'limit',
                        apiName: line.name,
                        limitType: lineLimitTypeOf(line),
                        limitValue: line.limit,
                        waterLevel: 0.8,
                        trafficValue: peakPt.v,        // 快照：峰值流量
                        triggerTime: startPt.ts,       // 快照：首次越线时间
                        duration: dur,
                        ticketId: ticketId,
                        meta: line.meta || {},
                        _matchTs: p.ts                 // 仅用于 ±2min 匹配
                    });
                });
            }
        } else if (line.status === 'warn') {
            const water = line.limit * 0.8;
            const violators = line.pts.filter(p => p.v >= water && p.v < line.limit);
            if (violators.length > 0) {
                const startPt = violators[0];
                const peakPt = violators.reduce((a, b) => a.v >= b.v ? a : b);
                const dur = 60 + Math.floor(Math.random() * 240); // 1-5min
                violators.forEach((p) => {
                    events.push({
                        eventType: 'warning',
                        apiName: line.name,
                        limitType: lineLimitTypeOf(line),
                        limitValue: line.limit,
                        waterLevel: 0.8,
                        trafficValue: peakPt.v,        // 快照：预警期内峰值流量
                        triggerTime: startPt.ts,       // 快照：首次进入预警区时间
                        duration: dur,
                        meta: line.meta || {},
                        _matchTs: p.ts                 // 仅用于 ±2min 匹配
                    });
                });
            }
        }
    });

    // 整个图表区域捕获鼠标位置，依据 X 位置展示选中接口的对比 tooltip
    const hitOverlay = `<rect class="lo-qps-hit" x="${padL}" y="${padT}" width="${innerW}" height="${innerH}" fill="transparent" style="cursor:crosshair" onmousemove="handleLoQpsMove(event)" onmouseleave="hideLoQpsTip()" onclick="toggleLoQpsTipPinned(event)"/>`;

    // 序列化以便客户端渲染
    const linesAttr = encodeURIComponent(JSON.stringify(allLines));
    const ifacesAttr = encodeURIComponent(JSON.stringify(ifaces));
    const selectedAttr = encodeURIComponent(JSON.stringify(defaultSelected));
    const eventsAttr = encodeURIComponent(JSON.stringify(events));

    // 顶部可搜索单选下拉
    const searchPlaceholder = isAllMode
        ? '限流规则：接口限流 / 自定义 Key 限流'
        : (isKeyMode
            ? '自定义 key 限流规则：限流场景/VDC/自定义 key'
            : '接口限流规则：上游 psm/上游集群/服务 psm/服务集群/服务接口');
    // 状态快筛 chip 计数
    const statCount = ifaces.reduce((acc, f) => { acc[f.status] = (acc[f.status] || 0) + 1; return acc; }, {});

    // 时间范围筛选：根据用户在工作台配置的基础时间范围，下拉支持的子选项不同
    const trVal = (() => {
        const el = document.getElementById('loTimeRange');
        return el ? (el.value || '').trim() : '';
    })();
    const allTrOptions = [
        { val: '近 5mins',  rank: 1 },
        { val: '近 15mins', rank: 2 },
        { val: '近 30mins', rank: 3 },
        { val: '近 1h',    rank: 4 },
        { val: '近 3h',    rank: 5 },
        { val: '近 6h',    rank: 6 },
        { val: '近 12h',   rank: 7 },
        { val: '近 24h',   rank: 8 },
        { val: '近 3 天',  rank: 9 },
        { val: '近 7 天',  rank: 10 }
    ];
    // 基础范围 → 允许的最大档位
    const baseRankMap = {
        '近 1h': 4, '近 3h': 5, '近 6h': 6, '近 12h': 7, '近 24h': 8, '近 3 天': 9, '近 7 天': 10
    };
    const maxRank = baseRankMap[trVal] || 10;
    const trOptions = allTrOptions.filter(o => o.rank <= maxRank);
    const defaultTr = trOptions.length ? trOptions[trOptions.length - 1].val : '近 1h';
    const trDropdownHtml = `
        <div class="lo-qps-tr-select" data-open="0">
            <div class="lo-qps-tr-trigger" tabindex="0">
                <span class="lo-qps-tr-value">${defaultTr}</span>
                <span class="lo-qps-tr-arrow">▾</span>
            </div>
            <div class="lo-qps-tr-panel hidden">
                ${trOptions.map(o => `<div class="lo-qps-tr-item${o.val === defaultTr ? ' active' : ''}" data-val="${o.val}">${o.val}</div>`).join('')}
            </div>
        </div>
    `;

    const dropdownHtml = `
        <div class="lo-iface-select" data-open="0" data-status-filter="all">
            <div class="lo-iface-select-trigger" tabindex="0">
                <span class="lo-iface-select-tags"></span>
                <span class="lo-iface-select-arrow">▾</span>
            </div>
            <div class="lo-iface-select-panel hidden">
                <div class="lo-iface-select-search">
                    <input type="text" class="lo-iface-select-input" placeholder="${searchPlaceholder}" />
                </div>
                <div class="lo-iface-select-chips">
                    <span class="lo-iface-chip active" data-chip="all">全部 (${ifaces.length})</span>
                    <span class="lo-iface-chip" data-chip="limit">限流 (${statCount.limit || 0})</span>
                    <span class="lo-iface-chip" data-chip="warn">预警 (${statCount.warn || 0})</span>
                    <span class="lo-iface-chip" data-chip="safe">正常 (${statCount.safe || 0})</span>
                </div>
                <div class="lo-iface-select-list"></div>
            </div>
        </div>
    `;

    // 容器（svg 内容由 renderLoQpsLines 渲染）
    return `
        <div class="lo-qps-chart-wrap"
             data-lines="${linesAttr}"
             data-ifaces="${ifacesAttr}"
             data-selected="${selectedAttr}"
             data-events="${eventsAttr}"
             data-limit-val="${limit}"
             data-water-val="${water}"
             data-pad-l="${padL}"
             data-pad-t="${padT}"
             data-inner-w="${innerW}"
             data-inner-h="${innerH}"
             data-y-max="${yMax}"
             data-limit-mode="${isAllMode ? 'all' : (isKeyMode ? 'key' : 'iface')}"
             data-limit-type="${limitTypeText}"
             data-dim="${dimText}"
             data-y-axis="${encodeURIComponent(yAxisHtml)}"
             data-x-axis="${encodeURIComponent(xAxisHtml)}"
             data-limit-line="${encodeURIComponent(limitLine)}"
             data-water-line="${encodeURIComponent(waterLine)}"
             data-hit="${encodeURIComponent(hitOverlay)}"
             data-w="${W}" data-h="${H}"
             data-active-tr="${defaultTr}"
             onmouseleave="hideLoQpsTip()">
            <div class="lo-qps-chart-header">
                ${dropdownHtml}
                ${trDropdownHtml}
            </div>
            <div class="lo-qps-chart-svg"></div>
            <div class="lo-qps-chart-caption"></div>
            <div class="lo-qps-tip hidden" id="loQpsTip"></div>
        </div>
    `;
}

// 渲染图表内容（SVG + 底部 caption + dropdown 标签）
function renderLoQpsChartContent(wrap) {
    if (!wrap) return;
    let lines = [], ifaces = [], selected = [];
    try { lines = JSON.parse(decodeURIComponent(wrap.getAttribute('data-lines'))); } catch (e) { return; }
    try { ifaces = JSON.parse(decodeURIComponent(wrap.getAttribute('data-ifaces'))); } catch (e) { return; }
    try { selected = JSON.parse(decodeURIComponent(wrap.getAttribute('data-selected'))); } catch (e) { selected = []; }
    const W = parseInt(wrap.getAttribute('data-w')) || 560;
    const H = parseInt(wrap.getAttribute('data-h')) || 220;
    const yAxisHtml = decodeURIComponent(wrap.getAttribute('data-y-axis') || '');
    let xAxisHtml = decodeURIComponent(wrap.getAttribute('data-x-axis') || '');
    const limitLine = decodeURIComponent(wrap.getAttribute('data-limit-line') || '');
    const waterLine = decodeURIComponent(wrap.getAttribute('data-water-line') || '');
    const hitOverlay = decodeURIComponent(wrap.getAttribute('data-hit') || '');

    // 时间范围切换：根据当前 active-tr 重新生成 X 轴 label，并刷新每个 pt.time/pt.ts
    const activeTr = wrap.getAttribute('data-active-tr') || '';
    if (activeTr) {
        const padL = parseFloat(wrap.getAttribute('data-pad-l')) || 0;
        const padT = parseFloat(wrap.getAttribute('data-pad-t')) || 0;
        const innerW = parseFloat(wrap.getAttribute('data-inner-w')) || 0;
        const innerH = parseFloat(wrap.getAttribute('data-inner-h')) || 0;
        const meta = loTrRangeMeta(activeTr);
        const endTs = Date.now();
        const startTs = endTs - meta.ms;
        // 重新生成 7 个 X 轴 tick
        const TICK_N = 7;
        let newXAxis = '';
        for (let i = 0; i < TICK_N; i++) {
            const r = i / (TICK_N - 1);
            const ts = startTs + r * (endTs - startTs);
            const xx = padL + r * innerW;
            const label = loFmtTickLabel(new Date(ts), meta.fmt);
            newXAxis += `<text x="${xx}" y="${padT + innerH + 16}" text-anchor="middle" font-size="10" fill="#999">${label}</text>`;
        }
        xAxisHtml = newXAxis;
        // 重新计算每条线的点位时间戳（保留 v/y/x，仅刷新 ts/time）
        const fmt2 = (n) => String(n).padStart(2, '0');
        lines.forEach(l => {
            if (!Array.isArray(l.pts) || l.pts.length === 0) return;
            const N = l.pts.length;
            l.pts.forEach((p, i) => {
                const r = N === 1 ? 0 : (i / (N - 1));
                const ts = startTs + r * (endTs - startTs);
                const t = new Date(ts);
                p.ts = ts;
                p.time = `${t.getFullYear()}-${fmt2(t.getMonth() + 1)}-${fmt2(t.getDate())} ${fmt2(t.getHours())}:${fmt2(t.getMinutes())}:${fmt2(t.getSeconds())}`;
            });
        });
        // 写回 lines（供 hover tooltip 使用最新时间）
        wrap.setAttribute('data-lines', encodeURIComponent(JSON.stringify(lines)));
    }

    const selLines = lines.filter(l => selected.includes(l.name));
    const polylines = selLines.map(l => {
        const pts = l.pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
        return `<polyline points="${pts}" fill="none" stroke="${l.color}" stroke-width="1.6"/>`;
    }).join('');

    const svgHtml = `
<svg class="lo-qps-chart" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${yAxisHtml}
    ${xAxisHtml}
    ${polylines}
    ${waterLine}
    ${limitLine}
    ${hitOverlay}
</svg>
    `;
    const svgWrap = wrap.querySelector('.lo-qps-chart-svg');
    if (svgWrap) svgWrap.innerHTML = svgHtml;

    const dim = wrap.getAttribute('data-dim') || '接口';

    // 底部图名（caption）：根据选中接口动态调整
    const caption = wrap.querySelector('.lo-qps-chart-caption');
    if (caption) {
        if (selLines.length === 0) {
            caption.innerHTML = `<span class="lo-qps-caption-empty">请选择要查看的${dim}</span>`;
        } else {
            const items = selLines.map(l => `
                <span class="lo-qps-caption-item">
                    <span class="lo-qps-caption-dash" style="background:${l.color}"></span>
                    <span class="lo-qps-caption-name">${l.name}</span>
                    ${buildLoStatusBadge(l.status)}
                </span>
            `).join('');
            caption.innerHTML = `
                <span class="lo-qps-caption-prefix">${dim}流量趋势：</span>
                ${items}
            `;
        }
    }

    // 渲染下拉触发器内的 tag（单选）：完整展示规则名 + hover 全称
    const tags = wrap.querySelector('.lo-iface-select-tags');
    if (tags) {
        if (selected.length === 0) {
            tags.innerHTML = `<span class="lo-iface-select-placeholder">选择${dim}</span>`;
        } else {
            tags.innerHTML = selected.map(name => {
                const f = ifaces.find(x => x.name === name);
                const status = f ? f.status : 'safe';
                const kind = f ? (f.kind || 'iface') : 'iface';
                return `
                    <span class="lo-iface-tag lo-iface-tag-single" data-fullname="${name}">
                        ${buildLoKindTag(kind)}
                        <span class="lo-iface-tag-name">${name}</span>
                        ${buildLoStatusBadge(status)}
                    </span>
                `;
            }).join('');
        }
    }

    // 渲染下拉列表
    renderLoIfaceSelectList(wrap, '');
}

// 提取规则的精简显示文本：
// - 接口限流：只展示「服务PSM/服务接口」
// - 自定义 Key 限流：只展示「场景 · key」
function compactRuleName(name, isKeyMode) {
    if (!name) return '';
    if (isKeyMode) {
        const segs = name.split('·').map(s => s.trim());
        // 场景 · VDC · key → 场景 · key
        if (segs.length >= 3) return `${segs[0]} · ${segs[2]}`;
        return name;
    }
    // 上游PSM › 上游集群 › 服务PSM › 服务集群 › 服务接口
    const segs = name.split('›').map(s => s.trim());
    if (segs.length >= 5) return `${segs[2]} / ${segs[4]}`;
    return name;
}

// 限流规则类型标签：接口限流 / 自定义 Key 限流
function buildLoKindTag(kind) {
    if (kind === 'key') {
        return `<span class="lo-iface-kind lo-iface-kind-key">自定义Key 限流</span>`;
    }
    return `<span class="lo-iface-kind lo-iface-kind-iface">接口限流</span>`;
}

function renderLoIfaceSelectList(wrap, keyword) {
    const listEl = wrap.querySelector('.lo-iface-select-list');
    if (!listEl) return;
    let ifaces = [], selected = [];
    try { ifaces = JSON.parse(decodeURIComponent(wrap.getAttribute('data-ifaces'))); } catch (e) { return; }
    try { selected = JSON.parse(decodeURIComponent(wrap.getAttribute('data-selected'))); } catch (e) { selected = []; }
    const kw = (keyword || '').trim().toLowerCase();
    // fuzzy: 子序列匹配
    const fuzzy = (text, q) => {
        if (!q) return true;
        text = text.toLowerCase();
        let i = 0;
        for (const c of q) {
            const idx = text.indexOf(c, i);
            if (idx < 0) return false;
            i = idx + 1;
        }
        return true;
    };
    const dim = wrap.getAttribute('data-dim') || '接口';
    const selEl = wrap.querySelector('.lo-iface-select');
    const statusFilter = (selEl && selEl.getAttribute('data-status-filter')) || 'all';

    // 状态分组排序：limit > warn > safe；同状态内按 ratio 降序（getLoNodeInterfaces 已排序）
    const order = { limit: 0, warn: 1, safe: 2 };
    const sorted = [...ifaces].sort((a, b) => (order[a.status] - order[b.status]) || (b.ratio - a.ratio));

    let matched = sorted.filter(f => fuzzy(f.name, kw));
    if (statusFilter !== 'all') matched = matched.filter(f => f.status === statusFilter);

    if (matched.length === 0) {
        listEl.innerHTML = `<div class="lo-iface-select-empty">无匹配${dim}</div>`;
        return;
    }
    // 高亮关键词
    const highlight = (text) => {
        if (!kw) return text;
        const idx = text.toLowerCase().indexOf(kw);
        if (idx < 0) return text;
        return text.slice(0, idx) + `<mark class="lo-iface-hl">${text.slice(idx, idx + kw.length)}</mark>` + text.slice(idx + kw.length);
    };

    listEl.innerHTML = matched.map(f => {
        const checked = selected.includes(f.name);
        return `
            <div class="lo-iface-select-item${checked ? ' checked' : ''}" data-name="${encodeURIComponent(f.name)}" data-fullname="${f.name}">
                <span class="lo-iface-select-check">${checked ? '✓' : ''}</span>
                ${buildLoKindTag(f.kind || 'iface')}
                <span class="lo-iface-select-name">${highlight(f.name)}</span>
                ${buildLoStatusBadge(f.status)}
            </div>
        `;
    }).join('');
}

// 全局事件代理（节点抽屉打开时由 openLoNodeDrawer 调用一次绑定）
function bindLoQpsChartEvents(rootEl) {
    if (!rootEl || rootEl._loQpsBound) return;
    rootEl.addEventListener('click', (e) => {
        // Tab 切换（接口限流 / 自定义 Key 限流）
        const tab = e.target.closest && e.target.closest('.lo-rule-tab');
        if (tab && !tab.classList.contains('disabled')) {
            const tabbed = tab.closest('.lo-rule-tabbed');
            if (tabbed) {
                const k = tab.getAttribute('data-rule-tab');
                tabbed.setAttribute('data-active-tab', k);
                tabbed.querySelectorAll('.lo-rule-tab').forEach(t => t.classList.toggle('active', t === tab));
                tabbed.querySelectorAll('.lo-rule-pane').forEach(p => {
                    p.classList.toggle('hidden', p.getAttribute('data-pane') !== k);
                });
                return;
            }
        }
        const wrap = e.target.closest && e.target.closest('.lo-qps-chart-wrap');
        if (!wrap) return;
        // 时间范围下拉触发器
        const trTrigger = e.target.closest('.lo-qps-tr-trigger');
        if (trTrigger) {
            e.stopPropagation();
            const trSel = wrap.querySelector('.lo-qps-tr-select');
            const trPanel = wrap.querySelector('.lo-qps-tr-panel');
            if (trPanel) {
                const willOpen = trPanel.classList.contains('hidden');
                trPanel.classList.toggle('hidden');
                if (trSel) trSel.setAttribute('data-open', willOpen ? '1' : '0');
            }
            return;
        }
        // 时间范围下拉项
        const trItem = e.target.closest('.lo-qps-tr-item');
        if (trItem) {
            e.stopPropagation();
            const v = trItem.getAttribute('data-val');
            const valEl = wrap.querySelector('.lo-qps-tr-value');
            if (valEl) valEl.textContent = v;
            wrap.querySelectorAll('.lo-qps-tr-item').forEach(it => it.classList.toggle('active', it === trItem));
            const trPanel = wrap.querySelector('.lo-qps-tr-panel');
            const trSel = wrap.querySelector('.lo-qps-tr-select');
            if (trPanel) trPanel.classList.add('hidden');
            if (trSel) trSel.setAttribute('data-open', '0');
            wrap.setAttribute('data-active-tr', v);
            // 重新渲染（点位会按当前时间范围重映射 X 轴 label）
            renderLoQpsChartContent(wrap);
            return;
        }
        // 状态快筛 chip
        const chip = e.target.closest('.lo-iface-chip');
        if (chip) {
            e.stopPropagation();
            const v = chip.getAttribute('data-chip');
            const sel = wrap.querySelector('.lo-iface-select');
            if (sel) sel.setAttribute('data-status-filter', v);
            wrap.querySelectorAll('.lo-iface-chip').forEach(c => c.classList.toggle('active', c === chip));
            const inputEl = wrap.querySelector('.lo-iface-select-input');
            renderLoIfaceSelectList(wrap, inputEl ? inputEl.value : '');
            return;
        }
        // 点击触发器：开关下拉
        const trigger = e.target.closest('.lo-iface-select-trigger');
        const closeTag = e.target.closest('.lo-iface-tag-close');
        if (closeTag) {
            e.stopPropagation();
            const name = decodeURIComponent(closeTag.getAttribute('data-name') || '');
            let selected = [];
            try { selected = JSON.parse(decodeURIComponent(wrap.getAttribute('data-selected'))); } catch (err) {}
            selected = selected.filter(n => n !== name);
            wrap.setAttribute('data-selected', encodeURIComponent(JSON.stringify(selected)));
            renderLoQpsChartContent(wrap);
            return;
        }
        if (trigger) {
            e.stopPropagation();
            const panel = wrap.querySelector('.lo-iface-select-panel');
            const sel = wrap.querySelector('.lo-iface-select');
            if (panel) {
                const willOpen = panel.classList.contains('hidden');
                panel.classList.toggle('hidden');
                if (sel) sel.setAttribute('data-open', willOpen ? '1' : '0');
                if (willOpen) {
                    const input = wrap.querySelector('.lo-iface-select-input');
                    if (input) setTimeout(() => input.focus(), 0);
                }
            }
            return;
        }
        // 点击列表项：单选切换
        const item = e.target.closest('.lo-iface-select-item');
        if (item) {
            const name = decodeURIComponent(item.getAttribute('data-name') || '');
            wrap.setAttribute('data-selected', encodeURIComponent(JSON.stringify([name])));
            renderLoQpsChartContent(wrap);
            // 选中后自动关闭面板
            const panel = wrap.querySelector('.lo-iface-select-panel');
            const sel = wrap.querySelector('.lo-iface-select');
            if (panel) panel.classList.add('hidden');
            if (sel) sel.setAttribute('data-open', '0');
            return;
        }
    });
    rootEl.addEventListener('input', (e) => {
        if (e.target && e.target.classList && e.target.classList.contains('lo-iface-select-input')) {
            const wrap = e.target.closest('.lo-qps-chart-wrap');
            if (wrap) renderLoIfaceSelectList(wrap, e.target.value);
        }
    });
    // 键盘导航：触发器 ↓ 打开；面板 ↑↓ 切换 / Enter 选中 / Esc 关闭
    rootEl.addEventListener('keydown', (e) => {
        const wrap = e.target.closest && e.target.closest('.lo-qps-chart-wrap');
        if (!wrap) return;
        const trigger = e.target.closest && e.target.closest('.lo-iface-select-trigger');
        const input = e.target.closest && e.target.closest('.lo-iface-select-input');
        if (trigger && (e.key === 'ArrowDown' || e.key === 'Enter')) {
            e.preventDefault();
            const panel = wrap.querySelector('.lo-iface-select-panel');
            const sel = wrap.querySelector('.lo-iface-select');
            if (panel && panel.classList.contains('hidden')) {
                panel.classList.remove('hidden');
                if (sel) sel.setAttribute('data-open', '1');
                setTimeout(() => { const inp = wrap.querySelector('.lo-iface-select-input'); inp && inp.focus(); }, 0);
            }
            return;
        }
        if (input) {
            const items = Array.from(wrap.querySelectorAll('.lo-iface-select-item'));
            if (items.length === 0) return;
            let idx = items.findIndex(it => it.classList.contains('hover'));
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                idx = (idx + 1) % items.length;
                items.forEach(it => it.classList.remove('hover'));
                items[idx].classList.add('hover');
                items[idx].scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                idx = (idx <= 0 ? items.length : idx) - 1;
                items.forEach(it => it.classList.remove('hover'));
                items[idx].classList.add('hover');
                items[idx].scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const target = items[idx >= 0 ? idx : 0];
                if (target) target.click();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                const panel = wrap.querySelector('.lo-iface-select-panel');
                const sel = wrap.querySelector('.lo-iface-select');
                if (panel) panel.classList.add('hidden');
                if (sel) sel.setAttribute('data-open', '0');
            }
        }
    });
    // hover 显示规则全称（在元素上方浮窗）
    rootEl.addEventListener('mouseover', (e) => {
        const tgt = e.target.closest && e.target.closest('[data-fullname]');
        if (tgt) showLoRuleFullnameTip(tgt);
    });
    rootEl.addEventListener('mouseout', (e) => {
        const tgt = e.target.closest && e.target.closest('[data-fullname]');
        if (tgt) hideLoRuleFullnameTip();
    });
    // 点击外部关闭下拉
    document.addEventListener('click', (e) => {
        const inside = e.target.closest && e.target.closest('.lo-iface-select');
        if (!inside) {
            rootEl.querySelectorAll('.lo-iface-select-panel').forEach(p => p.classList.add('hidden'));
            rootEl.querySelectorAll('.lo-iface-select').forEach(s => s.setAttribute('data-open', '0'));
        }
        const insideTr = e.target.closest && e.target.closest('.lo-qps-tr-select');
        if (!insideTr) {
            rootEl.querySelectorAll('.lo-qps-tr-panel').forEach(p => p.classList.add('hidden'));
            rootEl.querySelectorAll('.lo-qps-tr-select').forEach(s => s.setAttribute('data-open', '0'));
        }
    });
    rootEl._loQpsBound = true;
}

function showLoRuleFullnameTip(tgt) {
    const text = tgt.getAttribute('data-fullname');
    if (!text) return;
    let tip = document.getElementById('loRuleFullnameTip');
    if (!tip) {
        tip = document.createElement('div');
        tip.id = 'loRuleFullnameTip';
        tip.className = 'lo-rule-fullname-tip';
        document.body.appendChild(tip);
    }
    tip.textContent = text;
    tip.style.visibility = 'hidden';
    tip.style.display = 'block';
    const r = tgt.getBoundingClientRect();
    const tr = tip.getBoundingClientRect();
    let left = r.left + r.width / 2 - tr.width / 2;
    let top = r.top - tr.height - 8;
    if (top < 4) top = r.bottom + 8;
    left = Math.max(4, Math.min(window.innerWidth - tr.width - 4, left));
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
    tip.style.visibility = 'visible';
}
function hideLoRuleFullnameTip() {
    const tip = document.getElementById('loRuleFullnameTip');
    if (tip) tip.style.display = 'none';
}

// Lightbox
function openLoImageLightbox(svgHtml) {
    const lb = document.getElementById('loImageLightbox');
    const content = document.getElementById('loImageLightboxContent');
    if (!lb || !content) return;
    content.innerHTML = svgHtml;
    // 强制放大版 svg 占满容器
    const innerSvg = content.querySelector('svg');
    if (innerSvg) {
        innerSvg.removeAttribute('width');
        innerSvg.removeAttribute('height');
        innerSvg.style.width = '100%';
        innerSvg.style.height = 'auto';
    }
    lb.classList.remove('hidden');
}

function closeLoImageLightbox() {
    const lb = document.getElementById('loImageLightbox');
    if (lb) lb.classList.add('hidden');
    const content = document.getElementById('loImageLightboxContent');
    if (content) content.innerHTML = '';
}

// QPS 图：在图表区域内根据鼠标 X/Y 位置展示选中接口的对比 tooltip
// 区域判定基于鼠标 Y 位置（视图坐标），不再基于曲线 v 值。
function handleLoQpsMove(evt) {
    if (!evt) return;
    const target = evt.currentTarget;
    const wrap = target && target.closest ? target.closest('.lo-qps-chart-wrap') : null;
    if (!wrap) return;
    let lines = [], selected = [];
    try { lines = JSON.parse(decodeURIComponent(wrap.getAttribute('data-lines'))); } catch (e) { return; }
    try { selected = JSON.parse(decodeURIComponent(wrap.getAttribute('data-selected'))); } catch (e) { selected = []; }
    const selLines = lines.filter(l => selected.includes(l.name));
    if (selLines.length === 0) { hideLoQpsTip(); return; }
    const padL = parseFloat(wrap.getAttribute('data-pad-l')) || 0;
    const padT = parseFloat(wrap.getAttribute('data-pad-t')) || 0;
    const innerW = parseFloat(wrap.getAttribute('data-inner-w')) || 0;
    const innerH = parseFloat(wrap.getAttribute('data-inner-h')) || 0;
    const yMax = parseFloat(wrap.getAttribute('data-y-max')) || 1;
    const limitVal = parseFloat(wrap.getAttribute('data-limit-val')) || 0;
    const waterVal = parseFloat(wrap.getAttribute('data-water-val')) || 0;
    const svg = wrap.querySelector('svg.lo-qps-chart');
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const vbWidth = svg.viewBox && svg.viewBox.baseVal ? svg.viewBox.baseVal.width : rect.width;
    const vbHeight = svg.viewBox && svg.viewBox.baseVal ? svg.viewBox.baseVal.height : rect.height;
    const xView = (evt.clientX - rect.left) * (vbWidth / rect.width);
    const yView = (evt.clientY - rect.top) * (vbHeight / rect.height);
    const N = selLines[0].pts.length;
    const ratioX = Math.min(1, Math.max(0, (xView - padL) / innerW));
    const idx = Math.round(ratioX * (N - 1));
    // 视图 Y → 数值 Y（QPS）
    const ySvgRatio = Math.min(1, Math.max(0, (yView - padT) / innerH));
    const yQps = (1 - ySvgRatio) * yMax;
    // 区域判定：基于鼠标 Y 数值
    let region = 'normal';
    if (yQps >= limitVal) region = 'limit';
    else if (yQps >= waterVal) region = 'warn';
    showLoQpsTip(evt, selLines, idx, limitVal, waterVal, region);
}

// QPS 图 hover tooltip
// ============================================================
// 区域判定与卡片渲染规则：
//   A. 鼠标 Y 处于「限流值线之上」：从 events 中筛选 limit 类型、
//      与鼠标 X 时间 ±2 分钟范围的事件，取最近一条 → 渲染「限流卡片」；
//      若无匹配事件，则不渲染卡片，回退到常规 tooltip（仍展示曲线值）。
//   B. 鼠标 Y 处于「预警水位线 ~ 限流值线」：同上，筛选 warning 类型 →
//      渲染「预警卡片」；无匹配则常规 tooltip。
//   C. 鼠标 Y 处于「预警水位线以下」：常规 tooltip，展示时间 + 当前
//      QPS + 距离预警水位的余量百分比。
// ============================================================
function showLoQpsTip(evt, selLines, idx, limitVal, waterVal, region) {
    if (!evt) return;
    const wrap = evt.currentTarget && evt.currentTarget.closest ? evt.currentTarget.closest('.lo-qps-chart-wrap') : null;
    if (!wrap) return;
    const tip = wrap.querySelector('.lo-qps-tip');
    if (!tip || !Array.isArray(selLines) || selLines.length === 0) return;
    // 已固定的 tip 不被 hover 移动事件刷新
    if (tip.classList.contains('lo-qps-tip-pinned')) return;
    const fmtVal = (v) => v >= 1000 ? (v / 1000).toFixed(2) + 'k' : v.toFixed(0);
    const fmtUnit = (v) => fmtVal(v) + ' req/s';
    const curTs = (selLines[0].pts[idx] && selLines[0].pts[idx].ts) || 0;

    // 解析 events
    let events = [];
    try { events = JSON.parse(decodeURIComponent(wrap.getAttribute('data-events') || '%5B%5D')); } catch (e) {}

    // 兼容：当 region 未传入时用旧逻辑（基于关键线 v 值）
    if (!region) {
        let keyV = 0;
        selLines.forEach(l => { const p = l.pts[idx]; if (p && p.v > keyV) keyV = p.v; });
        if (keyV >= limitVal) region = 'limit';
        else if (keyV >= waterVal) region = 'warn';
        else region = 'normal';
    }

    // 持续时长格式化
    const fmtDuration = (sec) => {
        if (sec < 60) return sec + 's';
        if (sec < 3600) return Math.floor(sec / 60) + 'min';
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        return h + ' 小时 ' + m + ' 分';
    };
    const fmtTs = (ts) => {
        const d = new Date(ts);
        const pad = (n) => String(n).padStart(2, '0');
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    };

    // ±2 分钟事件匹配（用 _matchTs 判定距离，命中后取该事件的快照字段）
    const TWO_MIN = 2 * 60 * 1000;
    const selectedNames = selLines.map(l => l.name);
    function matchEvent(evtType) {
        const candidates = events.filter(e => e.eventType === evtType
            && selectedNames.includes(e.apiName)
            && Math.abs((e._matchTs || e.triggerTime) - curTs) <= TWO_MIN);
        if (candidates.length === 0) return null;
        candidates.sort((a, b) => Math.abs((a._matchTs || a.triggerTime) - curTs) - Math.abs((b._matchTs || b.triggerTime) - curTs));
        return candidates[0];
    }

    // 卡片渲染（基于鼠标 Y 区域）
    let cardHtml = '';
    const renderRow = (k, v) => `<div class="lo-qps-tip-card-row"><span class="lo-qps-tip-card-k">${k}</span><span class="lo-qps-tip-card-v" title="${v}">${v}</span></div>`;
    if (region === 'limit') {
        // 区域 A：限流卡片（仅当 ±2min 内有匹配事件时展示）
        const ev = matchEvent('limit');
        if (ev) {
            const m = ev.meta || {};
            const isKey = !!m.customKey;
            const rows = isKey
                ? [
                    renderRow('限流场景', m.scene || '-'),
                    renderRow('调用方服务', m.callerSvc || '-'),
                    renderRow('被调用方服务', m.calleeSvc || '-'),
                    renderRow('自定义key', m.customKey || '-'),
                    renderRow('限流值', fmtUnit(ev.limitValue)),
                    renderRow('流量值', fmtUnit(ev.trafficValue)),
                    renderRow('触发时间', fmtTs(ev.triggerTime)),
                    renderRow('持续时长', fmtDuration(ev.duration))
                ].join('')
                : [
                    renderRow('调用方服务', m.callerSvc || '-'),
                    renderRow('调用方集群', m.callerCluster || '-'),
                    renderRow('被调用方服务', m.calleeSvc || '-'),
                    renderRow('被调用方集群', m.calleeCluster || '-'),
                    renderRow('限流接口', m.calleeIface || '-'),
                    renderRow('限流类型', ev.limitType),
                    renderRow('限流值', fmtUnit(ev.limitValue)),
                    renderRow('流量值', fmtUnit(ev.trafficValue)),
                    renderRow('触发时间', fmtTs(ev.triggerTime)),
                    renderRow('持续时长', fmtDuration(ev.duration))
                ].join('');
            cardHtml = `
                <div class="lo-qps-tip-card lo-qps-tip-card-limit">
                    <div class="lo-qps-tip-card-title"><span class="lo-qps-tip-dot lo-qps-tip-dot-limit"></span>限流事件</div>
                    ${rows}
                </div>
            `;
        }
    } else if (region === 'warn') {
        // 区域 B：预警卡片
        const ev = matchEvent('warning');
        if (ev) {
            const m = ev.meta || {};
            const isKey = !!m.customKey;
            const waterPct = Math.round(ev.waterLevel * 100) + '%';
            const rows = isKey
                ? [
                    renderRow('限流场景', m.scene || '-'),
                    renderRow('调用方服务', m.callerSvc || '-'),
                    renderRow('被调用方服务', m.calleeSvc || '-'),
                    renderRow('自定义key', m.customKey || '-'),
                    renderRow('限流值', fmtUnit(ev.limitValue)),
                    renderRow('预警水位', waterPct),
                    renderRow('流量值', fmtUnit(ev.trafficValue)),
                    renderRow('触发时间', fmtTs(ev.triggerTime)),
                    renderRow('持续时长', fmtDuration(ev.duration))
                ].join('')
                : [
                    renderRow('调用方服务', m.callerSvc || '-'),
                    renderRow('调用方集群', m.callerCluster || '-'),
                    renderRow('被调用方服务', m.calleeSvc || '-'),
                    renderRow('被调用方集群', m.calleeCluster || '-'),
                    renderRow('被调用方接口', m.calleeIface || '-'),
                    renderRow('限流类型', ev.limitType),
                    renderRow('限流值', fmtUnit(ev.limitValue)),
                    renderRow('预警水位', waterPct),
                    renderRow('流量值', fmtUnit(ev.trafficValue)),
                    renderRow('触发时间', fmtTs(ev.triggerTime))
                ].join('');
            cardHtml = `
                <div class="lo-qps-tip-card lo-qps-tip-card-warn">
                    <div class="lo-qps-tip-card-title"><span class="lo-qps-tip-dot lo-qps-tip-dot-warn"></span>预警事件</div>
                    ${rows}
                </div>
            `;
        }
    }

    // 仅展示事件卡片（限流/预警），无卡片则隐藏整个 tip
    if (!cardHtml) {
        tip.classList.add('hidden');
        return;
    }
    tip.innerHTML = cardHtml;
    // 计算位置
    const wrapRect = wrap.getBoundingClientRect();
    let x = evt.clientX - wrapRect.left + 12;
    let y = evt.clientY - wrapRect.top + 12;
    tip.style.left = x + 'px';
    tip.style.top = y + 'px';
    tip.classList.remove('hidden');
    const tipRect = tip.getBoundingClientRect();
    if (tipRect.right > wrapRect.right - 6) {
        x = wrapRect.width - tipRect.width - 6;
        tip.style.left = x + 'px';
    }
    if (tipRect.bottom > wrapRect.bottom - 6) {
        y = wrapRect.height - tipRect.height - 6;
        tip.style.top = y + 'px';
    }
}

function hideLoQpsTip() {
    document.querySelectorAll('.lo-qps-tip').forEach(t => {
        // 已固定的 tip 不被 mouseleave 关闭
        if (t.classList.contains('lo-qps-tip-pinned')) return;
        t.classList.add('hidden');
    });
}

// 点击图表区域：切换 tip 的 pinned 状态
function toggleLoQpsTipPinned(evt) {
    if (!evt) return;
    const target = evt.currentTarget;
    const wrap = target && target.closest ? target.closest('.lo-qps-chart-wrap') : null;
    if (!wrap) return;
    const tip = wrap.querySelector('.lo-qps-tip');
    if (!tip) return;
    if (tip.classList.contains('lo-qps-tip-pinned')) {
        // 已固定 → 取消固定并隐藏
        tip.classList.remove('lo-qps-tip-pinned');
        tip.classList.add('hidden');
        return;
    }
    // 未固定 → 若当前 tip 已显示（hover 状态），则固定到当前位置；否则不操作
    if (!tip.classList.contains('hidden') && tip.innerHTML.trim()) {
        tip.classList.add('lo-qps-tip-pinned');
    }
}

// 限流详情 drawer（保留 DOM，提供基础打开/关闭函数；当前 lo-config-action 已直接跳转限流器页）
function openLoLimitDetailDrawer(psm) {
    const node = findLoNode(psm);
    if (!node) return;
    const body = document.getElementById('loLimitDetailDrawerBody');
    const drawer = document.getElementById('loLimitDetailDrawer');
    if (!body || !drawer) return;
    const numericVal = parseLoThresholdNumber(node.threshold);
    body.innerHTML = `
        <div class="lo-detail-section">
            <div class="lo-detail-section-title">基本信息</div>
            <div class="lo-base-grid">
                <div class="lo-base-item"><span class="lo-base-label">PSM</span><span class="lo-base-value">${node.psm}</span></div>
                <div class="lo-base-item"><span class="lo-base-label">集群</span><span class="lo-base-value">${node.cluster}</span></div>
                <div class="lo-base-item"><span class="lo-base-label">VDC</span><span class="lo-base-value">${node.vdc}</span></div>
                <div class="lo-base-item"><span class="lo-base-label">调用方法</span><span class="lo-base-value">${node.invokeMethod}</span></div>
            </div>
        </div>
        <div class="lo-detail-section">
            <div class="lo-detail-section-title">限流值</div>
            <div class="lo-limit-edit-row">
                <span class="lo-limit-edit-label">限流值</span>
                <div class="lo-limit-edit-input-wrap">
                    <input type="number" class="form-control lo-limit-edit-input" id="loLimitDetailValue" value="${numericVal}" min="0">
                    <span class="lo-limit-edit-unit">req/s</span>
                </div>
            </div>
            <div class="lo-limit-edit-tip">修改后将立即生效</div>
        </div>
    `;
    drawer.dataset.psm = node.psm;
    drawer.classList.remove('hidden');
}

function closeLoLimitDetailDrawer() {
    const drawer = document.getElementById('loLimitDetailDrawer');
    if (drawer) drawer.classList.add('hidden');
}

function saveLoLimitDetail() {
    const drawer = document.getElementById('loLimitDetailDrawer');
    if (!drawer) return;
    const psm = drawer.dataset.psm;
    const node = findLoNode(psm);
    const inp = document.getElementById('loLimitDetailValue');
    if (node && inp) {
        const v = parseFloat(inp.value);
        if (!isNaN(v) && v >= 0) {
            // 保留单位（若原来是 k/K）
            const m = String(node.threshold || '').match(/[kKmM]/);
            if (m) {
                node.threshold = (v >= 1000 ? (v / 1000).toFixed(1) + 'k' : String(v));
            } else {
                node.threshold = String(v);
            }
        }
    }
    closeLoLimitDetailDrawer();
    if (psm) openLoNodeDrawer(psm);
}



function closeLoNodeDrawer() {
    const drawer = document.getElementById('loNodeDrawer');
    if (drawer) drawer.classList.add('hidden');
}

// 链路查询结果筛选项 - 下拉搜索建议（候选值来源于当前结果数据）
function setupLoListFilterSuggest() {
    const root = document.getElementById('loListView');
    if (!root || root._suggestBound) return;
    root._suggestBound = true;

    const fieldInputId = {
        callerSvc: 'loListFCallerSvc',
        callerCluster: 'loListFCallerCluster',
        callerIface: 'loListFCallerIface',
        calleeSvc: 'loListFCalleeSvc',
        calleeCluster: 'loListFCalleeCluster',
        calleeIface: 'loListFCalleeIface'
    };
    void fieldInputId;

    function getOptions(field) {
        const data = (typeof loTopologyData === 'object' && loTopologyData) || null;
        if (!data || !data.target) return [];
        const t = data.target;
        const ds = data.downstream || [];
        const set = new Set();
        if (field === 'callerSvc') set.add(t.psm);
        else if (field === 'callerCluster') set.add(t.cluster || '-');
        else if (field === 'callerIface') set.add(t.invokeMethod || '-');
        else if (field === 'calleeSvc') ds.forEach(n => set.add(n.psm));
        else if (field === 'calleeCluster') ds.forEach(n => set.add(n.cluster || '-'));
        else if (field === 'calleeIface') ds.forEach(n => set.add(n.invokeMethod || '-'));
        return Array.from(set).filter(v => v && v !== '-');
    }

    function renderPop(item) {
        const field = item.getAttribute('data-field');
        const input = item.querySelector('input');
        const pop = item.querySelector('.lo-list-filter-pop');
        if (!field || !input || !pop) return;
        const kw = (input.value || '').toLowerCase().trim();
        const options = getOptions(field).filter(v => !kw || String(v).toLowerCase().includes(kw));
        if (!options.length) {
            pop.innerHTML = `<div class="lo-list-filter-pop-empty">无匹配项</div>`;
        } else {
            pop.innerHTML = options.map(v => `<div class="lo-list-filter-pop-item" data-val="${v}">${v}</div>`).join('');
        }
        pop.classList.remove('hidden');
    }

    root.querySelectorAll('.lo-list-filter-suggest').forEach(item => {
        const input = item.querySelector('input');
        const pop = item.querySelector('.lo-list-filter-pop');
        if (!input || !pop) return;
        input.addEventListener('focus', () => renderPop(item));
        input.addEventListener('input', () => renderPop(item));
        item.addEventListener('mousedown', (e) => {
            const opt = e.target.closest('.lo-list-filter-pop-item');
            if (!opt) return;
            e.preventDefault();
            input.value = opt.getAttribute('data-val') || '';
            pop.classList.add('hidden');
            renderLoList();
        });
    });

    document.addEventListener('pointerdown', (e) => {
        if (e.target.closest('.lo-list-filter-suggest')) return;
        root.querySelectorAll('.lo-list-filter-pop').forEach(p => p.classList.add('hidden'));
    }, true);
}

// History Config Drawer
const historyConfigs = [
    {
        id: 1,
        name: '默认配置',
        type: 'default',
        psm: 'ttec.western.mall.event',
        timeRange: '最近 1 小时',
        updateTime: '2026-05-19 14:32:18',
        _values: {
            loEntry: 'ttec.western.mall.event', loVDC: 'maliva', loCluster: 'default',
            loTimeRange: '近 1h', loDepType: '', loPriority: '', loSvcType: '',
            loUpLevel: '1', loDownLevel: '2', granularity: 'psm'
        }
    },
    {
        id: 2,
        name: '大促监控配置',
        type: 'preset',
        psm: 'oec.promotion.trade_engine',
        timeRange: '最近 24 小时',
        updateTime: '2026-05-18 09:15:42',
        _values: {
            loEntry: 'oec.promotion.trade_engine', loVDC: 'useast', loCluster: 'cluster-01',
            loTimeRange: '近 24h', loDepType: '强依赖/业务强依赖', loPriority: 'P0', loSvcType: 'HTTP',
            loUpLevel: '2', loDownLevel: '3', granularity: 'psm,interface'
        }
    },
    {
        id: 3,
        name: '核心服务观测',
        type: 'preset',
        psm: 'toutiao.ms.argos',
        timeRange: '最近 7 天',
        updateTime: '2026-05-15 16:48:09',
        _values: {
            loEntry: 'toutiao.ms.argos', loVDC: 'sg-central', loCluster: 'default',
            loTimeRange: '近 7 天', loDepType: '弱依赖', loPriority: 'P1', loSvcType: 'RPC',
            loUpLevel: '3', loDownLevel: '3', granularity: 'psm,interface'
        }
    },
    {
        id: 4,
        name: '高峰排查配置',
        type: 'default',
        psm: 'oec.operation.product_group',
        timeRange: '最近 30 分钟',
        updateTime: '2026-05-12 21:03:55',
        _values: {
            loEntry: 'oec.operation.product_group', loVDC: 'lf', loCluster: 'gray',
            loTimeRange: '近 30mins', loDepType: '', loPriority: 'P2', loSvcType: '',
            loUpLevel: '1', loDownLevel: '1', granularity: 'psm'
        }
    }
];

function openHistoryConfigDrawer() {
    renderHistoryConfigList();
    const drawer = document.getElementById('historyConfigDrawer');
    if (drawer) drawer.classList.remove('hidden');
}

function closeHistoryConfigDrawer() {
    const drawer = document.getElementById('historyConfigDrawer');
    if (drawer) drawer.classList.add('hidden');
    exitHcBulkMode();
}

function renderHistoryConfigList() {
    const list = document.getElementById('historyConfigList');
    if (!list) return;
    const isBulk = hcBulkState.active;
    list.innerHTML = historyConfigs.map(c => {
        const v = c._values || {};
        const checked = hcBulkState.selected.has(c.id);
        const checkboxHtml = isBulk
            ? `<label class="hc-item-check"><input type="checkbox" data-id="${c.id}" ${checked ? 'checked' : ''}></label>`
            : '';
        const ups = v.loUpLevel || '-';
        const downs = v.loDownLevel || '-';
        return `
        <div class="hc-item ${isBulk ? 'hc-item-bulk' : ''} ${checked ? 'hc-item-selected' : ''}" data-id="${c.id}">
            ${checkboxHtml}
            <div class="hc-item-meta hc-item-meta-grid">
                <div class="hc-item-meta-row"><span class="hc-item-meta-label">链路入口</span><span class="hc-item-meta-value" title="${v.loEntry || '-'}">${v.loEntry || '-'}</span></div>
                <div class="hc-item-meta-row"><span class="hc-item-meta-label">VDC</span><span class="hc-item-meta-value">${v.loVDC || '-'}</span></div>
                <div class="hc-item-meta-row"><span class="hc-item-meta-label">集群</span><span class="hc-item-meta-value">${v.loCluster || '-'}</span></div>
                <div class="hc-item-meta-row"><span class="hc-item-meta-label">时间范围</span><span class="hc-item-meta-value">${v.loTimeRange || c.timeRange || '-'}</span></div>
                <div class="hc-item-meta-row"><span class="hc-item-meta-label">拓扑层级</span><span class="hc-item-meta-value">向上 ${ups} / 向下 ${downs}</span></div>
                <div class="hc-item-meta-row"><span class="hc-item-meta-label">强弱依赖</span><span class="hc-item-meta-value">${v.loDepType || '-'}</span></div>
                <div class="hc-item-meta-row"><span class="hc-item-meta-label">服务优先级</span><span class="hc-item-meta-value">${v.loPriority || '-'}</span></div>
                <div class="hc-item-meta-row"><span class="hc-item-meta-label">服务类型</span><span class="hc-item-meta-value">${v.loSvcType || '-'}</span></div>
                <div class="hc-item-meta-row"><span class="hc-item-meta-label">观测粒度</span><span class="hc-item-meta-value">${v.granularity || '-'}</span></div>
                <div class="hc-item-meta-row"><span class="hc-item-meta-label">更新时间</span><span class="hc-item-meta-value">${c.updateTime}</span></div>
            </div>
            ${isBulk ? '' : `
            <div class="hc-item-actions">
                <button class="hc-item-action-btn" data-act="apply" data-id="${c.id}">应用</button>
                <button class="hc-item-action-btn danger" data-act="delete" data-id="${c.id}">删除</button>
            </div>
            `}
        </div>
    `;
    }).join('');

    // 普通模式：单项动作按钮
    list.querySelectorAll('.hc-item-action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const act = btn.dataset.act;
            const id = parseInt(btn.dataset.id, 10);
            const cfg = historyConfigs.find(c => c.id === id);
            if (!cfg) return;
            if (act === 'apply') {
                applyHistoryConfig(cfg);
            } else if (act === 'delete') {
                if (cfg.type === 'preset') {
                    showToast('预置配置不支持删除');
                    return;
                }
                if (!confirm(`确定要删除配置「${cfg.name}」吗？`)) return;
                const idx = historyConfigs.findIndex(c => c.id === id);
                if (idx !== -1) {
                    historyConfigs.splice(idx, 1);
                    renderHistoryConfigList();
                    showToast(`已删除配置「${cfg.name}」`);
                }
            }
        });
    });

    // 批量模式：整卡可点击 + 复选框
    if (isBulk) {
        list.querySelectorAll('.hc-item').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.hc-item-check input')) return;
                const id = parseInt(card.dataset.id, 10);
                if (hcBulkState.selected.has(id)) hcBulkState.selected.delete(id);
                else hcBulkState.selected.add(id);
                renderHistoryConfigList();
                updateHcSelectedCount();
            });
        });
        list.querySelectorAll('.hc-item-check input[type="checkbox"]').forEach(cb => {
            cb.addEventListener('click', (e) => e.stopPropagation());
            cb.addEventListener('change', () => {
                const id = parseInt(cb.dataset.id, 10);
                if (cb.checked) hcBulkState.selected.add(id);
                else hcBulkState.selected.delete(id);
                renderHistoryConfigList();
                updateHcSelectedCount();
            });
        });
    }
}

/* ============= 历史配置：批量操作 ============= */
const hcBulkState = {
    active: false,
    selected: new Set()
};

function enterHcBulkMode() {
    hcBulkState.active = true;
    hcBulkState.selected = new Set();
    document.getElementById('hcBulkBar')?.classList.remove('hidden');
    const sa = document.getElementById('hcSelectAll');
    if (sa) sa.checked = false;
    renderHistoryConfigList();
    updateHcSelectedCount();
}

function exitHcBulkMode() {
    hcBulkState.active = false;
    hcBulkState.selected = new Set();
    document.getElementById('hcBulkBar')?.classList.add('hidden');
    renderHistoryConfigList();
}

function updateHcSelectedCount() {
    const el = document.getElementById('hcSelectedCount');
    if (el) el.textContent = String(hcBulkState.selected.size);
    const sa = document.getElementById('hcSelectAll');
    if (sa) sa.checked = hcBulkState.selected.size > 0 && hcBulkState.selected.size === historyConfigs.length;
}

function getSelectedHcConfigs() {
    return historyConfigs.filter(c => hcBulkState.selected.has(c.id));
}

function bindHcBulkHandlers() {
    const $on2 = (id, evt, fn) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(evt, fn);
    };
    $on2('btnBulkOp', 'click', enterHcBulkMode);
    $on2('hcSelectAll', 'change', (e) => {
        if (e.target.checked) {
            hcBulkState.selected = new Set(historyConfigs.map(c => c.id));
        } else {
            hcBulkState.selected = new Set();
        }
        renderHistoryConfigList();
        updateHcSelectedCount();
    });
    $on2('hcBulkCancel', 'click', () => {
        exitHcBulkMode();
        showToast('已退出批量操作');
    });
    $on2('hcBulkDelete', 'click', () => {
        const selected = getSelectedHcConfigs();
        if (selected.length === 0) {
            showToast('请先选择要删除的配置');
            return;
        }
        if (!confirm(`确定要删除选中的 ${selected.length} 项配置吗？此操作不可恢复。`)) return;
        const removable = selected.filter(c => c.type !== 'preset');
        const blocked = selected.length - removable.length;
        const removableIds = new Set(removable.map(c => c.id));
        for (let i = historyConfigs.length - 1; i >= 0; i--) {
            if (removableIds.has(historyConfigs[i].id)) historyConfigs.splice(i, 1);
        }
        exitHcBulkMode();
        const msg = blocked > 0
            ? `已删除 ${removable.length} 项，其中 ${blocked} 项预置配置不支持删除`
            : `已删除 ${removable.length} 项配置`;
        showToast(msg);
    });
}

function applyHistoryConfig(cfg) {
    const v = cfg._values || {};
    // 简单字段直接写 input.value
    ['loEntry', 'loVDC', 'loCluster', 'loTimeRange', 'loDepType', 'loPriority', 'loSvcType', 'loDept', 'loUpLevel', 'loDownLevel'].forEach(k => {
        const el = document.getElementById(k);
        if (el) el.value = v[k] || '';
    });
    // 观测粒度
    const grans = (v.granularity || '').split(',').filter(Boolean);
    document.querySelectorAll('input[name="loGran"]').forEach(c => {
        c.checked = grans.includes(c.value);
    });
    // 同步状态机：清空已生成快照 -> 后续点击「生成结果」才会变为最新
    loConfigState.lastGenerated = null;
    loConfigState.firstFilled = !isLoFilterEmpty(v);
    loConfigState.dirty = false;
    // 应用配置后必须重置渲染状态：旧拓扑结果不再代表当前筛选项
    loResultGenerated = false;
    renderLoTopology();
    renderLoList();
    persistLoFilterDraft();
    closeHistoryConfigDrawer();
    showToast(`已应用配置「${cfg.name}」，请点击「生成结果」`);
}

/* ============= Link Observation: 状态栏 + 配置状态机 ============= */
const LO_DRAFT_KEY = 'lo_filter_draft_v2';
const LO_SAVED_KEY = 'lo_saved_config_v2';

const loConfigState = {
    lastGenerated: null,    // 上一次成功生成结果时的筛选项快照（JSON 字符串）
    lastSaved: null,        // 上一次保存的配置快照（JSON 字符串），未保存为 null
    savedConfigId: null,    // 已保存配置在 historyConfigs 中的 id
    dirty: false,           // 当前筛选项是否相对上一次生成结果已变更
    firstFilled: false      // 首次填写但未点过生成
};

function collectLoFilterValues() {
    const ids = ['loEntry', 'loVDC', 'loCluster', 'loTimeRange', 'loDepType', 'loPriority', 'loSvcType', 'loDept', 'loUpLevel', 'loDownLevel'];
    const values = {};
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) values[id] = el.value || '';
    });
    const grans = Array.from(document.querySelectorAll('input[name="loGran"]:checked')).map(c => c.value);
    values.granularity = grans.join(',');
    return values;
}

function isLoFilterEmpty(values) {
    return !values.loEntry && !values.loVDC && !values.loCluster && !values.granularity;
}

function showLoStatus() {
    // 已移除顶部状态提示栏
}

function hideLoStatus() {
    // 已移除顶部状态提示栏
}

function updateLoGenerateDot() {
    // 已移除「生成结果」红点机制
}

function persistLoFilterDraft() {
    // 不再持久化草稿：每次进入页面均为空态
}

function restoreLoFilterDraft() {
    // 每次进入页面强制重置为空态：清理 localStorage、清空表单、复位状态机
    try {
        localStorage.removeItem('lo_filter_draft');
        localStorage.removeItem('lo_saved_config');
        if (typeof LO_DRAFT_KEY !== 'undefined') {
            localStorage.removeItem(LO_DRAFT_KEY);
        }
    } catch (e) { /* ignore */ }

    // 清空所有筛选项 DOM
    ['loEntry', 'loVDC', 'loCluster', 'loTimeRange', 'loDepType', 'loPriority',
     'loSvcType', 'loDept', 'loUpLevel', 'loDownLevel'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    document.querySelectorAll('input[name="loGran"]').forEach(c => { c.checked = false; });

    // 复位状态机
    loResultGenerated = false;
    loConfigState.lastGenerated = null;
    loConfigState.firstFilled = false;
    loConfigState.dirty = false;
    loConfigState.savedConfigId = null;
    loConfigState.lastSaved = null;
    // 复位画布筛选项（QPS / CPU / 告警筛选）
    loCanvasState.alertFilter = 'all';
    loCanvasState.qpsValue = null;
    loCanvasState.qpsOp = 'gte';
    loCanvasState.cpuValue = null;
    loCanvasState.cpuOp = 'gte';
    ['loCanvasQpsValue', 'loCanvasCpuValue'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    ['loCanvasQpsOp', 'loCanvasCpuOp'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if ('value' in el && el.tagName === 'SELECT') el.value = 'gte';
        else el.setAttribute('data-op', 'gte');
    });
    hideLoStatus();
    updateLoGenerateDot();
    // 立即重渲染拓扑/列表为空态
    if (typeof renderLoTopology === 'function') renderLoTopology();
    if (typeof renderLoList === 'function') renderLoList();
}

function initLoFilterWatch() {
    const handler = () => {
        const cur = JSON.stringify(collectLoFilterValues());
        if (loConfigState.lastGenerated === null) {
            const empty = isLoFilterEmpty(JSON.parse(cur));
            loConfigState.firstFilled = !empty;
            if (!empty) {
                showLoStatus('已配置筛选条件，待生成观测结果');
            } else {
                hideLoStatus();
            }
        } else if (cur !== loConfigState.lastGenerated) {
            loConfigState.dirty = true;
            showLoStatus('当前筛选条件已变更，待更新观测结果');
        } else {
            loConfigState.dirty = false;
            hideLoStatus();
        }
        updateLoGenerateDot();
        persistLoFilterDraft();
    };
    const fields = ['loEntry', 'loVDC', 'loCluster', 'loTimeRange', 'loDepType', 'loPriority', 'loSvcType', 'loDept', 'loUpLevel', 'loDownLevel'];
    fields.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', handler);
            el.addEventListener('change', handler);
        }
    });
    document.querySelectorAll('input[name="loGran"]').forEach(el => el.addEventListener('change', handler));
}

function saveLoConfig() {
    const values = collectLoFilterValues();
    const psm = values.loEntry || '未设定';
    const timeRange = values.loTimeRange || '近 1 小时';
    const updateTime = new Date().toLocaleString('zh-CN');
    if (loConfigState.savedConfigId !== null) {
        // 覆盖原配置
        const cfg = historyConfigs.find(c => c.id === loConfigState.savedConfigId);
        if (cfg) {
            cfg.psm = psm;
            cfg.timeRange = timeRange;
            cfg.updateTime = updateTime;
            cfg._values = values;
            loConfigState.lastSaved = JSON.stringify(values);
            try { localStorage.setItem(LO_SAVED_KEY, JSON.stringify({ id: cfg.id, values })); } catch (e) {}
            return 'updated';
        }
    }
    // 新增
    const id = (historyConfigs.reduce((m, c) => Math.max(m, c.id), 0) || 0) + 1;
    const cfg = {
        id,
        name: `链路观测配置 ${id}`,
        type: 'default',
        psm,
        timeRange,
        updateTime,
        _values: values
    };
    historyConfigs.unshift(cfg);
    loConfigState.savedConfigId = id;
    loConfigState.lastSaved = JSON.stringify(values);
    try { localStorage.setItem(LO_SAVED_KEY, JSON.stringify({ id, values })); } catch (e) {}
    return 'created';
}

function saveLoConfigAsNew(name) {
    const values = collectLoFilterValues();
    const id = (historyConfigs.reduce((m, c) => Math.max(m, c.id), 0) || 0) + 1;
    const cfg = {
        id,
        name,
        type: 'default',
        psm: values.loEntry || '未设定',
        timeRange: values.loTimeRange || '近 1 小时',
        updateTime: new Date().toLocaleString('zh-CN'),
        _values: values
    };
    historyConfigs.unshift(cfg);
    loConfigState.savedConfigId = id;
    loConfigState.lastSaved = JSON.stringify(values);
    try { localStorage.setItem(LO_SAVED_KEY, JSON.stringify({ id, values })); } catch (e) {}
}

/* ============= 拓扑画布工具：定位 / 导出 / 全屏 ============= */
function getAllLoNodes() {
    return [loTopologyData.target, ...loTopologyData.downstream];
}

function inferLoNodeTagType(psm) {
    const p = (psm || '').toLowerCase();
    if (p.includes('argos_monitor_data') || p.includes('storage') || p.includes('mysql') || p.includes('redis')) return 'storage';
    if (p.includes('byted.org') || p.includes('facade')) return 'other';
    return 'http';
}

function toggleLoLocatePanel() {
    const panel = document.getElementById('loLocatePanel');
    const btn = document.getElementById('loCanvasLocate');
    if (!panel) return;
    const showing = panel.classList.contains('hidden');
    if (showing) {
        panel.classList.remove('hidden');
        btn.classList.add('active');
        const input = document.getElementById('loLocateInput');
        if (input) {
            input.value = '';
            input.focus();
        }
        updateLoLocateDropdown();
    } else {
        panel.classList.add('hidden');
        btn.classList.remove('active');
    }
}

function updateLoLocateDropdown() {
    const input = document.getElementById('loLocateInput');
    const dropdown = document.getElementById('loLocateDropdown');
    if (!dropdown) return;
    const kw = (input && input.value || '').trim().toLowerCase();
    const items = getAllLoNodes().filter(n => !kw || n.psm.toLowerCase().includes(kw));
    if (!items.length) {
        dropdown.innerHTML = '<div class="lo-locate-item" style="cursor:default;color:#999;justify-content:center;">无匹配节点</div>';
        return;
    }
    dropdown.innerHTML = items.map(n => {
        const tag = inferLoNodeTagType(n.psm);
        return `<div class="lo-locate-item" data-psm="${n.psm}">
            <span class="lo-locate-item-tag">${tag}</span>
            <span class="lo-locate-item-name">${n.psm}::::::</span>
        </div>`;
    }).join('');
    dropdown.querySelectorAll('.lo-locate-item[data-psm]').forEach(it => {
        it.addEventListener('click', () => {
            const psm = it.getAttribute('data-psm');
            locateLoNode(psm);
            toggleLoLocatePanel();
        });
    });
}

function locateLoNode(psm) {
    const svg = document.getElementById('loTopologySvg');
    if (!svg) return;
    // 清除已有高亮
    svg.querySelectorAll('.lo-node-located').forEach(el => {
        el.classList.remove('lo-node-located');
        el.style.removeProperty('--lo-locate-color');
    });
    svg.querySelectorAll('.lo-edge-flow').forEach(el => el.classList.remove('lo-edge-flow'));
    // 查找目标节点数据以确定状态颜色
    const allNodes = getAllLoNodes();
    const target = allNodes.find(n => n.psm === psm);
    const status = (target && target.status) || 'normal';
    const colorMap = { normal: '#52c41a', warn: '#fa8c16', error: '#ff4d4f' };
    const locateColor = colorMap[status] || '#52c41a';
    // 节点闪烁
    const node = svg.querySelector(`[data-psm="${CSS.escape(psm)}"]`);
    if (node) {
        node.style.setProperty('--lo-locate-color', locateColor);
        node.classList.add('lo-node-located');
    }
    // 上下游连线流淌（沿用原节点状态色）
    svg.querySelectorAll('.lo-edge').forEach(p => {
        const from = p.getAttribute('data-from');
        const to = p.getAttribute('data-to');
        if (from === psm || to === psm) {
            p.classList.add('lo-edge-flow');
        }
    });
    showToast(`已定位至节点 ${psm}`);
}

function exportLoCanvas() {
    const svg = document.getElementById('loTopologySvg');
    if (!svg) return;
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svg);
    const blob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `topology-${Date.now()}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('已导出图片');
}

function toggleLoFullscreen() {
    const canvas = document.getElementById('loCanvas');
    if (!canvas) return;
    if (!document.fullscreenElement) {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen().then(() => setTimeout(renderLoTopology, 50)).catch(() => {});
        }
    } else if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setTimeout(renderLoTopology, 50)).catch(() => {});
    }
}