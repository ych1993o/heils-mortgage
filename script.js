// ===== i18n Translations =====
const translations = {
    en: {
        title: "Mortgage Calculator",
        ad_text: "Advertisement",
        calculator_title: "Mortgage Payment Calculator",
        calculator_subtitle: "Calculate your monthly mortgage payments",
        loan_amount: "Loan Amount",
        loan_amount_hint: "Auto-calculated: Property Price - Down Payment",
        property_price: "Property Price",
        down_payment: "Down Payment",
        down_payment_hint: "20% of loan amount recommended",
        interest_rate: "Interest Rate",
        loan_term: "Loan Term",
        years: "years",
        payment_method: "Payment Method",
        equal_payment: "Equal Payment",
        equal_principal: "Equal Principal",
        currency: "Currency",
        calculate: "Calculate",
        results_title: "Calculation Results",
        monthly_payment: "Monthly Payment",
        total_loan: "Loan Amount",
        total_interest: "Total Interest",
        total_payment: "Total Payment",
        payoff_date: "Payoff Date",
        payment_breakdown: "Payment Breakdown",
        principal: "Principal",
        interest: "Interest",
        amortization_schedule: "Amortization Schedule",
        month: "Month",
        payment: "Payment",
        principal_col: "Principal",
        interest_col: "Interest",
        balance: "Balance",
        show_full_schedule: "Show Full Schedule",
        hide_full_schedule: "Hide Full Schedule",
        how_it_works: "How Mortgage Calculation Works",
        how_it_works_content: `<p>A mortgage calculator helps you estimate your monthly mortgage payments based on the loan amount, interest rate, and loan term. The most common type is the equal payment method (amortization), where you pay the same amount each month.</p>
        <p><strong>Equal Payment:</strong> Your monthly payment stays the same throughout the loan term. Early payments go mostly toward interest, while later payments go more toward principal.</p>
        <p><strong>Equal Principal:</strong> Your principal payment stays the same each month, but the total payment decreases over time as the interest portion shrinks.</p>`,
        tips_title: "Mortgage Tips",
        tip1: "A larger down payment reduces your loan amount and monthly payments.",
        tip2: "Even a 0.5% lower interest rate can save you thousands over the loan term.",
        tip3: "Shorter loan terms mean higher monthly payments but less total interest.",
        tip4: "Consider additional costs: property tax, insurance, PMI, and HOA fees.",
        tip5: "Making extra payments can significantly reduce your total interest.",
        formula_title: "Calculation Formula",
        equal_payment_formula: "Equal Payment Formula:",
        formula_desc: "Where M = monthly payment, P = principal, r = monthly interest rate, n = total number of months",
        faq_title: "Frequently Asked Questions",
        faq1_q: "What is a mortgage calculator?",
        faq1_a: "A mortgage calculator is a tool that helps you estimate your monthly mortgage payments based on the loan amount, interest rate, and loan term.",
        faq2_q: "What is the difference between equal payment and equal principal?",
        faq2_a: "Equal payment (equal installments) keeps your monthly payment constant. Equal principal keeps the principal portion constant, so total payments decrease over time.",
        faq3_q: "Does this calculator include property tax and insurance?",
        faq3_a: "No, this calculator only computes the principal and interest. You should add property tax, insurance, and other fees separately.",
        faq4_q: "How accurate is this calculator?",
        faq4_a: "This calculator provides estimates based on standard formulas. Actual payments may vary depending on your lender's terms and conditions.",
        footer_disclaimer: "Disclaimer: This calculator is for reference only. Please consult your lender for exact figures.",
        footer_rights: "All rights reserved.",
        about: "About",
        contact: "Contact",
        privacy_policy: "Privacy Policy",
        terms: "Terms"
    },
    zh: {
        title: "房贷计算器",
        ad_text: "广告",
        calculator_title: "房贷月供计算器",
        calculator_subtitle: "计算您的每月房贷还款额",
        property_price: "房屋总价",
        loan_amount: "贷款金额",
        loan_amount_hint: "自动计算：房屋总价 - 首付金额",
        down_payment: "首付金额",
        down_payment_hint: "建议首付比例为20%",
        interest_rate: "年利率",
        loan_term: "贷款年限",
        years: "年",
        payment_method: "还款方式",
        equal_payment: "等额本息",
        equal_principal: "等额本金",
        currency: "货币",
        calculate: "开始计算",
        results_title: "计算结果",
        monthly_payment: "每月还款",
        total_loan: "贷款金额",
        total_interest: "总利息",
        total_payment: "还款总额",
        payoff_date: "还清日期",
        payment_breakdown: "还款构成",
        principal: "本金",
        interest: "利息",
        amortization_schedule: "还款明细表",
        month: "期数",
        payment: "还款额",
        principal_col: "本金",
        interest_col: "利息",
        balance: "剩余本金",
        show_full_schedule: "显示全部明细",
        hide_full_schedule: "收起明细",
        how_it_works: "房贷计算原理",
        how_it_works_content: `<p>房贷计算器根据贷款金额、利率和贷款期限，帮您估算每月的还款额。最常见的是等额本息还款方式，即每月还款金额相同。</p>
        <p><strong>等额本息：</strong>每月还款金额不变，前期还款中利息占比较大，后期本金占比逐渐增大。</p>
        <p><strong>等额本金：</strong>每月偿还的本金不变，利息随剩余本金递减，因此每月总还款额逐月递减。</p>`,
        tips_title: "房贷小贴士",
        tip1: "首付比例越高，贷款金额和月供越低。",
        tip2: "利率每降低0.5%，整个贷款期内可节省数千元利息。",
        tip3: "贷款期限越短，月供越高，但总利息越少。",
        tip4: "还需考虑额外费用：房产税、保险费、PMI和物业费等。",
        tip5: "提前还款可以显著减少总利息支出。",
        formula_title: "计算公式",
        equal_payment_formula: "等额本息公式：",
        formula_desc: "其中 M = 每月还款额，P = 贷款本金，r = 月利率，n = 还款总月数",
        faq_title: "常见问题",
        faq1_q: "什么是房贷计算器？",
        faq1_a: "房贷计算器是一种工具，可根据贷款金额、利率和贷款期限，帮您估算每月的房贷还款额。",
        faq2_q: "等额本息和等额本金有什么区别？",
        faq2_a: "等额本息每月还款金额固定不变。等额本金每月偿还本金固定，利息递减，因此总还款额逐月递减。",
        faq3_q: "这个计算器包含房产税和保险吗？",
        faq3_a: "不包含，本计算器仅计算本金和利息。房产税、保险费等其他费用需要您另行计算。",
        faq4_q: "这个计算器的结果准确吗？",
        faq4_a: "本计算器基于标准公式提供估算值。实际还款额可能因贷款机构的具体条款而有所不同。",
        footer_disclaimer: "免责声明：本计算器仅供参考，具体数据请咨询您的贷款机构。",
        footer_rights: "保留所有权利。",
        about: "关于我们",
        contact: "联系我们",
        privacy_policy: "隐私政策",
        terms: "服务条款"
    }
};

// ===== Currency Symbols =====
const currencySymbols = {
    USD: '$',
    CNY: '¥',
    EUR: '€',
    GBP: '£',
    AUD: 'A$',
    CAD: 'C$',
    JPY: '¥',
    SGD: 'S$'
};

// ===== Currency Formatting =====
function formatCurrency(amount, currency) {
    const symbol = currencySymbols[currency] || '$';
    const isJPY = currency === 'JPY';
    const formatted = isJPY 
        ? Math.round(amount).toLocaleString('en-US')
        : amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return symbol + formatted;
}

// ===== Current Language =====
let currentLang = 'en';
let currentMethod = 'equal-payment';

// ===== Language Switching =====
function switchLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    
    // Update all i18n elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Handle HTML content keys
            if (key === 'how_it_works_content') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Save preference
    try {
        localStorage.setItem('preferred-lang', lang);
    } catch(e) {}
    
    // Update title
    document.title = translations[lang].title + ' | ' + (lang === 'zh' ? 'Mortgage Calculator' : '房贷计算器');
    
    // Re-render results if visible
    if (document.getElementById('resultsCard').style.display !== 'none') {
        calculateMortgage();
    }
}

// ===== Mortgage Calculation =====
function calculateMortgage() {
    // Get input values
    const propertyPrice = parseFloat(document.getElementById('propertyPrice').value) || 0;
    const downPayment = parseFloat(document.getElementById('downPayment').value) || 0;
    const annualRate = parseFloat(document.getElementById('interestRate').value) || 0;
    const loanTermYears = parseInt(document.getElementById('loanTerm').value) || 30;
    const currency = document.getElementById('currency').value;
    
    // Calculate loan principal (property price - down payment)
    const principal = Math.max(0, propertyPrice - downPayment);
    
    if (principal <= 0) {
        alert(currentLang === 'zh' ? '贷款金额必须大于零！请检查首付金额。' : 'Loan amount must be greater than zero! Please check down payment.');
        return;
    }
    
    // Monthly interest rate
    const monthlyRate = annualRate / 100 / 12;
    const totalMonths = loanTermYears * 12;
    
    let schedule = [];
    let totalInterest = 0;
    let totalPayment = 0;
    let monthlyPayment = 0;
    
    if (currentMethod === 'equal-payment') {
        // Equal Payment (等额本息)
        if (monthlyRate === 0) {
            monthlyPayment = principal / totalMonths;
        } else {
            monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                             (Math.pow(1 + monthlyRate, totalMonths) - 1);
        }
        
        let balance = principal;
        for (let i = 1; i <= totalMonths; i++) {
            const interest = balance * monthlyRate;
            const principalPayment = monthlyPayment - interest;
            balance = Math.max(0, balance - principalPayment);
            totalInterest += interest;
            
            schedule.push({
                month: i,
                payment: monthlyPayment,
                principal: principalPayment,
                interest: interest,
                balance: balance
            });
        }
        totalPayment = monthlyPayment * totalMonths;
        
    } else {
        // Equal Principal (等额本金)
        const monthlyPrincipal = principal / totalMonths;
        let balance = principal;
        
        for (let i = 1; i <= totalMonths; i++) {
            const interest = balance * monthlyRate;
            const payment = monthlyPrincipal + interest;
            balance = Math.max(0, balance - monthlyPrincipal);
            totalInterest += interest;
            
            schedule.push({
                month: i,
                payment: payment,
                principal: monthlyPrincipal,
                interest: interest,
                balance: balance
            });
        }
        
        monthlyPayment = schedule[0].payment; // First month payment (highest)
        totalPayment = principal + totalInterest;
    }
    
    // Calculate payoff date
    const payoffDate = new Date();
    payoffDate.setMonth(payoffDate.getMonth() + totalMonths);
    const dateOptions = currentLang === 'zh' 
        ? { year: 'numeric', month: 'long' }
        : { year: 'numeric', month: 'long' };
    const payoffDateStr = payoffDate.toLocaleDateString(currentLang === 'zh' ? 'zh-CN' : 'en-US', dateOptions);
    
    // Display results
    document.getElementById('resultsCard').style.display = 'block';
    
    // For equal principal, show first month payment with note
    const monthlyPaymentDisplay = currentMethod === 'equal-principal'
        ? formatCurrency(monthlyPayment, currency) + ' ↓'
        : formatCurrency(monthlyPayment, currency);
    
    document.getElementById('monthlyPayment').textContent = monthlyPaymentDisplay;
    document.getElementById('totalLoan').textContent = formatCurrency(principal, currency);
    document.getElementById('totalInterest').textContent = formatCurrency(totalInterest, currency);
    document.getElementById('totalPayment').textContent = formatCurrency(totalPayment, currency);
    document.getElementById('payoffDate').textContent = payoffDateStr;
    
    // Update chart
    const principalPercent = (principal / totalPayment * 100);
    const interestPercent = (totalInterest / totalPayment * 100);
    
    document.getElementById('principalBar').style.width = principalPercent + '%';
    document.getElementById('interestBar').style.width = interestPercent + '%';
    document.getElementById('principalPercent').textContent = principalPercent.toFixed(1) + '%';
    document.getElementById('interestPercent').textContent = interestPercent.toFixed(1) + '%';
    
    // Render amortization schedule
    renderSchedule(schedule, currency);
    
    // Scroll to results
    document.getElementById('resultsCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== Render Amortization Schedule =====
function renderSchedule(schedule, currency) {
    const tbody = document.querySelector('#amortizationTable tbody');
    tbody.innerHTML = '';
    
    schedule.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.month}</td>
            <td>${formatCurrency(row.payment, currency)}</td>
            <td>${formatCurrency(row.principal, currency)}</td>
            <td>${formatCurrency(row.interest, currency)}</td>
            <td>${formatCurrency(row.balance, currency)}</td>
        `;
        tbody.appendChild(tr);
    });
}

// ===== Update Currency Symbols =====
function updateCurrencySymbols() {
    const currency = document.getElementById('currency').value;
    const symbol = currencySymbols[currency] || '$';
    const symbol1 = document.getElementById('currencySymbol1');
    const symbol2 = document.getElementById('currencySymbol2');
    if (symbol1) symbol1.textContent = symbol;
    if (symbol2) symbol2.textContent = symbol;
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    let savedLang = 'en';
    try {
        savedLang = localStorage.getItem('preferred-lang') || 'en';
    } catch(e) {}
    
    // Detect browser language
    if (!savedLang) {
        const browserLang = navigator.language || navigator.userLanguage;
        savedLang = browserLang.startsWith('zh') ? 'zh' : 'en';
    }
    
    switchLanguage(savedLang);
    
    // Language button events
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });
    
    // Method toggle events
    document.querySelectorAll('.method-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.method-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentMethod = this.dataset.method;
        });
    });
    
    // Calculate button
    document.getElementById('calculateBtn').addEventListener('click', calculateMortgage);
    
    // Currency change - update symbols
    document.getElementById('currency').addEventListener('change', updateCurrencySymbols);
    
    // Enter key to calculate
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateMortgage();
            }
        });
    });
    
    // Toggle schedule
    document.getElementById('toggleSchedule').addEventListener('click', function() {
        const wrapper = document.querySelector('.table-wrapper');
        wrapper.classList.toggle('expanded');
        const isExpanded = wrapper.classList.contains('expanded');
        this.textContent = isExpanded 
            ? translations[currentLang].hide_full_schedule 
            : translations[currentLang].show_full_schedule;
    });
    
    // FAQ toggle
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            this.parentElement.classList.toggle('active');
        });
    });
    
    // Auto-calculate on load
    updateCurrencySymbols();
    calculateMortgage();
});
