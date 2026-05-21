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
    $on('btnImportConfig', 'click', () => showToast('导入配置功能开发中'));
    bindHcBulkHandlers();
    bindHcConfirmHandlers();
    $on('btnExportAll', 'click', () => showToast('已导出全部配置'));

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
        // 强制隐藏红点（防御：避免 classList 切换被其它逻辑覆盖）
        const dot = document.getElementById('loGenerateDot');
        if (dot) dot.classList.add('hidden');
        updateLoGenerateDot();
        renderLoTopology();
        renderLoList();
        showLoStatus('已是最新配置', 'success');
        persistLoFilterDraft();
        showToast('已生成结果');
    });
    $on('loListSearchBtn', 'click', () => {
        loListSearchState = {
            callerSvc: document.getElementById('loListCallerSvc')?.value || '',
            callerCluster: document.getElementById('loListCallerCluster')?.value || '',
            calleeSvc: document.getElementById('loListCalleeSvc')?.value || '',
            calleeCluster: document.getElementById('loListCalleeCluster')?.value || '',
            calleeMethod: document.getElementById('loListCalleeMethod')?.value || ''
        };
        renderLoList();
    });
    $on('loListReset', 'click', () => {
        ['loListCallerSvc', 'loListCallerCluster', 'loListCalleeSvc', 'loListCalleeCluster', 'loListCalleeMethod'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
        });
        loListSearchState = { callerSvc: '', callerCluster: '', calleeSvc: '', calleeCluster: '', calleeMethod: '' };
        renderLoList();
    });
    $on('loListExportBtn', 'click', (e) => {
        e.stopPropagation();
        document.getElementById('loListExportMenu')?.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
        const wrap = document.getElementById('loListExportBtn')?.parentElement;
        if (wrap && !wrap.contains(e.target)) {
            document.getElementById('loListExportMenu')?.classList.add('hidden');
        }
    });
    document.querySelectorAll('#loListExportMenu .lo-list-export-item').forEach(item => {
        item.addEventListener('click', () => {
            const type = item.dataset.type;
            document.getElementById('loListExportMenu')?.classList.add('hidden');
            exportLoList(type);
        });
    });
    $on('loTopoFilterSearch', 'click', () => {
        loTopoFilterState = {
            qpsOp: 'gte',
            qpsVal: document.getElementById('loTopoQpsVal')?.value || '',
            cpuOp: 'gte',
            cpuVal: document.getElementById('loTopoCpuVal')?.value || ''
        };
        renderLoTopology();
    });
    $on('loTopoFilterReset', 'click', () => {
        ['loTopoQpsVal', 'loTopoCpuVal'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
        });
        loTopoFilterState = { qpsOp: 'gte', qpsVal: '', cpuOp: 'gte', cpuVal: '' };
        renderLoTopology();
    });
    $on('loNodeDrawerClose', 'click', closeLoNodeDrawer);
    $on('loNodeDrawerMask', 'click', closeLoNodeDrawer);
    $on('loEdgeDrawerClose', 'click', closeLoEdgeDrawer);
    $on('loEdgeDrawerMask', 'click', closeLoEdgeDrawer);
    $on('loStatusClose', 'click', hideLoStatus);

    // 拓扑画布工具栏
    $on('loCanvasLocate', 'click', toggleLoLocatePanel);
    $on('loCanvasExport', 'click', exportLoCanvas);
    $on('loCanvasZoomIn', 'click', () => { loCanvasState.zoom = Math.min(2, loCanvasState.zoom + 0.2); renderLoTopology(); });
    $on('loCanvasZoomOut', 'click', () => { loCanvasState.zoom = Math.max(0.4, loCanvasState.zoom - 0.2); renderLoTopology(); });
    $on('loCanvasFullscreen', 'click', toggleLoFullscreen);
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
        loTimeRange: () => ['近 7 天', '近 3 天', '近 24h', '近 12h', '近 6h', '近 3h', '近 1h', '近 30mins', '近 15mins', '近 5mins'],
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
        qps: '10.67 req/s',
        vdc: 'Singapore-Central / sg3',
        cluster: 'cluster-a',
        method: 'http',
        limitConfig: '阈值 15 req/s，优先级 P1 保底',
        currentQps: '10.67 req/s',
        peakQps: '18.3 req/s',
        qpsAvg: '10.67 req/s',
        p99: '13.2 req/s',
        threshold: '15 req/s',
        invokeMethod: 'GET /api/v2/argos/query',
        cpu: '36%',
        success: '99.98%',
        priority: 'P1',
        upstream: 'payment-core / promotion-gateway',
        upstreamSvc: 'payment-core',
        upstreamApi: 'POST /api/v1/order/pay',
        downstream: 'alarm / argos_monitor_data / facade-api-i18n',
        downstreamSvc: 'toutiao.microservice.alarm',
        downstreamApi: 'NotifyAlarm',
        limitSwitch: '已开启',
        limitType: '单机限流',
        limitMode: '滑动窗口'
    },
    downstream: [
        {
            psm: 'bytedance.bytedoc.argos_monitor_data',
            status: 'normal',
            qps: '',
            vdc: 'Singapore-Central / sg3',
            cluster: 'cluster-c',
            method: 'rpc',
            limitConfig: '阈值 5k req/s，优先级 P2',
            currentQps: '0 req/s',
            qpsAvg: '0.3k req/s',
            peakQps: '0.5k req/s',
            p99: '0.4k req/s',
            threshold: '5k req/s',
            invokeMethod: 'BatchWrite',
            cpu: '20%',
            success: '100%',
            priority: 'P2',
            latencyAvg: '0.12 ms',
            upstream: 'toutiao.ms.argos',
            upstreamSvc: 'toutiao.ms.argos',
            upstreamApi: 'GET /api/v2/argos/query',
            downstream: '-',
            downstreamSvc: '-',
            downstreamApi: '-',
            limitSwitch: '已开启',
            limitType: '集群限流',
            limitMode: '令牌桶'
        },
        {
            psm: 'toutiao.microservice.alarm',
            status: 'error',
            qps: '609.17 req/s',
            vdc: 'Singapore-Central / sg3',
            cluster: 'cluster-b',
            method: 'rpc',
            limitConfig: '阈值 500 req/s，优先级 P0',
            currentQps: '609.17 req/s',
            qpsAvg: '480 req/s',
            peakQps: '8.6k req/s',
            p99: '7.2k req/s',
            threshold: '500 req/s',
            invokeMethod: 'NotifyAlarm',
            cpu: '88%',
            success: '91.3%',
            priority: 'P0',
            latencyAvg: '5.6 ms',
            upstream: 'toutiao.ms.argos',
            upstreamSvc: 'toutiao.ms.argos',
            upstreamApi: 'GET /api/v2/argos/query',
            downstream: '-',
            downstreamSvc: '-',
            downstreamApi: '-',
            limitSwitch: '已开启',
            limitType: '单机限流',
            limitMode: '滑动窗口',
            // 限流事件
            limitEvent: { time: '2026-05-19 14:23:08', limitValue: '500 req/s', qps: '609.17 req/s' },
            // 异常事件
            errorEvent: {
                time: '2026-05-19 14:25:42',
                limitValue: '500 req/s',
                abnormalQps: '8.6k req/s',
                summary: 'alarm 服务接口响应延迟异常，超过阈值 121.8%',
                ticketId: 'INC-20260519-882'
            }
        },
        {
            psm: 'facade-api-i18n.byted.org',
            status: 'warn',
            qps: '',
            vdc: 'Singapore-East / sg5',
            cluster: 'cluster-d',
            method: 'http',
            limitConfig: '阈值 2k req/s，优先级 P1',
            currentQps: '120 req/s',
            qpsAvg: '120 req/s',
            peakQps: '1.2k req/s',
            p99: '0.9k req/s',
            threshold: '2k req/s',
            invokeMethod: 'GET /i18n/translate',
            cpu: '32%',
            success: '99.8%',
            priority: 'P1',
            latencyAvg: '0.46 ms',
            upstream: 'toutiao.ms.argos',
            upstreamSvc: 'toutiao.ms.argos',
            upstreamApi: 'GET /api/v2/argos/query',
            downstream: '-',
            downstreamSvc: '-',
            downstreamApi: '-',
            limitSwitch: '已开启',
            limitType: '单机限流',
            limitMode: '漏桶',
            // 预警事件
            warnEvent: { time: '2026-05-19 13:48:11', limitValue: '2k req/s', waterLevel: '60%' }
        }
    ],
    upstream: []
};

// 列表视图搜索状态
let loListSearchState = { callerSvc: '', callerCluster: '', calleeSvc: '', calleeCluster: '', calleeMethod: '' };

// 拓扑视图筛选状态（QPS / CPU 利用率）
let loTopoFilterState = { qpsOp: 'gte', qpsVal: '', cpuOp: 'gte', cpuVal: '' };

// 解析数值：支持 '10.67 req/s' / '8.6k' / '88%' 等格式
function parseLoNumber(raw) {
    if (raw === null || raw === undefined) return NaN;
    const s = String(raw).trim().toLowerCase();
    if (!s || s === '-') return NaN;
    const m = s.match(/(-?\d+(?:\.\d+)?)\s*([km]?)/);
    if (!m) return NaN;
    let n = parseFloat(m[1]);
    if (m[2] === 'k') n *= 1000;
    if (m[2] === 'm') n *= 1000000;
    return n;
}

function compareLoFilter(actual, op, expected) {
    if (isNaN(actual) || isNaN(expected)) return true;
    if (op === 'gte') return actual >= expected;
    if (op === 'lte') return actual <= expected;
    if (op === 'eq') return Math.abs(actual - expected) < 1e-6;
    return true;
}

function passLoTopoFilter(node) {
    const f = loTopoFilterState;
    if (f.qpsVal !== '') {
        const exp = parseFloat(f.qpsVal);
        const actual = parseLoNumber(node.peakQps || node.qps || node.currentQps);
        if (!compareLoFilter(actual, f.qpsOp, exp)) return false;
    }
    if (f.cpuVal !== '') {
        const exp = parseFloat(f.cpuVal);
        const actual = parseLoNumber(node.cpu);
        if (!compareLoFilter(actual, f.cpuOp, exp)) return false;
    }
    return true;
}

// 状态颜色映射
const LO_STATUS_COLOR = {
    normal: { rect: '#d4f4d4', stroke: '#52c41a', dot: '#52c41a', text: '#1d1f23', isLight: true },
    warn:   { rect: '#fff7e6', stroke: '#fa8c16', dot: '#fa8c16', text: '#1d1f23', isLight: true },
    error:  { rect: '#fff1f0', stroke: '#ff4d4f', dot: '#ff4d4f', text: '#1d1f23', isLight: true }
};

// 拓扑视图交互状态
const loCanvasState = {
    zoom: 1,
    metric: 'QPS',
    stat: '最新值',
    realtime: true,
    legend: true,
    realtimeTimer: null
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
    // 空态：未生成结果时清空画布并显示提示文案
    if (!loResultGenerated) {
        svg.innerHTML = '';
        svg.removeAttribute('viewBox');
        const canvas = document.querySelector('.lo-canvas');
        if (canvas) {
            let empty = canvas.querySelector('.lo-empty-tip');
            if (!empty) {
                empty = document.createElement('div');
                empty.className = 'lo-empty-tip';
                empty.textContent = '当前暂无链路观测结果';
                canvas.appendChild(empty);
            }
            empty.classList.remove('hidden');
        }
        return;
    }
    // 有结果时移除空态提示
    const canvas = document.querySelector('.lo-canvas');
    const empty = canvas?.querySelector('.lo-empty-tip');
    if (empty) empty.classList.add('hidden');

    const baseW = svg.clientWidth || 900;
    const w = baseW;
    const h = 460;
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
    // 应用拓扑筛选：仅保留满足 QPS / CPU 条件的下游节点
    const filteredDown = loTopologyData.downstream.filter(passLoTopoFilter);
    const downCount = filteredDown.length;
    const downGap = 70;
    const downStartY = targetY - ((downCount - 1) * downGap) / 2;

    let html = '';

    // Edges (curved) - 双层路径：透明粗 hit + 可见细线
    filteredDown.forEach((node, i) => {
        const ny = downStartY + i * downGap;
        const c1x = (targetX + downX) / 2;
        const path = `M ${targetX + 90} ${targetY} C ${c1x} ${targetY}, ${c1x} ${ny}, ${downX - 4} ${ny}`;
        const stroke = node.status === 'error' ? '#ff4d4f' : (node.status === 'warn' ? '#fa8c16' : '#ffa39e');
        const fromPsm = loTopologyData.target.psm;
        const toPsm = node.psm;
        // 透明 hit-area 粗线
        html += `<path class="lo-edge-hit" data-from="${fromPsm}" data-to="${toPsm}" d="${path}" fill="none" stroke="transparent" stroke-width="14" style="cursor:pointer"/>`;
        // 可见细线
        html += `<path class="lo-edge" data-from="${fromPsm}" data-to="${toPsm}" d="${path}" fill="none" stroke="${stroke}" stroke-width="1.5" opacity="0.85" style="pointer-events:none"/>`;
        html += `<circle cx="${downX - 4}" cy="${ny}" r="3" fill="${stroke}" style="pointer-events:none"/>`;
    });

    // Target node
    html += renderLoNode(targetX, targetY, loTopologyData.target, true);

    // Downstream nodes
    filteredDown.forEach((node, i) => {
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

    // 边点击 -> 调用信息抽屉
    svg.querySelectorAll('.lo-edge-hit').forEach(hit => {
        hit.addEventListener('click', (e) => {
            e.stopPropagation();
            const from = hit.getAttribute('data-from');
            const to = hit.getAttribute('data-to');
            highlightLoEdge(from, to);
            openLoEdgeDrawer(from, to);
        });
    });

    // 更新节点计数
    const cnt = document.getElementById('loCanvasCount');
    if (cnt) cnt.textContent = String(1 + loTopologyData.downstream.length);
}

function renderLoNode(x, y, node, isTarget) {
    const status = node.status || 'normal';
    const color = LO_STATUS_COLOR[status];
    const label = node.psm;
    const textW = Math.max(140, label.length * 7 + 50);
    const rectH = 30;
    const rectX = x;
    const rectY = y - rectH / 2;
    return `
        <g data-psm="${label}">
            <rect x="${rectX}" y="${rectY}" width="${textW}" height="${rectH}" fill="${color.rect}" stroke="${color.stroke}" stroke-width="${isTarget || status === 'error' ? 1.8 : 1}" rx="4"/>
            <circle cx="${rectX + 16}" cy="${y}" r="6" fill="${color.dot}"/>
            <text x="${rectX + 30}" y="${y + 4}" fill="${color.text}" font-size="12">${label}</text>
        </g>
    `;
}

function renderLoList() {
    const tbody = document.getElementById('loListTableBody');
    if (!tbody) return;
    // 空态：未生成结果时清空列表（不显示文字提示）
    if (!loResultGenerated) {
        tbody.innerHTML = '';
        return;
    }
    // 把每个下游节点视为一条调用对（caller=target, callee=downstream）
    const caller = loTopologyData.target;
    const callerSvc = caller.psm;
    const callerCluster = caller.cluster || 'default';
    const allRows = loTopologyData.downstream.map(n => {
        return {
            psm: n.psm,
            callerSvc,
            callerCluster,
            calleeSvc: n.psm,
            calleeCluster: n.cluster || 'default',
            calleeMethod: n.invokeMethod || '-',
            limitValue: n.threshold || '-',
            limitType: n.limitType || '-',
            limitMode: n.limitMode || '-',
            trafficMax: n.peakQps || '-',
            trafficAvg: n.qpsAvg || n.qps || n.currentQps || '-',
            trafficP99: n.p99 || '-',
            cpu: n.cpu || '-'
        };
    });

    const filters = loListSearchState || {};
    const match = (val, key) => {
        const kw = (filters[key] || '').toLowerCase().trim();
        if (!kw) return true;
        return (val || '').toString().toLowerCase().includes(kw);
    };
    const rows = allRows.filter(r =>
        match(r.callerSvc, 'callerSvc') &&
        match(r.callerCluster, 'callerCluster') &&
        match(r.calleeSvc, 'calleeSvc') &&
        match(r.calleeCluster, 'calleeCluster') &&
        match(r.calleeMethod, 'calleeMethod')
    );

    tbody.innerHTML = rows.map(r => `
        <tr>
            <td>${r.callerSvc}</td>
            <td>${r.callerCluster}</td>
            <td>${r.calleeSvc}</td>
            <td>${r.calleeCluster}</td>
            <td>${r.calleeMethod}</td>
            <td>${r.limitValue}</td>
            <td>${r.limitType}</td>
            <td>${r.limitMode}</td>
            <td>${r.trafficMax}</td>
            <td>${r.trafficAvg}</td>
            <td>${r.trafficP99}</td>
            <td>${r.cpu}</td>
        </tr>
    `).join('') || `<tr><td colspan="12" style="text-align:center;color:#999;padding:24px">暂无匹配数据</td></tr>`;

    tbody.querySelectorAll('[data-detail]').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            openLoNodeDrawer(a.dataset.detail);
        });
    });
}

function getLoListExportRows() {
    if (!loResultGenerated) return { headers: [], rows: [] };
    const caller = loTopologyData.target;
    const callerSvc = caller.psm;
    const callerCluster = caller.cluster || 'default';
    const all = loTopologyData.downstream.map(n => ({
        callerSvc,
        callerCluster,
        calleeSvc: n.psm,
        calleeCluster: n.cluster || 'default',
        calleeMethod: n.invokeMethod || '-',
        limitValue: n.threshold || '-',
        limitType: n.limitType || '-',
        limitMode: n.limitMode || '-',
        trafficMax: n.peakQps || '-',
        trafficAvg: n.qpsAvg || n.qps || n.currentQps || '-',
        trafficP99: n.p99 || '-',
        cpu: n.cpu || '-'
    }));
    const filters = loListSearchState || {};
    const match = (val, key) => {
        const kw = (filters[key] || '').toLowerCase().trim();
        if (!kw) return true;
        return (val || '').toString().toLowerCase().includes(kw);
    };
    const rows = all.filter(r =>
        match(r.callerSvc, 'callerSvc') &&
        match(r.callerCluster, 'callerCluster') &&
        match(r.calleeSvc, 'calleeSvc') &&
        match(r.calleeCluster, 'calleeCluster') &&
        match(r.calleeMethod, 'calleeMethod')
    );
    const headers = ['调用方服务', '调用方集群', '被调用方服务', '被调用方集群', '被调用方方法', '限流值', '限流类型', '限流模式', '流量 Max', '流量 Avg', '流量 P99', 'CPU 利用率'];
    return { headers, rows };
}

function exportLoList(type) {
    const { headers, rows } = getLoListExportRows();
    if (!rows.length) {
        showToast('当前列表为空，无法导出');
        return;
    }
    if (type === 'feishu') {
        // 飞书表格导出：实际场景应调用飞书 OpenAPI；此处 mock 复制 TSV 到剪贴板并提示
        const tsv = [headers.join('\t')].concat(rows.map(r => [
            r.callerSvc, r.callerCluster, r.calleeSvc, r.calleeCluster, r.calleeMethod,
            r.limitValue, r.limitType, r.limitMode, r.trafficMax, r.trafficAvg, r.trafficP99, r.cpu
        ].join('\t'))).join('\n');
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(tsv).then(
                () => showToast('已复制为飞书表格格式，可粘贴到飞书多维表格'),
                () => showToast('已生成飞书表格内容（剪贴板权限受限）')
            );
        } else {
            showToast('已生成飞书表格内容');
        }
        return;
    }
    // 默认 excel：导出为 CSV（带 BOM，Excel 识别中文）
    const escape = (v) => {
        const s = String(v ?? '');
        return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const csvLines = [headers.map(escape).join(',')];
    rows.forEach(r => {
        csvLines.push([r.callerSvc, r.callerCluster, r.calleeSvc, r.calleeCluster, r.calleeMethod,
            r.limitValue, r.limitType, r.limitMode, r.trafficMax, r.trafficAvg, r.trafficP99, r.cpu].map(escape).join(','));
    });
    const blob = new Blob(['\ufeff' + csvLines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `链路观测列表_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('已导出为 Excel 表格');
}

function findLoNode(psm) {
    if (loTopologyData.target.psm === psm) return loTopologyData.target;
    return loTopologyData.downstream.find(n => n.psm === psm);
}

// 当前节点作为「被调用方」时的调用对（上游 → 当前节点）
function getLoUpstreamCalls(node) {
    const target = loTopologyData.target;
    if (node.psm === target.psm) {
        return (node.upstreamSvc && node.upstreamSvc !== '-') ? [{
            callerSvc: node.upstreamSvc,
            callerCluster: 'default',
            calleeSvc: node.psm,
            calleeCluster: node.cluster || 'default',
            calleeMethod: node.upstreamApi || node.invokeMethod || '-',
            limitValue: node.threshold || '-',
            limitType: node.limitType || '-',
            limitMode: node.limitMode || '-',
            trafficMax: node.peakQps || '-',
            trafficAvg: node.qpsAvg || node.qps || '-',
            trafficP99: node.p99 || '-',
            cpu: node.cpu || '-'
        }] : [];
    }
    return [{
        callerSvc: target.psm,
        callerCluster: target.cluster || 'default',
        calleeSvc: node.psm,
        calleeCluster: node.cluster || 'default',
        calleeMethod: node.invokeMethod || '-',
        limitValue: node.threshold || '-',
        limitType: node.limitType || '-',
        limitMode: node.limitMode || '-',
        trafficMax: node.peakQps || '-',
        trafficAvg: node.qpsAvg || node.qps || '-',
        trafficP99: node.p99 || '-',
        cpu: node.cpu || '-'
    }];
}

// 当前节点作为「调用方」时的调用对（当前节点 → 下游）
function getLoDownstreamCalls(node) {
    const target = loTopologyData.target;
    if (node.psm === target.psm) {
        return loTopologyData.downstream.map(d => ({
            callerSvc: target.psm,
            callerCluster: target.cluster || 'default',
            callerMethod: d.invokeMethod || '-',
            calleeSvc: d.psm,
            calleeCluster: d.cluster || 'default',
            limitValue: d.threshold || '-',
            limitType: d.limitType || '-',
            limitMode: d.limitMode || '-',
            trafficMax: d.peakQps || '-',
            trafficAvg: d.qpsAvg || d.qps || '-',
            trafficP99: d.p99 || '-',
            cpu: d.cpu || '-'
        }));
    }
    return (node.downstreamSvc && node.downstreamSvc !== '-') ? [{
        callerSvc: node.psm,
        callerCluster: node.cluster || 'default',
        callerMethod: node.downstreamApi || '-',
        calleeSvc: node.downstreamSvc,
        calleeCluster: 'default',
        limitValue: node.threshold || '-',
        limitType: node.limitType || '-',
        limitMode: node.limitMode || '-',
        trafficMax: '-',
        trafficAvg: '-',
        trafficP99: '-',
        cpu: node.cpu || '-'
    }] : [];
}

function openLoNodeDrawer(psm) {
    const node = findLoNode(psm);
    if (!node) return;
    const titleEl = document.getElementById('loNodeDrawerTitle');
    const bodyEl = document.getElementById('loNodeDrawerBody');
    const drawer = document.getElementById('loNodeDrawer');
    if (!titleEl || !bodyEl || !drawer) return;
    titleEl.textContent = node.psm;

    const statusText = node.status === 'error' ? '异常' : (node.status === 'warn' ? '预警' : '正常');
    const statusCls = node.status === 'error' ? 'badge-error' : (node.status === 'warn' ? 'badge-warning' : 'badge-success');

    // 构造上游调用对表格行（被调用方方法）
    const buildUpstreamRows = (calls) => {
        if (!calls || !calls.length) {
            return `<tr><td colspan="12" style="text-align:center;color:#999;padding:16px">暂无数据</td></tr>`;
        }
        return calls.map(c => `
            <tr>
                <td>${c.callerSvc}</td>
                <td>${c.callerCluster}</td>
                <td>${c.calleeSvc}</td>
                <td>${c.calleeCluster}</td>
                <td>${c.calleeMethod}</td>
                <td>${c.limitValue}</td>
                <td>${c.limitType}</td>
                <td>${c.limitMode}</td>
                <td>${c.trafficMax}</td>
                <td>${c.trafficAvg}</td>
                <td>${c.trafficP99}</td>
                <td>${c.cpu}</td>
            </tr>
        `).join('');
    };
    // 构造下游调用对表格行（调用方方法）
    const buildDownstreamRows = (calls) => {
        if (!calls || !calls.length) {
            return `<tr><td colspan="12" style="text-align:center;color:#999;padding:16px">暂无数据</td></tr>`;
        }
        return calls.map(c => `
            <tr>
                <td>${c.callerSvc}</td>
                <td>${c.callerCluster}</td>
                <td>${c.callerMethod}</td>
                <td>${c.calleeSvc}</td>
                <td>${c.calleeCluster}</td>
                <td>${c.limitValue}</td>
                <td>${c.limitType}</td>
                <td>${c.limitMode}</td>
                <td>${c.trafficMax}</td>
                <td>${c.trafficAvg}</td>
                <td>${c.trafficP99}</td>
                <td>${c.cpu}</td>
            </tr>
        `).join('');
    };
    const upstreamRows = buildUpstreamRows(getLoUpstreamCalls(node));
    const downstreamRows = buildDownstreamRows(getLoDownstreamCalls(node));

    // 告警事件区：限流 / 预警 / 异常
    const renderEventBlock = (label, content) => `
        <div class="lo-event-block">
            <div class="lo-event-label">${label}</div>
            <div class="lo-event-content">${content || '<span class="lo-event-empty">-</span>'}</div>
        </div>`;

    // 限流事件
    let limitContent = '';
    if (node.limitEvent) {
        limitContent = `
            <div class="lo-event-row"><span class="lo-event-key">限流发生时间</span><span class="lo-event-val">${node.limitEvent.time}</span></div>
            <div class="lo-event-row"><span class="lo-event-key">限流值</span><span class="lo-event-val">${node.limitEvent.limitValue}</span></div>
            <div class="lo-event-row"><span class="lo-event-key">QPS</span><span class="lo-event-val">${node.limitEvent.qps}</span></div>`;
    }
    // 预警事件
    let warnContent = '';
    if (node.warnEvent) {
        warnContent = `
            <div class="lo-event-row"><span class="lo-event-key">预警发生时间</span><span class="lo-event-val">${node.warnEvent.time}</span></div>
            <div class="lo-event-row"><span class="lo-event-key">限流值</span><span class="lo-event-val">${node.warnEvent.limitValue}</span></div>
            <div class="lo-event-row"><span class="lo-event-key">限流水位</span><span class="lo-event-val">${node.warnEvent.waterLevel}</span></div>`;
    }
    // 异常事件
    let errorContent = '';
    if (node.errorEvent) {
        const tid = node.errorEvent.ticketId;
        errorContent = `
            <div class="lo-event-row"><span class="lo-event-key">异常流量发生时间</span><span class="lo-event-val">${node.errorEvent.time}</span></div>
            <div class="lo-event-row"><span class="lo-event-key">限流值</span><span class="lo-event-val">${node.errorEvent.limitValue}</span></div>
            <div class="lo-event-row"><span class="lo-event-key">异常 QPS 值</span><span class="lo-event-val">${node.errorEvent.abnormalQps}</span></div>
            <div class="lo-event-row"><span class="lo-event-key">概述</span><span class="lo-event-val">${node.errorEvent.summary}</span></div>
            <div class="lo-event-row"><span class="lo-event-key">工单 ID</span><span class="lo-event-val"><a href="https://ticket.example.com/${tid}" target="_blank" class="lo-event-ticket">${tid}</a></span></div>`;
    }

    // 仅异常/限流/预警节点显示告警事件区
    const hasAlert = node.status !== 'normal';
    const alertSection = hasAlert ? `
        <div class="lo-detail-section">
            <div class="lo-detail-section-title">告警事件 <span class="badge ${statusCls}">${statusText}</span></div>
            <div class="lo-event-list">
                ${node.limitEvent ? renderEventBlock('限流', limitContent) : ''}
                ${node.warnEvent ? renderEventBlock('预警', warnContent) : ''}
                ${node.errorEvent ? renderEventBlock('异常', errorContent) : ''}
            </div>
        </div>
    ` : '';

    bodyEl.innerHTML = `
        <div class="lo-detail-section">
            <div class="lo-detail-section-title">Upstream Method</div>
            <div class="lo-method-table-wrap">
                <table class="lo-method-table">
                    <thead>
                        <tr>
                            <th>调用方服务</th>
                            <th>调用方集群</th>
                            <th>被调用方服务</th>
                            <th>被调用方集群</th>
                            <th>被调用方方法</th>
                            <th>限流值</th>
                            <th>限流类型</th>
                            <th>限流模式</th>
                            <th>流量 Max</th>
                            <th>流量 Avg</th>
                            <th>流量 P99</th>
                            <th>CPU 利用率</th>
                        </tr>
                    </thead>
                    <tbody>${upstreamRows}</tbody>
                </table>
            </div>
        </div>
        <div class="lo-detail-section">
            <div class="lo-detail-section-title">Downstream Method</div>
            <div class="lo-method-table-wrap">
                <table class="lo-method-table">
                    <thead>
                        <tr>
                            <th>调用方服务</th>
                            <th>调用方集群</th>
                            <th>调用方方法</th>
                            <th>被调用方服务</th>
                            <th>被调用方集群</th>
                            <th>限流值</th>
                            <th>限流类型</th>
                            <th>限流模式</th>
                            <th>流量 Max</th>
                            <th>流量 Avg</th>
                            <th>流量 P99</th>
                            <th>CPU 利用率</th>
                        </tr>
                    </thead>
                    <tbody>${downstreamRows}</tbody>
                </table>
            </div>
        </div>
        ${alertSection}
    `;

    drawer.classList.remove('hidden');
}

function closeLoNodeDrawer() {
    const drawer = document.getElementById('loNodeDrawer');
    if (drawer) drawer.classList.add('hidden');
}

// === 边详情抽屉 ===
// 调用对元数据
function getLoEdgeMeta(from, to) {
    const fromNode = findLoNode(from);
    const toNode = findLoNode(to);
    if (!fromNode || !toNode) return null;
    // 强弱依赖：error/warn 视为强依赖示例
    const isStrong = toNode.status === 'error' || toNode.priority === 'P0';
    return {
        fromSvc: fromNode.psm,
        fromCluster: fromNode.cluster || '-',
        fromApi: fromNode.invokeMethod || '-',
        toSvc: toNode.psm,
        toCluster: toNode.cluster || '-',
        toApi: toNode.invokeMethod || '-',
        depType: isStrong ? '强依赖' : '弱依赖',
        depColor: isStrong ? 'strong' : 'weak',
        trafficRatio: toNode.trafficRatio || '-',
        latestTime: (toNode.limitEvent && toNode.limitEvent.time) ||
                    (toNode.errorEvent && toNode.errorEvent.time) ||
                    (toNode.warnEvent && toNode.warnEvent.time) ||
                    '2026-05-20 12:28:35',
        sampleUrl: '#'
    };
}

function openLoEdgeDrawer(from, to) {
    const meta = getLoEdgeMeta(from, to);
    if (!meta) return;
    const bodyEl = document.getElementById('loEdgeDrawerBody');
    const drawer = document.getElementById('loEdgeDrawer');
    if (!bodyEl || !drawer) return;

    const depBadgeCls = meta.depColor === 'strong' ? 'lo-dep-strong' : 'lo-dep-weak';
    bodyEl.innerHTML = `
        <div class="lo-detail-section">
            <div class="lo-event-content">
                <div class="lo-event-row"><span class="lo-event-key">调用方服务</span><span class="lo-event-val">${meta.fromSvc}</span></div>
                <div class="lo-event-row"><span class="lo-event-key">调用方集群</span><span class="lo-event-val">${meta.fromCluster}</span></div>
                <div class="lo-event-row"><span class="lo-event-key">调用方接口</span><span class="lo-event-val">${meta.fromApi}</span></div>
                <div class="lo-event-row"><span class="lo-event-key">被调用方服务</span><span class="lo-event-val">${meta.toSvc}</span></div>
                <div class="lo-event-row"><span class="lo-event-key">被调用方集群</span><span class="lo-event-val">${meta.toCluster}</span></div>
                <div class="lo-event-row"><span class="lo-event-key">被调用方接口</span><span class="lo-event-val">${meta.toApi}</span></div>
                <div class="lo-event-row"><span class="lo-event-key">强弱依赖</span><span class="lo-event-val"><span class="lo-dep-tag ${depBadgeCls}">${meta.depType}</span></span></div>
                <div class="lo-event-row"><span class="lo-event-key">流量比例</span><span class="lo-event-val">${meta.trafficRatio}</span></div>
            </div>
        </div>
    `;
    drawer.classList.remove('hidden');
}

function closeLoEdgeDrawer() {
    const drawer = document.getElementById('loEdgeDrawer');
    if (drawer) drawer.classList.add('hidden');
    clearLoEdgeHighlight();
}

function highlightLoEdge(from, to) {
    clearLoEdgeHighlight();
    const svg = document.getElementById('loTopologySvg');
    if (!svg) return;
    svg.querySelectorAll('.lo-edge').forEach(p => {
        if (p.getAttribute('data-from') === from && p.getAttribute('data-to') === to) {
            p.classList.add('lo-edge-active');
            p.setAttribute('stroke', '#ff4d4f');
            p.setAttribute('stroke-width', '2.5');
            p.setAttribute('opacity', '1');
        }
    });
}

function clearLoEdgeHighlight() {
    const svg = document.getElementById('loTopologySvg');
    if (!svg) return;
    svg.querySelectorAll('.lo-edge-active').forEach(p => {
        p.classList.remove('lo-edge-active');
        // 还原原色
        const to = p.getAttribute('data-to');
        const node = findLoNode(to);
        if (node) {
            const stroke = node.status === 'error' ? '#ff4d4f' : (node.status === 'warn' ? '#fa8c16' : '#ffa39e');
            p.setAttribute('stroke', stroke);
        }
        p.setAttribute('stroke-width', '1.5');
        p.setAttribute('opacity', '0.85');
    });
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
            loUpLevel: '3', loDownLevel: '3', granularity: 'psm,idc'
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
            loUpLevel: '1', loDownLevel: '1', granularity: 'psm,cluster'
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
                <button class="hc-item-action-btn" data-act="export" data-id="${c.id}">导出</button>
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
            } else if (act === 'export') {
                showToast(`已导出配置「${cfg.name}」`);
            } else if (act === 'delete') {
                if (cfg.type === 'preset') {
                    showToast('预置配置不支持删除');
                    return;
                }
                openHcConfirm({
                    title: '确认删除该历史配置？',
                    message: '删除后不可恢复，请确认是否继续删除。',
                    onOk: () => {
                        const idx = historyConfigs.findIndex(c => c.id === id);
                        if (idx !== -1) {
                            historyConfigs.splice(idx, 1);
                            renderHistoryConfigList();
                            showToast(`已删除配置「${cfg.name}」`);
                        }
                    }
                });
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
        openHcConfirm({
            title: '确认删除所选历史配置？',
            message: '删除后不可恢复，请确认是否继续删除已选中的历史配置。',
            onOk: () => {
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
            }
        });
    });
    $on2('hcBulkExport', 'click', () => {
        const selected = getSelectedHcConfigs();
        if (selected.length === 0) {
            showToast('请先选择要导出的配置');
            return;
        }
        const names = selected.map(c => c.name).join('、');
        exitHcBulkMode();
        showToast(`已导出 ${selected.length} 项配置：${names}`);
    });
}

/* ============= 历史配置：确认弹窗 ============= */
const hcConfirmState = { onOk: null };

function openHcConfirm({ title, message, onOk }) {
    const modal = document.getElementById('hcConfirmModal');
    if (!modal) return;
    const t = document.getElementById('hcConfirmTitle');
    const m = document.getElementById('hcConfirmMessage');
    if (t && title) t.textContent = title;
    if (m && message) m.textContent = message;
    hcConfirmState.onOk = onOk || null;
    modal.classList.remove('hidden');
}

function closeHcConfirm() {
    const modal = document.getElementById('hcConfirmModal');
    if (modal) modal.classList.add('hidden');
    hcConfirmState.onOk = null;
}

function bindHcConfirmHandlers() {
    const $on2 = (id, evt, fn) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(evt, fn);
    };
    $on2('btnHcConfirmCancel', 'click', closeHcConfirm);
    $on2('hcConfirmClose', 'click', closeHcConfirm);
    $on2('hcConfirmModalMask', 'click', closeHcConfirm);
    $on2('btnHcConfirmOk', 'click', () => {
        const cb = hcConfirmState.onOk;
        closeHcConfirm();
        if (typeof cb === 'function') cb();
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
    if (loConfigState.firstFilled) {
        showLoStatus('已配置筛选条件，待生成观测结果');
    } else {
        hideLoStatus();
    }
    // 应用配置后必须重置渲染状态：旧拓扑结果不再代表当前筛选项
    loResultGenerated = false;
    renderLoTopology();
    renderLoList();
    updateLoGenerateDot();
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

function showLoStatus(text, type) {
    const bar = document.getElementById('loStatusBar');
    const t = document.getElementById('loStatusText');
    if (!bar || !t) return;
    t.textContent = text;
    bar.classList.remove('hidden', 'lo-status-success');
    if (type === 'success') bar.classList.add('lo-status-success');
}

function hideLoStatus() {
    const bar = document.getElementById('loStatusBar');
    if (bar) bar.classList.add('hidden');
}

function updateLoGenerateDot() {
    const dot = document.getElementById('loGenerateDot');
    if (!dot) return;
    if (loConfigState.dirty || loConfigState.firstFilled) {
        dot.classList.remove('hidden');
    } else {
        dot.classList.add('hidden');
    }
}

function persistLoFilterDraft() {
    // 规则：每次刷新均为空态，因此不再向 localStorage 持久化草稿
    // 函数保留为空实现，避免大量调用点改动
}

function restoreLoFilterDraft() {
    // 规则：每次刷新/重新登录均为空态（筛选项与结果均为空）
    // 主动清除所有持久化草稿，避免任何残留回填
    try {
        localStorage.removeItem('lo_filter_draft');
        localStorage.removeItem('lo_saved_config');
        localStorage.removeItem(LO_DRAFT_KEY);
        localStorage.removeItem(LO_SAVED_KEY);
    } catch (e) { /* ignore */ }
    // 显式清空 DOM（兜底，防止浏览器缓存了 input value）
    ['loEntry', 'loVDC', 'loCluster', 'loTimeRange', 'loDepType', 'loPriority', 'loSvcType', 'loUpLevel', 'loDownLevel'].forEach(k => {
        const el = document.getElementById(k);
        if (el) el.value = '';
    });
    document.querySelectorAll('input[name="loGran"]').forEach(c => { c.checked = false; });
    // 清空状态机
    loResultGenerated = false;
    loConfigState.lastGenerated = null;
    loConfigState.firstFilled = false;
    loConfigState.dirty = false;
    loConfigState.savedConfigId = null;
    loConfigState.lastSaved = null;
    hideLoStatus();
    updateLoGenerateDot();
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
        return `<div class="lo-locate-item" data-psm="${n.psm}">
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