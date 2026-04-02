(function () {
  'use strict';

  // ── Task volume → annual multiplier ──
  var TASK_VOLUME_ANNUAL = { day: 260, week: 52, month: 12, year: 1 };

  // ── Default state (V1 schema) ──
  function defaultState() {
    return {
      v: 1,
      taskName: '',
      currency: 'USD',
      referenceId: null,
      currentState: { taskVolumeValue: null, taskVolumeUnit: 'week', recurringCosts: [], perTaskCosts: [] },
      transition: { durationValue: 4, durationUnit: 'weeks', costs: [] },
      futureState: { taskVolumeValue: null, taskVolumeUnit: 'week', recurringCosts: [], perTaskCosts: [] }
    };
  }

  var state = defaultState();

  // ── DOM shorthand ──
  var $ = function (id) { return document.getElementById(id); };

  // ── Formatting helpers ──
  function sym() { return '$'; }

  function fmt(n) {
    var abs = Math.abs(n);
    var formatted = abs.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    return (n < 0 ? '-' : '') + sym() + formatted;
  }

  function fmtDecimal(n) {
    var abs = Math.abs(n);
    var formatted = abs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return (n < 0 ? '-' : '') + sym() + formatted;
  }

  function fmtCompact(n) {
    var abs = Math.abs(n);
    if (abs >= 1) return fmt(n);
    return fmtDecimal(n);
  }

  function formatPayback(months) {
    if (months < 1) {
      var days = Math.round(months * 30);
      return days + (days === 1 ? ' day' : ' days');
    }
    if (months > 12) {
      var years = Math.floor(months / 12);
      var rem = Math.round(months % 12);
      if (rem === 0) return years + (years === 1 ? ' year' : ' years');
      return years + (years === 1 ? ' year, ' : ' years, ') + rem + (rem === 1 ? ' month' : ' months');
    }
    var wholeMonths = Math.floor(months);
    var remDays = Math.round((months - wholeMonths) * 30);
    if (remDays === 0) return wholeMonths + (wholeMonths === 1 ? ' month' : ' months');
    return wholeMonths + (wholeMonths === 1 ? ' month, ' : ' months, ') + remDays + (remDays === 1 ? ' day' : ' days');
  }

  function escAttr(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ── Default row factories ──
  function defaultRecurringRow() {
    return {
      resourceLabel: '',
      resourceType: 'person',
      quantity: 1,
      allocationValue: 0,
      allocationUnit: 'hours_per_week',
      unitCost: 0,
      costUnit: 'hourly'
    };
  }

  function defaultPerTaskRow() {
    return {
      resourceLabel: '',
      resourceType: 'system',
      quantity: 1,
      allocationValue: 1,
      allocationUnit: 'occurrences',
      unitCost: 0,
      costUnit: 'hourly'
    };
  }

  // ── Resource type helpers ──
  function isPersonType(rt) { return rt === 'person'; }

  function resourceTypeOptions(selected) {
    return '<option value="person"' + (selected === 'person' ? ' selected' : '') + '>Person</option>' +
           '<option value="system"' + (selected === 'system' ? ' selected' : '') + '>System</option>' +
           '<option value="vendor"' + (selected === 'vendor' ? ' selected' : '') + '>Vendor</option>';
  }

  // ── Annualization: recurring row ──
  // Annualize a single unit cost based on cost basis
  function annualizeUnitCost(cost, cu) {
    if (cu === 'hourly') return cost * 2080;
    if (cu === 'weekly') return cost * 52;
    if (cu === 'monthly') return cost * 12;
    if (cu === 'annual') return cost;
    return 0;
  }

  var HOURS_PER_WEEK = 40;
  var HOURS_PER_MONTH = 40 * (30 / 7);

  function annualizeRecurringRow(row) {
    var q = row.quantity || 0;
    var alloc = row.allocationValue || 0;
    var cost = row.unitCost || 0;
    var cu = row.costUnit;
    var au = row.allocationUnit;

    // One-time: face value, no annualization or allocation
    if (cu === 'one-time') {
      return q * cost;
    }

    var annualCost = annualizeUnitCost(cost, cu);

    // Convert allocation to a fraction of full-time, then multiply by annualized cost
    if (au === 'pct') {
      return q * (alloc / 100) * annualCost;
    }
    if (au === 'hours_per_week') {
      return q * (alloc / HOURS_PER_WEEK) * annualCost;
    }
    if (au === 'hours_per_month') {
      return q * (alloc / HOURS_PER_MONTH) * annualCost;
    }
    return 0;
  }

  // ── Annualization: per-task row ──
  // Cost per task occurrence, then × annual task volume
  function perTaskCostPerOccurrence(row) {
    var q = row.quantity || 0;
    var alloc = row.allocationValue || 0;
    var cost = row.unitCost || 0;
    var au = row.allocationUnit;
    var cu = row.costUnit || 'hourly';

    // Convert allocation to cost using costUnit, then multiply by quantity
    if (cu === 'hourly') {
      if (au === 'minutes') return q * (alloc / 60) * cost;
      if (au === 'hours') return q * alloc * cost;
      if (au === 'days') return q * alloc * 8 * cost;
      // occurrences with hourly — treat alloc as hours
      return q * alloc * cost;
    }
    // weekly, monthly, annual, per_time — flat: quantity × alloc × cost
    return q * alloc * cost;
  }

  function annualizePerTaskRow(row, annualTaskVol) {
    return perTaskCostPerOccurrence(row) * annualTaskVol;
  }

  // ── Sum helpers ──
  function sumRecurring(rows) {
    var t = 0;
    for (var i = 0; i < rows.length; i++) t += annualizeRecurringRow(rows[i]);
    return t;
  }

  function sumPerTask(rows, annualTaskVol) {
    var t = 0;
    for (var i = 0; i < rows.length; i++) t += annualizePerTaskRow(rows[i], annualTaskVol);
    return t;
  }

  function annualTaskVolume(block) {
    if (!block.taskVolumeValue) return 0;
    return block.taskVolumeValue * (TASK_VOLUME_ANNUAL[block.taskVolumeUnit] || 0);
  }

  var UNIT_LABELS = { day: 'times per day', week: 'times per week', month: 'times per month', year: 'times per year' };

  function volumeSummaryText(block) {
    if (!block.taskVolumeValue) return '';
    var annual = annualTaskVolume(block);
    if (block.taskVolumeUnit === 'year') return annual.toLocaleString('en-US') + ' times per year';
    return block.taskVolumeValue + ' ' + UNIT_LABELS[block.taskVolumeUnit] + ' = ' + annual.toLocaleString('en-US') + ' times per year';
  }

  function updateVolumeSummaries() {
    $('currentVolumeSummary').textContent = volumeSummaryText(state.currentState);
    $('futureVolumeSummary').textContent = volumeSummaryText(state.futureState);
  }

  // ── Transition cost: scale recurring rows to transition duration ──
  function transitionWeeks() {
    var v = state.transition.durationValue || 0;
    return state.transition.durationUnit === 'months' ? v * 4.33 : v;
  }

  function transitionCostForArray(rows) {
    var weeks = transitionWeeks();
    var total = 0;
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      if (row.costUnit === 'one-time') {
        // Face value, not scaled by duration
        total += (row.quantity || 0) * (row.unitCost || 0);
      } else {
        // Annualize the row, then scale to the transition duration as a fraction of a year
        total += annualizeRecurringRow(row) * (weeks / 52);
      }
    }
    return total;
  }

  // ── Full calculation ──
  function calcMetrics() {
    var curTaskVol = annualTaskVolume(state.currentState);
    var futTaskVol = annualTaskVolume(state.futureState);

    var currentAnnualCost = sumRecurring(state.currentState.recurringCosts) + sumPerTask(state.currentState.perTaskCosts, curTaskVol);
    var futureAnnualCost = sumRecurring(state.futureState.recurringCosts) + sumPerTask(state.futureState.perTaskCosts, futTaskVol);
    var grossAnnualSavings = currentAnnualCost - futureAnnualCost;

    var totalTransitionCost = transitionCostForArray(state.transition.costs);

    var netYear1Value = grossAnnualSavings - totalTransitionCost;

    var monthlySavings = grossAnnualSavings / 12;
    var paybackMonths = monthlySavings > 0 ? totalTransitionCost / monthlySavings : null;

    var roi = totalTransitionCost > 0 ? (grossAnnualSavings - totalTransitionCost) / totalTransitionCost : null;

    var currentCostPerTask = curTaskVol > 0 ? currentAnnualCost / curTaskVol : null;
    var futureCostPerTask = futTaskVol > 0 ? futureAnnualCost / futTaskVol : null;
    var savingsPerTask = (currentCostPerTask !== null && futureCostPerTask !== null)
      ? currentCostPerTask - futureCostPerTask : null;
    var pctImprovement = (currentCostPerTask !== null && currentCostPerTask > 0 && savingsPerTask !== null)
      ? savingsPerTask / currentCostPerTask : null;

    return {
      currentAnnualCost: currentAnnualCost,
      futureAnnualCost: futureAnnualCost,
      grossAnnualSavings: grossAnnualSavings,
      totalTransitionCost: totalTransitionCost,
      netYear1Value: netYear1Value,
      paybackMonths: paybackMonths,
      roi: roi,
      currentCostPerTask: currentCostPerTask,
      futureCostPerTask: futureCostPerTask,
      savingsPerTask: savingsPerTask,
      pctImprovement: pctImprovement
    };
  }

  // ── Inline summary: recurring row ──
  function recurringRowSummary(row) {
    var q = row.quantity || 0;
    var cost = row.unitCost || 0;
    var label = row.resourceLabel || 'Resource';
    var cu = row.costUnit;
    var au = row.allocationUnit;
    var alloc = row.allocationValue || 0;

    if (cu === 'one-time') {
      return fmtCompact(q * cost) + ' one-time';
    }

    var annual = annualizeRecurringRow(row);
    var parts = [];

    if (q > 1) {
      var pluralLabel = label + (label.charAt(label.length - 1) === 's' ? '' : 's');
      parts.push(q + ' ' + pluralLabel);
    } else {
      parts.push(label || 'Resource');
    }

    if (au === 'hours_per_week') {
      parts.push(alloc + ' hrs/week');
    } else if (au === 'pct') {
      parts.push(alloc + '%' + (isPersonType(row.resourceType) ? ' FTE' : ''));
    } else if (au === 'hours_per_month') {
      parts.push(alloc + ' hrs/month');
    }

    return parts.join(' \u00D7 ') + ' = ' + fmt(annual) + '/year';
  }

  // ── Cost Basis label helpers ──
  var COST_UNIT_LABELS = { hourly: '/hr', weekly: '/week', monthly: '/month', annual: '/year', per_time: '/time' };

  // ── Inline summary: per-task row ──
  function perTaskRowSummary(row, annualTaskVol) {
    var label = row.resourceLabel || 'Resource';
    var q = row.quantity || 0;
    var costPerTask = perTaskCostPerOccurrence(row);
    var au = row.allocationUnit;
    var alloc = row.allocationValue || 0;
    var cost = row.unitCost || 0;
    var cu = row.costUnit || 'hourly';
    var costLabel = COST_UNIT_LABELS[cu] || '';

    // Quantity prefix
    var qPrefix = q > 1
      ? q + ' ' + label + (label.charAt(label.length - 1) === 's' ? '' : 's')
      : label;

    // Allocation + cost description
    var allocPart;
    if (au === 'occurrences' && alloc === 1) {
      allocPart = fmtDecimal(cost) + costLabel;
    } else if (au === 'occurrences') {
      allocPart = alloc + ' @ ' + fmtDecimal(cost) + costLabel;
    } else {
      var unitLabel = au === 'minutes' ? ' min' : au === 'hours' ? ' hr' : au === 'days' ? (' day' + (alloc !== 1 ? 's' : '')) : '';
      allocPart = alloc + unitLabel + ' @ ' + fmtDecimal(cost) + costLabel;
    }

    if (annualTaskVol <= 0) {
      return qPrefix + ' \u00D7 ' + allocPart + ' = ' + fmtDecimal(costPerTask) + '/task';
    }
    var annual = costPerTask * annualTaskVol;
    return qPrefix + ' \u00D7 ' + allocPart + ' \u00D7 ' + annualTaskVol.toLocaleString('en-US') + ' tasks/year = ' + fmtCompact(annual) + '/year';
  }

  // ── URL Codec ──
  function encodeState() {
    try {
      return btoa(unescape(encodeURIComponent(JSON.stringify(state))));
    } catch (e) { return ''; }
  }

  function decodeState(b64) {
    try {
      var parsed = JSON.parse(decodeURIComponent(escape(atob(b64))));
      if (parsed.v === 1) return parsed;
      return null;
    } catch (e) { return null; }
  }

  // ── Visitor ID ──
  function getOrCreateVisitorId() {
    var key = 'dl_visitor_id';
    var id = localStorage.getItem(key);
    if (!id) {
      id = 'v_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 8);
      localStorage.setItem(key, id);
    }
    return id;
  }

  // ── Render: recurring row ──
  function renderRecurringRow(container, rows, index) {
    var row = rows[index];
    var el = document.createElement('div');
    el.className = 'calc-resource-row';

    var isOneTime = row.costUnit === 'one-time';
    var allocMax = row.allocationUnit === 'pct' ? ' max="100"' : '';

    el.innerHTML =
      '<div class="calc-field calc-field--label">' +
        '<label>Resource / Role</label>' +
        '<input type="text" value="' + escAttr(row.resourceLabel) + '" data-field="resourceLabel" placeholder="e.g. Sr. Analyst, Salesforce">' +
      '</div>' +
      '<div class="calc-field calc-field--type">' +
        '<label>Type</label>' +
        '<select data-field="resourceType">' + resourceTypeOptions(row.resourceType) + '</select>' +
      '</div>' +
      '<div class="calc-field calc-field--quantity">' +
        '<label>Quantity</label>' +
        '<input type="number" min="0" value="' + (row.quantity || '') + '" data-field="quantity" placeholder="1">' +
      '</div>' +
      (isOneTime ? '' : (
        '<div class="calc-field calc-field--allocation">' +
          '<label>Allocation</label>' +
          '<input type="number" min="0"' + allocMax + ' step="any" value="' + (row.allocationValue || '') + '" data-field="allocationValue" placeholder="0">' +
        '</div>' +
        '<div class="calc-field calc-field--allocation-unit">' +
          '<label>Allocation Type</label>' +
          '<select data-field="allocationUnit">' +
            '<option value="pct"' + (row.allocationUnit === 'pct' ? ' selected' : '') + '>%</option>' +
            '<option value="hours_per_week"' + (row.allocationUnit === 'hours_per_week' ? ' selected' : '') + '>hours per week</option>' +
            '<option value="hours_per_month"' + (row.allocationUnit === 'hours_per_month' ? ' selected' : '') + '>hours per month</option>' +
          '</select>' +
        '</div>'
      )) +
      '<div class="calc-field calc-field--unit-cost">' +
        '<label>Cost (' + sym() + ')</label>' +
        '<input type="number" min="0" step="any" value="' + (row.unitCost || '') + '" data-field="unitCost" placeholder="0">' +
      '</div>' +
      '<div class="calc-field calc-field--cost-unit">' +
        '<label>Cost Basis</label>' +
        '<select data-field="costUnit">' + costUnitOptions(row.costUnit, container.id === 'transitionCosts') + '</select>' +
      '</div>' +
      '<div class="calc-row-footer">' +
        '<p class="calc-row-summary">' + escAttr(recurringRowSummary(row)) + '</p>' +
        '<button type="button" class="btn-remove-row" title="Remove">&times;</button>' +
      '</div>';

    el.querySelector('.btn-remove-row').addEventListener('click', function () {
      rows.splice(index, 1);
      renderRecurringList(container, rows);
      recalculate();
    });

    var inputs = el.querySelectorAll('input, select');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('input', (function (input) {
        return function () {
          var field = input.dataset.field;
          if (!field) return;
          if (input.type === 'number') {
            var val = parseFloat(input.value) || 0;
            // Clamp: no negatives
            if (val < 0) { val = 0; input.value = val; }
            // Clamp: % allocation to [0, 100]
            if (field === 'allocationValue' && row.allocationUnit === 'pct' && val > 100) {
              val = 100; input.value = val;
            }
            row[field] = val;
          } else {
            row[field] = input.value;
          }
          // Re-render if allocationUnit or costUnit changed (max attribute / layout)
          if (field === 'allocationUnit' || field === 'costUnit') {
            // Clamp existing allocation if switching to %
            if (field === 'allocationUnit' && row.allocationUnit === 'pct' && row.allocationValue > 100) {
              row.allocationValue = 100;
            }
            renderRecurringList(container, rows);
          } else {
            var summaryEl = el.querySelector('.calc-row-summary');
            if (summaryEl) summaryEl.textContent = recurringRowSummary(row);
          }
          recalculate();
        };
      })(inputs[i]));
    }

    return el;
  }

  function renderRecurringList(container, rows) {
    container.innerHTML = '';
    for (var i = 0; i < rows.length; i++) {
      container.appendChild(renderRecurringRow(container, rows, i));
    }
  }

  // ── Per-task cost basis options (conditional on resource type) ──
  function perTaskCostUnitOptions(row) {
    var selected = row.costUnit;
    var html = costUnitOptions(selected);
    if (!isPersonType(row.resourceType)) {
      html += '<option value="per_time"' + (selected === 'per_time' ? ' selected' : '') + '>per time</option>';
    }
    return html;
  }

  // ── Per-task allocation unit options (conditional on resource type) ──
  function perTaskAllocationOptions(row) {
    var au = row.allocationUnit;
    var html = '';
    // occurrence(s) only for system and vendor
    if (!isPersonType(row.resourceType)) {
      html += '<option value="occurrences"' + (au === 'occurrences' ? ' selected' : '') + '>occurrence(s)</option>';
    }
    html += '<option value="minutes"' + (au === 'minutes' ? ' selected' : '') + '>minutes</option>';
    html += '<option value="hours"' + (au === 'hours' ? ' selected' : '') + '>hours</option>';
    html += '<option value="days"' + (au === 'days' ? ' selected' : '') + '>days</option>';
    return html;
  }

  // ── Cost Basis select HTML (shared between recurring and per-task) ──
  function costUnitOptions(selected, includeOneTime) {
    var html = '<option value="hourly"' + (selected === 'hourly' ? ' selected' : '') + '>per hour</option>' +
               '<option value="weekly"' + (selected === 'weekly' ? ' selected' : '') + '>per week</option>' +
               '<option value="monthly"' + (selected === 'monthly' ? ' selected' : '') + '>per month</option>' +
               '<option value="annual"' + (selected === 'annual' ? ' selected' : '') + '>per year</option>';
    if (includeOneTime) {
      html += '<option value="one-time"' + (selected === 'one-time' ? ' selected' : '') + '>one-time</option>';
    }
    return html;
  }

  // ── Render: per-task row ──
  function renderPerTaskRow(container, rows, index, annualTaskVol) {
    var row = rows[index];
    var el = document.createElement('div');
    el.className = 'calc-resource-row';

    // occurrence(s) locks cost basis to per time
    var isOccurrence = row.allocationUnit === 'occurrences';
    if (isOccurrence) row.costUnit = 'per_time';

    el.innerHTML =
      '<div class="calc-field calc-field--label">' +
        '<label>Resource / Role</label>' +
        '<input type="text" value="' + escAttr(row.resourceLabel) + '" data-field="resourceLabel" placeholder="e.g. GPT-4o API, DocuSign envelope">' +
      '</div>' +
      '<div class="calc-field calc-field--type">' +
        '<label>Type</label>' +
        '<select data-field="resourceType">' + resourceTypeOptions(row.resourceType) + '</select>' +
      '</div>' +
      '<div class="calc-field calc-field--quantity">' +
        '<label>Quantity</label>' +
        '<input type="number" min="0" value="' + (row.quantity || '') + '" data-field="quantity" placeholder="1">' +
      '</div>' +
      '<div class="calc-field calc-field--allocation">' +
        '<label>Allocation</label>' +
        '<input type="number" min="0" step="any" value="' + (row.allocationValue || '') + '" data-field="allocationValue" placeholder="1">' +
      '</div>' +
      '<div class="calc-field calc-field--allocation-unit">' +
        '<label>Allocation Type</label>' +
        '<select data-field="allocationUnit">' + perTaskAllocationOptions(row) + '</select>' +
      '</div>' +
      '<div class="calc-field calc-field--unit-cost">' +
        '<label>Cost (' + sym() + ')</label>' +
        '<input type="number" min="0" step="any" value="' + (row.unitCost || '') + '" data-field="unitCost" placeholder="0.00">' +
      '</div>' +
      '<div class="calc-field calc-field--cost-unit">' +
        '<label>Cost Basis</label>' +
        '<select data-field="costUnit"' + (isOccurrence ? ' disabled' : '') + '>' + perTaskCostUnitOptions(row) + '</select>' +
      '</div>' +
      '<div class="calc-row-footer">' +
        '<p class="calc-row-summary">' + escAttr(perTaskRowSummary(row, annualTaskVol)) + '</p>' +
        '<button type="button" class="btn-remove-row" title="Remove">&times;</button>' +
      '</div>';

    el.querySelector('.btn-remove-row').addEventListener('click', function () {
      rows.splice(index, 1);
      renderPerTaskList(container, rows, annualTaskVol);
      recalculate();
    });

    var inputs = el.querySelectorAll('input, select');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('input', (function (input) {
        return function () {
          var field = input.dataset.field;
          if (!field) return;
          if (input.type === 'number') {
            var val = parseFloat(input.value) || 0;
            if (val < 0) { val = 0; input.value = val; }
            row[field] = val;
          } else {
            row[field] = input.value;
          }
          // Re-render row if resourceType or allocationUnit changed
          if (field === 'resourceType') {
            if (isPersonType(row.resourceType)) {
              if (row.allocationUnit === 'occurrences') row.allocationUnit = 'minutes';
              if (row.costUnit === 'per_time') row.costUnit = 'hourly';
            }
            renderPerTaskList(container, rows, annualTaskVol);
          } else if (field === 'allocationUnit') {
            renderPerTaskList(container, rows, annualTaskVol);
          } else {
            var summaryEl = el.querySelector('.calc-row-summary');
            if (summaryEl) summaryEl.textContent = perTaskRowSummary(row, annualTaskVol);
          }
          recalculate();
        };
      })(inputs[i]));
    }

    return el;
  }

  function renderPerTaskList(container, rows, annualTaskVol) {
    container.innerHTML = '';
    for (var i = 0; i < rows.length; i++) {
      container.appendChild(renderPerTaskRow(container, rows, i, annualTaskVol));
    }
  }

  // ── Per-task section warnings ──
  function updatePerTaskWarnings() {
    var curHasRows = state.currentState.perTaskCosts.length > 0;
    var curNoVol = !state.currentState.taskVolumeValue;
    $('currentPerTaskWarning').style.display = (curHasRows && curNoVol) ? '' : 'none';

    var futHasRows = state.futureState.perTaskCosts.length > 0;
    var futNoVol = !state.futureState.taskVolumeValue;
    $('futurePerTaskWarning').style.display = (futHasRows && futNoVol) ? '' : 'none';
  }

  function colorize(id, value) {
    var el = $(id).closest('.calc-result-item--directional');
    if (!el) return;
    el.classList.remove('calc-result-item--positive', 'calc-result-item--negative');
    if (value > 0) el.classList.add('calc-result-item--positive');
    else if (value < 0) el.classList.add('calc-result-item--negative');
  }

  // ── Recalculate & update display ──
  function recalculate() {
    var m = calcMetrics();

    $('currentAnnualCostDisplay').textContent = fmt(m.currentAnnualCost);
    $('futureAnnualCostDisplay').textContent = fmt(m.futureAnnualCost);
    $('totalTransitionCostDisplay').textContent = fmt(m.totalTransitionCost);

    $('resultCurrentAnnual').textContent = fmt(m.currentAnnualCost);
    $('resultFutureAnnual').textContent = fmt(m.futureAnnualCost);
    $('resultGrossAnnualSavings').textContent = fmt(m.grossAnnualSavings);
    colorize('resultGrossAnnualSavings', m.grossAnnualSavings);
    $('resultTotalTransition').textContent = fmt(m.totalTransitionCost);
    $('resultNetYear1').textContent = fmt(m.netYear1Value);
    colorize('resultNetYear1', m.netYear1Value);

    $('resultPaybackPeriod').textContent = m.paybackMonths !== null
      ? formatPayback(m.paybackMonths) : '\u2014';

    $('resultROI').textContent = m.roi !== null
      ? (m.roi * 100).toFixed(0) + '%' : '\u2014';
    colorize('resultROI', m.roi);

    var hasTaskVol = state.currentState.taskVolumeValue || state.futureState.taskVolumeValue;
    $('perTaskView').style.display = hasTaskVol ? '' : 'none';
    if (hasTaskVol) {
      $('resultCurrentPerTask').textContent = m.currentCostPerTask !== null ? fmtDecimal(m.currentCostPerTask) : '\u2014';
      $('resultFuturePerTask').textContent = m.futureCostPerTask !== null ? fmtDecimal(m.futureCostPerTask) : '\u2014';
      $('resultSavingsPerTask').textContent = m.savingsPerTask !== null ? fmtDecimal(m.savingsPerTask) : '\u2014';
      colorize('resultSavingsPerTask', m.savingsPerTask);
      $('resultPctImprovement').textContent = m.pctImprovement !== null ? (m.pctImprovement * 100).toFixed(0) + '%' : '\u2014';
      colorize('resultPctImprovement', m.pctImprovement);
    }

    updatePerTaskWarnings();
    updateVolumeSummaries();
  }

  // ── Re-render all resource lists ──
  function rerenderAll() {
    var curTaskVol = annualTaskVolume(state.currentState);
    var futTaskVol = annualTaskVolume(state.futureState);

    renderRecurringList($('currentRecurring'), state.currentState.recurringCosts);
    renderPerTaskList($('currentPerTask'), state.currentState.perTaskCosts, curTaskVol);
    renderRecurringList($('transitionCosts'), state.transition.costs);
    renderRecurringList($('futureRecurring'), state.futureState.recurringCosts);
    renderPerTaskList($('futurePerTask'), state.futureState.perTaskCosts, futTaskVol);
  }

  // ── Toast ──
  function showToast(msg) {
    var existing = document.querySelector('.calc-toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'calc-toast';
    toast.textContent = msg;
    document.body.appendChild(toast);

    requestAnimationFrame(function () { toast.classList.add('calc-toast--visible'); });
    setTimeout(function () {
      toast.classList.remove('calc-toast--visible');
      setTimeout(function () { toast.remove(); }, 300);
    }, 2500);
  }

  // ── Hydrate UI from state ──
  function hydrateUI() {
    $('taskName').value = state.taskName;
    $('currentTaskVolumeValue').value = state.currentState.taskVolumeValue || '';
    $('currentTaskVolumeUnit').value = state.currentState.taskVolumeUnit;
    $('transitionDurationValue').value = state.transition.durationValue;
    $('transitionDurationUnit').value = state.transition.durationUnit;
    $('futureTaskVolumeValue').value = state.futureState.taskVolumeValue || '';
    $('futureTaskVolumeUnit').value = state.futureState.taskVolumeUnit;

    rerenderAll();
    recalculate();
  }

  // ── Share ──
  function shareState() {
    var encoded = encodeState();
    var url = window.location.origin + window.location.pathname + '?p=' + encoded;
    history.replaceState(null, '', url);

    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(function () { showToast('Link copied to clipboard'); });
    } else {
      showToast('URL updated \u2014 copy it from the address bar');
    }

    var m = calcMetrics();
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'calculator_shared',
      referenceId: state.referenceId,
      taskName: String(state.taskName || '').slice(0, 100),
      currency: state.currency,
      currentAnnualCost: m.currentAnnualCost,
      futureAnnualCost: m.futureAnnualCost,
      grossAnnualSavings: m.grossAnnualSavings,
      totalTransitionCost: m.totalTransitionCost,
      netYear1Value: m.netYear1Value,
      recurringCountCurrent: state.currentState.recurringCosts.length,
      perTaskCountCurrent: state.currentState.perTaskCosts.length,
      recurringCountFuture: state.futureState.recurringCosts.length,
      perTaskCountFuture: state.futureState.perTaskCosts.length,
      visitorId: getOrCreateVisitorId()
    });
  }

  // ── Start Over ──
  function startOver() {
    if (!confirm('Are you sure? This will clear everything.')) return;
    state = defaultState();
    history.replaceState(null, '', window.location.pathname);
    hydrateUI();
  }

  // ── Resolve target array from container ID ──
  function resolveTarget(targetId) {
    switch (targetId) {
      case 'currentRecurring': return { rows: state.currentState.recurringCosts, type: 'recurring' };
      case 'currentPerTask': return { rows: state.currentState.perTaskCosts, type: 'perTask' };
      case 'futureRecurring': return { rows: state.futureState.recurringCosts, type: 'recurring' };
      case 'futurePerTask': return { rows: state.futureState.perTaskCosts, type: 'perTask' };
      case 'transitionCosts': return { rows: state.transition.costs, type: 'recurring' };
      default: return null;
    }
  }

  // ── Init ──
  function init() {
    var params = new URLSearchParams(window.location.search);
    var ref = params.get('ref');
    if (ref) {
      state.referenceId = ref;
    }
    var p = params.get('p');
    if (p) {
      var decoded = decodeState(p);
      if (decoded) {
        state = decoded;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'calculator_loaded',
          referenceId: state.referenceId,
          taskName: String(state.taskName || '').slice(0, 100),
          currency: state.currency,
          visitorId: getOrCreateVisitorId()
        });
      }
    }

    hydrateUI();

    $('taskName').addEventListener('input', function () { state.taskName = this.value; });

    $('currentTaskVolumeValue').addEventListener('input', function () {
      state.currentState.taskVolumeValue = parseFloat(this.value) || null;
      if (!$('futureTaskVolumeValue').value) {
        state.futureState.taskVolumeValue = state.currentState.taskVolumeValue;
        $('futureTaskVolumeValue').placeholder = state.currentState.taskVolumeValue || 'e.g. 20';
      }
      renderPerTaskList($('currentPerTask'), state.currentState.perTaskCosts, annualTaskVolume(state.currentState));
      recalculate();
    });

    $('currentTaskVolumeUnit').addEventListener('change', function () {
      state.currentState.taskVolumeUnit = this.value;
      renderPerTaskList($('currentPerTask'), state.currentState.perTaskCosts, annualTaskVolume(state.currentState));
      recalculate();
    });

    $('transitionDurationValue').addEventListener('input', function () {
      state.transition.durationValue = parseFloat(this.value) || 0;
      recalculate();
    });

    $('transitionDurationUnit').addEventListener('change', function () {
      state.transition.durationUnit = this.value;
      recalculate();
    });

    $('futureTaskVolumeValue').addEventListener('input', function () {
      state.futureState.taskVolumeValue = parseFloat(this.value) || null;
      renderPerTaskList($('futurePerTask'), state.futureState.perTaskCosts, annualTaskVolume(state.futureState));
      recalculate();
    });

    $('futureTaskVolumeUnit').addEventListener('change', function () {
      state.futureState.taskVolumeUnit = this.value;
      renderPerTaskList($('futurePerTask'), state.futureState.perTaskCosts, annualTaskVolume(state.futureState));
      recalculate();
    });

    var addButtons = document.querySelectorAll('.btn-add');
    for (var i = 0; i < addButtons.length; i++) {
      addButtons[i].addEventListener('click', (function (btn) {
        return function () {
          var targetId = btn.dataset.target;
          var target = resolveTarget(targetId);
          if (!target) return;

          var container = $(targetId);
          if (target.type === 'recurring') {
            target.rows.push(defaultRecurringRow());
            renderRecurringList(container, target.rows);
          } else {
            var block = targetId.indexOf('current') === 0 ? state.currentState : state.futureState;
            target.rows.push(defaultPerTaskRow());
            renderPerTaskList(container, target.rows, annualTaskVolume(block));
          }
          recalculate();
        };
      })(addButtons[i]));
    }

    $('btnCopyFrequency').addEventListener('click', function () {
      if (state.currentState.taskVolumeValue) {
        state.futureState.taskVolumeValue = state.currentState.taskVolumeValue;
        $('futureTaskVolumeValue').value = state.futureState.taskVolumeValue;
      }
      state.futureState.taskVolumeUnit = state.currentState.taskVolumeUnit;
      $('futureTaskVolumeUnit').value = state.futureState.taskVolumeUnit;
      recalculate();
    });

    $('btnCopyRecurring').addEventListener('click', function () {
      state.futureState.recurringCosts = JSON.parse(JSON.stringify(state.currentState.recurringCosts));
      renderRecurringList($('futureRecurring'), state.futureState.recurringCosts);
      recalculate();
    });

    $('btnCopyPerTask').addEventListener('click', function () {
      state.futureState.perTaskCosts = JSON.parse(JSON.stringify(state.currentState.perTaskCosts));
      renderPerTaskList($('futurePerTask'), state.futureState.perTaskCosts, annualTaskVolume(state.futureState));
      recalculate();
    });

    $('btnShare').addEventListener('click', shareState);
    $('btnStartOver').addEventListener('click', startOver);

    window.setReferenceId = function (id) {
      state.referenceId = id;
      console.log('referenceId set: ' + id);
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
