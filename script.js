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
        document.getElementById('pageTitle').textContent = '链路观测列表';
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
    $on('loListSearch', 'input', renderLoList);
    $on('loListStatus', 'change', renderLoList);
    $on('loListExport', 'click', () => showToast('已导出列表数据'));
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
    const loEntryMethodMap = {
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
        'tiktok.video.encode': ['SubmitJob', 'CancelJob', 'QueryJob', 'ListJob', 'RetryJob', 'GetJobLog']
    };

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
    // 未生成结果时列表清空
    if (!loResultGenerated) {
        tbody.innerHTML = '';
        return;
    }
    const search = (document.getElementById('loListSearch')?.value || '').toLowerCase().trim();
    const statusFilter = document.getElementById('loListStatus')?.value || 'all';
    // 解析限流类型/限流模式（来源于 limitConfig 文本，无则给默认值）
    const parseLimitInfo = (n) => {
        const lc = n.limitConfig || '';
        // 限流值优先取 node.threshold，回退到从 limitConfig 文本提取
        const limitVal = n.threshold || (lc.match(/阈值\s*([\d.]+\s*k?)/) || ['-', '-'])[1] || '-';
        const limitType = lc.includes('优先级') ? '优先级限流' : (lc.includes('QPS') ? 'QPS 限流' : 'QPS 限流');
        const limitMode = '单机限流';
        return { limitVal, limitType, limitMode };
    };
    // 列表的每一行 = 一条调用边：调用方（target）-> 被调用方（downstream 节点 / 当前 target 自身）
    // 当筛选目标是 target 节点本身时，仍展示为「调用方=target，被调用方=target」？此处只展示真实下游边。
    const callerSvc = loTopologyData.target.psm;
    const callerCluster = loTopologyData.target.cluster || '-';
    const edges = loTopologyData.downstream.map(n => ({ caller: loTopologyData.target, callee: n }));
    const filteredEdges = edges.filter(({ callee: n }) => {
        if (statusFilter !== 'all' && n.status !== statusFilter) return false;
        if (search) {
            const hay = `${callerSvc} ${n.psm} ${n.invokeMethod || ''}`.toLowerCase();
            if (!hay.includes(search)) return false;
        }
        return true;
    });

    tbody.innerHTML = filteredEdges.map(({ callee: n }) => {
        const info = parseLimitInfo(n);
        const method = n.invokeMethod || '-';
        return `
        <tr>
            <td><span class="lo-list-cell-ellipsis" data-fullname="${callerSvc}">${callerSvc}</span></td>
            <td>${callerCluster}</td>
            <td><span class="lo-list-cell-ellipsis" data-fullname="${n.psm}">${n.psm}</span></td>
            <td>${n.cluster || '-'}</td>
            <td><span class="lo-list-cell-ellipsis" data-fullname="${method}">${method}</span></td>
            <td>${info.limitVal}</td>
            <td>${info.limitType}</td>
            <td>${info.limitMode}</td>
            <td>${n.peakQps || '-'}</td>
            <td>${n.currentQps || '-'}</td>
            <td>${n.p99 || '-'}</td>
            <td>${n.cpu || '-'}</td>
            <td><button class="btn-link lo-list-view-btn" data-psm="${n.psm}">查看</button></td>
        </tr>
    `; }).join('') || `<tr><td colspan="13" style="text-align:center;color:#999;padding:24px">暂无匹配数据</td></tr>`;
}

/* ============= 链路列表（已发布链路） ============= */
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
        tag: '基础', priority: 'P2', owner: '吕文杰',
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

const loLinksState = { name: '', entry: '', priority: '' };
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
    const filtered = loUserLinks.filter(l => {
        if (s.name && !l.name.toLowerCase().includes(s.name.toLowerCase())) return false;
        if (s.entry && !(l.entry || '').toLowerCase().includes(s.entry.toLowerCase())) return false;
        if (s.priority && l.priority !== s.priority) return false;
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

    tbody.innerHTML = filtered.map(l => `
        <tr class="lo-links-row" data-link-id="${l.id}">
            <td class="lo-links-name-cell">
                <span class="lo-links-name" data-fullname="${l.name}">${l.name}</span>
            </td>
            <td><span class="lo-links-entry">${l.entry}</span></td>
            <td>
                <span class="lo-links-owner">
                    <span class="lo-links-avatar" style="background:${avatarColor(l.owner)}">${avatarText(l.owner)}</span>
                    <span>${l.owner}</span>
                </span>
            </td>
            <td><span class="lo-links-topo">${l.topology}</span></td>
            <td><span class="lo-links-priority lo-links-priority-${l.priority}">${l.priority}</span></td>
            <td><span class="lo-links-time">${l.createTime || '-'}</span></td>
            <td class="lo-links-td-action">
                <button class="btn btn-default small lo-links-act-btn" data-act="view" data-link-id="${l.id}">详情</button>
            </td>
        </tr>
    `).join('');

    bindLoLinksEvents();
}

function bindLoLinksEvents() {
    const view = document.getElementById('linkListPage');
    if (!view || view._loLinksBound) return;
    view._loLinksBound = true;

    const ids = ['loLinksFName', 'loLinksFEntry', 'loLinksFPriority'];
    const map = { loLinksFName: 'name', loLinksFEntry: 'entry', loLinksFPriority: 'priority' };
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const evt = el.tagName === 'SELECT' ? 'change' : 'input';
        el.addEventListener(evt, () => {
            loLinksState[map[id]] = el.value;
        });
    });

    // 链路名称 / 链路入口 联想下拉
    bindLoLinksSuggest('loLinksFName', 'name');
    bindLoLinksSuggest('loLinksFEntry', 'entry');

    const searchBtn = document.getElementById('loLinksSearchBtn');
    if (searchBtn) searchBtn.addEventListener('click', renderLoLinks);

    const resetBtn = document.getElementById('loLinksResetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            ids.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
            loLinksState.name = ''; loLinksState.entry = ''; loLinksState.priority = '';
            renderLoLinks();
        });
    }

    const createBtn = document.getElementById('btnCreateLink');
    if (createBtn && !createBtn._bound) {
        createBtn._bound = true;
        createBtn.addEventListener('click', () => enterWorkbench('create'));
    }

    const tbody = document.getElementById('loLinksTableBody');
    if (tbody) {
        tbody.addEventListener('click', (e) => {
            const act = e.target.closest('.lo-links-act-btn');
            if (!act) return;
            const id = act.getAttribute('data-link-id');
            const link = loUserLinks.find(l => l.id === id);
            if (!link) return;
            const action = act.getAttribute('data-act');
            if (action === 'view') enterWorkbench('edit', link);
            else if (action === 'edit') enterWorkbench('edit', link);
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

// 链路名称 / 链路入口 联想下拉
function bindLoLinksSuggest(inputId, field) {
    const input = document.getElementById(inputId);
    const panel = document.getElementById(inputId + 'Panel');
    if (!input || !panel) return;

    const renderPanel = () => {
        const kw = (input.value || '').trim().toLowerCase();
        // 全量候选去重
        const seen = new Set();
        const list = [];
        loUserLinks.forEach(l => {
            const v = l[field];
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
        loLinksState[field] = input.value;
        renderPanel();
    });
    panel.addEventListener('mousedown', (e) => {
        const item = e.target.closest('.lo-filter-suggest-item');
        if (!item) return;
        e.preventDefault();
        const v = item.getAttribute('data-val');
        input.value = v;
        loLinksState[field] = v;
        panel.classList.add('hidden');
    });
    document.addEventListener('click', (e) => {
        if (e.target === input) return;
        if (panel.contains(e.target)) return;
        panel.classList.add('hidden');
    });
}

// 进入工作台
function enterWorkbench(mode, link) {
    loWorkbenchState.mode = mode;
    loWorkbenchState.editingId = (link && (mode === 'edit' || mode === 'view')) ? link.id : null;
    // 在 switchPage 之前先把 pageTitle 设置为目标值（避免任何覆盖）
    const titleEl = document.getElementById('pageTitle');
    if (titleEl) {
        if (mode === 'create') titleEl.textContent = '新建链路';
        else if (mode === 'view' && link) titleEl.textContent = link.name;
        else if (mode === 'edit' && link) titleEl.textContent = link.name;
        else if (mode === 'copy' && link) titleEl.textContent = `${link.name}（副本）`;
    }
    switchPage('link-workbench');
    // 同步设置标题/按钮
    applyWorkbenchModeMeta(mode, link);
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
        if (titleEl) titleEl.textContent = '新建链路';
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
        if (titleEl) titleEl.textContent = '新建链路';
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
    const upLv = parseInt(document.getElementById('loUpLevel')?.value) || 1;
    const downLv = parseInt(document.getElementById('loDownLevel')?.value) || 1;
    const granEl = document.querySelector('input[name="loGran"]:checked');
    const granularity = granEl ? granEl.value : '';
    const granText = granularity === 'interface' ? '接口' : (granularity === 'psm' ? 'PSM/服务' : '');

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
    document.getElementById('loSaveDrawerTitle').textContent = isEdit ? '编辑链路' : '新建链路';
    setVal('loSaveName', defaultName);
    setVal('loSaveEntry', entryRaw);
    setVal('loSaveVDC', v.loVDC || '');
    setVal('loSaveCluster', v.loCluster || '');
    setVal('loSaveTimeRange', v.loTimeRange || '');
    setVal('loSaveTopology', `向上 ${upLv} 层 / 向下 ${downLv} 层`);
    setVal('loSaveDepType', v.loDepType || '');
    setVal('loSaveSvcPriority', v.loPriority || '');
    setVal('loSaveSvcType', v.loSvcType || '');
    setVal('loSaveGran', granText);

    // 打开抽屉
    document.getElementById('loSaveDrawer').classList.remove('hidden');
    setTimeout(() => document.getElementById('loSaveName')?.focus(), 50);
}

const loSaveDrawerState = { isEdit: false, asNew: false };

function closeLoSaveDrawer() {
    document.getElementById('loSaveDrawer').classList.add('hidden');
}

function confirmLoSaveDrawer() {
    const name = (document.getElementById('loSaveName')?.value || '').trim();
    if (!name) { showToast('请输入链路名称'); return; }

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
            ex.upLevel = upLv;
            ex.downLevel = downLv;
            ex.topology = `向上${upLv}层 / 向下${downLv}层`;
            ex.updateTime = ts;
        }
        showToast('修改已保存');
    } else {
        loUserLinks.unshift({
            id: 'link-' + Date.now(),
            name,
            entry: entryMethod ? `${entryPsm}:${entryMethod}:default` : entryPsm,
            entryPsm, entryMethod,
            granularity,
            dept: '产品研发和工程架构-GEC', tag: '核心', priority: 'P2', owner: '当前用户',
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
        showToast('链路已保存');
    }
    closeLoSaveDrawer();
    switchPage('link-observation');
}

function findLoNode(psm) {
    if (loTopologyData.target.psm === psm) return loTopologyData.target;
    return loTopologyData.downstream.find(n => n.psm === psm);
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

    // 上游接口信息（按 PRD 字段：调用方psm/接口/VDC/集群/优先级 + 流量 Max/Avg/P99 + CPU）
    const upstreamRows = [
        {
            psm: node.upstream || '-',
            method: 'invoke',
            vdc: node.vdc || '-',
            cluster: 'cluster-up',
            priority: priorityText,
            max: node.peakQps || '-',
            avg: node.currentQps || '-',
            p99: node.p99 || '-',
            cpu: node.cpu || '-'
        }
    ];
    const upstreamHtml = `
        <div class="lo-detail-section">
            <div class="lo-detail-section-title">上游接口信息</div>
            <table class="data-table lo-iface-table">
                <thead><tr>
                    <th>调用方psm</th><th>调用方接口</th><th>调用方VDC</th><th>调用方集群</th><th>优先级</th>
                    <th>流量 Max</th><th>流量 Avg</th><th>流量 P99</th><th>CPU 利用率</th>
                </tr></thead>
                <tbody>
                    ${upstreamRows.map(r => `<tr><td>${r.psm}</td><td>${r.method}</td><td>${r.vdc}</td><td>${r.cluster}</td><td>${r.priority}</td><td>${r.max}</td><td>${r.avg}</td><td>${r.p99}</td><td>${r.cpu}</td></tr>`).join('')}
                </tbody>
            </table>
        </div>
    `;

    // 下游接口信息（按 PRD 字段：被调用方psm/接口/VDC/集群/优先级 + 流量 Max/Avg/P99 + CPU）
    const downstreamRows = [
        {
            psm: node.downstream || '-',
            method: ifaceName,
            vdc: node.vdc || '-',
            cluster: 'cluster-dn',
            priority: priorityText,
            max: node.peakQps || '-',
            avg: node.currentQps || '-',
            p99: node.p99 || '-',
            cpu: node.cpu || '-'
        }
    ];
    const downstreamHtml = `
        <div class="lo-detail-section">
            <div class="lo-detail-section-title">下游接口信息</div>
            <table class="data-table lo-iface-table">
                <thead><tr>
                    <th>被调用方psm</th><th>被调用方接口</th><th>被调用方VDC</th><th>被调用方集群</th><th>优先级</th>
                    <th>流量 Max</th><th>流量 Avg</th><th>流量 P99</th><th>CPU 利用率</th>
                </tr></thead>
                <tbody>
                    ${downstreamRows.map(r => `<tr><td>${r.psm}</td><td>${r.method}</td><td>${r.vdc}</td><td>${r.cluster}</td><td>${r.priority}</td><td>${r.max}</td><td>${r.avg}</td><td>${r.p99}</td><td>${r.cpu}</td></tr>`).join('')}
                </tbody>
            </table>
        </div>
    `;

    // 告警事件区块：流量趋势图 + 异常表 + 限流配置（GEC / Neptune）
    let alertHtml = '';
    {
        const qpsChartHtml = buildLoNodeQpsTabbed(node, isInterfaceLevel);

        // 异常表
        const abnRows = node.ticketEvent
            ? [{ iface: node.invokeMethod || '-', type: '异常流量', limit: node.threshold || '-', traffic: node.peakQps || '-', time: node.ticketEvent.time, ticket: (node.ticketEvent.data.match(/#?INC-\d+-\d+/) || ['-'])[0] }]
            : [];
        const abnTable = `
            <div class="lo-alert-sub-title">异常</div>
            <table class="data-table lo-iface-table">
                <thead><tr><th>限流接口</th><th>限流类型</th><th>限流值</th><th>流量值</th><th>触发时间</th><th>工单 ID</th></tr></thead>
                <tbody>
                    ${abnRows.length
                        ? abnRows.map(r => `<tr><td>${r.iface}</td><td>${r.type}</td><td>${r.limit}</td><td>${r.traffic}</td><td>${r.time}</td><td><a class="lo-ticket-link" href="https://oncall.bytedance.net/ticket/${r.ticket}" target="_blank" rel="noopener">${r.ticket}</a></td></tr>`).join('')
                        : `<tr><td colspan="6" style="text-align:center;color:#999">暂无数据</td></tr>`}
                </tbody>
            </table>
        `;

        // 限流配置：支持切换 tab —— GEC-限流器 / Neptune
        const svcCluster = node.cluster || 'default';
        const svcIface = node.invokeMethod || '-';
        const upPsm = node !== loTopologyData.target ? loTopologyData.target.psm : '*';
        const upCluster = node !== loTopologyData.target ? (loTopologyData.target.cluster || 'default') : '*';
        const limitVal = node.threshold || '-';
        const cpuVal = node.cpu || '-';

        // GEC - 接口限流
        const gecIfaceRows = [
            { upPsm, upCluster, iface: svcIface, limitCluster: svcCluster, type: 'QPS 限流', limit: limitVal, cpu: cpuVal }
        ];
        // GEC - 自定义 key 限流
        const gecKeyRows = [
            { scene: '默认场景', limitCluster: svcCluster, key: 'user_id', type: '自定义 key 限流', limit: limitVal, cpu: cpuVal }
        ];
        // Neptune
        const neptuneRows = [
            { upPsm, upCluster, iface: svcIface, limit: limitVal, cpu: cpuVal }
        ];

        const gecIfaceTable = `
            <table class="data-table lo-iface-table">
                <thead><tr><th>上游 psm</th><th>上游集群</th><th>限流接口</th><th>限流集群</th><th>限流类型</th><th>限流值</th><th>CPU 利用率</th><th>操作</th></tr></thead>
                <tbody>
                    ${gecIfaceRows.map(r => `<tr>
                        <td>${r.upPsm}</td>
                        <td>${r.upCluster}</td>
                        <td>${r.iface}</td>
                        <td>${r.limitCluster}</td>
                        <td>${r.type}</td>
                        <td>${r.limit}</td>
                        <td>${r.cpu}</td>
                        <td><a class="lo-config-action" href="#" data-target="gec" data-psm="${node.psm}">查看</a></td>
                    </tr>`).join('')}
                </tbody>
            </table>
        `;
        const gecKeyTable = `
            <table class="data-table lo-iface-table">
                <thead><tr><th>限流场景</th><th>限流集群</th><th>自定义 key</th><th>限流类型</th><th>限流值</th><th>CPU 利用率</th><th>操作</th></tr></thead>
                <tbody>
                    ${gecKeyRows.map(r => `<tr>
                        <td>${r.scene}</td>
                        <td>${r.limitCluster}</td>
                        <td>${r.key}</td>
                        <td>${r.type}</td>
                        <td>${r.limit}</td>
                        <td>${r.cpu}</td>
                        <td><a class="lo-config-action" href="#" data-target="gec" data-psm="${node.psm}">查看</a></td>
                    </tr>`).join('')}
                </tbody>
            </table>
        `;
        const neptuneTable = `
            <table class="data-table lo-iface-table">
                <thead><tr><th>上游 psm</th><th>上游集群</th><th>限流接口</th><th>限流值</th><th>CPU 利用率</th><th>操作</th></tr></thead>
                <tbody>
                    ${neptuneRows.map(r => `<tr>
                        <td>${r.upPsm}</td>
                        <td>${r.upCluster}</td>
                        <td>${r.iface}</td>
                        <td>${r.limit}</td>
                        <td>${r.cpu}</td>
                        <td><a class="lo-config-action" href="#" data-target="neptune" data-psm="${node.psm}">查看</a></td>
                    </tr>`).join('')}
                </tbody>
            </table>
        `;
        // GEC 子面板：根据节点的 limitMode 仅展示对应类型，不再提供 tab 切换
        const isKeyNode = node.limitMode === 'key';
        const gecPanelHtml = isKeyNode ? gecKeyTable : gecIfaceTable;

        const cfgTable = `
            <div class="lo-alert-sub-title">限流配置</div>
            <div class="lo-cfg-tabs">
                <div class="lo-cfg-tab-headers">
                    <div class="lo-cfg-tab-h active" data-tab="gec">GEC-限流器</div>
                    <div class="lo-cfg-tab-h" data-tab="neptune">Neptune</div>
                </div>
                <div class="lo-cfg-tab-panel" data-panel="gec">
                    ${gecPanelHtml}
                </div>
                <div class="lo-cfg-tab-panel hidden" data-panel="neptune">
                    ${neptuneTable}
                </div>
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
        keyCands2.forEach((c, i) => {
            const scene = sceneCands[i % sceneCands.length];
            const vdc = vdcCands[i % vdcCands.length];
            const name = `${scene} · ${vdc} · ${c.key}`;
            const peak = c.mul == null ? primaryPeak : baseLimit * c.mul;
            list.push({ name, limit: baseLimit, peak });
        });
    } else {
        // 接口限流：name 形如「上游PSM › 上游集群 › 服务PSM › 服务集群 › 服务接口」
        const upPsm = node.upstream || 'toutiao.upstream';
        const upClusters = ['default', 'cluster-up', 'gray'];
        const svcClusters = ['default', 'cluster-c', 'cluster-01'];
        const primaryName = node.invokeMethod || (node.psm + '/default');
        const buildPath = (upC, svcC, m) => `${upPsm} › ${upC} › ${node.psm} › ${svcC} › ${m}`;
        list.push({ name: buildPath(upClusters[0], svcClusters[0], primaryName), limit: baseLimit, peak: primaryPeak });
        const svc = node.psm.split('.').slice(-1)[0] || 'svc';
        ifaceCandidates.forEach((c, i) => {
            const m = svc + '.' + c.suffix;
            const upC = upClusters[i % upClusters.length];
            const svcC = svcClusters[i % svcClusters.length];
            list.push({ name: buildPath(upC, svcC, m), limit: baseLimit, peak: baseLimit * c.mul });
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
    // 接口限流：基于节点自身（无论 limitMode 是什么）渲染一个接口限流 chart
    const ifaceNode = { ...node, limitMode: 'iface' };
    const keyNode = { ...node, limitMode: 'key' };
    const ifaceChart = buildLoNodeQpsChart(ifaceNode);
    const keyChart = isInterfaceLevel ? '' : buildLoNodeQpsChart(keyNode);

    // 默认激活 Tab：节点 limitMode 为 key 且非接口级别 → key；其它 → iface
    const defaultTab = (!isInterfaceLevel && node.limitMode === 'key') ? 'key' : 'iface';

    const tabsHtml = `
        <div class="lo-rule-tabs">
            <div class="lo-rule-tab ${defaultTab === 'iface' ? 'active' : ''}" data-rule-tab="iface">接口限流</div>
            ${isInterfaceLevel ? '' : `
            <div class="lo-rule-tab ${defaultTab === 'key' ? 'active' : ''}" data-rule-tab="key">自定义 Key 限流</div>`}
        </div>
    `;

    return `
        <div class="lo-rule-tabbed" data-active-tab="${defaultTab}">
            ${tabsHtml}
            <div class="lo-rule-pane ${defaultTab === 'iface' ? '' : 'hidden'}" data-pane="iface">${ifaceChart}</div>
            ${isInterfaceLevel
                ? ''
                : `<div class="lo-rule-pane ${defaultTab === 'key' ? '' : 'hidden'}" data-pane="key">${keyChart}</div>`
            }
        </div>
    `;
}

function buildLoNodeQpsChart(node) {
    const W = 560, H = 220;
    const padL = 44, padR = 24, padT = 16, padB = 28;
    const innerW = W - padL - padR;
    const innerH = H - padT - padB;

    const isKeyMode = node.limitMode === 'key';
    const limitTypeText = isKeyMode ? '自定义 key 限流' : '接口限流';
    const dimText = isKeyMode ? 'key' : '接口';

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
            color: LO_LINE_COLORS[i % LO_LINE_COLORS.length],
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
                        limitType: limitTypeText,
                        limitValue: line.limit,
                        waterLevel: 0.8,
                        trafficValue: peakPt.v,        // 快照：峰值流量
                        triggerTime: startPt.ts,       // 快照：首次越线时间
                        duration: dur,
                        ticketId: ticketId,
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
                        limitType: limitTypeText,
                        limitValue: line.limit,
                        waterLevel: 0.8,
                        trafficValue: peakPt.v,        // 快照：预警期内峰值流量
                        triggerTime: startPt.ts,       // 快照：首次进入预警区时间
                        duration: dur,
                        _matchTs: p.ts                 // 仅用于 ±2min 匹配
                    });
                });
            }
        }
    });

    // 整个图表区域捕获鼠标位置，依据 X 位置展示选中接口的对比 tooltip
    const hitOverlay = `<rect class="lo-qps-hit" x="${padL}" y="${padT}" width="${innerW}" height="${innerH}" fill="transparent" style="cursor:crosshair" onmousemove="handleLoQpsMove(event)" onmouseleave="hideLoQpsTip()"/>`;

    // 序列化以便客户端渲染
    const linesAttr = encodeURIComponent(JSON.stringify(allLines));
    const ifacesAttr = encodeURIComponent(JSON.stringify(ifaces));
    const selectedAttr = encodeURIComponent(JSON.stringify(defaultSelected));
    const eventsAttr = encodeURIComponent(JSON.stringify(events));

    // 顶部可搜索单选下拉
    const searchPlaceholder = isKeyMode
        ? '自定义 key 限流规则：限流场景/VDC/自定义 key'
        : '接口限流规则：上游 psm/上游集群/服务 psm/服务集群/服务接口';
    // 状态快筛 chip 计数
    const statCount = ifaces.reduce((acc, f) => { acc[f.status] = (acc[f.status] || 0) + 1; return acc; }, {});
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
             data-limit-mode="${isKeyMode ? 'key' : 'iface'}"
             data-limit-type="${limitTypeText}"
             data-dim="${dimText}"
             data-y-axis="${encodeURIComponent(yAxisHtml)}"
             data-x-axis="${encodeURIComponent(xAxisHtml)}"
             data-limit-line="${encodeURIComponent(limitLine)}"
             data-water-line="${encodeURIComponent(waterLine)}"
             data-hit="${encodeURIComponent(hitOverlay)}"
             data-w="${W}" data-h="${H}"
             onmouseleave="hideLoQpsTip()">
            <div class="lo-qps-chart-header">
                ${dropdownHtml}
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
    const xAxisHtml = decodeURIComponent(wrap.getAttribute('data-x-axis') || '');
    const limitLine = decodeURIComponent(wrap.getAttribute('data-limit-line') || '');
    const waterLine = decodeURIComponent(wrap.getAttribute('data-water-line') || '');
    const hitOverlay = decodeURIComponent(wrap.getAttribute('data-hit') || '');

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
                return `
                    <span class="lo-iface-tag lo-iface-tag-single" data-fullname="${name}">
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
    showLoQpsTip(evt, selLines, idx, limitVal, waterVal, region, yQps);
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
function showLoQpsTip(evt, selLines, idx, limitVal, waterVal, region, yQps) {
    if (!evt) return;
    const wrap = evt.currentTarget && evt.currentTarget.closest ? evt.currentTarget.closest('.lo-qps-chart-wrap') : null;
    if (!wrap) return;
    const tip = wrap.querySelector('.lo-qps-tip');
    if (!tip || !Array.isArray(selLines) || selLines.length === 0) return;
    const fmtVal = (v) => v >= 1000 ? (v / 1000).toFixed(2) + 'k' : v.toFixed(0);
    const fmtUnit = (v) => fmtVal(v) + ' req/s';
    const time = (selLines[0].pts[idx] && selLines[0].pts[idx].time) || '-';
    const curTs = (selLines[0].pts[idx] && selLines[0].pts[idx].ts) || 0;
    const dim = wrap.getAttribute('data-dim') || '接口';

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

    // 多线对比行（始终展示）
    const rowsHtml = selLines.map(l => {
        const p = l.pts[idx];
        if (!p) return '';
        let kind = '';
        if (p.v >= limitVal) kind = 'limit';
        else if (p.v >= waterVal) kind = 'warn';
        const kindBadge = kind === 'limit'
            ? '<span class="lo-qps-tip-kind lo-qps-tip-kind-limit">限流</span>'
            : kind === 'warn'
                ? '<span class="lo-qps-tip-kind lo-qps-tip-kind-warn">预警</span>'
                : '';
        return `
            <div class="lo-qps-tip-line">
                <span class="lo-qps-tip-color" style="background:${l.color}"></span>
                <span class="lo-qps-tip-name" title="${l.name}">${l.name}</span>
                <span class="lo-qps-tip-val">${fmtVal(p.v)}</span>
                ${kindBadge}
            </div>
        `;
    }).join('');

    // 卡片渲染（基于鼠标 Y 区域）
    let cardHtml = '';
    if (region === 'limit') {
        // 区域 A：限流卡片（仅当 ±2min 内有匹配事件时展示）
        const ev = matchEvent('limit');
        if (ev) {
            cardHtml = `
                <div class="lo-qps-tip-card lo-qps-tip-card-limit">
                    <div class="lo-qps-tip-card-title"><span class="lo-qps-tip-dot lo-qps-tip-dot-limit"></span>限流事件</div>
                    <div class="lo-qps-tip-card-row"><span class="lo-qps-tip-card-k">限流${dim}</span><span class="lo-qps-tip-card-v" title="${ev.apiName}">${ev.apiName}</span></div>
                    <div class="lo-qps-tip-card-row"><span class="lo-qps-tip-card-k">限流类型</span><span class="lo-qps-tip-card-v">${ev.limitType}</span></div>
                    <div class="lo-qps-tip-card-row"><span class="lo-qps-tip-card-k">限流值</span><span class="lo-qps-tip-card-v">${fmtUnit(ev.limitValue)}</span></div>
                    <div class="lo-qps-tip-card-row"><span class="lo-qps-tip-card-k">流量值</span><span class="lo-qps-tip-card-v">${fmtUnit(ev.trafficValue)}</span></div>
                    <div class="lo-qps-tip-card-row"><span class="lo-qps-tip-card-k">触发时间</span><span class="lo-qps-tip-card-v">${fmtTs(ev.triggerTime)}</span></div>
                    <div class="lo-qps-tip-card-row"><span class="lo-qps-tip-card-k">持续时长</span><span class="lo-qps-tip-card-v">${fmtDuration(ev.duration)}</span></div>
                </div>
            `;
        }
    } else if (region === 'warn') {
        // 区域 B：预警卡片
        const ev = matchEvent('warning');
        if (ev) {
            const waterPct = Math.round(ev.waterLevel * 100) + '%';
            cardHtml = `
                <div class="lo-qps-tip-card lo-qps-tip-card-warn">
                    <div class="lo-qps-tip-card-title"><span class="lo-qps-tip-dot lo-qps-tip-dot-warn"></span>预警事件</div>
                    <div class="lo-qps-tip-card-row"><span class="lo-qps-tip-card-k">限流${dim}</span><span class="lo-qps-tip-card-v" title="${ev.apiName}">${ev.apiName}</span></div>
                    <div class="lo-qps-tip-card-row"><span class="lo-qps-tip-card-k">限流类型</span><span class="lo-qps-tip-card-v">${ev.limitType}</span></div>
                    <div class="lo-qps-tip-card-row"><span class="lo-qps-tip-card-k">限流值</span><span class="lo-qps-tip-card-v">${fmtUnit(ev.limitValue)}</span></div>
                    <div class="lo-qps-tip-card-row"><span class="lo-qps-tip-card-k">预警水位</span><span class="lo-qps-tip-card-v">${waterPct}</span></div>
                    <div class="lo-qps-tip-card-row"><span class="lo-qps-tip-card-k">流量值</span><span class="lo-qps-tip-card-v">${fmtUnit(ev.trafficValue)}</span></div>
                    <div class="lo-qps-tip-card-row"><span class="lo-qps-tip-card-k">触发时间</span><span class="lo-qps-tip-card-v">${fmtTs(ev.triggerTime)}</span></div>
                    <div class="lo-qps-tip-card-row"><span class="lo-qps-tip-card-k">持续时长</span><span class="lo-qps-tip-card-v">${fmtDuration(ev.duration)}</span></div>
                </div>
            `;
        }
    }

    // 区域 C：在预警水位线以下追加余量百分比（基于鼠标 Y 处的 yQps，若未传入则用关键线 v）
    let footerHtml = '';
    if (region === 'normal') {
        let refV = (typeof yQps === 'number' && yQps > 0) ? yQps : 0;
        if (!refV) {
            selLines.forEach(l => { const p = l.pts[idx]; if (p && p.v > refV) refV = p.v; });
        }
        const remainPct = Math.max(0, ((waterVal - refV) / waterVal) * 100);
        footerHtml = `<div class="lo-qps-tip-footer">距离预警水位余量 ${remainPct.toFixed(1)}%</div>`;
    }

    tip.innerHTML = `
        <div class="lo-qps-tip-title">${time}</div>
        ${rowsHtml}
        ${footerHtml}
        ${cardHtml}
    `;
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
    document.querySelectorAll('.lo-qps-tip').forEach(t => t.classList.add('hidden'));
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
    ['loEntry', 'loVDC', 'loCluster', 'loTimeRange', 'loDepType', 'loPriority', 'loSvcType', 'loUpLevel', 'loDownLevel'].forEach(k => {
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
    const ids = ['loEntry', 'loVDC', 'loCluster', 'loTimeRange', 'loDepType', 'loPriority', 'loSvcType', 'loUpLevel', 'loDownLevel'];
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
     'loSvcType', 'loUpLevel', 'loDownLevel'].forEach(id => {
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
    const fields = ['loEntry', 'loVDC', 'loCluster', 'loTimeRange', 'loDepType', 'loPriority', 'loSvcType', 'loUpLevel', 'loDownLevel'];
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