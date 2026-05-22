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
    
    if (pageName === 'limiter') {
        document.querySelector('[data-page="limiter"]').classList.add('active');
        document.getElementById('limiterPage').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = '限流管理';
        document.getElementById('pageDesc').textContent = '';
        if (pageHeaderActions) pageHeaderActions.classList.remove('show');
    } else if (pageName === 'link-observation') {
        document.querySelector('[data-page="link-observation"]').classList.add('active');
        document.getElementById('linkObservationPage').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = '链路观测';
        document.getElementById('pageDesc').textContent = '';
        if (pageHeaderActions) pageHeaderActions.classList.add('show');
        renderObservationTable();
        // 每次进入链路观测页时强制重置为空态
        if (typeof restoreLoFilterDraft === 'function') restoreLoFilterDraft();
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
    $on('btnCreateLink', 'click', () => openModal('create'));
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
    $on('btnHistoryConfig', 'click', openHistoryConfigDrawer);
    $on('btnSaveAsConfig', 'click', () => {
        const name = prompt('请输入新配置名称：', '新配置 ' + new Date().toLocaleString());
        if (!name) return;
        saveLoConfigAsNew(name);
        showToast(`已另存为「${name}」`);
    });
    $on('btnSaveConfig', 'click', () => {
        const ok = saveLoConfig();
        showToast(ok === 'updated' ? '已更新当前配置' : '配置已保存');
    });
    $on('historyConfigClose', 'click', closeHistoryConfigDrawer);
    $on('historyConfigMask', 'click', closeHistoryConfigDrawer);
    bindHcBulkHandlers();

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

    // New Link Observation page bindings
    $on('loTabTopology', 'click', () => switchLoView('topology'));
    $on('loTabList', 'click', () => switchLoView('list'));
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
            'promotion.points_business'
        ],
        loVDC: () => ['maliva', 'useast', 'boe', 'lf', 'hl', 'sg-central', 'us-east'],
        loCluster: () => ['default', 'cluster-01', 'cluster-02', 'cluster-03', 'gray', 'canary'],
        loDepType: () => ['强依赖/业务强依赖', '弱依赖', '未定义/无法判断'],
        loPriority: () => ['P0', 'P1', 'P2'],
        loSvcType: () => ['HTTP', 'RPC']
    };

    document.querySelectorAll('.searchable-select').forEach(wrapper => {
        const field = wrapper.dataset.field;
        const input = wrapper.querySelector('.searchable-input');
        const dropdown = wrapper.querySelector('.searchable-dropdown');

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
        downstream: 'alarm / argos_monitor_data / facade-api-i18n'
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
            downstream: '-'
        },
        {
            psm: 'toutiao.microservice.alarm',
            status: 'error',
            abnormalTraffic: true,
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
            ticketEvent: { time: '2026-05-19 14:25:42', data: '工单 #INC-20260519-882：alarm 服务接口响应延迟异常，关联告警 5 条' }
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
            warnEvent: { time: '2026-05-19 13:48:11', data: '调用成功率 99.8%（阈值 99.9%），触发预警' }
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
            <text x="${w / 2}" y="${h / 2 - 6}" text-anchor="middle" fill="#bfbfbf" font-size="14">请先配置筛选条件</text>
            <text x="${w / 2}" y="${h / 2 + 18}" text-anchor="middle" fill="#bfbfbf" font-size="13">点击「生成结果」查看链路拓扑</text>
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

    // Edges (curved)
    loTopologyData.downstream.forEach((node, i) => {
        const ny = downStartY + i * downGap;
        const c1x = (targetX + downX) / 2;
        const path = `M ${targetX + 90} ${targetY} C ${c1x} ${targetY}, ${c1x} ${ny}, ${downX - 4} ${ny}`;
        const stroke = node.status === 'error' ? '#ff4d4f' : (node.status === 'warn' ? '#fa8c16' : '#ffa39e');
        html += `<path class="lo-edge" data-from="${loTopologyData.target.psm}" data-to="${node.psm}" d="${path}" fill="none" stroke="${stroke}" stroke-width="1.5" opacity="0.85"/>`;
        html += `<circle cx="${downX - 4}" cy="${ny}" r="3" fill="${stroke}"/>`;
        const labelX = (targetX + 90 + downX) / 2;
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
        // hover 高亮关联边
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
        });
        el.addEventListener('mouseleave', () => {
            svg.querySelectorAll('.lo-edge').forEach(p => {
                p.setAttribute('stroke-width', '1.5');
                p.setAttribute('opacity', '0.85');
            });
        });
    });

    // 更新节点计数
    const cnt = document.getElementById('loCanvasCount');
    if (cnt) cnt.textContent = String(1 + loTopologyData.downstream.length);

    // 更新告警筛选条 + 一次性绑定 chips
    updateLoAlertBar();
    bindLoAlertBarChips();
    bindLoCanvasMetricFilter();
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

    // 计算上下两行各自所需宽度
    const psmRowW = Math.max(140, label.length * 7 + 50);
    const ifaceRowW = showIface ? Math.max(140, ifaceText.length * 7 + 36) : 0;
    const baseTextW = Math.max(psmRowW, ifaceRowW);
    const hasAbn = !!node.abnormalTraffic;
    const tagW = 56;
    const tagGap = 6;
    const rectW = hasAbn ? (baseTextW + tagW + tagGap + 6) : baseTextW;

    // 节点高度：双行 56，单行 30
    const rectH = showIface ? 56 : 30;
    const rectX = x;
    const rectY = y - rectH / 2;
    const psmRowY = showIface ? rectY : rectY; // 第一行顶部
    const psmRowH = showIface ? 28 : rectH;
    // 第一行（psm）的中心 y
    const psmCenterY = psmRowY + psmRowH / 2;
    // 第二行（method）的中心 y
    const ifaceRowY = psmRowY + psmRowH;
    const ifaceRowH = 28;
    const ifaceCenterY = ifaceRowY + ifaceRowH / 2;

    // alertFilter 命中判定
    const filter = loCanvasState.alertFilter || 'all';
    let matched = true;
    if (!isTarget && filter !== 'all') {
        if (filter === 'error') matched = (status === 'error');
        else if (filter === 'warn') matched = (status === 'warn');
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

    let abnTagSvg = '';
    if (hasAbn) {
        const tagX = rectX + rectW - tagW - 6;
        const tagY = psmCenterY - 8;
        abnTagSvg = `
            <rect x="${tagX}" y="${tagY}" width="${tagW}" height="16" rx="3" fill="#722ed1"/>
            <text x="${tagX + tagW / 2}" y="${tagY + 12}" text-anchor="middle" fill="#fff" font-size="11">异常流量</text>
        `;
    }

    // 接口行：浅灰底 + 黑字
    let ifaceRowSvg = '';
    if (showIface) {
        ifaceRowSvg = `
            <rect x="${rectX}" y="${ifaceRowY}" width="${rectW}" height="${ifaceRowH}" fill="#f5f5f5" stroke="${color.stroke}" stroke-width="${strokeW}" rx="0" ry="0"/>
            <text x="${rectX + 12}" y="${ifaceCenterY + 4}" fill="#1d1f23" font-size="12">${ifaceText}</text>
        `;
    }

    return `
        <g data-psm="${label}" opacity="${groupOpacity}">
            <rect x="${rectX}" y="${psmRowY}" width="${rectW}" height="${psmRowH}" fill="${color.rect}" stroke="${color.stroke}" stroke-width="${strokeW}" rx="4" ry="4"/>
            ${ifaceRowSvg}
            <circle cx="${rectX + 16}" cy="${psmCenterY}" r="6" fill="${color.dot}"/>
            <text x="${rectX + 30}" y="${psmCenterY + 4}" fill="${color.text}" font-size="12">${label}</text>
            ${abnTagSvg}
        </g>
    `;
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
            loCanvasState.alertFilter = chip.getAttribute('data-filter') || 'all';
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
        const qpsOp = document.getElementById('loCanvasQpsOp')?.value || 'gte';
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
    setText('loLegendCntNormal', normal);
    setText('loLegendCntError', err);
    setText('loLegendCntWarn', warn);
    setText('loLegendCntAbnormal', abnormal);
    const hasAlert = (err + warn + abnormal) > 0;
    const panel = document.getElementById('loAlertFilterPanel');
    if (panel) {
        if (hasAlert) panel.classList.remove('hidden');
        else panel.classList.add('hidden');
    }
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
        return `
        <tr>
            <td>${callerSvc}</td>
            <td>${callerCluster}</td>
            <td>${n.psm}</td>
            <td>${n.cluster || '-'}</td>
            <td>${n.invokeMethod || '-'}</td>
            <td>${info.limitVal}</td>
            <td>${info.limitType}</td>
            <td>${info.limitMode}</td>
            <td>${n.peakQps || '-'}</td>
            <td>${n.currentQps || '-'}</td>
            <td>${n.p99 || '-'}</td>
            <td>${n.cpu || '-'}</td>
        </tr>
    `; }).join('') || `<tr><td colspan="12" style="text-align:center;color:#999;padding:24px">暂无匹配数据</td></tr>`;
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

    // 基础信息（两列）
    const baseHtml = `
        <div class="lo-detail-section">
            <div class="lo-detail-section-title">基本信息${badgeHtml ? ' ' + badgeHtml : ''}</div>
            <div class="lo-base-grid">
                <div class="lo-base-item"><span class="lo-base-label">链路入口</span><span class="lo-base-value">${node.psm}</span></div>
                <div class="lo-base-item"><span class="lo-base-label">VDC</span><span class="lo-base-value">${node.vdc}</span></div>
                <div class="lo-base-item"><span class="lo-base-label">集群</span><span class="lo-base-value">${node.cluster}</span></div>
                <div class="lo-base-item"><span class="lo-base-label">优先级</span><span class="lo-base-value">${(node.limitConfig || '').match(/P\d/) ? (node.limitConfig.match(/P\d[^，,]*/) || ['P1'])[0] : 'P1'}</span></div>
            </div>
        </div>
    `;

    // 上游接口信息（伪数据示例：调用方）
    const upstreamRows = [
        { svc: node.upstream || '-', cluster: 'cluster-up', method: 'invoke', max: node.peakQps || '-', avg: node.currentQps || '-', p99: node.p99 || '-', cpu: node.cpu || '-' }
    ];
    const upstreamHtml = `
        <div class="lo-detail-section">
            <div class="lo-detail-section-title">上游接口信息</div>
            <table class="data-table lo-iface-table">
                <thead><tr>
                    <th>调用方服务</th><th>调用方集群</th><th>调用方方法</th>
                    <th>流量 Max</th><th>流量 Avg</th><th>流量 P99</th><th>CPU 利用率</th>
                </tr></thead>
                <tbody>
                    ${upstreamRows.map(r => `<tr><td>${r.svc}</td><td>${r.cluster}</td><td>${r.method}</td><td>${r.max}</td><td>${r.avg}</td><td>${r.p99}</td><td>${r.cpu}</td></tr>`).join('')}
                </tbody>
            </table>
        </div>
    `;

    // 下游接口信息
    const downstreamRows = [
        { svc: node.downstream || '-', cluster: 'cluster-dn', method: node.invokeMethod || '-', max: node.peakQps || '-', avg: node.currentQps || '-', p99: node.p99 || '-', cpu: node.cpu || '-' }
    ];
    const downstreamHtml = `
        <div class="lo-detail-section">
            <div class="lo-detail-section-title">下游接口信息</div>
            <table class="data-table lo-iface-table">
                <thead><tr>
                    <th>被调用方服务</th><th>被调用方集群</th><th>被调用方方法</th>
                    <th>流量 Max</th><th>流量 Avg</th><th>流量 P99</th><th>CPU 利用率</th>
                </tr></thead>
                <tbody>
                    ${downstreamRows.map(r => `<tr><td>${r.svc}</td><td>${r.cluster}</td><td>${r.method}</td><td>${r.max}</td><td>${r.avg}</td><td>${r.p99}</td><td>${r.cpu}</td></tr>`).join('')}
                </tbody>
            </table>
        </div>
    `;

    // 告警事件区块（无论节点是否异常都展示，正常节点仅表格为空）
    let alertHtml = '';
    {
        const qpsChartHtml = buildLoNodeQpsChart(node);
        // 限流表
        const limitRows = node.limitEvent
            ? [{ iface: node.invokeMethod || '-', type: 'QPS 限流', limit: node.threshold || '-', traffic: node.peakQps || '-', time: node.limitEvent.time }]
            : [];
        const limitTable = `
            <div class="lo-alert-sub-title">限流</div>
            <table class="data-table lo-iface-table">
                <thead><tr><th>限流接口</th><th>限流类型</th><th>限流值</th><th>流量值</th><th>触发时间</th></tr></thead>
                <tbody>
                    ${limitRows.length
                        ? limitRows.map(r => `<tr><td>${r.iface}</td><td>${r.type}</td><td>${r.limit}</td><td>${r.traffic}</td><td>${r.time}</td></tr>`).join('')
                        : `<tr><td colspan="5" style="text-align:center;color:#999">暂无数据</td></tr>`}
                </tbody>
            </table>
        `;

        // 预警表
        const warnRows = node.warnEvent
            ? [{ iface: node.invokeMethod || '-', type: '指标预警', limit: node.threshold || '-', water: parseLoThresholdWaterText(node.threshold), time: node.warnEvent.time }]
            : [];
        const warnTable = `
            <div class="lo-alert-sub-title">预警</div>
            <table class="data-table lo-iface-table">
                <thead><tr><th>限流接口</th><th>限流类型</th><th>限流值</th><th>预警水位</th><th>触发时间</th></tr></thead>
                <tbody>
                    ${warnRows.length
                        ? warnRows.map(r => `<tr><td>${r.iface}</td><td>${r.type}</td><td>${r.limit}</td><td>${r.water}</td><td>${r.time}</td></tr>`).join('')
                        : `<tr><td colspan="5" style="text-align:center;color:#999">暂无数据</td></tr>`}
                </tbody>
            </table>
        `;

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
                        ? abnRows.map(r => `<tr><td>${r.iface}</td><td>${r.type}</td><td>${r.limit}</td><td>${r.traffic}</td><td>${r.time}</td><td>${r.ticket}</td></tr>`).join('')
                        : `<tr><td colspan="6" style="text-align:center;color:#999">暂无数据</td></tr>`}
                </tbody>
            </table>
        `;

        // 限流配置表：展示 PSM 下的五元组（上游psm/上游集群/服务psm/服务集群/服务接口）
        const svcPsm = node.psm;
        const svcCluster = node.cluster || '-';
        const svcIface = node.invokeMethod || '-';
        // 多条限流配置：默认提供"全部上游"通配 + 已知具体上游条目
        const cfgRows = [
            {
                upPsm: '*',
                upCluster: '*',
                svcPsm,
                svcCluster,
                svcIface,
                type: 'QPS 限流',
                limit: node.threshold || '-',
                cpu: node.cpu || '-'
            }
        ];
        // 若节点有具体上游链路（target 节点的上游或下游节点的 target），追加一条具体五元组
        if (node !== loTopologyData.target) {
            cfgRows.unshift({
                upPsm: loTopologyData.target.psm,
                upCluster: loTopologyData.target.cluster || 'default',
                svcPsm,
                svcCluster,
                svcIface,
                type: 'QPS 限流',
                limit: node.threshold || '-',
                cpu: node.cpu || '-'
            });
        }
        const cfgTable = `
            <div class="lo-alert-sub-title">限流配置</div>
            <table class="data-table lo-iface-table">
                <thead><tr><th>上游 psm</th><th>上游集群</th><th>服务 psm</th><th>服务集群</th><th>服务接口</th><th>限流类型</th><th>限流值</th><th>CPU 利用率</th><th>操作</th></tr></thead>
                <tbody>
                    ${cfgRows.map(r => `<tr>
                        <td>${r.upPsm}</td>
                        <td>${r.upCluster}</td>
                        <td>${r.svcPsm}</td>
                        <td>${r.svcCluster}</td>
                        <td>${r.svcIface}</td>
                        <td>${r.type}</td>
                        <td>${r.limit}</td>
                        <td>${r.cpu}</td>
                        <td><a class="lo-config-action" href="#" data-psm="${node.psm}">编辑</a></td>
                    </tr>`).join('')}
                </tbody>
            </table>
        `;

        alertHtml = `
            <div class="lo-detail-section">
                <div class="lo-detail-section-title">告警事件</div>
                ${qpsChartHtml}
                ${limitTable}
                ${warnTable}
                ${abnTable}
                ${cfgTable}
            </div>
        `;
    }

    bodyEl.innerHTML = baseHtml + upstreamHtml + downstreamHtml + alertHtml;

    // 事件代理：编辑跳转到限流器页
    if (!bodyEl._loConfigBound) {
        bodyEl.addEventListener('click', (e) => {
            const a = e.target.closest('.lo-config-action');
            if (a) {
                e.preventDefault();
                closeLoNodeDrawer();
                if (typeof switchPage === 'function') switchPage('limiter');
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

// 构建 QPS 趋势图 SVG（含点击放大 wrap）
function buildLoNodeQpsChart(node) {
    const W = 560, H = 220;
    const padL = 44, padR = 24, padT = 16, padB = 28;
    const innerW = W - padL - padR;
    const innerH = H - padT - padB;

    const limit = parseLoThresholdNumber(node.threshold) || 100;
    const water = limit * 0.8;
    const peak = parseLoThresholdNumber(node.peakQps) || limit * 1.1;
    const yMax = Math.max(limit * 1.4, peak * 1.05);

    // 7 个 tick 时间
    const now = new Date();
    const ticks = [];
    for (let i = 6; i >= 0; i--) {
        const t = new Date(now.getTime() - i * 5 * 60 * 1000);
        const hh = String(t.getHours()).padStart(2, '0');
        const mm = String(t.getMinutes()).padStart(2, '0');
        ticks.push(`${hh}:${mm}`);
    }

    // 折线点
    const N = 28;
    const pts = [];
    for (let i = 0; i < N; i++) {
        const ratio = i / (N - 1);
        // 一个起伏的曲线
        const base = peak * 0.45 + Math.sin(ratio * Math.PI * 2) * peak * 0.18 + Math.cos(ratio * Math.PI * 3) * peak * 0.08;
        // error 节点峰值
        let v = base;
        if (node.status === 'error' && i > N * 0.55 && i < N * 0.78) v = peak * (0.95 + Math.sin((i - N * 0.55) * 0.6) * 0.05);
        if (v < 0) v = 0;
        const x = padL + (i / (N - 1)) * innerW;
        const y = padT + innerH - (v / yMax) * innerH;
        pts.push({ x, y, v });
    }
    const polyline = pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
    const areaD = `M ${padL} ${padT + innerH} L ${pts.map(p => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' L ')} L ${padL + innerW} ${padT + innerH} Z`;

    // Y 轴 5 个 tick
    let yAxisHtml = '';
    for (let i = 0; i < 5; i++) {
        const ratio = i / 4;
        const yy = padT + innerH - ratio * innerH;
        const val = (yMax * ratio);
        const valLabel = val >= 1000 ? (val / 1000).toFixed(1) + 'k' : val.toFixed(0);
        yAxisHtml += `<line x1="${padL}" y1="${yy}" x2="${padL + innerW}" y2="${yy}" stroke="#f0f0f0" stroke-width="1"/>`;
        yAxisHtml += `<text x="${padL - 6}" y="${yy + 3}" text-anchor="end" font-size="10" fill="#999">${valLabel}</text>`;
    }

    // X 轴 tick
    let xAxisHtml = '';
    ticks.forEach((label, i) => {
        const xx = padL + (i / (ticks.length - 1)) * innerW;
        xAxisHtml += `<text x="${xx}" y="${padT + innerH + 16}" text-anchor="middle" font-size="10" fill="#999">${label}</text>`;
    });

    // 限流值（红线，y 上方）
    const yLimit = padT + innerH - (limit / yMax) * innerH;
    // 预警水位（橙线，y 下方）
    const yWater = padT + innerH - (water / yMax) * innerH;
    const limitLine = `
        <line x1="${padL}" y1="${yLimit}" x2="${padL + innerW}" y2="${yLimit}" stroke="#ff4d4f" stroke-width="1.2" stroke-dasharray="6 4"/>
        <text x="${padL + innerW - 4}" y="${yLimit - 6}" text-anchor="end" font-size="11" fill="#ff4d4f">限流值 ${limit >= 1000 ? (limit / 1000).toFixed(1) + 'k' : limit}</text>
    `;
    const waterLine = `
        <line x1="${padL}" y1="${yWater}" x2="${padL + innerW}" y2="${yWater}" stroke="#fa8c16" stroke-width="1.2" stroke-dasharray="6 4"/>
        <text x="${padL + innerW - 4}" y="${yWater + 14}" text-anchor="end" font-size="11" fill="#fa8c16">预警水位 ${water >= 1000 ? (water / 1000).toFixed(1) + 'k' : water.toFixed(0)}</text>
    `;

    // error 节点：3 个紫色异常流量圆点（峰值附近）
    let abnPoints = '';
    if (node.status === 'error') {
        let peakIdx = 0; let peakV = -1;
        pts.forEach((p, i) => { if (p.v > peakV) { peakV = p.v; peakIdx = i; } });
        const idxList = [Math.max(0, peakIdx - 2), peakIdx, Math.min(pts.length - 1, peakIdx + 2)];
        abnPoints = idxList.map(i => `<circle cx="${pts[i].x}" cy="${pts[i].y}" r="4" fill="#722ed1" stroke="#fff" stroke-width="1.5"/>`).join('');
    }

    const svg = `
<svg class="lo-qps-chart" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="loQpsArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#13a8a8" stop-opacity="0.25"/>
            <stop offset="100%" stop-color="#13a8a8" stop-opacity="0.02"/>
        </linearGradient>
    </defs>
    ${yAxisHtml}
    ${xAxisHtml}
    <path d="${areaD}" fill="url(#loQpsArea)" stroke="none"/>
    <polyline points="${polyline}" fill="none" stroke="#1890ff" stroke-width="1.6"/>
    ${waterLine}
    ${limitLine}
    ${abnPoints}
</svg>
    `;

    return `
        <div class="lo-qps-chart-wrap" onclick="openLoImageLightbox(this.querySelector('svg').outerHTML)">
            <div class="lo-qps-chart-header">
                <span class="lo-qps-chart-title">QPS</span>
                <span class="lo-qps-chart-legend">
                    <span class="lo-qps-legend-item"><span class="lo-qps-legend-dash" style="background:#fa8c16"></span>预警水位</span>
                    <span class="lo-qps-legend-item"><span class="lo-qps-legend-dash" style="background:#ff4d4f"></span>限流值</span>
                    <span class="lo-qps-legend-item"><span class="lo-qps-legend-dot" style="background:#722ed1"></span>异常流量</span>
                </span>
            </div>
            ${svg}
        </div>
    `;
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
        if (el) el.value = 'gte';
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